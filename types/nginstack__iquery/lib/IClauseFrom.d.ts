export = IClauseFrom;
declare function IClauseFrom(iQuery: IQuery, classKey: number, alias: string): void;
declare class IClauseFrom {
    constructor(iQuery: IQuery, classKey: number, alias: string);
    private _classKey;
    private _classDefManager;
    private _instanceClass;
    private _fieldsCache;
    private _permissionJoins;
    iQuery: IQuery;
    private _joinManager;
    private _alias;
    joinManager: IJoinManager;
    extraFilter: any[];
    permissionFields: any[];
    classKey: number;
    classFieldName: string;
    keyFieldName: string;
    private _getFieldFromXClass;
    private getFieldClassKey;
    private isFieldClass;
    private isFieldRequired;
    private getFieldType;
    private getFieldStringIfTrue;
    fieldCanBeNull(fieldName: string): boolean;
    tableName: string;
    xClassTableName: string;
    private _createPermissionJoins;
    getFromSql(): string;
    getWhereSql(join?: boolean): string;
}
declare namespace IClauseFrom {
    function createSequenceAlias(): number;
    function resetSequenceAlias(): void;
}
import IQuery = require('./IQuery.js');
import IJoinManager = require('./IJoinManager.js');
