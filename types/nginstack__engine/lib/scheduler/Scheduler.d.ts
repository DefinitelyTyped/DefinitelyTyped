export = Scheduler;
declare function Scheduler(): void;
declare class Scheduler {
    maxSimultaneousTasks: number;
    getTasks(): any;
    saveTasks(tasks: any, userId?: string, password?: string): void;
    delTasks(taskIds: string | string[], userId?: string, password?: string): void;
    startTasks(taskIds: string | string[]): void;
    stopTasks(taskIds: string | string[]): void;
}
declare namespace Scheduler {
    function getInstance(): Scheduler;
}
