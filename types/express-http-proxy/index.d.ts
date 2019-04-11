// Type definitions for express-http-proxy 1.5
// Project: https://github.com/villadora/express-http-proxy#readme
// Definitions by:  ulrichb <https://github.com/ulrichb>
//                  Daniel Schopf <https://github.com/Danscho>
//                  Gabriel Fournier <https://github.com/carboneater>
//                  Lindsay Wardell <https://github.com/lindsaykwardell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { RequestHandler, Request } from "express";
import { RequestOptions, IncomingHttpHeaders, OutgoingHttpHeaders } from "http";
import { Response } from "express-serve-static-core";

interface ProxyOptions {
    proxyReqPathResolver?: (req: Request) => string;
    proxyReqOptDecorator?: (
        proxyReqOpts: RequestOptions,
        srcReq: Request
    ) => RequestOptions;
    userResHeaderDecorator?: (
        headers: IncomingHttpHeaders,
        userReq: Request,
        userRes: Response,
        proxyReq: Request,
        proxyRes: Response
    ) => OutgoingHttpHeaders;
    filter?: (req: Request, res: Response) => boolean;
    userResDecorator?: (
        proxyRes: Response,
        proxyResData: JSON,
        userReq: Request,
        userRes: Response
    ) => Promise<string>;
    limit?: string;
    memoizeHost?: boolean;
    skipToNextHandlerFilter?: (proxyRes: Response) => boolean;
    proxyErrorHandler?: (
        err: Error,
        res: Response,
        next: (err: Error) => void
    ) => Response;
    https?: boolean;
    preserveHostHdr?: boolean;
    parseReqBody?: boolean;
    reqAsBuffer?: boolean;
    reqBodyEncoding?: string | null;
    timeout?: number;
}

declare function proxy(
    host: string | ((req: Request) => string),
    options?: ProxyOptions
): RequestHandler;

export = proxy;
