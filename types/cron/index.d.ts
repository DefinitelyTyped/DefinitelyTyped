// Type definitions for cron 1.7
// Project: https://www.npmjs.com/package/cron
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Lundarl Gholoi <https://github.com/winup>
//                 koooge <https://github.com/koooge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Moment } from 'moment';
import { SpawnOptions } from "child_process";

export declare type CronCommand = (() => void) | string | { command: string, args?: ReadonlyArray<string>, options?: SpawnOptions};

export declare class CronTime {
    /**
     * Create a new ```CronTime```.
     * @param source The time to fire off your job. This can be in the form of cron syntax or a JS ```Date``` object.
     * @param zone Timezone name. You can check all timezones available at [Moment Timezone Website](http://momentjs.com/timezone/).
     * @param utcOffset UTC offset. Don't use both ```zone``` and ```utcOffset``` together or weird things may happen.
     */
    constructor(source: string | Date | Moment, zone?: string, utcOffset?: string | number);

    /**
     * Tells you when ```CronTime``` will be run.
     */
    public sendAt(): Moment;
    /**
     * Tells you when ```CronTime``` will be run.
     * @param i Indicate which turn of run after now. If not given return next run time.
     * @returns A `Moment` when the source passed in the constructor is a `Date` or a `Moment` and an array of `Moment` when the source is a string
     */
    public sendAt(i?: number): Moment | Moment[];
    /**
     * Get the number of milliseconds in the future at which to fire our callbacks.
     */
    public getTimeout(): number;
}

export declare interface CronJobParameters {
    /**
     * The time to fire off your job. This can be in the form of cron syntax or a JS ```Date``` object.
     */
    cronTime: string | Date | Moment;
    /**
     * The function to fire at the specified time. If an ```onComplete``` callback was provided, ```onTick``` will receive it as an argument. ```onTick``` may call ```onComplete``` when it has finished its work.
     */
    onTick: CronCommand;
    /**
     * A function that will fire when the job is stopped with ```job.stop()```, and may also be called by ```onTick``` at the end of each run.
     */
    onComplete?: CronCommand | null;
    /**
     * Specifies whether to start the job just before exiting the constructor. By default this is set to false. If left at default you will need to call ```job.start()``` in order to start the job (assuming ```job``` is the variable you set the cronjob to). This does not immediately fire your ```onTick``` function, it just gives you more control over the behavior of your jobs.
     */
    start?: boolean;
    /**
     * Specify the timezone for the execution. This will modify the actual time relative to your timezone. If the timezone is invalid, an error is thrown. You can check all timezones available at [Moment Timezone Website](http://momentjs.com/timezone/). Probably don't use both ```timeZone``` and ```utcOffset``` together or weird things may happen.
     */
    timeZone?: string;
    /**
     * The context within which to execute the onTick method. This defaults to the cronjob itself allowing you to call ```this.stop()```. However, if you change this you'll have access to the functions and values within your context object.
     */
    context?: any;
    /**
     * This will immediately fire your ```onTick``` function as soon as the requisit initialization has happened. This option is set to ```false``` by default for backwards compatibility.
     */
    runOnInit?: boolean;
    /**
     * This allows you to specify the offset of your timezone rather than using the ```timeZone``` param. Probably don't use both ```timeZone``` and ```utcOffset``` together or weird things may happen.
     */
    utcOffset?: string | number;
    /**
     * If you have code that keeps the event loop running and want to stop the node process when that finishes regardless of the state of your cronjob, you can do so making use of this parameter. This is off by default and cron will run as if it needs to control the event loop. For more information take a look at [timers#timers_timeout_unref](https://nodejs.org/api/timers.html#timers_timeout_unref) from the NodeJS docs.
     */
    unrefTimeout?: boolean;
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
     * @param start Specifies whether to start the job just before exiting the constructor. By default this is set to false. If left at default you will need to call ```job.start()``` in order to start the job (assuming ```job``` is the variable you set the cronjob to). This does not immediately fire your onTick function, it just gives you more control over the behavior of your jobs.
     * @param timeZone Specify the timezone for the execution. This will modify the actual time relative to your timezone. If the timezone is invalid, an error is thrown. You can check all timezones available at [Moment Timezone Website](http://momentjs.com/timezone/).
     * @param context The context within which to execute the onTick method. This defaults to the cronjob itself allowing you to call ```this.stop()```. However, if you change this you'll have access to the functions and values within your context object.
     * @param runOnInit This will immediately fire your ```onTick``` function as soon as the requisit initialization has happened. This option is set to ```false``` by default for backwards compatibility.
     * @param utcOffset This allows you to specify the offset of your timezone rather than using the ```timeZone``` param. Probably don't use both ```timeZone``` and ```utcOffset``` together or weird things may happen.
     * @param unrefTimeout If you have code that keeps the event loop running and want to stop the node process when that finishes regardless of the state of your cronjob, you can do so making use of this parameter. This is off by default and cron will run as if it needs to control the event loop. For more information take a look at [timers#timers_timeout_unref](https://nodejs.org/api/timers.html#timers_timeout_unref) from the NodeJS docs.
     */
    constructor(cronTime: string | Date | Moment, onTick: CronCommand, onComplete?: CronCommand | null, start?: boolean, timeZone?: string, context?: any, runOnInit?: boolean, utcOffset?: string | number, unrefTimeout?: boolean);
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
    public nextDate(): Moment;
    public nextDates(): Moment;
    /**
     * Tells you when a ```CronTime``` will be run.
     * @param i Indicate which turn of run after now. If not given return next run time.
     * @returns A `Moment` when the cronTime passed in the constructor is a `Date` or a `Moment` and an array of `Moment` when the cronTime is a string
     */
    public nextDates(i?: number): Moment | Moment[];
    /**
     * Add another ```onTick``` function.
     * @param callback Target function.
     */
    public addCallback(callback: Function): void;
}

export declare function job(options: CronJobParameters): CronJob;
export declare function job(cronTime: string | Date | Moment, onTick: () => void, onComplete?: CronCommand | null, start?: boolean, timeZone?: string, context?: any, runOnInit?: boolean, utcOffset?: string | number, unrefTimeout?: boolean): CronJob;
export declare function time(source: string | Date | Moment, zone?: string): CronTime;
export declare function sendAt(cronTime: string | Date | Moment): Moment;
export declare function timeout(cronTime: string | Date | Moment): number;
