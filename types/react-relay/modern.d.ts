import * as React from "react";
import { RelayCommonTypes, RelayRuntimeTypes } from "relay-runtime";

// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
type ConcreteFragment = any;
type ConcreteBatch = any;
type ConcreteFragmentDefinition = object;
type ConcreteOperationDefinition = object;
type ReactBaseComponent<T> = React.ComponentClass<T> | React.StatelessComponent<T>;

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
export function RelayQL(strings: string[], ...substitutions: any[]): RelayCommonTypes.RelayConcreteNode;

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
    cacheConfig?: RelayCommonTypes.CacheConfig;
    environment: RelayRuntimeTypes.Environment;
    query: GraphQLTaggedNode;
    render(readyState: ReadyState): React.ReactElement<any> | undefined | null;
    variables: RelayCommonTypes.Variables;
    rerunParamExperimental?: RelayCommonTypes.RerunParam;
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

// ~~~~~~~~~~~~~~~~~~~~~
// createFragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~
export function createFragmentContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap
): ReactBaseComponent<T>;

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
    ): RelayCommonTypes.Disposable | undefined | null;
    refetchConnection(
        totalCount: number,
        callback: (error?: Error) => void,
        refetchVariables?: RelayCommonTypes.Variables
    ): RelayCommonTypes.Disposable | undefined | null;
};
export function FragmentVariablesGetter(
    prevVars: RelayCommonTypes.Variables,
    totalCount: number
): RelayCommonTypes.Variables;
export interface ConnectionConfig {
    direction?: "backward" | "forward";
    getConnectionFromProps?(props: object): ConnectionData | undefined | null;
    getFragmentVariables?: typeof FragmentVariablesGetter;
    getVariables(
        props: { [propName: string]: any },
        paginationInfo: { count: number; cursor?: string },
        fragmentVariables: RelayCommonTypes.Variables
    ): RelayCommonTypes.Variables;
    query: GraphQLTaggedNode;
}
export function createPaginationContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    connectionConfig: ConnectionConfig
): ReactBaseComponent<T>;

// ~~~~~~~~~~~~~~~~~~~~~
// createFragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~
export interface RefetchOptions {
    force?: boolean;
    rerunParamExperimental?: RelayCommonTypes.RerunParam;
}
export type RelayRefetchProp = RelayProp & {
    refetch(
        refetchVariables:
            | RelayCommonTypes.Variables
            | ((fragmentVariables: RelayCommonTypes.Variables) => RelayCommonTypes.Variables),
        renderVariables?: RelayCommonTypes.Variables,
        callback?: (error?: Error) => void,
        options?: RefetchOptions
    ): RelayCommonTypes.Disposable;
};
export function createRefetchContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    taggedNode: GraphQLTaggedNode
): ReactBaseComponent<T>;
