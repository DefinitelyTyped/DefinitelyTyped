/// <reference types="node" />

import { EventEmitter } from "events";
import { ClientRequest, IncomingMessage, ServerResponse } from "http";
import { ServerOptions } from "https";

import { ComSapXsappSchema_82 } from "./xs-app.schema";

declare namespace approuter {
    interface AfterRequestHandlerContext {
        /** The request sent from client to application router */
        incomingRequest: IncomingMessage;
        /** The response that will be sent from application router to client */
        incomingResponse: ServerResponse;
        /** The request sent from application router to backend application */
        outgoingRequest: ClientRequest;
        /** The response that was received in application router from backend application */
        outgoingResponse: IncomingMessage;
    }

    interface AppRouterIncomingMessage extends IncomingMessage {
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
        afterRequestHandler?: (
            ctx: AfterRequestHandlerContext,
            done: (error: Error | string | undefined | null, incomingResponse: ServerResponse) => void,
        ) => void;

        /**
         * A function that can be added to the request object - for example in a "first" or "beforeRequestHandler" extension.
         * If exists, this function will be called by the standard application router when a backend connection timeout occurs.
         *
         * @param req - the request object
         * @param done - a callback function that doesn't return any parameter
         */
        backendTimeout?: (req: IncomingMessage, done: () => void) => void;

        /** In order to make it easier to write middlewares being agnostic of the route, the `req.url` will be altered to remove the route part and the original URL will be set to this value */
        originalUrl?: string;

        /** Note: On each request, the application router executes registered middlewares in a certain order and the session is not available to all of them. */
        sessionID?: string;

        sessionStore?: SessionStore;
    }

    /**
     * A handler for requests, called Middleware.
     *
     * The generic type T can be used to add custom properties to the request object type
     * this is useful if a middleware adds custom properties to the request object
     *
     * @example
     *   interface RequestWithSession = {
     *     session?: {}
     *   }
     *   MiddlewareHandler<RequestWithSession>
     *
     * @param request - Data of the incoming Request
     * @param response - Object for the outgoing Response; can be manipulated to alter the response
     * @param next - Call next to give control back to Application Router Middleware
     */
    type MiddlewareHandler<T = {}> = (
        request: AppRouterIncomingMessage & T,
        response: ServerResponse,
        next: (value?: Error | string) => void,
    ) => void;

    interface Extensions {
        /**
         * Describes the middleware provided by this extension
         * If a path is given, the handler is only invoked on these paths; otherwise it's invoked on all requests.
         */
        insertMiddleware: {
            /** A MiddlewareSlot before the first application router middleware */
            first?: Array<MiddlewareHandler | { path: string; handler: MiddlewareHandler }>;
            /** A MiddlewareSlot before the standard application router request handling */
            beforeRequestHandler?: Array<MiddlewareHandler | { path: string; handler: MiddlewareHandler }>;
            /** A MiddlewareSlot before the standard application router error handling */
            beforeErrorHandler?: Array<MiddlewareHandler | { path: string; handler: MiddlewareHandler }>;
        };
    }

    type RouterConfig = unknown;

    interface StartOptions {
        /** A TCP port the application router will listen to */
        port?: string;

        /** The working directory for the application router, should contain the xs-app.json file */
        workingDir?: string;

        /** An array of extensions, each one is an object as defined in Application Router Extensions */
        extensions?: Extensions[];

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
        getToken?: (
            request: AppRouterIncomingMessage,
            callback: (error: Error | undefined | null, token: string) => void,
        ) => void;

        /**
         * Provide custom routing configuration
         *
         * **Note**: When approuter is bound to html5 repository, you cannot provide getRouterConfig function.
         *
         * @param request - Node request object
         * @param {StartOptions~getRouterConfigCallback} callback
         */
        getRouterConfig?: (
            request: AppRouterIncomingMessage,
            callback: (error: Error | undefined | null, routerConfig: RouterConfig | null | undefined) => void,
        ) => void;

        /**
         * returns the session secret to be used by the application router for the signing of the session cookies.
         */
        getSessionSecret?: () => string;
    }

    interface RouterConfigOptions {
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
        xsappConfig: Pick<ComSapXsappSchema_82, "welcomeFile" | "logout" | "routes" | "websockets" | "errorPage">;

