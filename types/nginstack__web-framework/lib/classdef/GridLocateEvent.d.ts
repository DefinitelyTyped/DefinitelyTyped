export = GridLocateEvent;
declare function GridLocateEvent(...args: any[]): void;
declare class GridLocateEvent {
    constructor(...args: any[]);
    private foundWasInformed_;
    value: string;
    options: number[];
    found: boolean;
    locatedField: any;
    private locateResult_;
}
