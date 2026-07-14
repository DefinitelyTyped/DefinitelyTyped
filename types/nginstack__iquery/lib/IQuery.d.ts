export = IQuery;
declare function IQuery(): void;
declare class IQuery {
    private _joinManager;
    private _checkPermission;
    private iClauseWhereManager_;
    private _leftJoinIQuery;
    private _permissionJoins;
    private userKey;
    column(field: IClauseSelect | Record<any, any>, ...args: any[]): IClauseSelect;
    from(classKey: number, alias: any): IQuery;
    private _iClauseFrom;
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
    export { DBKey, defaultCheckPermission, from, IClauseJoin };
}
import IClauseSelect = require("./IClauseSelect.js");
import IJoinManager = require("./IJoinManager.js");
import IClauseFrom = require("./IClauseFrom.js");
declare let defaultCheckPermission: boolean;
declare let from: any;
type DBKey = import("@nginstack/engine/lib/dbkey/DBKey");
type IClauseJoin = import("./IClauseJoin");
