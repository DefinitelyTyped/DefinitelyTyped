/// <reference types="node"/>

import * as http from "http";
import * as qs from "qs";

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
