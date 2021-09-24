// Type definitions for hapi-server-session 5.1
// Project: https://github.com/btmorex/hapi-server-session
// Definitions by: Avery Fay <https://github.com/btmorex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BinaryLike } from 'crypto';
import { CachePolicyOptions, Plugin, ServerStateCookieOptions } from '@hapi/hapi';

declare module '@hapi/hapi' {
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
