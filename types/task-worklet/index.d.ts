// Type definitions for task-worklet 0.1
// Project: https://github.com/GoogleChromeLabs/task-worklet
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare class TaskQueue<T extends TaskDescriptor = any> {
    constructor(options?: Options);
    postTask<U extends T = any>(taskName: U['name'], ...args: Parameters<U>): Task<ReturnType<U>>;
    addModule(moduleURL: string): Promise<void>;
}

interface Options {
    size?: number;
}

interface TaskDescriptor {
    name: string;
    (...args: any): any;
}

export interface Task<T = unknown> {
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
