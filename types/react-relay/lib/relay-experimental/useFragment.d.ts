import { GraphQLTaggedNode } from 'relay-runtime';

// NOTE: These declares ensure that the type of the returned data is:
//   - non-nullable if the provided ref type is non-nullable
//   - nullable if the provided ref type is nullable
//   - array of non-nullable if the privoided ref type is an array of
//     non-nullable refs
//   - array of nullable if the privoided ref type is an array of nullable refs

type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;

type NonNullableReturnType<T extends { readonly ' $data'?: unknown }> = (arg: T) => NonNullable<T[' $data']>;
type NullableReturnType<T extends { readonly ' $data'?: unknown | null }> = (arg: T) => T[' $data'] | null;
type NonNullableArrayReturnType<T extends ReadonlyArray<{ readonly ' $data'?: unknown }>> = (arg: {
    readonly ' $data': T;
}) => Array<NonNullable<T[0][' $data']>>;
type NullableArrayReturnType<T extends ReadonlyArray<{ readonly ' $data'?: unknown | null }>> = (
    arg: T,
) => Array<T[0][' $data']> | null;

export function useFragment<TKey extends { readonly ' $data'?: unknown }>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): $Call<NonNullableReturnType<TKey>>;

export function useFragment<TKey extends { readonly ' $data'?: unknown | null }>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): $Call<NullableReturnType<TKey>>;

export function useFragment<TKey extends ReadonlyArray<{ readonly ' $data'?: unknown }>>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): $Call<NonNullableArrayReturnType<TKey>>;

export function useFragment<TKey extends ReadonlyArray<{ readonly ' $data'?: unknown | null }>>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): $Call<NullableArrayReturnType<TKey>>;

export {};
