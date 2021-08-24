export = DataExporter;
declare function DataExporter(): void;
declare class DataExporter {
    fields: any[];
    private fieldIndexesByName_;
    private _logger;
    title: string;
    dataSet: any;
    addField(field: any): void;
    getField(fieldIdxOrName: number | string): any;
    formatFieldValue(field: any, showLookupKeys?: boolean): string;
    private _getLookupValue;
    orderedGroupFields(): Array<{
        fieldName: string;
        originalIndex: number;
    }>;
}
declare namespace DataExporter {
    const tempExportDir: string;
    function purgeExpiredExportedFiles(): void;
    const exportedFileLifetime: number;
}
