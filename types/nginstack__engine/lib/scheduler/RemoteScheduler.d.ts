export = RemoteScheduler;
declare function RemoteScheduler(database: any): void;
declare class RemoteScheduler {
    constructor(database: any);
    private database_;
    private runAction_;
    maxSimultaneousTasks: number;
    getTasks(options?: { scriptKey?: string; scriptURI?: string }): any;
    saveTasks(tasks: any, userName?: string, password?: string): void;
    delTasks(taskIds: string | string[], userName?: string, password?: string): void;
    startTasks(taskIds: string | string[]): void;
    stopTasks(taskIds: string | string[]): void;
}
