export = Connection;
declare function Connection(host: string | Database, opt_dbName?: string): void;
declare class Connection {
    constructor(host: string | Database, opt_dbName?: string);
    private _tables;
    private classDefManager_;
    workloadType: string;
    dbType: string;
    dbName: string;
    dbServerHost: string;
    dbServerPort: string;
    remainingKeys: number;
    trackingId: string;
    remainingHighKeys: number;
    serverDate: Date;
    serverVersion: string;
    isOnline: boolean;
    readTimeout: number;
    writeTimeout: number;
    referrer: string;
    enabled: boolean;
    userKey: number;
    remoteInstanceId: string;
    userName: number;
    protocol: string;
    login(userName: string, password: string): boolean;
    logout(): void;
    executeSql(sqlExpression: string | string[]): void;
    getDataSet(sqlOrArrayOfSql: string | string[], options?: any): DataSet | DataSet[];
    cloneLocalCache(tableName: string): DataSet;
    copyStructureLocalCache(tableName: string): void;
    getPermission(
        classKeyOrVfsKey: number,
        permissionFieldName: string,
        userKey: number | null,
        getMode: string | null,
        extraFilter: string | null
    ): any;
    getChildren(classKey: number | string, userKey?: number, permissionFieldName?: string): string;
    getHierarchicalClass(
        startClass: number,
        endClass: number,
        level?: number,
        opt_separator?: string,
        opt_bringClassesKeys?: boolean
    ): string;
    cloneLocalCacheByClass(
        classKey: number,
        userKeyPermissionViewFilter?: number,
        securityExtraFilter?: any[]
    ): DataSet;
    cloneVfsByClass(
        classKey: any,
        userKeyPermissionViewFilter: any,
        securityExtraFilter: any
    ): DataSet;
    createKey(keysQuantity?: number, getHighKeys?: number): number;
    getKeyOfClass(className: string): number;
    applyUpdates(
        ArrayOfDataSets: DataSet | DataSet[],
        insertIntoLogTable: boolean | null
    ): number;
    get(className: string, codeOrKey: string, fieldName: string): any;
    getDatabaseNames(): string;
    refreshLocalCache(waitDataRefreshing?: boolean): void;
    authenticateUser(userName: string, password: string, useLocalCache: boolean | null): number;
    setPassword(userKey: DBKey | number, password: string): void;
    executeScript(
        scriptReference: number | string,
        parametersNames?: any,
        parametersValues?: any[]
    ): void;
    getClassDefinitionSource(
        classKey: DBKey | number,
        vfs: DataSet | null,
        classes: DataSet | null,
        ignoredClassKeys: number[]
    ): string;
    getReferences(
        key: number,
        tableName: string,
        maxReturnCount: number | null,
        ignoredTables: string[] | null
    ): DataSet;
    classHierarchicalProperty(classNameOrKey: number | string, propertyName: string): any;
    getChangeableLicenses(userKey: number): number[];
    setChangeableLicenses(
        userKey: number,
        licenseKeys: number[],
        passwords: string[]
    ): void;
    getIssuableLicenses(userKey: number): number[];
    setIssuableLicenses(userKey: number, licenseKeys: any[], passwords: any[]): void;
    getLicenseFromNegativeRecord(key: number): number;
    userCanChangeNegativeRecord(key: number, opt_userKey?: number): boolean;
    createKeyRange(
        keyRangeName: string,
        quantity: number,
        keyList?: string,
        requiredLicenses?: string,
        key?: number,
        base?: number,
        userName?: string,
        password?: string
    ): void;
    addKeyRange(keyRangeStream: string, password: string): void;
    changeLicensePassword(key: number, password: string, newPassword: string): void;
    createLicense(
        keyRangeKey: number,
        licenserKey: number,
        licenseType: string,
        quantity: number,
        expiration: Date,
        licenseeName: string,
        licenseeId: string,
        userName: string,
        password: string
    ): void;
    addLicense(licenseStream: string, administratorPassword: string): void;
    getVfsContent(vfsScriptKey: number): string;
    getExecutionPlan(sqlExpression: string): DataSet;
    insertLog(
        logType: number,
        opt_content: string | null,
        opt_key: number | null,
        opt_classKey: number | null
    ): void;
    isChildOf(key: number, parent: number): boolean;
    discardEndpointInfoCache(): void;
    isCachedData(classKey: number, tableName: string): boolean;
    instanceClassDefinition(
        classKeyOrSource: number | string,
        iVfsOrParentKey?: DataSet | number,
        iClass?: DataSet
    ): ModelDef;
    sendMail(mail: Mail): void;
    scheduledSendMail(mail: Mail, maxSize?: number): void;
    newTask(task: Task, userName: string | null, password: string | null): void;
    skipSatSunHoliday(dt: Date, uf: number | null, localidade: number | null): Date;
    getUserGroups(userKey: number): number[];
    isUserInGroup(userKey: number, groupKey: number): boolean;
    getTimezoneOffset(): number;
}
declare namespace Connection {
    export { fromConfig, Database, ModelDef, Mail, Task };
}
type Database = import('../database/Database');
import DataSet = require('../dataset/DataSet.js');
import DBKey = require('../dbkey/DBKey.js');
type ModelDef = import('../classdef/ModelDef');
type Mail = import('../mail/Mail');
type Task = import('../scheduler/Task');
declare function fromConfig(key: DBKey | number): Connection;
