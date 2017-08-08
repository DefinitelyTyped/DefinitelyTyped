// Type definitions for socket.io 1.4.4
// Project: http://socket.io/
// Definitions by: PROGRE <https://github.com/progre/>, Damian Connolly <https://github.com/divillysausages/>, Florent Poujol <https://github.com/florentpoujol/>, KentarouTakeda <https://github.com/KentarouTakeda/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node" />

declare module 'socket.io' {
	var server: SocketIOStatic;

	export = server;
}

interface SocketIOStatic {
	/**
	 * Default Server constructor
	 */
	(): SocketIO.Server;

	/**
	 * Creates a new Server
	 * @param srv The HTTP server that we're going to bind to
	 * @param opts An optional parameters object
	 */
	(srv: any, opts?: SocketIO.ServerOptions): SocketIO.Server;

	/**
	 * Creates a new Server
	 * @param port A port to bind to, as a number, or a string
	 * @param An optional parameters object
	 */
	(port: string|number, opts?: SocketIO.ServerOptions): SocketIO.Server;

	/**
	 * Creates a new Server
	 * @param A parameters object
	 */
	(opts: SocketIO.ServerOptions): SocketIO.Server;

	/**
	 * Backwards compatibility
	 * @see io().listen()
	 */
    listen: SocketIOStatic;
}

declare namespace SocketIO {

	interface Server {
		engine: { ws: any };

		/**
		 * A dictionary of all the namespaces currently on this Server
		 */
		nsps: {[namespace: string]: Namespace};

		/**
		 * The default '/' Namespace
		 */
		sockets: Namespace;

		/**
		 * Sets the 'json' flag when emitting an event
		 */
		json: Server;

		/**
		 * Server request verification function, that checks for allowed origins
		 * @param req The http.IncomingMessage request
		 * @param fn The callback to be called. It should take one parameter, err,
		 * which will be null if there was no problem, and one parameter, success,
		 * of type boolean
		 */
		checkRequest( req:any, fn:( err: any, success: boolean ) => void ):void;

		/**
		 * Gets whether we're serving the client.js file or not
		 * @default true
		 */
		serveClient(): boolean;

		/**
		 * Sets whether we're serving the client.js file or not
		 * @param v True if we want to serve the file, false otherwise
		 * @default true
		 * @return This Server
		 */
		serveClient( v: boolean ): Server;

		/**
		 * Gets the client serving path
		 * @default '/socket.io'
		 */
		path(): string;

		/**
		 * Sets the client serving path
		 * @param v The path to serve the client file on
		 * @default '/socket.io'
		 * @return This Server
		 */
		path( v: string ): Server;

		/**
		 * Gets the adapter that we're going to use for handling rooms
		 * @default typeof Adapter
		 */
		adapter(): any;

		/**
		 * Sets the adapter (class) that we're going to use for handling rooms
		 * @param v The class for the adapter to create
		 * @default typeof Adapter
		 * @return This Server
		 */
		adapter( v: any ): Server;

		/**
		 * Gets the allowed origins for requests
		 * @default "*:*"
		 */
		origins(): string;

		/**
		 * Sets the allowed origins for requests
		 * @param v The allowed origins, in host:port form
		 * @default "*:*"
		 * return This Server
		 */
		origins( v: string ): Server;

		/**
		 * Attaches socket.io to a server
		 * @param srv The http.Server that we want to attach to
		 * @param opts An optional parameters object
		 * @return This Server
		 */
		attach( srv: any, opts?: ServerOptions ): Server;

		/**
		 * Attaches socket.io to a port
		 * @param port The port that we want to attach to
		 * @param opts An optional parameters object
		 * @return This Server
		 */
		attach( port: number, opts?: ServerOptions ): Server;

		/**
		 * @see attach( srv, opts )
		 */
		listen( srv: any, opts?: ServerOptions ): Server;

		/**
		 * @see attach( port, opts )
		 */
		listen( port: number, opts?: ServerOptions ): Server;

		/**
		 * Binds socket.io to an engine.io intsance
		 * @param src The Engine.io (or compatible) server to bind to
		 * @return This Server
		 */
		bind( srv: any ): Server;

