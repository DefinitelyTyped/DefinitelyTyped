import { GraphQLTaggedNode, OperationType } from "relay-runtime";

import { KeyType, KeyTypeData } from "./helpers";
import { RefetchFnDynamic } from "./useRefetchableFragmentNode";

export type useRefetchableFragmentHookType<
    TQuery extends OperationType,
    TKey extends KeyType | null | undefined,
    TFragmentData,
> = [TFragmentData, RefetchFnDynamic<TQuery, TKey>];

export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
useRefetchableFragmentHookType<TQuery, TKey, KeyTypeData<TKey>>;

export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null | undefined,
): // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
useRefetchableFragmentHookType<TQuery, TKey, KeyTypeData<TKey> | null | undefined>;
