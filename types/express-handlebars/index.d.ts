// Type definitions for express-handlebars 5.3
// Project: https://github.com/ericf/express-handlebars
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
//                 Igor Dultsev <https://github.com/yhaskell>
//                 Dennis Bartlett <https://github.com/dcbartlett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ExpressHandlebars = require("./lib/express-handlebars");

declare const _: typeof ExpressHandlebars;

declare namespace exphbs {
    interface PartialTemplateOptions {
        cache?: boolean | undefined;
        encoding?: string | undefined;
        precompiled?: boolean | undefined;
    }

    interface RenderOptions {
        cache?: boolean | undefined;
        data?: object | undefined;
        helpers?: any;
        partials?: any;
    }

    interface ExphbsOptions {
        handlebars?: any;
        extname?: string | undefined;
        layoutsDir?: string | undefined;
        partialsDir?: any;
        defaultLayout?: string | undefined;
        helpers?: any;
        compilerOptions?: any;
    }

    interface ExphbsCallback {
        (err: any, content?: string): void;
    }

    function create(options?: ExphbsOptions): ExpressHandlebars;

    const ExpressHandlebars: typeof _;
}

/**
 * A Handlebars view engine for Express which doesn't suck.
 */
declare function exphbs(options?: exphbs.ExphbsOptions): ExpressHandlebars["engine"];

export = exphbs;
