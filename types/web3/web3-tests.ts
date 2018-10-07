// --------------------------------------------------------------------------
// Many type definitions do not correct at this momonet
// Please contribute to add more tests to check function parameters and return type
// Please use the official docs(https://web3js.readthedocs.io/en/1.0/#) and/or
// the code(v1.0.0-beta.36(https://github.com/ethereum/web3.js/tree/v1.0.0-beta.36)
// as a reference until all type definitions are correct
// --------------------------------------------------------------------------
import Web3 = require("web3");
import BigNumber = require("bn.js");

const contractAddress = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";
const privateKey = "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709";

//
// Web3
// --------------------------------------------------------------------------
const web3 = new Web3();
const myProvider = new web3.providers.HttpProvider("http://localhost:5454");
let setProviderRes: boolean = web3.setProvider(myProvider);

//
// web3.eth
// --------------------------------------------------------------------------
setProviderRes = web3.eth.setProvider(myProvider);
const balance: Promise<string> = web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1");
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
let testAccount = web3.eth.accounts.create("2435@#@#@±±±±!!!!678543213456764321§34567543213456785432134567");
testAccount = web3.eth.accounts.privateKeyToAccount(privateKey);

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
setProviderRes = web3.bzz.setProvider(myProvider);

//
// web3.shh
// --------------------------------------------------------------------------
setProviderRes = web3.shh.setProvider(myProvider);
const shhPromise: Promise<string> = web3.shh.generateSymKeyFromPassword("xyz");

//
// web3.utils
// --------------------------------------------------------------------------
const weiStr: string = web3.utils.toWei("100", "gwei");
const weiBn: BigNumber = web3.utils.toWei(web3.utils.toBN("1"));
const rndHex: string = Web3.utils.randomHex(10);
const sha3: string = web3.utils.soliditySha3(0, 1, "abc");
