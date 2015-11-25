// Type definitions for Fluxible Router 0.3.0
// Project: https://github.com/yahoo/fluxible-router
// Definitions by: Umidbek Karimov <https://github.com/umidbek.karimov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>
/// <reference path="../fluxible/fluxible.d.ts"/>
/// <reference path="../immutable/immutable.d.ts"/>

declare module "fluxible-router" {
    interface INavLinkComponentContext {
        executeAction: Function;
        getStore: Function;
    }

    interface INavLinkComponentProps {
        href: string;
        stopPropagation: boolean;
        routeName: string;
        navParams: Object;
        followLink: boolean;
        preserveScrollPosition: boolean;
        replaceState: boolean;
    }

    interface IRoute {
        name: string;
        url: string;
        params: Object;
        config: IRouteConfig;
        navigate: IRouteNavigate;
    }

    interface IRouteConfig {
        path: string;
    }

    interface IRouteNavigate {
        type: string;
        params: Object;
    }

    /**
     * @class Route
     * @param {String} name  The name of the route
     * @param {Object} config  The configuration for this route.
     * @param {String} config.path  The path of the route.
     * @constructor
     */
    class Route {
        constructor(name:string, config:IRouteConfig);

        /**
         * Whether the given method is accepted by this route.
         * @method acceptMethod
         * @param {String} method  The HTTP VERB string.
         * @return true if the method is accepted; false otherwise.
         * @for Route
         */
        public acceptMethod(method:string):boolean;

        /**
         * Checkes whether this route matches the given url, method (GET as default) and optional navigation related criteria.
         * @method match
         * @param {String} url   The relative url to be matched to this route.  Query strings and hash fragments
         *                       are **not** considered when performing the match.  E.g. /some_path?foo=bar#hashBaz
         *                       would match to the same route as /some_path
         * @param {Object} [options]
         * @param {String} [options.method=get] The case-insensitive HTTP method string.  Defaults to "get".
         * @param {Object} [options.navigate] The navigation info.
         * @param {Object} [options.navigate.type] The navigation type: "pageload", "click", "popstate".
         * @param {Object} [options.navigate.params] The navigation params (that are not part of the path).
         * @return {Object|null} The matched route params if path/method/navParams matches to this route; null otherwise.
         * @for Route
         */
        public match(url:string, options:{ method: string, navigate: { type: string, params: Object } }):Object;

        /**
         * Generates a path string with this route, using the specified params.
         * @method makePath
         * @param {Object} params  The route parameters to be used to create the path string
         * @return {String} The generated path string.
         * @for Route
         */
        public makePath(params:Object):string;
    }

    class Router {
        /**
         * A Router class that provides route matching and route generation functionalities.
         * @class Router
         * @param {Object} routes  Route table, which is a name to router config map.
         * @constructor
         * @example
         var Router = require("routr"),
         router,
         route;

         var router = new Router({
                view_user: {
                    path: "/user/:id",
                    method: "get",
                    foo: {
                        bar: "baz"
                    }
                }
            });

         route = router.getRoute("/user/garfield");
         if (route) {
                // this will output:
                //   - "view_user" for route.name
                //   - "/user/garfield" for route.url
                //   - {id: "garfield"} for route.params
                //   - {path: "/user/:id", method: "get", foo: { bar: "baz"}} for route.config
                console.log("[Route found]: name=", route.name, "url=", route.url, "params=", route.params, "config=", route.config);
            }
         */
        constructor(routes:Object);

        /**
         * @method getRoute
         * @param {String} url   The url to be used for route matching.  Query strings are **not** considered
         *                        when performing the match.  E.g. /some_path?foo=bar would match to the same route
         *                        as /some_path
         * @param {Object} [options]
         * @param {String} [options.method=get] The case-insensitive HTTP method string.
         * @param {Object} [options.navigate] The navigation info.
         * @param {Object} [options.navigate.type] The navigation type: "pageload", "click", "popstate".
         * @param {Object} [options.navigate.params] The navigation params (that are not part of the path).
         * @return {Object|null} The matched route info if path/method/navigate.params matches to a route; null otherwise.
         */
        public getRoute(url:string, options:{ method: string, navigate: IRouteNavigate }):IRoute;

