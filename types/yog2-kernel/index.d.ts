// Type definitions for yog2-kernel 1.9
// Project: https://github.com/fex-team/yog2-kernel
// Definitions by: ssddi456 <https://github.com/ssddi456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";
import * as _ from "lodash";
import * as ral from "node-ral";
import * as log from "yog-log";
import * as yogBigpipe from "yog-bigpipe";

declare global {
    const yog: yog.Yog;
}

export interface YogBootstrapOption {
    // 设置yog根目录，默认使用启动文件的目录
    rootPath?: string;
    // 设置plugins目录
    pluginsPath?: string;
    // 设置conf目录
    confPath?: string;
    // 设置app，未设置则直接使用express
    app?: express.Express;
}
export interface Request extends express.Request {
    CURRENT_APP: string;
    ral: typeof ral.RAL;
    ralP: typeof ral.RALPromise;
}
export interface Response extends express.Response {
    bigpipe: yogBigpipe.BigPipe;
}

export interface ActionObject {
    get?: express.RequestHandler;
    post?: express.RequestHandler;
    put?: express.RequestHandler;
    delete?: express.RequestHandler;
    del?: express.RequestHandler;
    copy?: express.RequestHandler;
    head?: express.RequestHandler;
    options?: express.RequestHandler;
    purge?: express.RequestHandler;
    lock?: express.RequestHandler;
    unlock?: express.RequestHandler;
    propfind?: express.RequestHandler;
    view?: express.RequestHandler;
    link?: express.RequestHandler;
    unlick?: express.RequestHandler;
    patch?: express.RequestHandler;
    [key: string]: any;
}

export interface Router extends express.Router {
    action(actionName: string): express.RequestHandler | ActionObject;
    wrapAsync(fn: (req: Request, resp: Response, next: express.NextFunction) => any): express.RequestHandler;
}

export namespace yog {
    class Yog {
        express: typeof express;
        app: express.Express;
        _: typeof _;

        log: log.Logger;

        // 当 yog.conf.promise.overrideRAL 为true时，可以当作promise使用
        ral: typeof ral.RAL | typeof ral.RALPromise;
        RAL: typeof ral.RAL;

        ralP: typeof ral.RALPromise;

        view: {
            // 清除viewcache
            cleanCache(): void;
        };

        // debug模式时存在
        reloadApp?(appName: string): void;
        // debug模式时存在
        reloadView?(): void;
        // debug模式时存在
        reloadIsomorphic?(): void;

        ROOT_PATH: string;

        bootstrap(option: YogBootstrapOption, callback?: () => void): void;
    }
}

export default yog;
