# 🚩 Challenge 4: Build a DEX

This project is a solution for Challenge 4 of SpeedRunEthereum. It demonstrates how to build a decentralized exchange (DEX) using an Automated Market Maker (AMM) model with the constant product formula (x * y = k).

## 🔗 Links
- **Live Demo:** https://nextjs-19v2938tj-tranvananhthu280604-gmailcoms-projects.vercel.app
- **DEX Contract (Sepolia):** https://sepolia.etherscan.io/address/0xEb7bA87d84BE0499214CD373bEEe841A0282Af3F#code
- **Balloons Token (Sepolia):** https://sepolia.etherscan.io/address/0xE05dE1c036784Dc1195081d5c44a235364858CEa#code

## 🛠 Features Explained

The **DEX** contract acts as an Automated Market Maker (AMM) that holds reserves of both ETH and $BAL tokens.
- **Pricing:** Uses the $x * y = k$ (Constant Product) formula to determine exchange rates.
- **Swapping:** Allows users to trade ETH for $BAL and vice versa with a 0.3% trading fee.
- **Liquidity:** Anyone can provide liquidity to the pool and earn trading fees, or withdraw their portion of the reserves.



## 💻 Smart Contracts

- **Balloons.sol:** An example ERC20 contract that mints the initial supply of $BAL tokens.
- **DEX.sol:** The core exchange contract implementing swap logic, liquidity management, and the pricing mechanism.

## 🏃‍♂️ How to Run Locally

Prerequisites: Node.js (>= v18.17), Yarn, Git.

### 1. Clone & Install
```bash
git clone [https://github.com/TranTop2806/speedrun-challenge-4-dex.git](https://github.com/TranTop2806/speedrun-challenge-4-dex.git)
cd speedrun-challenge-4-dex
yarn install
yarn chain
yarn deploy
yarn start
```

## Testing the DEX
Init: The deploy script automatically initializes the DEX with liquidity.

Swap: Enter an ETH amount to see how many Balloons you receive. Try large amounts to see price slippage.

Liquidity: Deposit ETH and Tokens to receive Liquidity Provider (LP) tokens.

Withdraw: Use your LP tokens to withdraw your share of the reserves plus earned fees.