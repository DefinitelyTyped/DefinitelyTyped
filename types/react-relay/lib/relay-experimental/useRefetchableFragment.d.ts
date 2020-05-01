import { RefetchFnDynamic } from './useRefetchableFragmentNode';
import { GraphQLTaggedNode, OperationType } from 'relay-runtime';

export type ReturnType<TQuery extends OperationType, TKey, TFragmentData> = [
    TFragmentData,
    RefetchFnDynamic<TQuery, TKey>,
];

export type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;

interface KeyType {
    readonly ' $data'?: unknown;
}

type KeyReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;

export function useRefetchableFragment<
    TQuery extends OperationType,
    TKey extends KeyType
    // tslint:disable-next-line:no-unnecessary-generics
>(fragmentInput: GraphQLTaggedNode, fragmentRef: TKey): ReturnType<TQuery, TKey, $Call<KeyReturnType<TKey>>>;

export function useRefetchableFragment<
    TQuery extends OperationType,
    TKey extends KeyType
    // tslint:disable-next-line:no-unnecessary-generics
>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): ReturnType<TQuery, TKey, $Call<KeyReturnType<TKey>> | null>;
