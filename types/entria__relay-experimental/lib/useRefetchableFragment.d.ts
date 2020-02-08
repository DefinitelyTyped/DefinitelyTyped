import { RefetchFnDynamic } from './useRefetchableFragmentNode';
import { GraphQLTaggedNode, OperationType } from 'relay-runtime';

export type ReturnTypeRefetchableFragment<
    TQuery extends OperationType,
    TKey extends { readonly [key: string]: any } | null
> = [
    // NOTE: This ReturnType ensures that the type of the returned data is either:
    //   - nullable if the provided ref type is nullable
    //   - non-nullable if the provided ref type is non-nullable
    NonNullableFragmentReturn<TKey> & NullableFragmentReturn<TKey>,
    RefetchFnDynamic<TQuery, TKey>,
];

export type NonNullableReturn<TFragmentData> = (data?: TFragmentData) => TFragmentData;
export type NonNullableFragmentReturn<TReturn> = ReturnType<NonNullableReturn<TReturn>>;

export type NullableReturn<TFragmentData> = (data?: TFragmentData | null) => TFragmentData | null;
export type NullableFragmentReturn<TReturn> = ReturnType<NullableReturn<TReturn>>;

export function useRefetchableFragment<
    TQuery extends OperationType,
    TKey extends { readonly [key: string]: any } | null
    // tslint:disable-next-line:no-unnecessary-generics
>(fragmentInput: GraphQLTaggedNode, fragmentRef: TKey): ReturnTypeRefetchableFragment<TQuery, TKey>;
