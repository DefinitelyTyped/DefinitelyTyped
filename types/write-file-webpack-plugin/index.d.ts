import webpack = require("webpack");

export interface UserOptionsType {
    /**
     * Atomically replace files content (i.e., to prevent programs like test watchers from seeing partial files).
     * @default true
     */
    atomicReplace?: boolean | undefined;
    /**
     * Stop writing files on webpack errors
     * @default true
     */
    exitOnErrors?: boolean | undefined;
    /**
     * A regular expression or function used to test if file should be written.
     * When not present, all bundle will be written.
     */
    test?: RegExp | undefined;
    /**
     * Use hash index to write only files that have changed since the last iteration.
     * @default true
     */
    useHashIndex?: boolean | undefined;
    /**
     * Logs names of the files that are being written (or skipped because they have not changed)
     * @default true
     */
    log?: boolean | undefined;
    /**
     * Forces the execution of the plugin regardless of being using `webpack-dev-server` or not
     * @default false
     */
    force?: boolean | undefined;
}

export default class WriteFilePlugin extends webpack.Plugin {
    constructor(userOptions?: UserOptionsType);
}
