export = ProgressMonitor;
declare function ProgressMonitor(): void;
declare class ProgressMonitor {
    getTaskProgressStackUpdate(statusArray: any, threadId: number): boolean;
}
