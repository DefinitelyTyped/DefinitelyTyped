// Type definitions for co-body 5.1
// Project: https://github.com/cojs/co-body
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>
/// <reference types="qs"/>

import * as http from 'http';
import * as qs from 'qs';

declare namespace CoBody {
    type Context = http.IncomingMessage | { req: http.IncomingMessage };

    export interface Parse {
        (context: Context, options?: Options): Promise<any>;
        text: (context: Context, options?: Options) => Promise<any>;
        form: (context: Context, options?: Options) => Promise<any>;
        json: (context: Context, options?: Options) => Promise<any>;
    }

    export interface Options {
        limit?: number | string | undefined;
        strict?: boolean | undefined;
        queryString?: qs.IParseOptions | undefined;
        jsonTypes?: string[] | undefined;
        returnRawBody?: boolean | undefined;
        formTypes?: string[] | undefined;
        textTypes?: string[] | undefined;
        encoding?: string | undefined;
        length?: number | undefined;
    }
}

declare var CoBody: CoBody.Parse;
export = CoBody;
