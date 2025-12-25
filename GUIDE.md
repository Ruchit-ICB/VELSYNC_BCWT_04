# NFT Minter App Setup Guide

Follow these steps to deploy your NFT contract and connect it to the app.

## 1. Deploy Smart Contract using Remix

1.  Open [Remix IDE](https://remix.ethereum.org/).
2.  Create a new file named `MyNFT.sol`.
3.  Copy the content from `contracts/MyNFT.sol` in this project and paste it into Remix.
4.  Go to the **Solidity Compiler** tab (left sidebar) and click **Compile MyNFT.sol**.
5.  Go to the **Deploy & Run Transactions** tab.
6.  In the **Environment** dropdown, select **Injected Provider - MetaMask**.
    *   Make sure your MetaMask is connected to a Testnet (e.g., Sepolia or Goerli) and has some test ETH.
7.  Click **Deploy**. Confirm the transaction in MetaMask.
8.  Once deployed, you will see the contract under "Deployed Contracts".
9.  Copy the **Contract Address** (click the copy icon next to the contract name).

## 2. Connect App to Contract

1.  Open `src/constants.js` in this project.
2.  Replace `REPLACE_WITH_YOUR_CONTRACT_ADDRESS` with the address you just copied.
    ```javascript
    export const CONTRACT_ADDRESS = "0xYourCopiedAddress...";
    ```
3.  Save the file.

## 3. Run the App

1.  Open a terminal in the project directory.
2.  Run `npm run dev`.
3.  Open the local URL (usually `http://localhost:5173`) in your browser.
4.  Connect your wallet and try minting an NFT!
