// Type definitions for system-task 1.0
// Project: https://github.com/leocwlam/system-task
// Definitions by: Leo Lam <https://github.com/leocwlam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

/// <reference types="node" />

export = SystemTask;

declare class SystemTask {
  type: string;
  constructor(taskType: string, isAsyncProcess?: boolean, logMethod?: any);
  log(type: string, message: string, detail?: any): void;
  insertPreprocessItemsHandler(task: SystemTask): Promise<any>;
  preprocessHandler(task: SystemTask, preProcessItem: any): Promise<any>;
  processHandler(task: SystemTask, processItem: any): Promise<any>;
  cleanupHandler(task: SystemTask, cleanupItems: any[]): Promise<any>;
  isValidProcess(): void;
  start(): void;
}

declare namespace SystemTask {
  function asyncProcess(items: any[], executeAsyncCall: any, task: SystemTask, errors: any[]): Promise<any>;
  function syncProcess(items: any[], executeSyncCall: any, task: SystemTask, errors: any[]): Promise<any>;
}
