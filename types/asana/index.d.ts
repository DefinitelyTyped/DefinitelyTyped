// Type definitions for node-asana 0.14.0
// Project: https://github.com/Asana/node-asana
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="bluebird" />

import * as Promise from 'bluebird';

declare namespace asana {
    var Client: ClientStatic;

    interface ClientStatic {
        /**
         * Constructs a Client with instances of all the resources using the dispatcher.
         * It also keeps a reference to the dispatcher so that way the end user can have
         * access to it.
         * @class
         * @classdesc A wrapper for the Asana API which is authenticated for one user
         * @param {Dispatcher} dispatcher The request dispatcher to use
         * @param {Object} options        Options to configure the client
         * @param {String} [clientId]     ID of the client, required for Oauth
         * @param {String} [clientSecret] Secret key, for some Oauth flows
         * @param {String} [redirectUri]  Default redirect URI for this client
         * @param {String} [asanaBaseUrl] Base URL for Asana, for debugging
         */
        (dispatcher: Dispatcher, options?: ClientOptions): asana.Client;
        /**
         * Creates a new client.
         * @param {Object} options Options for specifying the client, see constructor.
         */
        create(options?: ClientOptions): Client;
    }

    /** Options to configure the client */
    interface ClientOptions extends DispatcherOptions {
        clientId?: string | number;
        clientSecret?: string;
        redirectUri?: string;
        asanaBaseUrl?: string;
    }

    interface Client {
        /**
         * Ensures the client is authorized to make requests. Kicks off the
         * configured Oauth flow, if any.
         *
         * @returns {Promise<Client>} A promise that resolves to this client when
         *     authorization is complete.
         */
        authorize(): Promise<Client>;

        /**
         * Configure the Client to use a user's API Key and then authenticate
         * through HTTP Basic Authentication. This should only be done for testing,
         * as requests using Oauth can provide more security, higher rate limits, and
         * more features.
         * @param  {String} apiKey The Asana Api Key of the user
         * @return {Client}        this
         * @param apiKey
         * @return
         */
        useBasicAuth(apiKey: string): this;

        /**
         * Configure the client to authenticate using a Personal Access Token.
         * @param  {String} accessToken The Personal Access Token to use for
         * authenticating requests.
         * @return {Client}             this
         * @param accessToken
         * @return
         */
        useAccessToken(accessToken: string): this;

        /**
         * Configure the client to authenticate via Oauth. Credentials can be
         * supplied, or they can be obtained by running an Oauth flow.
         * @param  {Object} options Options for Oauth. Includes any options for
         *     the selected flow.
         * @option {Function} [flowType]  Type of OauthFlow to use to obtain user
         *     authorization. Defaults to autodetect based on environment.
         * @option {Object} [credentials] Credentials to use; no flow required to
         *     obtain authorization. This object should at a minimum contain an
         *     `access_token` string field.
         * @return {Client} this
         * @param options
         * @return
         */
        useOauth(options?: auth.OauthAuthenticatorOptions): this;

        /**
         * The internal dispatcher. This is mostly used by the resources but provided
         * for custom requests to the API or API features that have not yet been added
         * to the client.
         * @type {Dispatcher}
         */
        dispatcher: Dispatcher;
        /**
         * An instance of the Attachments resource.
         * @type {Attachments}
         */
        attachments: resources.Attachments;
        /**
         * An instance of the Events resource.
         * @type {Events}
         */
        events: resources.Events;
        /**
         * An instance of the Projects resource.
         * @type {Projects}
         */
        projects: resources.Projects;
        /**
         * An instance of the Stories resource.
         * @type {Stories}
         */
        stories: resources.Stories;
        /**
         * An instance of the Tags resource.
         * @type {Tags}
         */
        tags: resources.Tags;
        /**
         * An instance of the Tasks resource.
         * @type {Tasks}
         */
        tasks: resources.Tasks;
        /**
         * An instance of the Teams resource.
         * @type {Teams}
         */
        teams: resources.Teams;
        /**
         * An instance of the Users resource.
         * @type {Users}
         */
        users: resources.Users;
        /**
         * An instance of the Workspaces resource.
         * @type {Workspaces}
         */
        workspaces: resources.Workspaces;
        /**
         * Store off Oauth info.
         */
        app: auth.App;
    }

    var Dispatcher: DispatcherStatic;

    interface DispatcherStatic {
        /**
         * Creates a dispatcher which will act as a basic wrapper for making HTTP
         * requests to the API, and handle authentication.
         * @class
         * @classdesc A HTTP wrapper for the Asana API
         * @param {Object} options for default behavior of the Dispatcher
         * @option {Authenticator} [authenticator] Object to use for authentication.
         *     Can also be set later with `setAuthenticator`.
         * @option {String} [retryOnRateLimit] Automatically handle `RateLimitEnforced`
         *     errors by sleeping and retrying after the waiting period.
         * @option {Function} [handleUnauthorized] Automatically handle
         *     `NoAuthorization` with the callback. If the callback returns `true`
         *     (or a promise resolving to `true), will retry the request.
         * @option {String} [asanaBaseUrl] Base URL for Asana, for debugging
         * @option {Number} [requestTimeout] Timeout (in milliseconds) to wait for the
         *     request to finish.
         */
        new (options?: DispatcherOptions): Dispatcher;

        /**
         * Default handler for requests that are considered unauthorized.
         * Requests that the authenticator try to refresh its credentials if
         * possible.
         * @return {Promise<boolean>} True iff refresh was successful, false if not.
         * @return
         */
        maybeReauthorize(): Promise<boolean>;

        /**
         * The relative API path for the current version of the Asana API.
         * @type {String}
         */
        API_PATH: string;
    }

    interface DispatcherOptions {
        authenticator?: auth.Authenticator;
        retryOnRateLimit?: boolean;
        handleUnauthorized?: () => boolean | Promise<boolean>;
        requestTimeout?: string;
    }

    interface Dispatcher {
        /**
         * Creates an Asana API Url by concatenating the ROOT_URL with path provided.
         * @param  {String} path The path
         * @return {String}      The url
         * @param path
         * @return
         */
        url(path: string): string;

        /**
         * Configure the authentication mechanism to use.
         * @returns {Dispatcher} this
         * @param authenticator
         * @return
         */
        setAuthenticator(authenticator: auth.Authenticator): this;

        /**
         * Ensure the dispatcher is authorized to make requests. Call this before
         * making any API requests.
         *
         * @returns {Promise} Resolves when the dispatcher is authorized, rejected if
         *     there was a problem authorizing.
         * @return
         */
        authorize(): Promise<void>;

        /**
         * Dispatches a request to the Asana API. The request parameters are passed to
         * the request module.
         * @param  {Object}  params The params for request
         * @param  {Object}  [dispatchOptions] Options for handling request/response
         * @return {Promise}        The response for the request
         * @param params
         * @param dispatchOptions?
         * @return
         */
        dispatch(params: any, dispatchOptions?: any): Promise<any>;

        /**
         * Dispatches a GET request to the Asana API.
         * @param  {String}  path    The path of the API
         * @param  {Object}  [query] The query params
         * @param  {Object}  [dispatchOptions] Options for handling the request and
         *     response. See `dispatch`.
         * @return {Promise}         The response for the request
         * @param path
         * @param query?
         * @param dispatchOptions?
         * @return
         */
        get(path: string, query?: any, dispatchOptions?: any): Promise<any>;

        /**
         * Dispatches a POST request to the Asana API.
         * @param  {String} path The path of the API
         * @param  {Object} data The data to be sent
         * @param  {Object}  [dispatchOptions] Options for handling the request and
         *     response. See `dispatch`.
         * @return {Promise}     The response for the request
         * @param path
         * @param data
         * @param dispatchOptions?
         * @return
         */
        post(path: string, data: any, dispatchOptions?: any): Promise<any>;

