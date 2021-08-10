export = IQuery;
declare function IQuery(): void;
declare class IQuery {
    _joinManager: IJoinManager;
    _checkPermission: boolean;
    iClauseWhereManager_: IClauseWhereManager;
    private _leftJoinIQuery;
    private _permissionJoins;
    private userKey;
    column(field: IClauseSelect | Record<any, any>, ...args: any[]): IClauseSelect;
    from(classKey: number, alias: any): IQuery;
    _iClauseFrom: IClauseFrom;
    innerJoin(iQueryJoin: any): IClauseJoin;
    leftOuterJoin(iQueryJoin: any): IClauseJoin;
    where(where: any): IQuery;
    validatePermission: number;
    uncheckPermission(): IQuery;
    checkPermission(): IQuery;
    joinManager: IJoinManager;
    getLeftJoinIQuery(): IClauseJoin;
    getWhereSql(join?: boolean): string;
    clauseFrom: IClauseFrom;
    whereClauseCount: number;
    toSql(): string;
}
declare namespace IQuery {
    export { defaultCheckPermission, from, DBKey, IClauseJoin };
}
import IJoinManager = require('./IJoinManager.js');
import IClauseWhereManager = require('./IClauseWhereManager.js');
import IClauseSelect = require('./IClauseSelect.js');
import IClauseFrom = require('./IClauseFrom.js');
type IClauseJoin = import('./IClauseJoin');
declare var defaultCheckPermission: boolean;
declare var from: any;
type DBKey = import('@nginstack/engine/lib/dbkey/DBKey');
