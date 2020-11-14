import { HandlerProvider } from '../handlers/RelayDefaultHandlerProvider';
import {
    OperationLoader,
    Store,
    MissingFieldHandler,
    OperationTracker,
    LogFunction,
    OptimisticUpdateFunction,
    OperationAvailability,
    OperationDescriptor,
    SelectorStoreUpdater,
    StoreUpdater,
    SingularReaderSelector,
    Snapshot,
    OptimisticResponseConfig,
    Environment,
    RequiredFieldLogger,
} from './RelayStoreTypes';
import { Network, PayloadData, GraphQLResponse, UploadableMap } from '../network/RelayNetworkTypes';
import { TaskScheduler } from './RelayModernQueryExecutor';
import { RelayOperationTracker } from './RelayOperationTracker';
import { Disposable, CacheConfig } from '../util/RelayRuntimeTypes';
import { RelayObservable } from '../network/RelayObservable';

export interface EnvironmentConfig {
    readonly configName?: string;
    readonly handlerProvider?: HandlerProvider | null;
    readonly treatMissingFieldsAsNull?: boolean;
    readonly log?: LogFunction | null;
    readonly operationLoader?: OperationLoader | null;
    readonly network: Network;
    readonly scheduler?: TaskScheduler | null;
    readonly store: Store;
    readonly missingFieldHandlers?: ReadonlyArray<MissingFieldHandler> | null;
    readonly operationTracker?: OperationTracker | null;
    readonly options?: unknown;
    readonly isServer?: boolean;
    readonly requiredFieldLogger?: RequiredFieldLogger | null;
}

export default class RelayModernEnvironment implements Environment {
    options: unknown;
    configName: string | null | undefined;
    constructor(config: EnvironmentConfig);
    getStore(): Store;
    getNetwork(): Network;
    getOperationTracker(): RelayOperationTracker;
    isRequestActive(requestIdentifier: string): boolean;
    applyUpdate(optimisticUpdate: OptimisticUpdateFunction): Disposable;
    revertUpdate(update: OptimisticUpdateFunction): void;
    replaceUpdate(update: OptimisticUpdateFunction, newUpdate: OptimisticUpdateFunction): void;
    applyMutation(optimisticConfig: OptimisticResponseConfig): Disposable;
    check(operation: OperationDescriptor): OperationAvailability;
    commitPayload(operationDescriptor: OperationDescriptor, payload: PayloadData): void;
    commitUpdate(updater: StoreUpdater): void;
    lookup(readSelector: SingularReaderSelector): Snapshot;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    retain(operation: OperationDescriptor): Disposable;
    isServer(): boolean;
    execute(data: {
        operation: OperationDescriptor;
        cacheConfig?: CacheConfig | null;
        updater?: SelectorStoreUpdater | null;
    }): RelayObservable<GraphQLResponse>;
    executeMutation({
        cacheConfig,
        operation,
        optimisticResponse,
        optimisticUpdater,
        updater,
        uploadables,
    }: {
        cacheConfig: CacheConfig | null;
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater | null;
        optimisticResponse?: { [key: string]: any } | null;
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
