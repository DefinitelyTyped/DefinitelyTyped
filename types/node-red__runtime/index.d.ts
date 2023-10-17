import { CorsOptions } from "cors";
import { EventEmitter } from "events";
import { Express, NextFunction, Request, Response } from "express";
import { Server as HttpsServer, ServerOptions } from "https";
import { Strategy } from "passport";

import { EditorAPIModule } from "@node-red/editor-api";
import { Hooks, I18n, Log, Util } from "@node-red/util";

declare const runtime: runtime.RuntimeModule;

export = runtime;

declare namespace runtime {
    type Permission =
        | "*"
        | "read"
        | "flows.read"
        | "flows.write"
        | "nodes.read"
        | "nodes.write"
        | "context.read"
        | "context.write";

    interface UsernamePermissions {
        username: string;
        permissions: Permission | Permission[];
    }

    interface AnonymousPermissions {
        anonymous: true;
        permissions: Permission | Permission[];
    }

    type User = UsernamePermissions | AnonymousPermissions;

    interface LocalSettings {
        /**
         * the tcp port that the Node-RED web server is listening on
         */
        uiPort: number;

        /**
         * Interfaces Node-RED UI accepts connections on
         */
        uiHost: string;

        /**
         * Retry time in milliseconds for MQTT connections
         */
        mqttReconnectTime?: number | undefined;

        /**
         * Retry time in milliseconds for Serial port connections
         */
        serialReconnectTime?: number | undefined;

        /**
         * Retry time in milliseconds for TCP socket connections
         */
        socketReconnectTime?: number | undefined;

        /**
         * Timeout in milliseconds for TCP server socket connections
         */
        socketTimeout?: number | undefined;

        /**
         * Maximum number of messages to wait in queue while attempting to connect to TCP socket
         */
        tcpMsgQueueSize?: number | undefined;

        /**
         * Timeout in milliseconds for HTTP request connections
         */
        httpRequestTimeout?: number | undefined;

        /**
         * The maximum length, in characters, of any message sent to the debug sidebar tab
         */
        debugMaxLength?: number | undefined;

        /**
         * The maximum number of messages nodes will buffer internally as part of their
         * operation. This applies across a range of nodes that operate on message sequences.
         */
        nodeMessageBufferMaxLength?: number | undefined;

        /**
         * To disable the option for using local files for storing keys and certificates in the TLS configuration
         * node, set this to true
         */
        tlsConfigDisableLocalFiles?: boolean | undefined;

        /**
         * Colourise the console output of the debug node
         */
        debugUseColors?: boolean | undefined;

        /**
         * The file containing the flows. If not set, it defaults to flows_<hostname>.json
         */
        flowFile?: string | undefined;

        /**
         * To enabled pretty-printing of the flow within the flow file, set the property to true
         */
        flowFilePretty?: boolean | undefined;

        /**
         * By default, credentials are encrypted in storage using a generated key. To
         * specify your own secret, set the following property.
         * If you want to disable encryption of credentials, set this property to false.
         * Note: once you set this property, do not change it - doing so will prevent
         * node-red from being able to decrypt your existing credentials and they will be
         * lost.
         */
        credentialSecret?: string | false | undefined;

        /**
         * By default, all user data is stored in a directory called `.node-red` under
         * the user's home directory. To use a different location, the following
         * property can be used
         */
        userDir?: string | undefined;

        /**
         * Node-RED scans the `nodes` directory in the userDir to find local node files.
         * The following property can be used to specify an additional directory to scan.
         */
        nodesDir?: string | undefined;

        /**
         * By default, the Node-RED UI is available at http://localhost:1880/
         * The following property can be used to specify a different root path.
         * If set to false, this is disabled.
         */
        httpAdminRoot?: string | false | undefined;

        /**
         * Some nodes, such as HTTP In, can be used to listen for incoming http requests.
         * By default, these are served relative to '/'. The following property
         * can be used to specifiy a different root path. If set to false, this is
         * disabled.
         */
        httpNodeRoot?: string | false | undefined;

