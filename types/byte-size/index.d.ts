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
