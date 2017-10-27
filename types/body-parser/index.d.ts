// Type definitions for body-parser 1.16
// Project: https://github.com/expressjs/body-parser
// Definitions by: Santi Albo <https://github.com/santialbo>, Vilic Vane <https://github.com/vilic>, Jonathan Häberle <https://github.com/dreampulse>, Gevik Babakhani <https://github.com/blendsdk>, Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { Request, RequestHandler, Response } from 'express';

// for docs go to https://github.com/expressjs/body-parser/tree/1.16.0#body-parser

// @deprecated
declare function bodyParser(options?: bodyParser.OptionsJson & bodyParser.OptionsText & bodyParser.OptionsUrlencoded): RequestHandler;

declare namespace bodyParser {
    interface Options {
        inflate?: boolean;
        limit?: number | string;
        type?: string | string[] | ((req: Request) => any);
        verify?(req: Request, res: Response, buf: Buffer, encoding: string): void;
    }

    interface OptionsJson extends Options {
        reviver?(key: string, value: any): any;
        strict?: boolean;
    }

    interface OptionsText extends Options {
        defaultCharset?: string;
    }

    interface OptionsUrlencoded extends Options {
        extended?: boolean;
        parameterLimit?: number;
    }

    function json(options?: OptionsJson): RequestHandler;

    function raw(options?: Options): RequestHandler;

    function text(options?: OptionsText): RequestHandler;

    function urlencoded(options?: OptionsUrlencoded): RequestHandler;
}

export = bodyParser;
