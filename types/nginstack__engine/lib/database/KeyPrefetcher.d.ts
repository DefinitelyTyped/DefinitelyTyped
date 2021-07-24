export = KeyPrefetcher;
declare function KeyPrefetcher(database?: Database | Connection): void;
declare class KeyPrefetcher {
    constructor(database?: Database | Connection);
    database_: Database | Connection;
    private logger_;
    private reservedQty_;
    private reservedBase_;
    reserve(qty: number): void;
    createKey(): number;
}
declare namespace KeyPrefetcher {
    export { Database, Connection };
}
type Database = import('../database/Database');
type Connection = import('../connection/Connection');
