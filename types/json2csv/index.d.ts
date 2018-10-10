// Type definitions for json2csv 4.2
// Project: https://github.com/zemirco/json2csv
// Definitions by: Juanjo Diaz <https://github.com/juanjoDiaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { json2csv } from './JSON2CSVBase';
import JSON2CSVParser from './JSON2CSVParser';
import JSON2CSVTransform from './JSON2CSVTransform';

export {
	json2csv,
	JSON2CSVParser as Parser,
	JSON2CSVTransform as Transform
};

// Convenience method to keep the API similar to version 3.X
export function parse<T>(data: Readonly<T> | ReadonlyArray<T>, opts?: json2csv.Options<T>): string;
