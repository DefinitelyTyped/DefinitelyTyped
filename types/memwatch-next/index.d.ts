declare module "memwatch-next" {
    type EventCallback = (data: LeakInformation | StatsInformation | Object) => void;

    /**
     * Compare the state of your heap between two points in time, telling you what has been allocated, and what has been released.
     */
    export class HeapDiff {
        /**
         * Compute the diff.
         */
        end: () => void;
    }

    /**
     * Stats information.
     * @interface
     */
    export interface StatsInformation {
        current_base: number;
        estimated_base: number;
        heap_compactions: number;
        max: number;
        min: number;
        num_full_gc: number;
        num_inc_gc: number;
        usage_trend: number;
    }

    /**
     * Leak information.
     * @interface
     */
    export interface LeakInformation {
        /**
         * End date.
         */
        end: Date;

        /**
         * Growth.
         */
        growth: number;

        /**
         * Reason leak.
         */
        reason: string;

        /**
         * Start date.
         */
        start: Date;
    }

    /**
     * Subscribe to a event.
     * @param {string} eventName A event name.
     * @param {EventCallback} callback A callback;
     */
    export function on(eventName: string, callback: EventCallback): void;
}
