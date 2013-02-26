// Type definitions for Handlebars 1.0
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface HandlebarsStatic {
    registerHelper(name: string, fn: Function, inverse?: bool): void;
    registerPartial(name: string, str): void;
    K();
    createFrame(object);

    Exception(message: string): void;
    SafeString(str: string): void;

    parse(string: string);
    print(ast);
    logger;
    log(level, str): void;
    compile(environment, options?, context?, asObject?);
}

declare var Handlebars: HandlebarsStatic;