// Type definitions for express-handlebars
// Project: https://github.com/ericf/express-handlebars
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Promise {} // This should be replaced with a Promise type definition import.

interface PartialTemplateOptions {
    cache?: boolean;
    precompiled?: boolean;
}

interface RenderOptions {
    cache?: boolean;
    data?: Object;
    helpers?: any;
    partials?: any;
}

interface ExphbsOptions {
    handlebars?: any;
    extname?: string;
    layoutsDir?: string;
    partialsDir?: string;
    defaultLayout?: string;
    helpers?: any;
    compilerOptions?: any;
}

interface Exphbs {
    engine: Function;
    extname: string;
    compiled: Object;
    precompiled: Object;
    create(options?: ExphbsOptions): Exphbs;
    getPartials(options?: PartialTemplateOptions): Promise;
    getTemplate(filePath: string, options?: PartialTemplateOptions): Promise;
    getTemplates(dirPath: string, options?: PartialTemplateOptions): Promise;
    render(filePath: string, context: Object, options?: RenderOptions): Promise;
    renderView(viewPath: string, optionsOrCallback?: any, callback?: Function): void;
}

declare module "express-handlebars" {
    var exphbs: Exphbs;
    export = exphbs;
}
