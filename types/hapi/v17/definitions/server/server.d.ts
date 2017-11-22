import Events = require('events');
import {ServerOptions} from "./server-options";
import {Dictionary} from "../util/util";

/**
 * The server object is the main application container. The server manages all incoming requests along with all
 * the facilities provided by the framework. Each server supports a single connection (e.g. listen to port 80).
 */
export class Server extends Events.EventEmitter {

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
    auth?: {
        api: Dictionary<any>;
    }

    /**
     * Access: read only.
     * Contains the default authentication configuration is a default strategy was set via server.auth.default().
     */
    // TODO it needs to be implemented. I didn't understand the description yet.

    // TODO It"s not finished



}
