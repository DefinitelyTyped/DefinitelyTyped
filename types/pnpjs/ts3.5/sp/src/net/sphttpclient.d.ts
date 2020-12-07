import { FetchOptions, RequestClient, HttpClientImpl } from "@pnp/common";
export declare class SPHttpClient implements RequestClient {
    private _impl;
    private _digestCache;
    constructor(_impl?: HttpClientImpl);
    fetch(url: string, options?: FetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: FetchOptions): Promise<Response>;
    get(url: string, options?: FetchOptions): Promise<Response>;
    post(url: string, options?: FetchOptions): Promise<Response>;
    patch(url: string, options?: FetchOptions): Promise<Response>;
    delete(url: string, options?: FetchOptions): Promise<Response>;
}
