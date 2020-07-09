// Type definitions for task-worklet 0.1
// Project: https://github.com/developit/task-worklet, https://github.com/googlechromelabs/task-worklet
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

declare class TaskQueue {
    constructor(options?: Options);
    postTask(taskName: string, ...args: any[]): TaskQueue.Task;
    addModule(moduleURL: string): Promise<void>;
}

interface Options {
    size?: number;
}

declare namespace TaskQueue {
    interface Task<T = any> {
        id: number;
        state: State;
        result: Promise<T extends PromiseLike<infer U> ? U : T>;
    }

    type State =
        | 'cancelled'
        | 'completed'
        | 'fulfilled'
        | 'pending'
        | 'scheduled';
}

export = TaskQueue;
export as namespace TaskQueue;
