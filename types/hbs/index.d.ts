import handlebars = require("handlebars");

type handlebarsModule = typeof handlebars;

interface hbsModule {
    readonly handlebars: handlebarsModule;
    localsAsTemplateData(app: any): void;
    registerHelper(helperName: string, helperFunction: (...args: any[]) => any): void;
    registerPartial(partialName: string, partialValue: string): void;
    registerPartials(directoryName: string, callback?: () => void): void;
    __express(filename: string, options: any, cb: (...args: any[]) => any): any;
}

interface hbsModuleWithCreate extends hbsModule {
    create(handlebars?: handlebarsModule): hbsModule;
}

declare var baseModule: hbsModuleWithCreate;

export = baseModule;
