// Type definitions for @ledgerhq/hw-transport-node-hid 4.22
// Project: https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-transport-node-hid
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types = "node"/>
import HID = require("node-hid");
import Transport from "@ledgerhq/hw-transport";

declare class TransportNodeHid extends Transport {
    constructor(
        device: HID.HID,
        ledgerTransport?: boolean,
        timeout?: number
    );
    static open(path: string): Promise<TransportNodeHid>;
    setScrambleKey(): void;

    device: HID.HID;
    ledgerTransport: boolean;
    timeout: number;
    exchangeStack: any[];
}

export default TransportNodeHid;
