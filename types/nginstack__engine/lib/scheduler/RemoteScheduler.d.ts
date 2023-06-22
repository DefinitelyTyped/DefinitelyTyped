export = RemoteScheduler;
declare function RemoteScheduler(database: Database): void;
declare class RemoteScheduler {
    constructor(database: Database);
    private database_;
    private runAction_;
    maxSimultaneousTasks: number;
    getTasks(options?: { scriptKey?: string; scriptURI?: string }): DataSet;
    saveTasks(tasks: DataSet, userName?: string, password?: string): void;
    delTasks(taskIds: string | string[], userName?: string, password?: string): void;
    startTasks(taskIds: string | string[]): void;
    stopTasks(taskIds: string | string[]): void;
}
declare namespace RemoteScheduler {
    export { Database, DataSet };
}
type Database = import('../database/Database');
type DataSet = import('../dataset/DataSet');
