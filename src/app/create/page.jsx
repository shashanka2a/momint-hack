"use client";
import React, { useState, useEffect } from 'react';
import { Web3Auth } from "@web3auth/modal";
import { ethers } from "ethers";
import { createThirdwebClient, getContract } from "thirdweb";

// Initialize Web3Auth and Thirdweb SDK
const initWeb3Auth = async () => {
  const web3auth = new Web3Auth({
    clientId: "BLwfJTqI8KnGeUF7lxsINtFsu6hUVdf10YYI-42FAPOxUCaZXTG24eKAs9sGANOGSei8pf0xi3Q1_4KuIoClqoQ", // Replace with your Web3Auth Client ID
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0xaa36a7", // Sepolia Testnet Chain ID
    },
  });
  await web3auth.initModal();

  const provider = new ethers.providers.Web3Provider(web3auth.provider);
  return provider;
};

const FileUpload = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState('');
  
  // Initialize Thirdweb SDK
  const client = createThirdwebClient({ clientId: "1fe905122a45aca75caaecceef2c24eb" });
  const contract = getContract({
    client,
    chain: 11155111, // Sepolia Testnet Chain ID
    address: "0xcD0a81d5E18e1Ed0F785379e7032192cB47506b3", // Thirdweb Contract Address
  });

  useEffect(() => {
    const setupWeb3Auth = async () => {
      const providerInstance = await initWeb3Auth();
      setProvider(providerInstance);
    };
    setupWeb3Auth();
  }, []);

  const connectWallet = async () => {
    if (provider) {
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      setAddress(userAddress);
      console.log("Connected wallet address:", userAddress);
    } else {
      alert("Please initialize Web3Auth");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMintNFT = async (e) => {
    e.preventDefault();
    if (!file || !title || !price || !address) {
      alert('Please fill in all fields and connect wallet');
      return;
    }

    setLoading(true);

    try {
      // Metadata to be minted
      const metadata = {
        name: title,
        description: description,
        image: file, // This will work after file is uploaded to IPFS
        properties: {
          price: price,
        },
      };

      // Mint the NFT using Thirdweb SDK
      const tx = await contract.createBatch([metadata]);

      console.log('NFT Minted Successfully:', tx);
      setSuccess(true);
    } catch (error) {
      console.error('Error minting NFT:', error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 p-8 flex-grow">
      {/* Left Side - File Upload */}
      <div className="w-1/2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p className="text-gray-500 mb-4">Drag and Drop files or Import from</p>

          <input type="file" onChange={handleFileChange} className="mb-4" />

          <p className="mt-6 text-gray-400 text-sm">
            Please upload a file with a maximum size of 5MB. Accepted file formats: JPEG, PNG, GIF.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 ml-6">
        <form onSubmit={handleMintNFT} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-900">
              Title*
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 sm:text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-900">
              Price* (ETH)
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 sm:text-sm"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-900">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 sm:text-sm"
              placeholder="Add Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={connectWallet}
              className="px-8 py-3 bg-blue-500 text-white items-center justify-center max-w-max rounded-lg text-lg font-semibold whitespace-nowrap hover:bg-blue-700"
            >
              {address ? `Connected: ${address.slice(0, 6)}...` : 'Connect Wallet'}
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-black text-white items-center justify-center max-w-max rounded-lg text-lg font-semibold whitespace-nowrap hover:bg-gray-800"
            >
              {loading ? 'Minting...' : 'Mint NFT'}
            </button>
          </div>
          {success && <p className="text-green-500 mt-4">NFT minted successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default FileUpload;