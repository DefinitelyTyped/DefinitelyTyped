/// <reference types="node" />

import { Transform } from "stream";

declare class JSONStream extends Transform {
    constructor();
}

interface Export {
    (): JSONStream;
    JSONStream: typeof JSONStream;
}

declare const exports: Export;

export = exports;
