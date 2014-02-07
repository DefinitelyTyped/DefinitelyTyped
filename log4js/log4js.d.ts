declare module "log4js"
{
    export function getLogger(categoryName:string):Logger;
    export function getDefaultLogger():Logger;
    export function addAppender();
    export function configure(configurationFileOrObject?:any, options?:any);

    export class Logger
    {
        constructor(name?:string, level?:string);
        setLevel(level:string);
        removeLevel(level:string);

        log(...args: any[]);
        trace(...args: any[]);
        debug(...args: any[]);
        info(...args: any[]);
        warn(...args: any[]);
        error(...args: any[]);
        fatal(...args: any[]);
    }
}