// Type definitions for react-query 1.0
// Project: https://github.com/tannerlinsley/react-query
// Definitions by: Lukasz Fiszer <https://github.com/lukaszfiszer>
//                 Jace Hensley <https://github.com/jacehensley>
//                 Matteo Frana <https://github.com/matteofrana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType } from 'react';

export type QueryKey = string | [string, ...any[]] | false | null ;

export type QueryFunction<TResult = any, TArgs extends [string, ...any[]] = any> = (...args: TArgs) => Promise<TResult>;

type QueryFunctionArgs<T> = T extends any[] ? T :
                    T extends (...args: any[]) => [string, ...any[]] ? ReturnType<T> :
                    T extends (...args: any[]) => string ? [ReturnType<T>] :
                    any;

type OmitKey<T> = T extends [string, ...Array<(infer U)>] ? U : any;

export function useQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: (...args: QueryFunctionArgs<TQueryKey>) => Promise<TResult>,
    options?: QueryOptions<TResult>
): QueryResult<TResult, TQueryKey>;

export function usePaginatedQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: (...args: QueryFunctionArgs<TQueryKey>) => Promise<TResult>,
    options?: QueryOptions<TResult>
): QueryResultPaginated<TResult, TQueryKey>;

export function useInfiniteQuery<TResult, TQueryKey extends QueryKey>(
    queryKey: TQueryKey | (() => TQueryKey),
    queryFn: (...args: QueryFunctionArgs<TQueryKey>) => Promise<TResult>,
    options?: InfiniteQueryOptions<TResult, TQueryKey>
): QueryResultInfinite<TResult, TQueryKey>;

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
    getFetchMore?: ((lastGroup: TResult, allGroups: TResult[]) => OmitKey<TVariables>) | boolean
}

export interface QueryResult<TResult, TVariables> {
    status: 'loading' | 'error' | 'success'
    data: undefined | TResult[];
    error: null | Error;
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {variables?: OmitKey<TVariables>, merge?: (...args: any[]) => any, disableThrow?: boolean}) => Promise<any>;
}

export interface QueryResultPaginated<TResult, TVariables> {
    status: 'loading' | 'error' | 'success'
    resolvedData: undefined | TResult;
    latestData: undefined | TResult;
    error: null | Error;
    isFetching: boolean;
    failureCount: number;
    refetch: (arg?: {variables?: OmitKey<TVariables>, merge?: (...args: any[]) => any, disableThrow?: boolean}) => Promise<any>;
}

export interface QueryResultInfinite<TResult, TVariables> {
    status: 'loading' | 'error' | 'success'
    data: TResult[];
    error: null | Error;
    isFetching: boolean;
    isFetchingMore: boolean;
    failureCount: number;
    refetch: (arg?: {variables?: OmitKey<TVariables>, merge?: (...args: any[]) => any, disableThrow?: boolean}) => Promise<any>;
    fetchMore: (variables?: OmitKey<TVariables>) => Promise<any>;
    canFetchMore: boolean
}

export function useMutation<TResults, TVariables extends object>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: MutationOptions<TResults>
): [MutateFunction<TResults, TVariables>, MutationResult<TResults>];

export type MutationFunction<TResults, TVariables extends object> = (
    variables: TVariables,
) => Promise<TResults>;

export interface MutationOptions<TResult> {
    onSuccess?: (data: TResult) => (Promise<any> | undefined),
    onSettled?: (data: TResult, error: any) => (Promise<any> | undefined),
    onError?: (error: any) => (Promise<any> | undefined),
    throwOnError?: boolean;
    useErrorBoundary?: boolean;
}

export type MutateFunction<TResults, TVariables extends object> = (
    variables?: TVariables,
    options?: {
        updateQuery?: string | [string, object],
        waitForRefetchQueries?: boolean;
    }
) => Promise<TResults>;

export interface MutationResult<TResults> {
    status: 'idle' | 'loading' | 'error' | 'success'
    data: TResults | undefined;
    error: null | Error;
    promise: Promise<TResults>;
}

export namespace queryCache {

    export function prefetchQuery<TResult, TQueryKey extends QueryKey>(
        queryKey: TQueryKey,
        queryFn: QueryFunction<TResult, QueryFunctionArgs<TQueryKey>>,
        options?: QueryOptions<TResult>
    ): Promise<TResult>;

    export function getQueryData<TResult>(
        queryKey: QueryKey
    ): TResult | undefined;

    export function setQueryData<TResult>(
        queryKey: QueryKey,
        updater: TResult | ((oldData: TResult) => TResult)
    ): void;

    export function refetchQueries(
        queryKeyOrPredicateFn: QueryKey | ((query: QueryKey) => boolean),
        exact: boolean,
        throwOnError: boolean
    ): Promise<void>;

    export function removeQueries(
        queryKeyOrPredicateFn: QueryKey | ((query: QueryKey) => boolean),
        exact: boolean,
    ): void;

    // TODO: type returned QueryObject
    export function getQuery<TResult>(
        queryKey: QueryKey
    ): any;

    export const isFetching: boolean;

    export function subscribe(callback: (queryCache: any) => void): (unsubscribe: (...args: any[]) => void) => void;

    export function clear(): void;

}

export function useIsFetching(): boolean;

export const ReactQueryConfigProvider: React.ComponentType<{
    config?: ReactQueryProviderConfig
}>;

export interface ReactQueryProviderConfig {
    suspense?: false,
    useErrorBoundary?: undefined,
    throwOnError?: false,
    refetchAllOnWindowFocus?: true,
    queryKeySerializerFn?: (queryKey: QueryKey) => [string, any[]],
    onSuccess?: () => {},
    onError?: () => {},
    onSettled?: () => {},
    retry?: number;
    retryDelay?: (attempt: number) => number;
    staleTime?: number;
    cacheTime?: number;
    refetchOnMount?: boolean;
    refetchInterval?: false | number;
    queryFnParamsFilter?: (...args: any[]) => any[]
}

export function setConsole(console: Console): void;

