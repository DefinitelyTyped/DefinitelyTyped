// Type definitions for @hapi/catbox-redis 5.0
// Project: https://github.com/hapijs/catbox-redis
// Definitions by: Simon Schick <https://github.com/SimonSchick>
//                 Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// tslint:disable-next-line:no-single-declare-module
declare module '@hapi/catbox-redis' {
    import { Redis, Cluster } from 'ioredis';
    import { EnginePrototype, ClientOptions, Client } from '@hapi/catbox';
    namespace CatboxRedis {
      interface CatboxRedisOptions extends ClientOptions {
        /**
         * Raw client.
         */
        client?: Redis | Cluster | undefined;
        /**
         * the Redis server URL (if url is provided, host, port, and socket are ignored)
         */
        url?: string | undefined;
        /**
         * the Redis server hostname.
         * Defaults to '127.0.0.1'.
         */
        host?: string | undefined;
        /**
         * the Redis server port or unix domain socket path.
         * Defaults to 6379.
         */
        port?: number | undefined;
        /**
         * the unix socket string to connect to (if socket is provided, host and port are ignored)
         */
        socket?: string | undefined;
        /**
         * the Redis authentication password when required.
         */
        password?: string | undefined;
        /**
         * the Redis database.
         */
        database?: string | undefined;
        /**
         * an array of redis sentinel addresses to connect to.
         */
        sentinels?: Array<{
          host: string;
        }> | undefined;
        /**
         * the name of the sentinel master.
         * (Only needed when sentinels is specified)
         */
        sentinelName?: string | undefined;
      }
    }
    class CatboxRedis<T> extends Client<T> {
      constructor(options: CatboxRedis.CatboxRedisOptions);
    }
    export = CatboxRedis;
  }
