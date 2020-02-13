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

/** Creates a writable stream that formats bunyan records written to it. */
interface BunyanFormatWritable extends Writable {
    // tslint:disable-next-line no-misused-new
    new (options: BunyanFormatWritable.Options, output?: Writable): BunyanFormatWritable;
    (options: BunyanFormatWritable.Options, output?: Writable): BunyanFormatWritable;
}

declare const BunyanFormat: BunyanFormatWritable;

export = BunyanFormat;
