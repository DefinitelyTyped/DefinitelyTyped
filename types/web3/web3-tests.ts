import { Web3 } from "web3";
import BigNumber = require("bn.js");

const contractAddress = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";

//
// Web3
// --------------------------------------------------------------------------
const web3 = new Web3();
const myProvider = new web3.providers.HttpProvider("http://localhost:5454");
web3.setProvider(myProvider);
web3.eth.setProvider(myProvider);

//
// web3.eth
// --------------------------------------------------------------------------
const storage: Promise<string> = web3.eth.getStorageAt(contractAddress, 0);

//
// web3.eth.subscribe
// --------------------------------------------------------------------------

//
// web3.eth.Contract
// --------------------------------------------------------------------------
const myContract = new web3.eth.Contract(
    [],
    contractAddress,
    {
        from: "0x1234567890123456789012345678901234567891",
        gasPrice: "20000000000"
    }
);

myContract.options.from = "0x1234567890123456789012345678901234567891";
myContract.options.gasPrice = "20000000000000";
myContract.options.gas = 5000000;

//
// web3.eth.accounts
// --------------------------------------------------------------------------

//
// web3.eth.personal
// --------------------------------------------------------------------------
web3.eth.personal.unlockAccount(
    web3.eth.defaultAccount,
    "passphrase",
    600
);

//
// web3.eth.ens
// --------------------------------------------------------------------------

//
// web3.eth.Iban
// --------------------------------------------------------------------------

//
// web3.eth.abi
// --------------------------------------------------------------------------

//
// web3.bzz
// --------------------------------------------------------------------------

//
// web3.shh
// --------------------------------------------------------------------------
const shhPromise: Promise<string> = web3.shh.generateSymKeyFromPassword("xyz");

//
// web3.utils
// --------------------------------------------------------------------------
const weiStr: string = web3.utils.toWei("100", "gwei");
const weiBn: BigNumber = web3.utils.toWei(web3.utils.toBN("1"));
const rndHex: string = Web3.utils.randomHex(10);
const sha3: string = web3.utils.soliditySha3(0, 1, "abc");
