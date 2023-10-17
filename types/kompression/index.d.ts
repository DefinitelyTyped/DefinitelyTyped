import koa = require("koa");

export = kompression;

declare function kompression(options?: Kompression.Options): koa.Middleware;

declare namespace Kompression {
    interface Options {
        filter?: ((contentType: string) => boolean) | undefined;
        threshold?: number | undefined;
    }
}
