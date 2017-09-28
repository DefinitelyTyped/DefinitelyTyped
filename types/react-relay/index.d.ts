// Type definitions for react-relay 0.9.2
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "react-relay" {
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
