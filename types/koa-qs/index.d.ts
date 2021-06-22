// Type definitions for koa-qs 2.0
// Project: https://github.com/koajs/qs#readme
// Definitions by: Rémy Jeancolas <https://github.com/RemyJeancolas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as koa from 'koa';

declare namespace koaQs {
    type ParseMode = 'extended'|'strict'|'first';
}

declare function koaQs(app: koa, mode?: koaQs.ParseMode): koa;

export = koaQs;