		/**
		 * Called with each incoming connection
		 * @param socket The Engine.io Socket
		 * @return This Server
		 */
		onconnection( socket: any ): Server;

		/**
		 * Looks up/creates a Namespace
		 * @param nsp The name of the NameSpace to look up/create. Should start
		 * with a '/'
		 * @return The Namespace
		 */
		of( nsp: string ): Namespace;

		/**
		 * Closes the server connection
		 */
		close( fn ?: () => void ):void;

		/**
		 * The event fired when we get a new connection
		 * @param event The event being fired: 'connection'
		 * @param listener A listener that should take one parameter of type Socket
		 * @return The default '/' Namespace
		 */
		on( event: 'connection', listener: ( socket: Socket ) => void ): Namespace;

		/**
		 * @see on( 'connection', listener )
		 */
		on( event: 'connect', listener: ( socket: Socket ) => void ): Namespace;

		/**
		 * Base 'on' method to add a listener for an event
		 * @param event The event that we want to add a listener for
		 * @param listener The callback to call when we get the event. The parameters
		 * for the callback depend on the event
		 * @return The default '/' Namespace
		 */
		on( event: string, listener: Function ): Namespace;

		/**
		 * Targets a room when emitting to the default '/' Namespace
		 * @param room The name of the room that we're targeting
		 * @return The default '/' Namespace
		 */
		to( room: string ): Namespace;

		/**
		 * @see to( room )
		 */
		in( room: string ): Namespace;

		/**
		 * Registers a middleware function, which is a function that gets executed
		 * for every incoming Socket, on the default '/' Namespace
		 * @param fn The function to call when we get a new incoming socket. It should
		 * take one parameter of type Socket, and one callback function to call to
		 * execute the next middleware function. The callback can take one optional
		 * parameter, err, if there was an error. Errors passed to middleware callbacks
		 * are sent as special 'error' packets to clients
		 * @return The default '/' Namespace
		 */
		use( fn: ( socket:Socket, fn: ( err?: any ) => void ) =>void ): Namespace;

		/**
		 * Emits an event to the default Namespace
		 * @param event The event that we want to emit
		 * @param args Any number of optional arguments to pass with the event. If the
		 * last argument is a function, it will be called as an ack. The ack should
		 * take whatever data was sent with the packet
		 * @return The default '/' Namespace
		 */
		emit( event: string, ...args: any[]): Namespace;

		/**
		 * Sends a 'message' event
		 * @see emit( event, ...args )
		 * @return The default '/' Namespace
		 */
		send( ...args: any[] ): Namespace;

		/**
		 * @see send( ...args )
		 */
		write( ...args: any[] ): Namespace;

		/**
		 * Gets a list of clients
		 * @return The default '/' Namespace
		 */
		clients( ...args: any[] ): Namespace;

		/**
		 * Sets the compress flag
		 * @return The default '/' Namespace
		 */
		compress( ...args: any[] ): Namespace;
	}

	/**
	 * Options to pass to our server when creating it
	 */
	interface ServerOptions {

		/**
		 * The path to server the client file to
		 * @default '/socket.io'
		 */
		path?: string;

		/**
		 * Should we serve the client file?
		 * @default true
		 */
		serveClient?: boolean;

		/**
		 * The adapter to use for handling rooms. NOTE: this should be a class,
		 * not an object
		 * @default typeof Adapter
		 */
		adapter?: Adapter;

		/**
		 * Accepted origins
		 * @default '*:*'
		 */
		origins?: string;

		/**
		 * How many milliseconds without a pong packed to consider the connection closed (engine.io)
		 * @default 60000
		 */
		pingTimeout?: number;

		/**
		 * How many milliseconds before sending a new ping packet (keep-alive) (engine.io)
		 * @default 25000
		 */
		pingInterval?: number;

		/**
		 * How many bytes or characters a message can be when polling, before closing the session
		 * (to avoid Dos) (engine.io)
		 * @default 10E7
		 */
		maxHttpBufferSize?: number;

