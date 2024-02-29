export = FileSynchronizer;
declare function FileSynchronizer(
    localPath: string,
    remotePath: string,
    db: import('../database/Database') | import('../connection/Connection')
): void;
declare class FileSynchronizer {
    constructor(
        localPath: string,
        remotePath: string,
        db: import('../database/Database') | import('../connection/Connection')
    );
    syncLocal(): void;
    syncRemote(): void;
    deletedFileCount: number;
    receivedFileCount: number;
    sentFileCount: number;
    preserveDeletedFiles: boolean;
    includeFilters: string;
    excludeFilters: string;
}
