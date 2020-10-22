// Type definitions for run-parallel-limit 1.0
// Project: https://github.com/feross/run-parallel-limit
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace RunParallelLimit {
    type TaskCallback<T> = (err: Error | null, results?: T) => void;
    type Task<T> = (callback: TaskCallback<T>) => void;
    type TaskObj<T> = Record<string, Task<T>>;

    type Callback<T> = (err: Error, results: T) => void;
}

declare function RunParallelLimit<T>(tasks: Array<RunParallelLimit.Task<T>>, limit: number): T[];
declare function RunParallelLimit<T>(tasks: Array<RunParallelLimit.Task<T>>, limit: number, callback: RunParallelLimit.Callback<T[]>): void;

declare function RunParallelLimit<T>(tasks: RunParallelLimit.TaskObj<T>, limit: number): Record<string, T>;
declare function RunParallelLimit<T>(tasks: RunParallelLimit.TaskObj<T>, limit: number, callback: RunParallelLimit.Callback<Record<string, T>>): void;

export = RunParallelLimit;
