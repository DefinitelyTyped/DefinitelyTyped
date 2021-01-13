/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
declare namespace ExecutionEnvironment {
    var canUseDOM: boolean;
    var canUseWorkers: boolean;
    var canUseEventListeners: boolean;
    var canUseViewport: boolean;
    var isInWorker: boolean;
}

export = ExecutionEnvironment;
