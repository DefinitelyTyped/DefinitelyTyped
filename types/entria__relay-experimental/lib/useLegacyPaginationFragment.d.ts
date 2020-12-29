import { LoadMoreFn, UseLoadMoreFunctionArgs } from './useLoadMoreFunction';
import { RefetchFnDynamic } from './useRefetchableFragmentNode';
import { GraphQLResponse, GraphQLTaggedNode, Observer, OperationType } from 'relay-runtime';

export interface ReturnTypePaginationFragment<TQuery extends OperationType, TKey, TFragmentData> {
    data: TFragmentData;
    loadNext: LoadMoreFn;
    loadPrevious: LoadMoreFn;
    hasNext: boolean;
    hasPrevious: boolean;
    isLoadingNext: boolean;
    isLoadingPrevious: boolean;
    refetch: RefetchFnDynamic<TQuery, TKey>;
}

export type NonNullableReturn<TFragmentData> = (data?: TFragmentData) => TFragmentData;
export type NonNullableFragmentReturn<TReturn> = ReturnType<NonNullableReturn<TReturn>>;

export type NullableReturn<TFragmentData> = (data?: TFragmentData | null) => TFragmentData | null;
export type NullableFragmentReturn<TReturn> = ReturnType<NullableReturn<TReturn>>;

export function useLegacyPaginationFragment<
    TQuery extends OperationType,
    TKey extends { readonly [key: string]: any } | null
>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
): // tslint:disable-next-line no-unnecessary-generics
ReturnTypePaginationFragment<TQuery, TKey, NonNullableFragmentReturn<TKey> & NullableFragmentReturn<TKey>>;
