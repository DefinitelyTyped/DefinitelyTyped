/// <reference types="node" />
import Transport from "@ledgerhq/hw-transport";

declare class TransportU2F extends Transport {
    constructor();
    static open(_: any, _openTimeout?: number): Promise<TransportU2F>;
}

export default TransportU2F;
