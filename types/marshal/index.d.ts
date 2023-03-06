// Type definitions for marshal 0.5
// Project: https://github.com/clayzermk1/node-marshal
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
