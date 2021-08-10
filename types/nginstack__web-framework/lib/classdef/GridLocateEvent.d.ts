export = GridLocateEvent;
declare function GridLocateEvent(...args: any[]): void;
declare class GridLocateEvent {
    constructor(...args: any[]);
    foundWasInformed_: boolean;
    value: string;
    options: number[];
    found: boolean;
    locatedField: any;
    private locateResult_;
}
