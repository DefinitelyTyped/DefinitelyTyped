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
} from 'relay-runtime';

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
    fetchQuery as fetchQuery_DEPRECATED,
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
