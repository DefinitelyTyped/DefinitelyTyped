// Type definitions for react-query 1.1
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
//                 Igor Oleinikov <https://github.com/igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import * as React from 'react';

// overloaded useQuery function
export function useQuery<TResult, TKey extends AnyQueryKey>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: QueryFunction<TResult, TKey>,
    config?: QueryOptions<TResult>,
): QueryResult<TResult>;

export function useQuery<TResult, TKey extends string>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: QueryFunction<TResult, [TKey]>,
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

// usePaginatedQuery
export function usePaginatedQuery<TResult, TKey extends AnyQueryKey>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: QueryFunction<TResult, TKey>,
    config?: QueryOptions<TResult>,
): QueryResultPaginated<TResult>;

export function usePaginatedQuery<TResult, TKey extends string>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    queryFn: QueryFunction<TResult, [TKey]>,
    config?: QueryOptions<TResult>,
): QueryResultPaginated<TResult>;

export function usePaginatedQuery<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: QueryFunctionWithVariables<TResult, TKey, TVariables>,
    config?: QueryOptions<TResult>,
): QueryResultPaginated<TResult>;

export function usePaginatedQuery<TResult, TKey extends string, TVariables extends AnyVariables>(
    queryKey: TKey | false | null | undefined | (() => TKey | false | null | undefined),
    variables: TVariables,
    queryFn: QueryFunctionWithVariables<TResult, [TKey], TVariables>,
    config?: QueryOptions<TResult>,
): QueryResultPaginated<TResult>;

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
}): QueryResultPaginated<TResult>;

export type QueryKeyPart = string | object | boolean | number | null | readonly QueryKeyPart[] | null | undefined;
export type AnyQueryKey =
    | readonly [QueryKeyPart]
    | readonly [QueryKeyPart, QueryKeyPart]
    | readonly [QueryKeyPart, QueryKeyPart, QueryKeyPart]
    | readonly [QueryKeyPart, QueryKeyPart, QueryKeyPart, QueryKeyPart];
export type AnyVariables =
    | readonly []
    | readonly [any]
    | readonly [any, any]
    | readonly [any, any, any]
    | readonly [any, any, any, any]
    | readonly [any, any, any, any, any];

export type QueryFunctionParams<TKey extends AnyQueryKey, TVariables extends AnyVariables> = TKey extends readonly [
    infer T1,
]
    ? Parameters<(key: T1, ...variables: TVariables) => void>
    : TKey extends readonly [infer T1, infer T2]
    ? Parameters<(key1: T1, key2: T2, ...variables: TVariables) => void>
    : TKey extends readonly [infer T1, infer T2, infer T3]
    ? Parameters<(key1: T1, key2: T2, key3: T3, ...variables: TVariables) => void>
    : TKey extends readonly [infer T1, infer T2, infer T3, infer T4]
    ? Parameters<(key1: T1, key2: T2, key3: T3, key4: T4, ...variables: TVariables) => void>
    : never;

export type QueryFunction<TResult, TKey extends AnyQueryKey> = (...key: TKey) => Promise<TResult>;
export type QueryFunctionWithVariables<TResult, TKey extends AnyQueryKey, TVariables extends AnyVariables> = (
    ...key: QueryFunctionParams<TKey, TVariables>
) => Promise<TResult>;

export interface QueryOptions<TResult> {
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
    onSuccess?: (data: TResult) => void;
    onSettled?: (data: TResult | undefined, error: unknown | null) => void;
    suspense?: boolean;
    initialData?: TResult;
}

export interface QueryOptionsPaginated<TResult> extends QueryOptions<TResult> {
    paginated: true;
    getCanFetchMore: (lastPage: TResult, allPages: TResult[]) => boolean;
}

export interface QueryResultBase<TResult> {
    status: 'loading' | 'error' | 'success';
    error: null | unknown;
    isFetching: boolean;
    failureCount: number;
    refetch: ({ force, throwOnError }?: { force?: boolean; throwOnError?: boolean }) => Promise<TResult>;
}

export interface QueryResult<TResult> extends QueryResultBase<TResult> {
    data: undefined | TResult;
}

export interface QueryResultPaginated<TResult> extends QueryResultBase<TResult> {
    resolvedData: undefined | TResult;
    latestDate: undefined | TResult;
}

// export function prefetchQuery<TResult, TVariables extends object>(
//     queryKey: QueryKey<TVariables>,
//     queryFn: QueryFunction<TResult, TVariables>,
//     options?: PrefetchQueryOptions<TResult>,
// ): Promise<TResult>;

export interface PrefetchQueryOptions<TResult> extends QueryOptions<TResult> {
    force?: boolean;
}

export function useMutation<TResults, TVariables>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: MutationOptions<TResults, TVariables>,
): [MutateFunction<TResults, TVariables>, MutationResult<TResults>];

export type MutationFunction<TResults, TVariables> = (variables: TVariables) => Promise<TResults>;

export interface MutateOptions<TResult, TVariables> {
    onSuccess?: (data: TResult, variables: TVariables) => Promise<void> | void;
    onError?: (error: any, variables: TVariables, snapshotValue: unknown) => Promise<void> | void;
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

export type MutateFunction<TResult, TVariables> = (
    variables?: TVariables,
    options?: MutateOptions<TResult, TVariables>,
) => Promise<TResult>;

export interface MutationResult<TResults> {
    status: 'idle' | 'loading' | 'error' | 'success';
    data: undefined | TResults;
    error: null | unknown;
    promise: Promise<TResults>;
    reset: () => void;
}

// export function setQueryData(
//     queryKey: string | [string, object],
//     data: any,
//     options?: {
//         shouldRefetch?: boolean;
//     },
// ): void | Promise<void>;

// export function refetchQuery(
//     queryKey: string | [string, object] | [string, false],
//     force?: {
//         force?: boolean;
//     },
// ): Promise<void>;

// export function refetchAllQueries(options?: { force?: boolean; includeInactive: boolean }): Promise<void>;

export function useIsFetching(): boolean;

export const ReactQueryConfigProvider: React.ComponentType<{
    config?: ReactQueryProviderConfig;
}>;

export interface ReactQueryProviderConfig {
    retry?: number;
    retryDelay?: (attempt: number) => number;
    staleTime?: number;
    cacheTime?: number;
    refetchAllOnWindowFocus?: boolean;
    refetchInterval?: false | number;
    suspense?: boolean;
}

// export function clearQueryCache(): void;
