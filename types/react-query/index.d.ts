// Type definitions for react-query 1.0
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
//                 Fredrik Johansson <https://github.com/FrimJo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType } from 'react';

// overloaded useQuery function with pagination
export function useQuery<TResult, TVariables extends object>(
    queryKey: QueryKey<TVariables>,
    queryFn: QueryFunction<TResult, TVariables>,
    options: QueryOptionsPaginated<TResult>,
): QueryResultPaginated<TResult, TVariables>;

export function useQuery<TResult, TVariables extends object>(
    queryKey: QueryKey<TVariables>,
    queryFn: QueryFunction<TResult, TVariables>,
    options?: QueryOptions<TResult>,
): QueryResult<TResult, TVariables>;

export type QueryKey<TVariables> = string | [string, TVariables] | false | null | QueryKeyFunction<TVariables>;
export type QueryKeyFunction<TVariables> = () => string | [string, TVariables] | false | null;

export type QueryFunction<TResult, TVariables extends object> = (variables: TVariables) => Promise<TResult>;

export interface QueryOptions<TResult> {
    manual?: boolean;
    retry?: boolean | number;
    retryDelay?: (retryAttempt: number) => number;
    staleTime?: number;
    cacheTime?: number;
    refetchInterval?: false | number;
    refetchIntervalInBackground?: boolean;
    refetchOnWindowFocus?: boolean;
    onSuccess?: (data: TResult) => TResult;
    onError?: (err: any) => void;
    onSettled?: (data: TResult, err: any) => TResult;
    suspense?: boolean;
    initialData?: TResult;
    refetchOnMount?: boolean;
}

export interface QueryOptionsPaginated<TResult> extends QueryOptions<TResult> {
    paginated: true;
    getCanFetchMore: (lastPage: TResult, allPages: TResult[]) => boolean;
}

export interface QueryResult<TResult, TVariables> {
    status: 'loading' | 'error' | 'success';
    data: null | TResult;
    error: null | Error;
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {
        force?: boolean;
        throwOnError?: boolean;
        variables?: TVariables;
        merge?: (...args: any[]) => any;
        disableThrow?: boolean;
    }) => Promise<void>;
}

export interface QueryResultPaginated<TResult, TVariables> extends QueryResult<TResult[], TVariables> {
    isFetchingMore: boolean;
    canFetchMore: boolean;
    fetchMore: (variables?: TVariables) => Promise<TResult>;
}

export interface PrefetchQueryOptions<TResult> extends QueryOptions<TResult> {
    force?: boolean;
}

export function useMutation<TResults, TVariables extends object>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: MutationOptions<TResults>,
): [MutateFunction<TResults, TVariables>, MutationResult<TResults>];

export type MutationFunction<TResults, TVariables extends object> = (variables: TVariables) => Promise<TResults>;

export interface MutationOptions<TResult> {
    onSuccess?: (data: TResult) => Promise<TResult> | void;
    onError?: (err: any) => void;
    onSettled?: (data: TResult, err: any) => TResult;
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
    data: TResults | null;
    isLoading: boolean;
    error: null | Error;
    promise: Promise<TResults>;
    reset: () => void;
}

export function refetchQuery(
    queryKey: string | [string, object] | [string, false],
    force?: {
        force?: boolean;
    },
): Promise<void>;

export function refetchAllQueries(options?: { force?: boolean; includeInactive: boolean }): Promise<void>;

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

export const queryCache: {
    prefetchQuery: <TResult, TVariables extends object>(
        queryKey: QueryKey<TVariables>,
        queryFn: QueryFunction<TResult, TVariables>,
        options?: PrefetchQueryOptions<TResult>,
    ) => Promise<TResult>;
    getQueryData: <TResult, TVariables extends object>(queryKey: QueryKey<TVariables>) => Promise<TResult | null>;
    setQueryData: (
        queryKey: string | [string, object],
        data: any,
        options?: {
            shouldRefetch?: boolean;
        },
    ) => void | Promise<void>;
    refetchQueries: (
        predicate: (<TVariables extends object>(queryKey: QueryKey<TVariables>) => boolean) | QueryKey<object>,
        options?: {
            exact?: boolean;
            throwOnError?: boolean;
            force?: boolean;
        },
    ) => Promise<void>;
    removeQueries: (
        predicate: (<TVariables extends object>(queryKey: QueryKey<TVariables>) => boolean) | QueryKey<object>,
        options?: {
            force?: boolean;
        },
    ) => void;
    getQuery: <TResult, TVariables extends object>(queryKey: QueryKey<TVariables>) => Promise<TResult | null>;
    isFetching: number;
    subscribe: <TResult>(callback: Cache) => Promise<TResult | null>;
    clear: () => string[];
};

export interface Cache {
    queries: object;
    isFetching: number;
}
