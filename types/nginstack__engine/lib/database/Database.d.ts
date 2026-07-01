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
    workloadType: string;
    trackingId: string;
    scope: string;
    referrer: string;
    protocol: string;
    readTimeout: number;
    writeTimeout: number;
    authenticateUser(userId: string, password: string): number;
    login(userId: string, password: string): boolean;
    loginByAuthToken(authToken: string): void;
    loginBySession(session: Session): boolean;
    logout(): void;
    query(
        sql: string | string[],
        options?: {
            queryCacheLifeTime?: number;
            workloadType?: string;
        }
    ): DataSet | DataSet[];
    parallelQuery(
        sqls: string[],
        options?: {
            workloadType?: string;
            workers?: number;
        }
    ): DataSet[];
    executeSQL(sql: string | string[]): void;
    executeDDL(statement: string): void;
    createKey(keysQty: number, useHighKeys?: boolean): number;
    incVersion(): number;
    applyUpdates(dataSets: DataSet | DataSet[], logChanges?: boolean): number;
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
    archiveLog(
        options: ArchiveLogOptionsByTableClass | ArchiveLogOptionsByType
    ): ArchiveLogFileInfo[];
    restoreLog(filePath: string, options?: RestoreLogOptions): ArchiveLogFileInfo;
    sendPendingLogs(wait?: boolean, timeout?: number): boolean;
    discardEndpointInfoCache(): void;
    discardCaches(): void;
    sendEmail(email: Email): void;
    userHasScope(userKey: DBKey | number, scope: string | DBKey | number): boolean;
    isEdgeServer(): boolean;
}
declare namespace Database {
    export {
        fromConfig,
        Email,
        Session,
        VersionInfo,
        DatabaseVersionInfo,
        ArchiveLogOptionsByTableClass,
        ArchiveLogOptionsByType,
        RestoreLogOptions,
        ArchiveLogFileInfo,
    };
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
interface ArchiveLogOptionsByTableClass {
    tableClass: number;
    includedClasses?: number[];
    excludedClasses?: number[];
    retentionInDays: number;
    storageProvider?: number;
    tag?: string;
}
interface ArchiveLogOptionsByType {
    logType: number;
    retentionInDays: number;
    storageProvider?: number;
    tag?: string;
}
interface RestoreLogOptions {
    retentionInDays?: number;
    storageProvider?: number;
    dryRun?: boolean;
}
interface ArchiveLogFileInfo {
    eventKey: number | null;
    path: string;
    storageProvider: number | null;
    logDate: Date;
    archiveDate: Date;
    recordCount: number;
    recordCountPerClassKey: Record<string, number>;
    recordCountPerTableName: Record<string, number>;
}
