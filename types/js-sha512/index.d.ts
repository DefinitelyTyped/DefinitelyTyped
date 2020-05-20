// Type definitions for js-sha512 0.7
// Project: https://github.com/emn178/js-sha512
// Definitions by: Nico Jansen <https://github.com/nicojs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Hash {
    update(messageToHash: string): Hash;
    hex(): string;
    array(): number[];
    digest(): number[];
    arrayBuffer(): ArrayBuffer;
}

interface HashStatic {
    (messageToHash: string): string;
    hex(messageToHash: string): string;
    array(messageToHash: string): number[];
    digest(messageToHash: string): number[];
    arrayBuffer(messageToHash: string): ArrayBuffer;
    create(): Hash;
    update(messageToHash: string): Hash;
    hmac: HmacStatic;
}

interface JSSha512Static extends HashStatic {
    sha512: HashStatic;
    sha384: HashStatic;
    sha512_224: HashStatic;
    sha512_256: HashStatic;
    create(): Hash;
}

interface HmacStatic {
    (key: string, messageToHash: string): string;
    create(key: string): Hash;
    update(key: string, messageToHash: string): Hash;
}

declare const jsSha512: JSSha512Static;
export = jsSha512;
