// Type definitions for amazon-product-api
// Project: https://github.com/t3chnoboy/amazon-product-api
// Definitions by: Matti Lehtinen <https://github.com/MattiLehtinen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface ICredentials {
    awsId: string,
    awsSecret: string,
    awsTag: string
}

interface IAmazonProductQueryCallback {
    (err: string, results: Object[]): void;
}

interface IAmazonProductClient {
    itemSearch(query: any, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
    itemLookup(query: any, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
    browseNodeLookup(query: any, callback?: IAmazonProductQueryCallback): Promise<Object[]>;
}

export declare function createClient(credentials: ICredentials): IAmazonProductClient;
