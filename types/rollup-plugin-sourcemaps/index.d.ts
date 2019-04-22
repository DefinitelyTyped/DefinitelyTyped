// Type definitions for rollup-plugin-sourcemaps 0.4
// Project: https://github.com/maxdavidson/rollup-plugin-sourcemaps#readme
// Definitions by: Eoin O'Brien <https://github.com/eoin-obrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { Plugin } from 'rollup';

declare namespace sourcemaps {
    type ReadFileCallback = (err: NodeJS.ErrnoException | null, data: string) => void;
    type ReadFileFunction = (file: string | Buffer | number, encoding: string, callback: ReadFileCallback) => void;

    interface Options {
        include?: Array<string | RegExp> | string | RegExp | null;
        exclude?: Array<string | RegExp> | string | RegExp | null;
        readFile?: ReadFileFunction;
    }
}

export = sourcemaps;
declare function sourcemaps(options?: sourcemaps.Options): Plugin;
