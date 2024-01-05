/// <reference types="node" />

import { IncomingMessage } from "http";
import { Stream } from "stream";

interface HTTPError extends Error {
    status: number;
    text: string;
    method: string;
    path: string;
}
declare class Response extends Stream implements Pick<IncomingMessage, "setEncoding"> {
    constructor(request: Request);

    accepted: boolean;
    badRequest: boolean;
    body: any;
    charset: string;
    clientError: boolean;
    error: false | HTTPError;
    files: any;
    forbidden: boolean;
    get(header: string): string;
    get(header: "Set-Cookie"): string[];
    header: { [index: string]: string };
    headers: { [index: string]: string };
    info: boolean;
    links: Record<string, string>;
    noContent: boolean;
    notAcceptable: boolean;
    notFound: boolean;
    ok: boolean;
    redirect: boolean;
    request: InstanceType<typeof Request>;
    serverError: boolean;
    status: number;
    statusCode: number;
    statusType: number;
    text: string;
    type: string;
    unauthorized: boolean;
    xhr: any;
    redirects: string[];
    setEncoding(encoding: BufferEncoding): IncomingMessage;
}

export = Response;
