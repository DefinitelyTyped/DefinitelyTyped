import { ReaderFragment } from '../util/ReaderNode';
import { Variables, Disposable, DataID, CacheConfig } from '../util/RelayRuntimeTypes';
import { ConcreteRequest, RequestParameters } from '../util/RelayConcreteNode';
import { RequestIdentifier } from '../util/getRequestIdentifier';
import {
    NormalizationSelectableNode,
    NormalizationSplitOperation,
    NormalizationScalarField,
    NormalizationLinkedField,
} from '../util/NormalizationNode';
import { Environment, RecordState, GraphQLResponse, StoreUpdater, SelectorStoreUpdater } from '../..';
import {
    ConnectionReference,
    ConnectionResolver,
    ConnectionSnapshot,
    ConnectionInternalEvent,
    ConnectionID,
} from './RelayConnection';
import { LoggerTransactionConfig } from '../network/RelayNetworkLoggerTransaction';
import { PayloadData, Network, UploadableMap, PayloadError } from '../network/RelayNetworkTypes';
import { RelayObservable } from '../network/RelayObservable';
import { RelayOperationTracker } from './RelayOperationTracker';

export type FragmentReference = unknown;
export type OperationTracker = RelayOperationTracker;

/*
 * An individual cached graph object.
 */
export interface Record {
    [key: string]: any;
}

/**
 * A collection of records keyed by id.
 */
export interface RecordMap {
    // theoretically, this should be `[dataID: DataID]`, but `DataID` is a string.
    [dataID: string]: Record;
}

export interface FragmentMap {
    [key: string]: ReaderFragment;
}

/**
 * The results of a selector given a store/RecordSource.
 */
export interface SelectorData {
    [key: string]: any;
}

export interface SingularReaderSelector {
    kind: string;
    dataID: string;
    node: ReaderFragment;
    owner: RequestDescriptor;
    variables: Variables;
}

export type ReaderSelector = SingularReaderSelector | PluralReaderSelector;

export interface PluralReaderSelector {
    kind: string;
    selectors: ReadonlyArray<SingularReaderSelector>;
}

export interface RequestDescriptor {
    identifier: RequestIdentifier;
    node: ConcreteRequest;
    variables: Variables;
}

/**
 * A selector defines the starting point for a traversal into the graph for the
 * purposes of targeting a subgraph.
 */
export interface NormalizationSelector {
    dataID: string;
    node: NormalizationSelectableNode;
    variables: Variables;
}

/**
 * A representation of a selector and its results at a particular point in time.
 */
export interface TypedSnapshot<TData> {
    data: TData;
    isMissingData: boolean;
    seenRecords: RecordMap;
    selector: SingularReaderSelector;
}
export type Snapshot = TypedSnapshot<SelectorData>;

/**
 * An operation selector describes a specific instance of a GraphQL operation
 * with variables applied.
 *
 * - `root`: a selector intended for processing server results or retaining
 *   response data in the store.
 * - `fragment`: a selector intended for use in reading or subscribing to
 *   the results of the the operation.
 */
export interface OperationDescriptor {
    fragment: SingularReaderSelector;
    request: RequestDescriptor;
    root: NormalizationSelector;
}

/**
 * Arbitrary data e.g. received by a container as props.
 */
export interface Props {
    [key: string]: any;
}

/**
 * The type of the `relay` property set on React context by the React/Relay
 * integration layer (e.g. QueryRenderer, FragmentContainer, etc).
 */
export interface RelayContext {
    environment: Environment;
    variables: Variables;
}

/**
 * The results of reading the results of a FragmentMap given some input
 * `Props`.
 */
export interface FragmentSpecResults {
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
export interface FragmentSpecResolver {
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
    setVariables(variables: Variables, node: ConcreteRequest): void;

