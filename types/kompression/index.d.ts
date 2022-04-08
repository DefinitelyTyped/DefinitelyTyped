// Type definitions for kompression 1.0
// Project: https://github.com/tuananh/kompression
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import koa = require("koa");

export = kompression;

declare function kompression(options?: Kompression.Options): koa.Middleware;

declare namespace Kompression {
    interface Options {
        filter?: (contentType: string) => boolean;
        threshold?: number;
    }
}
