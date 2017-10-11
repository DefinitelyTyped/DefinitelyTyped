// Type definitions for relay-runtime 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// note: namespace is used so react-relay can access and inter-op
export namespace RelayCommonTypes {
    /**
     * SOURCE:
     * Relay 1.3.0
     * https://github.com/facebook/relay/blob/b85a1d69bb72be4ace67179f55c2a54a8d761c8b/packages/react-relay/classic/environment/RelayCombinedEnvironmentTypes.js
     */
    // ~~~~~~~~~~~~~~~~~~~~~
    // Maybe Fix
    // ~~~~~~~~~~~~~~~~~~~~~
    type RelayConcreteNode = any;
    type RelayMutationTransaction = any;
    type RelayMutationRequest = any;
    type RelayQueryRequest = any;
    type ConcreteFragment = any;
    type ConcreteBatch = any;
    type ConcreteFragmentDefinition = object;
    type ConcreteOperationDefinition = object;

    /**
     * FIXME: RelayContainer used to be typed with ReactClass<any>, but
     * ReactClass is broken and allows for access to any property. For example
     * ReactClass<any>.getFragment('foo') is valid even though ReactClass has no
     * such getFragment() type definition. When ReactClass is fixed this causes a
     * lot of errors in Relay code since methods like getFragment() are used often
     * but have no definition in Relay's types. Suppressing for now.
     */
    type RelayContainer = any;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayQL
    // ~~~~~~~~~~~~~~~~~~~~~
    type RelayQL = (strings: string[], ...substitutions: any[]) => RelayConcreteNode;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayModernGraphQLTag
    // ~~~~~~~~~~~~~~~~~~~~~
    interface GeneratedNodeMap {
        [key: string]: GraphQLTaggedNode;
    }
    type GraphQLTaggedNode =
        | (() => ConcreteFragment | ConcreteBatch)
        | {
              modern(): ConcreteFragment | ConcreteBatch;
              classic(relayQL: RelayQL): ConcreteFragmentDefinition | ConcreteOperationDefinition;
          };
    // ~~~~~~~~~~~~~~~~~~~~~
    // General Usage
    // ~~~~~~~~~~~~~~~~~~~~~
    type DataID = string;
    interface Variables {
        [name: string]: any;
    }
    type Uploadable = File | Blob;
    interface UploadableMap {
        [key: string]: Uploadable;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayNetworkTypes
    // Version: Relay 1.3.0
    // File: https://github.com/facebook/relay/blob/master/packages/relay-runtime/network/RelayNetworkTypes.js
    // ~~~~~~~~~~~~~~~~~~~~~

    interface LegacyObserver<T> {
        onCompleted?(): void;
        onError?(error: Error): void;
        onNext?(data: T): void;
    }
    interface PayloadError {
        message: string;
        locations?: Array<{
            line: number;
            column: number;
        }>;
    }
    /**
     * A function that executes a GraphQL operation with request/response semantics.
     *
     * May return an Observable or Promise of a raw server response.
     */
    function FetchFunction(
        operation: ConcreteBatch,
        variables: Variables,
        cacheConfig: CacheConfig,
        uploadables?: UploadableMap
    ): RelayRuntimeTypes.ObservableFromValue<QueryPayload>;

    /**
     * A function that executes a GraphQL subscription operation, returning one or
     * more raw server responses over time.
     *
     * May return an Observable, otherwise must call the callbacks found in the
     * fourth parameter.
     */
    type SubscribeFunction = (
        operation: ConcreteBatch,
        variables: Variables,
        cacheConfig: CacheConfig,
        observer: LegacyObserver<QueryPayload>
    ) => RelayRuntimeTypes.RelayObservable<QueryPayload> | Disposable;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayStoreTypes
    // Version: Relay 1.3.0
    // File: https://github.com/facebook/relay/blob/master/packages/relay-runtime/store/RelayStoreTypes.js
    // ~~~~~~~~~~~~~~~~~~~~~
    /**
     * A function that receives a proxy over the store and may trigger side-effects
     * (indirectly) by calling `set*` methods on the store or its record proxies.
     */
    type StoreUpdater = (store: RecordSourceProxy) => void;

    /**
     * Similar to StoreUpdater, but accepts a proxy tied to a specific selector in
     * order to easily access the root fields of a query/mutation as well as a
     * second argument of the response object of the mutation.
     */
    type SelectorStoreUpdater = (
        store: RecordSourceSelectorProxy,
        // Actually RelayCombinedEnvironmentTypes#SelectorData, but mixed is
        // inconvenient to access deeply in product code.
        data: any // FLOW FIXME
    ) => void;

