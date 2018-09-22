// Type definitions for react-relay 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>
//                 Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
//                 Nicolas Pirotte <https://github.com/npirotte>
//                 Cameron Knight <https://github.com/ckknight>
//                 Kaare Hoff Skovgaard <https://github.com/kastermester>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

// Prettified with:
// $ prettier --parser typescript --tab-width 4 --semi --trailing-comma es5 --write --print-width 120 \
//   types/{react-relay,relay-runtime}/{,*}/*.ts*

export {
    commitLocalUpdate,
    commitRelayModernMutation as commitMutation,
    fetchRelayModernQuery as fetchQuery,
    GraphQLTaggedNode,
    requestRelaySubscription as requestSubscription,
} from "relay-runtime";

import * as React from "react";
import * as RelayRuntimeTypes from "relay-runtime";

// ~~~~~~~~~~~~~~~~~~~~~
// Utility types
// ~~~~~~~~~~~~~~~~~~~~~

export interface _RefType<T> {
    " $refType": T;
}
export interface _FragmentRefs<T> {
    " $fragmentRefs": T;
}

export type FragmentOrRegularProp<T> = T extends _RefType<infer U>
    ? _FragmentRefs<U>
    : T extends ReadonlyArray<_RefType<infer U>> ? ReadonlyArray<_FragmentRefs<U>> : T;

export type MappedFragmentProps<T> = { [K in keyof T]: FragmentOrRegularProp<T[K]> };

export type RemoveRelayProp<P> = Pick<P, Exclude<keyof P, "relay">>;

export interface ComponentRef {
    componentRef?: (ref: any) => void;
}

export type RelayContainer<P> = React.ComponentType<MappedFragmentProps<RemoveRelayProp<P>> & ComponentRef>;

// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
export type ConcreteFragmentDefinition = object;
export type ConcreteOperationDefinition = object;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayProp
// ~~~~~~~~~~~~~~~~~~~~~
// note: refetch and pagination containers augment this
export interface RelayProp {
    environment: RelayRuntimeTypes.Environment;
}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayQL
// ~~~~~~~~~~~~~~~~~~~~~
export function RelayQL(strings: string[], ...substitutions: any[]): RelayRuntimeTypes.RelayConcreteNode;

// ~~~~~~~~~~~~~~~~~~~~~
// ReactRelayTypes
// ~~~~~~~~~~~~~~~~~~~~~
export interface GeneratedNodeMap {
    [key: string]: RelayRuntimeTypes.GraphQLTaggedNode;
}

/**
 * Runtime function to correspond to the `graphql` tagged template function.
 * All calls to this function should be transformed by the plugin.
 */
export interface GraphqlInterface {
    (strings: string[] | TemplateStringsArray): RelayRuntimeTypes.GraphQLTaggedNode;
    experimental(strings: string[] | TemplateStringsArray): RelayRuntimeTypes.GraphQLTaggedNode;
}
export const graphql: GraphqlInterface;

// ~~~~~~~~~~~~~~~~~~~~~
// ReactRelayQueryRenderer
// ~~~~~~~~~~~~~~~~~~~~~

export interface QueryRendererProps<T extends RelayRuntimeTypes.OperationBase = RelayRuntimeTypes.OperationDefaults> {
    cacheConfig?: RelayRuntimeTypes.CacheConfig;
    environment: RelayRuntimeTypes.Environment;
    query?: RelayRuntimeTypes.GraphQLTaggedNode | null;
    render(readyState: ReadyState<T["response"]>): React.ReactElement<any> | undefined | null;
    variables: T["variables"];
    rerunParamExperimental?: RelayRuntimeTypes.RerunParam;
}
export interface ReadyState<T extends RelayRuntimeTypes.Variables = RelayRuntimeTypes.Variables> {
    error: Error | undefined | null;
    props: T | undefined | null;
    retry?(): void;
}

export class ReactRelayQueryRenderer<T extends RelayRuntimeTypes.OperationBase> extends React.Component<
    QueryRendererProps<T>
> {}
export class QueryRenderer<
    T extends RelayRuntimeTypes.OperationBase = RelayRuntimeTypes.OperationDefaults
> extends ReactRelayQueryRenderer<T> {}

// ~~~~~~~~~~~~~~~~~~~~~
// createFragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~

export function createFragmentContainer<P>(
    Component: React.ComponentType<P>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap
): RelayContainer<P>;

// ~~~~~~~~~~~~~~~~~~~~~
// createPaginationContainer
// ~~~~~~~~~~~~~~~~~~~~~
export interface PageInfo {
    endCursor: string | undefined | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | undefined | null;
}
export interface ConnectionData {
    edges?: ReadonlyArray<any>;
    pageInfo?: Partial<PageInfo>;
}
export type RelayPaginationProp = RelayProp & {
    hasMore(): boolean;
    isLoading(): boolean;
    loadMore(
        pageSize: number,
        callback: (error?: Error) => void,
        options?: RefetchOptions
    ): RelayRuntimeTypes.Disposable | undefined | null;
    refetchConnection(
        totalCount: number,
        callback: (error?: Error) => void,
        refetchVariables?: RelayRuntimeTypes.Variables
    ): RelayRuntimeTypes.Disposable | undefined | null;
};
export function FragmentVariablesGetter(
    prevVars: RelayRuntimeTypes.Variables,
    totalCount: number
): RelayRuntimeTypes.Variables;
export interface ConnectionConfig<P> {
    direction?: "backward" | "forward";
    getConnectionFromProps?(props: P): ConnectionData | undefined | null;
    getFragmentVariables?: typeof FragmentVariablesGetter;
    getVariables(
        props: { [propName: string]: any },
        paginationInfo: { count: number; cursor?: string },
        fragmentVariables: RelayRuntimeTypes.Variables
    ): RelayRuntimeTypes.Variables;
    query: RelayRuntimeTypes.GraphQLTaggedNode;
}
export function createPaginationContainer<P>(
    Component: React.ComponentType<P>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap,
    connectionConfig: ConnectionConfig<P>
): RelayContainer<P>;

// ~~~~~~~~~~~~~~~~~~~~~
// createRefetchContainer
// ~~~~~~~~~~~~~~~~~~~~~
export interface RefetchOptions {
    force?: boolean;
    rerunParamExperimental?: RelayRuntimeTypes.RerunParam;
}
export type RelayRefetchProp = RelayProp & {
    refetch(
        refetchVariables:
            | RelayRuntimeTypes.Variables
            | ((fragmentVariables: RelayRuntimeTypes.Variables) => RelayRuntimeTypes.Variables),
        renderVariables?: RelayRuntimeTypes.Variables,
        callback?: (error?: Error) => void,
        options?: RefetchOptions
    ): RelayRuntimeTypes.Disposable;
};
export function createRefetchContainer<P>(
    Component: React.ComponentType<P>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap,
    taggedNode: RelayRuntimeTypes.GraphQLTaggedNode
): RelayContainer<P>;
