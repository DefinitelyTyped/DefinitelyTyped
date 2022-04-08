// Type definitions for libnpmsearch 2.0
// Project: https://npmjs.com/package/libnpmsearch
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import npmFetch = require('npm-registry-fetch');

declare function search(query: string | ReadonlyArray<string>, opts: search.Options & { detailed: true }): Promise<search.DetailedResult[]>;
declare function search(query: string | ReadonlyArray<string>, opts?: search.Options): Promise<search.Result[]>;

declare namespace search {
    function stream(query: string | ReadonlyArray<string>, opts?: Options): NodeJS.ReadWriteStream;

    interface Maintainer {
        username: string;
        email: string;
    }

    interface Result {
        name: string;
        version: string;
        description?: string;
        maintainers?: Maintainer[];
        keywords?: string[];
        date?: Date;
    }

    interface Score {
        final: number;
        detail: {
            quality: number;
            popularity: number;
            maintenance: number;
        };
    }

    interface DetailedResult {
        package: Result;
        score: Score;
        searchScore: number;
    }

    type Options = SearchOptions & npmFetch.Options;

    interface SearchOptions {
        /**
         * Number of results to limit the query to. Default: `20`
         */
        limit?: number;
        /**
         * Offset number for results. Used with `opts.limit` for pagination.
         * Default: `0`
         */
        from?: number;
        /**
         * If true, returns an object with `package`, `score`, and `searchScore`
         * fields, with `package` being what would usually be returned, and the
         * other two containing details about how that package scored. Useful
         * for UIs. Default: `false`
         */
        detailed?: boolean;
        /**
         * Used as a shorthand to set `opts.quality`, `opts.maintenance`, and
         * `opts.popularity` with values that prioritize each one.
         */
        sortBy?: 'optimal' | 'quality' | 'maintenance' | 'popularity';
        /**
         * Decimal number between `0` and `1` that defines the weight of
         * `maintenance` metrics when scoring and sorting packages.
         * Default: `0.65` (same as `opts.sortBy: 'optimal'`)
         */
        maintenance?: number;
        /**
         * Decimal number between `0` and `1` that defines the weight of
         * `popularity` metrics when scoring and sorting packages.
         * Default: `0.98` (same as `opts.sortBy: 'optimal'`)
         */
        popularity?: number;
        /**
         * Decimal number between `0` and `1` that defines the weight of
         * `quality` metrics when scoring and sorting packages.
         * Default: `0.5` (same as `opts.sortBy: 'optimal'`)
         */
        quality?: number;
    }
}

export = search;
