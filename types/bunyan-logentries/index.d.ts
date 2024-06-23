/// <reference types="node" />

import bunyan = require("bunyan");

interface StreamOptions {
    token: string;
}

export declare function createStream(options: StreamOptions): NodeJS.WritableStream;
