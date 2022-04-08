// Type definitions for task-worklet 0.1
// Project: https://github.com/developit/task-worklet
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class TaskQueue<T extends TaskQueue.TaskDescriptor = any> {
    constructor(options?: Options);
    postTask<U extends T = any>(taskName: U['name'], ...args: Parameters<U>): TaskQueue.Task<ReturnType<U>>;
    addModule(moduleURL: string): Promise<void>;
}

interface Options {
    size?: number;
}

declare namespace TaskQueue {
    interface TaskDescriptor {
        name: string;
        (...args: any): any;
    }

    interface Task<T = unknown> {
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
