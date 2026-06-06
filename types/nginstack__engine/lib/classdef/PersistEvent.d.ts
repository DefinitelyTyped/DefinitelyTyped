export = PersistEvent;
declare function PersistEvent(...args: any[]): void;
declare class PersistEvent {
    constructor(...args: any[]);
    action: ApplyUpdatesAction;
    key: number;
    classKey: number;
}
import ApplyUpdatesAction = require('../dataset/ApplyUpdatesAction.js');
