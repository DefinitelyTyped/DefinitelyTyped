/// <reference types="node" />

interface ConstructorOptions {
    datacenter?: number | undefined;
    worker?: number | undefined;
    id?: number | undefined;
    epoch?: number | undefined;
    seqMask?: number | undefined;
}

declare namespace FlakeId {}

declare class FlakeId {
    constructor(options?: ConstructorOptions);
    next(callback?: (err: Error, id: Buffer) => void): Buffer;
}
export = FlakeId;
