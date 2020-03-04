// Type definitions for react-query 1.0
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0
import { ComponentType } from 'react';

export type QueryKey = string | [string, ...any[]] | false | null;

export type QueryFunction<TResult, TArgs extends any[] = any[]> = (key: string, ...args: TArgs) => Promise<TResult>;

/**
 * For given QueryKey get type of QueryKeyVariable (2nd element of tuple)
 */
export type QueryKeyVariables<T extends QueryKey> = T extends [string, infer U, ...any[]] ? U : any;

/**
 * For given QueryKey get Tuple without first element
 */
export type QueryKeyVariablesArgs<T extends QueryKey> = T extends any[] ? TupleTail<T> : [];

/**
 * Tuple without first element
 */
export type TupleTail<A extends any[]> = ((...args: A) => any) extends (h: any, ...t: infer T) => any ? T : never;

export function useQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: QueryFunction<TResult, QueryKeyVariablesArgs<TQueryKey>>,
    options?: QueryOptions<TResult>,
): QueryResult<TResult, QueryKeyVariables<TQueryKey>>;

export function usePaginatedQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: QueryFunction<TResult, QueryKeyVariablesArgs<TQueryKey>>,
    options?: QueryOptions<TResult>,
): QueryResultPaginated<TResult, TQueryKey>;

export function useInfiniteQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: QueryFunction<TResult, QueryKeyVariablesArgs<TQueryKey>>,
    options?: InfiniteQueryOptions<TResult, QueryKeyVariables<TQueryKey>>,
): QueryResultInfinite<TResult, QueryKeyVariables<TQueryKey>>;

export interface QueryOptions<TResult> {
    manual?: boolean;
    retry?: boolean | number;
    retryDelay?: (retryAttempt: number) => number;
    staleTime?: number;
    cacheTime?: number;
    refetchInterval?: false | number;
    refetchIntervalInBackground?: boolean;
    refetchOnWindowFocus?: boolean;
    onError?: (err: any) => void;
    onSuccess?: (data: TResult) => void;
    onSettled?: (data: TResult, err: any) => void;
    suspense?: boolean;
    initialData?: TResult;
    refetchOnMount?: boolean;
}

export interface InfiniteQueryOptions<TResult, TVariables> extends QueryOptions<TResult> {
    getFetchMore?: ((lastGroup: TResult, allGroups: TResult[]) => TVariables) | boolean;
}

export interface QueryResult<TResult, TVariables> {
    status: 'loading' | 'error' | 'success';
    data: undefined | TResult;
    error: null | Error;
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {
        variables?: TVariables;
        merge?: (...args: any[]) => any;
        disableThrow?: boolean;
    }) => Promise<any>;
}

export interface QueryResultPaginated<TResult, TVariables> {
    status: 'loading' | 'error' | 'success';
    resolvedData: undefined | TResult;
    latestData: undefined | TResult;
    error: null | Error;
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {
        variables?: TVariables;
        merge?: (...args: any[]) => any;
        disableThrow?: boolean;
    }) => Promise<any>;
}

export interface QueryResultInfinite<TResult, TVariables> {
    status: 'loading' | 'error' | 'success';
    data: TResult[];
    error: null | Error;
    isFetching: boolean;
    isFetchingMore: boolean;
    failureCount: number;
    refetch: (arg?: {
        variables?: TVariables;
        merge?: (...args: any[]) => any;
        disableThrow?: boolean;
    }) => Promise<any>;
    fetchMore: (variables?: TVariables) => Promise<any>;
    canFetchMore: boolean;
}

export function useMutation<TResults, TVariables extends object>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: MutationOptions<TResults>,
): [MutateFunction<TResults, TVariables>, MutationResult<TResults>];

export type MutationFunction<TResults, TVariables extends object> = (variables: TVariables) => Promise<TResults>;

export interface MutationOptions<TResult> {
    onSuccess?: (data: TResult) => Promise<any> | undefined;
    onSettled?: (data: TResult, error: any) => Promise<any> | undefined;
    onError?: (error: any) => Promise<any> | undefined;
    throwOnError?: boolean;
    useErrorBoundary?: boolean;
}

export type MutateFunction<TResults, TVariables extends object> = (
    variables?: TVariables,
    options?: {
        updateQuery?: string | [string, object];
        waitForRefetchQueries?: boolean;
    },
) => Promise<TResults>;

export interface MutationResult<TResults> {
    status: 'idle' | 'loading' | 'error' | 'success';
    data: TResults | undefined;
    error: null | Error;
    promise: Promise<TResults>;
}

export namespace queryCache {
    function prefetchQuery<TResult, TQueryKey extends QueryKey>(
        queryKey: TQueryKey,
        queryFn: QueryFunction<TResult, QueryKeyVariablesArgs<TQueryKey>>,
        options?: QueryOptions<TResult>,
    ): Promise<TResult>;

    // tslint:disable:no-unnecessary-generics
    function getQueryData<TResult>(queryKey: QueryKey): TResult | undefined;

    function setQueryData<TResult>(queryKey: QueryKey, updater: TResult | ((oldData: TResult) => TResult)): void;

    function refetchQueries(
        queryKeyOrPredicateFn: QueryKey | ((query: QueryKey) => boolean),
        options?: {
            exact?: boolean;
            throwOnError?: boolean;
        },
    ): Promise<void>;

    function removeQueries(
        queryKeyOrPredicateFn: QueryKey | ((query: QueryKey) => boolean),
        options?: {
            exact?: boolean;
        },
    ): void;

    // TODO: type returned QueryObject
    function getQuery(queryKey: QueryKey): any;

    const isFetching: boolean;

    function subscribe(callback: (queryCache: any) => void): (unsubscribe: (...args: any[]) => void) => void;

    function clear(): void;
}

export function useIsFetching(): boolean;

export const ReactQueryConfigProvider: React.ComponentType<{
    config?: ReactQueryProviderConfig;
}>;

export interface ReactQueryProviderConfig {
    suspense?: false;
    useErrorBoundary?: undefined;
    throwOnError?: false;
    refetchAllOnWindowFocus?: true;
    queryKeySerializerFn?: (queryKey: QueryKey) => [string, any[]];
    onSuccess?: () => {};
    onError?: () => {};
    onSettled?: () => {};
    retry?: number;
    retryDelay?: (attempt: number) => number;
    staleTime?: number;
    cacheTime?: number;
    refetchOnMount?: boolean;
    refetchInterval?: false | number;
    queryFnParamsFilter?: (...args: any[]) => any[];
}

export function setConsole(console: {
    log: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}): void;
