/// <reference types="node" />

import { HttpClient } from './http_client';

export class Encoder<T = any> {
    constructor(encoders: T[]);

    serializeRequest(request: HttpClient.Request): Buffer;

    deserializeResponse(responseBody: any, headers: HttpClient.Headers): any;

    supportedEncodings(): string;
}
