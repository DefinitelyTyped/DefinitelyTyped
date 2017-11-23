/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo)
 * An object containing information about the server where:
 */
export interface ServerInfo {

    /**
     * a unique server identifier (using the format '{hostname}:{pid}:{now base36}').
     */
    id: string;

    /**
     * server creation timestamp.
     */
    created: number;

    /**
     * server start timestamp (0 when stopped).
     */
    started: number;

    /**
     * the connection [port](https://github.com/hapijs/hapi/blob/master/API.md#server.options.port) based on the following rules:
     *  * before the server has been started: the configured port value.
     *  * after the server has been started: the actual port assigned when no port is configured or was set to 0.
     */
    port: number | string;

    /**
     * The [host](https://github.com/hapijs/hapi/blob/master/API.md#server.options.host) configuration value.
     */
    host: string;

    /**
     * the active IP address the connection was bound to after starting. Set to undefined until the server has been
     * started or when using a non TCP port (e.g. UNIX domain socket).
     */
    address: undefined | string;

    /**
     *  the protocol used:
     * * 'http' - HTTP.
     * * 'https' - HTTPS.
     * * 'socket' - UNIX domain socket or Windows named pipe.
     */
    protocol: 'http' | 'https' | 'socket';

    /**
     * a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains
     * the uri value if set, otherwise constructed from the available settings. If no port is configured or is set
     * to 0, the uri will not include a port component until the server is started.
     */
    uri: string;

}
