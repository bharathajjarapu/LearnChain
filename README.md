# Introduction to Blockchain Technology
BlockChain Guide for Community

## Prererequisites 

### Lets Break Down Some Blockchain Buzzwords

#### Decentralization
Decentralization refers to distributing functions across multiple units, forming an interconnected system without a single entity holding complete authority. This architecture distributes workloads both hardware and software among various workstations.

#### Cryptocurrency
Cryptocurrency is a digital or virtual currency that uses cryptography to encrypt its transactions and regulate the creation of new units. They are often traded on decentralized exchanges and can also be used to purchase goods and services. 

#### Bitcoin & Etherium
- Bitcoin is a decentralized digital currency that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public dispersed ledger called a blockchain.
- Ethereum is also a decentralized digital currency, but it goes beyond being just a payment system. It is also a platform that allows developers to build and run decentralized applications (dapps). These dapps can be used to create anything from smart contracts to Decentralized Autonomous Organizations (DAOs). 

#### Peer-to-Peer (P2P) 
A decentralized network architecture where participants (peers) interact directly without a central authority, enhancing resilience and efficiency.

#### Hash Function
A mathematical algorithm that transforms input data into a fixed-size string of characters, serving as a digital fingerprint for data integrity.

#### Proof of Work
For adding block into the chain, proof of work is needed. miner need to solve tough math calculation to mine the block and this needs huge energy and time consumption. After this also, miners verifies that block is not compromised. That’s why it becomes futile for hackers to try breaching the blockchain.

#### Proof of Stake (PoS)
A consensus algorithm that allows participants to validate transactions based on the number of coins they hold, promoting energy efficiency compared to traditional mining.

#### Blockchain Wallet
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
