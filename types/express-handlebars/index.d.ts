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
        cache?: boolean;
        encoding?: string;
        precompiled?: boolean;
    }

    interface RenderOptions {
        cache?: boolean;
        data?: object;
        helpers?: any;
        partials?: any;
    }

    interface ExphbsOptions {
        handlebars?: any;
        extname?: string;
        layoutsDir?: string;
        partialsDir?: any;
        defaultLayout?: string;
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