    /**
     * Extends the RecordSourceProxy interface with methods for accessing the root
     * fields of a Selector.
     */
    interface RecordSourceSelectorProxy {
        create(dataID: DataID, typeName: string): RecordProxy;
        delete(dataID: DataID): void;
        get(dataID: DataID): RecordProxy | void;
        getRoot(): RecordProxy;
        getRootField(fieldName: string): RecordProxy | void;
        getPluralRootField(fieldName: string): RecordProxy[] | void;
    }

    interface RecordProxy {
        copyFieldsFrom(source: RecordProxy): void;
        getDataID(): DataID;
        getLinkedRecord(name: string, args?: Variables): RecordProxy | void;
        getLinkedRecords(name: string, args?: Variables): Array<RecordProxy | null> | void;
        getOrCreateLinkedRecord(name: string, typeName: string, args?: Variables): RecordProxy;
        getType(): string;
        getValue(name: string, args?: Variables): any;
        setLinkedRecord(record: RecordProxy, name: string, args?: Variables): RecordProxy;
        setLinkedRecords(
            records: Array<RecordProxy | null> | undefined | null,
            name: string,
            args?: Variables
        ): RecordProxy;
        setValue(value: any, name: string, args?: Variables): RecordProxy;
    }

    interface RecordSourceProxy {
        create(dataID: DataID, typeName: string): RecordProxy;
        delete(dataID: DataID): void;
        get(dataID: DataID): Array<RecordProxy | null> | void;
        getRoot(): RecordProxy;
    }

    interface HandleFieldPayload {
        // The arguments that were fetched.
        args: Variables;
        // The __id of the record containing the source/handle field.
        dataID: DataID;
        // The (storage) key at which the original server data was written.
        fieldKey: string;
        // The name of the handle
        handle: string;
        // The (storage) key at which the handle's data should be written by the
        // handler
        handleKey: string;
    }
    interface HandlerInterface {
        update(store: RecordSourceProxy, fieldPayload: HandleFieldPayload): void;
        [functionName: string]: (...args: any[]) => any;
    }
    const Handler: HandlerInterface;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayCombinedEnvironmentTypes
    // Version: Relay 1.3.0
    // File: https://github.com/facebook/relay/blob/b85a1d69bb72be4ace67179f55c2a54a8d761c8b/packages/react-relay/classic/environment/RelayCombinedEnvironmentTypes.js
    // ~~~~~~~~~~~~~~~~~~~~~
    /**
     * Settings for how a query response may be cached.
     *
     * - `force`: causes a query to be issued unconditionally, irrespective of the
     *   state of any configured response cache.
     * - `poll`: causes a query to live update by polling at the specified interval
     *   in milliseconds. (This value will be passed to setTimeout.)
     */
    interface CacheConfig {
        force?: boolean;
        poll?: number;
    }

    /**
     * Represents any resource that must be explicitly disposed of. The most common
     * use-case is as a return value for subscriptions, where calling `dispose()`
     * would cancel the subscription.
     */
    interface Disposable {
        dispose(): void;
    }

    /**
     * Arbitrary data e.g. received by a container as props.
     */
    interface Props {
        [key: string]: any;
    }

    /*
        * An individual cached graph object.
        */
    interface Record {
        [key: string]: any;
    }

    /**
     * A collection of records keyed by id.
     */
    interface RecordMap {
        [dataID: string]: Record | null | undefined;
    }

    /**
     * A selector defines the starting point for a traversal into the graph for the
     * purposes of targeting a subgraph.
     */
    interface CSelector<TNode> {
        dataID: DataID;
        node: TNode;
        variables: Variables;
    }

    /**
     * A representation of a selector and its results at a particular point in time.
     */
    type CSnapshot<TNode> = CSelector<TNode> & {
        data: SelectorData | null | undefined;
        seenRecords: RecordMap;
    };

    /**
     * The results of a selector given a store/RecordSource.
     */
    interface SelectorData {
        [key: string]: any;
    }

    /**
     * The results of reading the results of a FragmentMap given some input
     * `Props`.
     */
    interface FragmentSpecResults {
        [key: string]: any;
    }

    /**
     * A utility for resolving and subscribing to the results of a fragment spec
     * (key -> fragment mapping) given some "props" that determine the root ID
     * and variables to use when reading each fragment. When props are changed via
     * `setProps()`, the resolver will update its results and subscriptions
     * accordingly. Internally, the resolver:
     * - Converts the fragment map & props map into a map of `Selector`s.
     * - Removes any resolvers for any props that became null.
     * - Creates resolvers for any props that became non-null.
     * - Updates resolvers with the latest props.
     */
    interface FragmentSpecResolver {
        /**
         * Stop watching for changes to the results of the fragments.
         */
        dispose(): void;

        /**
         * Get the current results.
         */
        resolve(): FragmentSpecResults;

