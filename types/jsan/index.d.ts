// Type definitions for jsan 3.1
// Project: https://github.com/kolodny/jsan
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    date?: boolean | undefined;
    function?: boolean | undefined;
    regex?: boolean | undefined;
    undefined?: boolean | undefined;
    error?: boolean | undefined;
    symbol?: boolean | undefined;
    map?: boolean | undefined;
    set?: boolean | undefined;
    nan?: boolean | undefined;
    infinity?: boolean | undefined;
    refs?: boolean | undefined;
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
