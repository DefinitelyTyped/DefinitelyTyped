export = GridFieldEvent;
declare function GridFieldEvent(...args: any[]): void;
declare class GridFieldEvent {
    constructor(...args: any[]);
    grid: Grid;
    process: Process;
}
declare namespace GridFieldEvent {
    export { Grid, Process };
}
type Grid = import('../grid/Grid');
type Process = import('../process/Process');