		/**
		 * A function that receives a given handshake or upgrade request as its first parameter,
		 * and can decide whether to continue or not. The second argument is a function that needs
		 * to be called with the decided information: fn( err, success ), where success is a boolean
		 * value where false means that the request is rejected, and err is an error code (engine.io)
		 * @default null
		 */
		allowRequest?: (request:any, callback: (err: number, success: boolean) => void) => void;

		/**
		 * Transports to allow connections to (engine.io)
		 * @default ['polling','websocket']
		 */
		transports?: string[];

		/**
		 * Whether to allow transport upgrades (engine.io)
		 * @default true
		 */
		allowUpgrades?: boolean;

		/**
		 * parameters of the WebSocket permessage-deflate extension (see ws module).
		 * Set to false to disable (engine.io)
		 * @default true
		 */
		perMessageDeflate?: Object|boolean;

		/**
		 * Parameters of the http compression for the polling transports (see zlib).
		 * Set to false to disable, or set an object with parameter "threshold:number"
		 * to only compress data if the byte size is above this value (1024) (engine.io)
		 * @default true|1024
		 */
		httpCompression?: Object|boolean;

		/**
		 * Name of the HTTP cookie that contains the client sid to send as part of
		 * handshake response headers. Set to false to not send one (engine.io)
		 * @default "io"
		 */
		cookie?: string|boolean;
	}

	/**
	 * The Namespace, sandboxed environments for sockets, each connection
	 * to a Namespace requires a new Socket
	 */
	interface Namespace extends NodeJS.EventEmitter {

		/**
		 * The name of the NameSpace
		 */
		name: string;

		/**
		 * The controller Server for this Namespace
		 */
		server: Server;

		/**
		 * A dictionary of all the Sockets connected to this Namespace, where
		 * the Socket ID is the key
		 */
		sockets: { [id: string]: Socket };

		/**
		 * A dictionary of all the Sockets connected to this Namespace, where
		 * the Socket ID is the key
		 */
		connected: { [id: string]: Socket };

		/**
		 * The Adapter that we're using to handle dealing with rooms etc
		 */
		adapter: Adapter;

		/**
		 * Sets the 'json' flag when emitting an event
		 */
		json: Namespace;

		/**
		 * Registers a middleware function, which is a function that gets executed
		 * for every incoming Socket
		 * @param fn The function to call when we get a new incoming socket. It should
		 * take one parameter of type Socket, and one callback function to call to
		 * execute the next middleware function. The callback can take one optional
		 * parameter, err, if there was an error. Errors passed to middleware callbacks
		 * are sent as special 'error' packets to clients
		 * @return This Namespace
		 */
		use( fn: ( socket:Socket, fn: ( err?: any ) => void ) =>void ): Namespace;

		/**
		 * Targets a room when emitting
		 * @param room The name of the room that we're targeting
		 * @return This Namespace
		 */
		to( room: string ): Namespace;

		/**
		 * @see to( room )
		 */
		in( room: string ): Namespace;

		/**
		 * Sends a 'message' event
		 * @see emit( event, ...args )
		 * @return This Namespace
		 */
		send( ...args: any[] ): Namespace;

		/**
		 * @see send( ...args )
		 */
		write( ...args: any[] ): Namespace;

		/**
		 * The event fired when we get a new connection
		 * @param event The event being fired: 'connection'
		 * @param listener A listener that should take one parameter of type Socket
		 * @return This Namespace
		 */
		on( event: 'connection', listener: ( socket: Socket ) => void ): this;

		/**
		 * @see on( 'connection', listener )
		 */
		on( event: 'connect', listener: ( socket: Socket ) => void ): this;

		/**
		 * Base 'on' method to add a listener for an event
		 * @param event The event that we want to add a listener for
		 * @param listener The callback to call when we get the event. The parameters
		 * for the callback depend on the event
		 * @ This Namespace
		 */
		on( event: string, listener: Function ): this;

		/**
		 * Gets a list of clients.
		 * @return This Namespace
		 */
		clients( fn: Function ): Namespace;

