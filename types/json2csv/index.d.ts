// Type definitions for json2csv 4.5
// Project: https://github.com/zemirco/json2csv
// Definitions by: Juanjo Diaz <https://github.com/juanjoDiaz>
//                 Daniel Gooß <https://github.com/dangoo>
//                 Denis Yilmaz <https://github.com/denisyilmaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Readable, TransformOptions } from 'stream';

import { json2csv } from './JSON2CSVBase';
import JSON2CSVParser from './JSON2CSVParser';
import JSON2CSVAsyncParser from './JSON2CSVAsyncParser';
import JSON2CSVTransform from './JSON2CSVTransform';

export default json2csv;

export {
    JSON2CSVParser as Parser,
    JSON2CSVAsyncParser as AsyncParser,
	JSON2CSVTransform as Transform
};

// Convenience method to keep the API similar to version 3.X
export function parse<T>(
    data: Readonly<T> | ReadonlyArray<T>,
    opts?: json2csv.Options<T>
): string;

export function parseAsync<T>(
    data: Readonly<T> | ReadonlyArray<T> | Readable,
    opts?: json2csv.Options<T>,
    transformOpts?: TransformOptions
): Promise<string>;
