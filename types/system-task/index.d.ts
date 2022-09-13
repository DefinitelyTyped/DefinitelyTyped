// Type definitions for system-task 1.0
// Project: https://github.com/leocwlam/system-task
// Definitions by: Leo Lam <https://github.com/leocwlam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class SystemTask {
    type: string;

    constructor(taskType?: string, isAsyncProcess?: boolean, logMethod?: any);

    /**
     * @async
     */
    log(type: string, message: string, detail?: any): void;

    /**
     * @async
     */
    insertPreprocessItemsHandler(task: SystemTask): Promise<any>;

    /**
     * @async
     */
    preprocessHandler(task: SystemTask, preProcessItem: any): Promise<any>;

    /**
     * @async
     */
    processHandler(task: SystemTask, processItem: any): Promise<any>;

    /**
     * @async
     */
    cleanupHandler(task: SystemTask, cleanupItems: any[]): Promise<any>;

    isValidProcess(): void;

    /**
     * @async
     */
    start(): void;
}

declare function asyncProcess(items: any[], executeAsyncCall: any, task: SystemTask, errors: any[]): Promise<any>;
declare function syncProcess(items: any[], executeSyncCall: any, task: SystemTask, errors: any[]): Promise<any>;

declare namespace SystemTask {
    /**
     * @async
     */
    const SyncProcess: typeof syncProcess;
    /**
     * @async
     */
    const AsyncProcess: typeof asyncProcess;
}

export = SystemTask;
