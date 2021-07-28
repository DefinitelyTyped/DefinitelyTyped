export = IJoinManager;
declare function IJoinManager(parent: any): void;
declare class IJoinManager {
    constructor(parent: any);
    _joins: any[];
    _implicitJoinsFieldNames: any;
    _iQuery: IQuery;
    createImplicitJoin(fieldName: string, operator: any, value: any): object;
    createExplicitJoin(iQueryJoin: IQuery, type: any): IClauseJoin;
    iQueryInJoinList(iQuery: IQuery): boolean;
    fieldCanBeNull(fieldName: string): boolean;
    getJoinSql(): string;
    getWhereSql(): string;
    getColumnsNames(): {
        completeColumnsNames: any[];
        simpleColumnsNames: any[];
    };
}
import IQuery = require('./IQuery.js');
import IClauseJoin = require('./IClauseJoin.js');
