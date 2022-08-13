import type { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import type { FragmentType, SingularReaderSelector } from './RelayStoreTypes';

export type KeyType<TData = unknown> = Readonly<{
    ' $data'?: TData | undefined;
    ' $fragmentSpreads': FragmentType;
}>;

export type KeyTypeData<TKey extends KeyType<TData>, TData = unknown> = Required<TKey>[' $data'];

export type ArrayKeyType<TData = unknown> = ReadonlyArray<KeyType<ReadonlyArray<TData>> | null>;
export type ArrayKeyTypeData<TKey extends ArrayKeyType<TData>, TData = unknown> = KeyTypeData<
    NonNullable<TKey[number]>
>;

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
