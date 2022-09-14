// Type definitions for node-cron 3.0
// Project: https://github.com/node-cron/node-cron, https://github.com/merencia/node-cron
// Definitions by: morsic <https://github.com/maximelkin>,
//                 burtek <https://github.com/burtek>,
//                 Richard Honor <https://github.com/RMHonor>
//                 Ata Berk YILMAZ <https://github.com/ataberkylmz>
//                 Alex Seidmann <https://github.com/aseidma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import EventEmitter = require('events');

export function schedule(cronExpression: string, func: ((now: Date) => void) | string, options?: ScheduleOptions): ScheduledTask;

export function validate(cronExpression: string): boolean;

export function getTasks(): Map<string, ScheduledTask>;

export interface ScheduledTask extends EventEmitter {
    start: () => this;
    stop: () => this;
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
}
