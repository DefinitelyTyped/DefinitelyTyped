// Type definitions for @tadashi/koa-jwt-authz 2.0
// Project: https://github.com/lagden/koa-jwt-authz#readme
// Definitions by: Andrea Giurgola <https://github.com/Shqrp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Middleware } from 'koa';

declare namespace koaJwtAuthz {
    interface Options {
        checkAllScopes: boolean;
        customScopeKey: string;
    }
}

declare function jwtAuthz(expectedScopes: ReadonlyArray<string>, options?: Partial<koaJwtAuthz.Options>): Middleware;

export default jwtAuthz;
