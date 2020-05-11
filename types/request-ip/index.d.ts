// Type definitions for request-ip
// Project: https://github.com/pbojinov/request-ip
// Definitions by: Adam Babcock <https://github.com/mrhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as http from 'http';

interface RequestHeaders extends http.IncomingHttpHeaders {
    'x-client-ip'?: string;
    'x-forwarded-for'?: string;
    'x-real-ip'?: string;
    'x-cluster-client-ip'?: string;
    'x-forwarded'?: string;
    'forwarded-for'?: string;
    'forwarded'?: string;
}

interface Request {
    headers: RequestHeaders;
    connection: {
        remoteAddress?: string;
        socket?: {
            remoteAddress?: string
        };
    };
    info?: {
        remoteAddress?: string
    };
    socket?: {
        remoteAddress?: string
    };
}

interface Options {
    attributeName: string;
}

export declare function getClientIp(req: Request): string | null;

export function mw(options?: Options): (req: Request, res: any, next: any) => any;

declare global {
  namespace Express {
    interface Request {
      clientIp?: string;
    }
  }
}
