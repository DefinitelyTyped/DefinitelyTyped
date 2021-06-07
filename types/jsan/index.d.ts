// Type definitions for jsan 3.1
// Project: https://github.com/kolodny/jsan
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    date?: boolean;
    function?: boolean;
    regex?: boolean;
    undefined?: boolean;
    error?: boolean;
    symbol?: boolean;
    map?: boolean;
    set?: boolean;
    nan?: boolean;
    infinity?: boolean;
    refs?: boolean;
}

declare function stringify(
    value: unknown,
    replacer?: (key: string, value: unknown) => unknown | Array<number | string> | null,
    space?: string | number,
    _options?: Options | boolean
): string;

declare function parse(
    text: string,
    reviver?: (key: string, value: unknown) => unknown
): unknown;

declare const _default: {
    stringify: typeof stringify,
    parse: typeof parse,
};
export = _default;
