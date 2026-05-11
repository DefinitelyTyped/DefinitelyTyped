export = GlobalActionSet;
declare function GlobalActionSet(): void;
declare class GlobalActionSet {
    private items_;
    onShow: Adapter;
    add(action: GlobalAction): void;
    get(name: string): GlobalAction;
    delete(name: string): boolean;
    clear(): void;
    getAll(): GlobalAction[];
    isEmpty(): boolean;
    clone(): GlobalActionSet;
}
import Adapter = require("@nginstack/engine/lib/event/Adapter.js");
import GlobalAction = require("./GlobalAction.js");
