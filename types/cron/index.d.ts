// Type definitions for cron 1.2
// Project: https://www.npmjs.com/package/cron
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface CronJobStatic {
    new (cronTime: string | Date, onTick: () => void, onComplete?: () => void, start?: boolean, timeZone?: string, context?: any, runOnInit?: boolean): CronJob;
    new (options: {
        cronTime: string | Date; onTick: () => void; onComplete?: () => void; start?: boolean; timeZone?: string; context?: any; runOnInit?: boolean
    }): CronJob;
}
interface CronJob {
    start(): void;
    stop(): void;
    running: boolean | undefined;
}
export declare var CronJob: CronJobStatic;

interface CronTimeStatic {
    new (time: string | Date): CronTime;
}
interface CronTime { }
export declare var CronTime: CronTimeStatic;
