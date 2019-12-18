// Type definitions for server 1.0
// Project: https://github.com/franciscop/server#readme, https://serverjs.io
// Definitions by: Santiago Aguilar <https://github.com/sant123>
//                 Iddan Aaronsohn <https://github.com/iddan>
//                 Hugo Sanchez <https://github.com/DazSanchez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Middlewares, Context } from "./typings/common";
import { Options } from "./typings/options";

import { Router } from "./router";
import { Reply } from "./reply";

export = server;

declare namespace server {
    const router: Router;
    const reply: Reply;
}

declare function server(
    options: Options,
    ...middlewares: Middlewares
): Promise<Context>;
declare function server(...middlewares: Middlewares): Promise<Context>;
