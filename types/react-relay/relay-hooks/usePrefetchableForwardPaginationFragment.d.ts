import { GraphQLTaggedNode, OperationType, VariablesOf } from "relay-runtime";
import { KeyType, KeyTypeData } from "./helpers";
import { LoadMoreFn } from "./useLoadMoreFunction";
import { RefetchFnDynamic } from "./useRefetchableFragmentNode";

export interface usePrefetchableForwardPaginationFragmentHookType<
    TQuery extends OperationType,
    TKey extends KeyType | null | undefined,
    TFragmentData,
    TEdgeData,
> {
    data: TFragmentData;
    loadNext: LoadMoreFn<TQuery>;
    hasNext: boolean;
    isLoadingNext: boolean;
    refetch: RefetchFnDynamic<TQuery, TKey>;
    edges: TEdgeData;
}
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function usePrefetchableForwardPaginationFragment<TQuery extends OperationType, TKey extends KeyType, TEdgeData>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey,
    bufferSize: number,
    initialSize?: number,
    prefetchingLoadMoreOptions?: {
        UNSTABLE_extraVariables?: Partial<VariablesOf<TQuery>> | undefined;
        onComplete?: ((arg: Error | null) => void) | undefined;
    },
    minimalFetchSize?: number,
    disablePrefetching?: boolean,
): usePrefetchableForwardPaginationFragmentHookType<TQuery, TKey, KeyTypeData<TKey>, TEdgeData>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function usePrefetchableForwardPaginationFragment<TQuery extends OperationType, TKey extends KeyType, TEdgeData>(
    fragmentInput: GraphQLTaggedNode,
    parentFragmentRef: TKey | null | undefined,
    bufferSize: number,
    initialSize?: number,
    prefetchingLoadMoreOptions?: {
        UNSTABLE_extraVariables?: Partial<VariablesOf<TQuery>> | undefined;
        onComplete?: ((arg: Error | null) => void) | undefined;
    },
    minimalFetchSize?: number,
    disablePrefetching?: boolean,
): usePrefetchableForwardPaginationFragmentHookType<
    TQuery,
    TKey | null,
    KeyTypeData<TKey> | null | undefined,
    TEdgeData
>;
