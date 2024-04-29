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
    loginByAuthToken(authToken: string): void;
    loginBySession(session: Session): boolean;
    logout(): void;
    query(sql: string | string[], options?: any): DataSet | DataSet[];
    executeSQL(sql: string | string[]): void;
    executeDDL(statement: string): void;
    createKey(keysQty: number, useHighKeys?: boolean): number;
    incVersion(): number;
    applyUpdates(dataSets: DataSet | any[], logChanges?: boolean): number;
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
            version?: number | DBKey;
            async?: boolean;
            tag?: string;
        }
    ): void;
    updateLogs(
        filters: {
            version?: number;
            tag?: string;
        },
        values: {
            freshTrack: boolean;
        }
    ): void;
    sendPendingLogs(wait?: boolean, timeout?: number): boolean;
    discardEndpointInfoCache(): void;
    discardCaches(): void;
    sendEmail(email: Email): void;
    userHasScope(userKey: DBKey | number, scope: string | DBKey | number): boolean;
}
declare namespace Database {
    export { fromConfig, Email, Session, VersionInfo, DatabaseVersionInfo };
}
import Connection = require('../connection/Connection.js');
import DataSet = require('../dataset/DataSet.js');
import DBKey = require('../dbkey/DBKey.js');
declare function fromConfig(key: DBKey | number): Database;
type Email = import('../email/Email');
type Session = import('../session/Session');
interface VersionInfo {
    major: number;
    minor: number;
    name: string;
}
interface DatabaseVersionInfo {
    server: VersionInfo;
    client: VersionInfo;
}
