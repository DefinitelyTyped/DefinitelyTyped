import CW = require("conflux-web");
import BigNumber = require("bn.js");
import { TransactionReceipt, Log } from "conflux-web/types";
import PromiEvent from "conflux-web/promiEvent";
import { NEW_ABI_STANDARD, OLD_ABI_STANDARD } from "conflux-web/test/abi-tests";
import { Provider, JsonRPCResponse } from "conflux-web/providers";

const contractAddress = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";

//
// CW
// --------------------------------------------------------------------------
const cw = new CW();
const myProvider = new cw.providers.HttpProvider("http://localhost:5454");

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

cw.setProvider(fakeProvider);
cw.setProvider(otherFakeProvider);
cw.setProvider(myProvider);
cw.cfx.setProvider(myProvider);

//
// cw.cfx
// --------------------------------------------------------------------------
const logs: Promise<Log[]> = cw.cfx.getPastLogs({
    fromBlock: "latest_state",
    address: contractAddress,
    topics: [
        null,
        "0x1"
    ]
});
const storage: Promise<string> = cw.cfx.getStorageAt(contractAddress, 0);
const balance1: Promise<string> = cw.cfx.getBalance(contractAddress);
const balance2: Promise<string> = cw.cfx.getBalance(contractAddress, "earliest");
const balance3: Promise<string> = cw.cfx.getBalance(contractAddress, 1);
cw.cfx.getBalance(contractAddress, "earliest", (error: Error, balance: string) => { });
cw.cfx.getBalance(contractAddress, 1, (error: Error, balance: string) => { });

const sendSignedTransactionTxReceipt0: PromiEvent<TransactionReceipt> = cw.cfx.sendSignedTransaction("",
    (error: Error, txHash: string) => { });
const sendSignedTransactionTxReceipt1: PromiEvent<TransactionReceipt> = cw.cfx.sendSignedTransaction("")
    .on("transactionHash", (txHash: string) => { });
const sendSignedTransactionTxReceipt2: PromiEvent<TransactionReceipt> = cw.cfx.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => {
        const { status }: { status: boolean }  = txReceipt;
    });
const sendSignedTransactionTxReceipt3: PromiEvent<TransactionReceipt> = cw.cfx.sendSignedTransaction("")
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendSignedTransactionTxReceipt4: PromiEvent<TransactionReceipt> = cw.cfx.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });

const sendTransactionTxReceipt0: PromiEvent<TransactionReceipt> = cw.cfx.sendTransaction({ to: "0x1" },
    (error: Error, txHash: string) => { });
const sendTransactionTxReceipt1: PromiEvent<TransactionReceipt> = cw.cfx.sendTransaction({ to: "0x1" })
    .on("transactionHash", (txHash: string) => { });
const sendTransactionTxReceipt2: PromiEvent<TransactionReceipt> = cw.cfx.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { });
const sendTransactionTxReceipt3: PromiEvent<TransactionReceipt> = cw.cfx.sendTransaction({ to: "0x1" })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendTransactionTxReceipt4: PromiEvent<TransactionReceipt> = cw.cfx.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });

//
// cw.cfx.subscribe
// --------------------------------------------------------------------------

//
// cw.cfx.Contract
// --------------------------------------------------------------------------
const myContract = new cw.cfx.Contract(
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
// cw.cfx.accounts
// --------------------------------------------------------------------------
const account = cw.cfx.accounts.privateKeyToAccount("0x1234");

// check that no `publicKey` field is present on `Account` type
const noPublicKeyInAccount: typeof account & { publicKey?: never } = account;

const testTx = {
    to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
    value: '1000000000',
    gas: 2000000
};

cw.cfx.accounts.signTransaction(testTx, "").then(txSig => {
    txSig.messageHash = "0x1234";
    txSig.rawTransaction = "0x5678";

    const noHashFieldInTxSig: typeof txSig & { hash?: never, message?: never, signature?: never } = txSig;
});

const msgSig = cw.cfx.accounts.sign("0x1234", "0x5678");
msgSig.messageHash = "0x1234";
msgSig.message = "0x5678";
msgSig.signature = "0x90ab";

const noHashFieldInMsgSig: typeof msgSig & { hash?: never, rawTransaction?: never } = msgSig;

const encryptedKeystore = cw.cfx.accounts.encrypt("0x1234", "5678");
encryptedKeystore.crypto.cipher = "aes-128-ctr";

const msgSignature: string = account.sign("0x1234").signature;
account.signTransaction(testTx).then(txSig => {
    const txSignature: string = txSig.rawTransaction;
});

//
// cw.cfx.personal
// --------------------------------------------------------------------------
/*
cw.cfx.personal.unlockAccount(
    cw.cfx.defaultAccount,
    "passphrase",
    600
);
*/
//
// cw.cfx.ens
// --------------------------------------------------------------------------

//
// cw.cfx.Iban
// --------------------------------------------------------------------------

//
// cw.cfx.abi
// --------------------------------------------------------------------------
const myContractOldAbi = new cw.cfx.Contract(OLD_ABI_STANDARD);
const myContractNewAbi = new cw.cfx.Contract(NEW_ABI_STANDARD);

//
// cw.bzz
// --------------------------------------------------------------------------

//
// cw.shh
// --------------------------------------------------------------------------

//
// cw.utils
// --------------------------------------------------------------------------
const weiStr: string = cw.utils.toWei("100", "gwei");
const weiBn: BigNumber = cw.utils.toWei(cw.utils.toBN("1"));

const rndHex: string = cw.utils.randomHex(10);
const sha3: string = cw.utils.soliditySha3(0, 1, "abc");
const fromWei1: string = cw.utils.fromWei(new BigNumber(1));
const fromWei2: string = cw.utils.fromWei(new BigNumber(1), "gwei");
const fromWei3: string = cw.utils.fromWei("1");
const fromWei4: string = cw.utils.fromWei("1", "gwei");
const fromWei5: string = cw.utils.fromWei(1);
const fromWei6: string = cw.utils.fromWei(1, "gwei");
const isStrictHexString: boolean = cw.utils.isHexStrict("0xc1912");
const isStrictHexNumber: boolean = cw.utils.isHexStrict(0xc1912);
