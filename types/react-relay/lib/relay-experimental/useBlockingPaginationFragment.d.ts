import { GraphQLResponse, GraphQLTaggedNode, Observer, OperationType } from 'relay-runtime';

import { LoadMoreFn, UseLoadMoreFunctionArgs } from './useLoadMoreFunction';
import { RefetchFnDynamic } from './useRefetchableFragmentNode';

export interface ReturnType<TQuery extends OperationType, TKey, TFragmentData> {
    data: TFragmentData;
    loadNext: LoadMoreFn;
    loadPrevious: LoadMoreFn;
    hasNext: boolean;
    hasPrevious: boolean;
    refetch: RefetchFnDynamic<TQuery, TKey>;
}

export type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;

export type NonNullableReturnType<T extends { readonly ' $data'?: unknown }> = (arg: T) => NonNullable<T[' $data']>;
export type NullableReturnType<T extends { readonly ' $data'?: unknown | null }> = (arg: T) => T[' $data'] | null;

export function useBlockingPaginationFragment<
    TQuery extends OperationType,
    TKey extends { readonly ' $data'?: unknown | null }
>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
    componentDisplayName?: string,
): ReturnType<
    // tslint:disable-next-line:no-unnecessary-generics
    TQuery,
    TKey,
    // NOTE: This $Call ensures that the type of the returned data is either:
    //   - nullable if the provided ref type is nullable
    //   - non-nullable if the provided ref type is non-nullable
    // prettier-ignore
    $Call<NonNullableReturnType<TKey> & NullableReturnType<TKey>>
>;