        /**
         * Update the resolver with new inputs. Call `resolve()` to get the updated
         * results.
         */
        setProps(props: Props): void;

        /**
         * Override the variables used to read the results of the fragments. Call
         * `resolve()` to get the updated results.
         */
        setVariables(variables: Variables): void;
    }

    interface CFragmentMap<TFragment> {
        [key: string]: TFragment;
    }

    /**
     * An operation selector describes a specific instance of a GraphQL operation
     * with variables applied.
     *
     * - `root`: a selector intended for processing server results or retaining
     *   response data in the store.
     * - `fragment`: a selector intended for use in reading or subscribing to
     *   the results of the the operation.
     */
    interface COperationSelector<TNode, TOperation> {
        fragment: CSelector<TNode>;
        node: TOperation;
        root: CSelector<TNode>;
        variables: Variables;
    }

    /**
     * The public API of Relay core. Represents an encapsulated environment with its
     * own in-memory cache.
     */
    interface CEnvironment<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation, TPayload> {
        /**
         * Read the results of a selector from in-memory records in the store.
         */
        lookup(selector: CSelector<TNode>): CSnapshot<TNode>;

        /**
         * Subscribe to changes to the results of a selector. The callback is called
         * when data has been committed to the store that would cause the results of
         * the snapshot's selector to change.
         */
        subscribe(snapshot: CSnapshot<TNode>, callback: (snapshot: CSnapshot<TNode>) => void): Disposable;

        /**
         * Ensure that all the records necessary to fulfill the given selector are
         * retained in-memory. The records will not be eligible for garbage collection
         * until the returned reference is disposed.
         *
         * Note: This is a no-op in the classic core.
         */
        retain(selector: CSelector<TNode>): Disposable;

        /**
         * Send a query to the server with request/response semantics: the query will
         * either complete successfully (calling `onNext` and `onCompleted`) or fail
         * (calling `onError`).
         *
         * Note: Most applications should use `streamQuery` in order to
         * optionally receive updated information over time, should that feature be
         * supported by the network/server. A good rule of thumb is to use this method
         * if you would otherwise immediately dispose the `streamQuery()`
         * after receving the first `onNext` result.
         */
        sendQuery(config: {
            cacheConfig?: CacheConfig;
            onCompleted?(): void;
            onError?(error: Error): void;
            onNext?(payload: TPayload): void;
            operation: COperationSelector<TNode, TOperation>;
        }): Disposable;

        /**
         * Send a query to the server with request/subscription semantics: one or more
         * responses may be returned (via `onNext`) over time followed by either
         * the request completing (`onCompleted`) or an error (`onError`).
         *
         * Networks/servers that support subscriptions may choose to hold the
         * subscription open indefinitely such that `onCompleted` is not called.
         */
        streamQuery(config: {
            cacheConfig?: CacheConfig;
            onCompleted?(): void;
            onError?(error: Error): void;
            onNext?(payload: TPayload): void;
            operation: COperationSelector<TNode, TOperation>;
        }): Disposable;

        unstable_internal: CUnstableEnvironmentCore<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation>;
    }

    interface CUnstableEnvironmentCore<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation> {
        /**
         * Create an instance of a FragmentSpecResolver.
         *
         * TODO: The FragmentSpecResolver *can* be implemented via the other methods
         * defined here, so this could be moved out of core. It's convenient to have
         * separate implementations until the experimental core is in OSS.
         */
        createFragmentSpecResolver(
            context: CRelayContext<TEnvironment>,
            containerName: string,
            fragments: CFragmentMap<TFragment>,
            props: Props,
            callback: () => void
        ): FragmentSpecResolver;

        /**
         * Creates an instance of an OperationSelector given an operation definition
         * (see `getOperation`) and the variables to apply. The input variables are
         * filtered to exclude variables that do not matche defined arguments on the
         * operation, and default values are populated for null values.
         */
        createOperationSelector(operation: TOperation, variables: Variables): COperationSelector<TNode, TOperation>;

        /**
         * Given a graphql`...` tagged template, extract a fragment definition usable
         * by this version of Relay core. Throws if the value is not a fragment.
         */
        getFragment(node: TGraphQLTaggedNode): TFragment;

        /**
         * Given a graphql`...` tagged template, extract an operation definition
         * usable by this version of Relay core. Throws if the value is not an
         * operation.
         */
        getOperation(node: TGraphQLTaggedNode): TOperation;

        /**
         * Determine if two selectors are equal (represent the same selection). Note
         * that this function returns `false` when the two queries/fragments are
         * different objects, even if they select the same fields.
         */
        areEqualSelectors(a: CSelector<TNode>, b: CSelector<TNode>): boolean;

