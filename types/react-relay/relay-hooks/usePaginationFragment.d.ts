import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { KeyType, KeyTypeData } from "./helpers";
import { LoadMoreFn } from "./useLoadMoreFunction";
import { RefetchFnDynamic } from "./useRefetchableFragmentNode";

export interface usePaginationFragmentHookType<
    TQuery extends OperationType,
    TKey extends KeyType | null | undefined,
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
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function usePaginationFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
): usePaginationFragmentHookType<TQuery, TKey, KeyTypeData<TKey>>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function usePaginationFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey | null | undefined,
): usePaginationFragmentHookType<TQuery, TKey | null, KeyTypeData<TKey> | null | undefined>;
