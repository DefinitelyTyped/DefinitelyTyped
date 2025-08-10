import type { GraphQLTaggedNode } from "../query/RelayModernGraphQLTag";
import type { KeyType, KeyTypeData } from "./FragmentTypes";

export function readInlineData<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): KeyTypeData<TKey>;

export function readInlineData<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null | undefined,
): KeyTypeData<TKey> | null | undefined;