        /**
         * Generates a path string with the route with the given name, using the specified params.
         * @method makePath
         * @param {String} name  The route name
         * @param {Object} params  The route parameters to be used to create the path string
         * @return {String} The generated path string, null if there is no route with the given name.
         */
        public makePath(name:string, params:Object):string;
    }

    /**
     * create NavLink component with custom options
     * @param {Object} overwriteSpec spec to overwrite the default spec to create NavLink
     * @returns {React.Component} NavLink component
     */
    export function createNavLinkComponent(overwriteSpec:Object):__React.Component<INavLinkComponentProps, INavLinkComponentContext>;

    /**
     * Enhances a component to handle history management based on RouteStore
     * state.
     * @param {React.Component} Component
     * @param {object} opts
     * @param {boolean} opts.checkRouteOnPageLoad=false Performs navigate on first page load
     * @param {boolean} opts.enableScroll=true Scrolls to saved scroll position in history state;
     *                  scrolls to (0, 0) if there is no scroll position saved in history state.
     * @param {function} opts.historyCreator A factory for creating the history implementation
     * @returns {React.Component}
     */
    export function handleHistory(opts?:{
        checkRouteOnPageLoad?: boolean;
        enableScroll?: boolean;
        historyCreator?: Function;
    }):ClassDecorator;

    export function handleRoute():ClassDecorator;

    export class History {
        /**
         * This only supports pushState for the browsers with native pushState support.
         * For other browsers (mainly IE8 and IE9), it will refresh the page upon pushState()
         * and replaceState().
         * @class History
         * @constructor
         * @param {Object} [options]  The options object
         * @param {Window} [options.win=window]  The window object
         */
        constructor(options:{ win: Window });

        /**
         * Add the given listener for "popstate" event (nothing happens for browsers that
         * don"t support popstate event).
         * @method on
         * @param {Function} listener
         */
        public on(listener:Function):void;
        /**
         * Remove the given listener for "popstate" event (nothing happens for browsers that
         * don"t support popstate event).
         * @method off
         * @param {Function} listener
         */
        public on(listener:Function):void;

        /**
         * @method getState
         * @return {Object|null} The state object in history
         */
        public getState():Object;

        /**
         * Gets the path string, including the pathname and search query (if it exists).
         * @method getUrl
         * @return {String} The url string that denotes current route path and query
         */
        public getUrl():string;

        /**
         * Same as HTML5 pushState API, but with old browser support
         * @method pushState
         * @param {Object} state The state object
         * @param {String} title The title string
         * @param {String} url The new url
         */
        public pushState(state:Object, title:string, url:string):string;

        /**
         * Same as HTML5 replaceState API, but with old browser support
         * @method replaceState
         * @param {Object} state The state object
         * @param {String} title The title string
         * @param {String} url The new url
         */
        public replaceState(state:Object, title:string, url:string):string;

        /**
         * Sets document title. No-op if title is empty.
         * @param {String} title  The title string.
         */
        public setTitle(title:string):string;
    }

    interface INavigateActionPayload {
        url: string;
    }

    export interface INavigateAction extends fluxible.IPromiseAction<INavigateActionPayload, any> {
    }

    export var navigateAction:INavigateAction;

    export class NavLink extends __React.Component<INavLinkComponentProps, INavLinkComponentContext> {
    }

    export class RouteStore extends __Dispatchr.Store {
        public static withStaticRoutes(staticRoutes:Object):RouteStore;

        public makePath(routerName:string, params:Object):string;

        public getCurrentRoute():Immutable.Map<string, any>;

        public getCurrentNavigate():Object;

        public getCurrentNavigateError():{ statusCode: number, message: string };

        public isNavigateComplete():boolean;

        public getRoutes():Object;

        public getRouter():Router;

        public isActive(href:string):boolean;

        protected dehydrate():Object;

        protected rehydrate(state:Object):void;
    }
}
