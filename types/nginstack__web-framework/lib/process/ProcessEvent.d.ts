export = ProcessEvent;
declare function ProcessEvent(...args: any[]): void;
declare class ProcessEvent {
    constructor(...args: any[]);
    process: Process;
}
declare namespace ProcessEvent {
    export { Process };
}
type Process = import('./Process');
