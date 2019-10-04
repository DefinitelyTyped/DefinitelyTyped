import {
    OperationDescriptor,
    OperationLoader,
    OperationTracker,
    OptimisticResponseConfig,
    PublishQueue,
    SelectorStoreUpdater,
} from './RelayStoreTypes';
import { GraphQLResponse } from '../network/RelayNetworkTypes';
import { Sink, RelayObservable } from '../network/RelayObservable';
import { GetDataID } from './RelayResponseNormalizer';

export interface ExecuteConfig {
    getDataID: GetDataID;
    operation: OperationDescriptor;
    operationLoader: OperationLoader;
    operationTracker?: OperationTracker;
    optimisticConfig: OptimisticResponseConfig;
    publishQueue: PublishQueue;
    scheduler?: TaskScheduler;
    sink: Sink<GraphQLResponse>;
    source: RelayObservable<GraphQLResponse>;
    updater?: SelectorStoreUpdater;
}

export interface TaskScheduler {
    cancel: (id: string) => void;
    schedule: (fn: () => void) => string;
}
