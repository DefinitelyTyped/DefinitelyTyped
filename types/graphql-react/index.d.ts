// Type definitions for graphql-react 8.1
// Project: https://github.com/jaydenseric/graphql-react#readme
// Definitions by: Mike Marcacci <https://github.com/mike-marcacci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

// The no-unnecessary-generics rule is stupid and overrestrictive. It is a
// perfectly valid and often useful to type-constrain a wrapping object.
/* tslint:disable:no-unnecessary-generics */

import { ReactNode, Context } from "react";

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
  options: GraphQLFetchOptions
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
  cacheValue?: GraphQLCacheValue<T>;
}

export class GraphQL {
  constructor(options?: { cache?: GraphQLCache });

  on(
    type: "reset",
    handler: (event: { exceptCacheKey: GraphQLCacheKey }) => void
  ): void;

  on(
    type: "cache",
    handler: (event: {
      cacheKey: GraphQLCacheKey;
      cacheValue: GraphQLCacheValue<any>;
    }) => void
  ): void;

  on(
    type: "fetch",
    handler: (event: {
      cacheKey: GraphQLCacheKey;
      cacheValuePromise: Promise<GraphQLCacheValue<any>>;
    }) => void
  ): void;

  off(
    type: "reset",
    handler: (event: { exceptCacheKey: GraphQLCacheKey }) => void
  ): void;

  off(
    type: "cache",
    handler: (event: {
      cacheKey: GraphQLCacheKey;
      cacheValue: GraphQLCacheValue<any>;
    }) => void
  ): void;

  off(
    type: "fetch",
    handler: (event: {
      cacheKey: GraphQLCacheKey;
      cacheValuePromise: Promise<GraphQLCacheValue<any>>;
    }) => void
  ): void;

  reset(exceptCacheKey?: string): void;
  operate<T, V>(options: {
    operation: GraphQLOperation<V>;
    fetchOptionsOverride?: GraphQLFetchOptionsOverride;
    reloadOnLoad?: boolean;
    resetOnLoad?: boolean;
  }): GraphQLOperationLoading<T>;

  cache: GraphQLCache;
}

export function reportCacheErrors(event: any): void;

export function ssr(
  grapphql: GraphQL,
  node: ReactNode,
  render?: (element: ReactNode) => string
): void;

export function useGraphQL<T, V>(options: {
  fetchOptionsOverride?: GraphQLFetchOptionsOverride;
  loadOnMount?: boolean;
  loadOnReload?: boolean;
  loadOnReset?: boolean;
  reloadOnLoad?: boolean;
  resetOnLoad?: boolean;
  operation: GraphQLOperation<V>;
}): GraphQLOperationStatus<T>;
