import * as express from "express";
import * as _ from "lodash";
import * as ral from "node-ral";
import * as yogBigpipe from "yog-bigpipe";
import * as log from "yog-log";

export as namespace yog;
declare namespace yog {
    interface YogBootstrapOption {
        // 设置yog根目录，默认使用启动文件的目录
        rootPath?: string | undefined;
        // 设置plugins目录
        pluginsPath?: string | undefined;
        // 设置conf目录
        confPath?: string | undefined;
        // 设置app，未设置则直接使用express
        app?: express.Express | undefined;
    }
    interface Request extends express.Request {
        CURRENT_APP: string;
        ral: typeof ral.RAL;
        ralP: typeof ral.RALPromise;
    }
    interface Response extends express.Response {
        bigpipe: yogBigpipe.BigPipe;
    }

    interface ActionObject {
        get?: express.RequestHandler | undefined;
        post?: express.RequestHandler | undefined;
        put?: express.RequestHandler | undefined;
        delete?: express.RequestHandler | undefined;
        del?: express.RequestHandler | undefined;
        copy?: express.RequestHandler | undefined;
        head?: express.RequestHandler | undefined;
        options?: express.RequestHandler | undefined;
        purge?: express.RequestHandler | undefined;
        lock?: express.RequestHandler | undefined;
        unlock?: express.RequestHandler | undefined;
        propfind?: express.RequestHandler | undefined;
        view?: express.RequestHandler | undefined;
        link?: express.RequestHandler | undefined;
        unlick?: express.RequestHandler | undefined;
        patch?: express.RequestHandler | undefined;
        [key: string]: any;
    }

    interface Router extends express.Router {
        action(actionName: string): express.RequestHandler | ActionObject;
        wrapAsync(fn: (req: Request, resp: Response, next: express.NextFunction) => any): express.RequestHandler;
    }
}

declare class Yog {
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

    PLUGINS_PATH: string;
    ROOT_PATH: string;
    PLUGIN_TIMEOUT: string | number;
    DEBUG: boolean;

    bootstrap(option: yog.YogBootstrapOption, callback?: () => void): void;
    require(moduleName: string): any;
}

declare const yog: Yog;
export = yog;
