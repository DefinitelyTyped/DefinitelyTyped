import type { ComponentType } from 'react';
import type {
    CacheConfig,
    GraphQLResponse,
    IEnvironment,
    Observable,
    OperationType,
    RequestParameters,
} from 'relay-runtime';

// TODO: Make this come from jsr
interface JSResourceReference<T> {
    getModuleId(): string;

    getModuleIfRequired(): T;

    load(): Promise<T>;
}

// TODO: This should really come from relay-runtime, but will do that when we migrate relay-runtime
export type VariablesOf<TQuery extends OperationType> = TQuery['variables'];

export type PreloadFetchPolicy = 'store-or-network' | 'store-and-network' | 'network-only';

export type PreloadOptions = Readonly<{
    fetchKey?: string | number;
    fetchPolicy?: PreloadFetchPolicy | null;
    networkCacheConfig?: CacheConfig | null;
}>;

export type LoadQueryOptions = Readonly<{
    fetchPolicy?: PreloadFetchPolicy | null;
    networkCacheConfig?: CacheConfig | null;
    onQueryAstLoadTimeout?: (() => void) | null;
}>;

// Note: the phantom type parameter here helps ensures that the
// $Parameters.js value matches the type param provided to preloadQuery.
// tslint:disable-next-line interface-over-type-literal
export type PreloadableConcreteRequest<TQuery extends OperationType> = {
    kind: 'PreloadableConcreteRequest';
    params: RequestParameters;
};

export type EnvironmentProviderOptions<T extends Record<string, unknown> = Record<string, unknown>> = T;

export type PreloadedQuery<TQuery extends OperationType, TEnvironmentProviderOptions = EnvironmentProviderOptions> =
    | PreloadedQueryInner_DEPRECATED<TQuery, TEnvironmentProviderOptions>
    | PreloadedQueryInner<TQuery, TEnvironmentProviderOptions>;

export type PreloadedQueryInner_DEPRECATED<
    TQuery extends OperationType,
    TEnvironmentProviderOptions = EnvironmentProviderOptions
> = Readonly<{
    kind: 'PreloadedQuery_DEPRECATED';
    environment: IEnvironment;
    environmentProviderOptions?: TEnvironmentProviderOptions | null;
    fetchKey?: string | number | null;
    fetchPolicy: PreloadFetchPolicy;
    networkCacheConfig?: CacheConfig | null;
    id?: string | null;
    name: string;
    source?: Observable<GraphQLResponse> | null;
    variables: VariablesOf<TQuery>;
    status: PreloadQueryStatus;
}>;

export type PreloadedQueryInner<
    TQuery extends OperationType,
    TEnvironmentProviderOptions = EnvironmentProviderOptions
> = Readonly<{
    dispose: () => void;
    environment: IEnvironment;
    environmentProviderOptions?: TEnvironmentProviderOptions | null;
    fetchPolicy: PreloadFetchPolicy;
    id?: string | null;
    isDisposed: boolean;
    name: string;
    networkCacheConfig?: CacheConfig | null;
    source?: Observable<GraphQLResponse> | null;
    kind: 'PreloadedQuery';
    variables: VariablesOf<TQuery>;
}>;

export type PreloadQueryStatus = Readonly<{
    cacheConfig?: CacheConfig | null;
    source: 'cache' | 'network';
    fetchTime?: number | null;
}>;

/**
 * The Interface of the EntryPoints .entrypoint files
 *
 * Every .entrypoint file it's an object that must have two required fields:
 * - getPreloadProps(...)  function that will return the description of preloaded
 *   queries and preloaded (nested) entry points for the current entry point
 * - root - JSResource of the module that will render those preloaded queries
 *
 * TEntryPointParams - object that contains all necessary information to execute
 * the preloaders (routeParams, query variables)
 *
 * TPreloadedQueries -  queries, defined in the root components
 *
 * TPreloadedEntryPoints - nested entry points, defined in the root components
 *
 * TRuntimeProps - the type of additional props that you may pass to the
 * component (like `onClick` handler, etc) during runtime. Values for them
 * defined during component runtime
 *
 * TExtraProps - a bag of extra props that you may define in `entrypoint` file
 * and they will be passed to the EntryPointComponent as `extraProps`
 */
