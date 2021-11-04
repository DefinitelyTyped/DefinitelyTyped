export = FileSynchronizer;
declare function FileSynchronizer(localPath: string, remotePath: string, connection: any): void;
declare class FileSynchronizer {
    constructor(localPath: string, remotePath: string, connection: any);
    syncLocal(): void;
    syncRemote(): void;
    deletedFileCount: number;
    receivedFileCount: number;
    sentFileCount: number;
    preserveDeletedFiles: boolean;
    includeFilters: string;
    excludeFilters: string;
}
