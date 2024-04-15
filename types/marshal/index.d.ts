/// <reference types="node" />

declare class Marshal {
    parsed?: unknown;

    constructor(buffer: Buffer);
    constructor(buffer: string, encoding?: BufferEncoding);

    load(buffer: Buffer): this;
    load(buffer: string, encoding?: BufferEncoding): this;

    toString(encoding?: BufferEncoding): string;
    toJSON(): unknown;
}

export = Marshal;
