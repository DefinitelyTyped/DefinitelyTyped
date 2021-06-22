// Type definitions for json2csv 5.0
// Project: https://github.com/zemirco/json2csv
// Definitions by: Juanjo Diaz <https://github.com/juanjoDiaz>
//                 Daniel Gooß <https://github.com/dangoo>
//                 Denis Yilmaz <https://github.com/denisyilmaz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
import { Readable, TransformOptions } from "stream";

import JSON2CSVParser = require("./JSON2CSVParser");
import JSON2CSVAsyncParser = require("./JSON2CSVAsyncParser");
import JSON2CSVTransform = require("./JSON2CSVTransform");
import flatten = require("./transforms/flatten");
import unwind = require("./transforms/unwind");

export as namespace json2csv;

export { JSON2CSVParser as Parser, JSON2CSVAsyncParser as AsyncParser, JSON2CSVTransform as Transform };

// Convenience method to keep the API similar to version 3.X
export function parse<T>(data: Readonly<T> | ReadonlyArray<T>, opts?: json2csv.Options<T>): string;

export function parseAsync<T>(
    data: Readonly<T> | ReadonlyArray<T> | Readable,
    opts?: json2csv.Options<T>,
    transformOpts?: TransformOptions,
): Promise<string>;

export const transforms: {
    flatten: typeof flatten;
    unwind: typeof unwind;
};

export interface FieldValueCallbackInfo {
    label: string;
    default?: string;
}

export type FieldValueCallback<T> = FieldValueCallbackWithoutField<T> | FieldValueCallbackWithField<T>;

export interface FieldValueCallbackWithoutField<T> {
    (row: T): any;
}

export interface FieldValueCallbackWithField<T> {
    (row: T, field: FieldValueCallbackInfo): any;
}

export interface FieldInfo<T> {
    label?: string;
    default?: string;
    value: string | FieldValueCallback<T>;
}

export interface NormalizedFieldInfo<T> {
    label: string;
    value: FieldValueCallback<T>;
}

export interface Options<T> {
    fields?: Array<string | FieldInfo<T>>;
    ndjson?: boolean;
    defaultValue?: string;
    quote?: string;
    escapedQuote?: string;
    delimiter?: string;
    eol?: string;
    excelStrings?: boolean;
    header?: boolean;
    includeEmptyRows?: boolean;
    withBOM?: boolean;
    transforms?: Array<Json2CsvTransform<any, any>>;
}

export interface FlattenOptions {
    objects?: boolean;
    arrays?: boolean;
    separator?: string;
}

export type Json2CsvTransform<T1, T2> = (item: T1) => T2 | T2[];

export interface UnwindOptions {
    paths?: string[];
    blankOut?: boolean;
}
