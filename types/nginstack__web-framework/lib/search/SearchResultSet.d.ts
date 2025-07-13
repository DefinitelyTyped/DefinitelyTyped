export = SearchResultSet;
declare function SearchResultSet(): void;
declare class SearchResultSet {
    result_: DataSet;
    length: number;
    add(item: SearchResultItem | SearchResultItem[]): void;
    getResult(): DataSet;
    private createInternalDataSet_;
    toString(): string;
}
declare namespace SearchResultSet {
    export { SearchResultItem };
}
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
interface SearchResultItem {
    key: string;
    classKey: DBKey | number;
    description: string;
    group: string;
    icon?: string;
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
