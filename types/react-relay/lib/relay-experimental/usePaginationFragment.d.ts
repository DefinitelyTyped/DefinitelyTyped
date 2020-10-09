import type { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import type { KeyType, KeyTypeData } from './helpers';
import type { LoadMoreFn } from './useLoadMoreFunction';
import type { RefetchFnDynamic } from './useRefetchableFragmentNode';

export interface ReturnType<TQuery extends OperationType, TKey extends KeyType | null, TFragmentData> {
    data: TFragmentData;
    loadNext: LoadMoreFn<TQuery>;
    loadPrevious: LoadMoreFn<TQuery>;
    hasNext: boolean;
    hasPrevious: boolean;
    isLoadingNext: boolean;
    isLoadingPrevious: boolean;
    refetch: RefetchFnDynamic<TQuery, TKey>;
}

export function usePaginationFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
): ReturnType<TQuery, TKey, KeyTypeData<TKey>>;

export function usePaginationFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey | null,
): ReturnType<TQuery, TKey | null, KeyTypeData<TKey> | null>;
