export = PendingTaskManager;
declare function PendingTaskManager(): void;
declare class PendingTaskManager {
    private vfs_;
    private classes_;
    private runners_;
    pendingTasks_: DataSet;
    tempPendingTasks_: DataSet;
    private logger_;
    private getIncludeOnce_;
    private getChildrenWithoutXPending_;
    private getRunner_;
    private persistChanges_;
    private mustUpdate_;
    private notifyUpdated_;
    updatePendingTasks(taskClass?: number | DBKey): void;
    dispatchPendingTask(taskClass: any): void;
    scheduleUpdate(): void;
    updateIfMaster(): boolean;
}
declare namespace PendingTaskManager {
    export { PendingTaskScript };
}
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
interface PendingTaskScript {
    key: number;
    func: any;
}
