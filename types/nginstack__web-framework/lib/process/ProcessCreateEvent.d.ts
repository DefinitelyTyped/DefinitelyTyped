export = ProcessCreateEvent;
declare function ProcessCreateEvent(...args: any[]): void;
declare class ProcessCreateEvent {
    constructor(...args: any[]);
    process: Process;
}
declare namespace ProcessCreateEvent {
    export { Process };
}
type Process = import('./Process');
