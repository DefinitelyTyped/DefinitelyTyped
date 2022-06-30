// Type definitions for ember-task-scheduler 2.3
// Project: https://github.com/BBVAEngineering/ember-task-scheduler
// Definitions by: golovkoe <https://github.com/elenagolovko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import Service from '@ember/service';

export function scheduleFrame(context: object, method: string): number;

export function exec(target: object, method: () => void | string, args: unknown[],
                     onError: (e: Error, stack: object) => void, stack: object): void;

export function _logWarn(title: string, stack: object, test: boolean, options: object): void;

export default interface Scheduler extends Service {
    /**
     * Proxy to app environment configuration.
     */
    config: object;

    /**
     * Setup number of frames per second.
     */
    FPS: number;

    /**
     * On error hook executed when a task fails.
     */
    onError: ((error: Error) => void) | undefined;

    /**
     * Computed value of milliseconds per frame of current FPS configuration.
     */
    millisecondsPerFrame: number;

    /**
     * Initializes array of tasks.
     */
    init(): void;

    /**
     * Return when has pending tasks.
     */
    hasPendingTasks(): boolean;

    /**
     * Schedules a task into the scheduler.
     *
     * When first argument is a function it ignores the rest.
     */
    schedule(target?: object, method?: () => void | string): void;

    /**
     * Schedule a unique task into the scheduler.
     *
     * When first argument is a function it ignores the rest.
     *
     */
    scheduleOnce(target?: object, method?: () => void | string): void;

    /**
     * Try to cancel a given task.
     *
     * When first argument is a function it ignores the rest.
     */
    cancel(target?: object, method?: () => void | string): null | unknown[];
}
