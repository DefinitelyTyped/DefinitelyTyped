interface R {
    data(...args: any[]): this;
    call(callback: (err: any, d: any) => void): void;
    call(options: R.Options, callback: (err: any, d: any) => void): void;
    callSync(options?: R.Options): any;
}
declare namespace R {
    interface Options {
        dataframe?: "rows" | "colums" | "values" | undefined;
        matrix?: "rowmajor" | "columnmajor" | undefined;
        Date?: "ISO8601" | "epoch" | undefined;
        POSIXt?: "string" | "ISO8601" | "epoch" | "mongo" | undefined;
        factor?: "string" | "integer" | undefined;
        complex?: "string" | "list" | undefined;
        raw?: "base64" | "hex" | "mongo" | undefined;
        null?: "list" | "null" | undefined;
        na?: "null" | "string" | undefined;
        auto_unbox?: boolean | undefined;
        digits?: number | undefined;
        pretty?: boolean | undefined;
        force?: boolean | undefined;
        [key: string]: any;
    }
}
declare function R(scriptPath: string): R;
export = R;
