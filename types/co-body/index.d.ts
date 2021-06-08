// Type definitions for co-body 6.1
// Project: https://github.com/cojs/co-body
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as http from 'http';
import * as qs from 'qs';

declare namespace CoBody {
    type Context = http.IncomingMessage | { req: http.IncomingMessage };

    interface Parse {
        /**
         * @async
         */
        (context: Context, options?: Options): Promise<any>;
        /**
         * @async
         */
        text: (context: Context, options?: Options) => Promise<any>;
        /**
         * @async
         */
        form: (context: Context, options?: Options) => Promise<any>;
        /**
         * @async
         */
        json: (context: Context, options?: Options) => Promise<any>;
    }

    interface Options {
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
