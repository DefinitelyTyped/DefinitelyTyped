// Type definitions for @ledgerhq/hw-transport-u2f 4.21
// Project: https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-transport-u2f
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import Transport from "@ledgerhq/hw-transport";

declare class TransportU2F extends Transport {
    constructor();
    static open(_: any, _openTimeout?: number): Promise<TransportU2F>;
}

export default TransportU2F;
