import type { CoreOptions, UriOptions, UrlOptions } from "request";

declare class Pageclip {
    constructor(token: string, options?: Pageclip.PageclipOptions);

    fetch(bucketName?: string): Promise<Pageclip.Response>;
    send(bucketName: string, data: Pageclip.SendData): Promise<Pageclip.Response>;
    send(data: Pageclip.SendData): Promise<Pageclip.Response>;

    private _token: string;
    private _base64Token: string;
    private _options: Pageclip.PageclipOptions;

    private _getBucketName(bucketName?: string): string;
    private _request(method: string, url: string, args?: unknown): Promise<Pageclip.Response>;
    private _getRequestOptions(method: string, url: string, body?: unknown): CoreOptions & UriOptions & UrlOptions;
    private _getHeaders(): Record<string, string>;
}

declare namespace Pageclip {
    interface PageclipOptions {
        baseURL?: string;
    }

    type SendData = Record<string, unknown> | Array<Record<string, unknown>>;

    interface Item {
        itemEid: string;
        createdAt: string;
        payload: Record<string, unknown>;
    }

    interface Error {
        message: string;
        property?: string;
    }

    interface Response {
        status: number;
        form: string;
        data: Item[];
        errors?: Error[];
    }
}

export = Pageclip;
