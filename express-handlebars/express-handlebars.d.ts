// Type definitions for express-handlebars
// Project: https://github.com/ericf/express-handlebars
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ExphbsOptions {
    handlebars?: any;
    extname?: string;
    layoutsDir?: string;
    partialsDir?: string;
    defaultLayout?: string;
    helpers?: any;
    compilerOptions?: any;
}

declare module "express-handlebars" {
    function exphbs(options: ExphbsOptions): Function;
    export = exphbs;
}
