import * as React from 'react';

import {
    IEnvironment,
    Variables,
    CacheConfig,
    GraphQLTaggedNode,
    RelayContext,
    PageInfo,
    OperationType,
    _FragmentRefs,
    _RefType,
    FetchPolicy,
} from 'relay-runtime';

export { FragmentRef, RelayPaginationProp, RelayProp, RelayRefetchProp } from './ReactRelayTypes';

import { RelayProp, MappedFragmentProps, RelayRefetchProp, RelayPaginationProp } from './ReactRelayTypes';

export {
    DataID,
    DeclarativeMutationConfig,
    Disposable,
    // RelayRuntime has two environment exports: one interface, one concrete.
    IEnvironment as Environment,
    GraphQLTaggedNode,
    MutationType,
    NormalizationSelector,
    OperationDescriptor,
    RangeOperation,
    ReaderSelector,
    RelayContext,
    Snapshot,
    Variables,
    FetchPolicy,
} from 'relay-runtime';

/**
 * Legacy react-relay exports.
 * Should prefer using interface defined in ./hooks.js
 */
export { ConnectionHandler } from 'relay-runtime';
export interface QueryRendererProps<TOperation extends OperationType> {
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
        cacheConfig?: CacheConfig | null | undefined;
        fetchPolicy?: FetchPolicy | undefined;
    } & QueryRendererProps<TOperation>
> {}
export { ReactRelayQueryRenderer as QueryRenderer };

declare class ReactRelayLocalQueryRenderer<TOperation extends OperationType> extends React.Component<
    QueryRendererProps<TOperation>
> {}
export { ReactRelayLocalQueryRenderer as LocalQueryRenderer };

export { MutationTypes } from 'relay-runtime';
export { RangeOperations } from 'relay-runtime';

export const ReactRelayContext: React.Context<RelayContext | null>;

export { applyOptimisticMutation } from 'relay-runtime';
export { commitLocalUpdate } from 'relay-runtime';
export { commitMutation } from 'relay-runtime';

export type ContainerProps<Props> = MappedFragmentProps<Pick<Props, Exclude<keyof Props, 'relay'>>>;
export type RelayProps<Props> = ContainerProps<Props>; // TODO: validate this
export type Container<Props> = React.ComponentType<
    ContainerProps<Props> & { componentRef?: ((ref: any) => void) | undefined }
>;

// TODO: validate the bellow three
export type RelayFragmentContainer<TComponent extends React.ElementType> = React.ComponentType<
    ContainerProps<React.ComponentPropsWithoutRef<TComponent>>
>;

export type RelayPaginationContainer<TComponent extends React.ElementType> = React.ComponentType<
    ContainerProps<React.ComponentPropsWithoutRef<TComponent>>
>;

export type RelayRefetchContainer<TComponent extends React.ElementType> = React.ComponentType<
    ContainerProps<React.ComponentPropsWithoutRef<TComponent>>
>;

type PropsWithoutRelay<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
    JSX.LibraryManagedAttributes<C, Omit<React.ComponentProps<C>, 'relay'>>;

export function createFragmentContainer<
    C extends React.ComponentType<React.ComponentProps<C> & { relay?: RelayProp | undefined }>,
>(Component: C, fragmentSpec: Record<string, GraphQLTaggedNode>): Container<PropsWithoutRelay<C>>;

export { fetchQuery_DEPRECATED } from 'relay-runtime';

export { graphql } from 'relay-runtime';
export { readInlineData } from 'relay-runtime';
export { requestSubscription } from 'relay-runtime';

export function createPaginationContainer<
    C extends React.ComponentType<React.ComponentProps<C> & { relay: RelayPaginationProp }>,
>(
    Component: C,
    fragmentSpec: Record<string, GraphQLTaggedNode>,
    connectionConfig: ConnectionConfig<PropsWithoutRelay<C>>,
): Container<PropsWithoutRelay<C>>;

export function createRefetchContainer<
    C extends React.ComponentType<React.ComponentProps<C> & { relay: RelayRefetchProp }>,
>(
    Component: C,
    fragmentSpec: Record<string, GraphQLTaggedNode>,
    refetchQuery: GraphQLTaggedNode,
): Container<PropsWithoutRelay<C>>;

export interface ConnectionConfig<Props = object> {
    direction?: 'backward' | 'forward' | undefined;
    getConnectionFromProps?: ((props: Props) => ConnectionData | null | undefined) | undefined;
    getFragmentVariables?: ((prevVars: Variables, totalCount: number) => Variables) | undefined;
    getVariables: (
        props: Props,
        paginationInfo: { count: number; cursor?: string | null | undefined },
        fragmentVariables: Variables,
    ) => Variables;
    query: GraphQLTaggedNode;
}

interface ConnectionData {
    edges?: ReadonlyArray<any> | null | undefined;
    pageInfo?: Partial<PageInfo> | null | undefined;
}
