export = GridEvent;
declare function GridEvent(...args: any[]): void;
declare class GridEvent {
    constructor(...args: any[]);
    grid: Grid;
    process: Process;
    masterGrid: Grid;
    masterData: DataSet;
}
declare namespace GridEvent {
    export { Grid, Process, DataSet };
}
type Grid = import('../grid/Grid');
type Process = import('../process/Process');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
