export = NeDBLoggerDataStore;
export as namespace NedbLogger;

declare namespace NeDBLoggerDataStore {}
declare class NeDBLoggerDataStore {
    constructor(path?: string | { filename: string });

    /**
     * Insert a new document
     * @param cb Optional callback, signature: err, insertedDoc
     */
    insert<T>(newDoc: T, cb?: (err: Error, document: T) => void): void;
}
