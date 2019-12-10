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

interface KeyType {
    readonly ' $data'?: unknown;
}

type KeyReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;

export function useLegacyPaginationFragment<
    TQuery extends OperationType,
    TKey extends KeyType
>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
): // tslint:disable-next-line no-unnecessary-generics
ReturnType<TQuery, TKey, $Call<KeyReturnType<TKey>>>;

export function useLegacyPaginationFragment<
    TQuery extends OperationType,
    TKey extends KeyType
>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey | null,
): // tslint:disable-next-line no-unnecessary-generics
ReturnType<TQuery, TKey | null, $Call<KeyReturnType<TKey>> | null>;

export {};
