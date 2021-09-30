export = IClauseWhereManager;
declare function IClauseWhereManager(owner: any): void;
declare class IClauseWhereManager {
    constructor(owner: any);
    private owner_;
    private whereGroup_;
    private getWhereGroup;
    private fetch;
    getWhereSql(): string;
    makeClauseWhere(iQuery: any, literalClause: any, join?: boolean): any;
}
