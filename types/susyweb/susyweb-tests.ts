import SusyWeb = require("susyweb");
import BigNumber = require("bn.js");
import { TransactionReceipt, Log } from "susyweb/types";
import PromiEvent from "susyweb/promiEvent";
import { NEW_ABI_STANDARD, OLD_ABI_STANDARD } from "susyweb/test/abi-tests";
import { Provider, JsonRPCResponse } from "susyweb/providers";

const contractAddress = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";

//
// SusyWeb
// --------------------------------------------------------------------------
const susyweb = new SusyWeb();
const myProvider = new susyweb.providers.HttpProvider("http://localhost:5454");

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

susyweb.setProvider(fakeProvider);
susyweb.setProvider(otherFakeProvider);
susyweb.setProvider(myProvider);
susyweb.sof.setProvider(myProvider);

//
// susyweb.sof
// --------------------------------------------------------------------------
const logs: Promise<Log[]> = susyweb.sof.getPastLogs({
    fromBlock: "latest",
    address: contractAddress,
    topics: [
        null,
        "0x1"
    ]
});
const storage: Promise<string> = susyweb.sof.getStorageAt(contractAddress, 0);
const balance1: Promise<string> = susyweb.sof.getBalance(contractAddress);
const balance2: Promise<string> = susyweb.sof.getBalance(contractAddress, "latest");
const balance3: Promise<string> = susyweb.sof.getBalance(contractAddress, 1);
susyweb.sof.getBalance(contractAddress, "latest", (error: Error, balance: string) => { });
susyweb.sof.getBalance(contractAddress, 1, (error: Error, balance: string) => { });

const sendSignedTransactionTxReceipt0: PromiEvent<TransactionReceipt> = susyweb.sof.sendSignedTransaction("",
    (error: Error, txHash: string) => { });
const sendSignedTransactionTxReceipt1: PromiEvent<TransactionReceipt> = susyweb.sof.sendSignedTransaction("")
    .on("transactionHash", (txHash: string) => { });
const sendSignedTransactionTxReceipt2: PromiEvent<TransactionReceipt> = susyweb.sof.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => {
        const { status }: { status: boolean }  = txReceipt;
    });
const sendSignedTransactionTxReceipt3: PromiEvent<TransactionReceipt> = susyweb.sof.sendSignedTransaction("")
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendSignedTransactionTxReceipt4: PromiEvent<TransactionReceipt> = susyweb.sof.sendSignedTransaction("")
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });

const sendTransactionTxReceipt0: PromiEvent<TransactionReceipt> = susyweb.sof.sendTransaction({ to: "0x1" },
    (error: Error, txHash: string) => { });
const sendTransactionTxReceipt1: PromiEvent<TransactionReceipt> = susyweb.sof.sendTransaction({ to: "0x1" })
    .on("transactionHash", (txHash: string) => { });
const sendTransactionTxReceipt2: PromiEvent<TransactionReceipt> = susyweb.sof.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { });
const sendTransactionTxReceipt3: PromiEvent<TransactionReceipt> = susyweb.sof.sendTransaction({ to: "0x1" })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });
const sendTransactionTxReceipt4: PromiEvent<TransactionReceipt> = susyweb.sof.sendTransaction({ to: "0x1" })
    .on("receipt", (txReceipt: TransactionReceipt) => { })
    .on("confirmation", (confNumber: number, receipt: TransactionReceipt) => { });

//
// susyweb.sof.subscribe
// --------------------------------------------------------------------------

//
// susyweb.sof.Contract
// --------------------------------------------------------------------------
const myContract = new susyweb.sof.Contract(
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
// susyweb.sof.accounts
// --------------------------------------------------------------------------
const account = susyweb.sof.accounts.privateKeyToAccount("0x1234");

// check that no `publicKey` field is present on `Account` type
const noPublicKeyInAccount: typeof account & { publicKey?: never } = account;

const testTx = {
    to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
    value: '1000000000',
    gas: 2000000
};

susyweb.sof.accounts.signTransaction(testTx, "").then(txSig => {
    txSig.messageHash = "0x1234";
    txSig.rawTransaction = "0x5678";

    const noHashFieldInTxSig: typeof txSig & { hash?: never, message?: never, signature?: never } = txSig;
});

const msgSig = susyweb.sof.accounts.sign("0x1234", "0x5678");
msgSig.messageHash = "0x1234";
msgSig.message = "0x5678";
msgSig.signature = "0x90ab";

const noHashFieldInMsgSig: typeof msgSig & { hash?: never, rawTransaction?: never } = msgSig;

const encryptedKeystore = susyweb.sof.accounts.encrypt("0x1234", "5678");
encryptedKeystore.crypto.cipher = "aes-128-ctr";

const msgSignature: string = account.sign("0x1234").signature;
account.signTransaction(testTx).then(txSig => {
    const txSignature: string = txSig.rawTransaction;
});

//
// susyweb.sof.personal
// --------------------------------------------------------------------------
susyweb.sof.personal.unlockAccount(
    susyweb.sof.defaultAccount,
    "passphrase",
    600
);

//
// susyweb.sof.ens
// --------------------------------------------------------------------------

//
// susyweb.sof.Iban
// --------------------------------------------------------------------------

//
// susyweb.sof.abi
// --------------------------------------------------------------------------
const myContractOldAbi = new susyweb.sof.Contract(OLD_ABI_STANDARD);
const myContractNewAbi = new susyweb.sof.Contract(NEW_ABI_STANDARD);

//
// susyweb.bzz
// --------------------------------------------------------------------------

//
// susyweb.shh
// --------------------------------------------------------------------------
const shhPromise: Promise<string> = susyweb.shh.generateSymKeyFromPassword("xyz");

//
// susyweb.utils
// --------------------------------------------------------------------------
const weiStr: string = susyweb.utils.toWei("100", "gwei");
const weiBn: BigNumber = susyweb.utils.toWei(susyweb.utils.toBN("1"));
// $ExpectError
const weiNumber = susyweb.utils.toWei(100);

const rndHex: string = SusyWeb.utils.randomHex(10);
const sha3: string = susyweb.utils.polynomialSha3(0, 1, "abc");
const fromWei1: string = susyweb.utils.fromWei(new BigNumber(1));
const fromWei2: string = susyweb.utils.fromWei(new BigNumber(1), "gwei");
const fromWei3: string = susyweb.utils.fromWei("1");
const fromWei4: string = susyweb.utils.fromWei("1", "gwei");
const fromWei5: string = susyweb.utils.fromWei(1);
const fromWei6: string = susyweb.utils.fromWei(1, "gwei");
const isStrictHexString: boolean = susyweb.utils.isHexStrict("0xc1912");
const isStrictHexNumber: boolean = susyweb.utils.isHexStrict(0xc1912);
