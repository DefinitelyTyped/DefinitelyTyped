// Type definitions for node-cron 3.0
// Project: https://github.com/node-cron/node-cron, https://github.com/merencia/node-cron
// Definitions by: morsic <https://github.com/maximelkin>,
//                 burtek <https://github.com/burtek>,
//                 Richard Honor <https://github.com/RMHonor>
//                 Ata Berk YILMAZ <https://github.com/ataberkylmz>
//                 Alex Seidmann <https://github.com/aseidma>
//                 Pedro Américo <https://github.com/ghostebony>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { EventEmitter } from "events";

/**
 * Creates a new task to execute the given function when the cron expression ticks.
 * @param cronExpression
 * @param func
 * @param options
 */
export function schedule(
    cronExpression: string,
    func: ((now: Date | "manual" | "init") => void) | string,
    options?: ScheduleOptions,
): ScheduledTask;

/**
 * To validate whether the expression is a cron expression or not
 * @param cronExpression
 */
export function validate(cronExpression: string): boolean;

/**
 * Get the list of tasks created using the `schedule` function
 */
export function getTasks(): Map<string, ScheduledTask>;

export interface ScheduledTask extends EventEmitter {
    now: (now?: Date) => void;
    start: () => void;
    stop: () => void;
}

export interface ScheduleOptions {
    /**
     * A boolean to set if the created task is scheduled.
     *
     * Defaults to `true`
     */
    scheduled?: boolean | undefined;
    /**
     * The timezone that is used for job scheduling
     */
    timezone?: string;
    /**
     * Specifies whether to recover missed executions instead of skipping them.
     *
     * Defaults to `false`
     */
    recoverMissedExecutions?: boolean;
    /**
     * The schedule name
     */
    name?: string;
    /**
     * Execute task immediately after creation
     */
    runOnInit?: boolean;
}