        /**
         * Dispatches a PUT request to the Asana API.
         * @param  {String} path The path of the API
         * @param  {Object} data The data to be sent
         * @param  {Object}  [dispatchOptions] Options for handling the request and
         *     response. See `dispatch`.
         * @return {Promise}     The response for the request
         * @param path
         * @param data
         * @param dispatchOptions?
         * @return
         */
        put(path: string, data: any, dispatchOptions?: any): Promise<any>;

        /**
         * Dispatches a DELETE request to the Asana API.
         * @param  {String} path The path of the API
         * @param  {Object}  [dispatchOptions] Options for handling the request and
         *     response. See `dispatch`.
         * @return {Promise}     The response for the request
         * @param path
         * @param dispatchOptions?
         * @return
         */
        delete(path: string, dispatchOptions?: any): Promise<any>;

        /**
         * The base URL for Asana
         * @type {String}
         */
        asanaBaseUrl: string;

        /**
         * Whether requests should be automatically retried if rate limited.
         * @type {Boolean}
         */
        retryOnRateLimit: boolean;

        /**
         * Handler for unauthorized requests which may seek reauthorization.
         * Default behavior is available if configured with an Oauth authenticator
         * that has a refresh token, and will refresh the current access token.
         * @type {Function}
         */
        handleUnauthorized: () => boolean | Promise<boolean>;

        /**
         * The amount of time in milliseconds to wait for a request to finish.
         * @type {Number}
         */
        requestTimeout: number;
    }

    namespace auth {
        var BasicAuthenticator: BasicAuthenticatorStatic;

        interface BasicAuthenticatorStatic {
            /**
             * @param apiKey
             */
            new (apiKey: string): BasicAuthenticator;
        }

        interface BasicAuthenticator extends Authenticator {
            /**
             * @param {Object} request The request to modify, for the `request` library.
             * @return {Object} The `request` parameter, modified to include authentication
             *     information using the stored credentials.
             * @param request
             * @return
             */
            authenticateRequest(request: BasicAuthenticatorRequest): BasicAuthenticatorRequest;
        }

        interface BasicAuthenticatorRequest {
            auth: {
                username: string;
                password: string;
            }
        }

        var OauthAuthenticator: OauthAuthenticatorStatic;

        interface OauthAuthenticatorStatic {
            /**
             * Creates an authenticator that uses Oauth for authentication.
             *
             * @param {Object} options Configure the authenticator; must specify one
             *     of `flow` or `credentials`.
             * @option {App}           app           The app being authenticated for.
             * @option {OauthFlow}     [flow]        The flow to use to get credentials
             *     when needed.
             * @option {String|Object} [credentials] Initial credentials to use. This can
             *     be either the object returned from an access token request (which
             *     contains the token and some other metadata) or just the `access_token`
             *     field.
             * @constructor
             */
            new (options: OauthAuthenticatorOptions): OauthAuthenticator;
        }

        interface OauthAuthenticatorOptions {
            flowType?: auth.FlowType;
            credentials?: Credentials | string;
        }

        interface Credentials {
            access_token?: string;
            refresh_token?: string;
        }

        interface OauthAuthenticator extends Authenticator {
            /**
             * @param {Object} request The request to modify, for the `request` library.
             * @return {Object} The `request` parameter, modified to include authentication
             *     information using the stored credentials.
             * @param request
             * @return
             */
            authenticateRequest(request: OauthAuthenticatorRequest): OauthAuthenticatorRequest;
        }

        interface OauthAuthenticatorRequest {
            /**
             * When browserify-d, the `auth` component of the `request` library
             * doesn't work so well, so we just manually set the bearer token instead.
             */
            headers: {
                Authorization: string;
            }
        }

        /**
         * A layer to abstract the differences between using different types of
         * authentication (Oauth vs. Basic). The Authenticator is responsible for
         * establishing credentials and applying them to outgoing requests.
         * @constructor
         */
        interface Authenticator {
            /**
             * Establishes credentials.
             *
             * @return {Promise} Resolves when initial credentials have been
             *     completed and `authenticateRequest` calls can expect to succeed.
             * @return
             */
            establishCredentials(): Promise<void>;

            /**
             * Attempts to refresh credentials, if possible, given the current credentials.
             *
             * @return {Promise} Resolves to `true` if credentials have been successfully
             *     established and `authenticateRequests` can expect to succeed, else
             *     resolves to `false`.
             * @return
             */
            refreshCredentials(): Promise<boolean>;
        }

        var App: AppStatic;

        interface AppStatic {
            /**
             * An abstraction around an App used with Asana.
             *
             * @options {Object} Options to construct the app
             * @option {String} clientId       The ID of the app
             * @option {String} [clientSecret] The secret key, if available here
             * @option {String} [redirectUri]  The default redirect URI
             * @option {String} [scope]        Scope to use, supports `default` and `scim`
             * @option {String} [asanaBaseUrl] Base URL to use for Asana, for debugging
             * @constructor
             */
            new (options: AppOptions): App;
        }

        interface AppOptions extends AsanaAuthorizeUrlOptions {
            clientId?: string | number;
            clientSecret?: string;
            scope?: string;
        }

        interface App {
            /**
             * @param {Object} options  Overrides to the app's defaults
             * @option {String} asanaBaseUrl
             * @option {String} redirectUri
             * @returns {String} The URL used to authorize a user for the app.
             * @param options
             * @return
             */
            asanaAuthorizeUrl(options?: AsanaAuthorizeUrlOptions): string;

            /**
             * @param {Object} options  Overrides to the app's defaults
             * @option {String} asanaBaseUrl
             * @option {String} redirectUri
             * @returns {String} The URL used to acquire an access token.
             * @param options
             * @return
             */
            asanaTokenUrl(options?: AsanaAuthorizeUrlOptions): string;

            /**
             * @param {String} code An authorization code obtained via `asanaAuthorizeUrl`.
             * @param {Object} options  Overrides to the app's defaults
             * @option {String} asanaBaseUrl
             * @option {String} redirectUri
             * @return {Promise<Object>} The token, which will include the `access_token`
             *     used for API access, as well as a `refresh_token` which can be stored
             *     to get a new access token without going through the flow again.
             * @param code
             * @param options
             * @return
             */
            accessTokenFromCode(code: string, options?: AsanaAuthorizeUrlOptions): Promise<Credentials>;

            /**
             * @param {String} refreshToken A refresh token obtained via Oauth.
             * @param {Object} options Overrides to the app's defaults
             * @option {String} asanaBaseUrl
             * @option {String} redirectUri
             * @return {Promise<Object>} The token, which will include the `access_token`
             *     used for API access.
             * @param refreshToken
             * @param options
             * @return
             */
            accessTokenFromRefreshToken(refreshToken: string, options: AsanaAuthorizeUrlOptions): Promise<Credentials>;

            scope: string;

            asanaBaseUrl: string;
        }

        interface AsanaAuthorizeUrlOptions {
            redirectUri?: string;
            asanaBaseUrl?: string;
        }

        var OauthError: OauthErrorStatic;

        interface OauthErrorStatic {
            /**
             * @param options {Object} A data blob parsed from a query string or JSON
             * response from the Asana API
             * @option {String} error The string code identifying the error.
             * @option {String} [error_uri] A link to help and information about the error.
             * @option {String} [error_description] A description of the error.
             * @constructor
             */
            new (options: OauthErrorOptions): OauthError;
        }

        interface OauthErrorOptions {
            error?: string;
            error_uri?: string;
            error_description?: string;
        }

        interface OauthError extends Error {
        }

        /**
         * Auto-detects the type of Oauth flow to use that's appropriate to the
         * environment.
         *
         * @returns {Function|null} The type of Oauth flow to use, or null if no
         *     appropriate type could be determined.
         * @param env
         * @return
         */
        function autoDetect(env: any): Function;

