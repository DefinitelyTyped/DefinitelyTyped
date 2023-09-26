import { CachePolicyOptions, Plugin, ServerStateCookieOptions } from "@hapi/hapi";
import { BinaryLike } from "crypto";

declare module "@hapi/hapi" {
    interface Request {
        session: any;
    }
}

export interface Options {
    algorithm?: string | undefined;
    cache?: CachePolicyOptions<any> | undefined;
    cookie?: ServerStateCookieOptions | undefined;
    expiresIn?: number | undefined;
    key?: BinaryLike | undefined;
    name?: string | undefined;
    size?: number | undefined;
    vhost?: string | string[] | undefined;
}

export const plugin: Plugin<Options>;

export default plugin;