        /**
         * The following property can be used in place of 'httpAdminRoot' and 'httpNodeRoot',
         * to apply the same root to both parts.
         */
        httpRoot?: string | false | undefined;

        /**
         * When httpAdminRoot is used to move the UI to a different root path, the
         * following property is used to identify a directory of static content
         * that should be served at http://localhost:1880/.
         */
        httpStatic?: string | undefined;

        /**
         * The maximum size of HTTP request that will be accepted by the runtime api.
         */
        apiMaxLength?: string | undefined;

        /**
         * If you installed the optional node-red-dashboard, the property contains its
         * path relative to httpRoot
         */
        ui?: { path: string } | undefined;

        /**
         * For password protected Node-RED editor and admin API, the property
         * contains the auth data.
         *
         * See http://nodered.org/docs/security.html for details.
         */
        adminAuth?:
            | {
                type: "credentials";
                users: Array<{
                    username: string;
                    password: string;
                    permissions: Permission | Permission[];
                }>;
                default?:
                    | {
                        permissions: Permission | Permission[];
                    }
                    | undefined;
            }
            | {
                type: "credentials";
                users: (username: string) => Promise<UsernamePermissions | null>;
                authenticate: (username: string, password: string) => Promise<UsernamePermissions | null>;
                default: () => Promise<AnonymousPermissions | null>;
            }
            | {
                type: "strategy";
                strategy: {
                    name: string;
                    label: string;
                    icon: string;
                    strategy: Strategy;
                    options: object;
                };
                users: UsernamePermissions[];
            }
            | undefined;

        /**
         * For password protected node-defined HTTP endpoints (httpNodeRoot),
         * contains the auth data.
         *
         * The pass field is a bcrypt hash of the password.
         * See http://nodered.org/docs/security.html#generating-the-password-hash
         */
        httpNodeAuth?: { user: string; pass: string } | undefined;
        /**
         * For password protected static content (httpStatic), contains the auth data.
         *
         * The pass field is a bcrypt hash of the password.
         * See http://nodered.org/docs/security.html#generating-the-password-hash
         */
        httpStaticAuth?: { user: string; pass: string } | undefined;

        /**
         * HTTPS options
         */
        https?: ServerOptions | undefined;

        /**
         * Editor disabled.
         */
        disableEditor?: boolean | undefined;

        /**
         * The following property can be used to configure cross-origin resource sharing
         * in the HTTP nodes.
         */
        httpNodeCors?: CorsOptions | undefined;

        /**
         * The following property can be used to add a custom middleware function
         * in front of all http in nodes. This allows custom authentication to be
         * applied to all http in nodes, or any other sort of common request processing.
         */
        httpNodeMiddleware?: ((req: Request, res: Response, next: NextFunction) => void) | undefined;

        /**
         * The following property can be used to pass custom options to the Express.js
         * server used by Node-RED. For a full list of available options, refer
         * to http://expressjs.com/en/api.html#app.settings.table
         */
        httpServerOptions?: object | undefined;

        /**
         * The following property can be used to verify websocket connection attempts.
         * This allows, for example, the HTTP request headers to be checked to ensure
         * they include valid authentication information.
         */
        webSocketNodeVerifyClient?:
            | ((info: { origin: string; req: Request; secure: boolean }) => boolean)
            | ((
                info: {
                    origin: string;
                    req: Request;
                    secure: boolean;
                },
                callback: (result: boolean, code?: string, reason?: string) => void,
            ) => void)
            | undefined;

        /**
         * The following property can be used to seed Global Context with predefined
         * values. This allows extra node modules to be made available with the
         * Function node.
         * For example,
         *    functionGlobalContext: { os:require('os') }
         * can be accessed in a function block as:
         *    global.get("os")
         */
        functionGlobalContext?: object | undefined;

        /**
         * `global.keys()` returns a list of all properties set in global context.
         * This allows them to be displayed in the Context Sidebar within the editor.
         * In some circumstances it is not desirable to expose them to the editor. The
         * following property can be used to hide any property set in `functionGlobalContext`
         * from being list by `global.keys()`.
         * By default, the property is set to false to avoid accidental exposure of
         * their values. Setting this to true will cause the keys to be listed.
         */
        exportGlobalContextKeys?: boolean | undefined;

