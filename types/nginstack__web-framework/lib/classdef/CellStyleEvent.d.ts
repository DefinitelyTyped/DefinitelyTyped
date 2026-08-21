export = CellStyleEvent;
declare function CellStyleEvent(...args: any[]): void;
declare class CellStyleEvent {
    constructor(...args: any[]);
    cssStyle: Record<string, string>;
}
