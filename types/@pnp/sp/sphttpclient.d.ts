import { IFetchOptions, IRequestClient, IHttpClientImpl } from "@pnp/common";
export declare class SPHttpClient implements IRequestClient {
    protected _impl: IHttpClientImpl;
    protected _digestCache: IGetDigest;
    constructor(_impl?: IHttpClientImpl);
    fetch(url: string, options?: IFetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: IFetchOptions): Promise<Response>;
    get(url: string, options?: IFetchOptions): Promise<Response>;
    post(url: string, options?: IFetchOptions): Promise<Response>;
    patch(url: string, options?: IFetchOptions): Promise<Response>;
    delete(url: string, options?: IFetchOptions): Promise<Response>;
}
interface IGetDigest {
    (webUrl: string): Promise<string>;
}
export {};
//# sourceMappingURL=sphttpclient.d.ts.map