// Type definitions for react-relay 5.0
// Project: https://github.com/facebook/relay, https://facebook.github.io/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>
//                 Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
//                 Nicolas Pirotte <https://github.com/npirotte>
//                 Cameron Knight <https://github.com/ckknight>
//                 Kaare Hoff Skovgaard <https://github.com/kastermester>
//                 Matt Krick <https://github.com/mattkrick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import {
    Environment,
    Variables,
    Disposable,
    Observer,
    CacheConfig,
    GraphQLTaggedNode,
    RelayContext,
    PageInfo,
    OperationType,
} from 'relay-runtime';

// ./ReactRelayTypes
export interface RelayProp {
    environment: Environment;
    refetch: undefined; // ensures no RelayRefetchProp is used with a fragment container
    hasMore: undefined; // ensures no RelayPaginationProp is used with a fragment container
}

export interface RelayRefetchProp {
    environment: Environment;
    refetch: (
        refetchVariables: Variables | ((fragmentVariables: Variables) => Variables),
        renderVariables?: Variables | null,
        observerOrCallback?: ObserverOrCallback | null,
        options?: RefetchOptions
    ) => Disposable;
    hasMore: undefined; // ensures no RelayPaginationProp is used with a refetch container
}
export interface RefetchOptions {
    force?: boolean;
    fetchPolicy?: 'store-or-network' | 'network-only';
}

type ObserverOrCallback = Observer<void> | ((error: Error | null | undefined) => void);

export interface RelayPaginationProp {
    readonly environment: Environment;
    readonly hasMore: () => boolean;
    readonly isLoading: () => boolean;
    readonly loadMore: (
        pageSize: number,
        observerOrCallback?: ObserverOrCallback | null,
        options?: RefetchOptions | null
    ) => Disposable | null | undefined;
    readonly refetchConnection: (
        totalCount: number,
        observerOrCallback?: ObserverOrCallback | null,
        refetchVariables?: Variables | null
    ) => Disposable | null | undefined;
    refetch: undefined; // ensures no RelayRefetchProp is used with a pagination container
}

export interface _RefType<T> {
    ' $refType': T;
}
export interface _FragmentRefs<T> {
    ' $fragmentRefs': T;
}

export type FragmentOrRegularProp<T> = T extends _RefType<infer U>
    ? _FragmentRefs<U>
    : T extends ReadonlyArray<_RefType<infer U>>
    ? ReadonlyArray<_FragmentRefs<U>>
    : T;

export type MappedFragmentProps<T> = {
    [K in keyof T]: FragmentOrRegularProp<T[K]>;
};

export {
    DataID,
    DeclarativeMutationConfig,
    Disposable,
    Environment,
    GraphQLTaggedNode,
    MutationType,
    NormalizationSelector,
    OperationDescriptor,
    RangeOperation,
    ReaderSelector,
    RelayContext,
    Snapshot,
    Variables,
    MutationTypes,
    RangeOperations,
    applyOptimisticMutation,
    commitLocalUpdate,
    commitMutation,
    fetchQuery,
    graphql,
    requestSubscription,
} from 'relay-runtime';

export type DataFrom = 'NETWORK_ONLY' | 'STORE_THEN_NETWORK';
declare class ReactRelayQueryRenderer<TOperation extends OperationType> extends React.Component<{
    cacheConfig?: CacheConfig | null;
    dataFrom?: DataFrom;
    environment: Environment;
    query: GraphQLTaggedNode | null | undefined;
    render: (renderProps: {
        error: Error | null;
        props: TOperation['response'] | null;
        retry: (() => void) | null;
    }) => React.ReactNode;
    variables: TOperation['variables'];
}> {}
export { ReactRelayQueryRenderer as QueryRenderer };

export const ReactRelayContext: React.Context<RelayContext | null>;

interface GeneratedNodeMap {
    [key: string]: GraphQLTaggedNode;
}

export type ContainerProps<Props> = MappedFragmentProps<Pick<Props, Exclude<keyof Props, 'relay'>>>;

export type Container<Props> = React.ComponentType<ContainerProps<Props> & { componentRef?: (ref: any) => void }>;

export function createFragmentContainer<Props>(
    Component: React.ComponentType<Props & { relay?: RelayProp }>,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap
): Container<Props>;

interface ConnectionData {
    edges?: ReadonlyArray<any> | null;
    pageInfo?: Partial<PageInfo> | null;
}

type FragmentVariablesGetter = (prevVars: Variables, totalCount: number) => Variables;

export interface ConnectionConfig<Props = object> {
    direction?: 'backward' | 'forward';
    getConnectionFromProps?: (props: Props) => ConnectionData | null | undefined;
    getFragmentVariables?: FragmentVariablesGetter;
    getVariables: (
        props: Props,
        paginationInfo: { count: number; cursor?: string | null },
        fragmentVariables: Variables
    ) => Variables;
    query: GraphQLTaggedNode;
}

export function createPaginationContainer<Props>(
    Component: React.ComponentType<
        Props & {
            relay: RelayPaginationProp;
        }
    >,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    connectionConfig: ConnectionConfig<Props>
): Container<Props>;

export function createRefetchContainer<Props>(
    Component: React.ComponentType<
        Props & {
            relay: RelayRefetchProp;
        }
    >,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    taggedNode: GraphQLTaggedNode
): Container<Props>;
