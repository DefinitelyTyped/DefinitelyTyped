// Type definitions for jrf-pip 1.0
// Project: https://github.com/jirufik/jrf-pip#readme
// Definitions by: rufus <https://github.com/jirufik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ParallelProcessingParams {
    arrayValues: any[];

    processingFn(params: ProcessingFnParams): void | Promise<void>;

    nextValueFn?(params: NextValueFnParams): boolean | Promise<boolean>;

    cycleTimeout?: number;
    parallel?: number;
    awaitRes?: boolean;

    cb?(stackError: StackError): void | Promise<void>;
}

interface ProcessingFnParams {
    value: any;
    index: number;
    arrayValues: any[];
    iteration: number;
}

interface NextValueFnParams {
    value: any;
    index: number;
    arrayValues: any[];
    iteration: number;
}

interface StackError {
    value: any;
    index: number;
    iteration: number;
    error: any;
}

declare function parallelProcessing(params: ParallelProcessingParams): Promise<StackError[]>;

export = parallelProcessing;
