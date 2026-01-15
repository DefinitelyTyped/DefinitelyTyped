export = IClauseWhereManager;
declare function IClauseWhereManager(owner: any): void;
declare class IClauseWhereManager {
    private constructor();
    private owner_;
    private whereGroup_;
    private getWhereGroup;
    private fetch;
    getWhereSql(): string;
    makeClauseWhere(iQuery: IQuery, literalClause: any, join?: boolean): IClauseWhere;
}
declare namespace IClauseWhereManager {
    export { IQuery, IClauseWhere };
}
type IQuery = import('./IQuery');
type IClauseWhere = import('./IClauseWhere');
