// Type definitions for relay-runtime 6.0
// Project: https://github.com/facebook/relay, https://facebook.github.io/relay
// Definitions by: Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
//                 Cameron Knight <https://github.com/ckknight>
//                 Renan Machado <https://github.com/renanmav>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export { ConcreteRequest, GeneratedNode, RequestParameters } from './lib/util/RelayConcreteNode';
export { ConnectionMetadata } from './lib/handlers/connection/RelayConnectionHandler';
export { EdgeRecord, PageInfo } from './lib/handlers/connection/RelayConnectionInterface';
export {
    ReaderArgument,
    ReaderArgumentDefinition,
    ReaderField,
    ReaderFragment,
    ReaderInlineDataFragment,
    ReaderLinkedField,
    ReaderPaginationMetadata,
    ReaderRefetchableFragment,
    ReaderRefetchMetadata,
    ReaderScalarField,
    ReaderSelection,
} from './lib/util/ReaderNode';

import RelayConcreteNode, { RequestParameters, ConcreteRequest } from './lib/util/RelayConcreteNode';
import * as ConnectionHandler from './lib/handlers/connection/RelayConnectionHandler';
import ConnectionInterface from './lib/handlers/connection/RelayConnectionInterface';

export { ConnectionHandler, ConnectionInterface, RelayConcreteNode };

import {
    ReaderFragment,
    ReaderSelectableNode,
    ReaderPaginationFragment,
    ReaderRefetchableFragment,
    ReaderField,
} from './lib/util/ReaderNode';
import {
    NormalizationSelectableNode,
    NormalizationScalarField,
    NormalizationLinkedField,
    NormalizationSplitOperation,
    NormalizationField,
    NormalizationHandle,
} from './lib/util/NormalizationNode';

// ./lib/mutations/RelayDeclarativeMutationConfig
import { DeclarativeMutationConfig } from './lib/mutations/RelayDeclarativeMutationConfig';
export * from './lib/mutations/RelayDeclarativeMutationConfig';

// ./lib/mutations/applyRelayModernOptimisticMutation
import { OptimisticMutationConfig } from './lib/mutations/applyOptimisticMutation';
export * from './lib/mutations/applyOptimisticMutation';

// ./lib/mutations/commitMutation
import { MutationConfig } from './lib/mutations/commitMutation';
export * from './lib/mutations/commitMutation';

// ./lib/network/RelayNetworkLoggerTransaction
export { RelayNetworkLoggerTransaction } from './lib/network/RelayNetworkLoggerTransaction';

// ./lib/network/RelayNetworkTypes
import {
    GraphQLResponse,
    Network,
    FetchFunction,
    PayloadData,
    PayloadError,
    UploadableMap,
    LegacyObserver,
    SubscribeFunction,
} from './lib/network/RelayNetworkTypes';
export {
    ExecuteFunction,
    SubscribeFunction,
    GraphQLResponse,
    FetchFunction,
    Network as INetwork,
    Uploadable,
    UploadableMap,
} from './lib/network/RelayNetworkTypes';

// ./lib/network/RelayObservable
import { RelayObservable } from './lib/network/RelayObservable';
export { RelayObservable as Observable, ObservableFromValue } from './lib/network/RelayObservable';

// ./lib/network/createRelayNetworkLogger
export { createRelayNetworkLogger } from './lib/network/createRelayNetworkLogger';

// ./query/RelayModernGraphQLTag
export type GraphQLTaggedNode =
    | ReaderFragment
    | ConcreteRequest
    | (() => ReaderFragment | ConcreteRequest)
    | {
          modern: () => ReaderFragment | ConcreteRequest;
      };

// ./lib/store/RelayRecordState
import { RecordState } from './lib/store/RelayRecordState';
export * from './lib/store/RelayRecordState';

// ./lib/store/RelayStoreTypes
import {
    Environment,
    HandleFieldPayload,
    Store,
    OperationDescriptor,
    SingularReaderSelector,
    Snapshot,
    Logger,
    RecordSource,
    RequestDescriptor,
    FragmentMap,
    Scheduler,
    MutableRecordSource,
    Record,
    RecordMap,
    MissingFieldHandler,
    NormalizationSelector,
    RelayContext,
    Props,
    FragmentSpecResolver,
    OperationLoader,
    OptimisticUpdate,
    RecordSourceProxy,
    RecordSourceSelectorProxy,
    ReadOnlyRecordProxy,
} from './lib/store/RelayStoreTypes';
export * from './lib/store/RelayStoreTypes';
export { Environment as IEnvironment } from './lib/store/RelayStoreTypes';

