// Type definitions for react-query 1.0
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0
import { ComponentType } from 'react';

export type QueryKey = string | [string, ...any[]] | false | null;

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
    queryFn: (key: string, ...args: QueryKeyVariablesArgs<TQueryKey>) => Promise<TResult>,
    options?: QueryOptions<TResult>,
): QueryState<TResult, QueryKeyVariables<TQueryKey>>;

export function usePaginatedQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: (key: string, ...args: QueryKeyVariablesArgs<TQueryKey>) => Promise<TResult>,
    options?: QueryOptions<TResult>,
): PaginatedQueryState<TResult, TQueryKey>;

export function useInfiniteQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: (key: string, ...args: QueryKeyVariablesArgs<TQueryKey>) => Promise<TResult>,
    options?: InfiniteQueryOptions<TResult, QueryKeyVariables<TQueryKey>>,
): InfiniteQueryState<TResult, QueryKeyVariables<TQueryKey>>;

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

export type QueryState<TResult, TVariables> =
    | QueryLoadingState<TVariables>
    | QueryErrorState<TVariables>
    | QuerySuccessState<TResult, TVariables>;

export interface QueryLoadingState<TVariables> extends QueryBaseState<TVariables> {
    status: 'loading';
    data: undefined;
    error: null;
}

export interface QueryErrorState<TVariables> extends QueryBaseState<TVariables> {
    status: 'error';
    data: undefined;
    error: Error;
}

export interface QuerySuccessState<TResult, TVariables> extends QueryBaseState<TVariables> {
    status: 'success';
    data: TResult;
    error: null;
}

export interface QueryBaseState<TVariables> {
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {
        variables?: TVariables;
        merge?: (...args: any[]) => any;
        disableThrow?: boolean;
    }) => Promise<any>;
}

export type PaginatedQueryState<TResult, TVariables> =
    | PaginatedQueryLoadingState<TVariables>
    | PaginatedQueryErrorState<TVariables>
    | PaginatedQuerySuccessState<TResult, TVariables>;

export interface PaginatedQueryLoadingState<TVariables> extends QueryBaseState<TVariables> {
    status: 'loading';
    resolvedData: undefined;
    latestData: undefined;
    error: null;
}

export interface PaginatedQueryErrorState<TVariables> extends QueryBaseState<TVariables> {
    status: 'error';
    resolvedData: undefined;
    latestData: undefined;
    error: Error;
}

export interface PaginatedQuerySuccessState<TResult, TVariables> extends QueryBaseState<TVariables> {
    status: 'success';
    resolvedData: TResult;
    latestData: TResult;
    error: null;
}

export type InfiniteQueryState<TResult, TVariables> =
    | InfiniteQuerySuccessState<TResult, TVariables>
    | InfiniteQueryErrorState<TVariables>
    | InfiniteQueryLoadingState<TVariables>;

export interface InfiniteQueryLoadingState<TVariables> extends InfiniteQueryBaseState<TVariables> {
    status: 'loading';
    data: [];
    error: null;
}

export interface InfiniteQueryErrorState<TVariables> extends InfiniteQueryBaseState<TVariables> {
    status: 'error';
    data: [];
    error: Error;
}

export interface InfiniteQuerySuccessState<TResult, TVariables> extends InfiniteQueryBaseState<TVariables> {
    status: 'success';
    data: TResult[];
    error: null;
}

export interface InfiniteQueryBaseState<TVariables> {
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
): [MutateFunction<TResults, TVariables>, MutationState<TResults>];

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

export interface MutationState<TResults> {
    status: 'idle' | 'loading' | 'error' | 'success';
    data: TResults | undefined;
    error: null | Error;
    promise: Promise<TResults>;
}

export namespace queryCache {
    function prefetchQuery<TResult, TQueryKey extends QueryKey>(
        queryKey: TQueryKey,
        queryFn: (key: string, ...args: QueryKeyVariablesArgs<TQueryKey>) => Promise<TResult>,
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
    suspense?: boolean;
    useErrorBoundary?: undefined;
    throwOnError?: boolean;
    refetchAllOnWindowFocus?: boolean;
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
