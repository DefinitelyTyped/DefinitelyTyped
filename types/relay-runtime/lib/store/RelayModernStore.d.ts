import {
    CheckOptions,
    Store,
    MutableRecordSource,
    Scheduler,
    OperationLoader,
    OperationAvailability,
    OperationDescriptor,
    RecordSource,
    ReaderSelector,
    Snapshot,
    RequestDescriptor,
} from './RelayStoreTypes';
import { Disposable } from '../util/RelayRuntimeTypes';
import {
    ConnectionReference,
    ConnectionResolver,
    ConnectionSnapshot,
    ConnectionInternalEvent,
    ConnectionID,
} from './RelayConnection';

export class RelayModernStore implements Store {
    constructor(source: MutableRecordSource, options?: {
        gcScheduler?: Scheduler | null,
        operationLoader?: OperationLoader | null,
        gcReleaseBufferSize?: number | null,
    });
    getSource(): RecordSource;
    check(operation: OperationDescriptor, options?: CheckOptions): OperationAvailability;
    retain(operation: OperationDescriptor): Disposable;
    lookup(selector: ReaderSelector): Snapshot;
    notify(): ReadonlyArray<RequestDescriptor>;
    publish(source: RecordSource): void;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    holdGC(): Disposable;
    toJSON(): unknown;
    lookupConnection_UNSTABLE<TEdge, TState>(
        connectionReference: ConnectionReference<TEdge>,
        resolver: ConnectionResolver<TEdge, TState>,
    ): ConnectionSnapshot<TEdge, TState>;

    subscribeConnection_UNSTABLE<TEdge, TState>(
        snapshot: ConnectionSnapshot<TEdge, TState>,
        resolver: ConnectionResolver<TEdge, TState>,
        callback: (state: TState) => void,
    ): Disposable;
    publishConnectionEvents_UNSTABLE(events: ConnectionInternalEvent[], final: boolean): void;
    getConnectionEvents_UNSTABLE(connectionID: ConnectionID): ReadonlyArray<ConnectionInternalEvent>;
    snapshot(): void;
    restore(): void;
}
