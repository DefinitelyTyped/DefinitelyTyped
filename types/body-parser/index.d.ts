// Type definitions for body-parser 1.17
// Project: https://github.com/expressjs/body-parser
// Definitions by: Santi Albo <https://github.com/santialbo>
//                 Vilic Vane <https://github.com/vilic>
//                 Jonathan Häberle <https://github.com/dreampulse>
//                 Gevik Babakhani <https://github.com/blendsdk>
//                 Tomasz Łaziuk <https://github.com/tlaziuk>
//                 Jason Walton <https://github.com/jwalton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { NextHandleFunction } from 'connect';
import * as http from 'http';

// for docs go to https://github.com/expressjs/body-parser/tree/1.16.0#body-parser

// @deprecated
declare function bodyParser(options?: bodyParser.OptionsJson & bodyParser.OptionsText & bodyParser.OptionsUrlencoded): NextHandleFunction;

declare namespace bodyParser {
    interface Options {
        inflate?: boolean;
        limit?: number | string;
        type?: string | string[] | ((req: http.IncomingMessage) => any);
        verify?(req: http.IncomingMessage, res: http.ServerResponse, buf: Buffer, encoding: string): void;
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

    function json(options?: OptionsJson): NextHandleFunction;

    function raw(options?: Options): NextHandleFunction;

    function text(options?: OptionsText): NextHandleFunction;

    function urlencoded(options?: OptionsUrlencoded): NextHandleFunction;
}

export = bodyParser;
