// Type definitions for react-query 1.0
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0
import { ComponentType } from 'react';

export type QueryKey = string | [string, ...any[]] | false | null | undefined;

/**
 * For given QueryKey get type of 2nd element of query key tuple
 */
export type FetchMoreVariable<T extends QueryKey> = T extends [string, infer U, ...any[]] ? U : never;

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
): QueryState<TResult>;

export function usePaginatedQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: (key: string, ...args: QueryKeyVariablesArgs<TQueryKey>) => Promise<TResult>,
    options?: QueryOptions<TResult>,
): PaginatedQueryState<TResult>;

export function useInfiniteQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: (key: string, ...args: QueryKeyVariablesArgs<TQueryKey>) => Promise<TResult>,
    options?: InfiniteQueryOptions<TResult, FetchMoreVariable<TQueryKey>>,
): InfiniteQueryState<TResult, FetchMoreVariable<TQueryKey>>;

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

export interface InfiniteQueryOptions<TResult, FetchMoreVariable> extends QueryOptions<TResult> {
    getFetchMore?: ((lastGroup: TResult, allGroups: TResult[]) => FetchMoreVariable) | boolean;
}

export type QueryState<TResult> =
    | QueryLoadingState
    | QueryErrorState
    | QuerySuccessState<TResult>;

export interface QueryLoadingState extends QueryBaseState {
    status: 'loading';
    data: undefined;
    error: null;
}

export interface QueryErrorState extends QueryBaseState {
    status: 'error';
    data: undefined;
    error: Error;
}

export interface QuerySuccessState<TResult> extends QueryBaseState {
    status: 'success';
    data: TResult;
    error: null;
}

export interface QueryBaseState {
    isFetching: boolean;
    failureCount: number;
    refetch: (options?: {
        force?: boolean;
        thrownOnError?: boolean;
    }) => void;
}

export type PaginatedQueryState<TResult> =
    | PaginatedQueryLoadingState
    | PaginatedQueryErrorState
    | PaginatedQuerySuccessState<TResult>;

export interface PaginatedQueryLoadingState extends QueryBaseState {
    status: 'loading';
    resolvedData: undefined;
    latestData: undefined;
    error: null;
}

export interface PaginatedQueryErrorState extends QueryBaseState {
    status: 'error';
    resolvedData: undefined;
    latestData: undefined;
    error: Error;
}

export interface PaginatedQuerySuccessState<TResult> extends QueryBaseState {
    status: 'success';
    resolvedData: TResult;
    latestData: TResult;
    error: null;
}

export type InfiniteQueryState<TResult, TVariable> =
    | InfiniteQuerySuccessState<TResult, TVariable>
    | InfiniteQueryErrorState<TVariable>
    | InfiniteQueryLoadingState<TVariable>;

export interface InfiniteQueryLoadingState<TVariable> extends InfiniteQueryBaseState<TVariable> {
    status: 'loading';
    data: [];
    error: null;
}

export interface InfiniteQueryErrorState<TVariable> extends InfiniteQueryBaseState<TVariable> {
    status: 'error';
    data: [];
    error: Error;
}

export interface InfiniteQuerySuccessState<TResult, TVariable> extends InfiniteQueryBaseState<TVariable> {
    status: 'success';
    data: TResult[];
    error: null;
}

export interface InfiniteQueryBaseState<TVariable> {
    isFetching: boolean;
    isFetchingMore: boolean;
    failureCount: number;
    refetch: (options?: {
        force?: boolean;
        thrownOnError?: boolean;
    }) => void;
    fetchMore: (variables?: TVariable) => Promise<any>;
    canFetchMore: boolean;
}

export function useMutation<TResults, TVariables extends object>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: MutationOptions<TResults>,
): [MutateFunction<TResults, TVariables>, MutationState<TResults>];

export type MutationFunction<TResults, TVariables extends object> = (variables: TVariables) => Promise<TResults>;

export interface MutationOptions<TResult> {
    onSuccess?: (data: TResult) => Promise<any> | void;
    onSettled?: (data: TResult, error: any) => Promise<any> | void;
    onError?: (error: any) => Promise<any> | void;
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
    function getQuery(queryKey: QueryKey): unknown;

    const isFetching: boolean;

    function subscribe(callback: (queryCache: unknown) => void): (unsubscribe: (...args: any[]) => void) => void;

    function clear(): void;
}

export function useIsFetching(): boolean;

export const ReactQueryConfigProvider: React.ComponentType<{
    config?: ReactQueryProviderConfig;
}>;

export interface ReactQueryProviderConfig {
    suspense?: boolean;
    useErrorBoundary?: boolean;
    throwOnError?: boolean;
    refetchAllOnWindowFocus?: boolean;
    queryKeySerializerFn?: (queryKey: QueryKey) => [string, any[]];
    onSuccess?: (data: unknown) => Promise<any> | void;
    onError?: (err: Error) => Promise<any> | void;
    onSettled?: (data?: unknown, err?: Error) => void;
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
