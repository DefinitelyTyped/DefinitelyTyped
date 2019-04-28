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

export interface TaskMatchProps<T1, T2, T3, Args extends any[], Result = any> {
    pending: (...args: Args) => T1;
    rejected: (error: TaskError) => T2;
    resolved: (result: Result) => T3;
}

export interface TaskStatusAware<Result = any, Args extends any[] = any[]> extends TaskFunc<Promise<Result>, Args> {
    readonly state: TaskState;
    readonly pending: boolean;
    readonly resolved: boolean;
    readonly rejected: boolean;
    readonly args: Args;
    readonly result?: Result;
    readonly error?: TaskError;

    match<PendingType, RejectedType, ResolvedType>(props: TaskMatchProps<PendingType, RejectedType, ResolvedType, Args, Result>): PendingType | RejectedType | ResolvedType;

    wrap<R, A extends any[]>(func: (inner: TaskStatusAware<Result, Args>) => (...args: A) => Promise<R>): TaskStatusAware<R, A>;

    setState(props: TaskOptions<Result>): void;

    reset(): void;
}

export interface TaskCreator<K extends keyof TaskOptions<any>> extends MethodDecorator, PropertyDecorator {
    <R, A extends any[]>(func: TaskFunc<R, A>, options?: Pick<TaskOptions<WithoutPromise<R>>, K>): TaskStatusAware<WithoutPromise<R>, A>;

    (options: Pick<TaskOptions<WithoutPromise<any>>, K>): PropertyDecorator;
    (options: Pick<TaskOptions<WithoutPromise<any>>, K>): MethodDecorator;
}

export interface TaskFactory extends TaskCreator<keyof TaskOptions<any>> {
    resolved: TaskCreator<Exclude<keyof TaskOptions<any>, 'state'>>;
    rejected: TaskCreator<Exclude<keyof TaskOptions<any>, 'state'>>;
}

export type Task<Result = any, Args extends any[] = any[]> = TaskStatusAware<Result, Args>;
export const task: TaskFactory;
