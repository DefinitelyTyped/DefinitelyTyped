import type { IncomingMessage, ServerResponse } from 'http';

export type Data = string | Buffer | Uint8Array;
export interface Headers {
    [name: string]: string | number;
}

export default class MultipartResponse {
    static wrapIfSupported(req: IncomingMessage, res: ServerResponse): MultipartResponse | ServerResponse;
    static serializeHeaders(headers: Headers): string;
    res: ServerResponse;
    headers: Headers;
    constructor(res: ServerResponse);
    writeChunk(headers: Headers | null, data?: Data, isLast?: boolean): void;
    writeHead(status: number, headers?: Headers): void;
    setHeader(name: string, value: string | number): void;
    end(data?: Data): void;
}
