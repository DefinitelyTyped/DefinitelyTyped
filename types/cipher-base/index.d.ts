/// <reference types="node" />

declare abstract class CipherBase {
    constructor(hashMode?: string);
    abstract final(): Buffer;
    abstract update(value: Buffer, inputEnc?: string, outputEnc?: string): Buffer;
}

export = CipherBase;
