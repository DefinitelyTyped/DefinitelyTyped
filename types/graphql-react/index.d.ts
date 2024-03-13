// The no-unnecessary-generics rule is stupid and overrestrictive. It is a
// perfectly valid and often useful to type-constrain a wrapping object.
/* eslint-disable @definitelytyped/no-unnecessary-generics */

import { Context, ReactNode } from "react";

export const GraphQLContext: Context<GraphQL>;

export interface HttpError {
    status: number;
    statusText: string;
}

export type GraphQLCacheKey = string;
export interface GraphQLCacheValue<T> {
    fetchError: null | string;
    httpError: null | HttpError;
    parseError: null | string;
    graphQLErrors:
        | null
        | Array<{
            message: string;
            path: string[];
            locations: Array<{ column: number; line: number }>;
        }>;
    data: T;
}

export interface GraphQLCache {
    [key: string]: GraphQLCacheValue<any>;
}

export interface GraphQLFetchOptions {
    url: string;
    body: string | FormData;
    headers: Headers;
    credentials: null | string;
}

export type GraphQLFetchOptionsOverride = (
    options: GraphQLFetchOptions,
) => void;

export type GraphQLOperation<V> = {
    query: string;
} & (V extends undefined ? {} : { variables: V });

export interface GraphQLOperationLoading<T> {
    cacheKey: GraphQLCacheKey;
    cacheValue: undefined | GraphQLCacheValue<T>;
    cacheValuePromise: Promise<GraphQLCacheValue<T>>;
}

export interface GraphQLOperationStatus<T> {
    load: () => void;
    loading: boolean;
    cacheKey: GraphQLCacheKey;
    cacheValue?: GraphQLCacheValue<T> | undefined;
}

export class GraphQL {
    constructor(options?: { cache?: GraphQLCache | undefined });

    on(
        type: "reset",
        handler: (event: { exceptCacheKey: GraphQLCacheKey }) => void,
    ): void;

    on(
        type: "cache",
        handler: (event: {
            cacheKey: GraphQLCacheKey;
            cacheValue: GraphQLCacheValue<any>;
        }) => void,
    ): void;

    on(
        type: "fetch",
        handler: (event: {
            cacheKey: GraphQLCacheKey;
            cacheValuePromise: Promise<GraphQLCacheValue<any>>;
        }) => void,
    ): void;

    off(
        type: "reset",
        handler: (event: { exceptCacheKey: GraphQLCacheKey }) => void,
    ): void;

    off(
        type: "cache",
        handler: (event: {
            cacheKey: GraphQLCacheKey;
            cacheValue: GraphQLCacheValue<any>;
        }) => void,
    ): void;

    off(
        type: "fetch",
        handler: (event: {
            cacheKey: GraphQLCacheKey;
            cacheValuePromise: Promise<GraphQLCacheValue<any>>;
        }) => void,
    ): void;

    reset(exceptCacheKey?: string): void;
    operate<T, V>(options: {
        operation: GraphQLOperation<V>;
        fetchOptionsOverride?: GraphQLFetchOptionsOverride | undefined;
        reloadOnLoad?: boolean | undefined;
        resetOnLoad?: boolean | undefined;
    }): GraphQLOperationLoading<T>;

    cache: GraphQLCache;
}

export function reportCacheErrors(event: any): void;

export function ssr(
    grapphql: GraphQL,
    node: ReactNode,
    render?: (element: ReactNode) => string,
): void;

export function useGraphQL<T, V>(options: {
    fetchOptionsOverride?: GraphQLFetchOptionsOverride | undefined;
    loadOnMount?: boolean | undefined;
    loadOnReload?: boolean | undefined;
    loadOnReset?: boolean | undefined;
    reloadOnLoad?: boolean | undefined;
    resetOnLoad?: boolean | undefined;
    operation: GraphQLOperation<V>;
}): GraphQLOperationStatus<T>;
