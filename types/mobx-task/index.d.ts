// Type definitions for mobx-task 1.0
// Project: https://github.com/jeffijoe/mobx-task#readme
// Definitions by: Julian Wielga <https://github.com/JulianWielga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type WithoutPromise<T> = T extends Promise<infer U> ? U : T;

export type TaskState = 'pending' | 'resolved' | 'rejected';
export type TaskError = Error;
export type TaskFunc<R, A extends any[]> = (...args: A) => R;

export interface TaskOptions<Result> {
    state?: TaskState;
    error?: TaskError;
    result?: Result;
    swallow?: boolean;
}

export interface TaskMatchProps<Args extends any[], TaskMatchResult, Result = any> {
    pending: (...args: Args) => TaskMatchResult;
    rejected: (error: TaskError) => TaskMatchResult;
    resolved: (result: Result) => TaskMatchResult;
}

export interface TaskStatusAware<Result, Args extends any[]> extends TaskFunc<Promise<Result>, Args> {
    readonly state: TaskState;
    readonly pending: boolean;
    readonly resolved: boolean;
    readonly rejected: boolean;
    readonly args: Args;
    readonly result?: Result;
    readonly error?: TaskError;

    match<TaskMatchResult>(props: TaskMatchProps<Args, TaskMatchResult, Result>): TaskMatchResult;

    wrap<R, A extends any[]>(func: (inner: TaskStatusAware<Result, Args>) => (...args: A) => Promise<R>): TaskStatusAware<R, A>;

    setState(props: { state: TaskState, result: Result }): void;

    reset(): void;
}

export interface TaskFactory {
    <R, A extends any[]>(
        func: TaskFunc<R, A>,
        options?: TaskOptions<WithoutPromise<R>>,
    ): TaskStatusAware<WithoutPromise<R>, A>;

    resolved<R, A extends any[]>(
        func: TaskFunc<R, A>,
        options?: Omit<TaskOptions<WithoutPromise<R>>, 'state'>,
    ): TaskStatusAware<WithoutPromise<R>, A>;

    rejected<R, A extends any[]>(
        func: TaskFunc<R, A>,
        options?: Omit<TaskOptions<WithoutPromise<R>>, 'state'>,
    ): TaskStatusAware<WithoutPromise<R>, A>;
}

export const task: TaskFactory;
