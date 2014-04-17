declare module "cron-parser"
{
    export function parseExpressionSync(expression, options?:Options);
    export function parseExpression(expression, options:Options, callback:(error:Error, cronExpression:CronExpression)=>void);
    export function parseString(data, callback:Function);
    export function parseFile(filePath:string, callback:Function);

    interface Options {
        currentDate?:Date;
        endDate?:Date;
    }

    export class CronExpression
    {
        next():Date;
    }
}
