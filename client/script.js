// Global variables
let web3;
let contractInstance;

// Configuration - You'll need to update this address after deploying your contract
const CONFIG = {
    contractAddress: '0xf8c107958940aA3741F6fca3504C7bB7EB2A658b' // Replace with your deployed contract address
};

// DOM Elements
const elements = {
    connectionStatus: document.getElementById('connectionStatus'),
    registerForm: document.getElementById('registerForm'),
    verifyBtn: document.getElementById('verifyBtn'),
    verifyCertId: document.getElementById('verifyCertId'),
    verificationResult: document.getElementById('verificationResult')
};

// Load contract ABI from JSON file
async function loadContractABI() {
    try {
        const response = await fetch('/build/contracts/CertificateRegistry.json');
        const contractJson = await response.json();
        return contractJson.abi;
    } catch (error) {
        console.error('Error loading contract ABI:', error);
        throw new Error('Failed to load contract ABI');
    }
}

// Initialize the DApp
async function initDApp() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Initialize Web3
            web3 = new Web3(window.ethereum);
            
            // Load contract ABI
            const contractABI = await loadContractABI();
            
            if (!CONFIG.contractAddress) {
                throw new Error('Please set the contract address in CONFIG');
            }
            
            // Initialize contract instance
            contractInstance = new web3.eth.Contract(contractABI, CONFIG.contractAddress);
            
            // Get the current account
            const accounts = await web3.eth.getAccounts();
            const currentAccount = accounts[0];
            
            // Update UI
            updateConnectionStatus('Connected', currentAccount);
            console.log('DApp initialized successfully');
            
            // Setup event listeners for account changes
            window.ethereum.on('accountsChanged', handleAccountChange);
            window.ethereum.on('chainChanged', () => window.location.reload());
            
        } catch (error) {
            console.error("Error initializing DApp:", error);
            updateConnectionStatus('Error', null, error.message);
        }
    } else {
        const message = "Please install MetaMask to use this DApp!";
        console.error(message);
        updateConnectionStatus('Error', null, message);
    }
}

// Handle account changes
async function handleAccountChange(accounts) {
    if (accounts.length === 0) {
        updateConnectionStatus('Disconnected');
    } else {
        updateConnectionStatus('Connected', accounts[0]);
    }
}

// Update connection status in UI
function updateConnectionStatus(status, account = null, errorMessage = '') {
    let statusHTML = '';
    
    switch (status) {
        case 'Connected':
            statusHTML = `
                <strong>Status:</strong> Connected
                <br>
                <strong>Account:</strong> ${account}
            `;
            elements.connectionStatus.className = 'alert alert-success';
            break;
            
        case 'Disconnected':
            statusHTML = 'Wallet disconnected. Please connect your wallet.';
            elements.connectionStatus.className = 'alert alert-warning';
            break;
            
        case 'Error':
            statusHTML = `Error: ${errorMessage}`;
            elements.connectionStatus.className = 'alert alert-danger';
            break;
            
        default:
            statusHTML = 'Please connect your wallet...';
            elements.connectionStatus.className = 'alert alert-info';
    }
    
    elements.connectionStatus.innerHTML = statusHTML;
}

// Register certificate
async function registerCertificate(id, name, achievement) {
    if (!contractInstance) {
        throw new Error('DApp not initialized');
    }

    const accounts = await web3.eth.getAccounts();
    if (!accounts || accounts.length === 0) {
        throw new Error('No account found. Please connect MetaMask.');
    }

    console.log('Registering certificate...', { id, name, achievement });

    try {
        const result = await contractInstance.methods
            .registerCertificate(id, name, achievement)
            .send({
                from: accounts[0],
                gas: 200000
            });

        console.log('Transaction result:', result);
        return result;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Verify certificate
async function verifyCertificate(id) {
    if (!contractInstance) {
        throw new Error('DApp not initialized');
    }

    try {
        const result = await contractInstance.methods
            .verifyCertificate(id)
            .call();

        return {
            isValid: result[0],
            name: result[1],
            achievement: result[2],
            timestamp: new Date(result[3] * 1000).toLocaleString()
        };
    } catch (error) {
        console.error('Verification error:', error);
        throw error;
    }
}

// Form submission handler for registration
elements.registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        id: document.getElementById('certId').value,
        name: document.getElementById('name').value,
        achievement: document.getElementById('achievement').value
    };

    try {
        await registerCertificate(formData.id, formData.name, formData.achievement);
        alert('Certificate registered successfully!');
        elements.registerForm.reset();
    } catch (error) {
        alert(`Error registering certificate: ${error.message}`);
    }
});

// Verification button handler
elements.verifyBtn.addEventListener('click', async () => {
    const certId = elements.verifyCertId.value;
    
    try {
        const certInfo = await verifyCertificate(certId);
        
        let resultHTML = `
            <div class="alert ${certInfo.isValid ? 'alert-success' : 'alert-warning'}">
                <strong>Certificate Status:</strong> ${certInfo.isValid ? 'Valid' : 'Invalid'}
                <br>
                <strong>Name:</strong> ${certInfo.name}
                <br>
                <strong>Achievement:</strong> ${certInfo.achievement}
                <br>
                <strong>Timestamp:</strong> ${certInfo.timestamp}
            </div>
        `;
        
        elements.verificationResult.innerHTML = resultHTML;
    } catch (error) {
        elements.verificationResult.innerHTML = `
            <div class="alert alert-danger">
                Error verifying certificate: ${error.message}
            </div>
        `;
    }
});

// Connect wallet button (optional, for explicit connection)
function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(initDApp)
            .catch(error => {
                console.error('Failed to connect wallet:', error);
                updateConnectionStatus('Error', null, error.message);
            });
    } else {
        alert('Please install MetaMask!');
    }
}

// Initialize DApp when page loads
document.addEventListener('DOMContentLoaded', initDApp);