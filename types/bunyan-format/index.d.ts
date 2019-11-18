// Type definitions for bunyan-format 0.2
// Project: https://github.com/thlorenz/bunyan-format
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
//                 Ashley Abbott <https://github.com/ashpabb>
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

interface BunyanFormatWritable extends Writable {}

declare var BunyanFormatWritable: {
    /** Creates a writable stream that formats bunyan records written to it. */
    (options: BunyanFormatWritable.Options, output?: Writable): BunyanFormatWritable;
    /** Creates a writable stream that formats bunyan records written to it. */
    new (options: BunyanFormatWritable.Options, output?: Writable): BunyanFormatWritable;
};

export = BunyanFormatWritable;
