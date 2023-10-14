// Type definitions for @hapi/pez 6.1
// Project: https://github.com/hapijs/pez
// Definitions by: Grant Timmerman <https://github.com/grant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
