/// <reference types="node" />
import * as http from "http";

export interface RequestHeaders extends http.IncomingHttpHeaders {
    "x-client-ip"?: string | undefined;
    "x-forwarded-for"?: string | undefined;
    "x-real-ip"?: string | undefined;
    "x-cluster-client-ip"?: string | undefined;
    "x-forwarded"?: string | undefined;
    "forwarded-for"?: string | undefined;
    "forwarded"?: string | undefined;
}

export interface Request {
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

export function detect({
    req,
    config,
}: {
    req: Request;
    config: {
        cloudflare?: boolean;
    };
}): string | null;
