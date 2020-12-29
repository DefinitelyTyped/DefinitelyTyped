import { Disposable, OperationType, IEnvironment, Variables, ReaderFragment } from 'relay-runtime';

import { FetchPolicy, RenderPolicy } from './QueryResource';

export type RefetchFn<TQuery extends OperationType, TOptions = Options> = RefetchFnExact<TQuery, TOptions>;

export type RefetchFnDynamic<
    TQuery extends OperationType,
    TKey extends { readonly [key: string]: any } | null,
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
    TQuery['variables'],
    TOptions
>;
export type RefetchFnInexact<TQuery extends OperationType, TOptions = Options> = RefetchFnBase<
    TQuery['variables'],
    TOptions
>;

export interface ReturnTypeNode<
    TQuery extends OperationType,
    TKey extends { readonly [key: string]: any } | null,
    TOptions = Options
> {
    fragmentData: unknown;
    fragmentRef: unknown;
    refetch: RefetchFnDynamic<TQuery, TKey, TOptions>;
    disableStoreUpdates: () => void;
    enableStoreUpdates: () => void;
}

export interface Options {
    fetchPolicy?: FetchPolicy;
    onComplete?: (arg: Error | null) => void;
}

export interface InternalOptions extends Options {
    __environment?: IEnvironment;
    renderPolicy?: RenderPolicy;
}

export type Action =
    | {
          type: string;
          environment: IEnvironment;
          fragmentIdentifier: string;
      }
    | {
          type: string;
          refetchVariables: Variables;
          fetchPolicy?: FetchPolicy;
          renderPolicy?: RenderPolicy;
          onComplete?: (args: Error | null) => void;
          environment: IEnvironment;
      };

export interface RefetchState {
    fetchPolicy: FetchPolicy | undefined;
    renderPolicy: RenderPolicy | undefined;
    mirroredEnvironment: IEnvironment;
    mirroredFragmentIdentifier: string;
    onComplete: ((arg: Error | null) => void) | undefined;
    refetchEnvironment?: IEnvironment | null;
    refetchVariables?: Variables | null;
}

export interface DebugIDandTypename {
    id: string;
    typename: string;
}

export function reducer(state: RefetchState, action: Action): RefetchState;

export function useRefetchableFragmentNode<
    TQuery extends OperationType,
    TKey extends { readonly [key: string]: any } | null
>(
    fragmentNode: ReaderFragment,
    parentFragmentRef: unknown,
    componentDisplayName: string,
): // tslint:disable-next-line:no-unnecessary-generics
ReturnTypeNode<TQuery, TKey, InternalOptions>;

export function useRefetchFunction<TQuery extends OperationType>(
    fragmentNode: any,
    parentFragmentRef: any,
    fragmentIdentifier: any,
    fragmentRefPathInResponse: any,
    fragmentData: any,
    refetchGenerationRef: any,
    dispatch: any,
    disposeFetch: any,
    componentDisplayName: any,
): // tslint:disable-next-line:no-unnecessary-generics
RefetchFn<TQuery, InternalOptions>;

export function readQuery(
    environment: any,
    query: any,
    fetchPolicy: any,
    renderPolicy: any,
    refetchGeneration: any,
    componentDisplayName: any,
    { start, complete }: any,
    profilerContext: any,
): any;
