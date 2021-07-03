// Type definitions for koa-mongo 1.9
// Project: https://github.com/nswbmw/koa-mongo
// Definitions by: Andrea Giurgola <https://github.com/Shqrp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    host?: string;
    port?: number;
    db?: string;
    authSource?: string;
    uri?: string;
    url?: string;
  }
}

declare function mongo(connOptions?: mongo.ConnectionOptions, confOptions?: MongoClientOptions): Middleware;

export = mongo;
