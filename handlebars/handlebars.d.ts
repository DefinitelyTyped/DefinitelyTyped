// Type definitions for Handlebars 1.0
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare var Handlebars: HandlebarsStatic;

interface HandlebarsStatic {
    registerHelper(name: string, fn: Function, inverse?: boolean): void;
    registerPartial(name: string, str: any): void;
    K(): void;
    createFrame(object: any): any;
    Exception(message: string): void;
    SafeString: typeof SafeString;
    parse(input: string): boolean;
    logger: Logger;
    log(level: number, obj: any): void;
    compile(input: any, options?: any): (context?: any, options?: any) => string;
    Logger: typeof Logger;
}

declare class SafeString {
    constructor(str: string);
    static toString(): string;
}

interface Logger {
    DEBUG: number;
    INFO: number;
    WARN: number;
    ERROR: number;
    level: number;

    methodMap: { [level: number]: string };

    log(level: number, obj: string): void;
}

declare module "handlebars" {
    export = Handlebars;
}
