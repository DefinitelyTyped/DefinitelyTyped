import {
    Disposable,
    FetchPolicy,
    IEnvironment,
    OperationType,
    ReaderFragment,
    RenderPolicy,
    Variables,
    VariablesOf,
} from 'relay-runtime';

import { KeyType } from './helpers';

export type RefetchFn<TQuery extends OperationType, TOptions = Options> = RefetchFnExact<TQuery, TOptions>;

// NOTE: RefetchFnDynamic returns a refetch function that:
//  - Expects the /exact/ set of query variables if the provided key type is
//    /nullable/.
//  - Or, expects /a subset/ of the query variables if the provided key type is
//    /non-null/.
export type RefetchFnDynamic<
    TQuery extends OperationType,
    TKey extends KeyType | null,
    TOptions = Options
> = RefetchInexactDynamicResponse<TQuery, TOptions> & RefetchExactDynamicResponse<TQuery, TOptions>;

export type RefetchInexact<TQuery extends OperationType, TOptions> = (
    data?: unknown,
) => RefetchFnInexact<TQuery, TOptions>;
export type RefetchInexactDynamicResponse<TQuery extends OperationType, TOptions> = ReturnType<
    RefetchInexact<TQuery, TOptions>
>;

export type RefetchExact<TQuery extends OperationType, TOptions> = (
    data?: unknown | null,
) => RefetchFnExact<TQuery, TOptions>;
export type RefetchExactDynamicResponse<TQuery extends OperationType, TOptions> = ReturnType<
    RefetchExact<TQuery, TOptions>
>;

export type RefetchFnBase<TVars, TOptions> = (vars: TVars, options?: TOptions) => Disposable;

export type RefetchFnExact<TQuery extends OperationType, TOptions = Options> = RefetchFnBase<
    VariablesOf<TQuery>,
    TOptions
>;
export type RefetchFnInexact<TQuery extends OperationType, TOptions = Options> = RefetchFnBase<
    Partial<VariablesOf<TQuery>>,
    TOptions
>;

// NOTE: This is the "ReturnType" from relay, but its reserved by TypeScript.
// https://github.com/facebook/relay/blob/676660dc86d498624d14dc50278563fc42c3fa7d/packages/relay-experimental/useRefetchableFragmentNode.js#L77-L87
export interface ReturnTypeNode<TQuery extends OperationType, TKey extends KeyType | null, TOptions = Options> {
    fragmentData: unknown;
    fragmentRef: unknown;
    refetch: RefetchFnDynamic<TQuery, TKey, TOptions>;
    disableStoreUpdates: () => void;
    enableStoreUpdates: () => void;
}

export interface Options {
    fetchPolicy?: FetchPolicy;
    onComplete?: (arg: Error | null) => void;
    UNSTABLE_renderPolicy?: RenderPolicy;
}

export interface InternalOptions extends Options {
    __environment?: IEnvironment;
}

export type Action =
    | {
          type: 'reset';
          environment: IEnvironment;
          fragmentIdentifier: string;
      }
    | {
          type: 'refetch';
          refetchVariables: Variables;
          fetchPolicy?: FetchPolicy;
          renderPolicy?: RenderPolicy;
          onComplete?: (args: Error | null) => void;
          environment?: IEnvironment | null;
      };

export interface RefetchState {
    fetchPolicy?: FetchPolicy;
    renderPolicy?: RenderPolicy;
    mirroredEnvironment: IEnvironment;
    mirroredFragmentIdentifier: string;
    onComplete?: (arg: Error | null) => void;
    refetchEnvironment?: IEnvironment | null;
    refetchVariables?: Variables | null;
    refetchGeneration: number;
}

export interface DebugIDandTypename {
    id: string;
    typename: string;
}

export function useRefetchableFragmentNode<TQuery extends OperationType, TKey extends KeyType | null>(
    fragmentNode: ReaderFragment,
    parentFragmentRef: unknown,
    componentDisplayName: string,
): // tslint:disable-next-line:no-unnecessary-generics
ReturnTypeNode<TQuery, TKey, InternalOptions>;
