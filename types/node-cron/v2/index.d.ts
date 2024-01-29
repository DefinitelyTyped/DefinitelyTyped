import { Timezone } from "tz-offset";

export function schedule(cronExpression: string, func: () => void, options?: ScheduleOptions): ScheduledTask;

export function validate(cronExpression: string): boolean;

export interface ScheduledTask {
    start: () => this;
    stop: () => this;
    destroy: () => void;
    getStatus: () => string;
}

export interface ScheduleOptions {
    /**
     * A boolean to set if the created task is scheduled.
     *
     * Defaults to `true`
     */
    scheduled?: boolean;
    /**
     * The timezone that is used for job scheduling
     */
    timezone?: Timezone;
}