export type FragmentReference = never & { __tag: 'FragmentReference' };

export interface FragmentPointer {
    __id: DataID;
    __fragments: { [fragmentName: string]: Variables };
    __fragmentOwner: OperationDescriptor | null;
}

export interface MatchPointer {
    __id: DataID;
    __fragments: { [fragmentName: string]: Variables };
    __fragmentPropName: string;
    __module: unknown;
}

export type SelectorStoreUpdater<TData = unknown> = (store: RecordSourceSelectorProxy, data: TData) => void;

export type StoreUpdater = (store: RecordSourceProxy) => void;

interface ReadonlyRecordSourceProxy {
    get(dataID: DataID): ReadOnlyRecordProxy | null | undefined;
    getRoot(): ReadOnlyRecordProxy;
}

// ./subscription/requestRelaySubscription
export interface GraphQLSubscriptionConfig<TSubscriptionPayload> {
    configs?: ReadonlyArray<DeclarativeMutationConfig>;
    subscription: GraphQLTaggedNode;
    variables: Variables;
    onCompleted?: () => void;
    onError?: (error: Error) => void;
    onNext?: (response: TSubscriptionPayload | null | undefined) => void;
    updater?: SelectorStoreUpdater;
}

// ./lib/util/RelayRuntimeTypes
import { Disposable, DataID, Variables, OperationType, CacheConfig } from './lib/util/RelayRuntimeTypes';
export * from './lib/util/RelayRuntimeTypes';

// Core API

// ./RelayModernEnvironment
interface EnvironmentConfig {
    readonly configName?: string;
    readonly handlerProvider?: HandlerProvider;
    readonly operationLoader?: OperationLoader;
    readonly network: Network;
    readonly store: Store;
    readonly missingFieldHandlers?: ReadonlyArray<MissingFieldHandler>;
}
declare class RelayModernEnvironment implements Environment {
    readonly configName: string | null | undefined;
    constructor(config: EnvironmentConfig);
    getStore(): Store;
    getNetwork(): Network;
    applyUpdate(optimisticUpdate: OptimisticUpdate): Disposable;
    revertUpdate(update: OptimisticUpdate): void;
    replaceUpdate(update: OptimisticUpdate, newUpdate: OptimisticUpdate): void;
    applyMutation(data: {
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater | null;
        optimisticResponse?: object;
    }): Disposable;
    check(readSelector: NormalizationSelector): boolean;
    commitPayload(operationDescriptor: OperationDescriptor, payload: PayloadData): void;
    commitUpdate(updater: StoreUpdater): void;
    lookup(readSelector: SingularReaderSelector): Snapshot;
    getLogger(config: LoggerTransactionConfig): Logger;
    getOperationTracker(): RelayOperationTracker;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    retain(selector: NormalizationSelector): Disposable;
    execute(data: {
        operation: OperationDescriptor;
        cacheConfig?: CacheConfig | null;
        updater?: SelectorStoreUpdater | null;
    }): RelayObservable<GraphQLResponse>;
    executeMutation({
        operation,
        optimisticResponse,
        optimisticUpdater,
        updater,
        uploadables,
    }: {
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater | null;
        optimisticResponse?: object | null;
        updater?: SelectorStoreUpdater | null;
        uploadables?: UploadableMap | null;
    }): RelayObservable<GraphQLResponse>;
    executeWithSource({
        operation,
        source,
    }: {
        operation: OperationDescriptor;
        source: RelayObservable<GraphQLResponse>;
    }): RelayObservable<GraphQLResponse>;
}
export { RelayModernEnvironment as Environment };

type HandlerProvider = (name: string) => Handler | null | undefined;

// ./lib/network/RelayNetwork
import { RelayNetwork } from './lib/network/RelayNetwork';
import { LoggerTransactionConfig } from './lib/network/RelayNetworkLoggerTransaction';
import { RelayOperationTracker } from './lib/store/RelayOperationTracker';
import {
    ConnectionReference,
    ConnectionResolver,
    ConnectionSnapshot,
    ConnectionID,
    ConnectionInternalEvent,
} from './lib/store/RelayConnection';
export { RelayNetwork as Network };

// ./lib/network/RelayQueryResponseCache
export { RelayQueryResponseCache as QueryResponseCache } from './lib/network/RelayQueryResponseCache';

