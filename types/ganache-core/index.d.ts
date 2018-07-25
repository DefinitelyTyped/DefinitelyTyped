// Type definitions for ganache-core 2.1
// Project: https://github.com/trufflesuite/ganache-core#readme
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Provider } from "ethereum-protocol";
export interface GanacheOpts {
    verbose?: boolean;
    logger?: {
        log(msg: string): void;
    };
    port?: number;
    network_id?: number;
    networkId?: number;
    mnemonic?: string;
    gasLimit?: number;
}
export function provider(opts: GanacheOpts): Provider;
