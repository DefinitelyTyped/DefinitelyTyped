import { Context, Middlewares } from "./typings/common";
import { Options } from "./typings/options";

import { Reply } from "./reply";
import { Router } from "./router";

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
