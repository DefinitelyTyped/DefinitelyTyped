import {
    OperationDescriptor,
    OperationLoader,
    OperationTracker,
    OptimisticResponseConfig,
    PublishQueue,
    ReactFlightPayloadDeserializer,
    SelectorStoreUpdater,
    Store,
} from './RelayStoreTypes';
import { GraphQLResponse } from '../network/RelayNetworkTypes';
import { Sink, RelayObservable } from '../network/RelayObservable';
import { GetDataID } from './RelayResponseNormalizer';

export type ActiveState = 'active' | 'inactive';

export interface ExecuteConfig {
    getDataID: GetDataID;
    treatMissingFieldsAsNull: boolean;
    operation: OperationDescriptor;
    operationExecutions: Map<string, ActiveState>;
    operationLoader: OperationLoader | null | undefined;
    operationTracker?: OperationTracker | null | undefined;
    optimisticConfig: OptimisticResponseConfig | null | undefined;
    publishQueue: PublishQueue;
    reactFlightPayloadDeserializer?: ReactFlightPayloadDeserializer | null;
    scheduler?: TaskScheduler | null;
    sink: Sink<GraphQLResponse>;
    source: RelayObservable<GraphQLResponse>;
    store: Store;
    updater?: SelectorStoreUpdater | null;
    isClientPayload?: boolean;
}

export interface TaskScheduler {
    cancel: (id: string) => void;
    schedule: (fn: () => void) => string;
}

export interface Executor {
    cancel: () => void;
}

export function execute(config: ExecuteConfig): Executor;
