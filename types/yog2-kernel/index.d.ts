
import * as express from "express";
import * as _ from "lodash";
import * as ral from "node-ral";
import * as log from "yog-log";
import * as yogBigpipe from "yog-bigpipe";


declare global {
    const yog: yog.Yog;
}


export = yog;

declare namespace yog {



    interface YogBootstrapOption {
        //设置yog根目录，默认使用启动文件的目录
        rootPath?: string;
        //设置plugins目录
        pluginsPath?: string;
        //设置conf目录
        confPath?: string;
        //设置app，未设置则直接使用express
        app?: express.Express;
    }



    class Yog {
        express: typeof express;
        app: express.Express;
        _: typeof _;

        log: log.Logger;

        // 当 yog.conf.promise.overrideRAL 为true时，可以当作promise使用
        ral: ral.RAL | ral.RALPromise<any>;
        RAL: ral.RAL;

        ralP: ral.RALPromise<any>;

        view: {
            //清除viewcache
            cleanCache: () => void;
        };

        // debug模式时存在
        reloadApp?: (appName: string) => void;
        // debug模式时存在
        reloadView?: () => void;
        // debug模式时存在
        reloadIsomorphic?: () => void;

        ROOT_PATH: string;

        bootstrap: (option: YogBootstrapOption, callback?: () => void) => void;
    }

    interface Request extends express.Request {
        CURRENT_APP: string;
        ral: ral.RAL
        ralP: ral.RALPromise<any>
    }

    interface Response extends express.Response {
        bigpipe: yogBigpipe.BigPipe
    }

    interface ActionObject {
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

    interface Router extends express.Router {
        action(actionName: string): express.RequestHandler | ActionObject;
        wrapAsync(fn: Function): express.RequestHandler
    }

}
