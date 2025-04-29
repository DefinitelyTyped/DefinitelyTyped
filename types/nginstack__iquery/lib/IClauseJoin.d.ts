export = IClauseJoin;
declare function IClauseJoin(
    iQuery: IQuery,
    iQueryJoin: IQuery,
    type: string,
    isRightTableAsSubquery: any
): void;
declare class IClauseJoin {
    constructor(iQuery: IQuery, iQueryJoin: IQuery, type: string, isRightTableAsSubquery: any);
    private _iQuery;
    private _iQueryJoin;
    private _type;
    private _clausesOn;
    private rightTableAsSubQuery_;
    isRightTableAsSubquery: boolean;
    iQuery: IQuery;
    iQueryJoin: IQuery;
    on(clause: any): IClauseJoin;
    private _addClause;
    getClauseOn(index: number): IClauseWhere;
    getClausesOnCount(): number;
    getJoinSql(): string;
    getWhereSql(): string;
    getColumnsNames(): object;
}
declare namespace IClauseJoin {
    export { IQuery, IClauseWhere, RightTableAsSubQueryConfig };
}
type IQuery = import('./IQuery');
type IClauseWhere = import('./IClauseWhere');
interface RightTableAsSubQueryConfig {
    isEnabled: boolean;
    clauseSelect: IClauseSelect;
    subQueryAlias: string;
}
import IClauseSelect = require('./IClauseSelect.js');
