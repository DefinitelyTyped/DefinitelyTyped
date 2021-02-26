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

// These types are exported, but have not been added to the Typescript definitions:
// export {
//     RelayProps,
//     RelayFragmentContainer,
//     RelayPaginationContainer,
//     RelayRefetchContainer,
// } from './ReactRelayTypes';

export {
    FragmentRef,
    RelayPaginationProp,
    RelayProp,
    RelayRefetchProp,
} from './ReactRelayTypes';

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
    > { }
export { ReactRelayQueryRenderer as QueryRenderer };

declare class ReactRelayLocalQueryRenderer<TOperation extends OperationType> extends React.Component<
    QueryRendererProps<TOperation>
    > { }
export { ReactRelayLocalQueryRenderer as LocalQueryRenderer };

export { MutationTypes } from 'relay-runtime';
export { RangeOperations } from 'relay-runtime';

export const ReactRelayContext: React.Context<RelayContext | null>;

export { applyOptimisticMutation } from 'relay-runtime';
export { commitLocalUpdate } from 'relay-runtime';
export { commitMutation } from 'relay-runtime';

export type ContainerProps<Props> = MappedFragmentProps<Pick<Props, Exclude<keyof Props, 'relay'>>>;
export type Container<Props> = React.ComponentType<ContainerProps<Props> & { componentRef?: (ref: any) => void }>;
export function createFragmentContainer<Props>(
    Component: React.ComponentType<Props & { relay?: RelayProp }>,
    fragmentSpec: Record<string, GraphQLTaggedNode>,
): Container<Props>;

export { fetchQuery_DEPRECATED } from 'relay-runtime';

export { graphql } from 'relay-runtime';
export { readInlineData } from 'relay-runtime';
export { requestSubscription } from 'relay-runtime';

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

interface ConnectionData {
    edges?: ReadonlyArray<any> | null;
    pageInfo?: Partial<PageInfo> | null;
}
