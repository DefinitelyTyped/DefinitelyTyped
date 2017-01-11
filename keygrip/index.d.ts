// Type definitions for keygrip 1.0
// Project: https://github.com/crypto-utils/keygrip
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface Keygrip {
    sign(data: any): string;
    verify(data: any, digest: string): boolean;
    index(data: any, digest: string): number;
}

declare interface KeygripFunction {
    new (keys: string[], algorithm?: string, encoding?: string): Keygrip;
    (keys: string[], algorithm?: string, encoding?: string): Keygrip;
}

declare const Keygrip: KeygripFunction;

export = Keygrip;
