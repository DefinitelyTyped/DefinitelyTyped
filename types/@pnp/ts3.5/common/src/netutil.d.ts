export interface ConfigOptions {
    headers?: string[][] | {
        [key: string]: string;
    } | Headers;
    mode?: "navigate" | "same-origin" | "no-cors" | "cors";
    credentials?: "omit" | "same-origin" | "include";
    cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
}
export interface FetchOptions extends ConfigOptions {
    method?: string;
    body?: any;
}
export interface HttpClientImpl {
    fetch(url: string, options: FetchOptions): Promise<Response>;
}
export interface RequestClient {
    fetch(url: string, options?: FetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: FetchOptions): Promise<Response>;
    get(url: string, options?: FetchOptions): Promise<Response>;
    post(url: string, options?: FetchOptions): Promise<Response>;
    patch(url: string, options?: FetchOptions): Promise<Response>;
    delete(url: string, options?: FetchOptions): Promise<Response>;
}
export declare function mergeHeaders(target: Headers, source: any): void;
export declare function mergeOptions(target: ConfigOptions, source: ConfigOptions): void;
/**
 * Makes requests using the global/window fetch API
 */
export declare class FetchClient implements HttpClientImpl {
    fetch(url: string, options: FetchOptions): Promise<Response>;
}
/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
export declare class BearerTokenFetchClient extends FetchClient {
    private _token;
    constructor(_token: string | null);
    token: string;
    fetch(url: string, options?: FetchOptions): Promise<Response>;
}
