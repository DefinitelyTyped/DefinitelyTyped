export {};

declare global {
    /**
     * Represents the dictionary for hash algorithm and value.
     */
    interface CrossOriginStorageGetFileHandleHash {
        value: string;
        algorithm: string;
    }

    /**
     * Represents the options for requesting a file handle.
     */
    interface CrossOriginStorageGetFileHandleOptions {
        create?: boolean | undefined;
        origins?: string[] | string | undefined;
    }

    /**
     * @deprecated Use `CrossOriginStorageGetFileHandleHash` instead.
     */
    type CrossOriginStorageRequestFileHandleHash = CrossOriginStorageGetFileHandleHash;

    /**
     * @deprecated Use `CrossOriginStorageGetFileHandleOptions` instead.
     */
    type CrossOriginStorageRequestFileHandleOptions = CrossOriginStorageGetFileHandleOptions;

    /**
     * The CrossOriginStorageManager interface.
     * [Exposed=(Window,Worker), SecureContext]
     */
    interface CrossOriginStorageManager {
        getFileHandle(
            hash: CrossOriginStorageGetFileHandleHash,
            options?: CrossOriginStorageGetFileHandleOptions,
        ): Promise<FileSystemFileHandle>;

        /**
         * @deprecated Use `getFileHandle()` instead.
         */
        requestFileHandle(
            hash: CrossOriginStorageGetFileHandleHash,
            options?: CrossOriginStorageGetFileHandleOptions,
        ): Promise<FileSystemFileHandle>;
    }

    interface Navigator {
        readonly crossOriginStorage: CrossOriginStorageManager;
    }

    interface WorkerNavigator {
        /**
         * Exposed in every worker. In a service worker, every call rejects with
         * NotAllowedError, because the cross-origin-storage feature cannot be
         * enabled in service workers.
         */
        readonly crossOriginStorage: CrossOriginStorageManager;
    }
}
