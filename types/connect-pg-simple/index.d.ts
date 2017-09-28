// Type definitions for connect-pg-simple 4.2
// Project: https://github.com/voxpelli/node-connect-pg-simple#readme
// Definitions by: Pasi Eronen <https://github.com/pasieronen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { RequestHandler } from "express";
import { Store, SessionOptions } from "express-session";
import { Pool, PoolConfig } from "pg";

declare function connectPgSimple(session: (options?: SessionOptions) => RequestHandler): connectPgSimple.PGStore;

declare namespace connectPgSimple {
  interface PGStore {
      new (options: PGStoreOptions): Store;
  }
  interface PGStoreOptions {
      pool?: Pool;
      pgPromise?: object; // not typed to avoid dependency to "pg-promise" module (which includes its own types)
      conString?: string;
      conObject?: PoolConfig;
      ttl?: number;
      schemaName?: string;
      tableName?: string;
      pruneSessionInterval?: false | number;
      // tslint:disable-next-line:prefer-method-signature
      errorLog?: (...args: any[]) => void;
  }
}

export = connectPgSimple;
