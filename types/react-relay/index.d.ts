// Type definitions for react-relay 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>
//                 Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
//                 Nicolas Pirotte <https://github.com/npirotte>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

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

// Taken from https://github.com/pelotom/type-zoo
type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

type RemoveRelayProp<P> = Omit<P & { relay: never }, "relay">;

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
export interface QueryRendererProps {
    cacheConfig?: RelayRuntimeTypes.CacheConfig;
    environment: RelayRuntimeTypes.Environment;
    query: RelayRuntimeTypes.GraphQLTaggedNode;
    render(readyState: ReadyState): React.ReactElement<any> | undefined | null;
    variables: RelayRuntimeTypes.Variables;
    rerunParamExperimental?: RelayRuntimeTypes.RerunParam;
}
export interface ReadyState {
    error: Error | undefined | null;
    props: { [propName: string]: any } | undefined | null;
    retry?(): void;
}
export interface QueryRendererState {
    readyState: ReadyState;
}
export class ReactRelayQueryRenderer extends React.Component<QueryRendererProps, QueryRendererState> {}
export class QueryRenderer extends ReactRelayQueryRenderer {}

// ~~~~~~~~~~~~~~~~~~~~~
// createFragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~
export function createFragmentContainer<T>(
    Component: React.ComponentType<T>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap
): React.ComponentType<RemoveRelayProp<T> & { componentRef?: any }>;

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
    edges?: any[];
    pageInfo?: PageInfo;
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
export interface ConnectionConfig<T> {
    direction?: "backward" | "forward";
    getConnectionFromProps?(props: T): ConnectionData | undefined | null;
    getFragmentVariables?: typeof FragmentVariablesGetter;
    getVariables(
        props: { [propName: string]: any },
        paginationInfo: { count: number; cursor?: string },
        fragmentVariables: RelayRuntimeTypes.Variables
    ): RelayRuntimeTypes.Variables;
    query: RelayRuntimeTypes.GraphQLTaggedNode;
}
export function createPaginationContainer<T>(
    Component: React.ComponentType<T>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap,
    connectionConfig: ConnectionConfig<T>
): React.ComponentType<RemoveRelayProp<T> & { componentRef?: any }>;

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
export function createRefetchContainer<T>(
    Component: React.ComponentType<T>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap,
    taggedNode: RelayRuntimeTypes.GraphQLTaggedNode
): React.ComponentType<RemoveRelayProp<T> & { componentRef?: any }>;
