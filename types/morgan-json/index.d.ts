// Type definitions for morgan-json 1.1
// Project: https://github.com/indexzero/morgan-json#readme
// Definitions by: Michal Grezel <https://github.com/dracomithril>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import morgan = require('morgan');

interface Options {
    stringify: boolean;
}

interface FormatObject {
    [key: string]: string;
}

/**
 * Format strings
 * @example
 * :method :url :status :res[content-length] bytes :response-time ms
 * @example
 * {
 *      short: ':method :url :status',
 *      length: ':res[content-length]',
 *      'response-time': ':response-time ms'
 * }
 * @param format
 * @param opts
 */
declare function json(format: string | FormatObject, opts?: Options): morgan.FormatFn;

export = json;
