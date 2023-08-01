// Type definitions for approximate-number 2.1
// Project: https://github.com/nfriedly/approximate-number
// Definitions by: Giorgi Kakhoshvili <https://github.com/giokaxo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Options = {
    separator?: string | boolean;
    decimal?: string | boolean;
    round?: boolean;
    min10k?: boolean;
    prefix?: string;
    suffix?: string;
    capital?: boolean;
    precision?: number | undefined;
};

export default function approximateNumber(
    input: number | string,
    options?: Options,
): string;
