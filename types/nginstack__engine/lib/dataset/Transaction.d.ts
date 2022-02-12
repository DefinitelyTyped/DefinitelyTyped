export = Transaction;
declare function Transaction(opt_database?: Database | Connection): void;
declare class Transaction {
    constructor(opt_database?: Database | Connection);
    private database_;
    private data_;
    private dataById_;
    add(ds: DataSet): void;
    contains(ds: DataSet): boolean;
    get(id: string): DataSet;
    set(id: string, dataSet: DataSet): void;
    getOrSet(id: string, createFunc: () => DataSet): any;
    commit(): number;
    rollback(): void;
}
declare namespace Transaction {
    export { Database, Connection };
}
type Database = import('../database/Database');
type Connection = import('../connection/Connection');
import DataSet = require('./DataSet.js');
