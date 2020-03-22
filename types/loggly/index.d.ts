// Type definitions for loggly 1.1
// Project: https://github.com/winstonjs/node-loggly
// Definitions by: Ray Martone <https://github.com/rmartone>, Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare interface LogglyOptions {
    token: string;
    subdomain: string;
    tags?: string[];
    json?: boolean;
    host?: string;
    auth?: {
        username: string;
        password: string;
    };
}

declare interface SharedSearchOptions {
    from?: string;
    until?: string;
    size?: number;
    rows?: number;
}
export declare interface SearchOptionsWithQ extends SharedSearchOptions {
    q: string;
}
export declare interface SearchOptionsWithQuery extends SharedSearchOptions {
    query: string;
}
export declare type SearchOptions = SearchOptionsWithQ | SearchOptionsWithQuery;

export declare interface SearchResults {
    events: SearchResultsEvent[];
    total_events: number;
    page: number;
}
export declare interface SearchResultsEvent {
    id: string;
    logtypes: string[];
    event: any;
    logmsg: string;
    raw: string;
    timestamp: number;
    tags: string[];
}

export declare function createClient(options: LogglyOptions): LogglyInstance;
export declare const version: number;

export declare interface LogglyInstance {
    log(message: any, tags?: string[], callback?: (err: any, results: any) => void): this;
    log(message: any, callback?: (err: any, results: any) => void): this;
    search(query: string, callback?: (err: any, results: SearchResults) => void): Search;
    search(options: SearchOptions, callback?: (err: any, results: SearchResults) => void): Search;
}

export declare interface Search {
    run(callback: (err: any, results: SearchResults) => void): this;
}
