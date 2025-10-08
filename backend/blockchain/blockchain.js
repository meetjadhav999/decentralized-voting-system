const { ethers } = require("ethers");
const contractJSON = require("./contract.json");
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// Admin wallet (the one who deployed contract)

const adminWallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contract = new ethers.Contract(contractJSON.address, contractJSON.abi, adminWallet);

module.exports = contract;
