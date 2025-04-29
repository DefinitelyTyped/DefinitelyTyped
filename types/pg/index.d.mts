import type * as pg from "./index.d.ts";

import TypeOverrides = require("./lib/type-overrides");

export type * from "./index.d.ts";

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
    Result: pg.Result;
};

export default PG;
