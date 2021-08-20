export = IClauseFrom;
declare function IClauseFrom(iQuery: IQuery, classKey: number, alias: string): void;
declare class IClauseFrom {
    constructor(iQuery: IQuery, classKey: number, alias: string);
    _classKey: number;
    _classDefManager: ClassDefManager;
    _instanceClass: any;
    _fieldsCache: {};
    _permissionJoins: {};
    iQuery: IQuery;
    _joinManager: IJoinManager;
    _alias: string;
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
import ClassDefManager = require('@nginstack/engine/lib/classdef/ClassDefManager.js');
import IJoinManager = require('./IJoinManager.js');
