declare module "cron-parser"
{
    export function parseExpressionSync(expression, options?:Options);
    export function parseExpression(expression, options:Options, callback:Function);
    export function parseString(data, callback:Function);
    export function parseFile(filePath:string, callback:Function);

    interface Options {
        currentDate?:number;
        endDate?:number;
    }
}
