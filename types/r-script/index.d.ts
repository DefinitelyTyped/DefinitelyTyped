// Type definitions for r-script 0.0
// Project: http://github.com/joshkatz/r-script
// Definitions by: Adrian Leonhard <https://github.com/NaridaL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface R {
    data(...args: any[]): this;
    call(callback: (err: any, d: any) => void): void;
    call(options: R.Options, callback: (err: any, d: any) => void): void;
    callSync(options?: R.Options): any;
}
declare namespace R {
    interface Options {
        dataframe?: "rows" | "colums" | "values";
        matrix?: "rowmajor" | "columnmajor";
        Date?: "ISO8601" | "epoch";
        POSIXt?: "string" | "ISO8601" | "epoch" | "mongo";
        factor?: "string" | "integer";
        complex?: "string" | "list";
        raw?: "base64" | "hex" | "mongo";
        null?: "list" | "null";
        na?: "null" | "string";
        auto_unbox?: boolean;
        digits?: number;
        pretty?: boolean;
        force?: boolean;
        [key: string]: any;
    }
}
declare function R(scriptPath: string): R;
export = R;
