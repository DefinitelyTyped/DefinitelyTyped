// Type definitions for cron 2.0
// Project: https://www.npmjs.com/package/cron
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Lundarl Gholoi <https://github.com/winup>
//                 koooge <https://github.com/koooge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { DateTime } from 'luxon';
import { SpawnOptions } from "child_process";

export declare type CronCommand = (() => void) | string | { command: string, args?: ReadonlyArray<string> | undefined, options?: SpawnOptions | undefined};

export declare class CronTime {
    /**
     * Create a new ```CronTime```.
     * @param source The time to fire off your job. This can be in the form of cron syntax, a JS ```Date``` object, or a luxon ```DateTime``` object.
     * @param zone Timezone name. Can be any string accepted by luxon's ```DateTime.setZone()``` (https://moment.github.io/luxon/api-docs/index.html#datetimesetzone).
     * @param utcOffset UTC offset. Don't use both ```zone``` and ```utcOffset``` together or weird things may happen.
     */
    constructor(source: string | Date | DateTime, zone?: string, utcOffset?: string | number);

    /**
     * Tells you when ```CronTime``` will be run.
     */
    public sendAt(): DateTime;
    /**
     * Tells you when ```CronTime``` will be run.
     * @param i Indicate which turn of run after now. If not given return next run time.
     * @returns A ```DateTime``` when the source passed in the constructor is a ```Date``` or a ```DateTime``` and an array of ```DateTime``` when the source is a string.
     */
    public sendAt(i?: number): DateTime | DateTime[];
    /**
     * Get the number of milliseconds in the future at which to fire our callbacks.
     */
    public getTimeout(): number;
}

export declare interface CronJobParameters {
    /**
     * The time to fire off your job. This can be in the form of cron syntax, a JS ```Date``` object, or a luxon ```DateTime``` object.
     */
    cronTime: string | Date | DateTime;
    /**
     * The function to fire at the specified time. If an ```onComplete``` callback was provided, ```onTick``` will receive it as an argument. ```onTick``` may call ```onComplete``` when it has finished its work.
     */
    onTick: CronCommand;
    /**
     * A function that will fire when the job is stopped with ```job.stop()```, and may also be called by ```onTick``` at the end of each run.
     */
    onComplete?: CronCommand | null | undefined;
    /**
     * Specifies whether to start the job just before exiting the constructor. By default this is set to false. If left at default you will need to call ```job.start()``` in order to start the job (assuming ```job``` is the variable you set the cronjob to). This does not immediately fire your ```onTick``` function, it just gives you more control over the behavior of your jobs.
     */
    start?: boolean | undefined;
    /**
     * Specify the timezone for the execution. This will modify the actual time relative to your timezone. If the timezone is invalid, an error is thrown. Can be any string accepted by luxon's ```DateTime.setZone()``` (https://moment.github.io/luxon/api-docs/index.html#datetimesetzone). Probably don't use both ```timeZone``` and ```utcOffset``` together or weird things may happen.
     */
    timeZone?: string | undefined;
    /**
     * The context within which to execute the onTick method. This defaults to the cronjob itself allowing you to call ```this.stop()```. However, if you change this you'll have access to the functions and values within your context object.
     */
    context?: any;
    /**
     * This will immediately fire your ```onTick``` function as soon as the requisit initialization has happened. This option is set to ```false``` by default for backwards compatibility.
     */
    runOnInit?: boolean | undefined;
    /**
     * This allows you to specify the offset of your timezone rather than using the ```timeZone``` param. Probably don't use both ```timeZone``` and ```utcOffset``` together or weird things may happen.
     */
    utcOffset?: string | number | undefined;
    /**
     * If you have code that keeps the event loop running and want to stop the node process when that finishes regardless of the state of your cronjob, you can do so making use of this parameter. This is off by default and cron will run as if it needs to control the event loop. For more information take a look at [timers#timers_timeout_unref](https://nodejs.org/api/timers.html#timers_timeout_unref) from the NodeJS docs.
     */
    unrefTimeout?: boolean | undefined;
}

