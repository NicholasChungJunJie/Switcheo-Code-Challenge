const { ethers } = require("ethers");

const ADDR = "…";   // your contract address
const json_file = require('./build/contracts/HelloBlockchain.json')
const ABI = json_file["abi"];    // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
// RPC url : HTTP://127.0.0.1:7545
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);