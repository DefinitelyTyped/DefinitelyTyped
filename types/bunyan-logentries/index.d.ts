// Type definitions for node-bunyan-logentries v0.1.0
// Project: https://github.com/nemtsov/node-bunyan-logentries
// Definitions by: Aymeric Beaumet <http://aymericbeaumet.me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import bunyan = require("bunyan");

interface StreamOptions {
    token: string;
}

export declare function createStream(options: StreamOptions): NodeJS.WritableStream;
