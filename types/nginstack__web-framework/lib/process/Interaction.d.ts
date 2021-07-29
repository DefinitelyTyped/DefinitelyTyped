export = Interaction;
declare function Interaction(
    process: any,
    name: any,
    functionOfInteraction: any,
    onExitFunction: any
): void;
declare class Interaction {
    constructor(process: any, name: any, functionOfInteraction: any, onExitFunction: any);
    process: any;
    functions: LegacyEvent;
    name: string;
    onExit: LegacyEvent;
    private memoryProfiler_;
    private lastExecuteOk;
    private isInteractive;
    private withUserInteraction;
    private logger_;
    private running;
    private permissionKeyWord;
    private run;
    close(): void;
}
import LegacyEvent = require('@nginstack/engine/lib/event/LegacyEvent.js');
