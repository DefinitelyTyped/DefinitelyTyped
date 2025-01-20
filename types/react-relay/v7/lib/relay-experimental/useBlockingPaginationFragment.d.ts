import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { KeyType, KeyTypeData } from "./helpers";
import { LoadMoreFn } from "./useLoadMoreFunction";
import { RefetchFnDynamic } from "./useRefetchableFragmentNode";

export interface ReturnTypeNode<TQuery extends OperationType, TKey extends KeyType | null, TFragmentData> {
    data: TFragmentData;
    loadNext: LoadMoreFn<TQuery>;
    loadPrevious: LoadMoreFn<TQuery>;
    hasNext: boolean;
    hasPrevious: boolean;
    refetch: RefetchFnDynamic<TQuery, TKey>;
}
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useBlockingPaginationFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
    componentDisplayName?: string,
): ReturnTypeNode<TQuery, TKey, KeyTypeData<TKey>>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useBlockingPaginationFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey | null,
    componentDisplayName?: string,
): ReturnTypeNode<TQuery, TKey, KeyTypeData<TKey> | null>;
