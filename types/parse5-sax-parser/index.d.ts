// Type definitions for parse5-sax-parser 5.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Ivan Nikulin <https://github.com/inikulin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as stream from "stream";
import * as parse5 from "parse5";

declare namespace SAXParser {
    interface StartTagToken {
        /**
         * Tag name.
         */
        tagName: string;
        /**
         * List of attributes.
         */
        attrs: parse5.Attribute[];
        /**
         * Indicates if the tag is self-closing.
         */
        selfClosing: boolean;
        /**
         * Start tag source code location info. Available if location info is enabled via {@link SAXParserOptions}.
         */
        sourceCodeLocation?: parse5.StartTagLocation;
    }

    interface EndTagToken {
        /**
         * Tag name.
         */
        tagName: string;
        /**
         * End tag source code location info. Available if location info is enabled via {@link SAXParserOptions}.
         */
        sourceCodeLocation?: parse5.Location;
    }

    interface CommentToken {
        /**
         * Comment text.
         */
        text: string;
        /**
         * Comment source code location info. Available if location info is enabled via {@link SAXParserOptions}.
         */
        sourceCodeLocation?: parse5.Location;
    }

    interface TextToken {
        /**
         * Text content.
         */
        text: string;
        /**
         * Text content source code location info. Available if location info is enabled via {@link SAXParserOptions}.
         */
        sourceCodeLocation?: parse5.Location;
    }

    interface DoctypeToken {
        /**
         * Document type name.
         */
        name: string;
        /**
         * Document type public identifier.
         */
        publicId: string;
        /**
         * Document type system identifier.
         */
        systemId: string;
        /**
         * Document type declaration source code location info. Available if location info is enabled via {@link SAXParserOptions}.
         */
        sourceCodeLocation?: parse5.Location;
    }

    interface SAXParserOptions {
        /**
         * Enables source code location information for the tokens.
         * When enabled, each token event handler will receive {@link Location} (or {@link StartTagLocation})
         * object as its last argument.
         */
        sourceCodeLocationInfo?: boolean;
    }
}

/**
 * Streaming [SAX](https://en.wikipedia.org/wiki/Simple_API_for_XML)-style HTML parser.
 * A [transform stream](https://nodejs.org/api/stream.html#stream_class_stream_transform)
 * (which means you can pipe *through* it, see example).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const http = require('http');
 * const fs = require('fs');
 *
 * const file = fs.createWriteStream('/home/google.com.html');
 * const parser = new parse5.SAXParser();
 *
 * parser.on('text', text => {
 *    // Handle page text content
 *    ...
 * });
 *
 * http.get('http://google.com', res => {
 *    // SAXParser is the Transform stream, which means you can pipe
 *    // through it. So, you can analyze page content and, e.g., save it
 *    // to the file at the same time:
 *    res.pipe(parser).pipe(file);
 * });
 * ```
 */
declare class SAXParser extends stream.Transform {
    /**
     * @param options - Parsing options.
     */
    constructor(options?: SAXParser.SAXParserOptions);

    /**
     * Raised when the parser encounters a start tag.
     *
     * @param listener.startTag - Start tag token.
     */
    on(event: "startTag", listener: (startTag: SAXParser.StartTagToken) => void): this;

    /**
     * Raised when parser encounters an end tag.
     *
     * @param listener.endTag - End tag token.
     */
    on(event: "endTag", listener: (endTag: SAXParser.EndTagToken) => void): this;
    /**
     * Raised when parser encounters text content.
     *
     * @param listener.text - Text token.
     */
    on(event: "text", listener: (text: SAXParser.TextToken) => void): this;
    /**
     * Raised when parser encounters a comment.
     *
     * @param listener.comment - Comment content.
     */
    on(event: "comment", listener: (comment: SAXParser.CommentToken) => void): this;
    /**
     * Raised when parser encounters a [document type declaration](https://en.wikipedia.org/wiki/Document_type_declaration).
     *
     * @param listener.doctype - Document type token.
     */
    on(event: "doctype", listener: (doctype: SAXParser.DoctypeToken) => void): this;
    /**
     * TransformStream events
     */
    on(event: string, listener: (...params: any[]) => any): this;

    /**
     * Stops parsing. Useful if you want the parser to stop consuming CPU time once you've obtained the desired info
     * from the input stream. Doesn't prevent piping, so that data will flow through the parser as usual.
     *
     * @example
     * ```js
     *
     * const parse5 = require('parse5');
     * const http = require('http');
     * const fs = require('fs');
     *
     * const file = fs.createWriteStream('google.com.html');
     * const parser = new parse5.SAXParser();
     *
     * parser.on('doctype', (name, publicId, systemId) => {
     *    // Process doctype info ans stop parsing
     *    ...
     *    parser.stop();
     * });
     *
     * http.get('http://google.com', res => {
     *    // Despite the fact that parser.stop() was called whole
     *    // content of the page will be written to the file
     *    res.pipe(parser).pipe(file);
     * });
     * ```
     */
    stop(): void;
}

export = SAXParser;
