// Type definitions for parse5-plain-text-conversion-stream 5.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Ivan Nikulin <https://github.com/inikulin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as ParserStream from "parse5-parser-stream";

/**
 * Converts plain text files into HTML document as required by [HTML specification](https://html.spec.whatwg.org/#read-text).
 * A [writable stream](https://nodejs.org/api/stream.html#stream_class_stream_writable).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const fs = require('fs');
 *
 * const file = fs.createReadStream('war_and_peace.txt');
 * const converter = new parse5.PlainTextConversionStream();
 *
 * converter.once('finish', () => {
 *     console.log(converter.document.childNodes[1].childNodes[0].tagName); //> 'head'
 * });
 *
 * file.pipe(converter);
 * ```
 */
declare class PlainTextConversionStream<TDocument> extends ParserStream<
    TDocument
> {}

declare namespace PlainTextConversionStream {}

export = PlainTextConversionStream;
