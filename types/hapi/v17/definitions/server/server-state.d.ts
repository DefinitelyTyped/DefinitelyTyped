import {ServerStateCookieOptions, Util} from "hapi";

/**
 * A single object or an array of object where each contains:
 * * name - the cookie name.
 * * value - the cookie value.
 * * options - cookie configuration to override the server settings.
 */
export interface ServerStateFormat {
    name: string;
    value: string;
    options: ServerStateCookieOptions;
}

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverstatename-options)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptionsstate)
 */
export interface ServerState {

    /**
     * The server cookies manager.
     * Access: read only and statehood public interface.
     */
    readonly states: object;

    /**
     * The server cookies manager settings. The settings are based on the values configured in [server.options.state](https://github.com/hapijs/hapi/blob/master/API.md#server.options.state).
     */
    readonly settings: ServerStateCookieOptions;

    /**
     * An object containing the configuration of each cookie added via [server.state()](https://github.com/hapijs/hapi/blob/master/API.md#server.state()) where each key is the
     * cookie name and value is the configuration object.
     */
    readonly cookies: object;

    /**
     * An array containing the names of all configued cookies.
     */
    readonly names: string[];

    /**
     * Same as calling [server.state()](https://github.com/hapijs/hapi/blob/master/API.md#server.state()).
     */
    add(name: string, options?: ServerStateCookieOptions): void;

    /**
     * Formats an HTTP 'Set-Cookie' header based on the server.options.state where:
     * @param cookies - a single object or an array of object where each contains:
     * * name - the cookie name.
     * * value - the cookie value.
     * * options - cookie configuration to override the server settings.
     * @return Return value: a header string.
     * Note that this utility uses the server configuration but does not change the server state. It is provided for manual cookie formating (e.g. when headers are set manually).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-async-serverstatesformatcookies)
     */
    format(cookies: ServerStateFormat | ServerStateFormat[]): string;

    /**
     * Parses an HTTP 'Cookies' header based on the server.options.state where:
     * @param header - the HTTP header.
     * @return Return value: an object where each key is a cookie name and value is the parsed cookie.
     * Note that this utility uses the server configuration but does not change the server state. It is provided for manual cookie parsing (e.g. when server parsing is disabled).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-async-serverstatesparseheader)
     */
    parse(header: string): Util.Dictionary<string>;

}
