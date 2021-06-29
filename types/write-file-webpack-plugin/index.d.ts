// Type definitions for write-file-webpack-plugin 4.5
// Project: https://github.com/gajus/write-file-webpack-plugin#readme
// Definitions by: Nathan Hardy <https://github.com/nhardy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import webpack = require("webpack");

export interface UserOptionsType {
    /**
     * Atomically replace files content (i.e., to prevent programs like test watchers from seeing partial files).
     * @default true
     */
    atomicReplace?: boolean;
    /**
     * Stop writing files on webpack errors
     * @default true
     */
    exitOnErrors?: boolean;
    /**
     * A regular expression or function used to test if file should be written.
     * When not present, all bundle will be written.
     */
    test?: RegExp;
    /**
     * Use hash index to write only files that have changed since the last iteration.
     * @default true
     */
    useHashIndex?: boolean;
    /**
     * Logs names of the files that are being written (or skipped because they have not changed)
     * @default true
     */
    log?: boolean;
    /**
     * Forces the execution of the plugin regardless of being using `webpack-dev-server` or not
     * @default false
     */
    force?: boolean;
}

export default class WriteFilePlugin extends webpack.Plugin {
    constructor(userOptions?: UserOptionsType);
}
