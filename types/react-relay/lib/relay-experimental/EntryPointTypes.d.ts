import {
    OperationType,
    ConcreteRequest,
    RequestParameters,
    IEnvironment,
    Observable,
    GraphQLResponse,
} from 'relay-runtime';

import { Component } from 'react';

export type PreloadFetchPolicy = 'store-or-network' | 'store-and-network' | 'network-only';

export interface PreloadOptions {
    readonly fetchKey?: string | number;
    readonly fetchPolicy?: PreloadFetchPolicy;
}

// Note: the phantom type parameter here helps ensures that the
// $Parameters.js value matches the type param provided to preloadQuery.
// tslint:disable-next-line interface-over-type-literal
export type PreloadableConcreteRequest<TQuery extends OperationType> = {};

export interface EnvironmentProviderOptions {
    [key: string]: unknown;
}

export interface PreloadedQuery<
    TQuery extends OperationType,
    TEnvironmentProviderOptions = EnvironmentProviderOptions
> {
    readonly environment: IEnvironment;
    readonly environmentProviderOptions: TEnvironmentProviderOptions | null | undefined;
    readonly fetchKey: string | number | null | undefined;
    readonly fetchPolicy: PreloadFetchPolicy;
    readonly name: string;
    readonly source: Observable<GraphQLResponse> | null | undefined;
    readonly variables: TQuery['variables'];
}

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
export type InternalEntryPointRepresentation<
    TEntryPointParams,
    TPreloadedQueries,
    TPreloadedEntryPoints,
    TRuntimeProps,
    TExtraProps
> = Readonly<{
    getPreloadProps: (
        entryPointParams: TEntryPointParams,
    ) => PreloadProps<TEntryPointParams, TPreloadedQueries, TPreloadedEntryPoints, TExtraProps>;
    root: unknown;
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
> = Component<EntryPointProps<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>>;

// Return type of the `getPreloadProps(...)` of the entry point
export type PreloadProps<
    TPreloadParams,
    TPreloadedQueries extends {},
    TPreloadedEntryPoints extends {},
    TExtraProps = null,
    TEnvironmentProviderOptions = EnvironmentProviderOptions
> = Readonly<{
    entryPoints?: { [T in keyof TPreloadedEntryPoints]: ExtractEntryPointTypeHelper<TPreloadParams> };
    extraProps?: TExtraProps;
    queries?: { [T in keyof TPreloadedQueries]: ExtractQueryTypeHelper<TEnvironmentProviderOptions> };
}>;

// Return type of the `prepareEntryPoint(...)` function
export type PreloadedEntryPoint<TEntryPointComponent> = Readonly<{
    entryPoints: JSX.LibraryManagedAttributes<TEntryPointComponent, 'entryPoints'>;
    extraProps: JSX.LibraryManagedAttributes<TEntryPointComponent, 'extraProps'>;
    getComponent: () => TEntryPointComponent;
    queries: JSX.LibraryManagedAttributes<TEntryPointComponent, 'queries'>;
}>;

export type ThinQueryParams<TQuery extends OperationType, TEnvironmentProviderOptions> = Readonly<{
    environmentProviderOptions?: TEnvironmentProviderOptions | null;
    options?: PreloadOptions | null;
    parameters: PreloadableConcreteRequest<TQuery>;
    variables: TQuery['variables'];
}>;

export type ThinNestedEntryPointParams<TEntryPointParams, TEntryPoint> = Readonly<{
    entryPoint: TEntryPoint;
    entryPointParams: TEntryPointParams;
}>;

export type ExtractQueryTypeHelper<TEnvironmentProviderOptions> = <TQuery extends OperationType>(
    query: PreloadedQuery<TQuery>,
) => ThinQueryParams<TQuery, TEnvironmentProviderOptions>;

export type ExtractEntryPointTypeHelper<TEntryPointParams> = <TEntryPointComponent>(
    entryPoint: PreloadedEntryPoint<TEntryPointComponent> | null | undefined,
) =>
    | ThinNestedEntryPointParams<TEntryPointParams, EntryPoint<TEntryPointParams, TEntryPointComponent>>
    | null
    | undefined;

export type EntryPoint<TEntryPointParams, TEntryPointComponent> = InternalEntryPointRepresentation<
    TEntryPointParams,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'queries'>,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'entryPoints'>,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'props'>,
    JSX.LibraryManagedAttributes<TEntryPointComponent, 'extraProps'>
>;

// tslint:disable-next-line interface-name
export interface IEnvironmentProvider<TOptions> {
    getEnvironment(options: TOptions | null): IEnvironment;
}
