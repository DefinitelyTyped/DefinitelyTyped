// Type definitions for koa-send v3.3
// Project: https://github.com/koajs/send
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Koa from 'koa';

interface ISendOptions {
    root?: string;
    index?: string;
    maxAge?: number;
    hidden?: boolean;
    format?: boolean;
    gzip?: boolean;
    setHeaders?: Function;
    extensions?: string[];
}

declare function send(ctx: Koa.Context, path: string, opts?: ISendOptions): Promise<string>;

declare namespace send {}

export = send;