        /**
         * Given the result `item` from a parent that fetched `fragment`, creates a
         * selector that can be used to read the results of that fragment for that item.
         *
         * Example:
         *
         * Given two fragments as follows:
         *
         * ```
         * fragment Parent on User {
         *   id
         *   ...Child
         * }
         * fragment Child on User {
         *   name
         * }
         * ```
         *
         * And given some object `parent` that is the results of `Parent` for id "4",
         * the results of `Child` can be accessed by first getting a selector and then
         * using that selector to `lookup()` the results against the environment:
         *
         * ```
         * const childSelector = getSelector(queryVariables, Child, parent);
         * const childData = environment.lookup(childSelector).data;
         * ```
         */
        getSelector(operationVariables: Variables, fragment: TFragment, prop: any): CSelector<TNode> | void;

        /**
         * Given the result `items` from a parent that fetched `fragment`, creates a
         * selector that can be used to read the results of that fragment on those
         * items. This is similar to `getSelector` but for "plural" fragments that
         * expect an array of results and therefore return an array of selectors.
         */
        getSelectorList(
            operationVariables: Variables,
            fragment: TFragment,
            props: any[]
        ): Array<CSelector<TNode>> | void;

        /**
         * Given a mapping of keys -> results and a mapping of keys -> fragments,
         * extracts the selectors for those fragments from the results.
         *
         * The canonical use-case for this function are Relay Containers, which
         * use this function to convert (props, fragments) into selectors so that they
         * can read the results to pass to the inner component.
         */
        getSelectorsFromObject(
            operationVariables: Variables,
            fragments: CFragmentMap<TFragment>,
            props: Props
        ): { [key: string]: CSelector<TNode> | Array<CSelector<TNode>> | null | undefined };

        /**
         * Given a mapping of keys -> results and a mapping of keys -> fragments,
         * extracts a mapping of keys -> id(s) of the results.
         *
         * Similar to `getSelectorsFromObject()`, this function can be useful in
         * determining the "identity" of the props passed to a component.
         */
        getDataIDsFromObject(
            fragments: CFragmentMap<TFragment>,
            props: Props
        ): { [key: string]: DataID | DataID[] | null | undefined };

        /**
         * Given a mapping of keys -> results and a mapping of keys -> fragments,
         * extracts the merged variables that would be in scope for those
         * fragments/results.
         *
         * This can be useful in determing what varaibles were used to fetch the data
         * for a Relay container, for example.
         */
        getVariablesFromObject(
            operationVariables: Variables,
            fragments: CFragmentMap<TFragment>,
            props: Props
        ): Variables;
    }

    /**
     * The type of the `relay` property set on React context by the React/Relay
     * integration layer (e.g. QueryRenderer, FragmentContainer, etc).
     */
    interface CRelayContext<TEnvironment> {
        environment: TEnvironment;
        variables: Variables;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayTypes
    /**
     * Version: Relay 1.3.0
     * File:
     * https://github.com/facebook/relay/blob/fa9f48ea209ee2402d433b59a84d1cbc046574e2/packages/react-relay/classic/tools/RelayTypes.js
     */
    // ~~~~~~~~~~~~~~~~~~~~~
    interface RerunParam {
        param: string;
        import: string;
        max_runs: number;
    }
    interface FIELDS_CHANGE {
        type: "FIELDS_CHANGE";
        fieldIDs: { [fieldName: string]: DataID | DataID[] };
    }
    interface RANGE_ADD {
        type: "RANGE_ADD";
        parentName?: string;
        parentID?: string;
        connectionInfo?: Array<{
            key: string;
            filters?: Variables;
            rangeBehavior: string;
        }>;
        connectionName?: string;
        edgeName: string;
        rangeBehaviors?: RangeBehaviors;
    }
    interface NODE_DELETE {
        type: "NODE_DELETE";
        parentName?: string;
        parentID?: string;
        connectionName?: string;
        deletedIDFieldName: string;
    }
    interface RANGE_DELETE {
        type: "RANGE_DELETE";
        parentName?: string;
        parentID?: string;
        connectionKeys?: Array<{
            key: string;
            filters?: Variables;
        }>;
        connectionName?: string;
        deletedIDFieldName: string | string[];
        pathToConnection: string[];
    }
    interface REQUIRED_CHILDREN {
        type: "REQUIRED_CHILDREN";
        children: RelayConcreteNode[];
    }
    type RelayMutationConfig = FIELDS_CHANGE | RANGE_ADD | NODE_DELETE | RANGE_DELETE | REQUIRED_CHILDREN;

