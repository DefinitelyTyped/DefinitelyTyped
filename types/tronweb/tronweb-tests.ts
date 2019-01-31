import {TronWeb} from "tronweb";

const HttpProvider = TronWeb.providers.HttpProvider; // $ExpectType Plugin
const fullNode = new HttpProvider('https://api.trongrid.io'); // $ExpectType Plugin
const solidityNode = new HttpProvider('https://api.trongrid.io:'); // $ExpectType Plugin
const eventServer = 'https://api.trongrid.io'; // $ExpectType Plugin

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer); // $ExpectType Plugin