        /**
         * Context Storage
         * The following property can be used to enable context storage. The configuration
         * provided here will enable file-based context that flushes to disk every 30 seconds.
         * Refer to the documentation for further options: https://nodered.org/docs/api/context/
         */
        contextStorage?:
            | {
                [key: string]:
                    | string
                    | {
                        module: string;
                    };
            }
            | undefined;

        /**
         * The following property can be used to order the categories in the editor
         * palette. If a node's category is not in the list, the category will get
         * added to the end of the palette.
         * If not set, the following default order is used:
         * paletteCategories: ['subflows','flow','input','output','function','parser','social','mobile','storage','analysis','advanced'],
         */
        paletteCategories?: string[] | undefined;

        /**
         * Configure the logging output
         */
        logging?:
            | {
                /**
                 * Only console logging is currently supported
                 */
                console?:
                    | {
                        /**
                         * Level of logging to be recorded. Options are:
                         * fatal - only those errors which make the application unusable should be recorded
                         * error - record errors which are deemed fatal for a particular request + fatal errors
                         * warn - record problems which are non fatal + errors + fatal errors
                         * info - record information about the general running of the application + warn + error + fatal errors
                         * debug - record information which is more verbose than info + info + warn + error + fatal errors
                         * trace - record very detailed logging + debug + info + warn + error + fatal errors
                         * off - turn off all logging (doesn't affect metrics or audit)
                         */
                        level: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "off";

                        /**
                         * Whether or not to include metric events in the log output
                         */
                        metrics: boolean;

                        /**
                         * Whether or not to include audit events in the log output
                         */
                        audit: boolean;
                    }
                    | undefined;
            }
            | undefined;

        /**
         * Customising the editor
         */
        editorTheme?:
            | {
                page?:
                    | {
                        /**
                         * Page title
                         */
                        title?: string | undefined;
                        /**
                         * Absolute path to theme icon
                         */
                        favicon?: string | undefined;
                        /**
                         * Absolute path to custom css file
                         */
                        css?: string | undefined;
                        /**
                         * Absolute paths to custom script files
                         */
                        scripts?: string[] | undefined;
                    }
                    | undefined;
                header?:
                    | {
                        /**
                         * Header title
                         */
                        title?: string | undefined;
                        /**
                         * Absolute path to header image, or `null` to remove image
                         */
                        image?: string | null | undefined;
                        /**
                         * Url to make the header text/image a link to this url
                         */
                        url?: string | undefined;
                    }
                    | undefined;
                deployButton?:
                    | {
                        type: "simple";
                        /**
                         * Deploy button label
                         */
                        label: string;
                        /**
                         * Absolute path to deploy button image or `null` to remove image
                         */
                        icon: string;
                    }
                    | undefined;
                /**
                 * Hide unwanted menu items by id
                 */
                menu?:
                    | {
                        "menu-item-import-library"?: boolean | undefined;
                        "menu-item-export-library"?: boolean | undefined;
                        "menu-item-keyboard-shortcuts"?: boolean | undefined;
                        "menu-item-help"?:
                            | {
                                /** Help Link Text */
                                label: string;
                                /** Help Link URL */
                                url: string;
                            }
                            | undefined;
                    }
                    | undefined;
                /**
                 * Hide the user-menu even if adminAuth is enabled
                 */
                userMenu?: boolean | undefined;
                login?:
                    | {
                        image?: string | undefined;
                    }
                    | undefined;
                palette?:
                    | {
                        /**
                         * Enable/disable the Palette Manager
                         */
                        editable?: boolean | undefined;
                        /**
                         * Alternative palette manager catalogues
                         */
                        catalogues?: string[] | undefined;
                        /**
                         * Override node colours - rules test against category/type by RegExp.
                         */
                        theme?:
                            | Array<{
                                category: string;
                                type: string;
                                color: string;
                            }>
                            | undefined;
                    }
                    | undefined;
                projects?:
                    | {
                        /**
                         * To enable the Projects feature, set this value to true
                         */
                        enabled: boolean;
                    }
                    | undefined;
            }
            | undefined;

