// Type definitions for amazon-product-api
// Project: https://github.com/t3chnoboy/amazon-product-api
// Definitions by: Matti Lehtinen <https://github.com/MattiLehtinen>, Alex Leon <https://github.com/alien35>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface ICredentials {
    awsId: string,
    awsSecret: string,
    awsTag: string
}

interface IAmazonProductQueryCallback {
    (err: string, results: Object[]): void;
}

interface IItemSearchOptions {
    condition?: string;
    keywords?: string;
    responseGroup?: string;
    searchIndex?: string;
    itemPage?: number;
    sort?: string;
}

interface IItemLookupOptions {
    condition?: string;
    idType?: string;
    includeReviewsSummary?: boolean;
    itemId?: string | string[];
    responseGroup?: string;
    searchIndex?: string;
    truncateReviewsAt?: number;
    variationPage?: string;
}

interface IBrowseNodeLookupOptions {
    browseNodeId?: string;
    responseGroup?: string;
}

interface IAmazonProductClient {
    itemSearch(query: IItemSearchOptions, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
    itemLookup(query: IItemLookupOptions, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
    browseNodeLookup(query: IBrowseNodeLookupOptions, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
}

export declare function createClient(credentials: ICredentials): IAmazonProductClient;
