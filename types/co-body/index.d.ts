// Type definitions for co-body
// Project: https://github.com/cojs/co-body
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>
/// <reference types="koa"/>
/// <reference types="qs"/>

import * as http from 'http';
import * as Koa from 'koa';
import * as qs from 'qs';

declare namespace CoBody {
    type Context = http.IncomingMessage | Koa.Context;

    export interface Parse {
        (context: Context, options?: Options): Promise<any>;
        text: (context: Context, options?: Options) => Promise<any>;
        form: (context: Context, options?: Options) => Promise<any>;
        json: (context: Context, options?: Options) => Promise<any>;
    }

    export interface Options {
        limit?: number | string;
        strict?: boolean;
        queryString?: qs.IParseOptions;
        jsonTypes?: string[];
        returnRawBody?: boolean;
        formTypes?: string[];
        textTypes?: string[];
        encoding?: string;
        length?: number;
    }
}

declare var CoBody: CoBody.Parse;
export = CoBody;
