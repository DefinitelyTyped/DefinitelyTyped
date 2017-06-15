// Type definitions for react-relay 0.9.2
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// import * as Relay from "react-relay"

declare module "react-relay/modern" {
    import * as React from "react";

    export type GraphQLTaggedNode = (() => ConcreteFragment | ConcreteBatch);

    function graphql(strings: TemplateStringsArray): GraphQLTaggedNode
    function createFragmentContainer<T>(Component: React.ComponentClass<T> | React.StatelessComponent<T>, fragmentSpec: GraphQLTaggedNode): React.ComponentClass<T>

    export type GeneratedNodeMap = {[key: string]: GraphQLTaggedNode};

    // function createRefetchContainer<T>(Component: React.ComponentClass<T> | React.StatelessComponent<T>, fragmentSpec: GraphQLTaggedNode): React.ComponentClass<T>

    // function createContainerWithFragments<T>(
    //     Component: TBase,
    //     fragments: FragmentMap,
    //     taggedNode: GraphQLTaggedNode,
    // ): TBase

    // export type FragmentMap = CFragmentMap<TFragment>;
    export type CFragmentMap<TFragment> = {[key: string]: TFragment};

    // export type Environment = any // import from RelayStoreTypes
    // export type RelayMutationConfig = any // import from RelayTypes
    // export type UploadableMap = any // import from RelayNetworkTypes
    // export type PayloadError = any // import from RelayNetworkTypes
    // export type SelectorStoreUpdater = any // import from RelayStoreTypes

    // export type MutationConfig<T> = {
    //     configs?: Array<RelayMutationConfig>,
    //     mutation: GraphQLTaggedNode,
    //     variables: Variables,
    //     uploadables?: UploadableMap,
    //     onCompleted?: (response: T, errors: Array<PayloadError>) => void,
    //     onError?: (error: Error) => void,
    //     optimisticUpdater?: SelectorStoreUpdater,
    //     optimisticResponse?: () => Object,
    //     updater?: SelectorStoreUpdater,
    // }; // commitRelayModernMutation file

    // function commitRelayModernMutation<T>(
    //     environment: Environment,
    //     config: MutationConfig<T>,
    // ): Disposable

    export type ConcreteFragment = {
        argumentDefinitions: Array<ConcreteArgumentDefinition>,
        kind: 'Fragment',
        metadata: {[key: string]: any},
        name: string,
        selections: Array<ConcreteSelection>,
        type: string,
    };

    export type ConcreteCondition = {
        kind: 'Condition',
        passingValue: boolean,
        condition: string,
        selections: Array<ConcreteSelection>,
    };

    export type ConcreteArgument = ConcreteLiteral | ConcreteVariable;

    export type ConcreteLiteral = {
        kind: 'Literal',
        name: string,
        type: string | null,
        value: any,
    };

    export type ConcreteVariable = {
        kind: 'Variable',
        name: string,
        type: string | null,
        variableName: string,
    };

    export type ConcreteArgumentDefinition =
    | ConcreteLocalArgument
    | ConcreteRootArgument;

    export type ConcreteRootArgument = {
        kind: 'RootArgument',
        name: string,
        type: string | null,
    };

    export type ConcreteFragmentSpread = {
        args: Array<ConcreteArgument>,
        kind: 'FragmentSpread',
        name: string,
    };

    export type ConcreteField = ConcreteScalarField | ConcreteLinkedField;

    export type ConcreteScalarField = {
        alias: string | null,
        args: Array<ConcreteArgument> | null,
        kind: 'ScalarField',
        name: string,
        storageKey: string | null,
    };

    export type ConcreteLinkedField = {
        alias: string | null,
        args: Array<ConcreteArgument> | null,
        concreteType: string | null,
        kind: 'LinkedField',
        name: string,
        plural: boolean,
        selections: Array<ConcreteSelection>,
        storageKey: string | null,
    };

