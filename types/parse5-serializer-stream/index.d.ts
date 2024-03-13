/// <reference types="node" />

import * as parse5 from "parse5";
import * as stream from "stream";

/**
 * Streaming AST node to an HTML serializer.
 * A [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const fs = require('fs');
 *
 * const file = fs.createWriteStream('/home/index.html');
 *
 * // Serializes the parsed document to HTML and writes it to the file.
 * const document = parse5.parse('<body>Who is John Galt?</body>');
 * const serializer = new parse5.SerializerStream(document);
 *
 * serializer.pipe(file);
 * ```
 */
declare class SerializerStream extends stream.Readable {
    /**
     * Streaming AST node to an HTML serializer. A readable stream.
     *
     * @param node - Node to serialize.
     * @param options - Serialization options.
     */
    constructor(node: parse5.Node, options?: parse5.SerializerOptions);
}

declare namespace SerializerStream {}

export = SerializerStream;
