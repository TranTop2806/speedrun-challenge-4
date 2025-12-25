# ⚖️ Challenge 4: Build a DEX (Decentralized Exchange)

This project is a solution for Challenge 4 of SpeedRunEthereum. It demonstrates how to build a decentralized exchange using an **Automated Market Maker (AMM)** model with the constant product formula ($x * y = k$).

## 🔗 Live Demo & Contracts
- **🌐 Live Frontend:** [https://nextjs-19v2938tj-tranvananhthu280604-gmailcoms-projects.vercel.app](https://nextjs-19v2938tj-tranvananhthu280604-gmailcoms-projects.vercel.app)
- **📜 DEX Contract (Sepolia):** [0xEb7bA87d84BE0499214CD373bEEe841A0282Af3F](https://sepolia.etherscan.io/address/0xEb7bA87d84BE0499214CD373bEEe841A0282Af3F#code)
- **🎈 Balloons Token (Sepolia):** [0xE05dE1c036784Dc1195081d5c44a235364858CEa](https://sepolia.etherscan.io/address/0xE05dE1c036784Dc1195081d5c44a235364858CEa#code)

## 🛠 Mechanics & Features

The DEX acts as an algorithmic agent that holds reserves of both **ETH** and **Balloons ($BAL)** tokens.

[Image of constant product formula curve]

1.  **Automated Market Maker (AMM):**
    - Uses the formula `x * y = k` (where x and y are the reserves of two assets).
    - Automatically adjusts the price based on supply and demand.
2.  **Swapping:**
    - Users can trade ETH for $BAL and vice versa.
    - Includes a **0.3% trading fee** paid to liquidity providers.
    - Demonstrates **Price Slippage** (the more you buy, the higher the price goes per token).
3.  **Liquidity Provision:**
    - Anyone can deposit ETH and $BAL to become a Liquidity Provider (LP).
    - LPs receive **Liquidity Tokens (DEX-LP)** representing their share of the pool.
    - LPs earn fees from every trade.

## 💻 Smart Contracts

- **Balloons.sol:** An ERC20 token acting as the asset to be traded against ETH. Mints initial supply to the deployer.
- **DEX.sol:** The core exchange logic. Handles:
    - `ethToToken()` & `tokenToEth()`: Swapping logic with fee calculation.
    - `deposit()`: Adding liquidity and minting LP tokens.
    - `withdraw()`: Removing liquidity and burning LP tokens.

---

## 🏃‍♂️ How to Run Locally

Prerequisites: [Node.js](https://nodejs.org/) (>= v18.17) and [Yarn](https://yarnpkg.com/).

### 1. Clone & Install
```bash
git clone [https://github.com/TranTop2806/speedrun-challenge-4-dex.git](https://github.com/TranTop2806/speedrun-challenge-4-dex.git)
cd speedrun-challenge-4-dex
yarn install
```
### 2. Start Local Chain
Open Terminal 1:

```Bash
yarn chain
```
### 3. Deploy Contracts
Open Terminal 2. This deploys the token and the DEX, then initializes the pool with some liquidity:

```Bash
yarn deploy
```
### 4. Start Frontend
Open Terminal 3:

```Bash
yarn start
```
Visit http://localhost:3000 to interact with the DEX.

### Testing the DEX (User Flow)
Follow these steps to fully test the AMM functionality locally:

#### Step 1: Preparation
Connect your wallet.

Get some local ETH from the Faucet.

#### Step 2: Buying Balloons (ETH -> BAL)
In the "Eth to Token" tab.

Enter an amount of ETH (e.g., 0.1).

Click Swap.

Result: Your ETH decreases, and your $BAL balance increases. Notice the "Swap Price" calculation.

#### Step 3: Selling Balloons (BAL -> ETH)
Critical Step: Before swapping tokens back to ETH, you must Approve the DEX to spend your $BAL.

Click the Approve button (if available) or interact with the Token contract directly.

Enter amount of $BAL -> Click Swap.

#### Step 4: Providing Liquidity
Go to the Liquidity tab.

You must deposit both ETH and $BAL at the current ratio.

Click Deposit.

Result: You will receive LP Tokens (visible in your balance). You are now earning fees!

#### Step 5: Withdrawing Liquidity
Enter the amount of LP Tokens you want to burn.

Click Withdraw.

Result: You receive your original ETH and $BAL back, plus any accumulated trading fees.

### Contract Verification
To verify the contracts on Sepolia:

```Bash
yarn verify --network sepolia
```
### License
MIT