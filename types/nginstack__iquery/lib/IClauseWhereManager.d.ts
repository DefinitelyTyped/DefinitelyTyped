export = IClauseWhereManager;
declare function IClauseWhereManager(owner: any): void;
declare class IClauseWhereManager {
    constructor(owner: any);
    owner_: any;
    whereGroup_: any[];
    private getWhereGroup;
    private fetch;
    getWhereSql(): string;
    makeClauseWhere(iQuery: any, literalClause: any, join?: boolean): any;
}
