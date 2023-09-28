// Type definitions for run-parallel 1.1
// Project: https://github.com/feross/run-parallel
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace RunParallel {
    type TaskCallback<T> = (err: Error | null, results?: T) => void;
    type Task<T> = (callback: TaskCallback<T>) => void;
    type TaskObj<T> = Record<string, Task<T>>;

    type Callback<T> = (err: Error, results: T) => void;
}

declare function RunParallel<T>(tasks: Array<RunParallel.Task<T>>): T[];
declare function RunParallel<T>(tasks: Array<RunParallel.Task<T>>, callback: RunParallel.Callback<T[]>): void;

declare function RunParallel<T>(tasks: RunParallel.TaskObj<T>): Record<string, T>;
declare function RunParallel<T>(tasks: RunParallel.TaskObj<T>, callback: RunParallel.Callback<Record<string, T>>): void;

export = RunParallel;
