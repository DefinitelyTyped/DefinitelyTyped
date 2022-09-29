/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
declare namespace ExecutionEnvironment {
    const canUseDOM: boolean;
    const canUseWorkers: boolean;
    const canUseEventListeners: boolean;
    const canUseViewport: boolean;
    const isInWorker: boolean;
}

// eslint-disable-next-line export-just-namespace
export = ExecutionEnvironment;
