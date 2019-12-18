// Type definitions for ripemd160 2.0
// Project: https://github.com/crypto-browserify/ripemd160#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Hash } from 'crypto';

export = RIPEMD160;

declare const RIPEMD160: RIPEMD160Static;

interface RIPEMD160Static {
    new (): Hash;
}
