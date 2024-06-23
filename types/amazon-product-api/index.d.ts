interface ICredentials {
    awsId: string;
    awsSecret: string;
    awsTag: string;
}

interface IAmazonProductQueryCallback {
    (err: string, results: Object[]): void;
}

interface IItemSearchOptions {
    condition?: string | undefined;
    keywords?: string | undefined;
    responseGroup?: string | undefined;
    searchIndex?: string | undefined;
    itemPage?: number | undefined;
    sort?: string | undefined;
}

interface IItemLookupOptions {
    condition?: string | undefined;
    idType?: string | undefined;
    includeReviewsSummary?: boolean | undefined;
    itemId?: string | string[] | undefined;
    responseGroup?: string | undefined;
    searchIndex?: string | undefined;
    truncateReviewsAt?: number | undefined;
    variationPage?: string | undefined;
    domain?: string | undefined;
    request?: Function | undefined;
}

interface IBrowseNodeLookupOptions {
    browseNodeId?: string | undefined;
    responseGroup?: string | undefined;
}

interface IAmazonProductClient {
    itemSearch(query: IItemSearchOptions, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
    itemLookup(query: IItemLookupOptions, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
    browseNodeLookup(query: IBrowseNodeLookupOptions, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
}

export declare function createClient(credentials: ICredentials): IAmazonProductClient;
