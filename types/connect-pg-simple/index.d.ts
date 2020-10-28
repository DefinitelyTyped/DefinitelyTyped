// Type definitions for connect-pg-simple 4.2
// Project: https://github.com/voxpelli/node-connect-pg-simple#readme
// Definitions by: Pasi Eronen <https://github.com/pasieronen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { RequestHandler } from "express";
import { Store, SessionOptions } from "express-session";
import { Pool, PoolConfig } from "pg";

declare function connectPgSimple(session: (options?: SessionOptions) => RequestHandler): typeof connectPgSimple.PGStore;

declare namespace connectPgSimple {
  class PGStore extends Store {
      constructor(options?: PGStoreOptions);
      close(): void;
      pruneSessions(callback?: (err: Error) => void): void;
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
      errorLog?: (...args: any[]) => void;
  }
}

export = connectPgSimple;
