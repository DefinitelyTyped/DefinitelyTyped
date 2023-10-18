import { Options } from "generic-pool";
import { Middleware } from "koa";
import { Db, MongoClient, MongoClientOptions } from "mongodb";

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
