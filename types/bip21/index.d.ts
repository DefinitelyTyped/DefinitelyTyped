// Type definitions for bip21 v1.1.2
// Project: https://github.com/bitcoinjs/bip21
// Definitions by: Stefan Huber <https://github.com/stefanhuber/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace bip21 {
    export function decode(uri:string) : {address:string,amount?:number};
    export function encode(address:string,options?:any) : string;
}

export = bip21;
