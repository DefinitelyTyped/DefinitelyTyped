export = GridExporter;
declare function GridExporter(grid: Grid): void;
declare class GridExporter {
    constructor(grid: Grid);
    title: string;
    grid: Grid;
    dataSet: import('@nginstack/engine/lib/dataset/DataSet');
    private _addFields;
    fieldIsExportable(field: GridField): boolean;
}
declare namespace GridExporter {
    export { Grid, GridField };
}
type Grid = import('./Grid');
type GridField = import('./GridField');
