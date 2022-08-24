import { HandlerProvider } from '../handlers/RelayDefaultHandlerProvider';
import { MutationParameters } from '../mutations/commitMutation';
import { GraphQLResponse, Network, PayloadData } from '../network/RelayNetworkTypes';
import { RelayObservable as Observable } from '../network/RelayObservable';
import { TaskScheduler } from '../store/RelayModernQueryExecutor';
import { GetDataID } from '../store/RelayResponseNormalizer';
import {
    ExecuteMutationConfig,
    LogFunction,
    MissingFieldHandler,
    OperationAvailability,
    OperationDescriptor,
    OperationLoader,
    OptimisticResponseConfig,
    OptimisticUpdateFunction,
    RequiredFieldLogger,
    SelectorStoreUpdater,
    SingularReaderSelector,
    Snapshot,
    Store,
    StoreUpdater,
} from '../store/RelayStoreTypes';
import { Disposable, RenderPolicy } from '../util/RelayRuntimeTypes';
import { ActorIdentifier } from './ActorIdentifier';
import {
    ActorEnvironment,
    MultiActorEnvironment as IMultiActorEnvironment,
    MultiActorStoreUpdater,
} from './MultiActorEnvironmentTypes';

export type MultiActorEnvironmentConfig = Readonly<{
    createConfigNameForActor?: ((actorIdentifier: ActorIdentifier) => string) | null;
    createNetworkForActor: (actorIdentifier: ActorIdentifier) => Network;
    createStoreForActor?: ((actorIdentifier: ActorIdentifier) => Store) | null;
    defaultRenderPolicy?: RenderPolicy | null;
    getDataID?: GetDataID;
    handlerProvider?: HandlerProvider;
    isServer?: boolean | null;
    logFn?: LogFunction | null;
    missingFieldHandlers?: ReadonlyArray<MissingFieldHandler> | null;
    operationLoader?: OperationLoader | null;
    requiredFieldLogger?: RequiredFieldLogger | null;
    scheduler?: TaskScheduler | null;
    shouldProcessClientComponents?: boolean | null;
    treatMissingFieldsAsNull?: boolean;
}>;

export class MultiActorEnvironment implements IMultiActorEnvironment {
    constructor(config: MultiActorEnvironmentConfig);

    forActor(actorIdentifier: string): ActorEnvironment;

    check(actorEnvironment: ActorEnvironment, operation: OperationDescriptor): OperationAvailability;

    subscribe(
        actorEnvironment: ActorEnvironment,
        snapshot: Snapshot,
        callback: (snapshot: Snapshot) => void,
    ): Disposable;

    retain(actorEnvironment: ActorEnvironment, operation: OperationDescriptor): Disposable;

    applyUpdate(actorEnvironment: ActorEnvironment, optimisticUpdate: OptimisticUpdateFunction): Disposable;

    revertUpdate(actorEnvironment: ActorEnvironment, update: OptimisticUpdateFunction): void;

    replaceUpdate(
        actorEnvironment: ActorEnvironment,
        update: OptimisticUpdateFunction,
        replacement: OptimisticUpdateFunction,
    ): void;

    applyMutation(
        actorEnvironment: ActorEnvironment,
        optimisticConfig: OptimisticResponseConfig<MutationParameters>,
    ): Disposable;

    commitUpdate(actorEnvironment: ActorEnvironment, updater: StoreUpdater): void;

    commitMultiActorUpdate(updater: MultiActorStoreUpdater): void;

    commitPayload(
        actorEnvironment: ActorEnvironment,
        operationDescriptor: OperationDescriptor,
        payload: PayloadData,
    ): void;

    lookup(actorEnvironment: ActorEnvironment, selector: SingularReaderSelector): Snapshot;

    execute(
        actorEnvironment: ActorEnvironment,
        config: { operation: OperationDescriptor },
    ): Observable<GraphQLResponse>;

    executeSubscription(
        actorEnvironment: ActorEnvironment,
        config: {
            operation: OperationDescriptor;
            updater?: SelectorStoreUpdater<MutationParameters['response']> | null | undefined;
        },
    ): Observable<GraphQLResponse>;

    executeMutation(
        actorEnvironment: ActorEnvironment,
        config: ExecuteMutationConfig<MutationParameters>,
    ): Observable<GraphQLResponse>;

    executeWithSource(
        actorEnvironment: ActorEnvironment,
        arg: { operation: OperationDescriptor; source: Observable<GraphQLResponse> },
    ): Observable<GraphQLResponse>;

    isRequestActive(actorEnvironment: ActorEnvironment, requestIdentifier: string): boolean;

    isServer(): boolean;
}
