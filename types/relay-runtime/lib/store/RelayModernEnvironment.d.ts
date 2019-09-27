import { HandlerProvider } from '../handlers/RelayDefaultHandlerProvider';
import {
    LogFunction,
    OperationLoader,
    Store,
    MissingFieldHandler,
    OperationTracker,
    LoggerProvider,
    Logger,
    OptimisticUpdate,
    OperationDescriptor,
    SelectorStoreUpdater,
    NormalizationSelector,
    StoreUpdater,
    SingularReaderSelector,
    Snapshot,
    OptimisticResponseConfig,
    Environment,
} from './RelayStoreTypes';
import { Network, PayloadData, GraphQLResponse, UploadableMap } from '../network/RelayNetworkTypes';
import { TaskScheduler } from './RelayModernQueryExecutor';
import { RelayOperationTracker } from './RelayOperationTracker';
import { LoggerTransactionConfig } from '../network/RelayNetworkLoggerTransaction';
import { Disposable, CacheConfig } from '../util/RelayRuntimeTypes';
import { RelayObservable } from '../network/RelayObservable';

export interface EnvironmentConfig {
    configName?: string;
    handlerProvider?: HandlerProvider;
    log?: LogFunction;
    operationLoader?: OperationLoader;
    network: Network;
    scheduler?: TaskScheduler;
    store: Store;
    missingFieldHandlers?: ReadonlyArray<MissingFieldHandler>;
    operationTracker?: OperationTracker;
    loggerProvider?: LoggerProvider;
}

export class RelayModernEnvironment implements Environment {
    readonly configName: string | null | undefined;
    constructor(config: EnvironmentConfig);
    getStore(): Store;
    getNetwork(): Network;
    getOperationTracker(): RelayOperationTracker;
    getLogger(config: LoggerTransactionConfig): Logger;
    applyUpdate(optimisticUpdate: OptimisticUpdate): Disposable;
    revertUpdate(update: OptimisticUpdate): void;
    replaceUpdate(update: OptimisticUpdate, newUpdate: OptimisticUpdate): void;
    applyMutation(optimisticConfig: OptimisticResponseConfig): Disposable;
    check(readSelector: NormalizationSelector): boolean;
    commitPayload(operationDescriptor: OperationDescriptor, payload: PayloadData): void;
    commitUpdate(updater: StoreUpdater): void;
    lookup(readSelector: SingularReaderSelector): Snapshot;
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
