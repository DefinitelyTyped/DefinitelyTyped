// Type definitions for react-query 1.1
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
//                 Igor Oleinikov <https://github.com/igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import * as React from 'react';
import * as _ from 'ts-toolbelt';

// overloaded useQuery function
export function useQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables = []>({
    queryKey,
    variables,
    queryFn,
    config,
}: {
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined);
    variables?: TVariables;
    queryFn: QueryFunctionWithVariables<TResult, TKey, TVariables>;
    config?: QueryOptions<TResult>;
}): QueryResult<TResult>;

export function useQuery<TResult, TSingleKey extends string, TVariables extends AnyVariables = []>({
    queryKey,
    variables,
    queryFn,
    config,
}: {
    queryKey: TSingleKey | false | null | undefined | (() => TSingleKey | false | null | undefined);
    variables?: TVariables;
    queryFn: QueryFunctionWithVariables<TResult, [TSingleKey], TVariables>;
    config?: QueryOptions<TResult>;
}): QueryResult<TResult>;

export function useQuery<TResult, TKey extends AnyQueryKey>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: QueryFunction<TResult, TKey>,
    config?: QueryOptions<TResult>,
): QueryResult<TResult>;

export function useQuery<TResult, TSingleKey extends string>(
    queryKey: TSingleKey | false | null | undefined | (() => TSingleKey | false | null | undefined),
    queryFn: QueryFunction<TResult, [TSingleKey]>,
    config?: QueryOptions<TResult>,
): QueryResult<TResult>;

export function useQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: QueryFunctionWithVariables<TResult, TKey, TVariables>,
    config?: QueryOptions<TResult>,
): QueryResult<TResult>;

export function useQuery<TResult, TKey extends string, TVariables extends AnyVariables>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: QueryFunctionWithVariables<TResult, [TKey], TVariables>,
    config?: QueryOptions<TResult>,
): QueryResult<TResult>;

// usePaginatedQuery
export function usePaginatedQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables = []>({
    queryKey,
    variables,
    queryFn,
    config,
}: {
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined);
    variables?: TVariables;
    queryFn: QueryFunctionWithVariables<TResult, TKey, TVariables>;
    config?: QueryOptions<TResult>;
}): PaginatedQueryResult<TResult>;

export function usePaginatedQuery<TResult, TSingleKey extends string, TVariables extends AnyVariables = []>({
    queryKey,
    variables,
    queryFn,
    config,
}: {
    queryKey: TSingleKey | false | null | undefined | (() => TSingleKey | false | null | undefined);
    variables?: TVariables;
    queryFn: QueryFunctionWithVariables<TResult, [TSingleKey], TVariables>;
    config?: QueryOptions<TResult>;
}): PaginatedQueryResult<TResult>;

export function usePaginatedQuery<TResult, TKey extends AnyQueryKey>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: QueryFunction<TResult, TKey>,
    config?: QueryOptions<TResult>,
): PaginatedQueryResult<TResult>;

export function usePaginatedQuery<TResult, TKey extends string>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: QueryFunction<TResult, [TKey]>,
    config?: QueryOptions<TResult>,
): PaginatedQueryResult<TResult>;

export function usePaginatedQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: QueryFunctionWithVariables<TResult, TKey, TVariables>,
    config?: QueryOptions<TResult>,
): PaginatedQueryResult<TResult>;

export function usePaginatedQuery<TResult, TKey extends string, TVariables extends AnyVariables>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: QueryFunctionWithVariables<TResult, [TKey], TVariables>,
    config?: QueryOptions<TResult>,
): PaginatedQueryResult<TResult>;

// useInfiniteQuery
export function useInfiniteQuery<
    TResult,
    TKey extends AnyQueryKey,
    TMoreVariable,
    TVariables extends AnyVariables = []
>({
    queryKey,
    variables,
    queryFn,
    config,
}: {
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined);
    variables?: TVariables;
    queryFn: InfiniteQueryFunctionWithVariables<TResult, TKey, TVariables, TMoreVariable>;
    config?: InfiniteQueryOptions<TResult, TMoreVariable>;
}): InfiniteQueryResult<TResult, TMoreVariable>;

export function useInfiniteQuery<
    TResult,
    TSingleKey extends string,
    TMoreVariable,
    TVariables extends AnyVariables = []
