// Type definitions for socket.io-client 1.4.4
// Project: http://socket.io/
// Definitions by: PROGRE <https://github.com/progre/>, Damian Connolly <https://github.com/divillysausages/>, Florent Poujol <https://github.com/florentpoujol/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var io: SocketIOClientStatic;

declare module 'socket.io-client' {
	export = io;
}

interface SocketIOClientStatic {

	/**
	 * Looks up an existing 'Manager' for multiplexing. If the user summons:
	 * 	'io( 'http://localhost/a' );'
	 * 	'io( 'http://localhost/b' );'
	 *
	 * We reuse the existing instance based on the same scheme/port/host, and
	 * we initialize sockets for each namespace. If autoConnect isn't set to
	 * false in the options, then we'll automatically connect
	 * @param uri The uri that we'll connect to, including the namespace, where '/' is the default one (e.g. http://localhost:4000/somenamespace)
	 * @opts Any connect options that we want to pass along
	 * @return A Socket object
	 */
	( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * Auto-connects to the window location and defalt namespace.
	 * E.g. window.protocol + '//' + window.host + ':80/'
	 * @opts Any connect options that we want to pass along
	 * @return A Socket object
	 */
	( opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * @see the default constructor (io(uri, opts))
	 */
	connect( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * @see the default constructor (io(opts))
	 */
	connect( opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * The socket.io protocol revision number this client works with
	 * @default 4
	 */
	protocol: number;

	/**
	 * Socket constructor - exposed for the standalone build
	 */
	Socket: SocketIOClient.Socket;

	/**
	 * Manager constructor - exposed for the standalone build
	 */
	Manager: SocketIOClient.ManagerStatic;
}

declare namespace SocketIOClient {

	/**
	 * The base emiter class, used by Socket and Manager
	 */
	interface Emitter {
		/**
		 * Adds a listener for a particular event. Calling multiple times will add
		 * multiple listeners
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on the
		 * event in question
		 * @return This Emitter
		 */
		on( event: string, fn: Function ):Emitter;

		/**
		 * @see on( event, fn )
		 */
		addEventListener( event: string, fn: Function ):Emitter;

		/**
		 * Adds a listener for a particular event that will be invoked
		 * a single time before being automatically removed
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on
		 * the event in question
		 * @return This Emitter
		 */
		once( event: string, fn: Function ):Emitter;

		/**
		 * Removes a listener for a particular type of event. This will either
		 * remove a specific listener, or all listeners for this type of event
		 * @param event The event that we want to remove the listener of
		 * @param fn The function to remove, or null if we want to remove all functions
		 * @return This Emitter
		 */
		off( event: string, fn?: Function ):Emitter;

		/**
		 * @see off( event, fn )
		 */
		removeListener( event: string, fn?: Function ):Emitter;

		/**
		 * @see off( event, fn )
		 */
		removeEventListener( event: string, fn?: Function ):Emitter;

		/**
		 * Removes all event listeners on this object
		 * @return This Emitter
		 */
		removeAllListeners():Emitter;

		/**
		 * Emits 'event' with the given args
		 * @param event The event that we want to emit
		 * @param args Optional arguments to emit with the event
		 * @return Emitter
		 */
		emit( event: string, ...args: any[] ):Emitter;

		/**
		 * Returns all the callbacks for a particular event
		 * @param event The event that we're looking for the callbacks of
		 * @return An array of callback Functions, or an empty array if we don't have any
		 */
		listeners( event: string ):Function[];

		/**
		 * Returns if we have listeners for a particular event
		 * @param event The event that we want to check if we've listeners for
		 * @return True if we have listeners for this event, false otherwise
		 */
		hasListeners( event: string ):boolean;
	}

	/**
	 * The Socket static interface
	 */
	interface SocketStatic {

		/**
		 * Creates a new Socket, used for communicating with a specific namespace
		 * @param io The Manager that's controlling this socket
		 * @param nsp The namespace that this socket is for (@default '/')
		 * @return A new Socket
		 */
		( io: SocketIOClient.Manager, nsp: string ): Socket;

		/**
		 * Creates a new Socket, used for communicating with a specific namespace
		 * @param io The Manager that's controlling this socket
		 * @param nsp The namespace that this socket is for (@default '/')
		 * @return A new Socket
		 */
		new ( url: string, opts: any ): SocketIOClient.Manager;
	}

	/**
	 * The Socket that we use to connect to a Namespace on the server
	 */
	interface Socket extends Emitter {

		/**
		 * The Manager that's controller this socket
		 */
		io: SocketIOClient.Manager;

		/**
		 * The namespace that this socket is for
		 * @default '/'
		 */
		nsp: string;

		/**
		 * The ID of the socket; matches the server ID and is set when we're connected, and cleared
		 * when we're disconnected
		 */
		id: string;

		/**
		 * Are we currently connected?
		 * @default false
		 */
		connected: boolean;

		/**
		 * Are we currently disconnected?
		 * @default true
		 */
		disconnected: boolean;

		/**
		 * Opens our socket so that it connects. If the 'autoConnect' option for io is
		 * true (default), then this is called automatically when the Socket is created
		 */
		open(): Socket;

		/**
		 * @see open();
		 */
		connect(): Socket;

		/**
		 * Sends a 'message' event
		 * @param args Any optional arguments that we want to send
		 * @see emit
		 * @return This Socket
		 */
		send( ...args: any[] ):Socket;

		/**
		 * An override of the base emit. If the event is one of:
		 * 	connect
		 * 	connect_error
		 * 	connect_timeout
		 * 	connecting
		 * 	disconnect
		 * 	error
		 * 	reconnect
		 * 	reconnect_attempt
		 * 	reconnect_failed
		 * 	reconnect_error
		 * 	reconnecting
		 * 	ping
		 * 	pong
		 * then the event is emitted normally. Otherwise, if we're connected, the
		 * event is sent. Otherwise, it's buffered.
		 *
		 * If the last argument is a function, then it will be called
		 * as an 'ack' when the response is received. The parameter(s) of the
		 * ack will be whatever data is returned from the event
		 * @param event The event that we're emitting
		 * @param args Optional arguments to send with the event
		 * @return This Socket
		 */
		emit( event: string, ...args: any[] ):Socket;

		/**
		 * Disconnects the socket manually
		 * @return This Socket
		 */
		close():Socket;

		/**
		 * @see close()
		 */
		disconnect():Socket;

		/**
		* Sets the compress flag.
		* @param compress If `true`, compresses the sending data
		* @return this Socket
		*/
		compress(compress: boolean):Socket;
	}

	/**
	 * The Manager static interface
	 */
	interface ManagerStatic {
		/**
		 * Creates a new Manager
		 * @param uri The URI that we're connecting to (e.g. http://localhost:4000)
		 * @param opts Any connection options that we want to use (and pass to engine.io)
		 * @return A Manager
		 */
		( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Manager;

		/**
		 * Creates a new Manager with the default URI (window host)
		 * @param opts Any connection options that we want to use (and pass to engine.io)
		 */
		( opts: SocketIOClient.ConnectOpts ):SocketIOClient.Manager;

		/**
		 * @see default constructor
		 */
		new ( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Manager;

		/**
		 * @see default constructor
		 */
		new ( opts: SocketIOClient.ConnectOpts ):SocketIOClient.Manager;
	}

	/**
	 * The Manager class handles all the Namespaces and Sockets that we're using
	 */
	interface Manager extends Emitter {

		/**
		 * All the namespaces currently controlled by this Manager, and the Sockets
		 * that we're using to communicate with them
		 */
		nsps: { [namespace:string]: Socket };

		/**
		 * The connect options that we used when creating this Manager
		 */
		opts: SocketIOClient.ConnectOpts;

		/**
		 * The state of the Manager. Either 'closed', 'opening', or 'open'
		 */
		readyState: string;

		/**
		 * The URI that this manager is for (host + port), e.g. 'http://localhost:4000'
		 */
		uri: string;

		/**
		 * The currently connected sockets
		 */
		connecting: Socket[];

		/**
		 * If we should auto connect (also used when creating Sockets). Set via the
		 * opts object
		 */
		autoConnect: boolean;

		/**
		 * Gets if we should reconnect automatically
		 * @default true
		 */
		reconnection(): boolean;

		/**
		 * Sets if we should reconnect automatically
		 * @param v True if we should reconnect automatically, false otherwise
		 * @default true
		 * @return This Manager
		 */
		reconnection( v: boolean ): Manager;

		/**
		 * Gets the number of reconnection attempts we should try before giving up
		 * @default Infinity
		 */
		reconnectionAttempts(): number;

		/**
		 * Sets the number of reconnection attempts we should try before giving up
		 * @param v The number of attempts we should do before giving up
		 * @default Infinity
		 * @return This Manager
		 */
		reconnectionAttempts( v: number ): Manager;

		/**
		 * Gets the delay in milliseconds between each reconnection attempt
		 * @default 1000
		 */
		reconnectionDelay(): number;

		/**
		 * Sets the delay in milliseconds between each reconnection attempt
		 * @param v The delay in milliseconds
		 * @default 1000
		 * @return This Manager
		 */
		reconnectionDelay( v: number ): Manager;

		/**
		 * Gets the max reconnection delay in milliseconds between each reconnection
		 * attempt
		 * @default 5000
		 */
		reconnectionDelayMax(): number;

		/**
		 * Sets the max reconnection delay in milliseconds between each reconnection
		 * attempt
		 * @param v The max reconnection dleay in milliseconds
		 * @return This Manager
		 */
		reconnectionDelayMax( v: number ): Manager;

		/**
		 * Gets the randomisation factor used in the exponential backoff jitter
		 * when reconnecting
		 * @default 0.5
		 */
		randomizationFactor(): number;

		/**
		 * Sets the randomisation factor used in the exponential backoff jitter
		 * when reconnecting
		 * @param The reconnection randomisation factor
		 * @default 0.5
		 * @return This Manager
		 */
		randomizationFactor( v: number ): Manager;

		/**
		 * Gets the timeout in milliseconds for our connection attempts
		 * @default 20000
		 */
		timeout(): number;

		/**
		 * Sets the timeout in milliseconds for our connection attempts
		 * @param The connection timeout milliseconds
		 * @return This Manager
		 */
		timeout(v: boolean): Manager;

		/**
		 * Sets the current transport socket and opens our connection
		 * @param fn An optional callback to call when our socket has either opened, or
		 * failed. It can take one optional parameter of type Error
		 * @return This Manager
		 */
		open( fn?: (err?: any) => void ): Manager;

		/**
		 * @see open( fn );
		 */
		connect( fn?: (err?: any) => void ): Manager;

		/**
		 * Creates a new Socket for the given namespace
		 * @param nsp The namespace that this Socket is for
		 * @return A new Socket, or if one has already been created for this namespace,
		 * an existing one
		 */
		socket( nsp: string ): Socket;
	}

	/**
	 * Options we can pass to the socket when connecting
	 */
	interface ConnectOpts {

		/**
		 * Should we force a new Manager for this connection?
		 * @default false
		 */
		forceNew?: boolean;

		/**
		 * Should we multiplex our connection (reuse existing Manager) ?
		 * @default true
		 */
		multiplex?: boolean;

		/**
		 * The path to get our client file from, in the case of the server
		 * serving it
		 * @default '/socket.io'
		 */
		path?: string;

		/**
		 * Should we allow reconnections?
		 * @default true
		 */
		reconnection?: boolean;

		/**
		 * How many reconnection attempts should we try?
		 * @default Infinity
		 */
		reconnectionAttempts?: number;

		/**
		 * The time delay in milliseconds between reconnection attempts
		 * @default 1000
		 */
		reconnectionDelay?: number;

		/**
		 * The max time delay in milliseconds between reconnection attempts
		 * @default 5000
		 */
		reconnectionDelayMax?: number;

		/**
		 * Used in the exponential backoff jitter when reconnecting
		 * @default 0.5
		 */
		randomizationFactor?: number;

		/**
		 * The timeout in milliseconds for our connection attempt
		 * @default 20000
		 */
		timeout?: number;

		/**
		 * Should we automically connect?
		 * @default true
		 */
		autoConnect?: boolean;

		/**
		 * The host that we're connecting to. Set from the URI passed when connecting
		 */
		host?: string;

		/**
		 * The hostname for our connection. Set from the URI passed when connecting
		 */
		hostname?: string;

		/**
		 * If this is a secure connection. Set from the URI passed when connecting
		 */
		secure?: boolean;

		/**
		 * The port for our connection. Set from the URI passed when connecting
		 */
		port?: string;

		/**
		 * Any query parameters in our uri. Set from the URI passed when connecting
		 */
		query?: Object;

		/**
		 * `http.Agent` to use, defaults to `false` (NodeJS only)
		 */
		agent?: string|boolean;

		/**
		 * Whether the client should try to upgrade the transport from
		 * long-polling to something better.
		 * @default true
		 */
		upgrade?: boolean;

		/**
		 * Forces JSONP for polling transport.
		 */
		forceJSONP?: boolean;

		/**
		 * Determines whether to use JSONP when necessary for polling. If
		 * disabled (by settings to false) an error will be emitted (saying
		 * "No transports available") if no other transports are available.
		 * If another transport is available for opening a connection (e.g.
		 * WebSocket) that transport will be used instead.
		 * @default true
		 */
		jsonp?: boolean;

		/**
		 * Forces base 64 encoding for polling transport even when XHR2
		 * responseType is available and WebSocket even if the used standard
		 * supports binary.
		 */
		forceBase64?: boolean;

		/**
		 * Enables XDomainRequest for IE8 to avoid loading bar flashing with
		 * click sound. default to `false` because XDomainRequest has a flaw
		 * of not sending cookie.
		 * @default false
		 */
		enablesXDR?: boolean;

		/**
		 * The param name to use as our timestamp key
		 * @default 't'
		 */
		timestampParam?: string;

		/**
		 * Whether to add the timestamp with each transport request. Note: this
		 * is ignored if the browser is IE or Android, in which case requests
		 * are always stamped
		 * @default false
		 */
		timestampRequests?: boolean;

		/**
		 * A list of transports to try (in order). Engine.io always attempts to
		 * connect directly with the first one, provided the feature detection test
		 * for it passes.
		 * @default ['polling','websocket']
		 */
		transports?: string[];

		/**
		 * The port the policy server listens on
		 * @default 843
		 */
		policyPost?: number;

		/**
		 * If true and if the previous websocket connection to the server succeeded,
		 * the connection attempt will bypass the normal upgrade process and will
		 * initially try websocket. A connection attempt following a transport error
		 * will use the normal upgrade process. It is recommended you turn this on
		 * only when using SSL/TLS connections, or if you know that your network does
		 * not block websockets.
		 * @default false
		 */
		rememberUpgrade?: boolean;

		/**
		 * Are we only interested in transports that support binary?
		 */
		onlyBinaryUpgrades?: boolean;

		/**
		 * (SSL) Certificate, Private key and CA certificates to use for SSL.
		 * Can be used in Node.js client environment to manually specify
		 * certificate information.
		 */
		pfx?: string;

		/**
		 * (SSL) Private key to use for SSL. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		key?: string;

		/**
		 * (SSL) A string or passphrase for the private key or pfx. Can be
		 * used in Node.js client environment to manually specify certificate
		 * information.
		 */
		passphrase?: string

		/**
		 * (SSL) Public x509 certificate to use. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		cert?: string;

		/**
		 * (SSL) An authority certificate or array of authority certificates to
		 * check the remote host against.. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		ca?: string|string[];

		/**
		 * (SSL) A string describing the ciphers to use or exclude. Consult the
		 * [cipher format list]
		 * (http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT) for
		 * details on the format.. Can be used in Node.js client environment to
		 * manually specify certificate information.
		 */
		ciphers?: string;

		/**
		 * (SSL) If true, the server certificate is verified against the list of
		 * supplied CAs. An 'error' event is emitted if verification fails.
		 * Verification happens at the connection level, before the HTTP request
		 * is sent. Can be used in Node.js client environment to manually specify
		 * certificate information.
		 */
		rejectUnauthorized?: boolean;

	}
}