        var RedirectFlow: RedirectFlowStatic;

        interface RedirectFlowStatic extends FlowType {
            /**
             * An Oauth flow that runs in the browser and requests user authorization by
             * redirecting to an authorization page on Asana, and redirecting back with
             * the credentials.
             * @param {Object} options See `BaseBrowserFlow` for options.
             * @constructor
             */
            new (options: any): RedirectFlow;
        }

        interface RedirectFlow extends BaseBrowserFlow {
        }

        var PopupFlow: PopupFlowStatic;

        interface PopupFlowStatic extends FlowType {
            /**
             * An Oauth flow that runs in the browser and requests user authorization by
             * popping up a window and prompting the user.
             * @param {Object} options See `BaseBrowserFlow` for options.
             * @constructor
             */
            new (options: any): PopupFlow;
        }

        interface PopupFlow extends BaseBrowserFlow {
            /**
             * @param popupWidth
             * @param popupHeight
             */
            _popupParams(popupWidth: number, popupHeight: number): void;

            runReceiver(): void;
        }

        var NativeFlow: NativeFlowStatic;

        interface NativeFlowStatic extends FlowType {
            /**
             * An Oauth flow that can be run from the console or an app that does
             * not have the ability to open and manage a browser on its own.
             * @param {Object} options
             * @option {App} app App to authenticate for
             * @option {String function(String)} [instructions] Function returning the
             *     instructions to output to the user. Passed the authorize url.
             * @option {String function()} [prompt] String to output immediately before
             *     waiting for a line from stdin.
             * @constructor
             */
            new (options: any): NativeFlow;
        }

        interface NativeFlow extends Flow {
            /**
             * Run the Oauth flow, prompting the user to go to the authorization URL
             * and enter the code it displays when finished.
             *
             * @return {Promise<Object>} The access token object, which will include
             *     `access_token` and `refresh_token`.
             */
            run(): void;

            /**
             * @param {String} code An authorization code obtained via `asanaAuthorizeUrl`.
             * @return {Promise<Object>} The token, which will include the `access_token`
             *     used for API access, as well as a `refresh_token` which can be stored
             *     to get a new access token without going through the flow again.
             * @param code
             */
            accessToken(code: string): void;

            /**
             * @return {Promise} The access token, which will include a refresh token
             *     that can be stored in the future to create a client without going
             *     through the Oauth flow.
             * @param url
             * @return
             */
            promptForCode(url: string): any;
        }

        var ChromeExtensionFlow: ChromeExtensionFlowStatic;

        interface ChromeExtensionFlowStatic extends FlowType {
            /**
             * An Oauth flow that runs in a Chrome browser extension and requests user
             * authorization by opening a temporary tab to prompt the user.
             * @param {Object} options See `BaseBrowserFlow` for options, plus the below:
             * @options {String} [receiverPath] Full path and filename from the base
             *     directory of the extension to the receiver page. This is an HTML file
             *     that has been made web-accessible, and that calls the receiver method
             *     `Asana.auth.ChromeExtensionFlow.runReceiver();`.
             * @constructor
             */
            new (options: any): ChromeExtensionFlow;
        }

        interface ChromeExtensionFlow extends BaseBrowserFlow {
            /**
             * Runs the receiver code to send the Oauth result to the requesting tab.
             */
            runReceiver(): void;
        }

        var BaseBrowserFlow: BaseBrowserFlowStatic;

        interface BaseBrowserFlowStatic extends FlowType {
            /**
             * A base class for any flow that runs in the browser. All subclasses use the
             * "implicit grant" flow to authenticate via the browser.
             * @param {Object} options
             * @option {App} app The app this flow is for
             * @option {String} [redirectUri] The URL that Asana should redirect to once
             *     user authorization is complete. Defaults to the URL configured in
             *     the app, and if none then the current page URL.
             * @constructor
             */
            new (options: any): BaseBrowserFlow;
        }

        interface BaseBrowserFlow extends Flow {
            /**
             * @param {String} authUrl The URL the user should be navigated to in order
             *     to authorize the app.
             * @param {String} state   The unique state generated for this auth request.
             * @return {Promise} Resolved when authorization has successfully started,
             *     i.e. the user has been navigated to a page requesting authorization.
             * @param authUrl
             * @param state
             * @return
             */
            startAuthorization(authUrl: string, state: string): any;

            /**
             * @return {Promise<Object>} Credentials returned from Oauth.
             * @param state
             */
            finishAuthorization(state: string): void;

            /**
             * @return {String} The URL to redirect to that will receive the
             * @return
             */
            receiverUrl(): string;

            /**
             * @return {String} The URL to redirect to that will receive the
             * @return
             */
            asanaBaseUrl(): string;

            /**
             * @returns {String} Generate a new unique state parameter for a request.
             * @return
             */
            getStateParam(): string;
        }

        interface FlowType {
            new (options: any): Flow;
        }

        interface Flow {
            /**
             * @returns {String} The URL used to authorize the user for the app.
             * @return
             */
            authorizeUrl(): string;

            /**
             * Run the appropriate parts of the Oauth flow, attempting to establish user
             * authorization.
             * @returns {Promise<Object>} A promise that resolves to the Oauth credentials.
             */
            run(): void;
        }
    }

    namespace errors {
        class AsanaError extends Error {
            /**
             * @param message
             * @return
             */
            constructor(message: any);

            code: number;
            value: any;
        }

        class Forbidden extends AsanaError {
            /**
             * @param value
             * @return
             */
            constructor(value: any);
        }


        class InvalidRequest extends AsanaError {
            /**
             * @param value
             * @return
             */
            constructor(value: any);
        }

        class NoAuthorization extends AsanaError {
            /**
             * @param value
             * @return
             */
            constructor(value: any);
        }

        class NotFound extends AsanaError {
            /**
             * @param value
             * @return
             */
            constructor(value: any);
        }

        class RateLimitEnforced extends AsanaError {
            /**
             * @param value
             * @return
             */
            constructor(value: any);
        }

        class ServerError extends AsanaError {
            /**
             * @param value
             * @return
             */
            constructor(value: any);
        }
    }

    namespace resources {
        interface AttachmentsStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Attachments;
        }

        namespace Attachments {
            interface Type extends Resource {
                readonly id: number;
                readonly created_at: string;
                readonly download_url: string;
                readonly view_url: string;
                readonly name: string;
                readonly host: string;
                readonly parent: Resource;
            }
        }

        var Attachments: AttachmentsStatic;

