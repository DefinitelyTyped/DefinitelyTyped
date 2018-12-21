// Type definitions for express-http-proxy 1.5
// Project: https://github.com/villadora/express-http-proxy#readme
// Definitions by: ulrichb <https://github.com/ulrichb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { RequestHandler, Request } from "express";
import { RequestOptions } from "http";

interface ProxyOptions {
    proxyReqPathResolver?: (req: Request) => string;
    proxyReqOptDecorator?: (proxyReqOpts: RequestOptions, srcReq: Request) => RequestOptions;
}

declare function proxy(host: string, options?: ProxyOptions): RequestHandler;

export = proxy;
