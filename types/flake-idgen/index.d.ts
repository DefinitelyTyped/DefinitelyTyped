// Type definitions for flakge-idgen 0.1.4
// Project: https://github.com/T-PWK/flake-idgen
// Definitions by: Yuce Tekol <http://yuce.me/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


interface ConstructorOptions {
    datacenter?: number;
    worker?: number;
    id?: number;
    epoch?: number;
    seqMask?: number;
}

declare class FlakeId {
    constructor(options?: ConstructorOptions);
    next(callback?: (err: Error, id: Buffer) => void): Buffer;
}
export = FlakeId;
