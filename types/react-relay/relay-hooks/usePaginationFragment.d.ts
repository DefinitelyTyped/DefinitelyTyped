import { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import { KeyType, KeyTypeData } from './helpers';
import { LoadMoreFn } from './useLoadMoreFunction';
import { RefetchFnDynamic } from './useRefetchableFragmentNode';

export interface usePaginationFragmentHookType<
    TQuery extends OperationType,
    TKey extends KeyType | null,
    TFragmentData,
> {
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
): // tslint:disable-next-line no-unnecessary-generics
usePaginationFragmentHookType<TQuery, TKey, KeyTypeData<TKey>>;

export function usePaginationFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey | null,
): // tslint:disable-next-line no-unnecessary-generics
usePaginationFragmentHookType<TQuery, TKey | null, KeyTypeData<TKey> | null>;
