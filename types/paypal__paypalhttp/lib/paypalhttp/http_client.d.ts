import { IncomingHttpHeaders, ServerResponse } from "http";
import { Encoder } from "./encoder";
import { Environment } from "./environment";
import { FormEncoded } from "./serializer/form_encoded";
import { Json } from "./serializer/json";
import { Multipart } from "./serializer/multipart";
import { Text } from "./serializer/text";

export interface HttpHeaders extends IncomingHttpHeaders {
    [key: string]: string | string[] | undefined;
}

export interface HttpRequest<T = object> {
    body: T;
    headers: HttpHeaders;
    path: string;
    verb: "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT";
}

export interface HttpResponse<R> extends ServerResponse {
    headers: HttpHeaders;
    message?: string;
    result?: R;
    statusCode: number;
}

export type HttpInjector = (request: HttpRequest) => void;

export class HttpClient {
    readonly encoder: Encoder<[typeof Json, typeof Text, typeof Multipart, typeof FormEncoded]>;
    readonly environment: Environment;

    constructor(environment: Environment);

    getUserAgent(): string;

    getTimeout(): number;

    addInjector(injector: HttpInjector): void;

    formatHeaders(headers: HttpHeaders): HttpHeaders;

    mapHeader(rawHeaders: HttpHeaders, formattedHeaders: HttpHeaders): HttpHeaders;

    execute(req: HttpRequest): Promise<HttpResponse<any>>;
}
