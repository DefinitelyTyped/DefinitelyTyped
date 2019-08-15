// Type definitions for http-server 0.10
// Project: https://github.com/indexzero/http-server#readme
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as http from "http";
import * as https from "https";
import { HandleFunction } from "connect";

export function createServer(options?: Options): http.Server | https.Server;

export interface Options {
    root?: string;
    headers?: { [name: string]: string };
    cache?: number;
    showDir?: boolean | "false";
    autoIndex?: boolean | "false";
    showDotfiles?: boolean;
    gzip?: boolean;
    contentType?: string;
    ext?: boolean;
    before?: HandleFunction[];
    // tslint:disable-next-line prefer-method-signature
    logFn?: (req: http.IncomingMessage, res: http.ServerResponse, err: Error) => void;
    cors?: boolean;
    corsHeaders?: string;
    robots?: string | true;
    proxy?: string;
    https?: https.ServerOptions;
}
