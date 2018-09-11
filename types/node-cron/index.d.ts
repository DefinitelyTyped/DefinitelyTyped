// Type definitions for node-cron 1.2
// Project: http://merencia.com/node-cron/
// Definitions by: morsic <https://github.com/maximelkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// immediateStart - default true
export function schedule(a: string, func: () => void, immediateStart?: boolean): ScheduledTask;

export function validate(a: string): boolean;

export interface ScheduledTask {
    start: () => this;
    stop: () => this;
    destroy: () => void;
}
