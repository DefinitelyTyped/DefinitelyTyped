export class RemoteCallbacks {
    version?: number | undefined;
    credentials?: Function | undefined;
    certificateCheck?: Function | undefined;
    transferProgress?: (progress: IndexerProgress) => unknown | undefined;
    transport?: Function | undefined;
    payload?: undefined;
}

export interface IndexerProgress {
    indexedDeltas: () => number;
    indexedObjects: () => number;
    localObjects: () => number;
    receivedBytes: () => number;
    receivedObjects: () => number;
    totalDeltas: () => number;
    totalObjects: () => number;
}
