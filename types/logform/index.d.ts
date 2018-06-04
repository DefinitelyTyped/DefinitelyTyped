// Type definitions for logform 1.2
// Project: https://github.com/winstonjs/logform
// Definitions by: DABH <https://github.com/DABH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface TransformableInfo {
    level: string;
    message: string;
    [key: string]: any;
}

export type TransformFunction = (info: TransformableInfo, opts?: any) => TransformableInfo | boolean;
export type Colors = { [key: string]: string | string[] }; // tslint:disable-line interface-over-type-literal
export type FormatWrap = (opts?: any) => Format;

export class Format {
    constructor(opts?: object);

    options?: object;
    transform: TransformFunction;
}

export class Colorizer extends Format {
    constructor(opts?: object);

    createColorize: (opts?: object) => Colorizer;
    addColors: (colors: Colors) => Colors;
    colorize: (level: string, message: string) => string;
}

export function format(transform: TransformFunction): FormatWrap;

export function levels(config: object): object;

export namespace format {
    function align(opts?: object): Format;
    function cli(opts?: object): Format;
    function colorize(opts?: object): Colorizer;
    function combine(...formats: Format[]): Format;
    function json(opts?: object): Format;
    function label(opts?: object): Format;
    function logstash(opts?: object): Format;
    function padLevels(opts?: object): Format;
    function prettyPrint(opts?: object): Format;
    function printf(templateFunction: (info: TransformableInfo) => string): Format;
    function simple(opts?: object): Format;
    function splat(opts?: object): Format;
    function timestamp(opts?: object): Format;
    function uncolorize(opts?: object): Format;
}
