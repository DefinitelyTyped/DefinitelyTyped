import Koa = require("koa");

declare function mount<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext>(
    app: Koa.Middleware<StateT, ContextT> | Koa<StateT, ContextT>,
): Koa.Middleware<StateT, ContextT>;

declare function mount<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext>(
    prefix: string,
    app: Koa.Middleware<StateT, ContextT> | Koa<StateT, ContextT>,
): Koa.Middleware<StateT, ContextT>;

declare namespace mount {}

export = mount;
