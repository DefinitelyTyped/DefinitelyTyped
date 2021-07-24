export = IdoDBManager;
declare function IdoDBManager(): void;
declare class IdoDBManager {
    createDatabase(name: string): void;
    createTempDatabase(alias: string): any;
    databaseExists(name: string, searchInTempDBs: boolean): boolean;
    loadDatabase(name: string): any;
    deleteDatabase(name: string): void;
    renameDatabase(oldName: string, newName: string): void;
}
