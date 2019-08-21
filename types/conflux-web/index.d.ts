// Type definitions for conflux-web 
// Project: https://github.com/Conflux-Chain/ConfluxWeb
// Definitions by: liuis Lee <https://github.com/liuis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import Providers, { Provider } from "./providers";
import { BatchRequest, Net } from "./cfx/types";
import Utils from "./utils";
import Cfx from "./cfx/index";

declare class ConfluxWeb {
    static providers: Providers;
    static givenProvider: Provider;
    static modules: {
        Cfx: new (provider: Provider) => Cfx;
        Net: new (provider: Provider) => Net;
    };
    static utils: Utils;
    constructor(provider?: Provider | string);
    version: string;
    BatchRequest: new () => BatchRequest;
    extend(methods: any): any; // TODO
    currentProvider: Provider;
    cfx: Cfx;
    givenProvider: Provider;
    providers: Providers;
    setProvider(provider: Provider): void;
    utils: Utils;
}

export = ConfluxWeb;
