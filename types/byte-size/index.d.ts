// Type definitions for byte-size 8.1
// Project: https://github.com/75lb/byte-size#readme
// Definitions by: lntel <https://github.com/lntel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type byteSizeUnit = 'metric' | 'iec' | 'metric_octet' | 'iec_octet';

export interface byteSizeOptions {
    precision: number;
    units: byteSizeUnit | string;
    customUnits?: object;
    toStringFn: () => void;
    locale: string | string[];
}

export function byteSize(bytes: number, options?: byteSizeOptions): object;
