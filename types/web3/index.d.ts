// Type definitions for web3 1.0
// Project: https://github.com/ethereum/web3.js
// Definitions by: Simon Jentzsch <https://github.com/simon-jentzsch>
//                 Nitzan Tomer <https://github.com/nitzantomer>
//                 Zurbo <https://github.com/zurbo>
//                 Xiao Liang <https://github.com/yxliang01>
//                 Francesco Soncina <https://github.com/phra>
//                 Nick Addison <https://github.com/naddison36>
//                 Ícaro Harry <https://github.com/icaroharry>
//                 Linus Norton <https://github.com/linusnorton>
//                 Javier Peletier <https://github.com/jpeletier>
//                 HIKARU KOBORI <https://github.com/anneau>
//                 Baris Gumustas <https://github.com/matrushka>
//                 André Vitor de Lima Matos <https://github.com/andrevmatos>
//                 Levin Keller <https://github.com/levino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
import BigNumber = require("bn.js");
import Providers, { Provider } from "./providers";
import Contract from "./eth/contract";
import { Callback, Bzz, Shh } from "./types";
import { BatchRequest, Net, Personal } from "./eth/types";
import Utils from "./utils";
import Eth from "./eth/index";

declare class Web3 {
    static providers: Providers;
    static givenProvider: Provider;
    static modules: {
        Eth: new (provider: Provider) => Eth;
        Net: new (provider: Provider) => Net;
        Personal: new (provider: Provider) => Personal;
        Shh: new (provider: Provider) => Shh;
        Bzz: new (provider: Provider) => Bzz;
    };
    constructor(provider?: Provider | string);
    version: string;
    BatchRequest: new () => BatchRequest;
    extend(methods: any): any; // TODO
    bzz: Bzz;
    currentProvider: Provider;
    eth: Eth;
    ssh: Shh;
    givenProvider: Provider;
    providers: Providers;
    setProvider(provider: Provider): void;
    utils: Utils;
}

export = Web3;
