# Introduction to Blockchain Technology
BlockChain Guide for Community


![image](https://github.com/user-attachments/assets/b5711e77-bd95-43ac-9258-309fe97eda0a)


## Prererequisites 
- Understand Basic Programming Languages like `JS` or `Python`

<br></br>
## What is Blockchain ?

Imagine you're playing with LEGO blocks, and every time you add a new block, you take a photo and share it with all your friends. Nobody can change the earlier blocks without everyone noticing - that's blockchain! It's like a shared photo album where everyone has a copy, and no one can secretly edit old photos.

Blockchain is a distributed, immutable digital ledger that records transactions across a network of computers. Think of it as a chain of blocks, where each block contains a list of transactions and is cryptographically linked to the previous block, creating an unbreakable chain of information.

### Decentralization
Decentralization refers to distributing functions across multiple units, forming an interconnected system without a single entity holding complete authority.

![Links](https://github.com/user-attachments/assets/bb78be1e-49da-4fe8-8f92-dc1a6c36c1d8)

### Why not use a Centralized Database ?

Imagine a group project where a team of students needs to track their tasks and progress in one shared spreadsheet. In this setup, they use a single, centralized spreadsheet that all members (like the researcher, writer, designer, and presenter) update as they complete their tasks.

This centralized spreadsheet has advantages: everyone has the same information in real-time, and there's a group leader who controls access and ensures everyone is following the same process. Because they all rely on this one spreadsheet, the whole team has a consistent view of the project’s status. But for this to work smoothly, each member must trust that the leader won’t secretly change any completed tasks or historical data without telling the others.

### Understanding Basic Concepts of Blockchain

<details>
    <h4>Distributed Database</h4>
  <summary>Distributed Database</summary>
  <p>Imagine if each team member in the group project had their own personal copy of the shared spreadsheet instead of using one centralized version. In this setup, each member—the researcher, writer, designer, and presenter—keeps their own version of the spreadsheet and updates it as they complete tasks. The updates are then synchronized among all copies so that everyone eventually has the same, up-to-date information.</p>
  <p>This distributed setup has its advantages. Each member can customize their own spreadsheet to fit their workflow and easily control access within their copy. But it also comes with challenges: any change one member makes needs to be synced across everyone else's copy. If there’s a syncing error or a conflict (like two people updating the same task differently), it can create data issues that take extra time to resolve.</p>
</details>

<details>
    <h4>Distributed Ledge</h4>
  <summary>Distributed Ledger</summary>
  <p>Blockchain technology is like a shared, digital record book, called a <em>Distributed ledger</em>, that keeps a history of all transactions. Just as an accounting ledger shows every transaction that affects the total balance, a blockchain ledger records every transaction that affects the final state of information.</p>
  <p>Returning to the group project example: instead of one centralized spreadsheet or individual copies that need constant syncing, blockchain allows each team member to keep an identical copy of the project’s progress in a way that automatically updates for everyone without needing a central owner. Once a task is marked as complete, it gets locked in the shared ledger for everyone, and no one can change it—only new tasks or changes can be added on top. This creates a consistent, unchangeable record of project progress that everyone trusts and follows.</p>
</details>

<details>
    <h4>Cryptocurrency</h4>
  <summary>Cryptocurrency</summary>
  <p>Cryptocurrency is a digital or virtual currency that uses cryptography to encrypt its transactions and regulate the creation of new units.</p>
</details>

<details>
    <h4>Bitcoin & Ethereum</h4>
  <summary>Bitcoin & Ethereum</summary>
  <ul>
    <li><strong>Bitcoin:</strong> Bitcoin is a decentralized digital currency that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</li>
    <li><strong>Ethereum:</strong> Ethereum is also a decentralized digital currency, but it goes beyond being just a payment system. It is also a platform that allows developers to build and run decentralized applications (dapps).</li>
  </ul>
</details>

<details>
    <h4>Peer-to-Peer (P2P)</h4>
  <summary>Peer-to-Peer (P2P)</summary>
  <p>A decentralized network architecture where participants (peers) interact directly without a central authority, enhancing resilience and efficiency.</p>
</details>

<details>
    <h4>Hash Function</h4>
  <summary>Hash Function</summary>
  <p>A mathematical algorithm that transforms input data into a fixed-size string of characters, serving as a digital fingerprint for data integrity.</p>
  <img src="https://github.com/user-attachments/assets/00d8ba45-5861-4519-8f65-c0302669bbdf" width="400"/>
</details>

<details>
    <h4>Consensus Algorithm</h4>
  <summary>Consensus Algorithm</summary>
  <img src="https://github.com/user-attachments/assets/e3268d94-45df-47c0-bff5-ec20dfffd179" width="400"/>
</details>

<details>
    <h4>Proof of Work</h4>
  <summary>Proof of Work</summary>
  <p>For adding a block into the chain, proof of work is needed. Miners need to solve tough math calculations to mine the block, which requires huge energy and time consumption. After this, miners verify that the block is not compromised. This makes it futile for hackers to try breaching the blockchain.</p>
</details>

<details>
    <h4>Proof of Stake (PoS)</h4>
  <summary>Proof of Stake (PoS)</summary>
  <p>A consensus algorithm that allows participants to validate transactions based on the number of coins they hold, promoting energy efficiency compared to traditional mining.</p>
</details>

<details>
    <h4>Blockchain Wallet</h4>
  <summary>Blockchain Wallet</summary>
  <p>A blockchain wallet is a digital wallet that allows you to store, send, and receive cryptocurrencies like bitcoin and Ethereum. Blockchain wallets are similar to traditional bank accounts in that they allow users to easily transfer funds between their various accounts.</p>
</details>




## Key Characteristics of BlockChain

1. **Decentralized**: Unlike traditional systems where data is stored in a central location, blockchain distributes identical copies of the ledger across multiple computers (nodes) in the network.

2. **Immutable**: Once data is recorded in a block and added to the chain, it cannot be altered without changing all subsequent blocks – making it practically impossible to tamper with.

3. **Transparent**: All transactions are visible to network participants, creating a system of trust through transparency.

4. **Secure**: Advanced cryptography and consensus mechanisms protect the network from unauthorized access and manipulation.



## How Does BlockChain Work

A blockchain transaction starts when someone initiates it, and the information is encrypted and sent to a network of computers (nodes) to verify it. Once verified, the transaction joins a group of other approved transactions to form a new block. The network then agrees on which block to add, and the selected node, or “miner,” earns a reward. The block is then linked to the previous one, forming a secure chain. Once added, the transaction is complete, and the details are permanently stored for anyone to view.

![Blockchain Working by Geek for Geeks](https://github.com/user-attachments/assets/164f8afd-b29a-402a-b936-138b64e73f89)

1. **Initiating a Transaction**: A new transaction is created and enters the blockchain network. The details are encrypted using public and private keys for security.

2. **Verification of Transaction**: The transaction is sent to multiple peer-to-peer computers (nodes) worldwide. These nodes check if the transaction is valid, like confirming if there’s enough balance.

3. **Formation of a New Block**: Verified transactions are collected in a "mempool" by each node. These mempools then group together to form a new block.

4. **Consensus Algorithm**: Nodes use a consensus mechanism to decide which block to add next, ensuring everyone agrees on the latest valid block. The node that successfully adds a block (a “miner”) receives a reward.

5. **Addition of the New Block to the Blockchain**: Once the block gets a unique hash value, it is added to the blockchain. Each block links to the previous one through its hash, creating a secure chain.

6. **Transaction Complete**: After the block is added, the transaction is finished. The record is stored permanently, and anyone can look it up to confirm.

<br></br>
## Building a Simple BlockChain using Python!

We are creating Blockchain using Python, mining new blocks, and displaying the whole blockchain with hashing too so,

This is a minimal Flask web app where users can vote, and each vote will be recorded as a new block in the blockchain. I’ll use `BlockChain` and `Block` classes to structure the blockchain and create a simple Bootstrap UI for voting.

**File Structure**

- `app.py` - The main Flask application file.
- `PyChain.py` - Contains the `BlockChain` and `Block` classes.
- `templates/index.html` - The HTML file with Bootstrap for the UI.

`PyChain.py`

```python
import hashlib, time

class Block:
    def __init__(self, data, prev_hash=""):
        self.data = data
        self.prev_hash = prev_hash
        self.timestamp = time.time()
        self.hash = self.calc_hash()

    def calc_hash(self):
        return hashlib.sha256((str(self.data) + self.prev_hash + str(self.timestamp)).encode()).hexdigest()

class BlockChain:
    def __init__(self):
        self.chain = [self.create_genesis()]

    def create_genesis(self):
        return Block("Genesis")

    def addBlock(self, block):
        block.prev_hash = self.chain[-1].hash
        block.hash = block.calc_hash()
        self.chain.append(block)

    def chainValid(self):
        for i in range(1, len(self.chain)):
            b, pb = self.chain[i], self.chain[i - 1]
            if b.hash != b.calc_hash() or b.prev_hash != pb.hash:
                return False
        return True
```

`app.py`

```python
from flask import Flask, render_template, request, redirect
from PyChain import BlockChain, Block

app = Flask(__name__)
chain = BlockChain()

@app.route('/')
def index():
    return render_template('index.html', chain=chain.chain, valid=chain.chainValid())

@app.route('/vote', methods=['POST'])
def vote():
    choice = request.form.get('choice')
    if choice:
        chain.addBlock(Block(choice))
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
```

`templates/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Blockchain Voting</title>
</head>
<body>
<div class="container mt-5">
    <h1 class="text-center">Blockchain Voting System</h1>
    <div class="card mt-4">
        <div class="card-body">
            <form method="POST" action="/vote">
                <label for="choice" class="form-label">Select your choice:</label>
                <select class="form-select mb-3" name="choice" required>
                    <option value="Candidate 1">Candidate 1</option>
                    <option value="Candidate 2">Candidate 2</option>
                    <option value="Candidate 3">Candidate 3</option>
                </select>
                <button type="submit" class="btn btn-primary">Vote</button>
            </form>
        </div>
    </div>
    
    <h2 class="mt-5">Blockchain Status</h2>
    <p>Blockchain Valid: {{ 'Yes' if valid else 'No' }}</p>
    <ul class="list-group">
        {% for block in chain %}
        <li class="list-group-item">
            <strong>Block {{ loop.index }}</strong><br>
            Data: {{ block.data }}<br>
            Hash: {{ block.hash }}<br>
            Previous Hash: {{ block.prev_hash }}<br>
            Timestamp: {{ block.timestamp }}
        </li>
        {% endfor %}
    </ul>
</div>
</body>
</html>
```

**Preview**

![image (3)](https://github.com/user-attachments/assets/90a74a69-3c1e-4bbd-8524-9a60f6c08dc6)

### Explanation

1. **Blockchain Logic**:
   - `Block` represents a block with data, timestamp, and hash.
   - `BlockChain` initializes a chain with a genesis block and provides a function to add blocks and validate the chain.

2. **Flask App**:
   - `index()` renders the main page, showing the blockchain and vote options.
   - `vote()` handles form submissions, adding a new vote as a block.

3. **Bootstrap UI**:
   - A form for voting with three candidates.
   - Displays blockchain blocks and chain validity in a styled list.

<br></br>
## Building a Intermediate Project



<br></br>
## Suggested Mini-Projects:

- [ ] **Digital Piggy Bank**  
      A virtual saving system where users can deposit, track, and withdraw their digital currency. Users can set goals and see their progress.

- [ ] **Simple Voting System**  
      A basic voting application where users can cast votes on given topics, view current results, and track the outcome. Admins can set up new voting polls and manage user participation.

- [ ] **Simple Verify System**  
      A basic verify application where users can verify docs on given chain, and detect the fake doc. Admins can set up new events and manage user participation.
