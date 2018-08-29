// Type definitions for split v0.3.3
// Project: https://github.com/dominictarr/split
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="through" />

import { Transform, TransformOptions } from 'stream';
import { ThroughStream } from 'through';

interface SplitOptions {
    maxLength: number
}

declare function split(matcher?: any, mapper?: any, options?: SplitOptions): ThroughStream;

export = split;
