// Type definitions for koa-mongo 1.9
// Project: https://github.com/nswbmw/koa-mongo
// Definitions by: Andrea Giurgola <https://github.com/Shqrp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import { Middleware } from "koa";
import { Db, MongoClient, MongoClientOptions } from "mongodb";
import { Options } from "generic-pool";

declare module "koa" {
  interface BaseContext {
    mongo: MongoClient;
    db: Db;
  }
}

declare namespace mongo {
  interface ConnectionOptions extends Options {
    host?: string | undefined;
    port?: number | undefined;
    db?: string | undefined;
    authSource?: string | undefined;
    uri?: string | undefined;
    url?: string | undefined;
  }
}

declare function mongo(connOptions?: mongo.ConnectionOptions, confOptions?: MongoClientOptions): Middleware;

export = mongo;
