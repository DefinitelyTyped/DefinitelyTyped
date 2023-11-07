import { GraphQLTaggedNode, OperationType } from "relay-runtime";

import { KeyType, KeyTypeData } from "./helpers";
import { RefetchFnDynamic } from "./useRefetchableFragmentNode";

export type ReturnTypeNode<TQuery extends OperationType, TKey extends KeyType | null, TFragmentData> = [
    TFragmentData,
    RefetchFnDynamic<TQuery, TKey>,
];
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): ReturnTypeNode<TQuery, TKey, KeyTypeData<TKey>>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): ReturnTypeNode<TQuery, TKey, KeyTypeData<TKey> | null>;
