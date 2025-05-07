import {
    Client,
    Connection,
    DatabaseError,
    defaults,
    escapeIdentifier,
    escapeLiteral,
    Pool,
    Query,
    Result,
    TypeOverrides,
    types,
} from "./index.js";

declare const PG: {
    defaults: typeof defaults;
    Client: typeof Client;
    Query: typeof Query;
    Pool: typeof Pool;
    Connection: typeof Connection;
    types: typeof types;
    DatabaseError: typeof DatabaseError;
    TypeOverrides: typeof TypeOverrides;
    escapeIdentifier: typeof escapeIdentifier;
    escapeLiteral: typeof escapeLiteral;
    Result: typeof Result;
};

export type * from "./index.d.ts";
export {
    Client,
    Connection,
    DatabaseError,
    defaults,
    escapeIdentifier,
    escapeLiteral,
    Pool,
    Query,
    Result,
    TypeOverrides,
    types,
};
export default PG;
