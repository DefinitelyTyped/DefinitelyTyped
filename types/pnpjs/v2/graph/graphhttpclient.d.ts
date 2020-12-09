import { IRequestClient, IFetchOptions } from "@pnp/common";
export declare class GraphHttpClient implements IRequestClient {
    private _impl;
    constructor();
    fetch(url: string, options?: IFetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: IFetchOptions): Promise<Response>;
    get(url: string, options?: IFetchOptions): Promise<Response>;
    post(url: string, options?: IFetchOptions): Promise<Response>;
    patch(url: string, options?: IFetchOptions): Promise<Response>;
    delete(url: string, options?: IFetchOptions): Promise<Response>;
}
//# sourceMappingURL=graphhttpclient.d.ts.map