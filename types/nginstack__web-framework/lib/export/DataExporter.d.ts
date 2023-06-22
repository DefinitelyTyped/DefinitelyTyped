export = DataExporter;
declare function DataExporter(): void;
declare class DataExporter {
    fields: any[];
    private fieldIndexesByName_;
    private logger_;
    title: string;
    dataSet: DataSet;
    addField(field: DataExporterFieldDef): void;
    getField(fieldIdxOrName: number | string): DataExporterFieldDef;
    formatFieldValue(field: DataExporterFieldDef, showLookupKeys?: boolean): string;
    private _getLookupValue;
    orderedGroupFields(): Array<{
        fieldName: string;
        originalIndex: number;
    }>;
}
declare namespace DataExporter {
    export {
        tempExportDir,
        purgeExpiredExportedFiles,
        exportedFileLifetime,
        DataSet,
        DataExporterFieldDef,
    };
}
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
type DataExporterFieldDef = import('./DataExporterFieldDef');
declare var tempExportDir: string;
declare function purgeExpiredExportedFiles(): void;
declare var exportedFileLifetime: number;
