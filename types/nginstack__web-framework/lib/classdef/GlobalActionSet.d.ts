export = GlobalActionSet;
declare function GlobalActionSet(): void;
declare class GlobalActionSet {
    private items_;
    onShow: LegacyEvent;
    add(action: any): void;
    get(name: string): GlobalAction;
    delete(name: string): boolean;
    clear(): void;
    getAll(): GlobalAction[];
    isEmpty(): boolean;
    clone(): GlobalActionSet;
}
import GlobalAction = require('./GlobalAction.js');
