// Type definitions for branca 0.3
// Project: https://github.com/tuupola/branca-js
// Definitions by: Brett Cocking <https://github.com/BrettIRL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = branca;

declare class Branca {
    constructor(key: string);

    encode(message: string, timestamp?: number): string;
    decode(token: string, ttl?: number): Buffer;
    timestamp(token: string): number;
}

declare function branca(key: string): Branca;
