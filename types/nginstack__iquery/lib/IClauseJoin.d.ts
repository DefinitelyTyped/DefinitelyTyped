export = IClauseJoin;
declare function IClauseJoin(
    iQuery: any,
    iQueryJoin: any,
    type: string,
    isRightTableAsSubquery: any
): void;
declare class IClauseJoin {
    constructor(iQuery: any, iQueryJoin: any, type: string, isRightTableAsSubquery: any);
    private _iQuery;
    private _iQueryJoin;
    private _type;
    private _clausesOn;
    private rightTableAsSubQuery_;
    isRightTableAsSubquery: boolean;
    iQuery: any;
    iQueryJoin: any;
    on(clause: any): IClauseJoin;
    private _addClause;
    getClauseOn(index: number): any;
    getClausesOnCount(): number;
    getJoinSql(): string;
    getWhereSql(): string;
    getColumnsNames(): object;
}
declare namespace IClauseJoin {
    export { RightTableAsSubQueryConfig };
}
interface RightTableAsSubQueryConfig {
    isEnabled: boolean;
    clauseSelect: IClauseSelect;
    subQueryAlias: string;
}
import IClauseSelect = require('./IClauseSelect.js');
