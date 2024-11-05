# Introduction to Blockchain Technology
BlockChain Guide for Community

## Lets Break Down Some Blockchain Buzzwords

### Decentralization
Decentralization refers to distributing functions across multiple units, forming an interconnected system without a single entity holding complete authority. This architecture distributes workloads both hardware and software among various workstations.

### Cryptocurrency
Cryptocurrency is a digital or virtual currency that uses cryptography to encrypt its transactions and regulate the creation of new units. They are often traded on decentralized exchanges and can also be used to purchase goods and services. 

### Bitcoin & Etherium
- Bitcoin is a decentralized digital currency that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public dispersed ledger called a blockchain.
- Ethereum is also a decentralized digital currency, but it goes beyond being just a payment system. It is also a platform that allows developers to build and run decentralized applications (dapps). These dapps can be used to create anything from smart contracts to Decentralized Autonomous Organizations (DAOs). 

### Peer-to-Peer (P2P) 
A decentralized network architecture where participants (peers) interact directly without a central authority, enhancing resilience and efficiency.

### Hash Function
A mathematical algorithm that transforms input data into a fixed-size string of characters, serving as a digital fingerprint for data integrity.

### Proof of Work
For adding block into the chain, proof of work is needed. miner need to solve tough math calculation to mine the block and this needs huge energy and time consumption. After this also, miners verifies that block is not compromised. That’s why it becomes futile for hackers to try breaching the blockchain.

### Proof of Stake (PoS)
A consensus algorithm that allows participants to validate transactions based on the number of coins they hold, promoting energy efficiency compared to traditional mining.

### Blockchain Wallet
A blockchain wallet is a digital wallet that allows you to store, send, and receive cryptocurrencies like bitcoin and Ethereum. Blockchain wallets are similar to traditional bank accounts in that they allow users to easily transfer funds between their various accounts.

## What is Blockchain ?

Blockchain is a distributed, immutable digital ledger that records transactions across a network of computers. Think of it as a chain of blocks, where each block contains a list of transactions and is cryptographically linked to the previous block, creating an unbreakable chain of information.

Blockchain is a record-keeping and contract-enforcement technology that uses cryptography to make it difficult to change previous history. It allows participants to share workstreams by tracking changes on a shared ledger. Blockchain is like a digital notebook that everyone in a group can see and agree on, but no one can change once something is written down. Imagine it as a line of locked boxes, where each box holds a list of transactions (like records of who paid who). Each new box is securely connected to the one before it, making a long, unbreakable chain of these boxes — this is the "blockchain."

IMG

### Key Characteristics

1. **Decentralized**: Unlike traditional systems where data is stored in a central location, blockchain distributes identical copies of the ledger across multiple computers (nodes) in the network.

2. **Immutable**: Once data is recorded in a block and added to the chain, it cannot be altered without changing all subsequent blocks – making it practically impossible to tamper with.

3. **Transparent**: All transactions are visible to network participants, creating a system of trust through transparency.

4. **Secure**: Advanced cryptography and consensus mechanisms protect the network from unauthorized access and manipulation.

## Why not use a Centralized Database ?

Imagine a group project where a team of students needs to track their tasks and progress in one shared spreadsheet. In this setup, they use a single, centralized spreadsheet that all members (like the researcher, writer, designer, and presenter) update as they complete their tasks.

This centralized spreadsheet has advantages: everyone has the same information in real-time, and there's a group leader who controls access and ensures everyone is following the same process. Because they all rely on this one spreadsheet, the whole team has a consistent view of the project’s status. But for this to work smoothly, each member must trust that the leader won’t secretly change any completed tasks or historical data without telling the others.

IMG

## Distributed Database

Imagine if each team member in the group project had their own personal copy of the shared spreadsheet instead of using one centralized version. In this setup, each member—the researcher, writer, designer, and presenter—keeps their own version of the spreadsheet and updates it as they complete tasks. The updates are then synchronized among all copies so that everyone eventually has the same, up-to-date information.

IMG

This distributed setup has its advantages. Each member can customize their own spreadsheet to fit their workflow and easily control access within their copy. But it also comes with challenges: any change one member makes needs to be synced across everyone else's copy. If there’s a syncing error or a conflict (like two people updating the same task differently), it can create data issues that take extra time to resolve.

## Distributed Ledger