    /**
     * Subscribe to resolver updates.
     * Overrides existing callback (if one has been specified).
     */
    setCallback(callback: () => void): void;
}

/**
 * A read-only interface for accessing cached graph data.
 */
export interface RecordSource {
    get(dataID: string): Record;
    getRecordIDs(): string[];
    getStatus(dataID: string): RecordState;
    has(dataID: string): boolean;
    size(): number;
    toJSON(): { [key: string]: Record };
}

/**
 * A read/write interface for accessing and updating graph data.
 */
export interface MutableRecordSource extends RecordSource {
    clear(): void;
    delete(dataID: string): void;
    remove(dataID: string): void;
    set(dataID: string, record: Record): void;
}

/**
 * An interface for keeping multiple views of data consistent across an
 * application.
 */
export interface Store {
    /**
     * Get a read-only view of the store's internal RecordSource.
     */
    getSource(): RecordSource;

    /**
     * Determine if the selector can be resolved with data in the store (i.e. no
     * fields are missing).
     */
    check(selector: NormalizationSelector): boolean;

    /**
     * Read the results of a selector from in-memory records in the store.
     * Optionally takes an owner, corresponding to the operation that
     * owns this selector (fragment).
     */
    lookup(selector: SingularReaderSelector): Snapshot;

    /**
     * Notify subscribers (see `subscribe`) of any data that was published
     * (`publish()`) since the last time `notify` was called.
     *
     * Also this method should return an array of the affected fragment owners
     */
    notify(): ReadonlyArray<RequestDescriptor>;

    /**
     * Publish new information (e.g. from the network) to the store, updating its
     * internal record source. Subscribers are not immediately notified - this
     * occurs when `notify()` is called.
     */
    publish(source: RecordSource): void;

    /**
     * Ensure that all the records necessary to fulfill the given selector are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     */
    retain(selector: NormalizationSelector): Disposable;

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when `notify()` is called *and* records have been published that affect the
     * selector results relative to the last `notify()`.
     */
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;

    /**
     * The method should disable garbage collection until
     * the returned reference is disposed.
     */
    holdGC(): Disposable;

    lookupConnection_UNSTABLE<TEdge, TState>(
        connectionReference: ConnectionReference<TEdge>,
        resolver: ConnectionResolver<TEdge, TState>,
    ): ConnectionSnapshot<TEdge, TState>;

    subscribeConnection_UNSTABLE<TEdge, TState>(
        snapshot: ConnectionSnapshot<TEdge, TState>,
        resolver: ConnectionResolver<TEdge, TState>,
        callback: (state: TState) => void,
    ): Disposable;

    /**
     * Publish connection events, updating the store's list of events. As with
     * publish(), subscribers are only notified after notify() is called.
     */
    publishConnectionEvents_UNSTABLE(events: ConnectionInternalEvent[], final: boolean): void;

    /**
     * Get a read-only view of the store's internal connection events for a given
     * connection.
     */
    getConnectionEvents_UNSTABLE(connectionID: ConnectionID): ReadonlyArray<ConnectionInternalEvent>;

    /**
     * Record a backup/snapshot of the current state of the store, including
     * records and derived data such as fragment and connection subscriptions.
     * This state can be restored with restore().
     */
    snapshot(): void;

