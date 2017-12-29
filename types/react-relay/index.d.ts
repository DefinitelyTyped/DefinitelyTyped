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
    requestRelaySubscription as requestSubscription,
} from "relay-runtime";

import * as React from "react";
import * as RelayRuntimeTypes from "relay-runtime";

// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
export type ConcreteFragment = any;
export type ConcreteBatch = any;
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
// RelayModernGraphQLTag
// ~~~~~~~~~~~~~~~~~~~~~
export interface GeneratedNodeMap {
    [key: string]: GraphQLTaggedNode;
}
export type GraphQLTaggedNode =
    | (() => ConcreteFragment | ConcreteBatch)
    | {
          modern(): ConcreteFragment | ConcreteBatch;
          classic(relayQL: typeof RelayQL): ConcreteFragmentDefinition | ConcreteOperationDefinition;
      };
/**
 * Runtime function to correspond to the `graphql` tagged template function.
 * All calls to this function should be transformed by the plugin.
 */
export interface GraphqlInterface {
    (strings: string[] | TemplateStringsArray): GraphQLTaggedNode;
    experimental(strings: string[] | TemplateStringsArray): GraphQLTaggedNode;
}
export const graphql: GraphqlInterface;

// ~~~~~~~~~~~~~~~~~~~~~
// ReactRelayQueryRenderer
// ~~~~~~~~~~~~~~~~~~~~~
export interface QueryRendererProps {
    cacheConfig?: RelayRuntimeTypes.CacheConfig;
    environment: RelayRuntimeTypes.Environment;
    query: GraphQLTaggedNode;
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
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap
): React.ComponentType<T>;

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
    query: GraphQLTaggedNode;
}
export function createPaginationContainer<T>(
    Component: React.ComponentType<T>,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    connectionConfig: ConnectionConfig<T>
): React.ComponentType<T>;

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
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    taggedNode: GraphQLTaggedNode
): React.ComponentType<T>;
