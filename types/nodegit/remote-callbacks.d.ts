export class RemoteCallbacks {
    version?: number | undefined;
    credentials?: Function | undefined;
    certificateCheck?: Function | undefined;
    /** Progress callback for push operations */
    pushTransferProgress?: PushTransferProgressCallback;
    /** Progress callback for fetch and clone operations */
    transferProgress?: (progress: IndexerProgress) => unknown;
    transport?: Function | undefined;
    payload?: undefined;
}

/** @see https://libgit2.org/docs/reference/main/remote/git_push_transfer_progress_cb.html */
export type PushTransferProgressCallback = (pushedObjects: number, totalObjects: number, pushedBytes: number) => unknown;

export interface IndexerProgress {
    indexedDeltas: () => number;
    indexedObjects: () => number;
    localObjects: () => number;
    receivedBytes: () => number;
    receivedObjects: () => number;
    totalDeltas: () => number;
    totalObjects: () => number;
}
