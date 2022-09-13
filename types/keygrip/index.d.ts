// Type definitions for keygrip 1.0
// Project: https://github.com/crypto-utils/keygrip
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Keygrip {
    sign(data: any): string;
    verify(data: any, digest: string): boolean;
    index(data: any, digest: string): number;
}

interface KeygripFunction {
    new (keys: ReadonlyArray<string>, algorithm?: string, encoding?: string): Keygrip;
    (keys: ReadonlyArray<string>, algorithm?: string, encoding?: string): Keygrip;
}

declare const Keygrip: KeygripFunction;

export = Keygrip;
