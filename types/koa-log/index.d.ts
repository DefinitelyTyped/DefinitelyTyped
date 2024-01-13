import * as Koa from "koa";

declare function koaLog(type: string): Koa.Middleware;

declare namespace koaLog {
    namespace morgan {
        function cookie(ctx: Koa.BaseContext, key: string): string;

        function date(ctx: Koa.BaseContext, format: string): string;

        function format(name: string): string;

        function length(ctx: Koa.BaseContext): number | undefined;

        function method(ctx: Koa.BaseContext): string;

        function referrer(ctx: Koa.BaseContext): string;

        function status(ctx: Koa.BaseContext): number;

        function token(name: string, fn: (ctx: Koa.ParameterizedContext) => string): void;

        function url(ctx: Koa.BaseContext): string;
    }
}

export = koaLog;
