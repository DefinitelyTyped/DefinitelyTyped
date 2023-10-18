/// <reference types="node" />

import { Duplex, DuplexOptions } from "stream";

declare class DuplexPair {
    readonly socket1: Duplex;
    readonly socket2: Duplex;

    constructor(options?: DuplexOptions);
}

export = DuplexPair;
