/* tslint:disable */
import * as webdriver from './index';

/**
 * Converts a headers map to a HTTP header block string.
 * @param {!Map<string, string>} headers The map to convert.
 * @return {string} The headers as a string.
 */
export function headersToString(headers: any): string;

/**
 * Represents a HTTP request message. This class is a 'partial' request and only
 * defines the path on the server to send a request to. It is each client's
 * responsibility to build the full URL for the final request.
 * @final
 */
export class HttpRequest {
    /**
     * @param {string} method The HTTP method to use for the request.
     * @param {string} path The path on the server to send the request to.
     * @param {Object=} opt_data This request's non-serialized JSON payload data.
     */
    constructor(method: string, path: string, opt_data?: Object);

    /** @override */
    toString(): string;
}

/**
 * Represents a HTTP response message.
 * @final
 */
export class HttpResponse {
    /**
     * @param {number} status The response code.
     * @param {!Object<string>} headers The response headers. All header names
     *     will be converted to lowercase strings for consistent lookups.
     * @param {string} body The response body.
     */
    constructor(status: number, headers: Object, body: string);

    /** @override */
    toString(): string;
}


export function post(path: string): any;
export function del(path: string): any;
export function get(path: string): any;
export function resource(method: string, path: string): any;

/**
 * A basic HTTP client used to send messages to a remote end.
 */
export class HttpClient {
    /**
     * @param {string} serverUrl URL for the WebDriver server to send commands to.
     * @param {http.Agent=} opt_agent The agent to use for each request.
     *     Defaults to `http.globalAgent`.
     * @param {?string=} opt_proxy The proxy to use for the connection to the
     *     server. Default is to use no proxy.
     */
    constructor(serverUrl: string, opt_agent?: any, opt_proxy?: string);

    /**
     * Sends a request to the server. The client will automatically follow any
     * redirects returned by the server, fulfilling the returned promise with the
     * final response.
     *
     * @param {!HttpRequest} httpRequest The request to send.
     * @return {!promise.Promise<HttpResponse>} A promise that will be fulfilled
     *     with the server's response.
     */
    send(httpRequest: HttpRequest): webdriver.promise.Promise<HttpResponse>;
}

/**
 * Sends a single HTTP request.
 * @param {!Object} options The request options.
 * @param {function(!HttpResponse)} onOk The function to call if the
 *     request succeeds.
 * @param {function(!Error)} onError The function to call if the request fails.
 * @param {?string=} opt_data The data to send with the request.
 * @param {?string=} opt_proxy The proxy server to use for the request.
 */
export function sendRequest(options: Object, onOk: any, onError: any, opt_data?: string, opt_proxy?: string): any;

/**
 * A command executor that communicates with the server using HTTP + JSON.
 *
 * By default, each instance of this class will use the legacy wire protocol
 * from [Selenium project][json]. The executor will automatically switch to the
 * [W3C wire protocol][w3c] if the remote end returns a compliant response to
 * a new session command.
 *
 * [json]: https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
 * [w3c]: https://w3c.github.io/webdriver/webdriver-spec.html
 *
 * @implements {cmd.Executor}
 */
export class Executor {
    /**
     * @param {!HttpClient} client The client to use for sending requests to the
     *     server.
     */
    constructor(client: HttpClient);

    /**
     * Defines a new command for use with this executor. When a command is sent,
     * the {@code path} will be preprocessed using the command's parameters; any
     * path segments prefixed with ':' will be replaced by the parameter of the
     * same name. For example, given '/person/:name' and the parameters
     * '{name: 'Bob'}', the final command path will be '/person/Bob'.
     *
     * @param {string} name The command name.
     * @param {string} method The HTTP method to use when sending this command.
     * @param {string} path The path to send the command to, relative to
     *     the WebDriver server's command root and of the form
     *     '/path/:variable/segment'.
     */
    defineCommand(name: string, method: string, path: string): void;

    /** @override */
    execute(command: any): any;
}

/**
 * @param {string} str .
 * @return {?} .
 */
export function tryParse(str: string): any;

/**
 * Callback used to parse {@link HttpResponse} objects from a
 * {@link HttpClient}.
 * @param {!HttpResponse} httpResponse The HTTP response to parse.
 * @param {boolean} w3c Whether the response should be processed using the
 *     W3C wire protocol.
 * @return {{value: ?}} The parsed response.
 * @throws {WebDriverError} If the HTTP response is an error.
 */
export function parseHttpResponse(httpResponse: HttpResponse, w3c: boolean): any;

/**
 * Builds a fully qualified path using the given set of command parameters. Each
 * path segment prefixed with ':' will be replaced by the value of the
 * corresponding parameter. All parameters spliced into the path will be
 * removed from the parameter map.
 * @param {string} path The original resource path.
 * @param {!Object<*>} parameters The parameters object to splice into the path.
 * @return {string} The modified path.
 */
export function buildPath(path: string, parameters: Object): string;