		/**
		 * Sets the compress flag.
		 * @param compress If `true`, compresses the sending data
		 * @return This Namespace
		 */
		compress( compress: boolean ): Namespace;
	}

	/**
	 * The socket, which handles our connection for a namespace. NOTE: while
	 * we technically extend NodeJS.EventEmitter, we're not putting it here
	 * as we have a problem with the emit() event (as it's overridden with a
	 * different return)
	 */
	interface Socket extends NodeJS.EventEmitter{

		/**
		 * The namespace that this socket is for
		 */
		nsp: Namespace;

		/**
		 * The Server that our namespace is in
		 */
		server: Server;

		/**
		 * The Adapter that we use to handle our rooms
		 */
		adapter: Adapter;

		/**
		 * The unique ID for this Socket. Regenerated at every connection. This is
		 * also the name of the room that the Socket automatically joins on connection
		 */
		id: string;

		/**
		 * The http.IncomingMessage request sent with the connection. Useful
		 * for recovering headers etc
		 */
		request: any;

		/**
		 * The Client associated with this Socket
		 */
		client: Client;

		/**
		 * The underlying Engine.io Socket instance
		 */
		conn: EngineSocket;

		/**
		 * The list of rooms that this Socket is currently in, where
		 * the ID the the room ID
		 */
		rooms: { [id: string]: string };

		/**
		 * Is the Socket currently connected?
		 */
		connected: boolean;

		/**
		 * Is the Socket currently disconnected?
		 */
		disconnected: boolean;

		/**
		 * The object used when negociating the handshake
		 */
		handshake: {
			/**
			 * The headers passed along with the request. e.g. 'host',
			 * 'connection', 'accept', 'referer', 'cookie'
			 */
			headers: any;

			/**
			 * The current time, as a string
			 */
			time: string;

			/**
			 * The remote address of the connection request
			 */
			address: string;

			/**
			 * Is this a cross-domain request?
			 */
			xdomain: boolean;

			/**
			 * Is this a secure request?
			 */
			secure: boolean;

			/**
			 * The timestamp for when this was issued
			 */
			issued: number;

			/**
			 * The request url
			 */
			url: string;

			/**
			 * Any query string parameters in the request url
			 */
			query: any;
		};

		/**
		 * Sets the 'json' flag when emitting an event
		 */
		json: Socket;

		/**
		 * Sets the 'volatile' flag when emitting an event. Volatile messages are
		 * messages that can be dropped because of network issues and the like. Use
		 * for high-volume/real-time messages where you don't need to receive *all*
		 * of them
		 */
		volatile: Socket;

		/**
		 * Sets the 'broadcast' flag when emitting an event. Broadcasting an event
		 * will send it to all the other sockets in the namespace except for yourself
		 */
		broadcast: Socket;

		/**
		 * Targets a room when broadcasting
		 * @param room The name of the room that we're targeting
		 * @return This Socket
		 */
		to( room: string ): Socket;

		/**
		 * @see to( room )
		 */
		in( room: string ): Socket;

		/**
		 * Sends a 'message' event
		 * @see emit( event, ...args )
		 */
		send( ...args: any[] ): Socket;

		/**
		 * @see send( ...args )
		 */
		write( ...args: any[] ): Socket;

		/**
		 * Joins a room. You can join multiple rooms, and by default, on connection,
		 * you join a room with the same name as your ID
		 * @param name The name of the room that we want to join
		 * @param fn An optional callback to call when we've joined the room. It should
		 * take an optional parameter, err, of a possible error
		 * @return This Socket
		 */
		join( name: string, fn?: ( err?: any ) => void ): Socket;

		/**
		 * Leaves a room
		 * @param name The name of the room to leave
		 * @param fn An optional callback to call when we've left the room. It should
		 * take on optional parameter, err, of a possible error
		 */
		leave( name: string, fn?: Function ): Socket;

		/**
		 * Leaves all the rooms that we've joined
		 */
		leaveAll(): void;

		/**
		 * Disconnects this Socket
		 * @param close If true, also closes the underlying connection
		 * @return This Socket
		 */
		disconnect( close?: boolean ): Socket;

