import {ServerOptions} from "./server-options";
import {ServerInfo} from "./server-info";
import {Dictionary} from "../util/util";
import {Request} from "../request/request";
import * as http from "http";
import * as events from 'events';


/**
 * The server object is the main application container. The server manages all incoming requests along with all
 * the facilities provided by the framework. Each server supports a single connection (e.g. listen to port 80).
 */
export class Server extends events.EventEmitter {

    /**
     Creates a new server object where:
     @param options - (optional) a server configuration object.
    */
     constructor(options: ServerOptions);

    /**
     * Provides a safe place to store server-specific run-time application data without potential conflicts with
     * the framework internals. The data can be accessed whenever the server is accessible.
     * Initialized with an empty object.
     */
    app?: any;

    /**
     * Access: authentication strategy specific.
     * An object where each key is an authentication strategy name and the value is the exposed strategy API.
     * Available only when the authentication scheme exposes an API by returning an api key in the object
     * returned from its implementation function.
     */
        // TODO is that definition right? It's need review. The v16 is very different.
    auth: {
        api: Dictionary<any>;
    }

    /**
     * Access: read only.
     * Contains the default authentication configuration is a default strategy was set via [server.auth.default()](https://github.com/hapijs/hapi/blob/master/API.md#server.auth.default()).
     */
    // TODO it needs to be implemented. I didn't understand the description yet.
    //server.auth.settings.default


    /**
     * Provides access to the decorations already applied to various framework interfaces. The object must not be
     * modified directly, but only through server.decorate. Contains:
     * * request - decorations on the request object.
     * * toolkit - decorations on the response toolkit.
     * * server - decorations on the server object.
     */
    decorations: {
        request: Request,
        toolkit: any, // TODO Request Toolkit (https://github.com/hapijs/hapi/blob/master/API.md#response-toolkit) needs to be implemented.
        server: Server
    }

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo)
     * An object containing information about the server where:
     * * id - a unique server identifier (using the format '{hostname}:{pid}:{now base36}').
     * * created - server creation timestamp.
     * * started - server start timestamp (0 when stopped).
     * * port - the connection port based on the following rules:
     * * host - The host configuration value.
     * * address - the active IP address the connection was bound to after starting. Set to undefined until the server has been started or when using a non TCP port (e.g. UNIX domain socket).
     * * protocol - the protocol used:
     * * 'http' - HTTP.
     * * 'https' - HTTPS.
     * * 'socket' - UNIX domain socket or Windows named pipe.
     * * uri - a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains the uri value if set, otherwise constructed from the available settings. If no port is configured or is set to 0, the uri will not include a port component until the server is started.
     */
    info: ServerInfo;

    /**
     * Access: read only and listener public interface.
     * The node HTTP server object.
     */
    listener: http.Server;

    /**
     * An object containing the process load metrics (when load.sampleInterval is enabled):
     * * eventLoopDelay - event loop delay milliseconds.
     * * heapUsed - V8 heap usage.
     * * rss - RSS memory usage.
     */
    load: {
        eventLoopDelay: number;
        heapUsed: number;
        rss: number;
    };

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethods
     * Server methods are functions registered with the server and used throughout the application as a common utility.
     * Their advantage is in the ability to configure them to use the built-in cache and share across multiple request
     * handlers without having to create a common module.
     * sever.methods is an object which provides access to the methods registered via server.method() where each
     * server method name is an object property.
     */
    //methods: Dictionary<ServerMethod>;
    methods: any; // TODO come back here after implements the server.method()


    // TODO It"s not finished



}
