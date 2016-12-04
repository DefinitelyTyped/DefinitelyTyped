// Type definitions for koa-pug v3.0.0-1
// Project: https://github.com/chrisyip/koa-pug
// Definitions by: Xavier Stouder <https://github.com/Xstoudi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../koa/koa.d.ts" />

declare module "koa-pug" {
    import * as koa from "koa";

    namespace Koa {
        interface Context {
            render(viewPath: string, locals?: Pug.PugLocals, overrideOpts?: Pug.PugCtxOptions, noCache?: boolean): void;
            render(pugStr: string, locals?: Pug.PugLocals, overrideOpts?: Pug.PugCtxOptions): void;
            render(pugStr: string, locals?: Pug.PugLocals, noCache?: boolean): void;
        }
    }
    class Pug {
        constructor(options?: Pug.PugOptions);
        use(app: koa): void;
    }
    namespace Pug {
        export interface PugOptions {
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
        export interface PugCtxOptions extends PugOptions {
            fromString: boolean;
        }
        export type PugLocals = { [str: string]: any };
    }

    export = Pug;
}