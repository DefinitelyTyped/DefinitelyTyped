// Type definitions for body-parser-xml 2.0
// Project: https://github.com/fiznool/body-parser-xml
// Definitions by: tbounsiar <https://github.com/tbounsiar>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import bodyParser = require('body-parser');
import { NextHandleFunction } from 'connect';
import { Request, Response } from 'express-serve-static-core';
import { ParserOptions } from 'xml2js';

type BodyParser = typeof bodyParser;

/**
 * This library adds an xml method to the body-parser object.
 */
declare function bodyParserXml(bodyParser: BodyParser): void;

declare namespace bodyParserXml {
    interface Options {
        /**
         * Specify the default character set for the text content if the charset is not specified in the Content-Type header of the request.
         * @default 'utf-8'
         */
        defaultCharset?: BufferEncoding;
        /**
         * When set to true, then deflated (compressed) bodies will be inflated; when false, deflated bodies are rejected.
         * @default true
         */
        inflate?: boolean;
        /**
         * Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing.
         * @default '100kb'
         */
        limit?: string | number;
        /**
         * The type option is used to determine what media type the middleware will parse.
         * @default ['_/xml', '+xml']
         */
        type?: string | string[] | ((req: Request) => boolean);
        /**
         * The verify option, if supplied, is called as verify(req, res, buf, encoding),
         * where buf is a Buffer of the raw request body and encoding is the encoding of the request.
         * The parsing can be aborted by throwing an error.
         */
        verify?: (req: Request, res: Response, buf: Buffer, encoding: BufferEncoding) => void;
        /**
         * This option controls the behaviour of the XML parser
         */
        xmlParseOptions?: ParserOptions;
    }
}

export = bodyParserXml;

declare module 'body-parser' {
    function xml(options?: bodyParserXml.Options): NextHandleFunction;
}
