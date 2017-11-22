import {RouteOptions} from "../route/route-options";

/** Any connections configuration server defaults can be included to override and customize the individual connection. */
export interface IServerConnectionOptions extends IConnectionConfigurationServerDefaults {
	/**  - the public hostname or IP address. Used only to set server.info.host and server.info.uri. If not configured, defaults to the operating system hostname and if not available, to 'localhost'.*/
	host?: string;
	/** - sets the host name or IP address the connection will listen on.If not configured, defaults to host if present, otherwise to all available network interfaces (i.e. '0.0.0.0').Set to 127.0.0.1 or localhost to restrict connection to only those coming from the same machine.*/
	address?: string;
	/** - the TCP port the connection will listen to.Defaults to an ephemeral port (0) which uses an available port when the server is started (and assigned to server.info.port).If port is a string containing a '/' character, it is used as a UNIX domain socket path and if it starts with '\.\pipe' as a Windows named pipe.*/
	port?: string | number;
	/** - the full public URI without the path (e.g. 'http://example.com:8080').If present, used as the connection info.uri otherwise constructed from the connection settings.*/
	uri?: string;
	/**  - optional node.js HTTP (or HTTPS) http.Server object or any compatible object.If the listener needs to be manually started, set autoListen to false.If the listener uses TLS, set tls to true.*/
	listener?: any;
	/**  - indicates that the connection.listener will be started manually outside the framework.Cannot be specified with a port setting.Defaults to true.*/
	autoListen?: boolean;
	/**  caching headers configuration: */
	cache?: {
		/** - an array of HTTP response status codes (e.g. 200) which are allowed to include a valid caching directive.Defaults to [200]. */
		statuses: number[];
	};
	/** - a string or string array of labels used to server.select() specific connections matching the specified labels.Defaults to an empty array [](no labels).*/
	labels?: string | string[];
	/**  - used to create an HTTPS connection.The tls object is passed unchanged as options to the node.js HTTPS server as described in the node.js HTTPS documentation.Set to true when passing a listener object that has been configured to use TLS directly. */
	tls?: boolean | { key?: string; cert?: string; pfx?: string; } | Object;
}

export interface IConnectionConfigurationServerDefaults {
	/**  application-specific connection configuration which can be accessed via connection.settings.app. Provides a safe place to store application configuration without potential conflicts with the framework internals. Should not be used to configure plugins which should use plugins[name]. Note the difference between connection.settings.app which is used to store configuration values and connection.app which is meant for storing run-time state.  */
	app?: any;
	/** if false, response content encoding is disabled. Defaults to true */
	compression?: boolean;
	/**  connection load limits configuration where:  */
	load?: {
		/**  maximum V8 heap size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
		maxHeapUsedBytes?: number;
		/**  maximum process RSS size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
		maxRssBytes?: number;
		/**  maximum event loop delay duration in milliseconds over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
		maxEventLoopDelay?: number;
	};
	/**  plugin-specific configuration which can later be accessed via connection.settings.plugins. Provides a place to store and pass connection-specific plugin configuration. plugins is an object where each key is a plugin name and the value is the configuration. Note the difference between connection.settings.plugins which is used to store configuration values and connection.plugins which is meant for storing run-time state. */
	plugins?: any;
	/**  controls how incoming request URIs are matched against the routing table: */
	router?: {
		/**  determines whether the paths '/example' and '/EXAMPLE' are considered different resources. Defaults to true.  */
		isCaseSensitive: boolean;
		/**  removes trailing slashes on incoming paths. Defaults to false.  */
		stripTrailingSlash: boolean;
	};
	/** a route options object used to set the default configuration for every route. */
	routes?: RouteOptions;
	// state?: IServerState; TODO
}
