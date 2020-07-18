import { GraphQLTaggedNode } from 'relay-runtime';

// NOTE: These declares ensure that the type of the returned data is:
//   - non-nullable if the provided ref type is non-nullable
//   - nullable if the provided ref type is nullable
//   - array of non-nullable if the privoided ref type is an array of
//     non-nullable refs
//   - array of nullable if the privoided ref type is an array of nullable refs

export type NonNullableReturn<TFragmentData> = (data?: TFragmentData) => TFragmentData;
export type NonNullableFragmentReturn<T> = ReturnType<NonNullableReturn<T>>;

export type NullableReturn<TFragmentData> = (data?: TFragmentData) => TFragmentData | null;
export type NullableFragmentReturn<T> = ReturnType<NullableReturn<T>>;

export type NonNullableArrayReturn<TFragmentData> = (data?: ReadonlyArray<TFragmentData>) => TFragmentData;
export type NonNullableArrayFragmentReturn<T> = ReturnType<NonNullableArrayReturn<T>>;

export type NullableArrayReturn<TFragmentData> = (data?: ReadonlyArray<TFragmentData>) => TFragmentData | null;
export type NullableArrayFragmentReturn<T> = ReturnType<NullableArrayReturn<T>>;

export function useFragment<TKey extends { readonly [key: string]: any }>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): NonNullableFragmentReturn<TKey>;
export function useFragment<TKey extends { readonly [key: string]: any } | null>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): NullableFragmentReturn<TKey>;
export function useFragment<TKey extends ReadonlyArray<{ readonly [key: string]: any }>>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): NonNullableArrayFragmentReturn<TKey>;
export function useFragment<TKey extends ReadonlyArray<{ readonly [key: string]: any }> | null>(
    fragmentInput: GraphQLTaggedNode,
    fragmentRef: TKey,
): NullableArrayFragmentReturn<TKey>;
