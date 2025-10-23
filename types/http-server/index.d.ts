import { HandleFunction } from "connect";
import * as http from "http";
import * as https from "https";

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
