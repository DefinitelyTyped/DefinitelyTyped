/// <reference types="node" />

/**
 * @param pathToCache - the path to the cache file (this combines the cache name and directory
 * @param useCheckSum - Whether to use md5 checksum to verify if file changed.
 * If false the default will be to use the mtime and size of the file
 */
export function createFromFile(pathToCache: string, useCheckSum?: boolean): FileEntryCache;

/**
 * @param cacheName - the name of the cache to be created
 * @param directory - the directory to load the cache from
 * @param usecheckSum - Whether to use md5 checksum to verify if file changed.
 * If false the default will be to use the mtime and size of the file
 */
export function create(cacheName: string, directory?: string, usecheckSum?: boolean): FileEntryCache;

export interface FileEntryCache {
    /** the flat cache storage used to persist the metadata of the `files */
    cache: object;
    /** Given a buffer, calculate md5 hash of its content. */
    getHash(buffer: Buffer): string;
    /**  Return whether or not a file has changed since last time reconcile was called */
    hasFileChanged(file: string): boolean;
    /**
     * given an array of file paths it return and object with three arrays:
     *  - changedFiles: Files that changed since previous run
     *  - notChangedFiles: Files that haven't change
     *  - notFoundFiles: Files that were not found, probably deleted
     */
    analyzeFiles(files?: string[]): AnalyzedFilesInfo;
    getFileDescriptor(file: string): FileDescriptor;
    /**
     * Return the list o the files that changed compared
     * against the ones stored in the cache
     */
    getUpdatedFiles(files?: string[]): string[];
    /**
     * return the list of file
     */
    normalizeEntries(files?: string[]): FileDescriptor[];
    /**
     * Remove an entry from the file-entry-cache.
     * Useful to force the file to still be considered
     * modified the next time the process is run
     */
    removeEntry(entryName: string): void;
    /**
     * Delete the cache file from the disk
     */
    deleteCacheFile(): void;
    /**
     * remove the cache from the file and clear the memory cache
     */
    destroy(): void;
    /**
     * Sync the files and persist them to the cache
     */
    reconcile(noPrune?: boolean): void;
}

export interface AnalyzedFilesInfo {
    readonly changedFiles: string[];
    readonly notFoundFiles: string[];
    readonly notChangedFiles: string[];
}

export interface FileDescriptor {
    readonly key: string;
    readonly notFound: boolean;
    readonly err?: Error | undefined;
    readonly changed?: boolean | undefined;
    readonly meta?: {
        readonly size?: number | undefined;
        readonly mtime?: number | undefined;
        readonly hash?: string | undefined;
    } | undefined;
}