        verbose?: boolean | undefined;
        safeMode?: boolean | undefined;
    }

    interface PersistentSettings {
        init(settings: LocalSettings): void;
        load(storage: StorageModule): void;
        get(prop: string): any;
        set(prop: string, value: any): Promise<void>;
        delete(prop: string): Promise<void>;
        available(): boolean;
        reset(): void;
        registerNodeSettings(type: string, opts: object): void;
        exportNodeSettings(safeSettings: object): object;
        enableNodeSettings(types: string[]): void;
        disableNodeSettings(types: string[]): void;
        getUserSettings(username: string): object;
        setUserSettings(username: string, settings: object): Promise<void>;
    }

    interface CommsConnection {
        session: string;
        user: object;
        send: () => void;
    }

    interface CommsModule {
        /**
         * Registers a new comms connection
         * @param opts
         * @param opts.client - the client connection
         */
        addConnection: (opts: { client: CommsConnection }) => Promise<void>;

        /**
         * Unregisters a comms connection
         * @param opts
         * @param opts.client - the client connection
         */
        removeConnection: (opts: { client: CommsConnection }) => Promise<void>;

        /**
         * Subscribes a comms connection to a given topic. Currently, all clients get
         * automatically subscribed to everything and cannot unsubscribe. Sending a subscribe
         * request will trigger retained messages to be sent.
         * @param opts
         * @param opts.client - the client connection
         * @param opts.topic - the topic to subscribe to
         */
        subscribe: (opts: { client: CommsConnection; topic: string }) => Promise<void>;

        /**
         * Unsubscribes a comms connection from a given topic
         * @param opts
         * @param opts.client - the client connection
         * @param opts.topic - the topic to unsubscribe from
         */
        unsubscribe: (opts: { client: CommsConnection; topic: string }) => Promise<void>;
    }

    interface ContextModule {
        /**
         * Gets the info of an individual node set
         * @param opts
         * @param opts.scope - the scope of the context
         * @param opts.id - the id of the context
         * @param opts.store - the context store
         * @param opts.key - the context key
         * @param opts.req - the request to log (optional)
         */
        getValue: (opts: {
            scope: string;
            id: string;
            store: string;
            key: string;
            req?: object | undefined;
        }) => Promise<object>;

        /**
         * Gets the info of an individual node set
         * @param opts
         * @param opts.scope - the scope of the context
         * @param opts.id - the id of the context
         * @param opts.store - the context store
         * @param opts.key - the context key
         * @param opts.req - the request to log (optional)
         */
        delete: (opts: {
            scope: string;
            id: string;
            store: string;
            key: string;
            req?: object | undefined;
        }) => Promise<void>;
    }

    interface Flows {
        /** the flow revision identifier */
        rev: string;
        /** the flow configuration, an array of node configuration objects */
        flows: object[];
    }

    interface Flow {
        /** the flow identifier */
        id: string;
        /** a label for the flow */
        label: string;
        /** an array of node configuration objects */
        nodes: object[];
    }

    interface FlowsModule {
        /**
         * Gets the current flow configuration
         * @param opts
         * @param opts.req - the request to log (optional)
         */
        getFlows: (opts: { req?: object | undefined }) => Promise<Flows>;

        /**
         * Sets the current flow configuration
         * @param opts
         * @param opts.flows - the flow configuration: `{flows: [..], credentials: {}}`
         * @param opts.deploymentType - the type of deployment - "full", "nodes", "flows", "reload"
         * @param opts.req - the request to log (optional)
         */
        setFlows: (opts: {
            flows: { flows: object[]; credentials: object; req?: object | undefined };
        }) => Promise<{ rev: string }>;

        /**
         * Adds a flow configuration
         * @param opts
         * @param opts.flow - the flow to add
         * @param opts.req - the request to log (optional)
         * @returns the id of the added flow
         */
        addFlow: (opts: { flow: object; req?: object | undefined }) => Promise<string>;

        /**
         * Gets an individual flow configuration
         * @param opts
         * @param opts.id - the id of the flow to retrieve
         * @param opts.req - the request to log (optional)
         */
        getFlow: (opts: { id: string; req?: object | undefined }) => Promise<Flow>;