    /**
     * Reset the state of the store to the point that snapshot() was last called.
     */
    restore(): void;
}

/**
 * A type that accepts a callback and schedules it to run at some future time.
 * By convention, implementations should not execute the callback immediately.
 */
export type Scheduler = (callback: () => void) => void;

/**
 * An interface for imperatively getting/setting properties of a `Record`. This interface
 * is designed to allow the appearance of direct Record manipulation while
 * allowing different implementations that may e.g. create a changeset of
 * the modifications.
 */
export interface RecordProxy {
    copyFieldsFrom(source: RecordProxy): void;
    getDataID(): DataID;
    getLinkedRecord(name: string, args?: Variables): RecordProxy;
    getLinkedRecords(name: string, args?: Variables): RecordProxy[];
    getOrCreateLinkedRecord(name: string, typeName: string, args?: Variables): RecordProxy;
    getType(): string;
    getValue(name: string, args?: Variables): any;
    setLinkedRecord(record: RecordProxy, name: string, args?: Variables): RecordProxy;
    setLinkedRecords(records: RecordProxy[], name: string, args?: Variables): RecordProxy;
    setValue(value: any, name: string, args?: Variables): RecordProxy;
}

export interface ReadOnlyRecordProxy {
    getDataID(): DataID;
    getLinkedRecord(name: string, args?: Variables): RecordProxy;
    getLinkedRecords(name: string, args?: Variables): RecordProxy[];
    getType(): string;
    getValue(name: string, args?: Variables): any;
}

/**
 * An interface for imperatively getting/setting properties of a `RecordSource`. This interface
 * is designed to allow the appearance of direct RecordSource manipulation while
 * allowing different implementations that may e.g. create a changeset of
 * the modifications.
 */
export interface RecordSourceProxy {
    create(dataID: DataID, typeName: string): RecordProxy;
    delete(dataID: DataID): void;
    get(dataID: DataID): RecordProxy;
    getRoot(): RecordProxy;
}

export interface ReadOnlyRecordSourceProxy {
    get(dataID: DataID): ReadOnlyRecordProxy;
    getRoot(): ReadOnlyRecordProxy;
}

/**
 * Extends the RecordSourceProxy interface with methods for accessing the root
 * fields of a Selector.
 */
export interface RecordSourceSelectorProxy extends RecordSourceProxy {
    getRootField(fieldName: string): RecordProxy;
    getPluralRootField(fieldName: string): RecordProxy[];
    insertConnectionEdge_UNSTABLE(connectionID: ConnectionID, args: Variables, edge: RecordProxy): void;
}

export interface Logger {
    log(message: string, ...values: any[]): void;
    flushLogs(): void;
}

export interface LoggerProvider {
    getLogger(config: LoggerTransactionConfig): Logger;
}

export type LogEvent =
    | {
          name: string;
          transactionID: number;
          info: any;
      }
    | {
          name: string;
          transactionID: number;
          params: RequestParameters;
          variables: Variables;
      }
    | {
          name: string;
          transactionID: number;
          response: GraphQLResponse;
      }
    | {
          name: string;
          transactionID: number;
          error: Error;
      }
    | {
          name: string;
          transactionID: number;
      }
    | {
          name: string;
          transactionID: number;
      };
export type LogFunction = (logEvent: LogEvent) => void;
export type LogRequestInfoFunction = (arg: any) => void;

/**
 * The public API of Relay core. Represents an encapsulated environment with its
 * own in-memory cache.
 */
export interface Environment {
    /**
     * Determine if the selector can be resolved with data in the store (i.e. no
     * fields are missing).
     *
     * Note that this operation effectively "executes" the selector against the
     * cache and therefore takes time proportional to the size/complexity of the
     * selector.
     */
    check(selector: NormalizationSelector): boolean;

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when data has been committed to the store that would cause the results of
     * the snapshot's selector to change.
     */
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;

    /**
     * Ensure that all the records necessary to fulfill the given selector are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     */
    retain(selector: NormalizationSelector): Disposable;

    /**
     * Apply an optimistic update to the environment. The mutation can be reverted
     * by calling `dispose()` on the returned value.
     */
    applyUpdate(optimisticUpdate: OptimisticUpdateFunction): Disposable;

    /**
     * Apply an optimistic mutation response and/or updater. The mutation can be
     * reverted by calling `dispose()` on the returned value.
     */
    applyMutation(optimisticConfig: OptimisticResponseConfig): Disposable;

    /**
     * Commit an updater to the environment. This mutation cannot be reverted and
     * should therefore not be used for optimistic updates. This is mainly
     * intended for updating fields from client schema extensions.
     */
    commitUpdate(updater: StoreUpdater): void;

    /**
     * Commit a payload to the environment using the given operation selector.
     */
    commitPayload(operationDescriptor: OperationDescriptor, payload: PayloadData): void;

    /**
     * Get the environment's internal Network.
     */
    getNetwork(): Network;

    /**
     * Get the environment's internal Store.
     */
    getStore(): Store;

    /**
     * Get an instance of a logger
     */
    getLogger(config: LoggerTransactionConfig): Logger;

    /**
     * Returns the environment specific OperationTracker.
     */
    getOperationTracker(): RelayOperationTracker;

    /**
     * Read the results of a selector from in-memory records in the store.
     * Optionally takes an owner, corresponding to the operation that
     * owns this selector (fragment).
     */
    lookup(selector: SingularReaderSelector): Snapshot;

