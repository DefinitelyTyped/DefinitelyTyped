export interface Formatters {
    header?: ((value: string) => string) | undefined;
    undefined?: ((value: undefined) => string) | undefined;
    boolean?: ((value: boolean) => boolean) | undefined;
    number?: ((value: number) => number) | undefined;
    bigint?: ((value: number) => number) | undefined;
    string?: ((value: string) => string) | undefined;
    symbol?: ((value: symbol) => string) | undefined;
    function?: (value: (...args: any[]) => any) => string | undefined;
    object?: ((value: any) => string) | undefined;
}

export interface FieldObject {
    /** The label. Defaults to the value path if not provided */
    label?: string | undefined;
    /** The target path */
    value: string | ((row: any[]) => string);
    /** Default if value is not found */
    default?: string | undefined;
}

export type Field = string | ((row: any[]) => string) | FieldObject;

export { Options as ParserOptions } from './BaseParser';
export { default as Parser } from './Parser';
export { default as StreamParser, Options as StreamOptions, AsyncOptions } from './StreamParser';
