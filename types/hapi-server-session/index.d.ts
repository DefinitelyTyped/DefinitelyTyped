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
    algorithm?: string;
    cache?: CachePolicyOptions<any>;
    cookie?: ServerStateCookieOptions;
    expiresIn?: number;
    key?: BinaryLike;
    name?: string;
    size?: number;
    vhost?: string | string[];
}

export const plugin: Plugin<Options>;

export default plugin;
