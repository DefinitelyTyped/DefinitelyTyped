export = QueryUtilities;
declare function QueryUtilities(): void;
declare class QueryUtilities {
    maxInOperatorListLength: number;
    clauseWhereOfKeys(
        prefixWhereAndOr: string,
        fieldName: string,
        keys: number | string,
        negation?: boolean,
        split?: boolean,
        operatorConcat?: string,
        countKeysForSplit?: number,
        ...args: any[]
    ): string;
    clauseWhereOfChar(
        prefixWhereAndOr: string,
        columnName: string,
        value: string | string[],
        negation?: boolean
    ): string;
    clauseWhereOfStrings(
        prefixWhereAndOr: string,
        columnName: string,
        value: string | string[],
        negation?: boolean
    ): string;
    clauseWhere(prefixWhereAndOr: string, fieldName: string, operator: string, value: any): string;
}
declare namespace QueryUtilities {
    function getInstance(): QueryUtilities;
}
