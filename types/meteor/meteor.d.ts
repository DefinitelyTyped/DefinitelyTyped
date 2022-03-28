import { Mongo } from 'meteor/mongo';
import { EJSONable, EJSONableProperty } from 'meteor/ejson';
import { Blaze } from 'meteor/blaze';
import { DDP } from 'meteor/ddp';
declare module 'meteor/meteor' {
    type global_Error = Error;
    namespace Meteor {
        /** Global props **/
        /** True if running in client environment. */
        var isClient: boolean;
        /** True if running in a Cordova mobile environment. */
        var isCordova: boolean;
        /** True if running in server environment. */
        var isServer: boolean;
        /** True if running in production environment. */
        var isProduction: boolean;
        /**
         * `Meteor.release` is a string containing the name of the release with which the project was built (for example, `"1.2.3"`). It is `undefined` if the project was built using a git checkout
         * of Meteor.
         */
        var release: string;
        /** Global props **/

        /** Settings **/
        interface Settings {
            public: { [id: string]: any };
            [id: string]: any;
        }
        /**
         * `Meteor.settings` contains deployment-specific configuration options. You can initialize settings by passing the `--settings` option (which takes the name of a file containing JSON data)
         * to `meteor run` or `meteor deploy`. When running your server directly (e.g. from a bundle), you instead specify settings by putting the JSON directly into the `METEOR_SETTINGS` environment
         * variable. If the settings object contains a key named `public`, then `Meteor.settings.public` will be available on the client as well as the server.  All other properties of
         * `Meteor.settings` are only defined on the server.  You can rely on `Meteor.settings` and `Meteor.settings.public` being defined objects (not undefined) on both client and server even if
         * there are no settings specified.  Changes to `Meteor.settings.public` at runtime will be picked up by new client connections.
         */
        var settings: Settings;
        /** Settings **/

        /** User **/
        interface UserEmail {
            address: string;
            verified: boolean;
        }
        /**
         * UserProfile is left intentionally underspecified here, to allow you
         * to override it in your application (but keep in mind that the default
         * Meteor configuration allows users to write directly to their user
         * record's profile field)
         */
        interface UserProfile {}
        interface User {
            _id: string;
            username?: string | undefined;
            emails?: UserEmail[] | undefined;
            createdAt?: Date | undefined;
            profile?: UserProfile;
            services?: any;
        }

        function user(options?: { fields?: Mongo.FieldSpecifier | undefined }): User | null;

        function userId(): string | null;
        var users: Mongo.Collection<User>;
        /** User **/

        /** Error **/
        /**
         * This class represents a symbolic error thrown by a method.
         */
        var Error: ErrorStatic;
        interface ErrorStatic {
            /**
             * @param error A string code uniquely identifying this kind of error.
             * This string should be used by callers of the method to determine the
             * appropriate action to take, instead of attempting to parse the reason
             * or details fields. For example:
             *
             * ```
             * // on the server, pick a code unique to this error
             * // the reason field should be a useful debug message
             * throw new Meteor.Error("logged-out",
             *   "The user must be logged in to post a comment.");
             *
             * // on the client
             * Meteor.call("methodName", function (error) {
             *   // identify the error
             *   if (error && error.error === "logged-out") {
             *     // show a nice error message
             *     Session.set("errorMessage", "Please log in to post a comment.");
             *   }
             * });
             * ```
             *
             * For legacy reasons, some built-in Meteor functions such as `check` throw
             * errors with a number in this field.
             *
             * @param reason Optional. A short human-readable summary of the
             * error, like 'Not Found'.
             * @param details Optional. Additional information about the error,
             * like a textual stack trace.
             */
            new (error: string | number, reason?: string, details?: string): Error;
        }
        interface Error extends global_Error {
            error: string | number;
            reason?: string | undefined;
            details?: string | undefined;
        }
        var TypedError: TypedErrorStatic;
        interface TypedErrorStatic {
            new (message: string, errorType: string): TypedError;
        }
        interface TypedError extends global_Error {
            message: string;
            errorType: string;
        }
        /** Error **/

