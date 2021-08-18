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
    getServerDate(forced: boolean): void;
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
    getDataSet(sqlOrArrayOfSql: string | string[], options?: any): void;
    cloneLocalCache(tableName: string): void;
    copyStructureLocalCache(tableName: string): void;
    getPermission(
        classKeyOrVfsKey: number,
        permissionFieldName: string,
        userKey: number | null,
        getMode: string | null,
        extraFilter: string | null
    ): void;
    getChildren(classKey: number | string, userKey?: number, permissionFieldName?: string): void;
    getHierarchicalClass(
        startClass: number,
        endClass: number,
        level?: number,
        opt_separator?: string,
        opt_bringClassesKeys?: boolean
    ): void;
    cloneLocalCacheByClass(
        classKey: number,
        userKeyPermissionViewFilter?: number,
        securityExtraFilter?: any[]
    ): void;
    cloneVfsByClass(
        classKey: any,
        userKeyPermissionViewFilter: any,
        securityExtraFilter: any
    ): void;
    createKey(keysQuantity: number | null, getHighKeys: number | null): void;
    getKeyOfClass(className: string): void;
    applyUpdates(ArrayOfDataSets: DataSet | DataSet[], insertIntoLogTable: boolean | null): number;
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
    ): void;
    getReferences(
        key: number,
        tableName: string,
        maxReturnCount: number | null,
        ignoredTables: string[] | null
    ): DataSet;
    classHierarchicalProperty(classNameOrKey: number | string, propertyName: string): any;
    getChangeableLicenses(userKey: number): any[];
    setChangeableLicenses(userKey: number, licenseKeys: any[], passwords: any[]): void;
    getIssuableLicenses(userKey: any): any[];
    setIssuableLicenses(userKey: number, licenseKeys: any[], passwords: any[]): void;
    getLicenseFromNegativeRecord(key: any): number;
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
    getExecutionPlan(sqlExpression: string): void;
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
    ): any;
    sendMail(mail: any): void;
    scheduledSendMail(mail: any, maxSize?: number): void;
    newTask(task: any, userName: string | null, password: string | null): void;
    skipSatSunHoliday(dt: Date, uf: number | null, localidade: number | null): Date;
    getUserGroups(userKey: number): any[];
    isUserInGroup(userKey: number, groupKey: number): boolean;
}
declare namespace Connection {
    export { fromConfig, Database };
}
type Database = import('../database/Database');
import DataSet = require('../dataset/DataSet.js');
import DBKey = require('../dbkey/DBKey.js');
declare function fromConfig(key: DBKey | number): Connection;
