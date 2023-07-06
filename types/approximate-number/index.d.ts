// Type definitions for approximate-number 2.1.0
// Project: https://github.com/nfriedly/approximate-number
// Definitions by: Giorgi Kakhoshvili <https://github.com/giokaxo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 5.1.6

declare module 'approximate-number' {
    export type Options = {
        separator: string | boolean;
        decimal: string | boolean;
        round: boolean;
        min10k: boolean;
        prefix: string;
        suffix: string;
        capital: boolean;
        precision: number | undefined;
    };
    function approximateNumber(
        input: number | string,
        options?: Options,
    ): string;

    export default approximateNumber;
}