    /**
     * Send a query to the server with Observer semantics: one or more
     * responses may be returned (via `next`) over time followed by either
     * the request completing (`completed`) or an error (`error`).
     *
     * Networks/servers that support subscriptions may choose to hold the
     * subscription open indefinitely such that `complete` is not called.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to: environment.execute({...}).subscribe({...}).
     */
    execute(config: {
        operation: OperationDescriptor;
        cacheConfig?: CacheConfig;
        updater?: SelectorStoreUpdater;
    }): RelayObservable<GraphQLResponse>;

    /**
     * Returns an Observable of GraphQLResponse resulting from executing the
     * provided Mutation operation, the result of which is then normalized and
     * committed to the publish queue along with an optional optimistic response
     * or updater.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to:
     * environment.executeMutation({...}).subscribe({...}).
     */
    executeMutation({
        operation,
        optimisticUpdater,
        optimisticResponse,
        updater,
        uploadables,
    }: {
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater;
        optimisticResponse?: object;
        updater?: SelectorStoreUpdater;
        uploadables?: UploadableMap;
    }): RelayObservable<GraphQLResponse>;

    /**
     * Returns an Observable of GraphQLResponse resulting from executing the
     * provided Query or Subscription operation responses, the result of which is
     * then normalized and comitted to the publish queue.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to:
     * environment.executeWithSource({...}).subscribe({...}).
     */
    executeWithSource({
        operation,
        source,
    }: {
        operation: OperationDescriptor;
        source: RelayObservable<GraphQLResponse>;
    }): RelayObservable<GraphQLResponse>;
}

/**
 * The results of reading data for a fragment. This is similar to a `Selector`,
 * but references the (fragment) node by name rather than by value.
 */
export interface FragmentPointer {
    __id: DataID;
    __fragments: { [fragmentName: string]: Variables };
    __fragmentOwner: RequestDescriptor;
}

/**
 * The partial shape of an object with a '...Fragment @module(name: "...")'
 * selection
 */
export interface ModuleImportPointer {
    __fragmentPropName: string;
    __module_component: any;
    fragmentRefs: any;
}

/**
 * A callback for resolving a Selector from a source.
 */
export type AsyncLoadCallback = (loadingState: LoadingState) => void;
export interface LoadingState {
    status: 'aborted' | 'complete' | 'error' | 'missing';
    error?: Error;
}

/**
 * A map of records affected by an update operation.
 */
export interface UpdatedRecords {
    [dataID: string]: boolean;
}

/**
 * A function that updates a store (via a proxy) given the results of a "handle"
 * field payload.
 */
export class Handler {
    update: (store: RecordSourceProxy, fieldPayload: HandleFieldPayload) => void;
}

/**
 * A payload that is used to initialize or update a "handle" field with
 * information from the server.
 */
export interface HandleFieldPayload {
    // The arguments that were fetched.
    args: Variables;
    // The __id of the record containing the source/handle field.
    dataID: DataID;
    // The (storage) key at which the original server data was written.
    fieldKey: string;
    // The name of the handle.
    handle: string;
    // The (storage) key at which the handle's data should be written by the
    // handler.
    handleKey: string;
}

/**
 * A payload that represents data necessary to process the results of an object
 * with a `@module` fragment spread:
 * - data: The GraphQL response value for the @match field.
 * - dataID: The ID of the store object linked to by the @match field.
 * - operationReference: A reference to a generated module containing the
 *   SplitOperation with which to normalize the field's `data`.
 * - variables: Query variables.
 * - typeName: the type that matched.
 *
 * The dataID, variables, and fragmentName can be used to create a Selector
 * which can in turn be used to normalize and publish the data. The dataID and
 * typeName can also be used to construct a root record for normalization.
 */
export interface ModuleImportPayload {
    data: PayloadData;
    dataID: DataID;
    operationReference: any;
    path: ReadonlyArray<string>;
    typeName: string;
    variables: Variables;
}

/**
 * Data emitted after processing a Defer or Stream node during normalization
 * that describes how to process the corresponding response chunk when it
 * arrives.
 */
export interface DeferPlaceholder {
    kind: 'defer';
    data: PayloadData;
    label: string;
    path: ReadonlyArray<string>;
    selector: NormalizationSelector;
    typeName: string;
}
export interface StreamPlaceholder {
    kind: 'stream';
    label: string;
    path: ReadonlyArray<string>;
    parentID: DataID;
    node: NormalizationSelectableNode;
    variables: Variables;
}
export type IncrementalDataPlaceholder = DeferPlaceholder | StreamPlaceholder;

/**
 * A user-supplied object to load a generated operation (SplitOperation) AST
 * by a module reference. The exact format of a module reference is left to
 * the application, but it must be a plain JavaScript value (string, number,
 * or object/array of same).
 */
export interface OperationLoader {
    /**
     * Synchronously load an operation, returning either the node or null if it
     * cannot be resolved synchronously.
     */
    get(reference: any): NormalizationSplitOperation;

