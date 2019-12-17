// Type definitions for socket.io-emitter 3.1
// Project: https://github.com/socketio/socket.io-emitter#readme
// Definitions by: Ben Salili-James <https://github.com/benhjames>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace init {
    /**
     * The Redis client passed to `socket.io-emitter` only requires the `publish`
     * method, so accept any client that implements this.
     */
    interface RedisClient {
        publish: (channel: string, message: string) => Promise<any>;
    }

    class SocketIOEmitter {
        redis: RedisClient;
        prefix: string;
        nsp: string;
        channel: string;

        private _rooms: string[];
        private _flags: Record<'broadcast' | 'json' | 'volatile', boolean | undefined>;

        // TypeScript Version: 3.6
        get broadcast(): this;

        // TypeScript Version: 3.6
        get json(): this;

        // TypeScript Version: 3.6
        get volatile(): this;

        in(room: string): this;
        to(room: string): this;

        of(nsp: string): SocketIOEmitter;

        emit(...data: any[]): this;
    }

    type SocketIORedisOptions = { host: string; port: number } | { socket: string };

    interface SocketIOEmitterOptions {
        key?: string;
    }
}

declare function init(
    redisOptions: init.RedisClient | init.SocketIORedisOptions | string,
    options?: init.SocketIOEmitterOptions,
): init.SocketIOEmitter;

export = init;
