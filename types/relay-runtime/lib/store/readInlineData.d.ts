import { FragmentReference } from './RelayStoreTypes';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';

type KeyTypeRef<TData = unknown> = Readonly<{
    ' $data'?: TData | undefined;
    ' $fragmentRefs': FragmentReference;
}>;

type KeyTypeSpread<TData = unknown> = Readonly<{
    ' $data'?: TData | undefined;
    ' $fragmentSpreads': FragmentReference;
}>;

export type KeyType<TData = unknown> = KeyTypeRef<TData> | KeyTypeSpread<TData>;

export type KeyTypeData<TKey extends KeyType<TData>, TData = unknown> = Required<TKey>[' $data'];

export function readInlineData<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): KeyTypeData<TKey>;

export function readInlineData<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): KeyTypeData<TKey> | null;
