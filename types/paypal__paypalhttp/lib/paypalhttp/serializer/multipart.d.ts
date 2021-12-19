import { HttpRequest, HttpHeaders } from '../http_client';
import { Serializer } from './serializer';

export class FormPart {
    readonly headers: HttpHeaders;
    readonly value: any;

    constructor(value: any, headers: HttpHeaders);
}

export class Multipart extends Serializer {
    static _CRLF: string;

    encode(request: HttpRequest): Buffer;

    formatHeaders(headers: HttpHeaders): HttpHeaders;

    decode(): Error;
}
