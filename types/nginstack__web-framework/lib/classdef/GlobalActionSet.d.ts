export = GlobalActionSet;
declare function GlobalActionSet(): void;
declare class GlobalActionSet {
    items_: any;
    onShow: LegacyEvent;
    add(action: any): void;
    get(name: string): GlobalAction;
    delete(name: string): boolean;
    clear(): void;
    getAll(): GlobalAction[];
    isEmpty(): boolean;
    clone(): any;
}
import LegacyEvent = require('@nginstack/engine/lib/event/LegacyEvent.js');
import GlobalAction = require('./GlobalAction.js');
