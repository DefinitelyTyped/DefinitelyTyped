import SchedulerService from 'ember-task-scheduler';

/** Static assertion that `value` has type `T` */
// Disable tslint here b/c the generic is used to let us do a type coercion and
// validate that coercion works for the type value "passed into" the function.
// tslint:disable-next-line:no-unnecessary-generics
export declare function assertType<T>(value: T): void;

declare module 'ember-task-scheduler' {
    export default interface SchedulerService {
        [key: string]: unknown;
    }
}

declare var scheduler: SchedulerService;
const callbackSchedule = () => {};
const callbackCancel = () => [];
scheduler.scheduleOnce(null, callbackSchedule); // $ExpectType void
scheduler.cancel(null, callbackCancel); // $ExpectType unknown[] | null
