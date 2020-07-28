// Type definitions for bull-arena 2.6
// Project: https://github.com/bee-queue/arena/
// Definitions by: Levi Bostian <https://github.com/levibostian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { RequestHandler } from "express";
import { ClientOpts } from "redis";

declare function Arena(
  options: BullArena.MiddlewareOptions,
  listenOptions?: BullArena.MiddlewareListenOptions
): RequestHandler;

declare namespace BullArena {
  interface MiddlewareOptions {
    queues: Array<QueueOptions & ConnectionOptions>;
  }

  interface MiddlewareListenOptions {
    port?: number;
    host?: string;
    basePath?: string;
    disableListen?: boolean;
    useCdn?: boolean;
  }

  interface QueueOptions {
    name: string;
    hostId?: string;
    type?: "bull" | "bee";
    prefix?: "bull" | "bq" | string;
  }

  type ConnectionOptions =
    | PortHostConnectionOptions
    | RedisUrlConnectionOptions
    | RedisClientConnectionOptions;

  interface PortHostConnectionOptions {
    host: string;
    port?: number;
    password?: string;
    db?: string;
  }

  interface RedisUrlConnectionOptions {
    url: string;
  }

  interface RedisClientConnectionOptions {
    redis: ClientOpts;
  }
}

export = Arena;
