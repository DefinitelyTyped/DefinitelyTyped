// Type definitions for @sap/approuter 10.4
// Project: https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/LATEST/en-US/050d87a61faa4fb88f687abd7bdf16ce.html
// Definitions by: Laurens von Assel <https://github.com/biolauri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// The module is available on official npmjs.com registry: https://www.npmjs.com/package/@sap/approuter.

/// <reference types="node" />

import { ClientRequest, IncomingMessage, ServerResponse } from 'http';
import { ServerOptions } from 'https';
import { EventEmitter } from 'events';
import { Command } from 'commander';

import { ComSapXsappSchema_82 } from './xs-app.schema';

export interface AfterRequestHandlerContext {
    /** The request sent from client to application router */
    incomingRequest: IncomingMessage;
    /** The response that will be sent from application router to client */
    incomingResponse: ServerResponse;
    /** The request sent from application router to backend application */
    outgoingRequest: ClientRequest;
    /** The response that was received in application router from backend application */
    outgoingResponse: IncomingMessage;
}

export interface AppRouterIncomingMessage extends IncomingMessage {
    /**
     * A function that can be added to the request object - for example in a "first" or "beforeRequestHandler" extension.
     * If exists, this function will be called by the standard application router after the standard backend response handling is completed.
     *
     * Note that this function is called after standard application router headers processing. Data piping is not modified.
     * If an error is passed to done callback it will be just logged, piping process will not be stopped.
     * Note that also in case of error the incomingResponse object should be returned.
     *
     * @example
     *   var approuter = require('@sap/approuter');
     *   var ar = approuter();
     *   ar.first.use('/backend', function (req, res, next) {
     *       req.afterRequestHandler = function(ctx, done){
     *           if (ctx.outgoingResponse.statusCode === 200) {
     *               let incomingResponse = ctx.incomingResponse;
     *               incomingResponse.setHeader('header1', 'abc');
     *               done(null, incomingResponse);
     *           } else {
     *               done('An error occurred in backend, returned status ' + ctx.outgoingResponse.statusCode, ctx.incomingResponse);
     *           }
     *       };
     *       next();
     *   });
     *   ar.start();
     * @param ctx - Context object for the request handler
     * @param {AppRouterIncomingMessage~afterRequestHandlerCallback} done - A callback function that receives (optionally) and error and the modified incomingResponse
     */
    afterRequestHandler?: (ctx: AfterRequestHandlerContext, done: (error: Error | undefined | null, incomingResponse: ServerResponse) => void) => void;

    /**
     * A function that can be added to the request object - for example in a "first" or "beforeRequestHandler" extension.
     * If exists, this function will be called by the standard application router when a backend connection timeout occurs.
     *
     * @param req - the request object
     * @param done - a callback function that doesn't return any parameter
     */
    backendTimeout?: (req: IncomingMessage, done: () => void) => void;

    /**
     * Callback for {@link afterRequestHandler}
     *
     * @callback AppRouterIncomingMessage~afterRequestHandlerCallback
     * @param error - Error object in case of error
     * @param incomingResponse - Modified incomingResponse
     */
}

/**
 * A handler for requests, called Middleware.
 *
 * @param request - Data of the incoming Request
 * @param response - Object for the outgoing Response; can be manipulated to alter the response
 * @param next - Call next to give control back to Application Router Middleware
 */
export type MiddlewareHandler = (request: IncomingMessage, response: ServerResponse, next: () => void) => void;

export interface Extensions {
    /**
     * Describes the middleware provided by this extension
     * If a path is given, the handler is only invoked on these paths; otherwise it's invoked on all requests.
     */
    insertMiddleware: {
        /** A MiddlewareSlot before the first application router middleware */
        first?: Array<MiddlewareHandler | {path: string, handler: MiddlewareHandler}>;
        /** A MiddlewareSlot before the standard application router request handling */
        beforeRequestHandler?: Array<MiddlewareHandler | {path: string, handler: MiddlewareHandler}>;
        /** A MiddlewareSlot before the standard application router error handling */
        beforeErrorHandler?: Array<MiddlewareHandler | {path: string, handler: MiddlewareHandler}>;
    };
}

export interface StartOptions {
    /** A TCP port the application router will listen to */
    port?: string;

    /** The working directory for the application router, should contain the xs-app.json file */
    workingDir?: string;

    /** An array of extensions, each one is an object as defined in Application Router Extensions */
    extensions?: Extensions;

    /**  An object representing the content which is usually put in xs-app.json file. If this property is present it will take precedence over the content of xs-app.json. */
    xsAppConfig?: ComSapXsappSchema_82;

    /**
     * Options similar to [https.createServer](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener).
     * If this property is present, application router will be started as an https server.
     */
    httpsConfig?: ServerOptions;

    /**
     * Provide custom access token
     *
     * @param request - Node request object
     * @param {StartOptions~getTokenCallback} callback - Test
     */
    getToken?: (request: IncomingMessage, callback: (error: Error | undefined | null, token: string) => void) => void;

    /**
     * Provide custom routing configuration
     *
     * **Note**: When approuter is bound to html5 repository, you cannot provide getRouterConfig function.
     *
     * @param request - Node request object
     * @param {StartOptions~getRouterConfigCallback} callback
     */
    getRouterConfig?: (
        request: IncomingMessage,
        callback: (error: Error | undefined | null, routerConfig: any | null | undefined) => void,
    ) => void;

