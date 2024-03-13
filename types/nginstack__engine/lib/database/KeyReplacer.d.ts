export = KeyReplacer;
declare function KeyReplacer(): void;
declare class KeyReplacer {
    references: DataSet;
    tableStructuresByName: {};
    segmentMaxDate: Date;
    segmentMinDate: Date;
    versions: number[];
    private logger_;
    private tableStructuresByName_;
    segmentInDays: number;
    private getTableFieldName_;
    private getFieldType_;
    private getMemoStringReplaced_;
    private updateTableByDateRange_;
    private updateTableWithDateRange_;
    private updateTableWithoutDateRange_;
    replaceKey(
        keyMatch: number,
        keyChange: number,
        tableName: string,
        ignoredTables: string,
        keysLimit: number,
        createLog: boolean
    ): number;
}
declare namespace KeyReplacer {
    let partitionDateFields_: Record<string, string>;
    function registerPartitionDateField(tableName: string, dateFieldName: string): void;
}
import DataSet = require('../dataset/DataSet.js');
