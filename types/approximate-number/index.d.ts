declare namespace approximateNumber {
    interface Options {
        separator?: string | boolean | undefined;
        decimal?: string | boolean | undefined;
        round?: boolean | undefined;
        min10k?: boolean | undefined;
        prefix?: string | undefined;
        suffix?: string | undefined;
        capital?: boolean | undefined;
        precision?: number | undefined;
    }
}

declare function approximateNumber(
    input: number | string,
    options?: approximateNumber.Options,
): string;

export = approximateNumber;
export as namespace approximateNumber;
