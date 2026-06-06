/// <reference types="node" />
import stream = require("stream");

export interface PezOptions extends stream.WritableOptions {
    boundary: string;
    maxBytes?: number;
    maxParts?: number;
}

export class Dispenser extends stream.Writable {
    constructor(options?: PezOptions);
}