type InternalEntryPointRepresentation<
    TEntryPointParams,
    TPreloadedQueries,
    TPreloadedEntryPoints,
    TRuntimeProps,
    TExtraProps
> = Readonly<{
    getPreloadProps: (
        entryPointParams: TEntryPointParams,
    ) => PreloadProps<TEntryPointParams, TPreloadedQueries, TPreloadedEntryPoints, TExtraProps>;
    root: JSResourceReference<
        EntryPointComponent<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>
    >;
}>;

// The shape of the props of the entry point `root` component
export type EntryPointProps<
    TPreloadedQueries,
    TPreloadedEntryPoints = {},
    TRuntimeProps = {},
    TExtraProps = null
> = Readonly<{
    entryPoints: TPreloadedEntryPoints;
    extraProps: TExtraProps | null;
    props: TRuntimeProps;
    queries: TPreloadedQueries;
}>;

// Type of the entry point `root` component
export type EntryPointComponent<
    TPreloadedQueries,
    TPreloadedEntryPoints = {},
    TRuntimeProps = {},
    TExtraProps = null
> = ComponentType<EntryPointProps<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>>;

// Return type of the `getPreloadProps(...)` of the entry point
export type PreloadProps<
    TPreloadParams,
    TPreloadedQueries extends {},
    TPreloadedEntryPoints extends {},
    TExtraProps = null,
    TEnvironmentProviderOptions extends EnvironmentProviderOptions = EnvironmentProviderOptions
> = Readonly<{
    entryPoints?: Record<keyof TPreloadedEntryPoints, ExtractEntryPointTypeHelper<TPreloadParams>>;
    extraProps?: TExtraProps;
    queries?: Record<keyof TPreloadedQueries, ExtractQueryTypeHelper<TEnvironmentProviderOptions>>;
}>;

// Return type of `loadEntryPoint(...)`
export type PreloadedEntryPoint<TEntryPointComponent extends EntryPointComponent<any, any, any, any>> = Readonly<{
    dispose: () => void;
    entryPoints: JSX.LibraryManagedAttributes<TEntryPointComponent, 'entryPoints'>;
    extraProps: JSX.LibraryManagedAttributes<TEntryPointComponent, 'extraProps'>;
    getComponent: () => TEntryPointComponent;
    isDisposed: boolean;
    queries: JSX.LibraryManagedAttributes<TEntryPointComponent, 'queries'>;
    rootModuleID: string;
}>;

export type ThinQueryParams<
    TQuery extends OperationType,
    TEnvironmentProviderOptions extends EnvironmentProviderOptions
> = Readonly<{
    environmentProviderOptions?: TEnvironmentProviderOptions | null;
    options?: PreloadOptions | null;
    parameters: PreloadableConcreteRequest<TQuery>;
    variables: VariablesOf<TQuery>;
}>;

export type ThinNestedEntryPointParams<TEntryPointParams, TEntryPoint> = Readonly<{
    entryPoint: TEntryPoint;
    entryPointParams: TEntryPointParams;
}>;

export type ExtractQueryTypeHelper<TEnvironmentProviderOptions extends EnvironmentProviderOptions> = <
    TQuery extends OperationType
>(
    query: PreloadedQuery<TQuery>,
) => ThinQueryParams<TQuery, TEnvironmentProviderOptions>;

export type ExtractEntryPointTypeHelper<TEntryPointParams> = <
    TEntryPointComponent extends EntryPointComponent<unknown>
>(
    PreloadedEntryPoint?: PreloadedEntryPoint<TEntryPointComponent> | null,
) =>
    | ThinNestedEntryPointParams<TEntryPointParams, EntryPoint<TEntryPointParams, TEntryPointComponent>>
    | null
    | undefined;

export type EntryPoint<
    TEntryPointParams,
    TEntryPointComponent extends EntryPointComponent<unknown>
> = InternalEntryPointRepresentation<
    TEntryPointParams,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'queries'>,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'entryPoints'>,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'props'>,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'extraProps'>
>;

export type PreloadParamsOf<T extends InternalEntryPointRepresentation<any, any, any, any, any>> = ReturnType<
    Parameters<T['getPreloadProps']>[0]
>;

export interface IEnvironmentProvider<TOptions> {
    getEnvironment(options: TOptions | null): IEnvironment;
}