Blockchain technology is like a shared, digital record book, called a *Distributed ledger*, that keeps a history of all transactions. Just as an accounting ledger shows every transaction that affects the total balance, a blockchain ledger records every transaction that affects the final state of information.

IMG

Returning to the group project example: instead of one centralized spreadsheet or individual copies that need constant syncing, blockchain allows each team member to keep an identical copy of the project’s progress in a way that automatically updates for everyone without needing a central owner. Once a task is marked as complete, it gets locked in the shared ledger for everyone, and no one can change it—only new tasks or changes can be added on top. This creates a consistent, unchangeable record of project progress that everyone trusts and follows.


## How Does BlockChain Work

A blockchain transaction starts when someone initiates it, and the information is encrypted and sent to a network of computers (nodes) to verify it. Once verified, the transaction joins a group of other approved transactions to form a new block. The network then agrees on which block to add, and the selected node, or “miner,” earns a reward. The block is then linked to the previous one, forming a secure chain. Once added, the transaction is complete, and the details are permanently stored for anyone to view.

![Blockchain Working by Geek for Geeks](https://github.com/user-attachments/assets/a8fad7ef-17ae-4f87-8871-2dd38503d785)

1. **Initiating a Transaction**: A new transaction is created and enters the blockchain network. The details are encrypted using public and private keys for security.

2. **Verification of Transaction**: The transaction is sent to multiple peer-to-peer computers (nodes) worldwide. These nodes check if the transaction is valid, like confirming if there’s enough balance.

3. **Formation of a New Block**: Verified transactions are collected in a "mempool" by each node. These mempools then group together to form a new block.

4. **Consensus Algorithm**: Nodes use a consensus mechanism to decide which block to add next, ensuring everyone agrees on the latest valid block. The node that successfully adds a block (a “miner”) receives a reward.

5. **Addition of the New Block to the Blockchain**: Once the block gets a unique hash value, it is added to the blockchain. Each block links to the previous one through its hash, creating a secure chain.

6. **Transaction Complete**: After the block is added, the transaction is finished. The record is stored permanently, and anyone can look it up to confirm.

## Prererequisites for BlockChain

We can build a Blockchain App

<img width="1134" alt="blockchain-app-diagram" src="https://github.com/user-attachments/assets/5a1b6dc1-9148-405b-a26a-9653febee133">

To access the application, you use your browser to connect to a front end website written in HTML, CSS, and JS.

Then, instead of talking to a backend web server, this website talks directly to the blockchain. This is where all of the code and data and code for the application live.

This code is contained in Smart Contracts, written in with the Solidity Programming language, which looks a lot like JavaScript. These smart contracts are immutable, which means the the code cannot change.

All of the data is stored on the public ledger, which is also immutable. Any time we add new data to the blockchain, it will be permanent publicly verifiable.

This is an instant cryptocurrency exchange called "EthSwap" that lets you buy and sell cyrptocurrencies at a fixed price.

We'll create a fictional cryptocurrency called "Dapp Token" together, which can be purchased with Ether, the native cryptocurrency of the Ethereum blockchain.

We'll create a client side website that with React.js that talks directly to two Ethereum smart contracts on the blockchain:

- The first smart contract "EthSwap" will facilitate buying and selling cryptocurrencies.
- The second smart contract will power the fictional "DApp Token" that we'll create together.

We'll code each of these smart contracts with the Solidity programming language, write test for them in JavaScript, and deploy them to the blockchain.

Fwew! We have covered a lot of ground so far. Don't worry if it all doesn't make sense just yet. Keep going, and it will become clear in time.

Sure, here's a detailed guide on setting up a blockchain project, with steps for both Windows, macOS, and Linux:

## Setting up a Blockchain Project

This guide will walk you through the steps to set up a blockchain project, covering the necessary software and tools for both Windows, macOS, and Linux operating systems.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js**: Blockchain projects often use JavaScript, and Node.js provides the runtime environment. You can download it from the official website: [https://nodejs.org](https://nodejs.org)
- **Git**: This version control system is widely used in software development, including blockchain projects. You can download it from the official website: [https://git-scm.com](https://git-scm.com)

### Setting up the Project

1. **Choose a Blockchain Platform**: Select the blockchain platform you want to work with, such as Ethereum, Hyperledger, or Corda. Each platform has its own set of tools and libraries, so the setup process may vary slightly.

2. **Set up the Development Environment**:

   **Windows:**
   - Install the required blockchain platform's development tools. For example, if you're using Ethereum, you can install Truffle and Ganache from their official websites.
   - Set up your preferred code editor, such as Visual Studio Code.

   **macOS/Linux:**
   - Install the required blockchain platform's development tools using a package manager like `apt-get` (Ubuntu), `yum` (CentOS), or `brew` (macOS).
   - Set up your preferred code editor, such as Visual Studio Code.

3. **Create a New Project**:

   - Open a terminal or command prompt and navigate to the directory where you want to create your project.
   - Initialize a new Git repository by running `git init`.
   - Create a new project directory, for example, `mkdir blockchain`.
   - Change to the project directory: `cd blockchain`.

4. **Install Project Dependencies**:

   - Initialize a new Node.js project by running `npm init -y`. This will create a `package.json` file in your project directory.
   - Install the required blockchain platform's SDK or library. For example, if you're using Ethereum, you can install the `web3.js` library by running `npm install web3`.
   - Install any other necessary dependencies, such as testing frameworks or development tools, based on your project requirements.

5. **Set up the Blockchain Network**:

   - Depending on the blockchain platform you're using, you'll need to set up a local development network or connect to a public network.
   - For Ethereum, you can use Ganache to create a local development blockchain. For other platforms, refer to their respective documentation for setting up the development environment.

6. **Write and Test your Blockchain Code**:

   - Create your smart contracts, dApps, or other blockchain-related code in your preferred code editor.
   - Write tests to ensure the correctness and reliability of your code. Many blockchain platforms provide testing frameworks like Truffle for Ethereum.
   - Run the tests and debug any issues that arise.

7. **Deploy and Interact with your Blockchain Project**:

   - Once your code is ready, deploy it to the blockchain network you set up earlier.
   - Interact with your deployed contracts or dApps using the platform's provided tools or APIs.

8. **Maintain and Update your Project**:

   - Keep your project up-to-date with the latest platform updates and security patches.
   - Continuously test and monitor your blockchain application to ensure its stability and performance.
   - Collaborate with other developers, if necessary, using Git for version control and code sharing.

Sure, here's the same information in Markdown format with code snippets:

### Building a Blockchain Token Exchange

#### Part 1: Set up the Project

1. Create a new directory for your project and navigate to it in your terminal.
2. Initialize a new Node.js project with:

   ```
   npm init -y
   ```

3. Install the necessary dependencies:

   ```
   npm install web3 identicon.js
   ```

#### Part 2: Create the Smart Contracts

1. Create a new Truffle project with:

   ```
   truffle init
   ```

2. Create a `Token.sol` contract that represents the ERC-20 token:

   ```solidity
   pragma solidity ^0.5.0;

   contract Token {
       string public name;
       string public symbol;
       uint256 public decimals;
       uint256 public totalSupply;

       mapping(address => uint256) public balanceOf;
       mapping(address => mapping(address => uint256)) public allowance;

       event Transfer(address indexed from, address indexed to, uint256 value);
       event Approval(address indexed owner, address indexed spender, uint256 value);

       constructor(
           string memory _name,
           string memory _symbol,
           uint256 _decimals,
           uint256 _totalSupply
       ) public {
           name = _name;
           symbol = _symbol;
           decimals = _decimals;
           totalSupply = _totalSupply * 10 ** decimals;
           balanceOf[msg.sender] = totalSupply;
       }

       function transfer(address _to, uint256 _value) public returns (bool success) {
           require(balanceOf[msg.sender] >= _value, "Insufficient balance");
           balanceOf[msg.sender] -= _value;
           balanceOf[_to] += _value;
           emit Transfer(msg.sender, _to, _value);
           return true;
       }

       function approve(address _spender, uint256 _value) public returns (bool success) {
           allowance[msg.sender][_spender] = _value;
           emit Approval(msg.sender, _spender, _value);
           return true;
       }
   }
   ```

3. Create an `EthSwap.sol` contract that handles the token exchange functionality:

   ```solidity
   pragma solidity ^0.5.0;

   import "./Token.sol";

   contract EthSwap {
       string public name = "EthSwap Instant Exchange";
       Token public token;
       uint256 public rate = 100;

       event TokensPurchased(
           address account,
           address token,
           uint256 amount,
           uint256 rate
       );

       event TokensSold(
           address account,
           address token,
           uint256 amount,
           uint256 rate
       );

       constructor(Token _token) public {
           token = _token;
       }

       function buyTokens() public payable {
           uint256 tokenAmount = msg.value * rate;
           require(token.balanceOf(address(this)) >= tokenAmount, "Insufficient tokens");
           token.transfer(msg.sender, tokenAmount);
           emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);
       }

       function sellTokens(uint256 _amount) public {
           require(token.balanceOf(msg.sender) >= _amount, "Insufficient tokens");
           uint256 etherAmount = _amount / rate;
           require(address(this).balance >= etherAmount, "Insufficient ETH");
           token.transferFrom(msg.sender, address(this), _amount);
           msg.sender.transfer(etherAmount);
           emit TokensSold(msg.sender, address(token), _amount, rate);
       }
   }
   ```

4. Write tests for both contracts using Truffle and Chai:

   ```javascript
   const Token = artifacts.require('Token');
   const EthSwap = artifacts.require('EthSwap');

   require('chai')
     .use(require('chai-as-promised'))
     .should();

   function tokens(n) {
     return web3.utils.toWei(n, 'ether');
   }

   contract('EthSwap', ([deployer, investor]) => {
     let token, ethSwap;

     before(async () => {
       token = await Token.new();
       ethSwap = await EthSwap.new(token.address);
       await token.transfer(ethSwap.address, tokens('1000000'));
     });

     // Test cases...
   });
   ```

5. Migrate the contracts to the Ethereum blockchain with:

   ```
   truffle migrate --reset
   ```

## Part 3: Build the Front-end

1. Create a new React.js project with:

   ```
   create-react-app appui
   cd appui
   ```

2. Import the `Token` and `EthSwap` contracts into the `App.js` file:

   ```javascript
   import Token from '../abis/Token.json';
   import EthSwap from '../abis/EthSwap.json';
   ```

3. Load the contract data and user account information using Web3.js:

   ```javascript
   async componentWillMount() {
     await this.loadWeb3();
     await this.loadBlockchainData();
   }

   async loadBlockchainData() {
     const web3 = window.web3;
     const accounts = await web3.eth.getAccounts();
     this.setState({ account: accounts[0] });

     const networkId = await web3.eth.net.getId();

     // Load Token
     const tokenData = Token.networks[networkId];
     if (tokenData) {
       const token = new web3.eth.Contract(Token.abi, tokenData.address);
       this.setState({ token });
       let tokenBalance = await token.methods.balanceOf(this.state.account).call();
       this.setState({ tokenBalance: tokenBalance.toString() });
     } else {
       window.alert('Token contract not deployed to detected network.');
     }

     // Load EthSwap
     const ethSwapData = EthSwap.networks[networkId];
     if (ethSwapData) {
       const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address);
       this.setState({ ethSwap });
     } else {
       window.alert('EthSwap contract not deployed to detected network.');
     }

     this.setState({ loading: false });
   }
   ```

4. Create a `Navbar` component to display the user's account and Ether balance:

   ```javascript
   import React, { Component } from 'react';
   import Identicon from 'identicon.js';

   class Navbar extends Component {
     render() {
       return (
         // Navbar code...
       );
     }
   }

   export default Navbar;
   ```

5. Create a `Main` component that allows users to buy tokens:

   ```javascript
   import React, { Component } from 'react';
   import tokenLogo from '../token-logo.png';
   import ethLogo from '../eth-logo.png';

   class Main extends Component {
     constructor(props) {
       super(props);
       this.state = {
         output: '0',
       };
     }

     render() {
       return (
         // Main component code...
       );
     }
   }

   export default Main;
   ```

6. Implement the `buyTokens` function to interact with the `EthSwap` contract:

   ```javascript
   buyTokens = (etherAmount) => {
     this.setState({ loading: true });
     this.state.ethSwap.methods.buyTokens().send({ value: etherAmount, from: this.state.account }).on('transactionHash', (hash) => {
       this.setState({ loading: false });
     });
   };
   ```

#### Part 4: Test the Application

1. Start the development server with:

   ```
   npm start
   ```

2. Connect your Metamask wallet to the local Ethereum network.
3. Test the token purchase functionality by inputting Ether and swapping for tokens.
4. Verify the token and Ether balances are updated correctly.

That's a high-level overview of the steps involved.
