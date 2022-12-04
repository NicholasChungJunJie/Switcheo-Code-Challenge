const { ethers } = require("ethers");

const ADDR = "http://127.0.0.1:8545";   // your contract address
const json_file = require('./build/contracts/HelloBlockchain.json')
const ABI = json_file["abi"];    // your contract ABI

const ADDRESS = "..."; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);