export = ProcessErrorEvent;
declare function ProcessErrorEvent(...args: any[]): void;
declare class ProcessErrorEvent {
    constructor(...args: any[]);
    error: any;
    dialogTitle: string;
}
