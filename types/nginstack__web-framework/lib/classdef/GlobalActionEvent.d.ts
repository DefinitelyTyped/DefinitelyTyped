export = GlobalActionEvent;
declare function GlobalActionEvent(...args: any[]): void;
declare class GlobalActionEvent {
    constructor(...args: any[]);
    key: number;
    target: import("./GlobalAction.js") | import("./GlobalActionSet.js");
}
