// Type definitions for bunyan-format 0.2
// Project: https://github.com/thlorenz/bunyan-format
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { Writable } from 'stream';

declare namespace BunyanFormatWritable {
    interface ColorFromLevel {
        [level: number]: string;
    }

    interface Options {
        outputMode?: 'short' | 'long' | 'simple' | 'json' | 'bunyan';
        color?: boolean;
        colorFromLevel?: ColorFromLevel;
        levelInString?: boolean;
        jsonIndent?: string | number;
    }
}

declare class BunyanFormatWritable extends Writable {
    /** Creates a writable stream that formats bunyan records written to it. */
    constructor(options: BunyanFormatWritable.Options, output?: Writable);
}

export = BunyanFormatWritable;
