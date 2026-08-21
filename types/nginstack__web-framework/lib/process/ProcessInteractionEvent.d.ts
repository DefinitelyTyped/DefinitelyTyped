export = ProcessInteractionEvent;
declare function ProcessInteractionEvent(...args: any[]): void;
declare class ProcessInteractionEvent {
    constructor(...args: any[]);
    process: Process;
    interactionName: string;
}
declare namespace ProcessInteractionEvent {
    export { Process };
}
type Process = import("./Process.js");
