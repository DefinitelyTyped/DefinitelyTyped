import { HttpRequest, HttpHeaders } from './http_client';

export class Encoder<T extends any[] = any[]> {
    constructor(encoders: T);

    serializeRequest(request: HttpRequest): Buffer;

    deserializeResponse(responseBody: any, headers: HttpHeaders): any;

    supportedEncodings(): string;
}
