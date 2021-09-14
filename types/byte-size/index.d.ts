// Type definitions for byte-size 8.1
// Project: https://github.com/75lb/byte-size#readme
// Definitions by: lntel <https://github.com/lntel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ByteSizeOptions {
    precision?: number;
    units?: string;
    customUnits?: object;
    toStringFn?: () => string;
    locale?: string | string[];
}

export interface ByteSizeResult {
    value: string;
    unit: string;
    long: string;
    toString: () => string;
}

declare function byteSize(bytes: number, options?: ByteSizeOptions): ByteSizeResult;

declare namespace byteSize {
    function defaultOptions(options: ByteSizeOptions): void;
}

export default byteSize;
