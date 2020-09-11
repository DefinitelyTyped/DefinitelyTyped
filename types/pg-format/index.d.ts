// Type definitions for pg-format 1.0
// Project: https://github.com/datalanche/node-pg-format
// Definitions by: Alec Zopf <https://github.com/zopf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
export = format;

declare function format(fmt: string, ...args: any[]): string;

declare namespace format {
    function config(config?: {
        pattern: {
            ident?: string,
            literal?: string,
            string?: string
        }
    }): void;
    function ident(val: string | number | boolean | any[] | Date): string;
    function literal(val: string | number | boolean | any[] | Date | object | null | undefined): string;
    function string(val: string | number | boolean | any[] | Date | object | null | undefined): string;
    function withArray(fmt: string, array: any[]): string;
}