        /**
         * Updates an existing flow configuration
         * @param opts
         * @param opts.id - the id of the flow to update
         * @param opts.flow - the flow configuration
         * @param opts.req - the request to log (optional)
         * @returns the id of the updated flow
         */
        updateFlow: (opts: { id: string; flow: object; req?: object | undefined }) => Promise<string>;

        /**
         * Deletes a flow
         * @param opts
         * @param opts.id - the id of the flow to delete
         * @param opts.req - the request to log (optional)
         */
        deleteFlow: (opts: { id: string; req?: object | undefined }) => Promise<void>;

        /**
         * Gets the safe credentials for a node
         * @param opts
         * @param opts.type - the node type to return the credential information for
         * @param opts.id - the node id
         * @param opts.req - the request to log (optional)
         * @returns the safe credentials
         */
        getNodeCredentials: (opts: { type: string; id: string; req?: object | undefined }) => Promise<object>;
    }

    interface LibraryModule {
        /**
         * Gets an entry from the library.
         * @param opts
         * @param opts.library - the library
         * @param opts.type - the type of entry
         * @param opts.path - the path of the entry
         * @param opts.req - the request to log (optional)
         */
        getEntry: (opts: {
            library: string;
            type: string;
            path: string;
            req?: object | undefined;
        }) => Promise<string | object>;

        /**
         * Saves an entry to the library
         * @param opts
         * @param opts.library - the library
         * @param opts.type - the type of entry
         * @param opts.path - the path of the entry
         * @param opts.meta - any meta data associated with the entry
         * @param opts.body - the body of the entry
         * @param opts.req - the request to log (optional)
         */
        saveEntry: (opts: {
            library: string;
            type: string;
            path: string;
            meta: object;
            body: string;
            req?: object | undefined;
        }) => Promise<void>;
    }

    interface NodesModule {
        /**
         * Gets the info of an individual node set
         * @param opts
         * @param opts.id - the id of the node set to return
         * @param opts.req - the request to log (optional)
         * @returns the node information
         */
        getNodeInfo: (opts: { id: string; req?: object | undefined }) => Promise<object>;

        /**
         * Gets the list of node modules installed in the runtime
         * @param opts
         * @param opts.req - the request to log (optional)
         * @returns the list of node modules
         */
        getNodeList: (opts: { req?: object | undefined }) => Promise<object[]>;

        /**
         * Gets an individual node's html content
         * @param opts
         * @param opts.id - the id of the node set to return
         * @param opts.lang - the locale language to return
         * @param opts.req - the request to log (optional)
         * @returns - the node html content
         */
        getNodeConfig: (opts: { id: string; lang: string; req?: object | undefined }) => Promise<string>;

        /**
         * Gets all node html content
         * @param opts
         * @param opts.lang - the locale language to return
         * @param opts.req - the request to log (optional)
         * @returns the node html content
         */
        getNodeConfigs: (opts: { lang: string; req?: object | undefined }) => Promise<string>;

        /**
         * Gets the info of a node module
         * @param opts
         * @param opts.module - the id of the module to return
         * @param opts.req - the request to log (optional)
         * @returns the node module info
         */
        getModuleInfo: (opts: { module: string; req?: object | undefined }) => Promise<object>;

        /**
         * Install a new module into the runtime
         * @param opts
         * @param opts.module - the id of the module to install
         * @param opts.version - (optional) the version of the module to install
         * @param opts.url - (optional) url to install
         * @param opts.req - the request to log (optional)
         * @returns the node module info
         */
        addModule: (opts: {
            module: string;
            version?: string | undefined;
            url?: string | undefined;
            req?: object | undefined;
        }) => Promise<object>;

        /**
         * Removes a module from the runtime
         * @param opts
         * @param opts.module - the id of the module to remove
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        removeModule: (opts: { module: string; req?: object | undefined }) => Promise<void>;

        /**
         * Enables or disables a module in the runtime
         * @param opts
         * @param opts.module - the id of the module to enable or disable
         * @param opts.enabled - whether the module should be enabled or disabled
         * @param opts.req - the request to log (optional)
         * @returns the module info object
         */
        setModuleState: (opts: { module: string; enabled: boolean; req?: object | undefined }) => Promise<object>;

