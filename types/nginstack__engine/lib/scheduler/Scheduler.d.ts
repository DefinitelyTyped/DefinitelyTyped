export = Scheduler;
declare function Scheduler(): void;
declare class Scheduler {
    maxSimultaneousTasks: number;
    getTasks(): DataSet;
    saveTasks(tasks: DataSet, userId?: string, password?: string): void;
    delTasks(taskIds: string | string[], userId?: string, password?: string): void;
    startTasks(taskIds: string | string[]): void;
    stopTasks(taskIds: string | string[]): void;
    getCurrentTaskId(): string | null;
}
declare namespace Scheduler {
    export { getInstance, DataSet };
}
declare function getInstance(): Scheduler;
type DataSet = import('../dataset/DataSet');
