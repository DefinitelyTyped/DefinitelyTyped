import type { GraphQLTaggedNode, OperationType } from 'relay-runtime';

import type { KeyType, KeyTypeData } from './helpers';
import type { RefetchFnDynamic } from './useRefetchableFragmentNode';

export type ReturnTypeNode<TQuery extends OperationType, TKey extends KeyType | null, TFragmentData> = [
    TFragmentData,
    RefetchFnDynamic<TQuery, TKey>,
];

export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): ReturnTypeNode<TQuery, TKey, KeyTypeData<TKey>>;

export function useRefetchableFragment<TQuery extends OperationType, TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): ReturnTypeNode<TQuery, TKey, KeyTypeData<TKey> | null>;
