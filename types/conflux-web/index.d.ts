// Type definitions for conflux-web 
// Project: https://github.com/Conflux-Chain/ConfluxWeb
// Definitions by: liuis Lee <https://github.com/liuis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import Providers, { Provider } from "./providers";
//import { Bzz, Shh } from "./types";
//import { BatchRequest, Net, Personal } from "./eth/types";
import { BatchRequest, Net } from "./cfx/types";
import Utils from "./utils";
//import Eth from "./eth/index";
import Cfx from "./cfx/index";

declare class ConfluxWeb {
    static providers: Providers;
    static givenProvider: Provider;
    static modules: {
        Cfx: new (provider: Provider) => Cfx;
        Net: new (provider: Provider) => Net;
        //Personal: new (provider: Provider) => Personal;
        //Shh: new (provider: Provider) => Shh;
        //Bzz: new (provider: Provider) => Bzz;
    };
    static utils: Utils;
    constructor(provider?: Provider | string);
    version: string;
    BatchRequest: new () => BatchRequest;
    extend(methods: any): any; // TODO
    //bzz: Bzz;
    currentProvider: Provider;
    //eth: Eth;
    cfx: Cfx;
    //shh: Shh;
    givenProvider: Provider;
    providers: Providers;
    setProvider(provider: Provider): void;
    utils: Utils;
}

export = ConfluxWeb;
