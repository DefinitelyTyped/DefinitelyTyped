export = ButtonEvent;
declare function ButtonEvent(...args: any[]): void;
declare class ButtonEvent {
    constructor(...args: any[]);
    target: import("./Button.js");
    button: import("./Button.js");
    grid: Grid | null;
    process: Process;
}
