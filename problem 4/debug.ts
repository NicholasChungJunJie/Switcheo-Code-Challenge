/**
 * For debugging and testing purposes
 */
import { AbiCoder } from "@ethersproject/abi";
import { BigNumber, ethers, providers, Signer } from "ethers";

// ethers.getDefaultProvider("0xc0ecb8499d8da2771abcbf4091db7f65158f1468");
const provider = new ethers.providers.EtherscanProvider();
const abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const token_contract = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const contract = new ethers.Contract( token_contract, abi, provider);
// contract.connect(contract.provider);
async function get_amount ( address:string ) {
    try{
        const balance = await contract.balanceOf(address);

        console.log(balance);
       
    } catch (e) {
        console.log(e);
    }
}

get_amount("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430");
get_amount("0x0020c5222a24e4a96b720c06b803fb8d34adc0af");
get_amount("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392");