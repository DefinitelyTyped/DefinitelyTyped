// Type definitions for bunyan-prettystream 0.1.3
// Project: https://www.npmjs.com/package/bunyan-prettystream
// Definitions by: Jason Swearingen <https://github.com/jasonswearingen/>, Vadim Macagon <https://github.com/enlight/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import stream = require("stream");
declare class PrettyStream extends stream.Writable {
    /**
     * @param options.mode Output format, can be either `long`, `short`, or `dev`,
     *                     defaults to `long`.
     * @param options.useColor Indicates whether or not output should be colored,
     *                         defaults to `true`.
     */
    constructor(options?: { mode?: string; useColor?: boolean });

    /**
     * Pipes data from this stream to another.
     *
     * @param destination Stream to write data to.
     * @param options.end Indicates whether `end()` should be called on the `destination`
     *                    stream when this stream emits `end`, defaults to `true`.
     * @return The `destination` stream.
     */
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
}
export = PrettyStream;
