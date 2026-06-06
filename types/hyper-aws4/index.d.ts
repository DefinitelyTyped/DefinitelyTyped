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
    method?: HttpMethods | undefined;
    body?: string | undefined;
    headers?: Header | undefined;
    credential?: Credentials | undefined;
}

export function sign(request: Request, credential?: Credentials): Header;
