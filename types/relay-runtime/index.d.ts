import ConnectionInterface from "./lib/handlers/connection/ConnectionInterface";
export { ConnectionInterface };
export { ConnectionMetadata } from "./lib/handlers/connection/ConnectionHandler";
export { EdgeRecord, PageInfo } from "./lib/handlers/connection/ConnectionInterface";
export { OptimisticMutationConfig } from "./lib/mutations/applyOptimisticMutation";
export { MutationConfig, MutationParameters } from "./lib/mutations/commitMutation";
export {
    DeclarativeMutationConfig,
    MutationTypes,
    RangeBehaviors,
    RangeOperations,
} from "./lib/mutations/RelayDeclarativeMutationConfig";
export {
    MutationTypes as MutationType,
    RangeOperations as RangeOperation,
} from "./lib/mutations/RelayDeclarativeMutationConfig";
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
} from "./lib/network/RelayNetworkTypes";
export { ObservableFromValue, Observer, Subscribable, Subscription } from "./lib/network/RelayObservable";
export {
    getFragment,
    getInlineDataFragment,
    getNode,
    getPaginationFragment,
    getRefetchableFragment,
    getRequest,
    graphql,
    GraphQLTaggedNode,
    isFragment,
    isInlineDataFragment,
    isRequest,
} from "./lib/query/RelayModernGraphQLTag";
export { generateClientID, generateUniqueClientID, isClientID } from "./lib/store/ClientID";
export { TaskScheduler } from "./lib/store/RelayModernQueryExecutor";
export { RecordState } from "./lib/store/RelayRecordState";
export {
    Environment as IEnvironment,
    FragmentMap,
    FragmentPointer,
    FragmentSpecResolver,
    FragmentType,
    /** @deprecated use FragmentType instead of FragmentReference */
    FragmentType as FragmentReference,
    HandleFieldPayload,
    HasUpdatableSpread,
    InvalidationState,
    LogEvent,
    LogFunction,
    MissingFieldHandler,
    ModuleImportPointer,
    MutableRecordSource,
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
    ReactFlightClientResponse,
    ReactFlightPayloadDeserializer,
    ReaderSelector,
    ReadOnlyRecordProxy,
    RecordProxy,
    RecordSourceProxy,
    RecordSourceSelectorProxy,
    RelayContext,
    RequestDescriptor,
    RequiredFieldLogger,
    SelectorData,
    SelectorStoreUpdater,
    SingularReaderSelector,
    Snapshot,
    StoreUpdater,
    UpdatableFragmentData,
    UpdatableQueryData,
} from "./lib/store/RelayStoreTypes";
export { GraphQLSubscriptionConfig } from "./lib/subscription/requestSubscription";
export {
    NormalizationArgument,
    NormalizationDefer,
    NormalizationField,
    NormalizationFlightField,
    NormalizationLinkedField,
    NormalizationLinkedHandle,
    NormalizationLocalArgumentDefinition,
    NormalizationModuleImport,
    NormalizationOperation,
    NormalizationRootNode,
    NormalizationScalarField,
    NormalizationSelection,
    NormalizationSplitOperation,
    NormalizationStream,
    NormalizationTypeDiscriminator,
} from "./lib/util/NormalizationNode";
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
} from "./lib/util/ReaderNode";
export {
    ConcreteRequest,
    ConcreteUpdatableQuery,
    GeneratedNode,
    RequestParameters,
} from "./lib/util/RelayConcreteNode";
export { RelayReplaySubject as ReplaySubject } from "./lib/util/RelayReplaySubject";
export * from "./lib/util/RelayRuntimeTypes";

// Core API
export { RelayNetwork as Network } from "./lib/network/RelayNetwork";
export { RelayObservable as Observable } from "./lib/network/RelayObservable";
export { default as Environment, EnvironmentConfig } from "./lib/store/RelayModernEnvironment";
import QueryResponseCache from "./lib/network/RelayQueryResponseCache";
export { QueryResponseCache };
export { RelayModernRecord as Record } from "./lib/store/RelayModernRecord";
export { default as Store } from "./lib/store/RelayModernStore";
export { RelayRecordSource as RecordSource } from "./lib/store/RelayRecordSource";

export { createFragmentSpecResolver } from "./lib/store/createFragmentSpecResolver";
export { readInlineData } from "./lib/store/readInlineData";
export { createOperationDescriptor, createRequestDescriptor } from "./lib/store/RelayModernOperationDescriptor";
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
    getVariablesFromFragment,
    getVariablesFromObject,
    getVariablesFromPluralFragment,
    getVariablesFromSingularFragment,
} from "./lib/store/RelayModernSelector";
export {
    FRAGMENT_OWNER_KEY,
    FRAGMENTS_KEY,
    getModuleComponentKey,
    getModuleOperationKey,
    getStorageKey,
    ID_KEY,
    REF_KEY,
    REFS_KEY,
    ROOT_ID,
    ROOT_TYPE,
    TYPENAME_KEY,
} from "./lib/store/RelayStoreUtils";