    interface RelayMutationTransactionCommitCallbacks {
        onFailure?: RelayMutationTransactionCommitFailureCallback;
        onSuccess?: RelayMutationTransactionCommitSuccessCallback;
    }
    type RelayMutationTransactionCommitFailureCallback = (
        transaction: RelayMutationTransaction,
        preventAutoRollback: () => void
    ) => void;
    type RelayMutationTransactionCommitSuccessCallback = (
        response: {
            [key: string]: any;
        }
    ) => void;
    interface NetworkLayer {
        sendMutation(request: RelayMutationRequest): Promise<any> | void;
        sendQueries(requests: RelayQueryRequest[]): Promise<any> | void;
        supports(...options: string[]): boolean;
    }
    interface QueryResult {
        error?: Error;
        ref_params?: { [name: string]: any };
        response: QueryPayload;
    }
    interface ReadyState {
        aborted: boolean;
        done: boolean;
        error: Error | null;
        events: ReadyStateEvent[];
        ready: boolean;
        stale: boolean;
    }
    type RelayContainerErrorEventType = "CACHE_RESTORE_FAILED" | "NETWORK_QUERY_ERROR";
    type RelayContainerLoadingEventType =
        | "ABORT"
        | "CACHE_RESTORED_REQUIRED"
        | "CACHE_RESTORE_START"
        | "NETWORK_QUERY_RECEIVED_ALL"
        | "NETWORK_QUERY_RECEIVED_REQUIRED"
        | "NETWORK_QUERY_START"
        | "STORE_FOUND_ALL"
        | "STORE_FOUND_REQUIRED";
    type ReadyStateChangeCallback = (readyState: ReadyState) => void;
    interface ReadyStateEvent {
        type: RelayContainerLoadingEventType | RelayContainerErrorEventType;
        error?: Error;
    }
    interface Abortable {
        abort(): void;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayInternalTypes
    /**
     * Version: Relay 1.3.0
     * File:
     * https://github.com/facebook/relay/blob/master/packages/react-relay/classic/tools/RelayInternalTypes.js
     */
    // ~~~~~~~~~~~~~~~~~~~~~
    interface QueryPayload {
        [key: string]: any;
    }
    interface RelayQuerySet {
        [queryName: string]: any;
    }
    type RangeBehaviorsFunction = (
        connectionArgs: {
            [argName: string]: any;
        }
    ) => "APPEND" | "IGNORE" | "PREPEND" | "REFETCH" | "REMOVE";
    interface RangeBehaviorsObject {
        [key: string]: "APPEND" | "IGNORE" | "PREPEND" | "REFETCH" | "REMOVE";
    }
    type RangeBehaviors = RangeBehaviorsFunction | RangeBehaviorsObject;
}

export namespace RelayRuntimeTypes {
    // ~~~~~~~~~~~~~~~~~~~~~
    // Maybe Fix
    // ~~~~~~~~~~~~~~~~~~~~~
    type RelayDebugger = any;
    type OptimisticUpdate = any;
    type OperationSelector = RelayCommonTypes.COperationSelector<any, any>;
    type Selector = RelayCommonTypes.CSelector<any>;
    type PayloadData = any;
    type Snapshot = RelayCommonTypes.CSnapshot<any>;
    type RelayResponsePayload = any;
    type MutableRecordSource = RecordSource;

