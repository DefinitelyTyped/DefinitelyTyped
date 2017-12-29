// Type definitions for socket.io-redis 1.0.0
// Project: https://github.com/socketio/socket.io-redis
// Definitions by: Philipp Holzer <https://github.com/nupplaphil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference types="socket.io" />

declare module 'socket.io-redis' {
	var redis: SocketIORedisStatic;

	export = redis;
}

interface SocketIORedisStatic {
	/**
	 * Default Redis Adapter constructor
	 */
	(): SocketIORedis.RedisAdapter;

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

/**
 * TODO: return Value for pubClient and subClient is RedisClient, but the im port throws errors because of "invalid module name in augmenatition"
 *
 */
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
		port?: number;

		/**
		 * The optional redis client to publish events on
		 */
		pubClient?: any;

		/**
		 * The optional redis client to subscribe to events on
		 */
		subClient?: any;
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
		pubClient?: any;

		/**
		 * Optional, the redis client to subscribe to events on
		 */
		subClient?: any;

		/**
		 * Broadcasts a packet
		 * @param packet The packet to broadcast
		 * @param opts Any options to send along:
		 *    - rooms: An optional list of rooms to broadcast to. If empty, the packet is broadcast to all sockets
		 *    - except: A list of Socket IDs to exclude
		 *    - flags: Any flags that we want to send along ('json', 'volatile', 'broadcast')
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
			(id: string): void;
			(id: string, callback?: (err?: any) => void): void;
		};

		/**
		 * clients returns the list of client IDs connected to rooms across all nodes.
		 * @param {string[]} rooms
		 * @param {(err?: any, clients: string[]) => void} callback
		 */
		clients(rooms: string[], callback: (err: any, clients: string[]) => void) : void;

		/**
		 * clientRooms returns the list of rooms the client with the given ID has joined 
		 * (even on another node).
		 * @param {string} id 
		 * @param {(err: any, rooms: string[]) => void} callback 
		 */
		clientRooms(id: string, callback: (err: any, rooms: string[]) => void) : void;

		/**
		 * allRooms returns the list of all rooms.
		 * @param {(err: any, rooms: string[]) => void} callback 
		 */
		allRooms(callback: (err: any, rooms: string[]) => void) : void;

		/**
		 * remoteJoin rakes the socket with the given id join the room.
		 * The callback will be called once the socket has joined the room, or with an
		 * err argument if the socket was not found.
		 * @param {string} id the socket Id.
		 * @param {string} room the room Id.
		 * @param {(err: any) => void} callback 
		 */
		remoteJoin(id: string, room: string, callback: (err: any) => void) : void;

		/**
		 * remoteLeave makes the socket with the given id leave the room.
		 * The callback will be called once the socket has left the room, or with an
		 * err argument if the socket was not found.
		 * @param {string} id the socket Id.
		 * @param {string} room the room Id.
		 * @param {(err: any) => void} callback 
		 */
		remoteLeave(id: string, room: string, callback: (err: any) => void) : void;

		/**
		 * remoteDisconnect makes the socket with the given id to get disconnected. 
		 * If close is set to true, it also closes the underlying socket. 
		 * The callback will be called once the socket was disconnected, or with an 
		 * err argument if the socket was not found.
		 * @param {string} id the socket Id.
		 * @param {boolean} close close the underlying socket
		 * @param {(err: any) => void} callback 
		 */
		remoteDisconnect(id: string, close: boolean, callback: (err: any) => void) : void;

		/**
		 * customRequest sends a request to every nodes, that will respond through the 
		 * customHook method.
		 * @param {any} data
		 * @param {(err: any, replies: any[]) => void} callback 
		 */
		customRequest(data: any, callback: (err: any, replies: any[]) => void) : void;
	}
}
