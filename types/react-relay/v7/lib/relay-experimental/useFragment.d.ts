import { GraphQLTaggedNode } from 'relay-runtime';

import { ArrayKeyType, ArrayKeyTypeData, KeyType, KeyTypeData } from './helpers';

// NOTE: These declares ensure that the type of the returned data is:
//   - non-nullable if the provided ref type is non-nullable
//   - nullable if the provided ref type is nullable
//   - array of non-nullable if the provided ref type is an array of
//     non-nullable refs
//   - array of nullable if the provided ref type is an array of nullable refs

export function useFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): KeyTypeData<TKey>;

export function useFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): KeyTypeData<TKey> | null;

export function useFragment<TKey extends ArrayKeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): ArrayKeyTypeData<TKey>;

export function useFragment<TKey extends ArrayKeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): ArrayKeyTypeData<TKey> | null;
