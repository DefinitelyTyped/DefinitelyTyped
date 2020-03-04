// Type definitions for react-query 0.3
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType } from 'react';

type Falsy = false | 0 | "" | null | undefined

type Args<T> = T extends any[] ? T : T[];

type TupleRest<T> = T extends [string, (infer U)] ? U : T;

export function useQuery<TResult, TQueryKey extends ([string, ...any[]] | string)>(
    queryKey: TQueryKey | (() => any[]) | Falsy,
    queryFn: (...args: Args<TQueryKey>) => Promise<TResult>,
    options?: QueryOptions<TResult>
): QueryResult<TResult, any>;

export function usePaginatedQuery<TResult, TQueryKey extends ([string, ...any[]] | string)>(
    queryKey: TQueryKey | (() => any[]) | Falsy,
    queryFn: (...args: Args<TQueryKey>) => Promise<TResult>,
    options?: QueryOptions<TResult>
): PaginatedQueryResult<TResult, any>;

export function useInfiniteQuery<TResult, TQueryKey extends ([string, ...any[]] | string)>(
    queryKey: TQueryKey | (() => any[]) | Falsy,
    queryFn: (...args: Args<TQueryKey>) => Promise<TResult>,
    options?: InfiniteQueryOptions<TResult, TQueryKey>
): InfiniteQueryResult<TResult, any>;


export type QueryKey<TVariables> = TVariables | false | null | (() => TVariables);
export type QueryFunction<TVariables, TResult> = (...variables: TVariables[]) => Promise<TResult>;

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
    getFetchMore?: (lastGroup: TResult, allGroups: TResult[]) => TupleRest<TVariables>
}

export interface QueryOptionsPaginated<TResult> extends QueryOptions<TResult> {
    paginated: true;
    getCanFetchMore: (lastPage: TResult, allPages: TResult[]) => boolean;
}

export interface QueryResult<TResult, TVariables> {
    status: 'loading' | 'error' | 'success'
    data: undefined | TResult;
    error: null | Error;
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {variables?: TVariables, merge?: (...args: any[]) => any, disableThrow?: boolean}) => Promise<void>;
}

export interface PaginatedQueryResult<TResult, TVariables> {
    status: 'loading' | 'error' | 'success'
    resolvedData: undefined | TResult;
    latestData: undefined | TResult;
    error: null | Error;
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {variables?: TVariables, merge?: (...args: any[]) => any, disableThrow?: boolean}) => Promise<void>;
}

export interface QueryResultPaginated<TResult, TVariables> extends QueryResult<TResult[], TVariables> {
    isFetchingMore: boolean;
    canFetchMore: boolean;
    fetchMore: (variables?: TVariables) => Promise<TResult>;
}

export function prefetchQuery<TResult, TVariables extends object>(
    queryKey: QueryKey<TVariables>,
    queryFn: QueryFunction<TResult, TVariables>,
    options?: PrefetchQueryOptions<TResult>
): Promise<TResult>;

export interface PrefetchQueryOptions<TResult> extends QueryOptions<TResult> {
    force?: boolean;
}

export function useMutation<TResults, TVariables extends object>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: MutationOptions
): [MutateFunction<TResults, TVariables>, MutationResult<TResults>];

export type MutationFunction<TResults, TVariables extends object> = (
    variables: TVariables,
) => Promise<TResults>;

export interface MutationOptions {
    refetchQueries?: Array<string | [string, object]>;
    refetchQueriesOnFailure?: boolean;
}

export type MutateFunction<TResults, TVariables extends object> = (
    variables?: TVariables,
    options?: {
        updateQuery?: string | [string, object],
        waitForRefetchQueries?: boolean;
    }
) => Promise<TResults>;

export interface MutationResult<TResults> {
    data: TResults | null;
    isLoading: boolean;
    error: null | Error;
    promise: Promise<TResults>;
    reset: () => void;
}

export function setQueryData(
    queryKey: string | [string, object],
    data: any,
    options?: {
        shouldRefetch?: boolean
    }
): void | Promise<void>;

export function refetchQuery(
    queryKey: string | [string, object] | [string, false],
    force?: {
        force?: boolean
    }
): Promise<void>;

export function refetchAllQueries(
    options?: {
        force?: boolean,
        includeInactive: boolean
    }
): Promise<void>;

export function useIsFetching(): boolean;

export const ReactQueryConfigProvider: React.ComponentType<{
    config?: ReactQueryProviderConfig
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

export function clearQueryCache(): void;
