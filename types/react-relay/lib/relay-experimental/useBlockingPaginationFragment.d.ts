import type { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import type { KeyDataType, KeyType } from './helpers';
import type { LoadMoreFn } from './useLoadMoreFunction';
import type { RefetchFnDynamic } from './useRefetchableFragmentNode';

export interface ReturnTypeNode<TQuery extends OperationType, TKey extends KeyType | null, TFragmentData> {
    data: TFragmentData;
    loadNext: LoadMoreFn<TQuery>;
    loadPrevious: LoadMoreFn<TQuery>;
    hasNext: boolean;
    hasPrevious: boolean;
    refetch: RefetchFnDynamic<TQuery, TKey>;
}

export function useBlockingPaginationFragment<TQuery extends OperationType, TKey extends KeyType | null>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
    componentDisplayName?: string,
): ReturnTypeNode<TQuery, TKey, KeyDataType<TKey>>;
