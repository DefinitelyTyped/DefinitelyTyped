export = QueryUtilities;
declare function QueryUtilities(): void;
declare class QueryUtilities {
    clauseWhereOfKeys(
        prefixWhereAndOr: string,
        fieldName: string,
        keys: number | string,
        negation?: boolean,
        split?: boolean,
        operatorConcat?: string,
        countKeysForSplit?: number,
        dbType?: any,
        ...args: any[]
    ): string;
    clauseWhereOfChar(
        prefixWhereAndOr: string,
        fieldName: string,
        value: string,
        negation?: boolean
    ): string;
    clauseWhere(prefixWhereAndOr: string, fieldName: string, operator: string, value: any): string;
}
declare namespace QueryUtilities {
    function getInstance(): QueryUtilities;
}
