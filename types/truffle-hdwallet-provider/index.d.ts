// Type definitions for truffle-hdwallet-provider 0.0
// Project: https://github.com/trufflesuite/truffle-hdwallet-provider#readme
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import {
    JSONRPCRequestPayload,
    JSONRPCResponsePayload,
    Provider
} from "ethereum-protocol";
declare class HDWalletProvider implements Provider {
    constructor(mnemonic: string, rpc_url: string, address_index?: number);
    sendAsync(
        payload: JSONRPCRequestPayload,
        callback: (err: Error, result: JSONRPCResponsePayload) => void
    ): void;
}
export = HDWalletProvider;
