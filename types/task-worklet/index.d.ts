// Type definitions for task-worklet 0.1
// Project: https://github.com/developit/task-worklet
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

declare class TaskQueue {
    constructor(options?: Options);
    postTask(taskName: string, ...args: any[]): Task;
    addModule(moduleURL: string): Promise<void>;
}

interface Options {
    size?: number;
}

export interface Task<T = any> {
    id: number;
    state: State;
    result: Promise<T>;
}

export type State =
    | 'cancelled'
    | 'completed'
    | 'fulfilled'
    | 'pending'
    | 'scheduled';

export default TaskQueue;
export as namespace TaskQueue;
