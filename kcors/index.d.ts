// Type definitions for kcors 2.2
// Project: https://github.com/koajs/cors
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Koa from "koa";

declare function cors(
    options?: {
        origin?: (req: Koa.Request) => string | string;
        allowMethods?: string[] | string;
        exposeHeaders?: string[] | string;
        allowHeaders: string[] | string;
        maxAge?: number | string;
        credentials?: boolean;
        keepHeadersOnError?: boolean;
    }
): (ctx: Koa.Context, next: () => Promise<any>) => Promise<any>;
declare namespace cors { }
export = cors;