        /** Method **/
        interface MethodThisType {
            /** Access inside a method invocation. Boolean value, true if this invocation is a stub. */
            isSimulation: boolean;
            /** The id of the user that made this method call, or `null` if no user was logged in. */
            userId: string | null;
            /**
             * Access inside a method invocation. The connection that this method was received on. `null` if the method is not associated with a connection, eg. a server initiated method call. Calls
             * to methods made from a server method which was in turn initiated from the client share the same `connection`. */
            connection: Connection | null;
            /**
             * Set the logged in user.
             * @param userId The value that should be returned by `userId` on this connection.
             */
            setUserId(userId: string | null): void;
            /** Call inside a method invocation. Allow subsequent method from this client to begin running in a new fiber. */
            unblock(): void;
        }

        /**
         * Defines functions that can be invoked over the network by clients.
         * @param methods Dictionary whose keys are method names and values are functions.
         */
        function methods(methods: { [key: string]: (this: MethodThisType, ...args: any[]) => any }): void;

        /**
         * Invokes a method passing any number of arguments.
         * @param name Name of method to invoke
         * @param args Optional method arguments
         */
        function call(name: string, ...args: any[]): any;

        function apply<Result extends EJSONable | EJSONable[] | EJSONableProperty | EJSONableProperty[]>(
            name: string,
            args: ReadonlyArray<EJSONable | EJSONableProperty>,
            options?: {
                wait?: boolean | undefined;
                onResultReceived?:
                    | ((error: global_Error | Meteor.Error | undefined, result?: Result) => void)
                    | undefined;
                /**
                 * (Client only) if true, don't send this method again on reload, simply call the callback an error with the error code 'invocation-failed'.
                 */
                noRetry?: boolean | undefined;
                returnStubValue?: boolean | undefined;
                throwStubExceptions?: boolean | undefined;
            },
            asyncCallback?: (error: global_Error | Meteor.Error | undefined, result?: Result) => void,
        ): any;
        /** Method **/

        /** Url **/
        /**
         * Generate an absolute URL pointing to the application. The server reads from the `ROOT_URL` environment variable to determine where it is running. This is taken care of automatically for
         * apps deployed to Galaxy, but must be provided when using `meteor build`.
         */
        var absoluteUrl: {
            /**
             * @param path A path to append to the root URL. Do not include a leading "`/`".
             */
            (path?: string, options?: absoluteUrlOptions): string;
            defaultOptions: absoluteUrlOptions;
        };

        interface absoluteUrlOptions {
            /** Create an HTTPS URL. */
            secure?: boolean | undefined;
            /** Replace localhost with 127.0.0.1. Useful for services that don't recognize localhost as a domain name. */
            replaceLocalhost?: boolean | undefined;
            /** Override the default ROOT_URL from the server environment. For example: "`http://foo.example.com`" */
            rootUrl?: string | undefined;
        }
        /** Url **/

        /** Timeout **/
        /**
         * Call a function repeatedly, with a time delay between calls.
         * @param func The function to run
         * @param delay Number of milliseconds to wait between each function call.
         */
        function setInterval(func: Function, delay: number): number;

        /**
         * Call a function in the future after waiting for a specified delay.
         * @param func The function to run
         * @param delay Number of milliseconds to wait before calling function
         */
        function setTimeout(func: Function, delay: number): number;
        /**
         * Cancel a repeating function call scheduled by `Meteor.setInterval`.
         * @param id The handle returned by `Meteor.setInterval`
         */
        function clearInterval(id: number): void;

        /**
         * Cancel a function call scheduled by `Meteor.setTimeout`.
         * @param id The handle returned by `Meteor.setTimeout`
         */
        function clearTimeout(id: number): void;
        /**
         * Defer execution of a function to run asynchronously in the background (similar to `Meteor.setTimeout(func, 0)`.
         * @param func The function to run
         */
        function defer(func: Function): void;
        /** Timeout **/

