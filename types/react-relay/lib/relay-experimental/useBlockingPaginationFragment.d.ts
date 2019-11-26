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

interface KeyType {
    readonly ' $data'?: unknown;
}

type KeyReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;

export function useBlockingPaginationFragment<
    TQuery extends OperationType,
    TKey extends KeyType
>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
    componentDisplayName?: string,
): // tslint:disable-next-line no-unnecessary-generics
ReturnType<TQuery, TKey, $Call<KeyReturnType<TKey>>>;

export function useBlockingPaginationFragment<
    TQuery extends OperationType,
    TKey extends KeyType
>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey | null,
    componentDisplayName?: string,
): // tslint:disable-next-line no-unnecessary-generics
ReturnType<TQuery, TKey | null, $Call<KeyReturnType<TKey>> | null>;

export { };