    export type ConcreteHandle = ConcreteScalarHandle | ConcreteLinkedHandle;

    export type ConcreteScalarHandle = {
        alias: string,
        args: Array<ConcreteArgument>,
        kind: 'ScalarHandle',
        name: string,
        handle: string,
        key: string,
        filters: Array<string>,
    };

    export type ConcreteLinkedHandle = {
        alias: string,
        args: Array<ConcreteArgument>,
        kind: 'LinkedHandle',
        name: string,
        handle: string,
        key: string,
        filters: Array<string>,
    };

    export type ConcreteInlineFragment = {
        kind: 'InlineFragment',
        selections: Array<ConcreteSelection>,
        type: string,
    };

    export type ConcreteSelection =
        | ConcreteCondition
        | ConcreteField
        | ConcreteFragmentSpread
        | ConcreteHandle
        | ConcreteInlineFragment;

    export type ConcreteLocalArgument = {
        defaultValue: any,
        kind: 'LocalArgument',
        name: string,
        type: string,
    };

    export type ConcreteRoot = {
        argumentDefinitions: Array<ConcreteLocalArgument>,
        kind: 'Root',
        name: string,
        operation: 'mutation' | 'query' | 'subscription',
        selections: Array<ConcreteSelection>,
    };

    export type ConcreteBatch = {
        kind: 'Batch',
        fragment: ConcreteFragment,
        id: string,
        metadata: {[key: string]: any},
        name: string,
        query: ConcreteRoot,
        text: string,
    };

    export type RefetchOptions = {
        force?: boolean,
    };

    // export type Variables = any // import from RelayTypes (ReactRelayTypes file)
    // export type Disposable = any // import from RelayCombinedEnvironmentTypes (ReactRelayTypes file)

    interface RelayProp {
        readonly route: { name: string; }; // incomplete, also has params and queries
        readonly variables: any;
        readonly pendingVariables?: any | null;
        // refetch: (
        //     refetchVariables: Variables | ((fragmentVariables: Variables) => Variables), 
        //     renderVaiables: Variables |null,
        //     callback: (error: Error | null) => void,
        //     options?: RefetchOptions,
        // ) => Disposable,
        // loadMore: (
        //     pageSize: number,
        //     callback: (error: Error | null) => void,
        //     options?: RefetchOptions,
        // ) => Disposable | null,
        // refetchConnection: (
        //     totalCount: number,
        //     callback: (error: Error | null) => void,
        // ) => Disposable | null,
        // setVariables(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        // forceFetch(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        // hasOptimisticUpdate(record: any): boolean;
        // getPendingTransactions(record: any): RelayMutationTransaction[];
        // commitUpdate: (mutation: Mutation<any,any>, callbacks?: StoreUpdateCallbacks<any>) => any;
    }
}

declare module "react-relay/classic" {
    import * as React from "react";

    type ClientMutationID = string;

    /** Fragments are a hash of functions */
    interface Fragments {
        [query: string]: ((variables?: RelayVariables) => string)
    }

    interface CreateContainerOpts {
        initialVariables?: any
        fragments: Fragments
        prepareVariables?(prevVariables: RelayVariables): RelayVariables
    }

    interface RelayVariables {
        [name: string]: any
    }

    /** add static getFragment method to the component constructor */
    interface RelayContainerClass<T> extends React.ComponentClass<T> {
        getFragment: ((q: string, v?: RelayVariables) => string)
    }

    interface RelayQueryRequestResolve {
        response: any
    }

    type RelayMutationStatus =
      'UNCOMMITTED' | // Transaction hasn't yet been sent to the server. Transaction can be committed or rolled back.
      'COMMIT_QUEUED' | // Transaction was committed but another transaction with the same collision key is pending, so the transaction has been queued to send to the server.
      'COLLISION_COMMIT_FAILED' | //Transaction was queued for commit but another transaction with the same collision key failed. All transactions in the collision queue, including this one, have been failed. Transaction can be recommitted or rolled back.
      'COMMITTING' | // Transaction is waiting for the server to respond.
      'COMMIT_FAILED';