        /** utils **/
        /**
         * Run code when a client or a server starts.
         * @param func A function to run on startup.
         */
        function startup(func: Function): void;

        /**
         * Wrap a function that takes a callback function as its final parameter.
         * The signature of the callback of the wrapped function should be `function(error, result){}`.
         * On the server, the wrapped function can be used either synchronously (without passing a callback) or asynchronously
         * (when a callback is passed). On the client, a callback is always required; errors will be logged if there is no callback.
         * If a callback is provided, the environment captured when the original function was called will be restored in the callback.
         * The parameters of the wrapped function must not contain any optional parameters or be undefined, as the callback function is expected to be the final, non-undefined parameter.
         * @param func A function that takes a callback as its final parameter
         * @param context Optional `this` object against which the original function will be invoked
         */
        function wrapAsync(func: Function, context?: Object): any;

        function bindEnvironment<TFunc extends Function>(func: TFunc): TFunc;

        class EnvironmentVariable<T> {
            readonly slot: number;
            constructor();
            get(): T;
            getOrNullIfOutsideFiber(): T | null;
            withValue<U>(value: T, fn: () => U): U;
        }
        /** utils **/

        /** Pub/Sub **/
        interface SubscriptionHandle {
            /** Cancel the subscription. This will typically result in the server directing the client to remove the subscription’s data from the client’s cache. */
            stop(): void;
            /** True if the server has marked the subscription as ready. A reactive data source. */
            ready(): boolean;
        }
        interface LiveQueryHandle {
            stop(): void;
        }
        /** Pub/Sub **/
    }

    namespace Meteor {
        /** Login **/
        interface LoginWithExternalServiceOptions {
            requestPermissions?: ReadonlyArray<string> | undefined;
            requestOfflineToken?: Boolean | undefined;
            forceApprovalPrompt?: Boolean | undefined;
            loginUrlParameters?: Object | undefined;
            redirectUrl?: string | undefined;
            loginHint?: string | undefined;
            loginStyle?: string | undefined;
        }

