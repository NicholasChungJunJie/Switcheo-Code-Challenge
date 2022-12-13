import { AbiCoder } from "@ethersproject/abi";
import { BigNumber, ethers, providers, Signer } from "ethers";

const provider = new ethers.providers.EtherscanProvider();

async function get_amount ( address:string ) {
    try{
        const amount = await provider.getBalance(address);
        console.log(address + " " + ethers.utils.formatEther(amount)); //convert wei to ether
    } catch (e) {
        console.log(e);
    }
}

get_amount("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430");
get_amount("0x0020c5222a24e4a96b720c06b803fb8d34adc0af");
get_amount("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392");