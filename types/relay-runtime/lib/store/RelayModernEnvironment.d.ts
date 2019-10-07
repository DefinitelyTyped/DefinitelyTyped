import { HandlerProvider } from '../handlers/RelayDefaultHandlerProvider';
import {
    OperationLoader,
    Store,
    MissingFieldHandler,
    OperationTracker,
    LoggerProvider,
    Logger,
    OptimisticUpdateFunction,
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
    readonly configName?: string;
    readonly handlerProvider?: HandlerProvider | null;
    readonly operationLoader?: OperationLoader | null;
    readonly network: Network;
    readonly scheduler?: TaskScheduler | null;
    readonly store: Store;
    readonly missingFieldHandlers?: ReadonlyArray<MissingFieldHandler> | null;
    readonly operationTracker?: OperationTracker | null;
    readonly loggerProvider?: LoggerProvider | null;
}

export class RelayModernEnvironment implements Environment {
    configName: string | null | undefined;
    constructor(config: EnvironmentConfig);
    getStore(): Store;
    getNetwork(): Network;
    getOperationTracker(): RelayOperationTracker;
    getLogger(config: LoggerTransactionConfig): Logger | null | undefined;
    applyUpdate(optimisticUpdate: OptimisticUpdateFunction): Disposable;
    revertUpdate(update: OptimisticUpdateFunction): void;
    replaceUpdate(update: OptimisticUpdateFunction, newUpdate: OptimisticUpdateFunction): void;
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
