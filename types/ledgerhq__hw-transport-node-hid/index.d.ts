/// <reference types = "node"/>
import HID = require("node-hid");
import Transport from "@ledgerhq/hw-transport";

declare class TransportNodeHid extends Transport {
    constructor(
        device: HID.HID,
        ledgerTransport?: boolean,
        timeout?: number,
    );
    static open(path: string): Promise<TransportNodeHid>;
    setScrambleKey(): void;

    device: HID.HID;
    ledgerTransport: boolean;
    timeout: number;
    exchangeStack: any[];
}

export default TransportNodeHid;
