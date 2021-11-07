export = OpenKeyEvent;
declare function OpenKeyEvent(...args: any[]): void;
declare class OpenKeyEvent {
    constructor(...args: any[]);
    process: any;
    value: (number | (string | null)) | null;
    classKey: number;
    lookupType: any;
}