>({
    queryKey,
    variables,
    queryFn,
    config,
}: {
    queryKey: TSingleKey | false | null | undefined | (() => TSingleKey | false | null | undefined);
    variables?: TVariables;
    queryFn: InfiniteQueryFunctionWithVariables<TResult, [TSingleKey], TVariables, TMoreVariable>;
    config?: InfiniteQueryOptions<TResult, TMoreVariable>;
}): InfiniteQueryResult<TResult, TMoreVariable>;

export function useInfiniteQuery<TResult, TKey extends AnyQueryKey, TMoreVariable>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: InfiniteQueryFunction<TResult, TKey, TMoreVariable>,
    config?: InfiniteQueryOptions<TResult, TMoreVariable>,
): InfiniteQueryResult<TResult, TMoreVariable>;

export function useInfiniteQuery<TResult, TKey extends string, TMoreVariable>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: InfiniteQueryFunction<TResult, [TKey], TMoreVariable>,
    config?: InfiniteQueryOptions<TResult, TMoreVariable>,
): InfiniteQueryResult<TResult, TMoreVariable>;

export function useInfiniteQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables, TMoreVariable>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: InfiniteQueryFunctionWithVariables<TResult, TKey, TVariables, TMoreVariable>,
    config?: InfiniteQueryOptions<TResult, TMoreVariable>,
): InfiniteQueryResult<TResult, TMoreVariable>;

export function useInfiniteQuery<TResult, TKey extends string, TVariables extends AnyVariables, TMoreVariable>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: InfiniteQueryFunctionWithVariables<TResult, [TKey], TVariables, TMoreVariable>,
    config?: InfiniteQueryOptions<TResult, TMoreVariable>,
): InfiniteQueryResult<TResult, TMoreVariable>;

export type QueryKeyPart = string | object | boolean | number | null | readonly QueryKeyPart[] | null | undefined;
export type AnyQueryKey = readonly [string, ...QueryKeyPart[]]; // this forces the key to be inferred as a tuple
export type AnyVariables = readonly [] | readonly [any, ...any[]]; // this forces the variables to be inferred as a tuple

export type QueryFunction<TResult, TKey extends AnyQueryKey> = (...key: TKey) => Promise<TResult>;
export type QueryFunctionWithVariables<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables> = (
    ...key: _.List.Concat<TKey, TVariables>
) => Promise<TResult>;

export type InfiniteQueryFunction<TResult, TKey extends AnyQueryKey, TMoreVariable> = (
    ...keysAndMore: _.List.Append<TKey, TMoreVariable> | TKey
) => Promise<TResult>;
export type InfiniteQueryFunctionWithVariables<
    TResult,
    TKey extends AnyQueryKey,
    TVariables extends AnyVariables,
    TMoreVariable
> = (
    ...keysAndVariablesAndMore:
        | _.List.Append<_.List.Concat<TKey, TVariables>, TMoreVariable>
        | _.List.Concat<TKey, TVariables>
) => Promise<TResult>;

export interface BaseQueryOptions {
    /**
     * Set this to `true` to disable automatic refetching when the query mounts or changes query keys.
     * To refetch the query, use the `refetch` method returned from the `useQuery` instance.
     */
    manual?: boolean;
    /**
     * If `false`, failed queries will not retry by default.
     * If `true`, failed queries will retry infinitely.
     * If set to an integer number, e.g. 3, failed queries will retry until the failed query count meets that number.
     */
    retry?: boolean | number;
    retryDelay?: (retryAttempt: number) => number;
    staleTime?: number;
    cacheTime?: number;
    refetchInterval?: false | number;
    refetchIntervalInBackground?: boolean;
    refetchOnWindowFocus?: boolean;
    refetchOnMount?: boolean;
    onError?: (err: unknown) => void;
    suspense?: boolean;
}

export interface QueryOptions<TResult> extends BaseQueryOptions {
    onSuccess?: (data: TResult) => void;
    onSettled?: (data: TResult | undefined, error: unknown | null) => void;
    initialData?: TResult | (() => TResult | undefined);
}

export interface InfiniteQueryOptions<TResult, TMoreVariable> extends QueryOptions<TResult[]> {
    getFetchMore: (lastPage: TResult, allPages: TResult[]) => TMoreVariable | false;
}

