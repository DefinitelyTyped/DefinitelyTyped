import { LoadMoreFn, UseLoadMoreFunctionArgs } from './useLoadMoreFunction';
import { RefetchFnDynamic } from './useRefetchableFragmentNode';
import { GraphQLResponse, GraphQLTaggedNode, Observer, OperationType } from 'relay-runtime';

export interface ReturnType<TQuery extends OperationType, TKey, TFragmentData> {
    data: TFragmentData;
    loadNext: LoadMoreFn;
    loadPrevious: LoadMoreFn;
    hasNext: boolean;
    hasPrevious: boolean;
    isLoadingNext: boolean;
    isLoadingPrevious: boolean;
    refetch: RefetchFnDynamic<TQuery, TKey>;
}

export type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;

export type NonNullableReturnType<T extends { readonly ' $data'?: unknown }> = (arg: T) => NonNullable<T[' $data']>;
export type NullableReturnType<T extends { readonly ' $data'?: unknown | null }> = (arg: T) => T[' $data'] | null;

export function useLegacyPaginationFragment<
    TQuery extends OperationType,
    TKey extends { readonly ' $data'?: unknown | null }
>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
): // tslint:disable-next-line no-unnecessary-generics
ReturnType<TQuery, TKey, $Call<NonNullableReturnType<TKey> & NullableReturnType<TKey>>>;
