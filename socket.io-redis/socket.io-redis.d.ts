// Type definitions for socket.io-redis 1.0.0
// Project: https://github.com/socketio/socket.io-redis
// Definitions by: Philipp Holzer <https://github.com/nupplaphil/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../redis/redis.d.ts" />

import { RedisClient } from 'redis';

declare module 'socket.io-redis' {
	var io: SocketIORedisStatic;

	export = io;
}

interface SocketIORedisStatic {
	/**
	 * Creates a new Redis Adapter
	 * @param uri Is a string like localhost:6379 where your redis server is located.
	 * @param opts An optional parameters object
	 */
	(uri: string, opts?: SocketIORedis.SocketIORedisOptions): SocketIORedis.RedisAdapter;

	/**
	 * Creates a new Redis Adapter
	 * @param opts A parameters object
	 */
	(opts: SocketIORedis.SocketIORedisOptions): SocketIORedis.RedisAdapter;
}

declare namespace SocketIORedis {
	/**
	 * Options to pass to the redis server when creating it
	 */
	interface SocketIORedisOptions {

		/**
		 * The optional name of the key to pub/sub events on as prefix
		 * @default socket.io
		 */
		key?: string;

		/**
		 * The optional host to connect to redis on
		 * @default localhost
		 */
		host?: string;

		/**
		 * The optional port to connect to redis on
		 * @default 6379
		 */
		port?: string;

		/**
		 * The optional redis client to publish events on
		 */
		pubClient?: RedisClient;

		/**
		 * The optional redis client to subscribe to events on
		 */
		subClient?: RedisClient;
	}

	interface RedisAdapter extends SocketIO.Adapter {

		/**
		 * This servers key
		 */
		uid: string;

		/**
		 * The prefix of pub/sub events
		 */
		prefix: string;

		/**
		 * Optional, the redis client to publish events on
		 */
		pubClient?: RedisClient;

		/**
		 * Optional, the redis client to subscribe to events on
		 */
		subClient?: RedisClient;

		/**
		 * Broadcasts a packet
		 * @param packet The packet to broadcast
		 * @param opts Any options to send along:
		 * 	- rooms: An optional list of rooms to broadcast to. If empty, the packet is broadcast to all sockets
		 * 	- except: A list of Socket IDs to exclude
		 * 	- flags: Any flags that we want to send along ('json', 'volatile', 'broadcast')
		 * @param remote The optional flag, whether the packet came from another node
		 */
		broadcast: {
			(packet: any, opts: { rooms?: string[]; except?: string[]; flags?: {[flag: string]: boolean} }): void;
			(packet: any, opts: { rooms?: string[]; except?: string[]; flags?: {[flag: string]: boolean} }, remote?: boolean): void;
		};

		/**
		 * Removes a socket from all the rooms that it's joined
		 * @param id The ID of the socket that we're removing
		 * @param callback An optional callback to call when the socket has been
		 */
		delAll: {
			( id: string ): void;
			( id: string, callback?: ( err?: any ) => void ): void;
		};
	}
}
