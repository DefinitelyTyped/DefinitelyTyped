export {};

declare global {
    /**
     * Represents the dictionary for hash algorithm and value.
     */
    interface CrossOriginStorageRequestFileHandleHash {
        value: string;
        algorithm: string;
    }

    /**
     * Represents the options for requesting a file handle.
     */
    interface CrossOriginStorageRequestFileHandleOptions {
        create?: boolean | undefined;
        origins?: string[] | string | undefined;
    }

    /**
     * The CrossOriginStorageManager interface.
     * [SecureContext]
     */
    interface CrossOriginStorageManager {
        requestFileHandle(
            hash: CrossOriginStorageRequestFileHandleHash,
            options?: CrossOriginStorageRequestFileHandleOptions,
        ): Promise<FileSystemFileHandle>;
    }

    interface Navigator {
        readonly crossOriginStorage: CrossOriginStorageManager;
    }

    interface WorkerNavigator {
        readonly crossOriginStorage: CrossOriginStorageManager;
    }
}
