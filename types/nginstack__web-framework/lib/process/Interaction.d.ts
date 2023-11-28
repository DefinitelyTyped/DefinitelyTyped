export = Interaction;
declare function Interaction(
    process: any,
    name: any,
    functionOfInteraction: any,
    onExitFunction: any
): void;
declare class Interaction {
    constructor(process: any, name: any, functionOfInteraction: any, onExitFunction: any);
    process: Process;
    functions: any;
    name: string;
    onExit: any;
    private lastExecuteOk;
    private isInteractive;
    private withUserInteraction;
    private logger_;
    private running;
    private permissionKeyWord;
    private run;
    close(): void;
}
declare namespace Interaction {
    export { Process };
}
type Process = import('./Process');
