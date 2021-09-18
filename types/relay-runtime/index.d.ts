// Type definitions for relay-runtime 11.0
// Project: https://github.com/facebook/relay, https://facebook.github.io/relay
// Definitions by: Eloy Durán <https://github.com/alloy>
//                 Stephen Pittman <https://github.com/Stephen2>
//                 Marais Rossouw <https://github.com/maraisr>
//                 Lorenzo Di Giacomo <https://github.com/morrys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import ConnectionInterface from './lib/handlers/connection/ConnectionInterface';
export { ConnectionInterface };
export { ConnectionMetadata } from './lib/handlers/connection/ConnectionHandler';
export { EdgeRecord, PageInfo } from './lib/handlers/connection/ConnectionInterface';
export {
    DeclarativeMutationConfig,
    MutationTypes,
    RangeBehaviors,
    RangeOperations,
} from './lib/mutations/RelayDeclarativeMutationConfig';
export {
    MutationTypes as MutationType,
    RangeOperations as RangeOperation,
} from './lib/mutations/RelayDeclarativeMutationConfig';
export { OptimisticMutationConfig } from './lib/mutations/applyOptimisticMutation';
export { MutationConfig, MutationParameters } from './lib/mutations/commitMutation';
export {
    ExecuteFunction,
    FetchFunction,
    GraphQLResponse,
    GraphQLResponseWithData,
    GraphQLResponseWithoutData,
    GraphQLSingularResponse,
    LogRequestInfoFunction,
    Network as INetwork,
    PayloadData,
    PayloadError,
    ReactFlightPayloadData,
    ReactFlightPayloadQuery,
    ReactFlightServerTree,
    SubscribeFunction,
    Uploadable,
    UploadableMap,
} from './lib/network/RelayNetworkTypes';
export { ObservableFromValue, Observer, Subscribable, Subscription } from './lib/network/RelayObservable';
export {
    GraphQLTaggedNode,
    graphql,
    getFragment,
    getInlineDataFragment,
    getPaginationFragment,
    getRefetchableFragment,
    getRequest,
} from './lib/query/RelayModernGraphQLTag';
export { isClientID, generateClientID, generateUniqueClientID } from './lib/store/ClientID';
export { TaskScheduler } from './lib/store/RelayModernQueryExecutor';
export { RecordState } from './lib/store/RelayRecordState';
export {
    Environment as IEnvironment,
    FragmentMap,
    FragmentPointer,
    FragmentReference,
    FragmentSpecResolver,
    HandleFieldPayload,
    InvalidationState,
    MissingFieldHandler,
    ModuleImportPointer,
    NormalizationSelector,
    OperationAvailability,
    OperationDescriptor,
    OperationLoader,
    OperationTracker,
    OptimisticResponseConfig,
    OptimisticUpdate,
    OptimisticUpdateFunction,
    PluralReaderSelector,
    Props,
    PublishQueue,
    ReactFlightPayloadDeserializer,
    ReactFlightClientResponse,
    ReaderSelector,
    ReadOnlyRecordProxy,
    RecordProxy,
    RecordSourceProxy,
    RecordSourceSelectorProxy,
    RelayContext,
    RequestDescriptor,
    SelectorData,
    SelectorStoreUpdater,
    SingularReaderSelector,
    Snapshot,
    StoreUpdater,
    LogEvent,
    LogFunction,
} from './lib/store/RelayStoreTypes';
export { GraphQLSubscriptionConfig } from './lib/subscription/requestSubscription';
export {
    NormalizationArgument,
    NormalizationDefer,
    NormalizationConnection,
    NormalizationField,
    NormalizationFlightField,
    NormalizationLinkedField,
    NormalizationLinkedHandle,
    NormalizationLocalArgumentDefinition,
    NormalizationModuleImport,
    NormalizationScalarField,
    NormalizationSelection,
    NormalizationSplitOperation,
    NormalizationStream,
} from './lib/util/NormalizationNode';
export { NormalizationOperation } from './lib/util/NormalizationNode';
export {
    ReaderArgument,
    ReaderArgumentDefinition,
    ReaderField,
    ReaderFlightField,
    ReaderFragment,
    ReaderInlineDataFragment,
    ReaderInlineDataFragmentSpread,
    ReaderLinkedField,
    ReaderModuleImport,
    ReaderPaginationMetadata,
    ReaderRefetchableFragment,
    ReaderRefetchMetadata,
    ReaderRequiredField,
    ReaderScalarField,
    ReaderSelection,
    RequiredFieldAction,
} from './lib/util/ReaderNode';
export { ConcreteRequest, GeneratedNode, RequestParameters } from './lib/util/RelayConcreteNode';
export * from './lib/util/RelayRuntimeTypes';

