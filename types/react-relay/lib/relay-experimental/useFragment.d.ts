import { GraphQLTaggedNode } from 'relay-runtime';

// NOTE: These declares ensure that the type of the returned data is:
//   - non-nullable if the provided ref type is non-nullable
//   - nullable if the provided ref type is nullable
//   - array of non-nullable if the privoided ref type is an array of
//     non-nullable refs
//   - array of nullable if the privoided ref type is an array of nullable refs

type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;

type KeyType = { readonly ' $data'?: unknown  }

type ReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;
type NonNullableArrayReturnType<T extends ReadonlyArray<KeyType>> = (arg: T) => ReadonlyArray<NonNullable<T[0][' $data']>>;
type NullableArrayReturnType<T extends ReadonlyArray<KeyType>> = (
    arg: T,
) => ReadonlyArray<NonNullable<T[0][' $data']> | null>;

export function useFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): $Call<ReturnType<TKey>>;

export function useFragment<TKey extends KeyType>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): $Call<ReturnType<TKey>> | null;

export function useFragment<TKey extends ReadonlyArray<KeyType>>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): $Call<NonNullableArrayReturnType<TKey>>;

export function useFragment<TKey extends ReadonlyArray<KeyType>>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): $Call<NonNullableArrayReturnType<TKey>> | null;

export function useFragment<TKey extends ReadonlyArray<KeyType>>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: ReadonlyArray<TKey[0] | null>,
): $Call<NullableArrayReturnType<TKey>>;

export function useFragment<TKey extends ReadonlyArray<KeyType>>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: ReadonlyArray<TKey[0] | null> | null,
): $Call<NullableArrayReturnType<TKey>> | null;

export {};
