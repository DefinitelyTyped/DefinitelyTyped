/// <reference types="node" />

import { HttpClient } from '../http_client';
import { Serializer } from './serializer';

export class FormPart {
    readonly headers: HttpClient.Headers;
    readonly value: any;

    constructor(value: any, headers: HttpClient.Headers);
}

export class Multipart extends Serializer {
    static _CRLF: string;

    encode(request: HttpClient.Request): Buffer;

    formatHeaders(headers: HttpClient.Headers): HttpClient.Headers;

    decode(): Error;
}