// Core API
export { default as Environment } from './lib/store/RelayModernEnvironment';
export { RelayNetwork as Network } from './lib/network/RelayNetwork';
export { RelayObservable as Observable } from './lib/network/RelayObservable';
import QueryResponseCache from './lib/network/RelayQueryResponseCache';
export { QueryResponseCache };
export { RelayRecordSource as RecordSource } from './lib/store/RelayRecordSource';
export { RelayModernRecord as Record } from './lib/store/RelayModernRecord';
export { default as Store } from './lib/store/RelayModernStore';

export {
    areEqualSelectors,
    createNormalizationSelector,
    createReaderSelector,
    getDataIDsFromFragment,
    getDataIDsFromObject,
    getPluralSelector,
    getSelector,
    getSelectorsFromObject,
    getSingularSelector,
    getVariablesFromObject,
    getVariablesFromFragment,
    getVariablesFromPluralFragment,
    getVariablesFromSingularFragment,
} from './lib/store/RelayModernSelector';
export { createOperationDescriptor, createRequestDescriptor } from './lib/store/RelayModernOperationDescriptor';
export {
    getStorageKey,
    getModuleComponentKey,
    getModuleOperationKey,
    FRAGMENTS_KEY,
    FRAGMENT_OWNER_KEY,
    ID_KEY,
    REF_KEY,
    REFS_KEY,
    ROOT_ID,
    ROOT_TYPE,
    TYPENAME_KEY,
} from './lib/store/RelayStoreUtils';
export { createFragmentSpecResolver } from './lib/store/createFragmentSpecResolver';
export { readInlineData } from './lib/store/readInlineData';

// Extensions
export { RelayDefaultHandlerProvider as DefaultHandlerProvider } from './lib/handlers/RelayDefaultHandlerProvider';

import getDefaultMissingFieldHandlers from './lib/handlers/getRelayDefaultMissingFieldHandlers';
export { getDefaultMissingFieldHandlers };
import * as ConnectionHandler from './lib/handlers/connection/ConnectionHandler';
export { ConnectionHandler };

// Helpers (can be implemented via the above API)
export { applyOptimisticMutation } from './lib/mutations/applyOptimisticMutation';
export { commitLocalUpdate } from './lib/mutations/commitLocalUpdate';
export { commitMutation } from './lib/mutations/commitMutation';
export { fetchQuery } from './lib/query/fetchQuery';
export { fetchQuery_DEPRECATED } from './lib/query/fetchQuery_DEPRECATED';
export { isRelayModernEnvironment } from './lib/store/isRelayModernEnvironment';
export { requestSubscription } from './lib/subscription/requestSubscription';

// Utilities
export { RelayProfiler } from './lib/util/RelayProfiler';
export { default as getRelayHandleKey } from './lib/util/getRelayHandleKey';
export { default as getRequestIdentifier } from './lib/util/getRequestIdentifier';
export { default as getFragmentIdentifier } from './lib/util/getFragmentIdentifier';

// INTERNAL-ONLY
export { RelayConcreteNode } from './lib/util/RelayConcreteNode';
export { RelayFeatureFlags } from './lib/util/RelayFeatureFlags';
export { default as deepFreeze } from './lib/util/deepFreeze';
export { default as isPromise } from './lib/util/isPromise';

import * as fetchQueryInternal from './lib/query/fetchQueryInternal';

interface Internal {
    fetchQuery: typeof fetchQueryInternal.fetchQuery;
    fetchQueryDeduped: typeof fetchQueryInternal.fetchQueryDeduped;
    getPromiseForActiveRequest: typeof fetchQueryInternal.getPromiseForActiveRequest;
    getObservableForActiveRequest: typeof fetchQueryInternal.getObservableForActiveRequest;
}

export const __internal: Internal;

/**
 * relay-compiler-language-typescript support for fragment references
 */

export interface _RefType<Ref extends string> {
    ' $refType': Ref;
}

export interface _FragmentRefs<Refs extends string> {
    ' $fragmentRefs': FragmentRefs<Refs>;
}

// This is used in the actual artifacts to define the various fragment references a container holds.
export type FragmentRefs<Refs extends string> = {
    [ref in Refs]: true;
};

// This is a utility type for converting from a data type to a fragment reference that will resolve to that data type.
export type FragmentRef<Fragment> = Fragment extends _RefType<infer U> ? _FragmentRefs<U> : never;
