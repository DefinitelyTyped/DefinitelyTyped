export = GridExporter;
declare function GridExporter(grid: any): void;
declare class GridExporter {
    constructor(grid: any);
    title: any;
    grid: any;
    dataSet: any;
    private _addFields;
    fieldIsExportable(field: any): boolean;
}
