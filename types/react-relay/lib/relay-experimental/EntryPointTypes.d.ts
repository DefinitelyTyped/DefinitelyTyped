import type { ComponentProps, ComponentType } from 'react';
import type {
    CacheConfig,
    GraphQLResponse,
    IEnvironment,
    Observable,
    OperationType,
    RequestParameters,
    VariablesOf,
} from 'relay-runtime';

export type { VariablesOf } from 'relay-runtime';

export interface JSResourceReference<TModule> {
    getModuleId(): string;

    getModuleIfRequired(): TModule;

    load(): Promise<TModule>;
}

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

export interface PreloadedQuery<
    TQuery extends OperationType,
    TEnvironmentProviderOptions = EnvironmentProviderOptions
> extends Readonly<{
        kind: 'PreloadedQuery';
        environment: IEnvironment;
        environmentProviderOptions?: TEnvironmentProviderOptions | null;
        fetchPolicy: PreloadFetchPolicy;
        networkCacheConfig?: CacheConfig | null;
        id?: string | null;
        name: string;
        source?: Observable<GraphQLResponse> | null;
        variables: VariablesOf<TQuery>;
        dispose: () => void;
        isDisposed: boolean;
    }> {}

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
interface InternalEntryPointRepresentation<
    /**
     * object that contains all necessary information to execute the preloaders (routeParams, query variables)
     */
    TEntryPointParams,
    /**
     * queries, defined in the root components
     */
    TPreloadedQueries extends Record<string, OperationType>,
    /**
     * nested entry points, defined in the root components
     */
    TPreloadedEntryPoints,
    /**
     * the type of additional props that you may pass to the component (like `onClick` handler, etc) during runtime.
     * Values for them defined during component runtime
     */
    TRuntimeProps,
    /**
     * a bag of extra props that you may define in `entrypoint` file and they will be passed to the EntryPointComponent
     * as `extraProps`
     */
    TExtraProps
> extends Readonly<{
        root: JSResourceReference<
            EntryPointComponent<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>
        >;
        getPreloadProps: (
            entryPointParams: TEntryPointParams,
        ) => PreloadProps<TEntryPointParams, TPreloadedQueries, TPreloadedEntryPoints, TExtraProps>;
    }> {}

type PreloadedQueries<TPreloadedQueries extends Record<string, OperationType>> = {
    [K in keyof TPreloadedQueries]: ThinQueryParams<TPreloadedQueries[K]>;
};

// Return type of the `getPreloadProps(...)` of the entry point
export interface PreloadProps<
    TPreloadParams extends {},
    TPreloadedQueries extends PreloadedQueries<{}>,
    TPreloadedEntryPoints extends {},
    TExtraProps extends {}
> extends Readonly<{
        entryPoints?: TPreloadedEntryPoints;
        extraProps?: TExtraProps;
        queries?: PreloadedQueries<TPreloadedQueries>;
    }> {}

// The shape of the props of the entry point `root` component
export interface EntryPointProps<
    TPreloadedQueries extends PreloadedQueries<{}>,
    TPreloadedEntryPoints = {},
    TRuntimeProps = {},
    TExtraProps = null
> extends Readonly<{
        entryPoints: TPreloadedEntryPoints;
        extraProps: TExtraProps | null;
        props: TRuntimeProps;
        queries: {
            [T in keyof TPreloadedQueries]: TPreloadedQueries[T] extends OperationType
                ? PreloadedQuery<TPreloadedQueries[T]>
                : never;
        };
    }> {}

// Type of the entry point `root` component
export type EntryPointComponent<
    TPreloadedQueries extends PreloadedQueries<{}>,
    TPreloadedEntryPoints = {},
    TRuntimeProps = {},
    TExtraProps = {}
> = ComponentType<EntryPointProps<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>>;

// Return type of `loadEntryPoint(...)`
export interface PreloadedEntryPoint<TEntryPointComponent extends EntryPointComponent<any>>
    extends Readonly<{
        dispose: () => void;
        entryPoints: ComponentProps<TEntryPointComponent>['entryPoints'];
        extraProps: ComponentProps<TEntryPointComponent>['extraProps'];
        getComponent: () => TEntryPointComponent;
        isDisposed: boolean;
        queries: ComponentProps<TEntryPointComponent>['queries'];
        rootModuleID: string;
    }> {}

export interface ThinQueryParams<
    TQuery extends OperationType,
    TEnvironmentProviderOptions extends EnvironmentProviderOptions = EnvironmentProviderOptions
> extends Readonly<{
        parameters: PreloadableConcreteRequest<TQuery>;
        variables: VariablesOf<TQuery>;
        options?: PreloadOptions | null;
        environmentProviderOptions?: TEnvironmentProviderOptions | null;
    }> {}

export interface ThinNestedEntryPointParams<TEntryPointParams, TEntryPoint>
    extends Readonly<{
        entryPoint: TEntryPoint;
        entryPointParams: TEntryPointParams;
    }> {}

export type EntryPoint<TEntryPointParams, TEntryPointComponent> = TEntryPointComponent extends EntryPointComponent<
    infer TPreloadedQueries,
    infer TPreloadedEntryPoints,
    infer TRuntimeProps,
    infer TExtraProps
>
    ? InternalEntryPointRepresentation<
          TEntryPointParams,
          TPreloadedQueries,
          TPreloadedEntryPoints,
          TRuntimeProps,
          TExtraProps
      >
    : never;

export interface IEnvironmentProvider<TOptions> {
    getEnvironment(options: TOptions | null): IEnvironment;
}