        function loginWithMeteorDeveloperAccount(
            options?: Meteor.LoginWithExternalServiceOptions,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithFacebook(
            options?: Meteor.LoginWithExternalServiceOptions,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithGithub(
            options?: Meteor.LoginWithExternalServiceOptions,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithGoogle(
            options?: Meteor.LoginWithExternalServiceOptions,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithMeetup(
            options?: Meteor.LoginWithExternalServiceOptions,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithTwitter(
            options?: Meteor.LoginWithExternalServiceOptions,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithWeibo(
            options?: Meteor.LoginWithExternalServiceOptions,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWith<ExternalService>(
            options?: {
                requestPermissions?: ReadonlyArray<string> | undefined;
                requestOfflineToken?: boolean | undefined;
                loginUrlParameters?: Object | undefined;
                userEmail?: string | undefined;
                loginStyle?: string | undefined;
                redirectUrl?: string | undefined;
            },
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithPassword(
            user: Object | string,
            password: string,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loginWithToken(
            token: string,
            callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void,
        ): void;

        function loggingIn(): boolean;

        function loggingOut(): boolean;

        function logout(callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function logoutOtherClients(callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;
        /** Login **/

        /** Event **/
        interface Event {
            type: string;
            target: HTMLElement;
            currentTarget: HTMLElement;
            which: number;
            stopPropagation(): void;
            stopImmediatePropagation(): void;
            preventDefault(): void;
            isPropagationStopped(): boolean;
            isImmediatePropagationStopped(): boolean;
            isDefaultPrevented(): boolean;
        }
        interface EventHandlerFunction extends Function {
            (event?: Meteor.Event, templateInstance?: Blaze.TemplateInstance): void;
        }
        interface EventMap {
            [id: string]: Meteor.EventHandlerFunction;
        }
        /** Event **/

        /** Connection **/
        function reconnect(): void;

        function disconnect(): void;
        /** Connection **/

        /** Status **/
        function status(): DDP.DDPStatus;
        /** Status **/

        /** Pub/Sub **/
        /**
         * Subscribe to a record set.  Returns a handle that provides
         * `stop()` and `ready()` methods.
         * @param name Name of the subscription.  Matches the name of the
         * server's `publish()` call.
         * @param args Optional arguments passed to publisher
         * function on server.
         * @param callbacks Optional. May include `onStop`
         * and `onReady` callbacks. If there is an error, it is passed as an
         * argument to `onStop`. If a function is passed instead of an object, it
         * is interpreted as an `onReady` callback.
         */
        function subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
        /** Pub/Sub **/
    }

    namespace Meteor {
        /** Connection **/
        interface Connection {
            id: string;
            close: () => void;
            onClose: (callback: () => void) => void;
            clientAddress: string;
            httpHeaders: Object;
        }

        function onConnection(callback: (connection: Connection) => void): void;
        /** Connection **/
        /**
         * Publish a record set.
         * @param name If String, name of the record set.  If Object, publications Dictionary of publish functions by name. If `null`, the set has no name, and the record set is automatically sent to
         * all connected clients.
         * @param func Function called on the server each time a client subscribes. Inside the function, `this` is the publish handler object, described below. If the client passed arguments to
         * `subscribe`, the function is called with the same arguments.
         */
        function publish(
            name: string | null,
            func: (this: Subscription, ...args: any[]) => void,
            options?: { is_auto: boolean },
        ): void;

        function _debug(...args: any[]): void;
    }

    export interface Subscription {
        /**
         * Call inside the publish function.  Informs the subscriber that a document has been added to the record set.
         * @param collection The name of the collection that contains the new document.
         * @param id The new document's ID.
         * @param fields The fields in the new document.  If `_id` is present it is ignored.
         */
        added(collection: string, id: string, fields: Object): void;
        /**
         * Call inside the publish function. Informs the subscriber that a document in the record set has been modified.
         * @param collection The name of the collection that contains the changed document.
         * @param id The changed document's ID.
         * @param fields The fields in the document that have changed, together with their new values.  If a field is not present in `fields` it was left unchanged; if it is present in `fields` and
         * has a value of `undefined` it was removed from the document.  If `_id` is present it is ignored.
         */
        changed(collection: string, id: string, fields: Object): void;
        /** Access inside the publish function. The incoming connection for this subscription. */
        connection: Meteor.Connection;
        /**
         * Call inside the publish function. Stops this client's subscription, triggering a call on the client to the `onStop` callback passed to `Meteor.subscribe`, if any. If `error` is not a
         * `Meteor.Error`, it will be sanitized.
         * @param error The error to pass to the client.
         */
        error(error: Error): void;
        /**
         * Call inside the publish function. Registers a callback function to run when the subscription is stopped.
         * @param func The callback function
         */
        onStop(func: Function): void;
        /**
         * Call inside the publish function. Informs the subscriber that an initial, complete snapshot of the record set has been sent.  This will trigger a call on the client to the `onReady`
         * callback passed to  `Meteor.subscribe`, if any.
         */
        ready(): void;
        /**
         * Call inside the publish function. Informs the subscriber that a document has been removed from the record set.
         * @param collection The name of the collection that the document has been removed from.
         * @param id The ID of the document that has been removed.
         */
        removed(collection: string, id: string): void;
        /**
         * Access inside the publish function. The incoming connection for this subscription.
         */
        stop(): void;
        /**
         * Call inside the publish function. Allows subsequent methods or subscriptions for the client of this subscription
         * to begin running without waiting for the publishing to become ready.
         */
        unblock(): void;
        /** Access inside the publish function. The id of the logged-in user, or `null` if no user is logged in. */
        userId: string | null;
    }

    namespace Meteor {
        /** Global props **/
        /** True if running in development environment. */
        var isDevelopment: boolean;
        var isTest: boolean;
        var isAppTest: boolean;
        /** Global props **/
    }
}
