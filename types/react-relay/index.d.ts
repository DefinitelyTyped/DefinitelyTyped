// Type definitions for react-relay 7.0
// Project: https://github.com/facebook/relay, https://facebook.github.io/relay
// Definitions by: Eloy Durán <https://github.com/alloy>
//                 Marais Rossouw <https://github.com/maraisr>
//                 Edvin Erikson <https://github.com/edvinerikson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from 'react';
import {
    Environment,
    IEnvironment,
    Variables,
    Disposable,
    Observer,
    CacheConfig,
    GraphQLTaggedNode,
    RelayContext,
    PageInfo,
    OperationType,
    _FragmentRefs,
    _RefType,
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
        options?: RefetchOptions,
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
        options?: RefetchOptions | null,
    ) => Disposable | null | undefined;
    readonly refetchConnection: (
        totalCount: number,
        observerOrCallback?: ObserverOrCallback | null,
        refetchVariables?: Variables | null,
    ) => Disposable | null | undefined;
    refetch: undefined; // ensures no RelayRefetchProp is used with a pagination container
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
    FragmentRef,
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
    readInlineData,
    requestSubscription,
    _FragmentRefs,
    _RefType,
} from 'relay-runtime';

export type FetchPolicy = 'store-and-network' | 'network-only';

interface QueryRendererProps<TOperation extends OperationType> {
    environment: IEnvironment;
    query: GraphQLTaggedNode | null | undefined;
    render: (renderProps: {
        error: Error | null;
        props: TOperation['response'] | null;
        retry: (() => void) | null;
    }) => React.ReactNode;
    variables: TOperation['variables'];
}
declare class ReactRelayQueryRenderer<TOperation extends OperationType> extends React.Component<
    {
        cacheConfig?: CacheConfig | null;
        fetchPolicy?: FetchPolicy;
    } & QueryRendererProps<TOperation>
> {}
export { ReactRelayQueryRenderer as QueryRenderer };

declare class ReactRelayLocalQueryRenderer<TOperation extends OperationType> extends React.Component<
    QueryRendererProps<TOperation>
> {}
export { ReactRelayLocalQueryRenderer as LocalQueryRenderer };

export const ReactRelayContext: React.Context<RelayContext | null>;

export type ContainerProps<Props> = MappedFragmentProps<Pick<Props, Exclude<keyof Props, 'relay'>>>;

export type Container<Props> = React.ComponentType<ContainerProps<Props> & { componentRef?: (ref: any) => void }>;

export function createFragmentContainer<Props>(
    Component: React.ComponentType<Props & { relay?: RelayProp }>,
    fragmentSpec: Record<string, GraphQLTaggedNode>,
): Container<Props>;

interface ConnectionData {
    edges?: ReadonlyArray<any> | null;
    pageInfo?: Partial<PageInfo> | null;
}

export interface ConnectionConfig<Props = object> {
    direction?: 'backward' | 'forward';
    getConnectionFromProps?: (props: Props) => ConnectionData | null | undefined;
    getFragmentVariables?: (prevVars: Variables, totalCount: number) => Variables;
    getVariables: (
        props: Props,
        paginationInfo: { count: number; cursor?: string | null },
        fragmentVariables: Variables,
    ) => Variables;
    query: GraphQLTaggedNode;
}

export function createPaginationContainer<Props>(
    Component: React.ComponentType<
        Props & {
            relay: RelayPaginationProp;
        }
    >,
    fragmentSpec: Record<string, GraphQLTaggedNode>,
    connectionConfig: ConnectionConfig<Props>,
): Container<Props>;

export function createRefetchContainer<Props>(
    Component: React.ComponentType<
        Props & {
            relay: RelayRefetchProp;
        }
    >,
    fragmentSpec: Record<string, GraphQLTaggedNode>,
    refetchQuery: GraphQLTaggedNode,
): Container<Props>;
