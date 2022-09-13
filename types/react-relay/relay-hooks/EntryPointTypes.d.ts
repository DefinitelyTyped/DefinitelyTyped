import { ComponentType } from 'react';
import {
    CacheConfig,
    ConcreteRequest,
    DisposeFn,
    FetchPolicy,
    GraphQLResponse,
    IEnvironment,
    Observable,
    OperationType,
    RequestParameters,
    VariablesOf,
} from 'relay-runtime';
import { GetEntryPointComponentFromEntryPoint, GetEntryPointParamsFromEntryPoint } from './helpers';

export { VariablesOf } from 'relay-runtime';

export interface JSResourceReference<TModule> {
    getModuleId(): string;

    getModuleIfRequired(): TModule | null;

    load(): Promise<TModule>;
}

export type PreloadFetchPolicy = 'store-or-network' | 'store-and-network' | 'network-only';

export type PreloadOptions = Readonly<{
    fetchKey?: string | number | undefined;
    fetchPolicy?: PreloadFetchPolicy | null | undefined;
    networkCacheConfig?: CacheConfig | null | undefined;
}>;

export type LoadQueryOptions = Readonly<{
    fetchPolicy?: FetchPolicy | null | undefined;
    networkCacheConfig?: CacheConfig | null | undefined;
    onQueryAstLoadTimeout?: (() => void) | null | undefined;
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
    TEnvironmentProviderOptions = EnvironmentProviderOptions,
> extends Readonly<{
        kind: 'PreloadedQuery';
        environment: IEnvironment;
        environmentProviderOptions?: TEnvironmentProviderOptions | null | undefined;
        fetchKey: string | number;
        fetchPolicy: PreloadFetchPolicy;
        networkCacheConfig?: CacheConfig | null | undefined;
        id?: string | null | undefined;
        name: string;
        source?: Observable<GraphQLResponse> | null | undefined;
        variables: VariablesOf<TQuery>;
        dispose: DisposeFn;
        isDisposed: boolean;
    }> {}

export type PreloadQueryStatus = Readonly<{
    cacheConfig?: CacheConfig | null | undefined;
    source: 'cache' | 'network';
    fetchTime?: number | null | undefined;
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
    TEntryPointParams extends {},
    /**
     * queries, defined in the root components
     */
    TPreloadedQueries extends Record<string, OperationType>,
    /**
     * nested entry points, defined in the root components
     */
    TPreloadedEntryPoints extends {},
    /**
     * the type of additional props that you may pass to the component (like `onClick` handler, etc) during runtime.
     * Values for them defined during component runtime
     */
    TRuntimeProps extends {},
    /**
     * a bag of extra props that you may define in `entrypoint` file and they will be passed to the EntryPointComponent
     * as `extraProps`
     */
    TExtraProps extends {} | null,
> extends Readonly<{
        root: JSResourceReference<
            EntryPointComponent<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>
        >;
        getPreloadProps: (
            entryPointParams: TEntryPointParams,
        ) => PreloadProps<TEntryPointParams, TPreloadedQueries, TPreloadedEntryPoints, TExtraProps>;
    }> {}

type ThinQueryParamsObject<TPreloadedQueries extends Record<string, OperationType> = {}> = {
    [K in keyof TPreloadedQueries]: ThinQueryParams<TPreloadedQueries[K]>;
};

type ThinNestedEntryPointParamsObject<
    TPreloadedEntryPoints extends Record<string, EntryPoint<any, any> | undefined> = {},
> = {
    [K in keyof TPreloadedEntryPoints]: ThinNestedEntryPointParams<TPreloadedEntryPoints[K]>;
};

type PreloadedQueries<TPreloadedQueries> = TPreloadedQueries extends Record<string, OperationType>
    ? {
          [T in keyof TPreloadedQueries]: PreloadedQuery<TPreloadedQueries[T]>;
      }
    : never;

type PreloadedEntryPoints<TPreloadedEntryPoints> = TPreloadedEntryPoints extends Record<
    string,
    InternalEntryPointRepresentation<any, any, any, any, any> | undefined
>
    ? {
          [T in keyof TPreloadedEntryPoints]: PreloadedEntryPoint<
              GetEntryPointComponentFromEntryPoint<TPreloadedEntryPoints[T]>
          >;
      }
    : never;

// Return type of the `getPreloadProps(...)` of the entry point
export interface PreloadProps<
    TPreloadParams extends {},
    TPreloadedQueries extends Record<string, OperationType>,
    TPreloadedEntryPoints extends Record<string, EntryPoint<any, any> | undefined>,
    TExtraProps extends {} | null,
> extends Readonly<{
        entryPoints?: ThinNestedEntryPointParamsObject<TPreloadedEntryPoints> | undefined;
        extraProps?: TExtraProps | undefined;
        queries?: ThinQueryParamsObject<TPreloadedQueries> | undefined;
    }> {}

// The shape of the props of the entry point `root` component
export interface EntryPointProps<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>
    extends Readonly<{
        entryPoints: PreloadedEntryPoints<TPreloadedEntryPoints>;
        extraProps: TExtraProps;
        props: TRuntimeProps;
        queries: PreloadedQueries<TPreloadedQueries>;
    }> {}

// Type of the entry point `root` component
export type EntryPointComponent<
    TPreloadedQueries extends Record<string, OperationType>,
    TPreloadedEntryPoints extends Record<string, EntryPoint<any, any> | undefined>,
    TRuntimeProps extends {} = {},
    TExtraProps extends {} | null = {},
> = ComponentType<EntryPointProps<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>>;

// Return type of `loadEntryPoint(...)`
export type PreloadedEntryPoint<TEntryPointComponent> = TEntryPointComponent extends EntryPointComponent<
    infer TPreloadedQueries,
    infer TPreloadedEntryPoints,
    infer TRuntimeProps,
    infer TExtraProps
>
    ? Readonly<{
          dispose: DisposeFn;
          entryPoints: TPreloadedEntryPoints;
          extraProps: TExtraProps;
          getComponent: () => TEntryPointComponent;
          isDisposed: boolean;
          queries: PreloadedQueries<TPreloadedQueries>;
          rootModuleID: string;
      }>
    : never;

export interface ThinQueryParams<
    TQuery extends OperationType,
    TEnvironmentProviderOptions extends EnvironmentProviderOptions = EnvironmentProviderOptions,
> extends Readonly<{
        /**
         * A reference to the $Parameters file that matches the type param provided to preloadQuery type.
         *
         * NOTE: For now, since OSS relay-compiler doesnt support generating the $Parameters file, you must give the query
         * wou would have given to usePreloadedQuery
         */
        parameters: ConcreteRequest | PreloadableConcreteRequest<TQuery>;
        /**
         * Variables to give to the query
         */
        variables: VariablesOf<TQuery>;
        /**
         * Any execution options to apply during network
         */
        options?: PreloadOptions | null | undefined;
        environmentProviderOptions?: TEnvironmentProviderOptions | null | undefined;
    }> {}

export interface ThinNestedEntryPointParams<TEntryPoint>
    extends Readonly<{
        entryPoint: TEntryPoint;
        entryPointParams: GetEntryPointParamsFromEntryPoint<TEntryPoint>;
    }> {}

export type EntryPoint<TEntryPointComponent, TEntryPointParams extends {} = {}> = InternalEntryPointRepresentation<
    TEntryPointParams,
    TEntryPointComponent extends EntryPointComponent<infer TPreloadedQueries, any, any, any>
        ? TPreloadedQueries
        : never,
    TEntryPointComponent extends EntryPointComponent<any, infer TPreloadedEntryPoints, any, any>
        ? TPreloadedEntryPoints
        : never,
    TEntryPointComponent extends EntryPointComponent<any, any, infer TRuntimeProps, any> ? TRuntimeProps : never,
    TEntryPointComponent extends EntryPointComponent<any, any, any, infer TExtraProps> ? TExtraProps : never
>;

// tslint:disable-next-line interface-name
export interface IEnvironmentProvider<TOptions> {
    getEnvironment(options: TOptions | null): IEnvironment;
}
