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