export interface QueryResultBase<TResult> {
    status: 'loading' | 'error' | 'success';
    error: null | unknown;
    isFetching: boolean;
    failureCount: number;
    refetch: ({ force, throwOnError }?: { force?: boolean; throwOnError?: boolean }) => Promise<TResult>;
}

export interface QueryLoadingResult<TResult> extends QueryResultBase<TResult> {
    status: 'loading';
    data: TResult | undefined; // even when error, data can have stale data
    error: unknown | null; // it still can be error
}

export interface QueryErrorResult<TResult> extends QueryResultBase<TResult> {
    status: 'error';
    data: TResult | undefined; // even when error, data can have stale data
    error: unknown;
}

export interface QuerySuccessResult<TResult> extends QueryResultBase<TResult> {
    status: 'success';
    data: TResult;
    error: null;
}

export type QueryResult<TResult> =
    | QueryLoadingResult<TResult>
    | QueryErrorResult<TResult>
    | QuerySuccessResult<TResult>;

export interface PaginatedQueryLoadingResult<TResult> extends QueryResultBase<TResult> {
    status: 'loading';
    resolvedData: undefined | TResult; // even when error, data can have stale data
    latestData: undefined | TResult; // even when error, data can have stale data
    error: unknown | null; // it still can be error
}

export interface PaginatedQueryErrorResult<TResult> extends QueryResultBase<TResult> {
    status: 'error';
    resolvedData: undefined | TResult; // even when error, data can have stale data
    latestData: undefined | TResult; // even when error, data can have stale data
    error: unknown;
}

export interface PaginatedQuerySuccessResult<TResult> extends QueryResultBase<TResult> {
    status: 'success';
    resolvedData: TResult;
    latestData: TResult;
    error: null;
}

export type PaginatedQueryResult<TResult> =
    | PaginatedQueryLoadingResult<TResult>
    | PaginatedQueryErrorResult<TResult>
    | PaginatedQuerySuccessResult<TResult>;

export interface InfiniteQueryResult<TResult, TMoreVariable> extends QueryResultBase<TResult[]> {
    data: TResult[];
    isFetchingMore: boolean;
    canFetchMore: boolean | undefined;
    fetchMore: (moreVariable?: TMoreVariable | false) => Promise<TResult[]> | undefined;
}

export function useMutation<TResults, TVariables = undefined>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: MutationOptions<TResults, TVariables>,
): [MutateFunction<TResults, TVariables>, MutationResult<TResults>];

export type MutationFunction<TResults, TVariables> = (variables: TVariables) => Promise<TResults>;

export interface MutateOptions<TResult, TVariables> {
    onSuccess?: (data: TResult, variables: TVariables) => Promise<void> | void;
    onError?: (error: unknown, variables: TVariables, snapshotValue: unknown) => Promise<void> | void;
    onSettled?: (
        data: undefined | TResult,
        error: unknown | null,
        variables: TVariables,
        snapshotValue?: unknown,
    ) => Promise<void> | void;
    throwOnError?: boolean;
}

export interface MutationOptions<TResult, TVariables> extends MutateOptions<TResult, TVariables> {
    onMutate?: (variables: TVariables) => Promise<unknown> | unknown;
    useErrorBoundary?: boolean;
}

export type MutateFunction<TResult, TVariables> = undefined extends TVariables
    ? (variables?: TVariables, options?: MutateOptions<TResult, TVariables>) => Promise<TResult>
    : (variables: TVariables, options?: MutateOptions<TResult, TVariables>) => Promise<TResult>;

export interface MutationResultBase<TResult> {
    status: 'idle' | 'loading' | 'error' | 'success';
    data: undefined | TResult;
    error: null | unknown;
    promise: Promise<TResult>;
    reset: () => void;
}

export interface IdleMutationResult<TResult> extends MutationResultBase<TResult> {
    status: 'idle';
    data: undefined;
    error: null;
}

export interface LoadingMutationResult<TResult> extends MutationResultBase<TResult> {
    status: 'loading';
    data: undefined;
    error: undefined;
}

export interface ErrorMutationResult<TResult> extends MutationResultBase<TResult> {
    status: 'error';
    data: undefined;
    error: unknown;
}

export interface SuccessMutationResult<TResult> extends MutationResultBase<TResult> {
    status: 'success';
    data: TResult;
    error: undefined;
}

