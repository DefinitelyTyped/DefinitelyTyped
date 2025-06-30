import type { GraphQLTaggedNode } from "../query/RelayModernGraphQLTag";
import type { ArrayKeyType, ArrayKeyTypeData, KeyType, KeyTypeData } from "./FragmentTypes";
import type { FragmentType, SingularReaderSelector } from "./RelayStoreTypes";

export interface ResolverContext {
    getDataForResolverFragment: (
        arg0: SingularReaderSelector,
        arg1: FragmentType,
    ) => {
        data: unknown;
        isMissingData: boolean;
    };
}

export const RESOLVER_FRAGMENT_MISSING_DATA_SENTINEL: unknown;

export function withResolverContext<T>(context: ResolverContext, cb: () => T): T;

export function readFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): KeyTypeData<TKey>;

export function readFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): KeyTypeData<TKey> | null;

export function readFragment<TKey extends ArrayKeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): ArrayKeyTypeData<TKey>;

export function readFragment<TKey extends ArrayKeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): ArrayKeyTypeData<TKey> | null;
