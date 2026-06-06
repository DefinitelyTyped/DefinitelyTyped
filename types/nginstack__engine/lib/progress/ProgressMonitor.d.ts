export = ProgressMonitor;
declare function ProgressMonitor(): void;
declare class ProgressMonitor {
    getTaskProgressStackUpdate(statusArray: TaskProgressStatusArray, threadId: number): boolean;
}
declare namespace ProgressMonitor {
    export { TaskProgressStatusArray };
}
type TaskProgressStatusArray = import('./TaskProgressStatusArray');
