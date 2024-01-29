import { Middleware } from "koa";

declare namespace koaJwtAuthz {
    interface Options {
        checkAllScopes: boolean;
        customScopeKey: string;
    }
}

declare function jwtAuthz(expectedScopes: readonly string[], options?: Partial<koaJwtAuthz.Options>): Middleware;

export default jwtAuthz;