    /**
     * A function that returns an Observable representing the response of executing
     * a GraphQL operation.
     */
    type ExecuteFunction = (
        operation: object,
        variables: RelayCommonTypes.Variables,
        cacheConfig: RelayCommonTypes.CacheConfig,
        uploadables?: RelayCommonTypes.UploadableMap
    ) => Promise<any>;
    interface RelayNetwork {
        execute: ExecuteFunction;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayDefaultHandlerProvider
    // ~~~~~~~~~~~~~~~~~~~~~
    function HandlerProvider(name: string): typeof RelayCommonTypes.Handler | void;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayModernEnvironment
    // ~~~~~~~~~~~~~~~~~~~~~
    interface EnvironmentConfig {
        configName?: string;
        handlerProvider?: typeof HandlerProvider;
        network: Network;
        store: Store;
    }
    class Environment {
        constructor(config: EnvironmentConfig);
        getStore(): Store;
        getDebugger(): RelayDebugger;
        applyUpdate(optimisticUpdate: OptimisticUpdate): RelayCommonTypes.Disposable;
        revertUpdate(update: OptimisticUpdate): void;
        replaceUpdate(update: OptimisticUpdate, newUpdate: OptimisticUpdate): void;
        applyMutation(config: {
            operation: OperationSelector;
            optimisticUpdater?: RelayCommonTypes.SelectorStoreUpdater;
            optimisticResponse?: object;
        }): RelayCommonTypes.Disposable;
        check(readSelector: Selector): boolean;
        commitPayload(operationSelector: OperationSelector, payload: PayloadData): void;
        commitUpdate(updater: RelayCommonTypes.StoreUpdater): void;
        lookup(readSelector: Selector): Snapshot;
        subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): RelayCommonTypes.Disposable;
        retain(selector: Selector): RelayCommonTypes.Disposable;
        execute(config: {
            operation: OperationSelector;
            cacheConfig?: RelayCommonTypes.CacheConfig;
            updater?: RelayCommonTypes.SelectorStoreUpdater;
        }): RelayObservable<RelayResponsePayload>;
        executeMutation(config: {
            operation: OperationSelector;
            optimisticUpdater?: RelayCommonTypes.SelectorStoreUpdater;
            optimisticResponse?: object;
            updater?: RelayCommonTypes.SelectorStoreUpdater;
            uploadables?: RelayCommonTypes.UploadableMap;
        }): RelayObservable<RelayResponsePayload>;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayInMemoryRecordSource
    // ~~~~~~~~~~~~~~~~~~~~~
    interface Record {
        [key: string]: any;
    }
    interface RecordMap {
        [dataID: string]: Record | null | undefined;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // Network
    // ~~~~~~~~~~~~~~~~~~~~~
    class Network {
        /**
         * Creates an implementation of the `Network` interface defined in
         * `RelayNetworkTypes` given `fetch` and `subscribe` functions.
         */
        static create(
            fetchFn: typeof RelayCommonTypes.FetchFunction,
            subscribeFn?: RelayCommonTypes.SubscribeFunction
        ): RelayNetwork;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // Network
    // ~~~~~~~~~~~~~~~~~~~~~
    class RecordSource {
        constructor(records?: RecordMap);
        clear(): void;
        delete(dataID: RelayCommonTypes.DataID): void;
        get(dataID: RelayCommonTypes.DataID): Record | void;
        getRecordIDs(): RelayCommonTypes.DataID[];
        getStatus(dataID: RelayCommonTypes.DataID): "EXISTENT" | "NONEXISTENT" | "UNKNOWN";
        has(dataID: RelayCommonTypes.DataID): boolean;
        load(dataID: RelayCommonTypes.DataID, callback: (error: Error | null, record: Record | null) => void): void;
        remove(dataID: RelayCommonTypes.DataID): void;
        set(dataID: RelayCommonTypes.DataID, record: Record): void;
        size(): number;
        toJSON(): RecordMap;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // ModernStore
    // ~~~~~~~~~~~~~~~~~~~~~
    class Store {
        constructor(source: RecordSource);
        getSource(): MutableRecordSource;
        check(selector: Selector): boolean;
        retain(selector: Selector): RelayCommonTypes.Disposable;
        lookup(selector: Selector): Snapshot;
        notify(): void;
        publish(source: RecordSource): void;
        subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): RelayCommonTypes.Disposable;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayRecordSourceInspector
    // ~~~~~~~~~~~~~~~~~~~~~
    /**
     * An internal class to provide a console-friendly string representation of a
     * Record.
     */
    class RecordSummary {
        id: RelayCommonTypes.DataID;
        type: string | null | undefined;
        static createFromRecord(id: RelayCommonTypes.DataID, record: any): RecordSummary;
        constructor(id: RelayCommonTypes.DataID, type: string | null | undefined);
        toString(): string;
    }
    /**
     * Internal class for inspecting a single Record.
     */
    class RecordInspector {
        constructor(sourceInspector: RelayRecordSourceInspector, record: Record);
        /**
         * Get the cache id of the given record. For types that implement the `Node`
         * interface (or that have an `id`) this will be `id`, for other types it will be
         * a synthesized identifier based on the field path from the nearest ancestor
         * record that does have an `id`.
         */
        getDataID(): RelayCommonTypes.DataID;

        /**
         * Returns a list of the fields that have been fetched on the current record.
         */
        getFields(): string[];

        /**
         * Returns the type of the record.
         */
        getType(): string;

        /**
         * Returns a copy of the internal representation of the record.
         */
        inspect(): any;

        /**
         * Returns the value of a scalar field. May throw if the given field is
         * present but not actually scalar.
         */
        getValue(name: string, args?: RelayCommonTypes.Variables): any;

        /**
         * Returns an inspector for the given scalar "linked" field (a field whose
         * value is another Record instead of a scalar). May throw if the field is
         * present but not a scalar linked record.
         */
        getLinkedRecord(name: string, args?: RelayCommonTypes.Variables): RecordInspector | void;

        /**
         * Returns an array of inspectors for the given plural "linked" field (a field
         * whose value is an array of Records instead of a scalar). May throw if the
         * field is  present but not a plural linked record.
         */
        getLinkedRecords(name: string, args?: RelayCommonTypes.Variables): RecordInspector[] | void;
    }

