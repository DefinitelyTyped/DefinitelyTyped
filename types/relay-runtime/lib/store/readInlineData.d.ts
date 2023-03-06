import { FragmentType } from './RelayStoreTypes';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';

export type KeyType<TData = unknown> = Readonly<{
    ' $data'?: TData | undefined;
    ' $fragmentSpreads': FragmentType;
}>;

export type KeyTypeData<TKey extends KeyType<TData>, TData = unknown> = Required<TKey>[' $data'];

export function readInlineData<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): KeyTypeData<TKey>;

export function readInlineData<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): KeyTypeData<TKey> | null;