        /**
         * Enables or disables a n individual node-set in the runtime
         * @param opts
         * @param opts.id - the id of the node-set to enable or disable
         * @param opts.enabled - whether the module should be enabled or disabled
         * @param opts.req - the request to log (optional)
         * @returns the module info object
         */
        setNodeSetState: (opts: { id: string; enabled: boolean; req?: object | undefined }) => Promise<object>;

        /**
         * Gets all registered module message catalogs
         * @param opts
         * @param opts.lang - the i18n language to return. If not set, uses runtime default (en-US)
         * @param opts.req - the request to log (optional)
         * @returns the message catalogs
         */
        getModuleCatalogs: (opts: { lang: string; req?: object | undefined }) => Promise<object>;

        /**
         * Gets a modules message catalog
         * @param opts
         * @param opts.module - the module
         * @param opts.lang - the i18n language to return. If not set, uses runtime default (en-US)
         * @param opts.req - the request to log (optional)
         * @returns the message catalog
         */
        getModuleCatalog: (opts: { module: string; lang: string; req?: object | undefined }) => Promise<object>;

        /**
         * Gets the list of all icons available in the modules installed within the runtime
         * @param opts
         * @param opts.req - the request to log (optional)
         * @returns the list of all icons
         */
        getIconList: (opts: { req?: object | undefined }) => Promise<object>;

        /**
         * Gets a node icon
         * @param opts
         * @param opts.module - the id of the module requesting the icon
         * @param opts.icon - the name of the icon
         * @param opts.req - the request to log (optional)
         * @returns the icon file as a Buffer or null if no icon available
         */
        getIcon: (opts: { module: string; icon: string; req?: object | undefined }) => Promise<Buffer>;
    }

    interface ProjectUser {
        username: string;
    }

    interface ProjectsModule {
        available: () => Promise<boolean>;

