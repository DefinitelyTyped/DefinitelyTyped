/// <reference types="node" />
import * as stream from "stream";

export interface PezOptions extends stream.WritableOptions {
    boundary: string;
    maxBytes?: number;
    maxParts?: number;
}

export class Dispenser extends stream.Writable {
    constructor(options?: PezOptions);
}
