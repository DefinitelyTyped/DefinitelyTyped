// Type definitions for koa-pug 3.0
// Project: https://github.com/chrisyip/koa-pug
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as koa from "koa";

export namespace Koa {
    interface Context {
        render(viewPath: string, locals?: Pug.PugLocals, overrideOpts?: Pug.PugCtxOptions, noCache?: boolean): void;
        // tslint:disable-next-line:unified-signatures
        render(pugStr: string, locals?: Pug.PugLocals, overrideOpts?: Pug.PugCtxOptions): void;
        // tslint:disable-next-line:unified-signatures
        render(pugStr: string, locals?: Pug.PugLocals, noCache?: boolean): void;
    }
}
export class Pug {
    constructor(options?: Pug.PugOptions);
    use(app: koa): void;
}
export namespace Pug {
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
    export interface PugLocals { [str: string]: any; }
}
