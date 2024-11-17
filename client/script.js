// Global variables
let web3;
let contractInstance;

// Configuration
const CONFIG = {
    contractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3'
};

// DOM Elements
const elements = {
    connectionStatus: document.getElementById('connectionStatus'),
    registerForm: document.getElementById('registerForm')
};

// Load contract ABI from JSON file
async function loadContractABI() {
    try {
        const response = await fetch('../build/contracts/CertificateRegistry.json');
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
            // Load contract ABI
            const contractABI = await loadContractABI();
            
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Initialize Web3
            web3 = new Web3(window.ethereum);
            
            // Get the current account
            const accounts = await web3.eth.getAccounts();
            const currentAccount = accounts[0];
            
            // Initialize contract instance
            contractInstance = new web3.eth.Contract(
                contractABI,
                CONFIG.contractAddress
            );
            
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

// Form submission handler
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

// Initialize DApp when page loads
document.addEventListener('DOMContentLoaded', initDApp);