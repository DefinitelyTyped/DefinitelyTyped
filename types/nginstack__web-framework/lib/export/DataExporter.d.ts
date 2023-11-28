export = DataExporter;
declare function DataExporter(): void;
declare class DataExporter {
    fields: any[];
    private fieldIndexesByName_;
    private logger_;
    title: string;
    dataSet: any;
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
declare let tempExportDir: string;
declare function purgeExpiredExportedFiles(): void;
declare let exportedFileLifetime: number;
type DataSet = any;
type DataExporterFieldDef = import('./DataExporterFieldDef');
