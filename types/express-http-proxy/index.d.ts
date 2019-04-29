// Type definitions for express-http-proxy 1.5
// Project: https://github.com/villadora/express-http-proxy#readme
// Definitions by:  ulrichb <https://github.com/ulrichb>
//                  Daniel Schopf <https://github.com/Danscho>
//                  Gabriel Fournier <https://github.com/carboneater>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { RequestHandler, Request } from "express";
import { RequestOptions, IncomingHttpHeaders, OutgoingHttpHeaders } from "http";
import { Response } from "express-serve-static-core";

interface ProxyOptions {
    /**
     * The byte limit of the body. This is the number of bytes or any string
     * format supported by `bytes`, for example `1000`, `'500kb'` or `'3mb'`.
     * See https://github.com/stream-utils/raw-body/blob/master/index.d.ts
     */
    limit?: number | string;
    proxyReqPathResolver?: (req: Request) => string;
    proxyReqOptDecorator?: (proxyReqOpts: RequestOptions, srcReq: Request) => RequestOptions;
    userResHeaderDecorator?: (headers: IncomingHttpHeaders, userReq: Request, userRes: Response, proxyReq: Request, proxyRes: Response) => OutgoingHttpHeaders;
}

declare function proxy(host: string|((req: Request) => string), options?: ProxyOptions): RequestHandler;

export = proxy;
