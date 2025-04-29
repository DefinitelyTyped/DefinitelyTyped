export = GridLocateEvent;
declare function GridLocateEvent(...args: any[]): void;
declare class GridLocateEvent {
    constructor(...args: any[]);
    private foundWasInformed_;
    value: string;
    options: number[];
    found: boolean;
    locatedField: GridField;
    private locateResult_;
}
declare namespace GridLocateEvent {
    export { GridField };
}
type GridField = import('../grid/GridField');
