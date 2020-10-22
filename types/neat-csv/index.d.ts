// Type definitions for neat-csv 4.0
// Project: https://github.com/sindresorhus/neat-csv
// Definitions by: Alex Ruble <https://github.com/calamitizer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable } from 'stream';

declare function neatCsv(input: neatCsv.Input, options?: neatCsv.Options): Promise<neatCsv.Row[]>;

declare namespace neatCsv {
    /** The CSV data to parse. */
    type Input = string | Buffer | Readable;

    /** A configuration object to be passed to csv-parser. */
    interface Options {
        escape?: string;
        headers?: ReadonlyArray<string> | boolean;
        mapHeaders?: (args: { header: string; index: number }) => string | null;
        mapValues?: (args: { header: string; index: number; value: any }) => any;
        newline?: string;
        quote?: string;
        raw?: boolean;
        separator?: string;
        skipLines?: number;
        maxRowBytes?: number;
        strict?: boolean;
    }

    /** A representation of one row of the input CSV. */
    interface Row {
        [header: string]: string;
    }
}

export = neatCsv;
