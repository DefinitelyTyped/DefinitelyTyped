import { ODataParser } from "./parsers";
import { PnPClientStore, PnPClientStorage } from "@pnp/common";
export interface ICachingOptions {
    expiration?: Date;
    storeName?: "session" | "local";
    key: string;
}
export declare class CachingOptions implements ICachingOptions {
    key: string;
    protected static storage: PnPClientStorage;
    expiration: Date;
    storeName: "session" | "local";
    constructor(key: string);
    readonly store: PnPClientStore;
}
export declare class CachingParserWrapper<T> implements ODataParser<T> {
    parser: ODataParser<T>;
    cacheOptions: CachingOptions;
    constructor(parser: ODataParser<T>, cacheOptions: CachingOptions);
    parse(response: Response): Promise<T>;
    protected cacheData(data: any): any;
}