// ./lib/store/RelayRecordSource
export { RelayRecordSource as RecordSource } from './lib/store/RelayRecordSource';

// ./lib/store/RelayModernStore
export { RelayModernStore as Store } from './lib/store/RelayModernStore';

// ./lib/store/RelayModernSelector
export * from './lib/store/RelayModernSelector';

// ./lib/store/RelayModernOperationDescriptor
export * from './lib/store/RelayModernOperationDescriptor';

// ./lib/store/createFragmentSpecResolver
export * from './lib/store/createFragmentSpecResolver';

// ./query/RelayModernGraphQLTag
export function getFragment(taggedNode: GraphQLTaggedNode): ReaderFragment;
export function getFragmentOwner(
    fragmentNode: ReaderFragment,
    fragmentRef: FragmentPointer | ReadonlyArray<FragmentPointer | null | undefined> | null | undefined,
): OperationDescriptor | null;
export function getFragmentOwners(
    fragmentNodes: { [key: string]: ReaderFragment },
    fragmentRefs: {
        [key: string]: FragmentPointer | ReadonlyArray<FragmentPointer | null | undefined> | null | undefined;
    },
): { [key: string]: OperationDescriptor | null };
export function getPaginationFragment(taggedNode: GraphQLTaggedNode): ReaderPaginationFragment | null;
export function getRefetchableFragment(taggedNode: GraphQLTaggedNode): ReaderRefetchableFragment | null;
export function getRequest(taggedNode: GraphQLTaggedNode): ConcreteRequest;
export function graphql(strings: ReadonlyArray<string>): GraphQLTaggedNode;

// ./store/RelayStoreUtils
export function getStorageKey(
    field: NormalizationField | NormalizationHandle | ReaderField,
    variables: Variables,
): string;
export function getModuleComponentKey(documentName: string): string;
export function getModuleOperationKey(documentName: string): string;

export const FRAGMENTS_KEY: string;
export const FRAGMENT_OWNER_KEY: string;
export const ID_KEY: string;
export const REF_KEY: string;
export const REFS_KEY: string;
export const ROOT_ID: string;
export const ROOT_TYPE: string;
export const TYPENAME_KEY: string;

// Extensions
// ./handlers/RelayDefaultHandlerProvider
declare function RelayDefaultHandlerProvider(handle: string): Handler;
export { RelayDefaultHandlerProvider as DefaultHandlerProvider };

// ./handlers/viewer/RelayViewerHandler
interface RelayViewerHandler {
    readonly VIEWER_ID: DataID;
    readonly VIEWER_TYPE: 'Viewer';
}
declare const RelayViewerHandler: RelayViewerHandler;
export { RelayViewerHandler as ViewerHandler };

// Helpers (can be implemented via the above API)

// ./lib/mutations/commitLocalUpdate
export * from './lib/mutations/commitLocalUpdate';

// ./query/fetchRelayModernQuery
declare function fetchRelayModernQuery<T extends OperationType>(
    environment: RelayModernEnvironment,
    taggedNode: GraphQLTaggedNode,
    variables: T['variables'],
    cacheConfig?: CacheConfig | null,
): Promise<T['response']>;
export { fetchRelayModernQuery as fetchQuery };

// ./lib/store/isRelayModernEnvironment
export * from './lib/store/isRelayModernEnvironment';

// ./subscription/requestRelaySubscription
declare function requestRelaySubscription(environment: Environment, config: GraphQLSubscriptionConfig<{}>): Disposable;
export { requestRelaySubscription as requestSubscription };

// Utilities
interface Handler {
    update: (store: RecordSourceProxy, fieldPayload: HandleFieldPayload) => void;
}
type ProfileHandler = (name: string, state?: any) => (error?: Error) => void;
export interface RelayProfiler {
    instrumentMethods(object: object, names: { [key: string]: string }): void;
    instrument<T extends (...args: any[]) => any>(name: string, originalFunction: T): T;
    attachAggregateHandler(name: string, handler: Handler): void;
    detachAggregateHandler(name: string, handler: Handler): void;
    profile(name: string, state?: any): { stop: (error?: Error) => void };
    attachProfileHandler(name: string, handler: ProfileHandler): void;
    detachProfileHandler(name: string, handler: ProfileHandler): void;
}
export const RelayProfiler: RelayProfiler;

// Internal API
export function deepFreeze<T extends object>(value: T): T;

// ./lib/util/RelayFeatureFlags
export { RelayFeatureFlags } from './lib/util/RelayFeatureFlags';
