// Type definitions for cors 2.8
// Project: https://github.com/expressjs/cors/
// Definitions by: Alan Plum <https://github.com/pluma>
//                 Gaurav Sharma <https://github.com/gtpan77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { IncomingHttpHeaders } from 'http';

type StaticOrigin = boolean | string | RegExp | (string | RegExp)[];

type CustomOrigin = (requestOrigin: string | undefined, callback: (err: Error | null, origin?: StaticOrigin) => void) => void;

declare namespace e {
    interface CorsRequest {
        method?: string | undefined;
        headers: IncomingHttpHeaders;
    }
    interface CorsOptions {
        /**
         * @default '*''
         */
        origin?: StaticOrigin | CustomOrigin | undefined;
        /**
         * @default 'GET,HEAD,PUT,PATCH,POST,DELETE'
         */
        methods?: string | string[] | undefined;
        allowedHeaders?: string | string[] | undefined;
        exposedHeaders?: string | string[] | undefined;
        credentials?: boolean | undefined;
        maxAge?: number | undefined;
        /**
         * @default false
         */
        preflightContinue?: boolean | undefined;
        /**
         * @default 204
         */
        optionsSuccessStatus?: number | undefined;
    }
    type CorsOptionsDelegate<T extends CorsRequest = CorsRequest> = (
        req: T,
        callback: (err: Error | null, options?: CorsOptions) => void,
    ) => void;
}

declare function e<T extends e.CorsRequest = e.CorsRequest>(
    options?: e.CorsOptions | e.CorsOptionsDelegate<T>,
): (
    req: T,
    res: {
        statusCode?: number | undefined;
        setHeader(key: string, value: string): any;
        end(): any;
    },
    next: (err?: any) => any,
) => void;
export = e;