		/**
		 * Returns all the callbacks for a particular event
		 * @param event The event that we're looking for the callbacks of
		 * @return An array of callback Functions, or an empty array if we don't have any
		 */
		listeners( event: string ):Function[];

		/**
		 * Sets the compress flag
		 * @param compress If `true`, compresses the sending data
		 * @return This Socket
		 */
		compress( compress: boolean ): Socket;
	}

	/**
	 * The interface used when dealing with rooms etc
	 */
	interface Adapter extends NodeJS.EventEmitter {

		/**
		 * The namespace that this adapter is for
		 */
		nsp: Namespace;

		/**
		 * A dictionary of all the rooms that we have in this namespace
		 * The rooms are made of a `sockets` key which is the dictionary of sockets per ID
		 */
		rooms: {[room: string]: {sockets: {[id: string]: boolean }, length: number }};

		/**
		 * A dictionary of all the socket ids that we're dealing with, and all
		 * the rooms that the socket is currently in
		 */
		sids: {[id: string]: {[room: string]: boolean}};

		/**
		 * Adds a socket to a room. If the room doesn't exist, it's created
		 * @param id The ID of the socket to add
		 * @param room The name of the room to add the socket to
		 * @param callback An optional callback to call when the socket has been
		 * added. It should take an optional parameter, error, if there was a problem
		 */
		add( id: string, room: string, callback?: ( err?: any ) => void ): void;

		/**
		 * Removes a socket from a room. If there are no more sockets in the room,
		 * the room is deleted
		 * @param id The ID of the socket that we're removing
		 * @param room The name of the room to remove the socket from
		 * @param callback An optional callback to call when the socket has been
		 * removed. It should take on optional parameter, error, if there was a problem
		 */
		del( id: string, room: string, callback?: ( err?: any ) => void ): void;

		/**
		 * Removes a socket from all the rooms that it's joined
		 * @param id The ID of the socket that we're removing
		 */
		delAll( id: string ):void;

		/**
		 * Broadcasts a packet
		 * @param packet The packet to broadcast
		 * @param opts Any options to send along:
		 * 	- rooms: An optional list of rooms to broadcast to. If empty, the packet is broadcast to all sockets
		 * 	- except: A list of Socket IDs to exclude
		 * 	- flags: Any flags that we want to send along ('json', 'volatile', 'broadcast')
		 */
		broadcast( packet: any, opts: { rooms?: string[]; except?: string[]; flags?: {[flag: string]: boolean} } ):void;
	}

	/**
	 * The client behind each socket (can have multiple sockets)
	 */
	interface Client {
		/**
		 * The Server that this client belongs to
		 */
		server: Server;

		/**
		 * The underlying Engine.io Socket instance
		 */
		conn: EngineSocket;

		/**
		 * The ID for this client. Regenerated at every connection
		 */
		id: string;

		/**
		 * The http.IncomingMessage request sent with the connection. Useful
		 * for recovering headers etc
		 */
		request: any;

		/**
		 * The dictionary of sockets currently connect via this client (i.e. to different
		 * namespaces) where the Socket ID is the key
		 */
		sockets: {[id: string]: Socket};

		/**
		 * A dictionary of all the namespaces for this client, with the Socket that
		 * deals with that namespace
		 */
		nsps: {[nsp: string]: Socket};
	}

	/**
	 * A reference to the underlying engine.io Socket connection.
	 */
	interface EngineSocket extends NodeJS.EventEmitter {
		/**
		 * The ID for this socket - matches Client.id
		 */
		id: string;

		/**
		 * The Engine.io Server for this socket
		 */
		server: any;

		/**
		 * The ready state for the client. Either 'opening', 'open', 'closing', or 'closed'
		 */
		readyState: string;

		/**
		 * The remote IP for this connection
		 */
		remoteAddress: string;

		/**
		 * whether the transport has been upgraded
		 */
		upgraded: boolean;

		/**
		 * (http.IncomingMessage): request that originated the Socket
		 */
		request: any;

		/**
		 * (Transport): transport reference
		 */
		transport: any;
	}
}
