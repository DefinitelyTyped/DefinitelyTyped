// Type definitions for loggly 1.1
// Project: https://github.com/winstonjs/node-loggly
// Definitions by: Ray Martone <https://github.com/rmartone>, Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Loggly {
    export interface LogglyOptions {
        token: string;
        subdomain: string;
        tags?: string[];
        json?: boolean;
        host?: string;
        auth?: {
            username: string;
            password: string;
        }
    }

    interface SharedSearchOptions {
        from?: string;
        until?: string;
        size?: number;
        rows?: number;
    }
    export interface SearchOptionsWithQ extends SharedSearchOptions {
        q: string;
    }
    export interface SearchOptionsWithQuery extends SharedSearchOptions {
        query: string;
    }
    export type SearchOptions = SearchOptionsWithQ | SearchOptionsWithQuery;

    export interface SearchResults {
        events: SearchResultsEvent[];
        total_events: number;
        page: number;
    }
    export interface SearchResultsEvent {
        id: string;
        logtypes: string[];
        event: any;
        logmsg: string;
        raw: string;
        timestamp: number;
        tags: string[];
    }

    export interface Loggly {
        createClient(options: LogglyOptions): LogglyInstance;
        version: number;
    }

    export interface LogglyInstance {
        log(message: any, tags?: string[], callback?: (err: any, results: any) => void): this;
        log(message: any, callback?: (err: any, results: any) => void): this;
        search(query: string, callback?: (err: any, results: SearchResults) => void): Search;
        search(options: SearchOptions, callback?: (err: any, results: SearchResults) => void): Search;
    }

    export interface Search {
        run(callback: (err: any, results: SearchResults) => void): this;
    }
}

declare var Loggly: Loggly.Loggly;
export = Loggly;
