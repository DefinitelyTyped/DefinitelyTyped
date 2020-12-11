import { SPHttpClient } from "./sphttpclient";
export declare class CachedDigest {
    expiration: Date;
    value: string;
}
export declare class DigestCache {
    private _httpClient;
    private _digests;
    constructor(_httpClient: SPHttpClient, _digests?: Map<string, CachedDigest>);
    getDigest(webUrl: string): Promise<string>;
    clear(): void;
}
