declare module log4js_module
{
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

interface Log4jsStatic
{
    getLogger(categoryName:string):log4js_module.Logger;
    getDefaultLogger():log4js_module.Logger;
    addAppender();
    configure(configurationFileOrObject?:any, options?:any);
}

declare var log4js:Log4jsStatic;

declare module "log4js"
{
    export = log4js;
}