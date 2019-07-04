// Type definitions for koa-dec-router 0.0.4
// Project: https://github.com/zaaack/koa-dec-router
// Definitions by: Yerden Kembayev <https://github.com/aarystan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Router} from 'koa-router'

interface DefaultRouteOpts {
    priority: number;
    ignoreCtrlPath: boolean;
}

interface DefaultOptions {
    controllersDir: string;
    before: Function,
    after: Function,
    autoLoadControllers: boolean,
    router: Router,
}

interface DefaultCtrlOpts {
    ignoreParentPath: boolean,
    ignoreParentMdws: boolean,
    expose: boolean,
}

export function route(method: String, path: String, opts: DefaultRouteOpts, ...args: any[]): Function;

export function get(...args: any[]): Function;
export function head(...args: any[]): Function;
export function post(...args: any[]): Function;
export function put(...args: any[]): Function;
export function del(...args: any[]): Function;
export function patch(...args: any[]): Function;
export function all(...args: any[]): Function;

export function controller (path: string, opts: DefaultCtrlOpts, ...args: any[]);

export default function (opts: DefaultOptions): Function;

export as namespace KoaDecRouter;