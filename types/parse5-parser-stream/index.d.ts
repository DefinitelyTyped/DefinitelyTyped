// Type definitions for parse5-parser-stream 5.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Ivan Nikulin <https://github.com/inikulin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as stream from "stream";
import * as parse5 from "parse5";

/**
 * Streaming HTML parser with scripting support.
 * A [writable stream](https://nodejs.org/api/stream.html#stream_class_stream_writable).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const http = require('http');
 *
 * // Fetch the page content and obtain it's <head> node
 * http.get('http://inikulin.github.io/parse5/', res => {
 *    const parser = new parse5.ParserStream();
 *
 *    parser.once('finish', () => {
 *        console.log(parser.document.childNodes[1].childNodes[0].tagName); //> 'head'
 *    });
 *
 *    res.pipe(parser);
 * });
 * ```
 */
declare class ParserStream<TDocument> extends stream.Writable {
    /**
     * @param options - Parsing options.
     */
    constructor(options?: parse5.ParserOptions);

    /**
     * The resulting document node.
     */
    document: TDocument;

    /**
     * Raised when parser encounters a `<script>` element.
     * If this event has listeners, parsing will be suspended once it is emitted.
     * So, if `<script>` has the `src` attribute, you can fetch it, execute and then resume parsing just like browsers do.
     *
     * @param listener.scriptElement - The script element that caused the event.
     * @param listener.documentWrite - Write additional `html` at the current parsing position. Suitable for implementing the DOM `document.write` and `document.writeln` methods.
     * @param listener.documentWrite.html - HTML to write.
     * @param listener.resume - Resumes parsing.
     *
     * @example
     * ```js
     *
     * const parse = require('parse5');
     * const http = require('http');
     *
     * const parser = new parse5.ParserStream();
     *
     * parser.on('script', (scriptElement, documentWrite, resume) => {
     *     const src = parse5.treeAdapters.default.getAttrList(scriptElement)[0].value;
     *
     *     http.get(src, res => {
     *        // Fetch the script content, execute it with DOM built around `parser.document` and
     *        // `document.write` implemented using `documentWrite`.
     *        ...
     *        // Then resume parsing.
     *        resume();
     *     });
     * });
     *
     * parser.end('<script src="example.com/script.js"></script>');
     * ```
     */
    on(
        event: "script",
        listener: (
            scriptElement: parse5.Element,
            documentWrite: (html: string) => void,
            resume: () => void
        ) => void
    ): this;
    /**
     * WritableStream events
     */
    on(event: string, listener: (...params: any[]) => any): this;
}

declare namespace ParserStream {}

export = ParserStream;
