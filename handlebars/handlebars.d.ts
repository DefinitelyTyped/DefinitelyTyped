// Type definitions for Handlebars 1.0
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


// Use either HandlebarsStatic or HandlebarsRuntimeStatic
declare var Handlebars: HandlebarsStatic;
//declare var Handlebars: HandlebarsRuntimeStatic;

/**
* Implement this interface on your MVW/MVVM/MVC views such as Backbone.View
**/
interface HandlebarsTemplatable {
    template: HandlebarsTemplateDelegate;
}

interface HandlebarsTemplateDelegate {
    (context: any, options?: any): string;
}

interface HandlebarsCommon {
    registerHelper(name: string, fn: Function, inverse?: boolean): void;
    registerPartial(name: string, str: any): void;
    K(): void;
    createFrame(object: any): any;

    Exception(message: string): void;
    SafeString: typeof SafeString;

    logger: Logger;
    log(level: number, obj: any): void;
}

interface HandlebarsStatic extends HandlebarsCommon {
    parse(input: string): boolean;
    compile(input: any, options?: any): HandlebarsTemplateDelegate;
}

interface HandlebarsRuntimeStatic extends HandlebarsCommon {
    // Handlebars.templates is the default template namespace in precompiler.
    templates: { (s: string): HandlebarsTemplateDelegate }[];
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
