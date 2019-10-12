// Type definitions for rfc4648 1.2
// Project: https://github.com/swansontec/rfc4648
// Definitions by: Thibault Meunier <https://github.com/thibmeu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

type parseBase = <T = Uint8Array>(
    data: string,
    options?: {
        out?: { new(): T };
        loose?: boolean;
    },
) => T;

type stringifyBase = (data: object, options?: { pad?: boolean }) => string;

export namespace base64 {
    const parse: parseBase;
    const stringify: stringifyBase;
}

export namespace base64url {
    const parse: parseBase;
    const stringify: stringifyBase;
}

export namespace base32 {
    const parse: parseBase;
    const stringify: stringifyBase;
}

export namespace base32hex {
    const parse: parseBase;
    const stringify: stringifyBase;
}

export namespace base16 {
    const parse: parseBase;
    const stringify: stringifyBase;
}

interface Encoding {
    bits: number;
    chars: string;
}

export namespace codec {
    function parse<T = Uint8Array>(
        data: string,
        encoding: Encoding,
        options?: {
            out?: { new(): T };
            loose?: boolean;
        },
    ): T;
    function stringify(
        data: object,
        encoding: Encoding,
        options?: { pad?: boolean }
    ): string;
}

export {};
