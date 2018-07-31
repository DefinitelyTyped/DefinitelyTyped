// Type definitions for koa-pug 3.0
// Project: https://github.com/chrisyip/koa-pug
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as koa from "koa";

export = Pug;

/** main module */
declare class Pug {
    locals: {
      [key: string]: any;
    };
    constructor(options?: Pug.PugOptions);
    use(app: koa): void;
}

declare namespace Pug {
    interface PugOptions {
        viewPath?: string;
        pretty?: boolean;
        compileDebug?: boolean;
        debug?: boolean;
        locals?: PugLocals;
        noCache?: boolean;
        helperPath?: string | Array<string | { [str: string]: any }>;
        basedir?: string;
        app?: koa;
    }
    interface PugCtxOptions extends PugOptions {
        fromString: boolean;
    }
    interface PugLocals { [str: string]: any; }
}

/** plugin */
declare module 'koa' {
    interface Context {
        render(viewPath: string, locals?: Pug.PugLocals, overrideOpts?: Pug.PugCtxOptions, noCache?: boolean): void;
        render(viewPath: string, locals?: Pug.PugLocals, overrideOpts?: boolean): void;
    }
}