    class RelayRecordSourceInspector {
        constructor(source: RecordSource);
        static getForEnvironment(environment: Environment): RelayRecordSourceInspector;
        /**
         * Returns an inspector for the record with the given id, or null/undefined if
         * that record is deleted/unfetched.
         */
        get(dataID: RelayCommonTypes.DataID): RecordInspector | void;
        /**
         * Returns a list of "<id>: <type>" for each record in the store that has an
         * `id`.
         */
        getNodes(): RecordSummary[];
        /**
         * Returns a list of "<id>: <type>" for all records in the store including
         * those that do not have an `id`.
         */
        getRecords(): RecordSummary[];

        /**
         * Returns an inspector for the synthesized "root" object, allowing access to
         * e.g. the `viewer` object or the results of other fields on the "Query"
         * type.
         */
        getRoot(): RecordInspector;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayObservable
    // ~~~~~~~~~~~~~~~~~~~~~
    interface Subscription {
        unsubscribe(): void;
        readonly closed: boolean;
    }
    interface Observer<T> {
        start?(subscription: Subscription): any;
        next?(nextThing: T): any;
        error?(error: Error): any;
        complete?(): any;
        unsubscribe?(subscription: Subscription): any;
    }
    type Source<T> = <T>() => any;
    interface Subscribable<T> {
        subscribe(observer: Observer<T>): Subscription;
    }
    type ObservableFromValue<T> = RelayObservable<T> | Promise<T> | T;
    class RelayObservable<T> implements Subscribable<T> {
        _source: Source<T>;

        constructor(source: Source<T>);

        /**
         * When an unhandled error is detected, it is reported to the host environment
         * (the ESObservable spec refers to this method as "HostReportErrors()").
         *
         * The default implementation in development builds re-throws errors in a
         * separate frame, and from production builds does nothing (swallowing
         * uncaught errors).
         *
         * Called during application initialization, this method allows
         * application-specific handling of uncaught errors. Allowing, for example,
         * integration with error logging or developer tools.
         */
        static onUnhandledError(callback: (error: Error) => any): void;

        /**
         * Accepts various kinds of data sources, and always returns a RelayObservable
         * useful for accepting the result of a user-provided FetchFunction.
         */
        static from<V>(obj: ObservableFromValue<V>): RelayObservable<V>;

        /**
         * Creates a RelayObservable, given a function which expects a legacy
         * Relay Observer as the last argument and which returns a Disposable.
         *
         * To support migration to Observable, the function may ignore the
         * legacy Relay observer and directly return an Observable instead.
         */
        static fromLegacy<V>(
            callback: (
                legacyObserver: RelayCommonTypes.LegacyObserver<V>
            ) => RelayCommonTypes.Disposable | RelayObservable<V>
        ): RelayObservable<V>;

        /**
         * Returns a new Observable which returns the same values as this one, but
         * modified so that the provided Observer is called to perform a side-effects
         * for all events emitted by the source.
         *
         * Any errors that are thrown in the side-effect Observer are unhandled, and
         * do not affect the source Observable or its Observer.
         *
         * This is useful for when debugging your Observables or performing other
         * side-effects such as logging or performance monitoring.
         */
        do(observer: Observer<T>): RelayObservable<T>;

        /**
         * Returns a new Observable which returns the same values as this one, but
         * modified so that the finally callback is performed after completion,
         * whether normal or due to error or unsubscription.
         *
         * This is useful for cleanup such as resource finalization.
         */
        finally(fn: () => any): RelayObservable<T>;

        /**
         * Returns a new Observable which is identical to this one, unless this
         * Observable completes before yielding any values, in which case the new
         * Observable will yield the values from the alternate Observable.
         *
         * If this Observable does yield values, the alternate is never subscribed to.
         *
         * This is useful for scenarios where values may come from multiple sources
         * which should be tried in order, i.e. from a cache before a network.
         */
        ifEmpty<U>(alternate: RelayObservable<U>): RelayObservable<T | U>;

        /**
         * Observable's primary API: returns an unsubscribable Subscription to the
         * source of this Observable.
         */
        subscribe(observer: Observer<T>): Subscription;

        /**
         * Supports subscription of a legacy Relay Observer, returning a Disposable.
         */
        subscribeLegacy(legacyObserver: RelayCommonTypes.LegacyObserver<T>): RelayCommonTypes.Disposable;

        /**
         * Returns a new Observerable where each value has been transformed by
         * the mapping function.
         */
        map<U>(fn: (thing: T) => U): RelayObservable<U>;

        /**
         * Returns a new Observable where each value is replaced with a new Observable
         * by the mapping function, the results of which returned as a single
         * concattenated Observable.
         */
        concatMap<U>(fn: (thing: T) => ObservableFromValue<U>): RelayObservable<U>;

