import Web3 = require("web3");
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
const account = web3.eth.accounts.privateKeyToAccount("0x1234");

// check that no `publicKey` field is present on `Account` type
const noPublicKeyInAccount: typeof account & { publicKey?: never } = account;

const testTx = {
    to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
    value: '1000000000',
    gas: 2000000
};

web3.eth.accounts.signTransaction(testTx, "").then(txSig => {
    txSig.messageHash = "0x1234";
    txSig.rawTransaction = "0x5678";

    const noHashFieldInTxSig: typeof txSig & { hash?: never, message?: never, signature?: never } = txSig;
});

const msgSig = web3.eth.accounts.sign("0x1234", "0x5678");
msgSig.messageHash = "0x1234";
msgSig.message = "0x5678";
msgSig.signature = "0x90ab";

const noHashFieldInMsgSig: typeof msgSig & { hash?: never, rawTransaction?: never } = msgSig;

const encryptedKeystore = web3.eth.accounts.encrypt("0x1234", "5678");
encryptedKeystore.crypto.cipher = "aes-128-ctr";

const msgSignature: string = account.sign("0x1234").signature;
account.signTransaction(testTx).then(txSig => {
    const txSignature: string = txSig.rawTransaction;
});

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
const isStrictHexString: boolean = web3.utils.isHexStrict("0xc1912");
const isStrictHexNumber: boolean = web3.utils.isHexStrict(0xc1912);
