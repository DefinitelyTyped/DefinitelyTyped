// Type definitions for koa-route 3.2
// Project: https://github.com/koajs/route#readme
// Definitions by: Mike Cook <https://github.com/migstopheles>
//                 Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';
import * as pathToRegexp from 'path-to-regexp';

declare namespace KoaRoute {
    type Path = string | RegExp | Array<string | RegExp>;

    type Handler = (this: Koa.Context, ctx: Koa.Context, ...params: any[]) => any;

    type CreateRoute = (routeFunc: Handler) => Koa.Middleware;

    interface Method {
        (path: Path): CreateRoute;
        (path: Path, fn: Handler, opts?: pathToRegexp.ParseOptions & pathToRegexp.RegExpOptions): Koa.Middleware;
    }

    type CreateMethod = (method: string) => Method;

    interface Routes {
        all: Method;
        acl: Method;
        bind: Method;
        checkout: Method;
        connect: Method;
        copy: Method;
        delete: Method;
        del: Method;
        get: Method;
        head: Method;
        link: Method;
        lock: Method;
        msearch: Method;
        merge: Method;
        mkactivity: Method;
        mkcalendar: Method;
        mkcol: Method;
        move: Method;
        notify: Method;
        options: Method;
        patch: Method;
        post: Method;
        propfind: Method;
        proppatch: Method;
        purge: Method;
        put: Method;
        rebind: Method;
        report: Method;
        search: Method;
        subscribe: Method;
        trace: Method;
        unbind: Method;
        unlink: Method;
        unlock: Method;
        unsubscribe: Method;
    }
}

declare const routes: KoaRoute.Routes;

export = routes;
