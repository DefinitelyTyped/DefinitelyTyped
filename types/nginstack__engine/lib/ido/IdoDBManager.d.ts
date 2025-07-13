export = IdoDBManager;
declare function IdoDBManager(): void;
declare class IdoDBManager {
    createDatabase(name: string): IdoDB;
    createTempDatabase(
        dbName?: string,
        options?: {
            autoDrop?: boolean;
        }
    ): IdoDB;
    databaseExists(name: string): boolean;
    loadDatabase(name: string): IdoDB;
    deleteDatabase(name: string): void;
    renameDatabase(oldName: string, newName: string): void;
}
declare namespace IdoDBManager {
    export { IdoDB };
}
type IdoDB = import('./IdoDB');
