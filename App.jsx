import { useState } from 'react'
import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './constants'
import './App.css'

function App() {
  const [account, setAccount] = useState(null)
  const [status, setStatus] = useState('')
  const [isMinting, setIsMinting] = useState(false)

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
        setStatus('Wallet connected')
      } catch (error) {
        setStatus('Error connecting wallet: ' + error.message)
      }
    } else {
      setStatus('Please install MetaMask!')
    }
  }

  const mintNFT = async () => {
    if (!account) {
      setStatus('Please connect your wallet first')
      return
    }

    try {
      setIsMinting(true)
      setStatus('Minting...')

      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

      const tx = await contract.mint()
      setStatus('Transaction sent. Waiting for confirmation...')

      await tx.wait()
      setStatus('NFT Minted successfully!')
    } catch (error) {
      console.error(error)
      setStatus('Minting failed: ' + (error.reason || error.message))
    } finally {
      setIsMinting(false)
    }
  }

  return (
    <div className="container">
      <h1>NFT Minter</h1>
      <div className="card">
        {!account ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <div className="action-area">
            <p className="account">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
            <button onClick={mintNFT} disabled={isMinting}>
              {isMinting ? 'Minting...' : 'Mint NFT'}
            </button>
          </div>
        )}
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  )
}

export default App
