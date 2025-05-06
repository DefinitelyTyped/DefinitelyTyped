import type * as pg from "./index.d.ts";

import TypeOverrides = require("./lib/type-overrides");

export type * from "./index.d.ts";

export const defaults: typeof pg.defaults;
export const Client: typeof pg.Client;
export const Query: typeof pg.Query;
export const Pool: typeof pg.Pool;
export const Connection: typeof pg.Connection;
export const types: typeof pg.types;
export const DatabaseError: typeof pg.DatabaseError;
export const escapeIdentifier: typeof pg.escapeIdentifier;
export const escapeLiteral: typeof pg.escapeLiteral;
export const Result: typeof pg.Result;

export { TypeOverrides };

declare const PG: {
    defaults: typeof pg.defaults;
    Client: typeof pg.Client;
    Query: typeof pg.Query;
    Pool: typeof pg.Pool;
    Connection: typeof pg.Connection;
    types: typeof pg.types;
    DatabaseError: typeof pg.DatabaseError;
    TypeOverrides: typeof TypeOverrides;
    escapeIdentifier: typeof pg.escapeIdentifier;
    escapeLiteral: typeof pg.escapeLiteral;
    Result: typeof pg.Result;
};

export default PG;
