// Type definitions for roads-server 1.0
// Project: https://github.com/Dashron/roads-server
// Definitions by: Francisco Jesus <https://github.com/dancespiele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
/// <reference types="node" />

import { Road } from "roads";

/**
 * Roads-Server is a simple webserver for setting up and using the roads framework on an HTTP or HTTP 2 server
 */
export class Server {
    /**
     *
     * @param Roads The Road that handles all the routes
     * @param error_handler An overwrite to the standard error handler. Accepts a single parameter (the error) and should return a Roads.Response object
     */
    constructor(Roads: Road, error_handler?: (error: any) => any);

    /**
     * Start the http server. Accepts the same parameters as HttpServer.listen
     * @param port Port which listen the server
     * @param handler Execution tasks after start the server
     */
    listen(port: number, handler: () => any): any;
}

export class Http2Server {
    /**
     *
     * @param Roads The Road that handles all the routes
     */
    constructor(Roads: Road);

    /**
     * Start the http server. Accepts the same parameters as HttpServer.listen
     * @param port Port which listen the server
     * @param handler Execution tasks after start the server
     */
    listen(port: number, handler: () => any): any;
}