// Extensions
export { RelayDefaultHandlerProvider as DefaultHandlerProvider } from "./lib/handlers/RelayDefaultHandlerProvider";

import getDefaultMissingFieldHandlers from "./lib/handlers/getRelayDefaultMissingFieldHandlers";
export { getDefaultMissingFieldHandlers };
import * as ConnectionHandler from "./lib/handlers/connection/ConnectionHandler";
export { ConnectionHandler };
export { MutationHandlers } from "./lib/handlers/connection/MutationHandlers";
export { VIEWER_ID, VIEWER_TYPE } from "./lib/store/ViewerPattern";

// Helpers (can be implemented via the above API)
export { applyOptimisticMutation } from "./lib/mutations/applyOptimisticMutation";
export { commitLocalUpdate } from "./lib/mutations/commitLocalUpdate";
export { commitMutation } from "./lib/mutations/commitMutation";
export { fetchQuery } from "./lib/query/fetchQuery";
export { fetchQuery_DEPRECATED } from "./lib/query/fetchQuery_DEPRECATED";
export { isRelayModernEnvironment } from "./lib/store/isRelayModernEnvironment";
export { requestSubscription } from "./lib/subscription/requestSubscription";

// Utilities
export { default as createPayloadFor3DField } from "./lib/util/createPayloadFor3DField";
export { default as getFragmentIdentifier } from "./lib/util/getFragmentIdentifier";
export { default as getPaginationMetadata } from "./lib/util/getPaginationMetadata";
export { default as getPaginationVariables } from "./lib/util/getPaginationVariables";
export { Direction } from "./lib/util/getPaginationVariables";
export { default as getRefetchMetadata } from "./lib/util/getRefetchMetadata";
export { default as getRelayHandleKey } from "./lib/util/getRelayHandleKey";
export { default as getRequestIdentifier } from "./lib/util/getRequestIdentifier";
export { default as getValueAtPath } from "./lib/util/getValueAtPath";
export { default as handlePotentialSnapshotErrors } from "./lib/util/handlePotentialSnapshotErrors";
export { default as PreloadableQueryRegistry } from "./lib/util/PreloadableQueryRegistry";
export { RelayProfiler } from "./lib/util/RelayProfiler";

// INTERNAL-ONLY
export { RelayConcreteNode } from "./lib/util/RelayConcreteNode";
export { default as RelayError } from "./lib/util/RelayError";
export { RelayFeatureFlags } from "./lib/util/RelayFeatureFlags";
export const DEFAULT_HANDLE_KEY = "";
export { default as deepFreeze } from "./lib/util/deepFreeze";
export { default as getPendingOperationsForFragment } from "./lib/util/getPendingOperationsForFragment";
export { default as isPromise } from "./lib/util/isPromise";
export { default as isScalarAndEqual } from "./lib/util/isScalarAndEqual";
export { default as recycleNodesInto } from "./lib/util/recycleNodesInto";
export { default as stableCopy } from "./lib/util/stableCopy";

import * as fetchQueryInternal from "./lib/query/fetchQueryInternal";
import withProvidedVariables from "./lib/util/withProvidedVariables";

import * as RelayResolverFragments from "./lib/store/ResolverFragments";

interface Internal {
    fetchQuery: typeof fetchQueryInternal.fetchQuery;
    fetchQueryDeduped: typeof fetchQueryInternal.fetchQueryDeduped;
    getPromiseForActiveRequest: typeof fetchQueryInternal.getPromiseForActiveRequest;
    getObservableForActiveRequest: typeof fetchQueryInternal.getObservableForActiveRequest;
    ResolverFragments: typeof RelayResolverFragments;
    withProvidedVariables: typeof withProvidedVariables;
}

export const __internal: Internal;

/**
 * relay-compiler-language-typescript support for fragment references
 */

export interface _RefType<Ref extends string> {
    " $fragmentType": Ref;
}

export interface _FragmentRefs<Refs extends string> {
    " $fragmentSpreads": FragmentRefs<Refs>;
}

// This is used in the actual artifacts to define the various fragment references a container holds.
export type FragmentRefs<Refs extends string> = {
    [ref in Refs]: true;
};

// This is a utility type for converting from a data type to a fragment reference that will resolve to that data type.
export type FragmentRef<Fragment> = Fragment extends _RefType<infer U> ? _FragmentRefs<U> : never;
