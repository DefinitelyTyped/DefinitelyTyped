// Type definitions for jrf-pip 1.0
// Project: https://github.com/jirufik/jrf-pip#readme
// Definitions by: rufus <https://github.com/jirufik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ParallelProcessingParams<T> {
    arrayValues: T[];

    processingFn(params: ProcessingFnParams<T>): void | Promise<void>;

    nextValueFn?(params: NextValueFnParams<T>): boolean | Promise<boolean>;

    cycleTimeout?: number;
    parallel?: number;
    awaitRes?: boolean;

    cb?(stackError: StackError<T>): void | Promise<void>;
}

interface ProcessingFnParams<T> {
    value: T;
    index: number;
    arrayValues: T[];
    iteration: number;
}

interface NextValueFnParams<T> {
    value: T;
    index: number;
    arrayValues: T[];
    iteration: number;
}

interface StackError<T> {
    value: T;
    index: number;
    iteration: number;
    error: any;
}

declare function parallelProcessing<T>(params: ParallelProcessingParams<T>): Promise<Array<StackError<T>>> | undefined;

export = parallelProcessing;
