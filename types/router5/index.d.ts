// Type definitions for router5
// Project: https://github.com/router5/router5
// Definitions by: Sebastiaan Dammann <https://github.com/sebazzz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "router5" {
    export interface ErrorCodes {
        ROUTER_NOT_STARTED: string;
        NO_START_PATH_OR_STATE: string;
        ROUTER_ALREADY_STARTED: string;
        ROUTE_NOT_FOUND: string;
        SAME_STATES: string;
        CANNOT_DEACTIVATE: string;
        CANNOT_ACTIVATE: string;
        TRANSITION_ERR: string;
        TRANSITION_CANCELLED: string;
    }

    export interface Constants {
        UNKNOWN_ROUTE: string,
        ROUTER_START: string,
        ROUTER_STOP: string,
        TRANSITION_START: string,
        TRANSITION_CANCEL: string,
        TRANSITION_SUCCESS: string,
        TRANSITION_ERROR: string
    }

    export interface State {
        _meta?: Array<Object>;

        name: string;
        params: any;
        path: string;
    }

    export interface Router5 {
        /**
         * Add routes
         * 
         * @param routes A list of routes to add
         * @returns The router instance
         */
        add(routes: Array<IRouter5Route>): Router5;

        /**
         * Add a single route (node)
         * 
         * @param name The route name (full name)
         * @param path The route path (from parent)
         * @param canActivate The canActivate handler for this node
         */
        addNode(name: string, path: string, canActivate?: RouterActivationHandler): void;

        /**
         * Check if two states are related
         * 
         * @param parentState The parent state
         * @param childState The child state
         * @returns Whether the two states are descendants or not
         */
        areStatesDescendants(parentState: any, childState: any): Boolean;

        /**
         * Compare two route state objects
         * 
         * @param state1 The route state
         * @param state2 The other route state
         * @param ignoreQueryParams Whether to ignore query parameters or not
         * @returns Whether the two route state are equal or not
         */
        areStatesEqual(state1: any, state2: any, ignoreQueryParams?:boolean): Boolean;

        /**
         * Build a path
         * 
         * @param route The route name
         * @param params The route params
         * @returns The path
         */
        buildPath(route: string, params: Object): string;

        /**
         * Register a canActivate handler or specify a if a route can be deactivated
         * 
         * @param name The route name
         * @param canActivate The canActivate handler or boolean
         * @returns The router instance
         */
        canActivate(name: string, canActivate: RouterActivationHandler | boolean): Router5;

        /**
         * Register a canDeactivate handler or specify a if a route can be deactivated
         * 
         * @param name The route name
         * @param canDeactivate The canDeactivate handler or boolean
         * @returns The router instance
         */
        canDeactivate(name: string, canDeactivate: RouterActivationHandler | boolean): Router5;

        /**
         * Cancel the current transition if there is one
         */
        cancel(): void;

        /**
         * Remove all middleware functions
         * @returns {} 
         */
        clearMiddleware() : Router5;

        /**
         * Clone the current router configuration. The new returned router will be non-started, with a null state
         * 
         * @param deps Dependency tree
         * @returns Cloned router
         */
        clone(deps: any): Router5;

        /**
         * Forward a route to another route, when calling navigate. Route parameters for the two routes should match to avoid issues.
         * 
         * @param fromRoute The route name
         * @param toRouter The route name
         * @returns {} 
         */
        forward(fromRoute : string, toRouter : string) : void;

        /**
         * Get dependencies
         * 
         * @returns The dependencies
         */
        getDependencies():any;

        /**
         * Get router options
         */
        getOptions() : IRouter5Options;

        /**
         * Get the current router state
         * @returns The current state
         */
        getState(): State;

        /**
         * Check if a plugin has already been registered.
         * 
         * @param pluginName The plugin name
         * @returns Whether the plugin has been registered
         */
        hasPlugin(pluginName:string) : boolean;

        /**
         * Check if a route is currently active
         * 
         * @param name The route name
         * @param params The route params
         * @param strictEquality Whether to check if the given route is the active route, or part of the active route
         * @param ignoreQueryParams Whether to ignore query parameters
         * @returns Whether the given route is active
         */
        isActive(name: string, params?: Object, strictEquality?: Boolean, ignoreQueryParams?: Boolean): Boolean;

        /**
         * Check if the router is started
         * @returns Whether the router is started or not
         */
        isStarted() : boolean;

        /**
         * Build a not found state for a given path
         * 
         * @param path The unmatched path
         * @returns The not found state object
         */
        makeNotFoundState(path: string): State;

        /**
         * Build a state object
         * 
         * @param name The state name
         * @param params The state params
         * @param path The state path
         * @param metaParams Description of the state params
         * @param source The source of the routing state
         * @returns The state object
         */
        makeState(name : string, params : any, path : string, metaParams ?: any, source?:string): State;


        /**
         * Match a path
         *
         * @param path The path to match
         * @param source The source (optional, used internally)
         * @returns The matched state (null if unmatched)
         */
        matchPath(path: string, source ?: string): State | null;

        /**
         * Navigate to a route
         * 
         * @param routeName The route name
         * @param routeParams The route params
         * @param options The navigation options (`replace`, `reload`)
         * @param done A done node style callback (err, state)
         * @returns {} 
         */
        navigate(routeName: string, routeParams?: any, options ?: any, done ?: Function): Function;

        /**
         * Navigate to the default route (if defined)
         * 
         * @param opts The navigation options
         * @param done A done node style callback (err, state)
         * @returns A cancel function
         */
        navigateToDefault(opts ?: any, done?: Function) : Function;

        /**
         * Add dependencies
         * @param deps A object of dependencies (key-value pairs)
         * @returns The router instance
         */
        setDependencies(deps: any): Router5;

        /**
         * Set a router dependency
         * 
         * @param dependencyName The dependency name
         * @param dependency The dependency
         * @returns The router instance
         */
        setDependency(dependencyName: string, dependency : any): Router5;

        /**
         * Set an option
         * 
         * @param opt The option name
         * @param val The option value
         * @returns The router instance
         */
        setOption(opt: string, val: any): Router5;

        /**
         * Set the current router state
         * 
         * @param state The state object
         */
        setState(state : State) : void;

        /**
         * Start the router
         * 
         * @param startPathOrState The start path or state. This is optional when using the browser plugin.
         * @param done A done node style callback (err, state)
         * @returns The router instance
         */
        start(startPathOrState ?: string|State, done?:Function): Router5;

        /**
         * Stop the router
         * 
         * @returns The router instance
         */
        stop(): Router5;

        /**
         * Register middleware functions.
         * 
         * @param args The middleware functions
         * @returns The router instance
         */
        useMiddleware(...args: Array<Function>): Router5;

        /**
         * Use plugins
         * @param pluginFactory An argument list of plugins
         * @returns The router instance
         */
        usePlugin(pluginFactory: Function): Router5;

        /**
         * Set the root node path, use carefully. It can be used to set app-wide allowed query parameters.
         * 
         * @param rootPath The root node path
         */
        setRootPath(rootPath : string) : void;
    }

    export interface IRouter5Options {
        /* The default route: When your router instance starts, it will navigate to a default route if such route is defined and if it cannot match the URL against a known route. */
        defaultRoute?: string;

        /*  the default route params (defaults to {}) */
        defaultParams?: any;

        /*
        By default, the router is in "strict match" mode. If you want trailing slashes to be optional, you can set trailingSlash to a truthy value.
        */
        trailingSlash?: boolean;

        /*
        By default, the router will build your routes according to your route definitions. You can force or not the use of trailing slashes by setting useTrailingSlash to true or false (default to undefined); When setting this option, trailingSlash will be set to true (non strict matching).
        */
        useTrailingSlash?: boolean;

        /*
        If autoCleanUp is set to true, the router will automatically clear canDeactivate functions / booleans when their associated segment becomes inactive.
        */
        autoCleanUp?: true;

        /*
        Query parameters are optional, meaning a route can still be matched if a query parameter defined in its path is not present. However, if extra query parameters are present in the path which is being matched, matching will fail.

        If you want the router to still match routes if extra query parameters are present, set strictQueryParams to false.
        */
        strictQueryParams?: true;

        /*
        There are two ways to deal with not found routes: the first one is to configure a defaultRoute (and defaultParams), the second one is to allow those not found routes to create a new routing state. Set allowNotFound to true and the router will emit a state value for unmatched paths.
        */
        allowNotFound?: true;
    }

    /**
     * The result can be synchronous (returning a boolean) or asynchronous (returning a promise or calling done(err, result))
     */
    export type RouterActivationHandler = (tostring: State, fromState: State) => boolean | Promise<boolean>;

    export interface IRouter5Route {
        name: string;
        path: string;

        /**
         * if specified, the router will transition to the forwarded route instead. It is useful for defaulting to a child route, or having multiple paths pointing to the same route.
         */
        forwardTo?: string;

        /**
         * a method to control whether or not the route node can be activated
         */
        canActivate?: (router: Router5) => RouterActivationHandler;

        children?: Array<IRouter5Route>;
    }

    /*
        Create a router

        @param routes The routes
        @param options The router options
        @param dependencies The router dependencies
    */
    export function createRouter(routes?: Array<IRouter5Route>, options?: IRouter5Options, dependencies?: any): Router5;

    export var errorCodes: ErrorCodes;
    export var constants: Constants;
    export var loggerPlugin: () => Function;
    export var transitionPath: (toState: any, fromState: any) => any;

    export default createRouter;
}
