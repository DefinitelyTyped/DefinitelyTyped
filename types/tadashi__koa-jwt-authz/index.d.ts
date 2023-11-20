import { Middleware } from "koa";

declare namespace koaJwtAuthz {
    interface Options {
        checkAllScopes: boolean;
        customScopeKey: string;
    }
}

declare function jwtAuthz(expectedScopes: ReadonlyArray<string>, options?: Partial<koaJwtAuthz.Options>): Middleware;

export default jwtAuthz;
