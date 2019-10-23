// Type definitions for base-x 3.0
// Project: https://github.com/cryptocoinjs/base-x
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Buffer } from 'buffer';

export = baseX;

declare function baseX(ALPHABET: string): baseX.BaseConverter;

declare namespace baseX {
    interface BaseConverter {
        encode(buffer: Buffer): string;
        decodeUnsafe(string: string): Buffer | undefined;
        decode(string: string): Buffer;
    }
}
