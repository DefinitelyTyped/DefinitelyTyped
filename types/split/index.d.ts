// Type definitions for split v1.0.1
// Project: https://github.com/dominictarr/split
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="through" />

import { ThroughStream } from 'through';

// doc-strings taken from https://github.com/dominictarr/split, used under MIT license

interface SplitOptions {
    maxLength?: number;
    /**
     * By default the last buffer not delimited by a newline or `matcher` will be emitted.
     * To prevent this set `options.trailing` to `false`.
     */
    trailing?: boolean;
}

declare function split(matcher?: any, mapper?: any, options?: SplitOptions): ThroughStream;

export = split;