    /**
     * Callback for {@link getToken}
     *
     * @callback StartOptions~getTokenCallback
     * @param error - Error object in case of error
     * @param token - Access token to use in request to backend
     */

    /**
     * Callback for {@link getRouterConfig}
     *
     * @callback StartOptions~getRouterConfigCallback
     * @param error - Error object in case of error
     * @param routerConfig - Custom routing configuration to use for given request. This object should be created via {@link Approuter.createRouterConfig}.
     *                       If null or undefined, default configuration will be used.
     */
}

export interface RouterConfigOptions {
    /**
     * Value to replace $XSAPPNAME placeholder in scope names.
     *
     * If not provided, it will be taken from UAA service binding.
     */
    xsappname?: string;

    /**
     * An object representing the content which is usually put in xs-app.json file.
     *
     * **Note:** Only the typed configurations are taken into account from this property (the rest are taken from the xs-app.json file).
     */
    xsappConfig: Pick<ComSapXsappSchema_82, 'welcomeFile' | 'logout' | 'routes' | 'websockets' | 'errorPage'>;

    /**
     * An array containing the configuration of the backend destinations.
     *
     * If not provided, it will be taken from `destinations` environment variable.
     */
    destinations?: {
        name: string,
        url: string,
        forwardAuthToken: boolean
    };
}

export interface MiddlewareSlot {
    /**
     * Inserts a request handling middleware in the current slot.
     *
     * @param handler - a middleware function to invoke
     */
    use(handler: MiddlewareHandler): MiddlewareSlot;
    /**
     * Inserts a request handling middleware in the current slot for the given path.
     *
     * @param path - handle only requests starting with this path
     * @param handler - a middleware function to invoke
     */
    use(path: string, handler: MiddlewareHandler): MiddlewareSlot;
}

/**
 * SAP Application Router
 *
 * For full help, please consult the README file in @sap/approuter (the source npm package) or
 * https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/LATEST/en-US/050d87a61faa4fb88f687abd7bdf16ce.html
 *
 * ## Events
 * ### login
 * Parameters:
 * - session
 *   * id: session id as a string
 * Emitted when a new user session is created.
 *
 * ### logout
 * Parameters:
 * - session
 *   * id: session id as a string
 * Emitted when a user session has expired or a user has requested to log out.
 */
export class Approuter extends EventEmitter {
    /**
     * A {@link MiddlewareSlot} before the first application router middleware
     */
    first: MiddlewareSlot;

    /**
     * A {@link MiddlewareSlot} before the standard application router request handling
     */
    beforeRequestHandler: MiddlewareSlot;

    /**
     * A {@link MiddlewareSlot} before the standard application router error handling
     */
    beforeErrorHandler: MiddlewareSlot;

    /**
     * By default the application router handles its command line parameters, but you can customize that too.
     *
     * An _approuter_ instance provides the property `cmdParser` that is a [commander](https://github.com/tj/commander.js/) instance.
     * It is configured with the standard application router command line options.
     *
     * To completely disable the command line option handling in the application router, reset the following property: `ar.cmdParser = false;`
     *
     * @example
     *   var approuter = require('@sap/approuter');
     *
     *   var ar = approuter();
     *
     *   var params = ar.cmdParser
     *   // add here custom command line options if needed
     *     .option('-d, --dummy', 'A dummy option')
     *     .parse(process.argv);
     *
     *   console.log('Dummy option:', params.dummy);
     */
    cmdParser: Command;

    constructor();

    /**
     * Starts the application router with the given options.
     *
     * @param options - Customize the Approuter with some configurations
     * @param callback - Is invoked when the application router has started or an error has occurred. If not provided and an error occurs (e.g. the port is busy), the application will abort.
     */
    start(options: StartOptions, callback?: (err: Error | undefined | null) => void): void;

    /**
     * Stops the application router.
     *
     * @param callback - Is invoked when the application router has stopped or an error has occurred.
     */
    close(callback?: (error: Error | undefined | null) => void): void;

    /**
     * Prepares the routing configuration to be used by the application router. As part of this, the application router validates the given options.
     * This function can be used at any point in runtime to create additional routing configurations.
     *
     * **Note**: This function can be called only after {@link start} function.
     *
     * @param options - Router configurations
     * @param {Approuter~createRouterConfigCallback} callback
     */
    createRouterConfig(options: RouterConfigOptions, callback: (error: Error | undefined | null, routerConfig: any) => void): void;

    /**
     * Calculates tenant-specific UAA configuration.
     *
     * @param request - node request object used to identify the tenant
     * @param uaaOptions - UAA options as provided in service binding
     * @param {Approuter~resolveUaaConfigCallback} callback
     */
    resolveUaaConfig(request: IncomingMessage, uaaOptions: any, callback: (error: Error | undefined | null, tenantUaaOptions: any) => void): void;

    /**
     * Callback for {@link createRouterConfig}
     *
     * @callback Approuter~createRouterConfigCallback
     * @param error - Error object in case of error
     * @param routerConfig - Routing configuration to be passed to the callback of {@link StartOptions.getRouterConfig}. Approuter extensions should not access the content of this object.
     */

    /**
     * Callback for {@link resolveUaaConfig}
     *
     * @callback Approuter~resolveUaaConfigCallback
     * @param error - Error object in case of error
     * @param tenantUaaOptions - new UAA configuration with tenant-specific properties
     */
}

export function approuter(): Approuter;
