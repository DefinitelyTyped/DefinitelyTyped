/// <reference types="node" />

import { Writable } from "stream";

declare namespace BunyanFormatWritable {
    interface ColorFromLevel {
        [level: number]: string;
    }

    interface Options {
        outputMode?: "short" | "long" | "simple" | "json" | "bunyan" | "inspect" | undefined;
        color?: boolean | undefined;
        colorFromLevel?: ColorFromLevel | undefined;
        levelInString?: boolean | undefined;
        jsonIndent?: string | number | undefined;
    }
}

/** Creates a writable stream that formats bunyan records written to it. */
interface BunyanFormatWritable extends Writable {
    // tslint:disable-next-line no-misused-new
    new(options: BunyanFormatWritable.Options, output?: Writable): BunyanFormatWritable;
    (options: BunyanFormatWritable.Options, output?: Writable): BunyanFormatWritable;
}

declare const BunyanFormat: BunyanFormatWritable;

export = BunyanFormat;
