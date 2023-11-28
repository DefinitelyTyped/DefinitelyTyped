export = OpenKeyEvent;
declare function OpenKeyEvent(...args: any[]): void;
declare class OpenKeyEvent {
    constructor(...args: any[]);
    process: Process;
    value: (number | (string | null)) | null;
    classKey: number;
    lookupType: number;
}
declare namespace OpenKeyEvent {
    export { Process };
}
type Process = import('../process/Process');
