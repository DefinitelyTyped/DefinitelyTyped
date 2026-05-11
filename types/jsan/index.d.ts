export interface Options {
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
    circular?: unknown;
}

export function stringify(
    value: unknown,
    replacer?: (key: string, value: unknown) => unknown | Array<number | string> | null,
    space?: string | number,
    _options?: Options | boolean,
): string;

export function parse(
    text: string,
    reviver?: (key: string, value: unknown) => unknown,
): unknown;
