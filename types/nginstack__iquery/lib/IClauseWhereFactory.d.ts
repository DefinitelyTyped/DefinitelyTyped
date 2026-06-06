export = IClauseWhereFactory;
declare function IClauseWhereFactory(): void;
declare class IClauseWhereFactory {
    owner: IQuery | IClauseJoin;
    getClauseWhere(iQuery: IQuery, clause: Record<any, any>, join?: boolean): IClauseWhere;
    private _prepareField;
    private _setValue;
    private _prepareOperator;
}
declare namespace IClauseWhereFactory {
    export { IClauseJoin, IQuery };
}
import IClauseWhere = require("./IClauseWhere.js");
type IClauseJoin = import("./IClauseJoin");
type IQuery = import("./IQuery");