export type MutationResult<TResult> =
    | IdleMutationResult<TResult>
    | LoadingMutationResult<TResult>
    | ErrorMutationResult<TResult>
    | SuccessMutationResult<TResult>;

export interface CachedQuery {
    queryKey: AnyQueryKey;
    queryVariables: AnyVariables;
    queryFn: (...args: any[]) => unknown;
    config: QueryOptions<unknown>;
    state: unknown;
    setData(dataOrUpdater: unknown | ((oldData: unknown | undefined) => unknown)): void;
}

export interface QueryCache {
    prefetchQuery<TResult, TKey extends AnyQueryKey>(
        queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
        queryFn: QueryFunction<TResult, TKey>,
        config?: QueryOptions<TResult>,
    ): Promise<TResult>;

    prefetchQuery<TResult, TKey extends string>(
        queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
        queryFn: QueryFunction<TResult, [TKey]>,
        config?: QueryOptions<TResult>,
    ): Promise<TResult>;

    prefetchQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables>(
        queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
        variables: TVariables,
        queryFn: QueryFunctionWithVariables<TResult, TKey, TVariables>,
        config?: QueryOptions<TResult>,
    ): Promise<TResult>;

    prefetchQuery<TResult, TKey extends string, TVariables extends AnyVariables>(
        queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
        variables: TVariables,
        queryFn: QueryFunctionWithVariables<TResult, [TKey], TVariables>,
        config?: QueryOptions<TResult>,
    ): Promise<TResult>;

    prefetchQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables = []>({
        queryKey,
        variables,
        queryFn,
        config,
    }: {
        queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined);
        variables?: TVariables;
        queryFn: QueryFunctionWithVariables<TResult, TKey, TVariables>;
        config?: QueryOptions<TResult>;
    }): Promise<TResult>;

    getQueryData(key: AnyQueryKey | string): unknown | undefined;
    setQueryData(key: AnyQueryKey | string, dataOrUpdater: unknown | ((oldData: unknown | undefined) => unknown)): void;
    refetchQueries(
        queryKeyOrPredicateFn: AnyQueryKey | string | ((query: CachedQuery) => boolean),
        { exact, throwOnError, force }?: { exact?: boolean; throwOnError?: boolean; force?: boolean },
    ): Promise<void>;
    removeQueries(
        queryKeyOrPredicateFn: AnyQueryKey | string | ((query: CachedQuery) => boolean),
        { exact }?: { exact?: boolean },
    ): Promise<void>;
    getQuery(queryKey: AnyQueryKey): CachedQuery | undefined;
    getQueries(queryKey: AnyQueryKey): CachedQuery[];
    isFetching: number;
    subscribe(callback: (queryCache: QueryCache) => void): () => void;
    clear(): CachedQuery[];
}

export const queryCache: QueryCache;

/**
 * A hook that returns the number of the quiries that your application is loading or fetching in the background
 * (useful for app-wide loading indicators).
 * @returns the number of the quiries that your application is currently loading or fetching in the background.
 */
export function useIsFetching(): number;

export const ReactQueryConfigProvider: React.ComponentType<{
    config?: ReactQueryProviderConfig;
}>;

export interface ReactQueryProviderConfig extends BaseQueryOptions {
    /** Defaults to the value of `suspense` if not defined otherwise */
    useErrorBoundary?: boolean;
    throwOnError?: boolean;
    refetchAllOnWindowFocus?: boolean;
    queryKeySerializerFn?: (
        queryKey: QueryKeyPart[] | string | false | undefined | (() => QueryKeyPart[] | string | false | undefined),
    ) => [string, QueryKeyPart[]] | [];

    onMutate?: (variables: unknown) => Promise<unknown> | unknown;
    onSuccess?: (data: unknown, variables?: unknown) => void;
    onError?: (err: unknown, snapshotValue?: unknown) => void;
    onSettled?: (data: unknown | undefined, error: unknown | null, snapshotValue?: unknown) => void;
}

export type ConsoleFunction = (...args: any[]) => void;
export interface ConsoleObject {
    log: ConsoleFunction;
    warn: ConsoleFunction;
    error: ConsoleFunction;
}

export function setConsole(consoleObject: ConsoleObject): void;
