/// <reference types="node" />

import * as http from "http";

interface RequestHeaders extends http.IncomingHttpHeaders {
    "x-client-ip"?: string | undefined;
    "x-forwarded-for"?: string | undefined;
    "x-real-ip"?: string | undefined;
    "x-cluster-client-ip"?: string | undefined;
    "x-forwarded"?: string | undefined;
    "forwarded-for"?: string | undefined;
    "forwarded"?: string | undefined;
}

interface Request {
    headers?: RequestHeaders;
    connection?: {
        remoteAddress?: string | undefined;
        socket?: {
            remoteAddress?: string | undefined;
        } | undefined;
    } | undefined;
    info?: {
        remoteAddress?: string | undefined;
    } | undefined;
    socket?: {
        remoteAddress?: string | undefined;
    } | undefined;
}

interface Options {
    attributeName: string;
}

export declare function getClientIp(req: Request): string | null;

export function mw(options?: Options): (req: Request, res: any, next: any) => any;

declare global {
    namespace Express {
        interface Request {
            clientIp?: string | undefined;
        }
    }
}
