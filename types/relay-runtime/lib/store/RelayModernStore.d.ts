import { DataID, Disposable } from "../util/RelayRuntimeTypes";
import {
    CheckOptions,
    MutableRecordSource,
    OperationAvailability,
    OperationDescriptor,
    OperationLoader,
    RecordSource,
    RequestDescriptor,
    Scheduler,
    SingularReaderSelector,
    Snapshot,
    Store,
} from "./RelayStoreTypes";

export interface InvalidationState {
    dataIDs: ReadonlyArray<DataID>;
    invalidations: Map<DataID, number | undefined | null>;
}

export default class RelayModernStore implements Store {
    constructor(
        source: MutableRecordSource,
        options?: {
            gcScheduler?: Scheduler | null | undefined;
            operationLoader?: OperationLoader | null | undefined;
            gcReleaseBufferSize?: number | null | undefined;
            queryCacheExpirationTime?: number | null | undefined;
        },
    );
    getSource(): RecordSource;
    check(operation: OperationDescriptor, options?: CheckOptions): OperationAvailability;
    retain(operation: OperationDescriptor): Disposable;
    lookup(selector: SingularReaderSelector): Snapshot;
    notify(sourceOperation?: OperationDescriptor, invalidateStore?: boolean): ReadonlyArray<RequestDescriptor>;
    publish(source: RecordSource, idsMarkedForInvalidation?: Set<DataID>): void;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    holdGC(): Disposable;
    lookupInvalidationState(dataIDs: ReadonlyArray<DataID>): InvalidationState;
    checkInvalidationState(previousInvalidationState: InvalidationState): boolean;
    subscribeToInvalidationState(invalidationState: InvalidationState, callback: () => void): Disposable;
    toJSON(): unknown;
    snapshot(): void;
    restore(): void;
    scheduleGC(): void;
}