        /**
         * An array containing the configuration of the backend destinations.
         *
         * If not provided, it will be taken from `destinations` environment variable.
         */
        destinations?: Array<{
            name: string;
            url: string;
            forwardAuthToken: boolean;
        }>;
    }

    interface MiddlewareSlot {
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
     * The application router uses a memory store as a session repository to provide the best runtime performance.
     * However, it is not persisted, and it is not shared across multiple instances of the application router.
     *
     * Events
     *  - update
     *  - destroy
     *  - timeout
     */
    interface MemoryStore extends EventEmitter {
        /**
         * returns the default session timeout in minutes.
         */
        getDefaultSessionTimeout(): number;

        /**
         * @param sessionId an unsigned session identifier
         * @param callback function(error, session) a function that is called when the session object is retrieved from the internal session storage of the application router.
         * error - an error object in case of an error, otherwise null
         * timeout - time, in minutes, until the session times out
         */
        getSessionTimeout(sessionId: string, callback: (error: object | null, session: number) => void): void;

        /**
         * @param sessionId an unsigned session identifier
         * @param callback a function that is called when the session object is retrieved from the internal session storage of the application router.
         * error - an error object in case of an error, otherwise null
         * session - the session object
         * id - session identifier, immutable
         */
        get(sessionId: string, callback: (error: object | null, session: number) => void): void;

        /**
         * @param sessionId an unsigned session identifier
         * @param sessionString a session object serialized to string
         * @param timeout a timestamp in milliseconds, after which the session should be automatically invalidated
         * @param callback  a function that is called after the session is saved in the internal session storage of the application router
         */
        set(sessionId: string, sessionString: string, timeout: number, callback: () => void): void;

        /**
         * @param sessionId an unsigned session identifier
         * @param callback  function(currentSession) function, which returns session object. Callback function may modify and return current session object or create and return brand new session object
         * currentSession - current session object
         * @param resetTimeout a boolean that indicates whether to reset the session timeout
         */
        update(sessionId: string, callback: (currentSession: object) => void, resetTimeout: boolean): void;

        /**
         * @param sessionId an unsigned session identifier
         * @param callback a function that is called after the session is destroyed in the internal session storage of the application router
         */
        destroy(sessionId: string, callback: () => void): void;

        /**
         * Emitted when a user session has been updated.
         *
         * @param event
         */
        on(event: "update", listener: (sessionId: string) => void): this;
    }

    type SessionStore = MemoryStore;

    /**
     * SAP Application Router
     */
    interface Approuter extends EventEmitter {
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
         * **Note**: the cmdParser is currently not typed, feel free to create a pr and add the missing types
         *
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
        cmdParser: never;

        /**
         * Starts the application router with the given options.
         *
         * @param options - Customize the Approuter with some configurations
         * @param callback - Is invoked when the application router has started or an error has occurred. If not provided and an error occurs (e.g. the port is busy), the application will abort.
         */
        start(options?: StartOptions, callback?: (err: Error | undefined | null) => void): void;

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
        createRouterConfig(
            options: RouterConfigOptions,
            callback: (error: Error | undefined | null, routerConfig: RouterConfig) => void,
        ): void;

        /**
         * Calculates tenant-specific UAA configuration.
         *
         * @param request - node request object used to identify the tenant
         * @param uaaOptions - UAA options as provided in service binding
         * @param {Approuter~resolveUaaConfigCallback} callback
         */
        resolveUaaConfig(
            request: AppRouterIncomingMessage,
            uaaOptions: any,
            callback: (error: Error | undefined | null, tenantUaaOptions: any) => void,
        ): void;

        /**
         * returns SessionStore instance.
         */
        getSessionStore(): SessionStore;

        /**
         * Emitted when a new user session is created.
         *
         * @param event
         * @param {Approuter~onLoginLogoutCallback} listener
         */
        on(event: "login", listener: (session: { id: string }) => void): this;

        /**
         * Emitted when a new user session has been updated.
         *
         * @param event
         * @param {Approuter~onLoginLogoutCallback} listener
         */
        on(event: "update", listener: (sessionId: string, timeout: number) => void): this;

        /**
         * Emitted when a user session has expired or a user has requested to log out.
         *
         * @param event
         * @param {Approuter~onLoginLogoutCallback} listener
         */
        // Disabled for better JSDocs
        // tslint:disable-next-line:unified-signatures
        on(event: "logout", listener: (session: { id: string }) => void): this;
    }
}

declare function approuter(): approuter.Approuter;

export = approuter;
