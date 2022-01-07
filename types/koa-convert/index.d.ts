// Type definitions for koa-convert 1.2
// Project: https://github.com/koajs/convert, https://github.com/gyson/koa-convert
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
  Middleware,
  Next,
  DefaultState,
  DefaultContext,
} from "koa";

type MW<State, Context> = ((next: any) => Generator) | (Middleware<State, Context>);

declare namespace KoaConvert {
  interface convert {
    <State = DefaultState, Context = DefaultContext>(
      mw: MW<State, Context>
    ): Middleware<State, Context>;

    compose<State = DefaultState, Context = DefaultContext>(
      ...mw: Array<MW<State, Context>>
    ): Middleware<State, Context>;

    back<State = DefaultState, Context = DefaultContext>(
      mw: MW<State, Context>
    ): Middleware<State, Context>;
  }
}

declare const convert: KoaConvert.convert;

export = convert;
