// Type definitions for hbs 4.0
// Project: https://github.com/pillarjs/hbs
// Definitions by: David Muller <https://github.com/davidm77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import handlebars = require('handlebars');

type handlebarsModule = typeof handlebars;

interface hbsModule {
    readonly handlebars: handlebarsModule;
    localsAsTemplateData(app: any): void;
    registerHelper(helperName: string, helperFunction: Function): void;
    registerPartial(partialName: string, partialValue: string): void;
    registerPartials(directoryName: string, callback?: () => void): void;
    __express(filename: string, options: any, cb: Function): any;
}

interface hbsModuleWithCreate extends hbsModule {
    create(handlebars?: handlebarsModule): hbsModule;
}

declare var baseModule: hbsModuleWithCreate;

export = baseModule;
