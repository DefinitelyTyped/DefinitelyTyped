export = LookupMultipleInsertEvent;
declare function LookupMultipleInsertEvent(...args: any[]): void;
declare class LookupMultipleInsertEvent {
    constructor(...args: any[]);
    lookupGrid: Process;
}
declare namespace LookupMultipleInsertEvent {
    export { Process };
}
type Process = import('../process/Process');
