// Type definitions for page v1.8.6
// Project: http://visionmedia.github.io/page.js/
// Definitions by: Alan Norbauer <http://alan.norbauer.com/>
//                 James Garbutt <https://github.com/43081j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace PageJS {
    interface Static {
        /**
         * Expose Route
         * @type {Route}
         */
        Route: Route
        /**
         * Export Context
         * @type {Context}
         */
        Context: Context
        /**
         *  Defines a route mapping path to the given callback(s).
         *
         *      page('/', user.list)
         *      page('/user/:id', user.load, user.show)
         *      page('/user/:id/edit', user.load, user.edit)
         *      page('*', notfound)
         *
         *  Links that are not of the same origin are disregarded and will not be dispatched.
         */
        (path: string, ...callbacks: Callback[]): void;
        /**
         *  Defines a route mapping path to the given callback(s).
         *
         *      page('/', user.list)
         *      page('/user/:id', user.load, user.show)
         *      page('/user/:id/edit', user.load, user.edit)
         *      page('*', notfound)
         *
         *  Links that are not of the same origin are disregarded and will not be dispatched.
         */
        (path: RegExp, ...callbacks: Callback[]): void;
        /**
         * This is equivalent to page('*', callback) for generic "middleware".
         */
        (callback: Callback): void;
        /**
         *  Navigate to the given path.
         *
         *      $('.view').click(function(e){
         *        page('/user/12')
         *        e.preventDefault()
         *      })
         */
        (path: string): void;
        /**
         * Setup redirect form one path to other.
         */
        (fromPath: string, toPath: string): void;
        /**
         * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
         *
         *     - click bind to click events [true]
         *     - popstate bind to popstate[true]
         *     - dispatch perform initial dispatch[true]
         *     - hashbang add #!before urls[false]
         *
         * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
         */
        (options: Partial<Options>): void;
        /**
         * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
         *
         *     - click bind to click events [true]
         *     - popstate bind to popstate[true]
         *     - dispatch perform initial dispatch[true]
         *     - hashbang add #!before urls[false]
         *
         * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
         */
        (): void;

        /**
         * Identical to page(fromPath, toPath)
         */
        redirect(fromPath: string, toPath: string): void;
        /**
         *  Calling page.redirect with only a string as the first parameter redirects to another route. Waits for the current route to push state and after replaces it with the new one leaving the browser history clean.
         *
         *      page('/default', function(){
         *        // some logic to decide which route to redirect to
         *        if(admin) {
         *          page.redirect('/admin');
         *        } else {
         *          page.redirect('/guest');
         *        }
         *      });
         *
         *      page('/default');
         *
         */
        redirect(page: string): void;
        /**
         * Replace `path` with optional `state` object.
         *
         */
        replace(path: string, state?: any, init?: boolean, dispatch?: boolean): Context;
        /**
         *  Navigate to the given path.
         *
         *      $('.view').click(function(e){
         *        page('/user/12')
         *        e.preventDefault()
         *      })
         *
         * Identical to page(path).
         */
        show(path: string): void;
        /**
         * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
         *
         *     - click bind to click events [true]
         *     - popstate bind to popstate[true]
         *     - dispatch perform initial dispatch[true]
         *     - hashbang add #!before urls[false]
         *
         * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
         *
         * Identical to page([options]).
         */
        start(options: Partial<Options>): void;
        /**
         * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
         *
         *     - click bind to click events [true]
         *     - popstate bind to popstate[true]
         *     - dispatch perform initial dispatch[true]
         *     - hashbang add #!before urls[false]
         *
         * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
         */
        start(): void;
        /**
         * Unbind both the popstate and click handlers.
         */
        stop(): void;
        /**
         * Get or set the base path. For example if page.js is operating within /blog/* set the base path to "/blog".
         */
        base(path?: string): void;
        /**
         * Defines an exit route mapping path to the given callback(s).
         *
         * Exit routes are called when a page changes, using the context from the previous change. For example:
         *
         *     page('/sidebar', function(ctx, next) {
         *       sidebar.open = true
         *       next()
         *     })
         *
         *     page.exit('/sidebar', function(next) {
         *       sidebar.open = false
         *       next()
         *     })
         */
        exit(path: string, callback: Callback, moreCallbacks?: Callback[]): void;
        /**
         * Equivalent to page.exit('*', callback).
         */
        exit(callback: Callback): void;
    }

    interface Route {
        /**
         * Initialize `Route` with the given HTTP `path` & `options`
         * @param {string}  path    path
         * @param {Options} options Options
         */
        new (path: string, options?: RouteOptions): Route
        /**
         * Return route middleware with the given callback `fn()`.
         * @param {Callback} callback Callback
         */
        middleware(fn: Callback): Callback
        /**
         * Check if this route matches `path`, if so populate `params`.
         * @param  {string}  path   path
         * @param  {{}}    params params
         * @return {boolean}       true if matched, false otherwise
         */
        match(path: string, params?: {}): boolean
    }

    interface RouteOptions {
        /**
         * enable case-sensitive routes
         * @type {[type]}
         */
        sensitive?: boolean
        /**
         * enable strict matching for trailing slashes
         * @type {[type]}
         */
        strict?: boolean
    }

    interface Options {
        /**
         * bind to click events (default = true)
         */
        click: boolean;
        /**
         * bind to popstate (default = true)
         */
        popstate: boolean;
        /**
         * perform initial dispatch (default = true)
         */
        dispatch: boolean;
        /**
         * add #!before urls (default = false)
         */
        hashbang: boolean;
        /**
         * remove URL encoding frfrom path components
         */
        decodeURLComponents: boolean;
    }

    interface Callback {
        (ctx: Context, next: () => any): any;
    }

    /**
     * Routes are passed Context objects, these may be used to share state, for example ctx.user =, as well as the history "state" ctx.state that the pushState API provides.
     */
    interface Context {
        /**
         * Initialize a new "request" `Context` with the given `path` and optional initial `state`.
         * @param {string} path  path
         * @param {any}    state state
         */
        new (path: string, state?: any): Context
        [idx: string]: any;
        /**
         * Saves the context using replaceState(). For example this is useful for caching HTML or other resources that were loaded for when a user presses "back".
         */
        save: () => void;
        /**
         * Push state
         */
        pushState: () => void
        /**
         *  If true, marks the context as handled to prevent default 404 behaviour. For example this is useful for the routes with interminate quantity of the callbacks.
         */
        handled: boolean;
        /**
         *  Pathname including the "base" (if any) and query string "/admin/login?foo=bar".
         */
        canonicalPath: string;
        /**
         *  Pathname and query string "/login?foo=bar".
         */
        path: string;
        /**
         *  Query string void of leading ? such as "foo=bar", defaults to "".
         */
        querystring: string;
        /**
         *  The pathname void of query string "/login".
         */
        pathname: string;
        /**
         *  The pushState state object.
         */
        state: any;
        /**
         * The pushState title.
         */
        title: string;
        /**
         * The parameters from the url, e.g. /user/:id => Context.params.id
         */
        params: any;
    }
}

declare module "page" {
    const page: PageJS.Static;
    export default page;
}

declare var page: PageJS.Static;
