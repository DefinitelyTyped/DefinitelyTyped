import {
    Store,
    MutableRecordSource,
    Scheduler,
    OperationLoader,
    RecordSource,
    NormalizationSelector,
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
    constructor(source: MutableRecordSource, gcScheduler?: Scheduler, operationLoader?: OperationLoader | null);
    getSource(): RecordSource;
    check(selector: NormalizationSelector): boolean;
    retain(selector: NormalizationSelector): Disposable;
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
