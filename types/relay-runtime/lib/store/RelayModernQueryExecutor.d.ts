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
    readonly getDataID: GetDataID;
    readonly treatMissingFieldsAsNull: boolean;
    readonly operation: OperationDescriptor;
    readonly operationExecutions: Map<string, ActiveState>;
    readonly operationLoader: OperationLoader | null | undefined;
    readonly operationTracker?: OperationTracker | null;
    readonly optimisticConfig: OptimisticResponseConfig | null | undefined;
    readonly publishQueue: PublishQueue;
    readonly reactFlightPayloadDeserializer?: ReactFlightPayloadDeserializer | null;
    readonly scheduler?: TaskScheduler | null;
    readonly sink: Sink<GraphQLResponse>;
    readonly source: RelayObservable<GraphQLResponse>;
    readonly store: Store;
    readonly updater?: SelectorStoreUpdater | null;
    readonly isClientPayload?: boolean;
}

export interface TaskScheduler {
    cancel: (id: string) => void;
    schedule: (fn: () => void) => string;
}

export interface Executor {
    cancel: () => void;
}

export function execute(config: ExecuteConfig): Executor;