    /**
     * Asynchronously load an operation.
     */
    load(reference: any): Promise<NormalizationSplitOperation>;
}

/**
 * A function that receives a proxy over the store and may trigger side-effects
 * (indirectly) by calling `set*` methods on the store or its record proxies.
 */
export type StoreUpdater = (store: RecordSourceProxy) => void;

/**
 * Similar to StoreUpdater, but accepts a proxy tied to a specific selector in
 * order to easily access the root fields of a query/mutation as well as a
 * second argument of the response object of the mutation.
 */
export type SelectorStoreUpdater<T = {}> = (store: RecordSourceSelectorProxy, data: T) => void;

/**
 * A set of configs that can be used to apply an optimistic update into the
 * store.
 */
export type OptimisticUpdate = OptimisticUpdateFunction | OptimisticUpdateRelayPayload;

export interface OptimisticUpdateFunction {
    storeUpdater: StoreUpdater;
}

export interface OptimisticUpdateRelayPayload {
    operation: OperationDescriptor;
    payload: RelayResponsePayload;
    updater: SelectorStoreUpdater;
}

export interface OptimisticResponseConfig {
    operation: OperationDescriptor;
    response: PayloadData;
    updater: SelectorStoreUpdater;
}

/**
 * A set of handlers that can be used to provide substitute data for missing
 * fields when reading a selector from a source.
 */
export type MissingFieldHandler =
    | {
          kind: string;
          handle: (
              field: NormalizationScalarField,
              record: Record,
              args: Variables,
              store: ReadOnlyRecordSourceProxy,
          ) => any;
      }
    | {
          kind: string;
          handle: (
              field: NormalizationLinkedField,
              record: Record,
              args: Variables,
              store: ReadOnlyRecordSourceProxy,
          ) => DataID;
      }
    | {
          kind: string;
          handle: (
              field: NormalizationLinkedField,
              record: Record,
              args: Variables,
              store: ReadOnlyRecordSourceProxy,
          ) => DataID[];
      };

/**
 * The results of normalizing a query.
 */
export interface RelayResponsePayload {
    connectionEvents: ConnectionInternalEvent[];
    errors: PayloadError[];
    fieldPayloads: HandleFieldPayload[];
    incrementalPlaceholders: IncrementalDataPlaceholder[];
    moduleImportPayloads: ModuleImportPayload[];
    source: MutableRecordSource;
}

/**
 * Public interface for Publish Queue
 */
export interface PublishQueue {
    /**
     * Schedule applying an optimistic updates on the next `run()`.
     */
    applyUpdate(updater: OptimisticUpdate): void;

    /**
     * Schedule reverting an optimistic updates on the next `run()`.
     */
    revertUpdate(updater: OptimisticUpdate): void;

    /**
     * Schedule a revert of all optimistic updates on the next `run()`.
     */
    revertAll(): void;

    /**
     * Schedule applying a payload to the store on the next `run()`.
     */
    commitPayload(operation: OperationDescriptor, payload: RelayResponsePayload, updater?: SelectorStoreUpdater): void;

    /**
     * Schedule an updater to mutate the store on the next `run()` typically to
     * update client schema fields.
     */
    commitUpdate(updater: StoreUpdater): void;

    /**
     * Schedule a publish to the store from the provided source on the next
     * `run()`. As an example, to update the store with substituted fields that
     * are missing in the store.
     */
    commitSource(source: RecordSource): void;

    /**
     * Execute all queued up operations from the other public methods.
     */
    run(): ReadonlyArray<RequestDescriptor>;
}
