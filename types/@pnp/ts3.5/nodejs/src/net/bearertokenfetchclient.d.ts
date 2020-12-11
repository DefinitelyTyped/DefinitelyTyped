import { HttpClientImpl, FetchOptions } from "@pnp/common";
/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
export declare class BearerTokenFetchClient implements HttpClientImpl {
    private _token;
    constructor(_token: string | null);
    token: string;
    fetch(url: string, options?: FetchOptions): Promise<Response>;
}
