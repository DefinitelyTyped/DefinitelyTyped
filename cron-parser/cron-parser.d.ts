declare module "cron-parser" {

    export function  parseExpressionSync(expression, options);
    export function   parseExpression(expression, options, callback:Function);
    export function  parseString(data, callback:Function);
    export function   parseFile(filePath:string, callback:Function);
}
