import { MutationParameters } from '../mutations/commitMutation';
import { GraphQLResponse, PayloadData } from '../network/RelayNetworkTypes';
import { RelayObservable } from '../network/RelayObservable';
import {
    Environment as IEnvironment,
    ExecuteMutationConfig,
    OperationAvailability,
    OperationDescriptor,
    OptimisticResponseConfig,
    OptimisticUpdateFunction,
    RecordSourceProxy,
    SelectorStoreUpdater,
    SingularReaderSelector,
    Snapshot,
    StoreUpdater,
} from '../store/RelayStoreTypes';
import { Disposable } from '../util/RelayRuntimeTypes';
import { ActorIdentifier } from './ActorIdentifier';

export type MultiActorStoreUpdater = (
    actorIdentifier: ActorIdentifier,
    environment: ActorEnvironment,
    store: RecordSourceProxy,
) => void;

export interface ActorEnvironment extends IEnvironment {
    /**
     * Reference to the main MultActorEnvironment that handles
     * the network execution/and responsible for network integration
     */
    readonly multActorEnvironment: MultiActorEnvironment;

    /**
     * Identifier of the actor for the current active environment
     */
    readonly actorIdentifier: ActorIdentifier;

    /**
     * Optional. A human-readable identifier of the environment.
     * This value should be visible in the dev tools.
     */
    readonly configName: string | null;
}

/**
 * Interface for the main (or parent) multi-actor environment that contains
 * the map of individual actor-specific sub-environments. These sub-environments
 * implement the Relay IEnvironment interface.
 */
export interface MultiActorEnvironment {
    /**
     * A factory of actor-specific environments.
     */
    forActor(actorIdentifier: ActorIdentifier): ActorEnvironment;

    /**
     * Determine if the operation can be resolved with data in the store (i.e. no
     * fields are missing).
     *
     * Note that this operation effectively "executes" the selector against the
     * cache and therefore takes time proportional to the size/complexity of the
     * selector.
     */
    check(actorEnvironment: ActorEnvironment, operation: OperationDescriptor): OperationAvailability;

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when data has been committed to the store that would cause the results of
     * the snapshot's selector to change.
     */
    subscribe(
        actorEnvironment: ActorEnvironment,
        snapshot: Snapshot,
        callback: (snapshot: Snapshot) => void,
    ): Disposable;

    /**
     * Ensure that all the records necessary to fulfill the given selector are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     */
    retain(actorEnvironment: ActorEnvironment, operation: OperationDescriptor): Disposable;

    /**
     * Apply an optimistic update to the environment. The mutation can be reverted
     * by calling `dispose()` on the returned value.
     */
    applyUpdate(actorEnvironment: ActorEnvironment, optimisticUpdate: OptimisticUpdateFunction): Disposable;

    /**
     * Revert updates for the `update` function.
     */
    revertUpdate(actorEnvironment: ActorEnvironment, update: OptimisticUpdateFunction): void;

    /**
     * Revert updates for the `update` function, and apply the `replacement` update.
     */
    replaceUpdate(
        actorEnvironment: ActorEnvironment,
        update: OptimisticUpdateFunction,
        replacement: OptimisticUpdateFunction,
    ): void;

    /**
     * Apply an optimistic mutation response and/or updater. The mutation can be
     * reverted by calling `dispose()` on the returned value.
     */
    applyMutation(
        actorEnvironment: ActorEnvironment,
        optimisticConfig: OptimisticResponseConfig<MutationParameters>,
    ): Disposable;

    /**
     * Commit an updater to the environment. This mutation cannot be reverted and
     * should therefore not be used for optimistic updates. This is mainly
     * intended for updating fields from client schema extensions.
     */
    commitUpdate(actorEnvironment: ActorEnvironment, updater: StoreUpdater): void;

    /**
     * Commit store updates for each actor-specific environment known to MultActorEnvironment
     */
    commitMultiActorUpdate(updater: MultiActorStoreUpdater): void;

    /**
     * Commit a payload to the environment using the given operation selector.
     */
    commitPayload(
        actorEnvironment: ActorEnvironment,
        operationDescriptor: OperationDescriptor,
        payload: PayloadData,
    ): void;

    /**
     * Read the results of a selector from in-memory records in the store.
     */
    lookup(actorEnvironment: ActorEnvironment, selector: SingularReaderSelector): Snapshot;

    /**
     * Send a query to the server with Observer semantics: one or more
     * responses may be returned (via `next`) over time followed by either
     * the request completing (`completed`) or an error (`error`).
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to: environment.execute({...}).subscribe({...}).
     */
    execute(
        actorEnvironment: ActorEnvironment,
        config: {
            operation: OperationDescriptor;
        },
    ): RelayObservable<GraphQLResponse>;

    /**
     * Send a subscription to the server with Observer semantics: one or more
     * responses may be returned (via `next`) over time followed by either
     * the request completing (`completed`) or an error (`error`).
     *
     * Networks/servers that support subscriptions may choose to hold the
     * subscription open indefinitely such that `complete` is not called.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to: environment.executeSubscription({...}).subscribe({...}).
     */
    executeSubscription(
        actorEnvironment: ActorEnvironment,
        config: {
            operation: OperationDescriptor;
            updater?: SelectorStoreUpdater<MutationParameters['response']> | null;
        },
    ): RelayObservable<GraphQLResponse>;

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
    executeMutation(
        actorEnvironment: ActorEnvironment,
        config: ExecuteMutationConfig<MutationParameters>,
    ): RelayObservable<GraphQLResponse>;

    /**
     * Returns an Observable of GraphQLResponse resulting from executing the
     * provided Query or Subscription operation responses, the result of which is
     * then normalized and committed to the publish queue.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to:
     * environment.executeWithSource({...}).subscribe({...}).
     */
    executeWithSource(
        actorEnvironment: ActorEnvironment,
        arg: {
            operation: OperationDescriptor;
            source: RelayObservable<GraphQLResponse>;
        },
    ): RelayObservable<GraphQLResponse>;

    /**
     * Returns true if a request is currently "active", meaning it's currently
     * actively receiving payloads or downloading modules, and has not received
     * a final payload yet. Note that a request might still be pending (or "in flight")
     * without actively receiving payload, for example a live query or an
     * active GraphQL subscription
     */
    isRequestActive(actorEnvironment: ActorEnvironment, requestIdentifier: string): boolean;

    /**
     * Returns `true` if execute in the server environment
     */
    isServer(): boolean;
}
