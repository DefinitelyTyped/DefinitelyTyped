/// <reference types="node" />

type Message = string | Buffer | number[];

interface Sha256 {
    (message: Message, options?: { asString: true }): string;
    (message: Message, options: { asBytes: true }): number[];
}

interface Sha256WithX2 extends Sha256 {
    x2: Sha256;
}

declare const sha256: Sha256WithX2;

export = sha256;

export as namespace sha256;
