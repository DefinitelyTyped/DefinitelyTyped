// Type definitions for amp-message 0.1
// Project: https://github.com/visionmedia/node-amp-message
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

declare class Message {
    constructor(args: Buffer | Buffer[]);

    inspect(): string;

    toBuffer(): Buffer;

    push(...items: Buffer[]): number;

    pop(): Buffer | undefined;

    shift(): Buffer | undefined;

    unshift(...items: Buffer[]): number;
}

export = Message;
