export = EngineClusterNode;
declare function EngineClusterNode(): void;
declare class EngineClusterNode {
    addresses: string[];
    httpsPorts: number[];
    httpPorts: number[];
    engineId: string;
    name: string;
    dbName: string;
    maxThreads: number;
    tryNewConnection(): Connection;
    tryNewDatabase(): Database;
}
declare namespace EngineClusterNode {
    function fromConfig(key: number): EngineClusterNode;
}
import Connection = require('../connection/Connection.js');
import Database = require('../database/Database.js');
