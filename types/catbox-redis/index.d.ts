// Type definitions for catbox-redis 4.1
// Project: https://github.com/hapijs/catbox-redis#readme
// Definitions by: Simon Schick <https://github.com/SimonSchick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// tslint:disable-next-line
declare module 'catbox-redis' {
    import { Redis } from 'ioredis';
    import { EnginePrototype, ClientOptions, Client } from 'catbox';
    namespace CatboxRedis {
      interface CatboxRedisOptions extends ClientOptions {
        /**
         * Raw client.
         */
        client?: Redis;
        /**
         * the Redis server URL (if url is provided, host, port, and socket are ignored)
         */
        url?: string;
        /**
         * the Redis server hostname.
         * Defaults to '127.0.0.1'.
         */
        host?: string;
        /**
         * the Redis server port or unix domain socket path.
         * Defaults to 6379.
         */
        port?: number;
        /**
         * the unix socket string to connect to (if socket is provided, host and port are ignored)
         */
        socket?: string;
        /**
         * the Redis authentication password when required.
         */
        password?: string;
        /**
         * the Redis database.
         */
        database?: string;
        /**
         * an array of redis sentinel addresses to connect to.
         */
        sentinels?: Array<{
          host: string;
        }>;
        /**
         * the name of the sentinel master.
         * (Only needed when sentinels is specified)
         */
        sentinelName?: string;
      }
    }
    class CatboxRedis<T> extends Client<T> {
      constructor(options: CatboxRedis.CatboxRedisOptions);
    }
    export = CatboxRedis;
  }
