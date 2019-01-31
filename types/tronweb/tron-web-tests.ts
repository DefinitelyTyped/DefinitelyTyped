import {TronWeb } from "tronweb";

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
const solidityNode = new HttpProvider('https://api.trongrid.io:'); // Solidity node http endpoint
const eventServer = 'https://api.trongrid.io'; // Contract events http endpoint

const FULL_NODE_API = 'https://api.trongrid.io';

const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

tronWeb.setDefaultBlock(0);
tronWeb.setPrivateKey('prv');

const provider = new HttpProvider(FULL_NODE_API);
tronWeb.setFullNode(provider);

tronWeb.fromUtf8("shamsudin");
