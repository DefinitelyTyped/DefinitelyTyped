export = IdoDBManager;
declare function IdoDBManager(): void;
declare class IdoDBManager {
    createDatabase(name: string): void;
    createTempDatabase(alias: string): IdoDB;
    databaseExists(name: string, searchInTempDBs: boolean): boolean;
    loadDatabase(name: string): IdoDB;
    deleteDatabase(name: string): void;
    renameDatabase(oldName: string, newName: string): void;
}
declare namespace IdoDBManager {
    export { IdoDB };
}
type IdoDB = import('./IdoDB');