export declare class CronJob {
    /**
     * Return ```true``` if job is running.
     */
    public running: boolean | undefined;
    /**
     * Function using to fire ```onTick```, default set to an inner private function. Overwrite this only if you have a really good reason to do so.
     */
    public fireOnTick: Function;

    /**
     * Create a new ```CronJob```.
     * @param cronTime The time to fire off your job. This can be in the form of cron syntax or a JS ```Date``` object.
     * @param onTick The function to fire at the specified time.
     * @param onComplete A function that will fire when the job is complete, when it is stopped.
     * @param startNow Specifies whether to start the job just before exiting the constructor. By default this is set to false. If left at default you will need to call ```job.start()``` in order to start the job (assuming ```job``` is the variable you set the cronjob to). This does not immediately fire your onTick function, it just gives you more control over the behavior of your jobs.
     * @param timeZone Specify the timezone for the execution. This will modify the actual time relative to your timezone. If the timezone is invalid, an error is thrown. Can be any string accepted by luxon's ```DateTime.setZone()``` (https://moment.github.io/luxon/api-docs/index.html#datetimesetzone).
     * @param context The context within which to execute the onTick method. This defaults to the cronjob itself allowing you to call ```this.stop()```. However, if you change this you'll have access to the functions and values within your context object.
     * @param runOnInit This will immediately fire your ```onTick``` function as soon as the requisit initialization has happened. This option is set to ```false``` by default for backwards compatibility.
     * @param utcOffset This allows you to specify the offset of your timezone rather than using the ```timeZone``` param. Probably don't use both ```timeZone``` and ```utcOffset``` together or weird things may happen.
     * @param unrefTimeout If you have code that keeps the event loop running and want to stop the node process when that finishes regardless of the state of your cronjob, you can do so making use of this parameter. This is off by default and cron will run as if it needs to control the event loop. For more information take a look at [timers#timers_timeout_unref](https://nodejs.org/api/timers.html#timers_timeout_unref) from the NodeJS docs.
     */
    constructor(cronTime: string | Date | DateTime, onTick: CronCommand, onComplete?: CronCommand | null, startNow?: boolean, timeZone?: string, context?: any, runOnInit?: boolean, utcOffset?: string | number, unrefTimeout?: boolean);
    /**
     * Create a new ```CronJob```.
     * @param options Job parameters.
     */
    constructor(options: CronJobParameters);

    /**
     * Runs your job.
     */
    public start(): void;
    /**
     * Stops your job.
     */
    public stop(): void;
    /**
     * Change the time for the ```CronJob```.
     * @param time Target time.
     */
    public setTime(time: CronTime): void;
    /**
     * Tells you the last execution date.
     */
    public lastDate(): Date;
    /**
     * Tells you when a ```CronTime``` will be run.
     */
    public nextDate(): DateTime;
    public nextDates(): DateTime;
    /**
     * Tells you when a ```CronTime``` will be run.
     * @param i Indicate which turn of run after now. If not given return next run time.
     * @returns A `DateTime` when the cronTime passed in the constructor is a `Date` or a `DateTime` and an array of `DateTime` when the cronTime is a string.
     */
    public nextDates(i?: number): DateTime | DateTime[];
    /**
     * Add another ```onTick``` function.
     * @param callback Target function.
     */
    public addCallback(callback: Function): void;
}

export declare function job(options: CronJobParameters): CronJob;
export declare function job(cronTime: string | Date | DateTime, onTick: () => void, onComplete?: CronCommand | null, start?: boolean, timeZone?: string, context?: any, runOnInit?: boolean, utcOffset?: string | number, unrefTimeout?: boolean): CronJob;
export declare function time(source: string | Date | DateTime, zone?: string): CronTime;
export declare function sendAt(cronTime: string | Date | DateTime): DateTime;
export declare function timeout(cronTime: string | Date | DateTime): number;