    class RelayMutationTransaction {
      applyOptimistic(): RelayMutationTransaction;
      commit(): RelayMutationTransaction | null;
      recommit(): void;
      rollback(): void;
      getError(): Error;
      getStatus(): RelayMutationStatus;
      getHash(): string;
      getID(): ClientMutationID;
    }

    interface RelayMutationRequest {
        getQueryString(): string
        getVariables(): RelayVariables
        resolve(result: RelayQueryRequestResolve): any
        reject(errors: any): any
    }

    interface RelayQueryRequest {
        resolve(result: RelayQueryRequestResolve): any
        reject(errors: any): any

        getQueryString(): string
        getVariables(): RelayVariables
        getID(): string
        getDebugName(): string
    }

    interface RelayNetworkLayer {
        supports(...options: string[]): boolean
    }

    class DefaultNetworkLayer implements RelayNetworkLayer {
        constructor(host: string, options?: any)
        supports(...options: string[]): boolean
    }

    function createContainer<T>(component: React.ComponentClass<T> | React.StatelessComponent<T>, params?: CreateContainerOpts): RelayContainerClass<T>
    function injectNetworkLayer(networkLayer: RelayNetworkLayer): any
    function isContainer(component: React.ComponentClass<any>): boolean
    function QL(...args: any[]): string

    class Route {
        constructor(params?: RelayVariables)
    }

    /**
     * Relay Mutation class, where T are the props it takes and S is the returned payload from Relay.Store.update.
     * S is typically dynamic as it depends on the data the app is currently using, but it's possible to always
     * return some data in the payload using REQUIRED_CHILDREN which is where specifying S is the most useful.
     */
    class Mutation<T,S> {
        props: T

        constructor(props: T)
        static getFragment(q: string): string
    }

    interface Transaction {
        getError(): Error
        Status(): number
    }

    interface StoreUpdateCallbacks<T> {
        onFailure?(transaction: Transaction): any
        onSuccess?(response: T): any
    }

    interface Store {
        commitUpdate(mutation: Mutation<any,any>, callbacks?: StoreUpdateCallbacks<any>): any
    }

    var Store: Store

    class RootContainer extends React.Component<RootContainerProps,any> {}

    interface RootContainerProps extends React.Props<RootContainer>{
        Component: RelayContainerClass<any>
        route: Route
        renderLoading?(): JSX.Element
        renderFetched?(data: any): JSX.Element
        renderFailure?(error: Error, retry: Function): JSX.Element
    }

    type ReadyStateEvent =
        'ABORT' |
        'CACHE_RESTORED_REQUIRED' |
        'CACHE_RESTORE_FAILED' |
        'CACHE_RESTORE_START' |
        'NETWORK_QUERY_ERROR' |
        'NETWORK_QUERY_RECEIVED_ALL' |
        'NETWORK_QUERY_RECEIVED_REQUIRED' |
        'NETWORK_QUERY_START' |
        'STORE_FOUND_ALL' |
        'STORE_FOUND_REQUIRED';

    interface OnReadyStateChange {
        (readyState: {
              ready: boolean,
              done: boolean,
              stale: boolean,
              error?: Error,
              events: Array<ReadyStateEvent>,
              aborted: boolean
        }): void
    }

    interface RelayProp {
        readonly route: { name: string; }; // incomplete, also has params and queries
        readonly variables: any;
        readonly pendingVariables?: any | null;
        setVariables(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        forceFetch(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        hasOptimisticUpdate(record: any): boolean;
        getPendingTransactions(record: any): RelayMutationTransaction[];
        commitUpdate: (mutation: Mutation<any,any>, callbacks?: StoreUpdateCallbacks<any>) => any;
    }
}
