declare module "cron"
{
    export class CronJob
    {
        constructor(cronTime:CronTimeOptions);
        constructor(cronTime:string, onTick?:Function, onComplete?:Function, start?:boolean, timeZone?:string, context?);
        addCallback(callback:Function);
        setTime(time:Number);
        nextDate():Number;
        start();
        stop();
    }

    export class CronTime
    {
        constructor(source, zone);
    }

    interface CronTimeOptions
    {
        onTick:Function;
        onComplete:Function;
        context;
        start:boolean;
        timeZone:string;
        cronTime:string;
    }
}