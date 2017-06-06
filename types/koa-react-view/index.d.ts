// Type definitions for koa-react-view v3.0.0
// Project: https://github.com/koajs/react-view
// Definitions by: ephoton <https://github.com/ephoton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'koa-react-view' {
    import * as Koa from 'koa';

    interface ViewOptions {
        doctype?: string;
        beautify?: boolean;
        cache?: string;
        extname?: string;
        writeResp?: boolean;
        views: string;
        internals?: boolean;
    }

    function view(app: Koa, options: ViewOptions): Koa.Middleware;

    namespace view {}

    export = view;
}
