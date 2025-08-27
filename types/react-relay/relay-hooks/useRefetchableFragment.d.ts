import { GraphQLTaggedNode, OperationType } from "relay-runtime";

import { KeyType, KeyTypeData } from "./helpers";
import { RefetchFnDynamic } from "./useRefetchableFragmentNode";

export type useRefetchableFragmentHookType<
    TQuery extends OperationType,
    TKey extends KeyType | null | undefined,
    TFragmentData,
> = [TFragmentData, RefetchFnDynamic<TQuery, TKey>];
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): useRefetchableFragmentHookType<TQuery, TKey, KeyTypeData<TKey>>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null | undefined,
): useRefetchableFragmentHookType<TQuery, TKey, KeyTypeData<TKey> | null | undefined>;
