export = GridExportEvent;
declare function GridExportEvent(...args: any[]): void;
declare class GridExportEvent {
    constructor(...args: any[]);
    exporter: GridExporter;
}
declare namespace GridExportEvent {
    export { Grid, GridExporter, GridField };
}
type Grid = import("./Grid");
type GridField = import("./GridField");
type GridExporter = import("./GridExporter");
