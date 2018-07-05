// Type definitions for @gramps/rest-helpers 1.1
// Project: https://github.com/gramps-graphql/rest-helpers
// Definitions by: Claude Ciocan <https://github.com/claude>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export class GraphQLConnector {
    constructor();

    apiBaseUri: string;
    headers: object;
    request: any;
    cacheExpiry: number;
    enableCache: boolean;
    redis: boolean;
    get(endpoint: string): Promise<any>;
    post(endpoint: string, body: object, options: object): Promise<any>;
    put(endpoint: string, body: object, options: object): Promise<any>;
    delete(endpoint: string, options: object): Promise<any>;
}

export class GraphQLModel {
    connector: GraphQLConnector;

    constructor({});
}
