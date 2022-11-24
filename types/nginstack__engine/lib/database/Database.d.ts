export = Database;
declare function Database(host: string | Connection, dbName: string): void;
declare class Database {
    constructor(host: string | Connection, dbName: string);
    dbName: string;
    serverHost: string;
    dbType: string;
    getVersionInfo(): DatabaseVersionInfo;
    uniqueId: string;
    date: Date;
    userKey: number;
    userName: string;
    userLanguage: number;
    workloadType: string;
    trackingId: string;
    referrer: string;
    protocol: string;
    authenticateUser(userId: string, password: string): number;
    login(userId: string, password: string): boolean;
    loginByAuthToken(idToken: string): void;
    loginBySession(session: Session): boolean;
    logout(): void;
    query(sql: string | string[], options?: any): DataSet | DataSet[];
    executeSQL(sql: string | string[]): void;
    executeDDL(statement: string): void;
    createKey(keysQty: number, useHighKeys?: boolean): number;
    incVersion(): number;
    applyUpdates(dataSets: DataSet | any[], log?: boolean): number;
    getReferences(
        key: number,
        tableName: string,
        maxReturnCount?: number,
        ignoredTables?: string
    ): DataSet;
    getExecutionPlan(sql: string): void;
    runScript(
        scriptKeyOrURI: number | string,
        parameters?: any,
        options?: {
            timeout?: number;
        }
    ): any;
    tableExists(tableName: string): boolean;
    viewExists(viewName: string): boolean;
    columnExists(tableOrViewName: string, columnName: string): boolean;
    sequenceExists(sequenceName: any): boolean;
    getVersion(): any[];
    getApproximatedVersion(): any[];
    insertLog(
        logType: number,
        options?: {
            content?: string;
            key?: number | DBKey;
            classKey?: number | DBKey;
            version?: boolean;
        }
    ): void;
    discardEndpointInfoCache(): void;
    discardCaches(): void;
    sendMail(mail: Mail): void;
    userHasScope(userKey: DBKey | number, scope: string | DBKey | number): boolean;
}
declare namespace Database {
    export { fromConfig, Mail, Session, VersionInfo, DatabaseVersionInfo };
}
import Connection = require('../connection/Connection.js');
interface DatabaseVersionInfo {
    server: VersionInfo;
    client: VersionInfo;
}
type Session = import('../session/Session');
import DataSet = require('../dataset/DataSet.js');
import DBKey = require('../dbkey/DBKey.js');
type Mail = import('../mail/Mail');
declare function fromConfig(key: DBKey | number): Database;
interface VersionInfo {
    major: number;
    minor: number;
    name: string;
}
