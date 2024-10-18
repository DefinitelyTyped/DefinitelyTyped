export = LayoutManager;
declare function LayoutManager(responseObject: any): void;
declare class LayoutManager {
    constructor(responseObject: any);
    private responseObject;
    private id;
    private started;
    private colStarted;
    private rowStarted;
    private lastColumn;
    private max_col;
    private max_row;
    border: number;
    enabled: boolean;
    private reset;
    private begin;
    private end;
    add(obj: any, row: number, col: number, ...args: any[]): void;
    cellStarted: boolean;
    private _write;
    write(): void;
}
declare namespace LayoutManager {
    let INSTANCE_COUNT: number;
}
