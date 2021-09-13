// Type definitions for byte-size 8.1
// Project: https://github.com/75lb/byte-size#readme
// Definitions by: lntel <https://github.com/lntel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type byteSizeUnit = 'metric' | 'iec' | 'metric_octet' | 'iec_octet';

export interface byteSizeOptions {
    precision?: number;
    units?: byteSizeUnit;
    customUnits?: object;
    toStringFn?: () => string;
    locale?: string | string[];
}

export interface ByteSizeResult {
    value: string;
    unit: string;
    long: string;
}

declare function byteSize(bytes: number, options?: byteSizeOptions): ByteSizeResult;

export function defaultOptions(options: byteSizeOptions): void;

export default byteSize;
