import { IncomingHttpHeaders, ServerResponse } from 'http';
import { Encoder } from './encoder';
import { Environment } from './environment';
import { FormEncoded } from './serializer/form_encoded';
import { Json } from './serializer/json';
import { Text } from './serializer/text';
import { Multipart } from './serializer/multipart';

export namespace HttpClient {
    type Injector = (request: Request) => void;

    interface Headers extends IncomingHttpHeaders {
        [key: string]: string | string[] | undefined;
    }

    interface Request<T = object> {
        body: T;
        headers: Headers;
        path: string;
        verb: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
    }

    interface Response<R> extends ServerResponse {
        headers: Headers;
        message?: string;
        result?: R;
        statusCode: number;
    }
}

export class HttpClient {
    readonly encoder: Encoder<typeof Json | typeof Text | typeof Multipart | typeof FormEncoded>;
    readonly environment: Environment;

    constructor(environment: Environment);

    getUserAgent(): string;

    getTimeout(): number;

    addInjector(injector: HttpClient.Injector): void;

    formatHeaders(headers: HttpClient.Headers): HttpClient.Headers;

    mapHeader(rawHeaders: HttpClient.Headers, formattedHeaders: HttpClient.Headers): HttpClient.Headers;

    execute(req: HttpClient.Request): Promise<HttpClient.Response<any>>;
}
