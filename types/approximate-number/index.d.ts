export interface Options {
    separator?: string | boolean;
    decimal?: string | boolean;
    round?: boolean;
    min10k?: boolean;
    prefix?: string;
    suffix?: string;
    capital?: boolean;
    precision?: number | undefined;
}

export default function approximateNumber(
    input: number | string,
    options?: Options,
): string;
