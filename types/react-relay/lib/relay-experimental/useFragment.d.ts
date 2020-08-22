import { GraphQLTaggedNode } from 'relay-runtime';

// NOTE: These declares ensure that the type of the returned data is:
//   - non-nullable if the provided ref type is non-nullable
//   - nullable if the provided ref type is nullable
//   - array of non-nullable if the privoided ref type is an array of
//     non-nullable refs
//   - array of nullable if the privoided ref type is an array of nullable refs

type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;

interface KeyType {
    readonly ' $data'?: unknown;
}
type ArrayKeyType = ReadonlyArray<{ readonly ' $data'?: ReadonlyArray<unknown> } | null>;

type KeyReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;
type ArrayKeyReturnType<T extends ArrayKeyType> = (arg: T) => NonNullable<NonNullable<T[0]>[' $data']>[0];

export function useFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): $Call<KeyReturnType<TKey>>;

export function useFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): $Call<KeyReturnType<TKey>> | null;

export function useFragment<TKey extends ArrayKeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): ReadonlyArray<$Call<ArrayKeyReturnType<TKey>>>;

export function useFragment<TKey extends ArrayKeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): ReadonlyArray<$Call<ArrayKeyReturnType<TKey>>> | null;

export {};
