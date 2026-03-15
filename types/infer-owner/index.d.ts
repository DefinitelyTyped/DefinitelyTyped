interface OwnerResult {
    uid: number;
    gid: number;
}

/**
 * Infer the owner of a path by examining the filesystem hierarchy.
 * If the path doesn't exist, walks up the directory tree.
 */
declare function inferOwner(path: string): Promise<OwnerResult>;

declare namespace inferOwner {
    /**
     * Synchronous version of ownership inference.
     */
    function sync(path: string): OwnerResult;

    /**
     * Clear the internal caches.
     */
    function clearCache(): void;
}

export = inferOwner;
