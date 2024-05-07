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
    export { DataExporterFieldDef, DataSet, exportedFileLifetime, purgeExpiredExportedFiles, tempExportDir };
}
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
declare let tempExportDir: string;
declare function purgeExpiredExportedFiles(): void;
declare let exportedFileLifetime: number;
type DataExporterFieldDef = import("./DataExporterFieldDef");