        /**
         * Returns a new Observable which first mirrors this Observable, then when it
         * completes, waits for `pollInterval` milliseconds before re-subscribing to
         * this Observable again, looping in this manner until unsubscribed.
         *
         * The returned Observable never completes.
         */
        poll(pollInterval: number): RelayObservable<T>;

        /**
         * Returns a Promise which resolves when this Observable yields a first value
         * or when it completes with no value.
         */
        toPromise(): Promise<T | null | undefined>;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // commitLocalUpdate
    // ~~~~~~~~~~~~~~~~~~~~~
    // exposed through RelayModern, not Runtime directly
    type commitLocalUpdate = (environment: Environment, updater: RelayCommonTypes.StoreUpdater) => void;

    // ~~~~~~~~~~~~~~~~~~~~~
    // commitRelayModernMutation
    // ~~~~~~~~~~~~~~~~~~~~~
    // exposed through RelayModern, not Runtime directly
    interface MutationConfig<T> {
        configs?: RelayCommonTypes.RelayMutationConfig[];
        mutation: RelayCommonTypes.GraphQLTaggedNode;
        variables: RelayCommonTypes.Variables;
        uploadables?: RelayCommonTypes.UploadableMap;
        onCompleted?(response: T, errors: RelayCommonTypes.PayloadError[] | null | undefined): void;
        onError?(error?: Error): void;
        optimisticUpdater?: RelayCommonTypes.SelectorStoreUpdater;
        optimisticResponse?: object;
        updater?: RelayCommonTypes.SelectorStoreUpdater;
    }
    function commitRelayModernMutation(
        environment: Environment,
        config: MutationConfig<any>
    ): RelayCommonTypes.Disposable;

    // ~~~~~~~~~~~~~~~~~~~~~
    // applyRelayModernOptimisticMutation
    // ~~~~~~~~~~~~~~~~~~~~~
    // exposed through RelayModern, not Runtime directly
    interface OptimisticMutationConfig {
        configs?: RelayCommonTypes.RelayMutationConfig[];
        mutation: RelayCommonTypes.GraphQLTaggedNode;
        variables: RelayCommonTypes.Variables;
        optimisticUpdater?: RelayCommonTypes.SelectorStoreUpdater;
        optimisticResponse?: object;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // fetchRelayModernQuery
    // ~~~~~~~~~~~~~~~~~~~~~
    // exposed through RelayModern, not Runtime directly
    /**
     * A helper function to fetch the results of a query. Note that results for
     * fragment spreads are masked: fields must be explicitly listed in the query in
     * order to be accessible in the result object.
     *
     * NOTE: This module is primarily intended for integrating with classic APIs.
     * Most product code should use a Renderer or Container.
     *
     * TODO(t16875667): The return type should be `Promise<?SelectorData>`, but
     * that's not really helpful as `SelectorData` is essentially just `mixed`. We
     * can probably leverage generated flow types here to return the real expected
     * shape.
     */
    function fetchRelayModernQuery(
        environment: any, // FIXME - $FlowFixMe in facebook source code
        taggedNode: RelayCommonTypes.GraphQLTaggedNode,
        variables: RelayCommonTypes.Variables,
        cacheConfig?: RelayCommonTypes.CacheConfig
    ): Promise<any>; // FIXME - $FlowFixMe in facebook source code

    // ~~~~~~~~~~~~~~~~~~~~~
    // requestRelaySubscription
    // ~~~~~~~~~~~~~~~~~~~~~
    // exposed through RelayModern, not Runtime directly
    interface GraphQLSubscriptionConfig {
        configs?: RelayCommonTypes.RelayMutationConfig[];
        subscription: RelayCommonTypes.GraphQLTaggedNode;
        variables: RelayCommonTypes.Variables;
        onCompleted?(): void;
        onError?(error: Error): void;
        onNext?(response: object | null | undefined): void;
        updater?(store: RelayCommonTypes.RecordSourceSelectorProxy): void;
    }
    function requestRelaySubscription(
        environment: Environment,
        config: GraphQLSubscriptionConfig
    ): RelayCommonTypes.Disposable;
}

// ~~~~~~~~~~~~~~~~~~~~~
// Package Exports
// ~~~~~~~~~~~~~~~~~~~~~
export import Environment = RelayRuntimeTypes.Environment;
export import Network = RelayRuntimeTypes.Network;
export import RecordSource = RelayRuntimeTypes.RecordSource;
export import Store = RelayRuntimeTypes.Store;
export import Observable = RelayRuntimeTypes.RelayObservable;
// note RecordSourceInspector is only available in dev environment
export import RecordSourceInspector = RelayRuntimeTypes.RelayRecordSourceInspector;
export import ConnectionHandler = RelayCommonTypes.Handler;
export import ViewerHandler = RelayCommonTypes.Handler;
