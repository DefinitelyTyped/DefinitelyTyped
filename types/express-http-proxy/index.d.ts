// Type definitions for express-http-proxy 1.5
// Project: https://github.com/villadora/express-http-proxy#readme
// Definitions by: ulrichb <https://github.com/ulrichb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { RequestHandler, Request } from "express";

export interface ProxyOptions {
    proxyReqPathResolver?: (req: Request) => string;
}

declare function proxy(host: string, options?: ProxyOptions): RequestHandler;

export default proxy;
