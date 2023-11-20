interface ParallelProcessingParams<T> {
    arrayValues: T[];

    processingFn(params: ProcessingFnParams<T>): void | Promise<void>;

    nextValueFn?(params: NextValueFnParams<T>): boolean | Promise<boolean>;

    cycleTimeout?: number | undefined;
    parallel?: number | undefined;
    awaitRes?: boolean | undefined;

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
