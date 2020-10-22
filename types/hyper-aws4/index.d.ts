// Type definitions for hyper-aws4 1.1
// Project: https://github.com/Tim-Zhang/hyper-aws4#readme
// Definitions by: BamButz <https://github.com/bambutz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Credentials {
    accessKey: string;
    secretKey: string;
}

export interface Header {
    [header: string]: string;
}

export type HttpMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface Request {
    url: string;
    method?: HttpMethods;
    body?: string;
    headers?: Header;
    credential?: Credentials;
}

export function sign(request: Request, credential?: Credentials): Header;
