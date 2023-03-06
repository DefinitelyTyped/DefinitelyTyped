// Type definitions for native-duplexpair 1.0
// Project: https://github.com/tediousjs/native-duplexpair#readme
// Definitions by: Tim Perry <https://github.com/pimterry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Duplex, DuplexOptions } from 'stream';

declare class DuplexPair {
    readonly socket1: Duplex;
    readonly socket2: Duplex;

    constructor(options?: DuplexOptions);
}

export = DuplexPair;
