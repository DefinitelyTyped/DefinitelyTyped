export = UpdateScript;
declare function UpdateScript(): void;
declare class UpdateScript {
    private connection_;
    private scriptKey;
    sourceDB: Database;
    source: Connection;
    targetDB: Database;
    target: Connection;
    private versions_;
    private sysEvent_;
    result: string;
    private state_;
    private result_;
    private logger_;
    finish(result: string, updateVersion: number): void;
    fail(error: Error): void;
    private getGlobalObject_;
    private prepare_;
    private createSysEvent_;
    getProductFromKey(key: number): number | null;
    copyChildrenViewPermissions(directoryKey: number): number;
}
declare namespace UpdateScript {
    export { EndPointConfig, execute, ExecutionParams, ExecutionResult };
}
import Database = require("@nginstack/engine/lib/database/Database.js");
import Connection = require("@nginstack/engine/lib/connection/Connection.js");
declare function execute(params: ExecutionParams): ExecutionResult;
interface EndPointConfig {
    host: string;
    dbName: string;
    userName: string;
    password: string;
    authToken: string;
}
interface ExecutionParams {
    scriptKey: number;
    sourceConfig: EndPointConfig;
    targetConfig: EndPointConfig;
}
interface ExecutionResult {
    state: number;
    result: string;
    versions: string[];
}
