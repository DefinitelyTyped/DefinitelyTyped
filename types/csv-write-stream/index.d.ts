/// <reference types="node" />

import { Transform } from "node:stream";

export = makeCsvWriteStream;

/**
 * Creates a CSV encoder stream that produces properly escaped CSVs.
 *
 * Write arrays of strings (or JS objects) and you will receive a properly escaped CSV stream out the other end.
 *
 * @example
 * // example of auto headers
 *
 * import * as fs from 'node:fs'
 * import csvWriter = require('csv-write-stream')
 *
 * const writer = csvWriter()
 *
 * writer.pipe(fs.createWriteStream('out.csv'))
 * writer.write({hello: 'world', foo: 'bar', baz: 'taco'})
 * writer.end()
 *
 * // produces: hello,foo,baz\nworld,bar,taco\n
 *
 * @example
 * // example of specifying headers
 *
 * import * as fs from 'node:fs'
 * import csvWriter = require('csv-write-stream')
 *
 * const writer = csvWriter({ headers: ['hello', 'foo'] })
 *
 * writer.pipe(fs.createWriteStream('out.csv'))
 * writer.write(['world', 'bar'])
 * writer.end()
 *
 * // produces: hello,foo\nworld,bar\n
 *
 * @example
 * // example of not sending headers
 *
 * import * as fs from 'node:fs'
 * import csvWriter = require('csv-write-stream')
 *
 * const writer = csvWriter({ sendHeaders: false })
 *
 * writer.pipe(fs.createWriteStream('out.csv'))
 * writer.write({hello: 'world', foo: 'bar', baz: 'taco'})
 * writer.end()
 *
 * // produces: world,bar,taco\n
 */
declare function makeCsvWriteStream(options?: makeCsvWriteStream.Options): makeCsvWriteStream.CsvWriteStream;

declare namespace makeCsvWriteStream {
    interface Options {
        /**
         * If set to `false`, the headers will be used for ordering the data but will never
         * be written to the stream.
         *
         * @default true
         */
        sendHeaders?: boolean;
        /**
         * Can be an array of strings to use as the header row. If you don't specify a header
         * row the keys of the first row written to the stream will be used as the header row
         * IF the first row is an object.
         *
         * @default null
         */
        headers?: string[];
        /**
         * @default ','
         */
        separator?: string;
        /**
         * @default '\n'
         */
        newline?: string;
    }

    interface CsvWriteStream extends Transform {
        readonly sendHeaders: boolean;
        readonly headers: string[] | null;
        readonly separator: string;
        readonly newline: string;
    }
}
