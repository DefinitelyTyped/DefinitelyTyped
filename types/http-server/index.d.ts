// Type definitions for http-server 0.12
// Project: https://github.com/indexzero/http-server#readme
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as http from "http";
import * as https from "https";
import { HandleFunction } from "connect";

export function createServer(options?: Options): http.Server | https.Server;

export interface Options {
    root?: string | undefined;
    headers?: { [name: string]: string } | undefined;
    cache?: number | undefined;
    showDir?: boolean | "false" | undefined;
    autoIndex?: boolean | "false" | undefined;
    showDotfiles?: boolean | undefined;
    gzip?: boolean | undefined;
    contentType?: string | undefined;
    ext?: boolean | undefined;
    before?: HandleFunction[] | undefined;
    logFn?: ((req: http.IncomingMessage, res: http.ServerResponse, err: Error) => void) | undefined;
    cors?: boolean | undefined;
    corsHeaders?: string | undefined;
    robots?: string | true | undefined;
    proxy?: string | undefined;
    https?: https.ServerOptions | undefined;
    username?: string | undefined;
    password?: string | undefined;
}
