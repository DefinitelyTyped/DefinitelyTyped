// Type definitions for better-queue 3.8
// Project: https://github.com/diamondio/better-queue
// Definitions by: Ostap Nagovitsyn <https://github.com/maozedong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================
    import * as Queue from "better-queue";
    var queue = new Queue(...);
 =============================================== */

/// <reference types="node" />

declare class BetterQueue<T = any, K = any> extends NodeJS.EventEmitter {
  constructor(options: BetterQueue.QueueOptions<T, K>);
  constructor(process: BetterQueue.ProcessFunction<T, K>, options?: Partial<BetterQueue.QueueOptions<T, K>>);

  push(task: T, cb?: (err: any, result: K) => void): BetterQueue.Ticket;

  cancel(taskId: any, cb?: () => void): void;

  pause(): void;

  resume(): void;

  destroy(cb: () => void): void;

  use(store: BetterQueue.Store<T>): void;

  getStats(): BetterQueue.QueueStats;

  resetStats(): void;

  on(event: 'task_finish', listener: (taskId: any, result: K) => void): this;
  on(event: 'task_failed', listener: (taskId: any, errorMessage: string) => void): this;
  on(event: 'task_progress', listener: (taskId: any, completed: number, total: number) => void): this;
  on(event: BetterQueue.QueueEvent, listener: (...args: any[]) => void): this;
}

declare namespace BetterQueue {
  interface QueueOptions<T, K> {
    process: ProcessFunction<T, K>;
    filter?(task: T, cb: (error: any, task: T) => void): void;
    merge?(oldTask: T, newTask: T, cb: (error: any, mergedTask: T) => void): void;
    priority?(task: T, cb: (error: any, priority: number) => void): void;
    precondition?(cb: (error: any, passOrFail: boolean) => void): void;
    id?: keyof T | ((task: T, cb: (error: any, id: keyof T) => void) => void);
    cancelIfRunning?: boolean;
    autoResume?: boolean;
    failTaskOnProcessException?: boolean;
    filo?: boolean;
    batchSize?: number;
    batchDelay?: number;
    batchDelayTimeout?: number;
    concurrent?: number;
    maxTimeout?: number;
    afterProcessDelay?: number;
    maxRetries?: number;
    retryDelay?: number;
    storeMaxRetries?: number;
    storeRetryTimeout?: number;
    preconditionRetryTimeout?: number;
    store?: string | StoreOptions | Store<T>;
  }

  // TODO reflect task types somehow (task: T | T[])
  type ProcessFunction<T, K> = (task: any, cb: ProcessFunctionCb<K>) => void;

  type ProcessFunctionCb<K> = (error?: any, result?: K) => void;

  type QueueEvent =
    'task_queued'
    | 'task_accepted'
    | 'task_started'
    | 'task_finish'
    | 'task_failed'
    | 'task_progress'
    | 'batch_finish'
    | 'batch_failed'
    | 'batch_progress'
    | 'error';

  type TicketEvent =
    'accept'
    | 'queued'
    | 'started'
    | 'progress'
    | 'finish'
    | 'failed'
    | 'error';

  interface Store<T> {
    connect(cb: (error: any, length: number) => void): void;

    getTask(taskId: any, cb: (error: any, task: T) => void): void;

    deleteTask(taskId: any, cb: () => void): void;

    putTask(taskId: any, task: T, priority: number, cb: (error: any) => void): void;

    takeFirstN(n: number, cb: (error: any, lockId: string) => void): void;

    takeLastN(n: number, cb: (error: any, lockId: string) => void): void;

    getLock(lockId: string, cb: (error: any, tasks: { [taskId: string]: T }) => void): void;

    releaseLock(lockId: string, cb: (error: any) => void): void;
  }

  interface StoreOptions {
    type: string;
    // store-specific options
    [key: string]: any;
  }

  class Ticket extends NodeJS.EventEmitter {
    on(event: TicketEvent, listener: (...args: any[]) => void): this;
  }

  interface TickerProgress {
    eta: string;
    pct: number;
    complete: number;
    total: number;
    message: string;
  }

  interface QueueStats {
    total: number;
    average: number;
    successRate: number;
    peak: number;
  }
}

export = BetterQueue;
