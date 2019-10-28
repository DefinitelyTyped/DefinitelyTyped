import { RefetchFnDynamic } from './useRefetchableFragmentNode';
import { GraphQLTaggedNode, OperationType } from 'relay-runtime';

export type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;

export type NonNullableReturnType<T extends { readonly ' $data'?: unknown }> = (arg: T) => NonNullable<T[' $data']>;
export type NullableReturnType<T extends { readonly ' $data'?: unknown | null }> = (arg: T) => T[' $data'] | null;

export type ReturnType<TQuery extends OperationType, TKey extends { readonly ' $data'?: unknown | null }> = [
    $Call<NonNullableReturnType<TKey> & NullableReturnType<TKey>>,
    RefetchFnDynamic<TQuery, TKey>,
];

export function useRefetchableFragment<
    TQuery extends OperationType,
    TKey extends { readonly ' $data'?: unknown | null }
    // tslint:disable-next-line:no-unnecessary-generics
>(fragmentInput: GraphQLTaggedNode, fragmentRef: TKey): ReturnType<TQuery, TKey>;
