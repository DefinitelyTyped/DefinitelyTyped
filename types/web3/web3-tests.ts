import Web3 = require("web3");
import BigNumber = require("bn.js");
import { TransactionReceipt } from "web3/types";
import PromiEvent from "web3/promiEvent";

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

const sendSignedTransactionTxReceipt0: PromiEvent<TransactionReceipt> = web3.eth.sendSignedTransaction("",
    (error: Error, txHash: string) => { });
const sendSignedTransactionTxReceipt1: PromiEvent<TransactionReceipt> = web3.eth.sendSignedTransaction("")
    .on("transactionHash", (txHash: string) => { });
const sendSignedTransactionTxReceipt2: PromiEvent<TransactionReceipt> = web3.eth.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => { });
const sendSignedTransactionTxReceipt3: PromiEvent<TransactionReceipt> = web3.eth.sendSignedTransaction("")
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendSignedTransactionTxReceipt4: PromiEvent<TransactionReceipt> = web3.eth.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });


const sendTransactionTxReceipt0: PromiEvent<TransactionReceipt> = web3.eth.sendTransaction({ to: "0x1" },
    (error: Error, txHash: string) => { });
const sendTransactionTxReceipt1: PromiEvent<TransactionReceipt> = web3.eth.sendTransaction({ to: "0x1" })
    .on("transactionHash", (txHash: string) => { });
const sendTransactionTxReceipt2: PromiEvent<TransactionReceipt> = web3.eth.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { });
const sendTransactionTxReceipt3: PromiEvent<TransactionReceipt> = web3.eth.sendTransaction({ to: "0x1" })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendTransactionTxReceipt4: PromiEvent<TransactionReceipt> = web3.eth.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });

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