        /**
         * An _attachment_ object represents any file attached to a task in Asana,
         * whether it's an uploaded file or one associated via a third-party service
         * such as Dropbox or Google Drive.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Attachments extends Resource {
            /**
             * * Returns the full record for a single attachment.
             *   * @param {Number} attachment Globally unique identifier for the attachment.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param attachment
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(attachment: number, params?: Params, dispatchOptions?: any): Promise<Attachments.Type>;

            /**
             * * Returns the compact records for all attachments on the task.
             *   * @param {Number} task Globally unique identifier for the task.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByTask(task: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Attachments.Type>>;
        }

        interface EventsStatic {
            /**
             * @param dispatcher
             * @return
             */
            new (dispatcher: Dispatcher): Events;
        }

        var Events: EventsStatic;

        /**
         * An _event_ is an object representing a change to a resource that was observed
         * by an event subscription.
         *
         * In general, requesting events on a resource is faster and subject to higher
         * rate limits than requesting the resource itself. Additionally, change events
         * bubble up - listening to events on a project would include when stories are
         * added to tasks in the project, even on subtasks.
         *
         * Establish an initial sync token by making a request with no sync token.
         * The response will be a `412` error - the same as if the sync token had
         * expired.
         *
         * Subsequent requests should always provide the sync token from the immediately
         * preceding call.
         *
         * Sync tokens may not be valid if you attempt to go 'backward' in the history
         * by requesting previous tokens, though re-requesting the current sync token
         * is generally safe, and will always return the same results.
         *
         * When you receive a `412 Precondition Failed` error, it means that the
         * sync token is either invalid or expired. If you are attempting to keep a set
         * of data in sync, this signals you may need to re-crawl the data.
         *
         * Sync tokens always expire after 24 hours, but may expire sooner, depending on
         * load on the service.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Events extends Resource { }

        interface ProjectsStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Projects;
        }

        namespace Projects {
            interface Type extends Resource {
                created_at: string;
                modified_at: string;
                due_date: string;
                current_status: Status;
                public: boolean;
                archived: boolean;
                notes: string;
                color: string;
                workspace: Resource;
                team: Resource;
                members: Resource[];
                followers: Resource[];
            }

            interface CreateParams {
                name?: string;
                team?: number;
                public?: boolean;
                due_date: string;
                notes?: string;
                color?: string;
            }

            interface FollowersParams {
                followers: (number | string)[];
            }

            interface MembersParams {
                members: (number | string)[];
            }

            interface Status {
                color: string;
                text: string;
                html_text: string;
                modified_at: string;
                author: Resource;
            }

            interface FindAllParams extends PaginationParams {
                team?: number;
                archived?: boolean;
            }

            interface FindByParams extends PaginationParams {
                archived?: boolean;
            }
        }

        var Projects: ProjectsStatic;

        /**
         * A _project_ represents a prioritized list of tasks in Asana. It exists in a
         * single workspace or organization and is accessible to a subset of users in
         * that workspace or organization, depending on its permissions.
         *
         * Projects in organizations are shared with a single team. You cannot currently
         * change the team of a project via the API. Non-organization workspaces do not
         * have teams and so you should not specify the team of project in a
         * regular workspace.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Projects extends Resource {
            /**
             * * Creates a new project in a workspace or team.
             * *
             * * Every project is required to be created in a specific workspace or
             * * organization, and this cannot be changed once set. Note that you can use
             * * the `workspace` parameter regardless of whether or not it is an
             * * organization.
             * *
             * * If the workspace for your project _is_ an organization, you must also
             * * supply a `team` to share the project with.
             * *
             * * Returns the full record of the newly created project.
             *   * @param {Object} data Data for the request
             *   * @param {String} data.workspace The workspace or organization to create the project in.
             *   * @param {String} [data.team] If creating in an organization, the specific team to create the
             *   * project in.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param data
             * @param dispatchOptions?
             * @return
             */
            create(data: Projects.CreateParams & { workspace: number }, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * If the workspace for your project _is_ an organization, you must also
             * * supply a `team` to share the project with.
             * *
             * * Returns the full record of the newly created project.
             *   * @param {Number} workspace The workspace or organization to create the project in.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param data
             * @param dispatchOptions?
             * @return
             */
            createInWorkspace(workspace: number, data: Projects.CreateParams, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * Creates a project shared with the given team.
             * *
             * * Returns the full record of the newly created project.
             *   * @param {Number} team The team to create the project in.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param team
             * @param data
             * @param dispatchOptions?
             * @return
             */
            createInTeam(team: number, data: Projects.CreateParams, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * Returns the complete project record for a single project.
             *   * @param {Number} project The project to get.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param project
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(project: number, params?: Params, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * A specific, existing project can be updated by making a PUT request on the
             * * URL for that project. Only the fields provided in the `data` block will be
             * * updated; any unspecified fields will remain unchanged.
             * *
             * * When using this method, it is best to specify only those fields you wish
             * * to change, or else you may overwrite changes made by another user since
             * * you last retrieved the task.
             * *
             * * Returns the complete updated project record.
             *   * @param {Number} project The project to update.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param data
             * @param dispatchOptions?
             * @return
             */
            update(project: number, data: Projects.CreateParams, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * A specific, existing project can be deleted by making a DELETE request
             * * on the URL for that project.
             * *
             * * Returns an empty data record.
             *   * @param {Number} project The project to delete.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param dispatchOptions?
             * @return
             */
            delete(project: number, dispatchOptions?: any): Promise<void>;

            /**
             * * Returns the compact project records for some filtered set of projects.
             * * Use one or more of the parameters provided to filter the projects returned.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {String} [params.workspace] The workspace or organization to filter projects on.
             *   * @param {String} [params.team] The team to filter projects on.
             *   * @param {Boolean} [params.archived] Only return projects whose `archived` field takes on the value of
             *   * this parameter.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findAll(params?: Projects.FindAllParams, dispatchOptions?: any): Promise<ResourceList<Projects.Type>>;

            /**
             * * Returns the compact project records for all projects in the workspace.
             *   * @param {Number} workspace The workspace or organization to find projects in.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Boolean} [params.archived] Only return projects whose `archived` field takes on the value of
             *   * this parameter.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByWorkspace(workspace: number, params?: Projects.FindByParams, dispatchOptions?: any): Promise<ResourceList<Projects.Type>>;

            /**
             * * Returns the compact project records for all projects in the team.
             *   * @param {Number} team The team to find projects in.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Boolean} [params.archived] Only return projects whose `archived` field takes on the value of
             *   * this parameter.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param team
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByTeam(team: number, params?: Projects.FindByParams, dispatchOptions?: any): Promise<ResourceList<Projects.Type>>;

            /**
             * * Returns compact records for all sections in the specified project.
             *   * @param {Number} project The project to get sections from.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            sections(project: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tasks.Type>>;

            /**
             * * Returns the compact task records for all tasks within the given project,
             * * ordered by their priority within the project. Tasks can exist in more than one project at a time.
             *   * @param {Number} project The project in which to search for tasks.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            tasks(project: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tasks.Type>>;

            /**
             * * Adds the specified list of users as followers to the project. Followers are a subset of members, therefore if
             * * the users are not already members of the project they will also become members as a result of this operation.
             * * Returns the updated project record.
             *   * @param {Number} project The project to add followers to.
             *   * @param {Object} data Data for the request
             *   * @param {Array} data.followers An array of followers to add to the project.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addFollowers(project: number, data: Projects.FollowersParams, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * Removes the specified list of users from following the project, this will not affect project membership status.
             * * Returns the updated project record.
             *   * @param {Number} project The project to remove followers from.
             *   * @param {Object} data Data for the request
             *   * @param {Array} data.followers An array of followers to remove from the project.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param data
             * @param dispatchOptions?
             * @return
             */
            removeFollowers(project: number, data: Projects.FollowersParams, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * Adds the specified list of users as members of the project. Returns the updated project record.
             *   * @param {Number} project The project to add members to.
             *   * @param {Object} data Data for the request
             *   * @param {Array} data.members An array of members to add to the project.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addMembers(project: number, data: Projects.MembersParams, dispatchOptions?: any): Promise<Projects.Type>;

            /**
             * * Removes the specified list of members from the project. Returns the updated project record.
             *   * @param {Number} project The project to remove members from.
             *   * @param {Object} data Data for the request
             *   * @param {Array} data.members An array of members to remove from the project.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param project
             * @param data
             * @param dispatchOptions?
             * @return
             */
            removeMembers(project: number, data: Projects.MembersParams, dispatchOptions?: any): Promise<Projects.Type>;
        }

        interface StoriesStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Stories;
        }

        namespace Stories {
            interface ShortType extends Resource {
                created_at: string;
                created_by: Resource;
                type: string;
                text: string;
            }

            interface Type extends ShortType {
                html_text: string;
                source: string;
                target: Resource;
                hearts: Type[];
            }
        }

        var Stories: StoriesStatic;

        /**
         * A _story_ represents an activity associated with an object in the Asana
         * system. Stories are generated by the system whenever users take actions such
         * as creating or assigning tasks, or moving tasks between projects. _Comments_
         * are also a form of user-generated story.
         *
         * Stories are a form of history in the system, and as such they are read-only.
         * Once generated, it is not possible to modify a story.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Stories extends Resource {
            /**
             * * Returns the compact records for all stories on the task.
             *   * @param {Number} task Globally unique identifier for the task.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByTask(task: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Stories.Type>>;

            /**
             * * Returns the full record for a single story.
             *   * @param {Number} story Globally unique identifier for the story.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param story
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(story: number, params?: Params, dispatchOptions?: any): Promise<Stories.Type>;

            /**
             * * Adds a comment to a task. The comment will be authored by the
             * * currently authenticated user, and timestamped when the server receives
             * * the request.
             * *
             * * Returns the full record for the new story added to the task.
             *   * @param {Number} task Globally unique identifier for the task.
             *   * @param {Object} data Data for the request
             *   * @param {String} data.text The plain text of the comment to add.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            createOnTask(task: number, data: any, dispatchOptions?: any): Promise<ResourceList<Stories.ShortType>>;
        }

        interface TagsStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Tags;
        }

        namespace Tags {
            interface Type extends Resource {
                created_at: string;
                notes: string;
                workspace: Resource;
                color: string;
                followers: Resource[];
            }

            interface FindAllParams extends PaginationParams {
                team?: number;
                archived?: boolean;
            }
        }

        var Tags: TagsStatic;

        /**
         * A _tag_ is a label that can be attached to any task in Asana. It exists in a
         * single workspace or organization.
         *
         * Tags have some metadata associated with them, but it is possible that we will
         * simplify them in the future so it is not encouraged to rely too heavily on it.
         * Unlike projects, tags do not provide any ordering on the tasks they
         * are associated with.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Tags extends Resource {
            /**
             * * Creates a new tag in a workspace or organization.
             * *
             * * Every tag is required to be created in a specific workspace or
             * * organization, and this cannot be changed once set. Note that you can use
             * * the `workspace` parameter regardless of whether or not it is an
             * * organization.
             * *
             * * Returns the full record of the newly created tag.
             *   * @param {Object} data Data for the request
             *   * @param {String} data.workspace The workspace or organization to create the tag in.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param data
             * @param dispatchOptions?
             * @return
             */
            create(data: Tags.Type & { workspace: string }, dispatchOptions?: any): Promise<Tags.Type>;

            /**
             * * Creates a new tag in a workspace or organization.
             * *
             * * Every tag is required to be created in a specific workspace or
             * * organization, and this cannot be changed once set. Note that you can use
             * * the `workspace` parameter regardless of whether or not it is an
             * * organization.
             * *
             * * Returns the full record of the newly created tag.
             *   * @param {Number} workspace The workspace or organization to create the tag in.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param data
             * @param dispatchOptions?
             * @return
             */
            createInWorkspace(workspace: number, data: Tags.Type, dispatchOptions?: any): Promise<Tags.Type>;

            /**
             * * Returns the complete tag record for a single tag.
             *   * @param {Number} tag The tag to get.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param tag
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(tag: number, params?: Params, dispatchOptions?: any): Promise<Tags.Type>;

            /**
             * * Updates the properties of a tag. Only the fields provided in the `data`
             * * block will be updated; any unspecified fields will remain unchanged.
             * *
             * * When using this method, it is best to specify only those fields you wish
             * * to change, or else you may overwrite changes made by another user since
             * * you last retrieved the task.
             * *
             * * Returns the complete updated tag record.
             *   * @param {Number} tag The tag to update.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param tag
             * @param data
             * @param dispatchOptions?
             * @return
             */
            update(tag: number, data: Tags.Type, dispatchOptions?: any): Promise<Tags.Type>;

            /**
             * * A specific, existing tag can be deleted by making a DELETE request
             * * on the URL for that tag.
             * *
             * * Returns an empty data record.
             *   * @param {Number} tag The tag to delete.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param tag
             * @param dispatchOptions?
             * @return
             */
            delete(tag: number, dispatchOptions?: any): Promise<void>;

            /**
             * * Returns the compact tag records for some filtered set of tags.
             * * Use one or more of the parameters provided to filter the tags returned.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {String} [params.workspace] The workspace or organization to filter tags on.
             *   * @param {String} [params.team] The team to filter tags on.
             *   * @param {Boolean} [params.archived] Only return tags whose `archived` field takes on the value of
             *   * this parameter.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findAll(params?: Tags.FindAllParams, dispatchOptions?: any): Promise<ResourceList<Tags.Type>>;

            /**
             * * Returns the compact tag records for all tags in the workspace.
             *   * @param {Number} workspace The workspace or organization to find tags in.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByWorkspace(workspace: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tags.Type>>;

            /**
             * * Returns the compact task records for all tasks with the given tag.
             * * Tasks can have more than one tag at a time.
             *   * @param {Number} tag The tag to fetch tasks from.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param tag
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            getTasksWithTag(tag: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tasks.Type>>;
        }

        interface TasksStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Tasks;
        }

        namespace Tasks {
            interface Type extends Resource {
                created_at: string;
                modified_at: string;
                completed_at: string;
                completed: boolean;
                due_on: string;
                due_at: string;
                assignee_status: string;
                assignee: Resource;
                notes: string;
                workspace: Resource;
                num_hearts: number;
                hearted: boolean;
                parent: Resource;
                tags: Resource[];
                projects: Resource[];
                memberships: Membership[];
                followers: Resource[];
            }

            interface CreateParams {
                name: string;
                completed?: boolean;
                hearted?: boolean;
                notes?: string;
            }

            interface FollowersParams {
                followers: (number | string)[];
            }

            interface AddProjectParams {
                project: number;
                insertBefore?: number;
                insertAfter?: number;
                section?: number;
            }

            interface RemoveProjectParams {
                project: number;
            }

            interface TagParams {
                tag: string;
            }

            interface CommentParams {
                text: string;
            }

            interface FindAllParams extends PaginationParams {
                assignee?: number;
                workspace: number;
                completed_since?: string;
                modified_since?: string;
            }
        }

        var Tasks: TasksStatic;

        /**
         * The _task_ is the basic object around which many operations in Asana are
         * centered. In the Asana application, multiple tasks populate the middle pane
         * according to some view parameters, and the set of selected tasks determines
         * the more detailed information presented in the details pane.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Tasks extends Resource {
            /**
             * * Creating a new task is as easy as POSTing to the `/tasks` endpoint
             * * with a data block containing the fields you'd like to set on the task.
             * * Any unspecified fields will take on default values.
             * *
             * * Every task is required to be created in a specific workspace, and this
             * * workspace cannot be changed once set. The workspace need not be set
             * * explicitly if you specify a `project` or a `parent` task instead.
             *   * @param {Object} data Data for the request
             *   * @param {Number} [data.workspace] The workspace to create a task in.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param data
             * @param dispatchOptions?
             * @return
             */
            create(data: Tasks.CreateParams & { workspace: string }, dispatchOptions?: any): Promise<Tasks.Type>;

            /**
             * * Creating a new task is as easy as POSTing to the `/tasks` endpoint
             * * with a data block containing the fields you'd like to set on the task.
             * * Any unspecified fields will take on default values.
             * *
             * * Every task is required to be created in a specific workspace, and this
             * * workspace cannot be changed once set. The workspace need not be set
             * * explicitly if you specify a `project` or a `parent` task instead.
             *   * @param {Number} workspace The workspace to create a task in.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param data
             * @param dispatchOptions?
             * @return
             */
            createInWorkspace(workspace: number, data: Tasks.CreateParams, dispatchOptions?: any): Promise<Tasks.Type>;

            /**
             * * Returns the complete task record for a single task.
             *   * @param {Number} task The task to get.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param task
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(task: number, params?: Params, dispatchOptions?: any): Promise<Tasks.Type>;

            /**
             * * A specific, existing task can be updated by making a PUT request on the
             * * URL for that task. Only the fields provided in the `data` block will be
             * * updated; any unspecified fields will remain unchanged.
             * *
             * * When using this method, it is best to specify only those fields you wish
             * * to change, or else you may overwrite changes made by another user since
             * * you last retrieved the task.
             * *
             * * Returns the complete updated task record.
             *   * @param {Number} task The task to update.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            update(task: number, data: Tasks.CreateParams, dispatchOptions?: any): Promise<Tasks.Type>;

            /**
             * * A specific, existing task can be deleted by making a DELETE request on the
             * * URL for that task. Deleted tasks go into the "trash" of the user making
             * * the delete request. Tasks can be recovered from the trash within a period
             * * of 30 days; afterward they are completely removed from the system.
             * *
             * * Returns an empty data record.
             *   * @param {Number} task The task to delete.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param dispatchOptions?
             * @return
             */
            delete(task: number, dispatchOptions?: any): Promise<void>;

            /**
             * * Returns the compact task records for all tasks within the given project,
             * * ordered by their priority within the project.
             *   * @param {Number} projectId The project in which to search for tasks.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param projectId
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByProject(projectId: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tasks.Type>>;

            /**
             * * Returns the compact task records for all tasks with the given tag.
             *   * @param {Number} tag The tag in which to search for tasks.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param tag
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByTag(tag: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tasks.Type>>;

            /**
             * * Returns the compact task records for some filtered set of tasks. Use one
             * * or more of the parameters provided to filter the tasks returned.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Number} [params.assignee] The assignee to filter tasks on.
             *   * @param {Number} [params.workspace] The workspace or organization to filter tasks on.
             *   * @param {Number} [params.completed_since] Only return tasks that are either incomplete or that have been
             *   * completed since this time.
             *   * @param {Number} [params.modified_since] Only return tasks that have been modified since the given time.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findAll(params?: Tasks.FindAllParams, dispatchOptions?: any): Promise<ResourceList<Tasks.Type>>;

            /**
             * * Adds each of the specified followers to the task, if they are not already
             * * following. Returns the complete, updated record for the affected task.
             *   * @param {Number} task The task to add followers to.
             *   * @param {Object} data Data for the request
             *   * @param {Array} data.followers An array of followers to add to the task.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addFollowers(task: number, data: Tasks.FollowersParams, dispatchOptions?: any): Promise<Tasks.Type>;

            /**
             * * Removes each of the specified followers from the task if they are
             * * following. Returns the complete, updated record for the affected task.
             *   * @param {Number} task The task to remove followers from.
             *   * @param {Object} data Data for the request
             *   * @param {Array} data.followers An array of followers to remove from the task.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            removeFollowers(task: number, data: Tasks.FollowersParams, dispatchOptions?: any): Promise<Tasks.Type>;

            /**
             * * Returns a compact representation of all of the projects the task is in.
             *   * @param {Number} task The task to get projects on.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            projects(task: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Projects.Type>>;

            /**
             * * Adds the task to the specified project, in the optional location
             * * specified. If no location arguments are given, the task will be added to
             * * the beginning of the project.
             * *
             * * `addProject` can also be used to reorder a task within a project that
             * * already contains it.
             * *
             * * Returns an empty data block.
             *   * @param {Number} task The task to add to a project.
             *   * @param {Object} data Data for the request
             *   * @param {Number} data.project The project to add the task to.
             *   * @param {Number} [data.insertAfter] A task in the project to insert the task after, or `null` to
             *   * insert at the beginning of the list.
             *   * @param {Number} [data.insertBefore] A task in the project to insert the task before, or `null` to
             *   * insert at the end of the list.
             *   * @param {Number} [data.section] A section in the project to insert the task into. The task will be
             *   * inserted at the top of the section.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addProject(task: number, data: Tasks.AddProjectParams, dispatchOptions?: any): Promise<{}>;

            /**
             * * Removes the task from the specified project. The task will still exist
             * * in the system, but it will not be in the project anymore.
             * *
             * * Returns an empty data block.
             *   * @param {Number} task The task to remove from a project.
             *   * @param {Object} data Data for the request
             *   * @param {Number} data.project The project to remove the task from.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            removeProject(task: number, data: Tasks.RemoveProjectParams, dispatchOptions?: any): Promise<{}>;

            /**
             * * Returns a compact representation of all of the tags the task has.
             *   * @param {Number} task The task to get tags on.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            tags(task: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tags.Type>>;

            /**
             * * Adds a tag to a task. Returns an empty data block.
             *   * @param {Number} task The task to add a tag to.
             *   * @param {Object} data Data for the request
             *   * @param {Number} data.tag The tag to add to the task.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addTag(task: number, data: Tasks.TagParams, dispatchOptions?: any): Promise<{}>;

            /**
             * * Removes a tag from the task. Returns an empty data block.
             *   * @param {Number} task The task to remove a tag from.
             *   * @param {Object} data Data for the request
             *   * @param {String} data.tag The tag to remove from the task.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            removeTag(task: number, data: Tasks.TagParams, dispatchOptions?: any): Promise<{}>;

            /**
             * * Returns a compact representation of all of the subtasks of a task.
             *   * @param {Number} task The task to get the subtasks of.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            subtasks(task: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Tasks.Type>>;

            /**
             * * Creates a new subtask and adds it to the parent task. Returns the full record
             * * for the newly created subtask.
             *   * @param {Number} task The task to add a subtask to.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addSubtask(task: number, data: Tasks.CreateParams, dispatchOptions?: any): Promise<Tasks.Type>;

            /**
             * * Returns a compact representation of all of the stories on the task.
             *   * @param {Number} task The task containing the stories to get.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            stories(task: number, params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Stories.Type>>;

            /**
             * * Adds a comment to a task. The comment will be authored by the
             * * currently authenticated user, and timestamped when the server receives
             * * the request.
             * *
             * * Returns the full record for the new story added to the task.
             *   * @param {Number} task Globally unique identifier for the task.
             *   * @param {Object} data Data for the request
             *   * @param {String} data.text The plain text of the comment to add.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param task
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addComment(task: number, data: Tasks.CommentParams, dispatchOptions?: any): Promise<Stories.Type>;
        }

        interface TeamsStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Teams;
        }

        namespace Teams {
            interface Type extends Resource {
                organization: Resource;
            }
        }

        var Teams: TeamsStatic;

        /**
         * A _team_ is used to group related projects and people together within an
         * organization. Each project in an organization is associated with a team.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Teams extends Resource {
            /**
             * * Returns the full record for a single team.
             *   * @param {Number} team Globally unique identifier for the team.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param team
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(team: number, params?: Params, dispatchOptions?: any): Promise<Teams.Type>;

            /**
             * * Returns the compact records for all teams in the organization visible to
             * * the authorized user.
             *   * @param {Number} organization Globally unique identifier for the workspace or organization.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param organization
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByOrganization(organization: number, params?: Params, dispatchOptions?: any): Promise<SimpleResourceList>;

            /**
             * * Returns the compact records for all users that are members of the team.
             *   * @param {Number} team Globally unique identifier for the team.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param team
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            users(team: number, params?: Params, dispatchOptions?: any): Promise<SimpleResourceList>;

            /**
             * * The user making this call must be a member of the team in order to add others.
             * * The user to add must exist in the same organization as the team in order to be added.
             * * The user to add can be referenced by their globally unique user ID or their email address.
             * * Returns the full user record for the added user.
             *   * @param {Number} team Globally unique identifier for the team.
             *   * @param {Object} data Data for the request
             *   * @param {Number|String} data.user An identifier for the user. Can be one of an email address,
             *   * the globally unique identifier for the user, or the keyword `me`
             *   * to indicate the current user making the request.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param team
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addUser(team: number, data: UserParams, dispatchOptions?: any): Promise<any>;

            /**
             * * The user to remove can be referenced by their globally unique user ID or their email address.
             * * Removes the user from the specified team. Returns an empty data record.
             *   * @param {Number} team Globally unique identifier for the team.
             *   * @param {Object} data Data for the request
             *   * @param {Number|String} data.user An identifier for the user. Can be one of an email address,
             *   * the globally unique identifier for the user, or the keyword `me`
             *   * to indicate the current user making the request.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param team
             * @param data
             * @param dispatchOptions?
             * @return
             */
            removeUser(team: number, data: UserParams, dispatchOptions?: any): Promise<any>;
        }

        interface UsersStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Users;
        }

        namespace Users {
            interface FindAllParams extends PaginationParams {
                workspace: number;
            }

            interface Type extends Resource {
                email: string;
                workspaces: Resource[];
                photo: { [key: string]: string };
            }
        }

        var Users: UsersStatic;

        /**
         * A _user_ object represents an account in Asana that can be given access to
         * various workspaces, projects, and tasks.
         *
         * Like other objects in the system, users are referred to by numerical IDs.
         * However, the special string identifier `me` can be used anywhere
         * a user ID is accepted, to refer to the current authenticated user.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Users extends Resource {
            /**
             * * Returns the full user record for the currently authenticated user.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            me(params?: Params, dispatchOptions?: any): Promise<Users.Type>;

            /**
             * * Returns the full user record for the single user with the provided ID.
             *   * @param {Number|String} user An identifier for the user. Can be one of an email address,
             *   * the globally unique identifier for the user, or the keyword `me`
             *   * to indicate the current user making the request.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param user
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(user: string | number, params?: Params, dispatchOptions?: any): Promise<Users.Type>;

            /**
             * * Returns the user records for all users in the specified workspace or
             * * organization.
             *   * @param {Number} workspace The workspace in which to get users.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findByWorkspace(workspace: number, params?: Params, dispatchOptions?: any): Promise<ResourceList<Users.Type>>;

            /**
             * * Returns the user records for all users in all workspaces and organizations
             * * accessible to the authenticated user. Accepts an optional workspace ID
             * * parameter.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Number} [params.workspace] The workspace or organization to filter users on.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param params
             * @param dispatchOptions?
             * @return
             */
            findAll(params: Users.FindAllParams, dispatchOptions?: any): Promise<SimpleResourceList>;
        }

        /**
         * **Webhooks are currently in BETA - The information here may change.**
         *
         * Webhooks allow an application to be notified of changes. This is in addition
         * to the ability to fetch those changes directly as
         * [Events](/developers/api-reference/events) - in fact, Webhooks are just a way
         * to receive Events via HTTP POST at the time they occur instead of polling for
         * them. For services accessible via HTTP this is often vastly more convenient,
         * and if events are not too frequent can be significantly more efficient.
         *
         * In both cases, however, changes are represented as Event objects - refer to
         * the [Events documentation](/developers/api-reference/events) for more
         * information on what data these events contain.
         *
         * **NOTE:** While Webhooks send arrays of Event objects to their target, the
         * Event objects themselves contain *only IDs*, rather than the actual resource
         * they are referencing. So while a normal event you receive via GET /events
         * would look like this:
         *
         *     {\
         *       "resource": {\
         *         "id": 1337,\
         *         "name": "My Task"\
         *       },\
         *       "parent": null,\
         *       "created_at": "2013-08-21T18:20:37.972Z",\
         *       "user": {\
         *         "id": 1123,\
         *         "name": "Tom Bizarro"\
         *       },\
         *       "action": "changed",\
         *       "type": "task"\
         *     }
         *
         * In a Webhook payload you would instead receive this:
         *
         *     {\
         *       "resource": 1337,\
         *       "parent": null,\
         *       "created_at": "2013-08-21T18:20:37.972Z",\
         *       "user": 1123,\
         *       "action": "changed",\
         *       "type": "task"\
         *     }
         *
         * Webhooks themselves contain only the information necessary to deliver the
         * events to the desired target as they are generated.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        class Webhooks extends Resource {
            /**
             * @param dispatcher
             */
            constructor(dispatcher: Dispatcher);

            /**
             * * Establishing a webhook is a two-part process. First, a simple HTTP POST
             * * similar to any other resource creation. Since you could have multiple
             * * webhooks we recommend specifying a unique local id for each target.
             * *
             * * Next comes the confirmation handshake. When a webhook is created, we will
             * * send a test POST to the `target` with an `X-Hook-Secret` header as
             * * described in the
             * * [Resthooks Security documentation](http://resthooks.org/docs/security/).
             * * The target must respond with a `200 OK` and a matching `X-Hook-Secret`
             * * header to confirm that this webhook subscription is indeed expected.
             * *
             * * If you do not acknowledge the webhook's confirmation handshake it will
             * * fail to setup, and you will receive an error in response to your attempt
             * * to create it. This means you need to be able to receive and complete the
             * * webhook *while* the POST request is in-flight.
             *   * @param {Number} resource A resource ID to subscribe to. The resource can be a task or project.
             *   * @param {String} target The URL to receive the HTTP POST.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param resource
             * @param target
             * @param data
             * @param dispatchOptions?
             * @return
             */
            create(resource: number, target: string, data: any, dispatchOptions?: any): Promise<any>;

            /**
             * * Returns the compact representation of all webhooks your app has
             * * registered for the authenticated user in the given workspace.
             *   * @param {Number} workspace The workspace to query for webhooks in.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Number} [params.resource] Only return webhooks for the given resource.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            getAll(workspace: number, params?: any, dispatchOptions?: any): Promise<any>;

            /**
             * * Returns the full record for the given webhook.
             *   * @param {String} webhook The webhook to get.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param webhook
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            getById(webhook: string, params?: any, dispatchOptions?: any): Promise<any>;

            /**
             * * This method permanently removes a webhook. Note that it may be possible
             * * to receive a request that was already in flight after deleting the
             * * webhook, but no further requests will be issued.
             *   * @param {String} webhook The webhook to delete.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param webhook
             * @param dispatchOptions?
             * @return
             */
            deleteById(webhook: string, dispatchOptions?: any): Promise<any>;
        }

        interface WorkspacesStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Workspaces;
        }

        namespace Workspaces {
            interface ShortType extends Resource {
                id_organization?: boolean;
            }

            interface Type extends Resource {
                id_organization: boolean;
                email_domains: string[];
            }

            interface TypeaheadParams {
                type: string;
                query?: string;
                count?: number;
            }
        }

        var Workspaces: WorkspacesStatic;

        /**
         * A _workspace_ is the highest-level organizational unit in Asana. All projects
         * and tasks have an associated workspace.
         *
         * An _organization_ is a special kind of workspace that represents a company.
         * In an organization, you can group your projects into teams. You can read
         * more about how organizations work on the Asana Guide.
         * To tell if your workspace is an organization or not, check its
         * `is_organization` property.
         *
         * Over time, we intend to migrate most workspaces into organizations and to
         * release more organization-specific functionality. We may eventually deprecate
         * using workspace-based APIs for organizations. Currently, and until after
         * some reasonable grace period following any further announcements, you can
         * still reference organizations in any `workspace` parameter.
         * @class
         * @param {Dispatcher} dispatcher The API dispatcher
         */
        interface Workspaces extends Resource {
            /**
             * * Returns the full workspace record for a single workspace.
             *   * @param {Number} workspace Globally unique identifier for the workspace or organization.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The requested resource
             * @param workspace
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findById(workspace: number, params?: Params, dispatchOptions?: any): Promise<Workspaces.Type>;

            /**
             * * Returns the compact records for all workspaces visible to the authorized user.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            findAll(params?: PaginationParams, dispatchOptions?: any): Promise<ResourceList<Workspaces.ShortType>>;

            /**
             * * A specific, existing workspace can be updated by making a PUT request on
             * * the URL for that workspace. Only the fields provided in the data block
             * * will be updated; any unspecified fields will remain unchanged.
             * *
             * * Currently the only field that can be modified for a workspace is its `name`.
             * *
             * * Returns the complete, updated workspace record.
             *   * @param {Number} workspace The workspace to update.
             *   * @param {Object} data Data for the request
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param data
             * @param dispatchOptions?
             * @return
             */
            update(workspace: number, data: { name?: string }, dispatchOptions?: any): Promise<Workspaces.Type>;

            /**
             * * Retrieves objects in the workspace based on an auto-completion/typeahead
             * * search algorithm. This feature is meant to provide results quickly, so do
             * * not rely on this API to provide extremely accurate search results. The
             * * result set is limited to a single page of results with a maximum size,
             * * so you won't be able to fetch large numbers of results.
             *   * @param {Number} workspace The workspace to fetch objects from.
             *   * @param {Object} [params] Parameters for the request
             *   * @param {String} params.type The type of values the typeahead should return.
             *   * Note that unlike in the names of endpoints, the types listed here are
             *   * in singular form (e.g. `task`). Using multiple types is not yet supported.
             *   * @param {String} [params.query] The string that will be used to search for relevant objects. If an
             *   * empty string is passed in, the API will currently return an empty
             *   * result set.
             *   * @param {Number} [params.count] The number of results to return. The default is `20` if this
             *   * parameter is omitted, with a minimum of `1` and a maximum of `100`.
             *   * If there are fewer results found than requested, all will be returned.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param params?
             * @param dispatchOptions?
             * @return
             */
            typeahead(workspace: number, params?: Workspaces.TypeaheadParams, dispatchOptions?: any): Promise<SimpleResourceList>;

            /**
             * * The user can be referenced by their globally unique user ID or their email address.
             * * Returns the full user record for the invited user.
             *   * @param {Number} workspace The workspace or organization to invite the user to.
             *   * @param {Object} data Data for the request
             *   * @param {Number|String} data.user An identifier for the user. Can be one of an email address,
             *   * the globally unique identifier for the user, or the keyword `me`
             *   * to indicate the current user making the request.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param data
             * @param dispatchOptions?
             * @return
             */
            addUser(workspace: number, data: UserParams, dispatchOptions?: any): Promise<Users.Type>;

            /**
             * * The user making this call must be an admin in the workspace.
             * * Returns an empty data record.
             *   * @param {Number} workspace The workspace or organization to invite the user to.
             *   * @param {Object} data Data for the request
             *   * @param {Number|String} data.user An identifier for the user. Can be one of an email address,
             *   * the globally unique identifier for the user, or the keyword `me`
             *   * to indicate the current user making the request.
             *   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
             *   * @return {Promise} The response from the API
             * @param workspace
             * @param data
             * @param dispatchOptions?
             * @return
             */
            removeUser(workspace: number, data: UserParams, dispatchOptions?: any): Promise<any>;
        }

        interface ResourceStatic {
            /**
             * @param dispatcher
             */
            new (dispatcher: Dispatcher): Resource;

            /**
             * @type {number} Default number of items to get per page.
             */
            DEFAULT_PAGE_LIMIT: number;

            /**
             * Helper method that dispatches a GET request to the API, where the expected
             * result is a collection.
             * @param  {Dispatcher} dispatcher
             * @param  {String}     path    The path of the API
             * @param  {Object}     [query] The query params
             * @param  {Object}     [dispatchOptions] Options for handling the request and
             *     response. See `Dispatcher.dispatch`.
             * @return {Promise<SimpleResourceList>} The Collection response for the request
             * @param dispatcher
             * @param path
             * @param query?
             * @param dispatchOptions?
             */
            getCollection(dispatcher: any, path: string, query?: any, dispatchOptions?: any): Promise<any>;

            /**
             * Helper method for any request Promise from the Dispatcher, unwraps the `data`
             * value from the payload.
             * @param  {Promise} promise A promise returned from a `Dispatcher` request.
             * @return {Promise}         The `data` portion of the response payload.
             * @param promise
             * @return
             */
            unwrap(promise: any): Promise<any>;
        }

        var Resource: ResourceStatic;

        /**
         * Base class for a resource accessible via the API. Uses a `Dispatcher` to
         * access the resources.
         * @param {Dispatcher} dispatcher
         * @constructor
         */
        interface Resource {
            /**
             * Dispatches a GET request to the API, where the expected result is a
             * single resource.
             * @param  {String}     path    The path of the API
             * @param  {Object}     [query] The query params
             * @param  {Object}     [dispatchOptions] Options for handling the request and
             *     response. See `Dispatcher.dispatch`.
             * @return {Promise}            The response for the request
             * @param path
             * @param query?
             * @param dispatchOptions?
             * @return
             */
            dispatchGet(path: string, query?: any, dispatchOptions?: any): Promise<any>;

            /**
             * Dispatches a GET request to the API, where the expected result is a
             * collection.
             * @param  {String}     path    The path of the API
             * @param  {Object}     [query] The query params
             * @param  {Object}     [dispatchOptions] Options for handling the request and
             *     response. See `Dispatcher.dispatch`.
             * @return {Promise}            The response for the request
             * @param path
             * @param query?
             * @param dispatchOptions?
             * @return
             */
            dispatchGetCollection(path: string, query?: any, dispatchOptions?: any): Promise<any>;

            /**
             * Dispatches a POST request to the API, where the expected response is a
             * single resource.
             * @param  {String}     path    The path of the API
             * @param  {Object}     [query] The query params
             * @param  {Object}     [dispatchOptions] Options for handling the request and
             *     response. See `Dispatcher.dispatch`.
             * @return {Promise}            The response for the request
             * @param path
             * @param query?
             * @param dispatchOptions?
             * @return
             */
            dispatchPost(path: string, query?: any, dispatchOptions?: any): Promise<any>;

            /**
             * Dispatches a POST request to the API, where the expected response is a
             * single resource.
             * @param  {String}     path    The path of the API
             * @param  {Object}     [query] The query params
             * @param  {Object}     [dispatchOptions] Options for handling the request and
             *     response. See `Dispatcher.dispatch`.
             * @return {Promise}            The response for the request
             * @param path
             * @param query?
             * @param dispatchOptions?
             * @return
             */
            dispatchPut(path: string, query?: any, dispatchOptions?: any): Promise<any>;

            /**
             * Dispatches a DELETE request to the API. The expected response is an
             * empty resource.
             * @param  {String}     path    The path of the API
             * @param  {Object}     [dispatchOptions] Options for handling the request and
             *     response. See `Dispatcher.dispatch`.
             * @return {Promise}            The response for the request
             * @param path
             * @param dispatchOptions?
             * @return
             */
            dispatchDelete(path: string, dispatchOptions?: any): Promise<any>;
        }

        interface ResourceList<T extends Resource> {
            data: T[];
            _response: {
                data: T[];
                next_page?: NextPage;
            };
            _dispatcher: {
                authenticator: {
                    apiKey: string;
                };
                asanaBaseUrl: string;
                retryOnRateLimit: boolean;
                requestTimeout: number;
                _cachedVersionInfo: VersionInfo;
            }
        }

        type SimpleResourceList = ResourceList<Resource>;

        interface NextPage {
            offset: string;
            uri: string;
            path: string;
        }

        interface VersionInfo {
            version: string;
            language: string;
            language_version: string;
            os: string;
            os_version: string;
        }

        interface Resource {
            id: number;
            name: string;
        }

        interface PaginationParams extends Params {
            limit?: number;
            offset?: string;
        }

        interface Params {
            opt_fields?: string;
            opt_expand?: string;
        }

        interface UserParams {
            user: string | number;
        }

        interface Membership {
            project: Resource;
            section: Resource;
        }
    }

    var VERSION: string;
}

export = asana;