        /**
         * List projects known to the runtime
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        listProjects: (opts: { user?: ProjectUser | undefined; req?: object | undefined }) => Promise<void>;

        /**
         * Create a new project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.project - the project information
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        createProject: (opts: {
            user?: ProjectUser | undefined;
            project: object;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Initialises an empty project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project to initialise
         * @param opts.project - the project information
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        initialiseProject: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            project: object;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets the active project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.req - the request to log (optional)
         * @returns the active project
         */
        getActiveProject: (opts: { user?: ProjectUser | undefined; req?: object | undefined }) => Promise<object>;
        /**
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project to activate
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        setActiveProject: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets a projects metadata
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project to get
         * @param opts.req - the request to log (optional)
         * @returns the project metadata
         */
        getProject: (opts: { user?: ProjectUser | undefined; id: string; req?: object | undefined }) => Promise<object>;
        /**
         * Updates the metadata of an existing project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project to update
         * @param opts.project - the project information
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        updateProject: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            project: object;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Deletes a project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project to update
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        deleteProject: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets current git status of a project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.remote - whether to include status of remote repos
         * @param opts.req - the request to log (optional)
         * @returns the project status
         */
        getStatus: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            remote: boolean;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Get a list of local branches
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.remote - whether to return remote branches (true) or local (false)
         * @param opts.req - the request to log (optional)
         * @returns a list of the local branches
         */
        getBranches: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            remote: boolean;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets the status of a branch
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.branch - the name of the branch
         * @param opts.req - the request to log (optional)
         * @returns the status of the branch
         */
        getBranchStatus: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            branch: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Sets the current local branch
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.branch - the name of the branch
         * @param opts.create - whether to create the branch if it doesn't exist
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        setBranch: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            branch: string;
            create: boolean;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Deletes a branch
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.branch - the name of the branch
         * @param opts.force - whether to force delete
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        deleteBranch: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            branch: string;
            force: boolean;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Commits the current staged files
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.message - the message to associate with the commit
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        commit: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            message: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets the details of a single commit
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.sha - the sha of the commit to return
         * @param opts.req - the request to log (optional)
         * @returns the commit details
         */
        getCommit: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            sha: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets the commit history of the project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.limit - limit how many to return
         * @param opts.before - id of the commit to work back from
         * @param opts.req - the request to log (optional)
         * @returns an array of commits
         */
        getCommits: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            limit: string;
            before: string;
            req?: object | undefined;
        }) => Promise<object[]>;
        /**
         * Abort an in-progress merge
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        abortMerge: (opts: { user?: ProjectUser | undefined; id: string; req?: object | undefined }) => Promise<object>;
        /**
         * Resolves a merge conflict
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.path - the path of the file being merged
         * @param opts.resolutions - how to resolve the merge conflict
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        resolveMerge: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            path: string;
            resolutions: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets a listing of the files in the project
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.req - the request to log (optional)
         * @returns the file listing
         */
        getFiles: (opts: { user?: ProjectUser | undefined; id: string; req?: object | undefined }) => Promise<object>;
        /**
         * Gets the contents of a file
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.path - the path of the file
         * @param opts.tree - the version control tree to use
         * @param opts.req - the request to log (optional)
         * @returns the content of the file
         */
        getFile: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            path: string;
            tree: string;
            req?: object | undefined;
        }) => Promise<string>;
        /**
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.path - the path of the file, or an array of paths
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        stageFile: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            path: string | string[];
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.path - the path of the file. If not set, all staged files are unstaged
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        unstageFile: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            path: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Reverts changes to a file back to its commited version
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.path - the path of the file
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        revertFile: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            path: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Get the diff of a file
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.path - the path of the file
         * @param opts.type - the type of diff
         * @param opts.req - the request to log (optional)
         * @returns the requested diff
         */
        getFileDiff: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            path: string;
            type: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets a list of the project remotes
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.req - the request to log (optional)
         * @returns a list of project remotes
         */
        getRemotes: (opts: { user?: ProjectUser | undefined; id: string; req?: object | undefined }) => Promise<object>;
        /**
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.remote - the remote metadata
         * @param opts.remote.name - the name of the remote
         * @param opts.remote.url - the url of the remote
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        addRemote: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            remote: { name: string; url: string };
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Remove a project remote
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.remote - the name of the remote
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        removeRemote: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            remote: string;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.remote - the remote metadata
         * @param opts.remote.name - the name of the remote
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        updateRemote: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            remote: { name: string };
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Pull changes from the remote
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.remote - the remote to pull
         * @param opts.track - whether to track this remote
         * @param opts.allowUnrelatedHistories -
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        pull: (opts: {
            user?: ProjectUser | undefined;
            remote: string;
            track?: boolean | undefined;
            allowUnrelatedHistories?: boolean | undefined;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Push changes to a remote
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the project
         * @param opts.remote - the name of the remote
         * @param opts.track - whether to set the remote as the upstream
         * @param opts.req - the request to log (optional)
         * @returns resolves when complete
         */
        push: (opts: {
            user?: ProjectUser | undefined;
            id: string;
            remote: string;
            track?: boolean | undefined;
            req?: object | undefined;
        }) => Promise<object>;
    }

    interface SettingsModule {
        /**
         * Gets the runtime settings object
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.req - the request to log (optional)
         * @returns the runtime settings
         */
        getRuntimeSettings: (opts: { user?: User | undefined; req?: object | undefined }) => Promise<object>;
        /**
         * Gets an individual user's settings object
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.req - the request to log (optional)
         * @returns the user settings
         */
        getUserSettings: (opts: { user?: User | undefined; req?: object | undefined }) => Promise<object>;
        /**
         * Updates an individual user's settings object.
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.settings - the updates to the user settings
         * @param opts.req - the request to log (optional)
         * @returns the user settings
         */
        updateUserSettings: (opts: {
            user?: User | undefined;
            settings: object;
            req?: object | undefined;
        }) => Promise<object>;
        /**
         * Gets a list of a user's ssh keys
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.req - the request to log (optional)
         * @returns the user's ssh keys
         */
        getUserKeys: (opts: { user?: User | undefined; req?: object | undefined }) => Promise<object>;
        /**
         * Gets a user's ssh public key
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the key to return
         * @param opts.req - the request to log (optional)
         * @returns the user's ssh public key
         */
        getUserKey: (opts: { user?: User | undefined; id: string; req?: object | undefined }) => Promise<string>;
        /**
         * Generates a new ssh key pair
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.name - the id of the key to return
         * @param opts.password - (optional) the password for the key pair
         * @param opts.comment - (option) a comment to associate with the key pair
         * @param opts.size - (optional) the size of the key. Default: 2048
         * @param opts.req - the request to log (optional)
         * @returns the id of the generated key
         */
        generateUserKey: (opts: {
            user?: User | undefined;
            name: string;
            password?: string | undefined;
            comment?: string | undefined;
            size?: number | undefined;
            req?: object | undefined;
        }) => Promise<string>;
        /**
         * Deletes a user's ssh key pair
         * @param opts
         * @param opts.user - the user calling the api
         * @param opts.id - the id of the key to delete
         * @param opts.req - the request to log (optional)
         * @returns resolves when deleted
         */
        removeUserKey: (opts: { user?: User | undefined; id: string; req?: object | undefined }) => Promise<void>;
    }

    interface StorageModule {
        init(runtime: InternalRuntimeAPI): void;
        getFlows(): Promise<{
            flows: object[];
            credentials: object;
            rev: string;
        }>;
        saveFlows(config: {
            flows: object[];
            credentials: object;
            credentialsDirty?: boolean | undefined;
        }): Promise<void>;
        saveCredentials(credentials: object): Promise<void>;
        getSettings(): Promise<object | null>;
        saveSettings(settings: object): Promise<void>;
        getSessions(): Promise<object | null>;
        saveSessions(sessions: object): Promise<void>;
        getLibraryEntry(type: string, path: string): Promise<string | string[]>;
        saveLibraryEntry(type: string, path: string, meta: Record<string, string>, body: string): Promise<void>;
    }

    interface InternalNodesModule {} // tslint:disable-line:no-empty-interface
    interface InternalPluginsModule {} // tslint:disable-line:no-empty-interface
    interface InternalLibraryModule {} // tslint:disable-line:no-empty-interface
    interface InternalExecModule {} // tslint:disable-line:no-empty-interface

    interface InternalRuntimeAPI {
        version(): string;
        readonly log: Log;
        readonly i18n: I18n;
        settings: PersistentSettings;
        storage: StorageModule;
        events: EventEmitter;
        nodes: InternalNodesModule;
        plugins: InternalPluginsModule;
        library: InternalLibraryModule;
        exec: InternalExecModule;
        util: Util;
        readonly adminApi: object;
        readonly adminApp: Express;
        readonly nodeApp: Express;
        readonly server: HttpsServer;
        isStarted(): boolean;
    }

    interface RuntimeModule {
        /**
         * Initialise the runtime module.
         * @param settings - the runtime settings object
         * @param server - the http server instance for the server to use
         * @param adminApi - an instance of @node-red/editor-api
         */
        init: (userSettings: LocalSettings, httpServer: HttpsServer, _adminApi: EditorAPIModule) => void;

        /**
         * Start the runtime. Resolves when the runtime is started. This does not
         *   mean the flows will be running as they are started asynchronously.
         */
        start: () => Promise<void>;

        /**
         * Stops the runtime. Resolves when the runtime is stopped.
         */
        stop: () => Promise<void>;

        comms: CommsModule;
        flows: FlowsModule;
        library: LibraryModule;
        nodes: NodesModule;
        settings: SettingsModule;
        projects: ProjectsModule;
        context: ContextModule;
        hooks: Hooks;

        /**
         * Returns whether the runtime is started
         */
        isStarted: () => Promise<boolean>;

        /**
         * Returns version number of the runtime
         */
        version: () => Promise<string>;

        storage: StorageModule;
        events: EventEmitter;
        util: Util;

        readonly httpNode: Express;
        readonly httpAdmin: Express;
        readonly server: HttpsServer;

        _: InternalRuntimeAPI;
    }
}
