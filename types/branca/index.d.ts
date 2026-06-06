/// <reference types="node" />

export = branca;

declare class Branca {
    constructor(key: string | Buffer);

    encode(message: string, timestamp?: number): string;
    decode(token: string, ttl?: number): Buffer;
    timestamp(token: string): number;
}

declare function branca(key: string | Buffer): Branca;
