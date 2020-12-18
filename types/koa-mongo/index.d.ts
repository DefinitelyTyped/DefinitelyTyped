import { Middleware } from "koa";
import { Db, MongoClient, MongoClientOptions } from "mongodb";
import { Options } from "generic-pool";

declare module "koa" {
  interface BaseContext {
    mongo: MongoClient;
    db: Db
  }
}

declare namespace koaMongo {
  interface ConnectionOptions extends Options {
    host?: string;
    port?: number;
    db?: string;
    authSource?: string;
    uri?: string;
    url?: string;
  }
}

declare module "koa-mongo" {
  declare function mongo(connOptions?: koaMongo.ConnectionOptions, confOptions?: MongoClientOptions): Middleware;
}

export = mongo;
