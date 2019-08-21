import Web3 = require("conflux-web");
import BigNumber = require("bn.js");
import { TransactionReceipt, Log } from "conflux-web/types";
import PromiEvent from "conflux-web/promiEvent";
import { NEW_ABI_STANDARD, OLD_ABI_STANDARD } from "conflux-web/test/abi-tests";
import { Provider, JsonRPCResponse } from "conflux-web/providers";

const contractAddress = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";

//
// Web3
// --------------------------------------------------------------------------
const web3 = new Web3();
const myProvider = new web3.providers.HttpProvider("http://localhost:5454");

const createFailingHttpProvider = (): Provider => ({
  send(payload, callback) {
    callback(new Error("Illegal!"));
  }
});

const createSuccesfulHttpProvider = (): Provider => ({
  send(payload, callback) {
    const response = {};
    callback(null, response as JsonRPCResponse);
  }
});

const fakeProvider: Provider = createFailingHttpProvider();
const otherFakeProvider: Provider = createSuccesfulHttpProvider();

web3.setProvider(fakeProvider);
web3.setProvider(otherFakeProvider);
web3.setProvider(myProvider);
web3.cfx.setProvider(myProvider);

//
// web3.cfx
// --------------------------------------------------------------------------
const logs: Promise<Log[]> = web3.cfx.getPastLogs({
    fromBlock: "latest_state",
    address: contractAddress,
    topics: [
        null,
        "0x1"
    ]
});
const storage: Promise<string> = web3.cfx.getStorageAt(contractAddress, 0);
const balance1: Promise<string> = web3.cfx.getBalance(contractAddress);
const balance2: Promise<string> = web3.cfx.getBalance(contractAddress, "earliest");
const balance3: Promise<string> = web3.cfx.getBalance(contractAddress, 1);
web3.cfx.getBalance(contractAddress, "earliest", (error: Error, balance: string) => { });
web3.cfx.getBalance(contractAddress, 1, (error: Error, balance: string) => { });

const sendSignedTransactionTxReceipt0: PromiEvent<TransactionReceipt> = web3.cfx.sendSignedTransaction("",
    (error: Error, txHash: string) => { });
const sendSignedTransactionTxReceipt1: PromiEvent<TransactionReceipt> = web3.cfx.sendSignedTransaction("")
    .on("transactionHash", (txHash: string) => { });
const sendSignedTransactionTxReceipt2: PromiEvent<TransactionReceipt> = web3.cfx.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => {
        const { status }: { status: boolean }  = txReceipt;
    });
const sendSignedTransactionTxReceipt3: PromiEvent<TransactionReceipt> = web3.cfx.sendSignedTransaction("")
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendSignedTransactionTxReceipt4: PromiEvent<TransactionReceipt> = web3.cfx.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });

const sendTransactionTxReceipt0: PromiEvent<TransactionReceipt> = web3.cfx.sendTransaction({ to: "0x1" },
    (error: Error, txHash: string) => { });
const sendTransactionTxReceipt1: PromiEvent<TransactionReceipt> = web3.cfx.sendTransaction({ to: "0x1" })
    .on("transactionHash", (txHash: string) => { });
const sendTransactionTxReceipt2: PromiEvent<TransactionReceipt> = web3.cfx.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { });
const sendTransactionTxReceipt3: PromiEvent<TransactionReceipt> = web3.cfx.sendTransaction({ to: "0x1" })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendTransactionTxReceipt4: PromiEvent<TransactionReceipt> = web3.cfx.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });

//
// web3.cfx.subscribe
// --------------------------------------------------------------------------

//
// web3.cfx.Contract
// --------------------------------------------------------------------------
const myContract = new web3.cfx.Contract(
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
// web3.cfx.accounts
// --------------------------------------------------------------------------
const account = web3.cfx.accounts.privateKeyToAccount("0x1234");

// check that no `publicKey` field is present on `Account` type
const noPublicKeyInAccount: typeof account & { publicKey?: never } = account;

const testTx = {
    to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
    value: '1000000000',
    gas: 2000000
};

web3.cfx.accounts.signTransaction(testTx, "").then(txSig => {
    txSig.messageHash = "0x1234";
    txSig.rawTransaction = "0x5678";

    const noHashFieldInTxSig: typeof txSig & { hash?: never, message?: never, signature?: never } = txSig;
});

const msgSig = web3.cfx.accounts.sign("0x1234", "0x5678");
msgSig.messageHash = "0x1234";
msgSig.message = "0x5678";
msgSig.signature = "0x90ab";

const noHashFieldInMsgSig: typeof msgSig & { hash?: never, rawTransaction?: never } = msgSig;

const encryptedKeystore = web3.cfx.accounts.encrypt("0x1234", "5678");
encryptedKeystore.crypto.cipher = "aes-128-ctr";

const msgSignature: string = account.sign("0x1234").signature;
account.signTransaction(testTx).then(txSig => {
    const txSignature: string = txSig.rawTransaction;
});

//
// web3.cfx.personal
// --------------------------------------------------------------------------
/*
web3.cfx.personal.unlockAccount(
    web3.cfx.defaultAccount,
    "passphrase",
    600
);
*/
//
// web3.cfx.ens
// --------------------------------------------------------------------------

//
// web3.cfx.Iban
// --------------------------------------------------------------------------

//
// web3.cfx.abi
// --------------------------------------------------------------------------
const myContractOldAbi = new web3.cfx.Contract(OLD_ABI_STANDARD);
const myContractNewAbi = new web3.cfx.Contract(NEW_ABI_STANDARD);

//
// web3.bzz
// --------------------------------------------------------------------------

//
// web3.shh
// --------------------------------------------------------------------------
//const shhPromise: Promise<string> = web3.shh.generateSymKeyFromPassword("xyz");

//
// web3.utils
// --------------------------------------------------------------------------
const weiStr: string = web3.utils.toWei("100", "gwei");
const weiBn: BigNumber = web3.utils.toWei(web3.utils.toBN("1"));
// $ExpectError
//const weiNumber = web3.utils.toWei(100);

const rndHex: string = Web3.utils.randomHex(10);
const sha3: string = web3.utils.soliditySha3(0, 1, "abc");
const fromWei1: string = web3.utils.fromWei(new BigNumber(1));
const fromWei2: string = web3.utils.fromWei(new BigNumber(1), "gwei");
const fromWei3: string = web3.utils.fromWei("1");
const fromWei4: string = web3.utils.fromWei("1", "gwei");
const fromWei5: string = web3.utils.fromWei(1);
const fromWei6: string = web3.utils.fromWei(1, "gwei");
const isStrictHexString: boolean = web3.utils.isHexStrict("0xc1912");
const isStrictHexNumber: boolean = web3.utils.isHexStrict(0xc1912);
