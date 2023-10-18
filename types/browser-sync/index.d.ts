/// <reference types="node" />
/// <reference types="serve-static" />

import * as chokidar from "chokidar";
import * as fs from "fs";
import * as http from "http";
import * as mm from "micromatch";
import { ServeStaticOptions } from "serve-static";

declare namespace browserSync {
    interface Options {
        /**
         * Browsersync includes a user-interface that is accessed via a separate port. The UI allows to controls
         * all devices, push sync updates and much more.
         *
         * port - Default: 3001
         * weinre.port - Default: 8080
         * Note: Requires at least version 2.0.0.
         */
        ui?: UIOptions | boolean | undefined;
        /**
         * Browsersync can watch your files as you work. Changes you make will either be injected into the page (CSS
         * & images) or will cause all browsers to do a full-page refresh. See anymatch for more information on glob
         * patterns.
         * Default: false
         */
        files?: string | (string | FileCallback | object)[] | undefined;
        /**
         * Specify which file events to respond to.
         * Available events: `add`, `change`, `unlink`, `addDir`, `unlinkDir`
         */
        watchEvents?: WatchEvents | string[] | undefined;
        /**
         * Watch files automatically.
         */
        watch?: boolean | undefined;
        /**
         * Patterns for any watchers to ignore.
         * Anything provided here will end up inside 'watchOptions.ignored'.
         */
        ignore?: string[] | undefined;
        /**
         * Serve an index.html file for all non-asset routes.
         * Useful when using client-routers.
         */
        single?: boolean | undefined;
        /**
         * File watching options that get passed along to Chokidar. Check their docs for available options
         * Default: undefined
         * Note: Requires at least version 2.6.0.
         */
        watchOptions?: chokidar.WatchOptions | undefined;
        /**
         * Use the built-in static server for basic HTML/JS/CSS websites.
         * Default: false
         */
        server?: string | boolean | string[] | ServerOptions | undefined;
        /**
         * Proxy an EXISTING vhost. Browsersync will wrap your vhost with a proxy URL to view your site.
         * Passing only a URL as a string equates to passing only target property of ProxyOptions type.
         * target - Default: undefined
         * ws - Default: undefined
         * middleware - Default: undefined
         * reqHeaders - Default: undefined
         * proxyRes - Default: undefined (http.ServerResponse if expecting single parameter)
         * proxyReq - Default: undefined
         */
        proxy?: string | ProxyOptions | undefined;
        /**
         * Use a specific port (instead of the one auto-detected by Browsersync)
         * Default: 3000
         */
        port?: number | undefined;
        /**
         * Functions or actual plugins used as middleware.
         */
        middleware?: MiddlewareHandler | PerRouteMiddleware | (MiddlewareHandler | PerRouteMiddleware)[] | undefined;
        /**
         * Add additional directories from which static files should be served.
         * Should only be used in proxy or snippet mode.
         * Default: []
         * Note: Requires at least version 2.8.0.
         */
        serveStatic?: StaticOptions[] | string[] | undefined;
        /**
         * Options that are passed to the serve-static middleware when you use the
         * string[] syntax: eg: `serveStatic: ['./app']`.
         * Please see [serve-static](https://github.com/expressjs/serve-static) for details.
         */
        serveStaticOptions?: ServeStaticOptions | undefined;
        /**
         * Enable https for localhost development.
         * Note: This may not be needed for proxy option as it will try to infer from your target url.
         * Note: If privacy error is encountered please see HttpsOptions below, setting those will resolve.
         * Note: Requires at least version 1.3.0.
         */
        https?: boolean | HttpsOptions | undefined;
        /**
         * Override http module to allow using 3rd party server modules (such as http2).
         */
        httpModule?: string | undefined;
        /**
         * Current working directory
         */
        cwd?: string;
        /**
         * Register callbacks via a regular option - this can be used to get access the Browsersync
         * instance in situations where you cannot provide a callback via the normal API (for example,
         * in a Gruntfile)
         *
         * This 'ready' callback can be used to access the Browsersync instance
         */
        callbacks?: CallbacksOptions;
        /**
         * Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
         * clicks - Default: true
         * scroll - Default: true
         * forms - Default: true
         */
        ghostMode?: GhostOptions | boolean | undefined;
        /**
         * Can be either "info", "debug", "warn", or "silent"
         * Default: info
         */
        logLevel?: LogLevel | undefined;
        /**
         * Change the console logging prefix. Useful if you're creating your own project based on Browsersync
         * Default: BS
         * Note: Requires at least version 1.5.1.
         */
        logPrefix?: string | undefined;
        /**
         * Whether or not to log connections
         * Default: false
         */
        logConnections?: boolean | undefined;
        /**
         * Whether or not to log information about changed files
         * Default: false
         */
        logFileChanges?: boolean | undefined;
        /**
         * Log the snippet to the console when you're in snippet mode (no proxy/server)
         * Default: true
         * Note: Requires at least version 1.5.2.
         */
        logSnippet?: boolean | undefined;
        /**
         * You can control how the snippet is injected onto each page via a custom regex + function.
         * You can also provide patterns for certain urls that should be ignored from the snippet injection.
         * Note: Requires at least version 2.0.0.
         */
        snippetOptions?: SnippetOptions | undefined;
        /**
         * Add additional HTML rewriting rules.
         * Default: false
         * Note: Requires at least version 2.4.0.
         */
        rewriteRules?: boolean | RewriteRules[] | undefined;
        /**
         * Tunnel the Browsersync server through a random Public URL
         * Default: null
         */
        tunnel?: string | boolean | undefined;
        /**
         * Some features of Browsersync (such as xip & tunnel) require an internet connection, but if you're
         * working offline, you can reduce start-up time by setting this option to false
         */
        online?: boolean | undefined;
        /**
         * Default: true
         * Decide which URL to open automatically when Browsersync starts. Defaults to "local" if none set.
         * Can be true, local, external, ui, ui-external, tunnel or false
         */
        open?: OpenOptions | boolean | undefined;
        /**
         * The browser(s) to open
         * Default: default
         */
        browser?: string | string[] | undefined;
        /**
         * Add HTTP access control (CORS) headers to assets served by Browsersync.
         * Default: false
         * Note: Requires at least version 2.16.0.
         */
        cors?: boolean | undefined;
        /**
         * Requires an internet connection - useful for services such as Typekit as it allows you to configure
         * domains such as *.xip.io in your kit settings
         * Default: false
         */
        xip?: boolean | undefined;
        /**
         * Reload each browser when Browsersync is restarted.
         * Default: false
         */
        reloadOnRestart?: boolean | undefined;
        /**
         * The small pop-over notifications in the browser are not always needed/wanted.
         * Default: true
         */
        notify?: boolean | undefined;
        /**
         * scrollProportionally: false // Sync viewports to TOP position
         * Default: true
         */
        scrollProportionally?: boolean | undefined;
        /**
         * How often to send scroll events
         * Default: 0
         */
        scrollThrottle?: number | undefined;
        /**
         * Decide which technique should be used to restore scroll position following a reload.
         * Can be window.name or cookie
         * Default: 'window.name'
         */
        scrollRestoreTechnique?: string | undefined;
        /**
         * Sync the scroll position of any element on the page. Add any amount of CSS selectors
         * Default: []
         * Note: Requires at least version 2.9.0.
         */
        scrollElements?: string[] | undefined;
        /**
         * Default: []
         * Note: Requires at least version 2.9.0.
         * Sync the scroll position of any element on the page - where any scrolled element will cause
         * all others to match scroll position. This is helpful when a breakpoint alters which element
         * is actually scrolling
         */
        scrollElementMapping?: string[] | undefined;
        /**
         * Time, in milliseconds, to wait before instructing the browser to reload/inject following a file
         * change event
         * Default: 0
         */
        reloadDelay?: number | undefined;
        /**
         * Restrict the frequency in which browser:reload events can be emitted to connected clients
         * Default: 0
         * Note: Requires at least version 2.6.0.
         */
        reloadDebounce?: number | undefined;
        /**
         * Emit only the first event during sequential time windows of a specified duration.
         * Note: Requires at least version 2.13.0.
         */
        reloadThrottle?: number | undefined;
        /**
         * User provided plugins
         * Default: []
         * Note: Requires at least version 2.6.0.
         */
        plugins?: any[] | undefined;
        /**
         * Whether to inject changes (rather than a page refresh)
         * Default: true
         */
        injectChanges?: boolean | undefined;
        /**
         * The initial path to load
         */
        startPath?: string | undefined;
        /**
         * Whether to minify the client script
         * Default: true
         */
        minify?: boolean | undefined;
        /**
         * Override host detection if you know the correct IP to use
         */
        host?: string | undefined;
        /**
         * Specify a host to listen on. Use this if you want to prevent binding to all interfaces.
         *
         * Note: When you specify this option, it overrides the 'host' option
         */
        listen?: string;
        /**
         * Support environments where dynamic hostnames are not required (ie: electron).
         */
        localOnly?: boolean | undefined;
        /**
         * Send file-change events to the browser
         * Default: true
         */
        codeSync?: boolean | undefined;
        /**
         * Append timestamps to injected files
         * Default: true
         */
        timestamps?: boolean | undefined;
        /**
         * ¯\_(ツ)_/¯
         * Best guess, when ghostMode (or SocketIO?) is setup the events
         * listed here will be emitted and able to hook into.
         */
        clientEvents?: string[] | undefined;
        /**
         * Alter the script path for complete control over where the Browsersync Javascript is served
         * from. Whatever you return from this function will be used as the script path.
         * Note: Requires at least version 1.5.0.
         */
        scriptPath?: ((path: string) => string) | undefined;
        /**
         * Configure the Socket.IO path and namespace & domain to avoid collisions.
         * path - Default: "/browser-sync/socket.io"
         * clientPath - Default: "/browser-sync"
         * namespace - Default: "/browser-sync"
         * domain - Default: undefined
         * port - Default: undefined
         * clients.heartbeatTimeout - Default: 5000
         * Note: Requires at least version 1.6.2.
         */
        socket?: SocketOptions | undefined;
        /**
         * Configure the script domain
         */
        script?: ScriptOptions | undefined;
        /**
         * ¯\_(ツ)_/¯
         */
        tagNames?: TagNamesOptions | undefined;
        /**
         * ¯\_(ツ)_/¯
         */
        injectFileTypes?: string[] | undefined;
        /**
         * ¯\_(ツ)_/¯
         */
        excludeFileTypes?: string[] | undefined;
    }

    type WatchEvents = "add" | "change" | "unlink" | "addDir" | "unlinkDir";

    type LogLevel = "info" | "debug" | "warn" | "silent";

    type OpenOptions = "local" | "external" | "ui" | "ui-external" | "tunnel";

    interface Hash<T> {
        [path: string]: T;
    }

    interface UIOptions {
        /** set the default port */
        port?: number | undefined;
        /** set the default weinre port */
        weinre?: {
            port?: number | undefined;
        } | undefined;
    }

    interface FileCallback {
        match?: string | string[] | undefined;
        fn: (event: string, file: string) => any;
        options?: chokidar.WatchOptions | undefined;
    }

    interface ServerOptions {
        /** set base directory */
        baseDir?: string | string[] | undefined;
        /** enable directory listing */
        directory?: boolean | undefined;
        /** set index filename */
        index?: string | undefined;
        /**
         * key-value object hash, where the key is the url to match,
         * and the value is the folder to serve (relative to your working directory)
         */
        routes?: Hash<string> | undefined;
        /** configure custom middleware */
        middleware?: (MiddlewareHandler | PerRouteMiddleware)[] | undefined;
        serveStaticOptions?: ServeStaticOptions | undefined;
    }

    interface ProxyOptions {
        target?: string | undefined;
        middleware?: MiddlewareHandler | undefined;
        ws?: boolean | undefined;
        reqHeaders?: ((config: object) => Hash<object>) | undefined;
        proxyRes?: ProxyResponseMiddleware | ProxyResponseMiddleware[] | undefined;
        proxyReq?: ((res: http.IncomingMessage) => void)[] | ((res: http.IncomingMessage) => void) | undefined;
        error?: ((err: NodeJS.ErrnoException, req: http.IncomingMessage, res: http.ServerResponse) => void) | undefined;
    }

    interface ProxyResponseMiddleware {
        (
            proxyRes: http.ServerResponse | http.IncomingMessage,
            res: http.ServerResponse,
            req: http.IncomingMessage,
        ): void;
    }

    interface HttpsOptions {
        key?: string | undefined;
        cert?: string | undefined;
    }

    interface StaticOptions {
        route: string | string[];
        dir: string | string[];
    }

    interface MiddlewareHandler {
        (req: http.IncomingMessage, res: http.ServerResponse, next: () => void): any;
    }

    interface PerRouteMiddleware {
        id?: string | undefined;
        route: string;
        handle: MiddlewareHandler;
    }

    interface CallbacksOptions {
        ready: (err: Error, bs: BrowserSyncInstance) => void;
    }

    interface GhostOptions {
        clicks?: boolean | undefined;
        scroll?: boolean | undefined;
        forms?: FormsOptions | boolean | undefined;
    }

    interface FormsOptions {
        inputs: boolean;
        submit: boolean;
        toggles: boolean;
    }

    interface SnippetOptions {
        async?: boolean | undefined;
        whitelist?: string[] | undefined;
        blacklist?: string[] | undefined;
        rule?: {
            match?: RegExp | undefined;
            fn?: ((snippet: string, match: string) => any) | undefined;
        } | undefined;
    }

    interface SocketOptions {
        path?: string | undefined;
        clientPath?: string | undefined;
        namespace?: string | undefined;
        domain?: string | undefined;
        port?: number | undefined;
        clients?: { heartbeatTimeout?: number | undefined } | undefined;
    }

    interface ScriptOptions {
        domain?: string | undefined;
    }

    interface TagNamesOptions {
        less?: string | undefined;
        scss?: string | undefined;
        css?: string | undefined;
        jpg?: string | undefined;
        jpeg?: string | undefined;
        png?: string | undefined;
        svg?: string | undefined;
        gif?: string | undefined;
        js?: string | undefined;
    }

    interface RewriteRules {
        match: RegExp;
        replace?: string | undefined;
        fn?: ((req: http.IncomingMessage, res: http.ServerResponse, match: string) => string) | undefined;
    }

    interface StreamOptions {
        once?: boolean | undefined;
        match?: mm.Pattern | mm.Pattern[] | undefined;
    }

    interface BrowserSyncStatic extends BrowserSyncInstance {
        /**
         * Start the Browsersync service. This will launch a server, proxy or start the snippet mode
         * depending on your use-case.
         */
        (config?: Options, callback?: (err: Error, bs: BrowserSyncInstance) => any): BrowserSyncInstance;
        /** */
        instances: Array<BrowserSyncInstance>;
        /**
         * Create a Browsersync instance
         * @param name an identifier that can used for retrieval later
         */
        create(name?: string, emitter?: NodeJS.EventEmitter): BrowserSyncInstance;
        /**
         * Get a single instance by name. This is useful if you have your build scripts in separate files
         * @param name the identifier used for retrieval
         */
        get(name: string): BrowserSyncInstance;
        /**
         * Check if an instance has been created.
         * @param name the name of the instance
         */
        has(name: string): boolean;
        /**
         * Reset the state of the module.
         * (should only be needed for test environments)
         */
        reset(): void;
    }

    interface BrowserSyncInstance {
        /** the name of this instance of browser-sync */
        name: string;
        /**
         * Start the Browsersync service. This will launch a server, proxy or start the snippet mode
         * depending on your use-case.
         */
        init(config?: Options, callback?: (err: Error, bs: BrowserSyncInstance) => any): BrowserSyncInstance;
        /**
         * This method will close any running server, stop file watching & exit the current process.
         */
        exit(): void;
        /**
         * Helper method for browser notifications
         * @param message Can be a simple message such as 'Connected' or HTML
         * @param timeout How long the message will remain in the browser. @since 1.3.0
         */
        notify(message: string, timeout?: number): void;
        /**
         * Method to pause file change events
         */
        pause(): void;
        /**
         * Method to resume paused watchers
         */
        resume(): void;
        /**
         * Reload the browser
         * The reload method will inform all browsers about changed files and will either cause the browser
         * to refresh, or inject the files where possible.
         */
        reload(): void;
        /**
         * Reload a single file
         * The reload method will inform all browsers about changed files and will either cause the browser
         * to refresh, or inject the files where possible.
         */
        reload(file: string): void;
        /**
         * Reload multiple files
         * The reload method will inform all browsers about changed files and will either cause the browser
         * to refresh, or inject the files where possible.
         */
        reload(files: string[]): void;
        /**
         * The reload method will inform all browsers about changed files and will either cause the browser
         * to refresh, or inject the files where possible.
         */
        reload(options: { stream: boolean }): NodeJS.ReadWriteStream;
        /**
         * The stream method returns a transform stream and can act once or on many files.
         * @param opts Configuration for the stream method
         */
        stream(opts?: StreamOptions): NodeJS.ReadWriteStream;
        /**
         * Instance Cleanup.
         */
        cleanup(fn?: (error: NodeJS.ErrnoException, bs: BrowserSyncInstance) => void): void;
        /**
         * Register a plugin.
         * Must implement at least a 'plugin' property that returns
         * callable function.
         *
         * @method use
         * @param {object} module The object to be `required`.
         * @param {object} options The
         * @param {any} cb A callback function that will return any errors.
         */
        use(
            module: { "plugin:name"?: string | undefined; plugin: (opts: object, bs: BrowserSyncInstance) => any },
            options?: object,
            cb?: any,
        ): void;
        /**
         * Callback helper to examine what options have been set.
         * @param {string} name The key to search options map for.
         */
        getOption(name: string): any;
        /**
         * Stand alone file-watcher. Use this along with Browsersync to create your own, minimal build system
         */
        watch(
            patterns: string,
            opts?: chokidar.WatchOptions,
            fn?: (event: string, file: fs.Stats) => any,
        ): NodeJS.EventEmitter;
        /**
         * The internal Event Emitter used by the running Browsersync instance (if there is one). You can use
         * this to emit your own events, such as changed files, logging etc.
         */
        emitter: NodeJS.EventEmitter;
        /**
         * A simple true/false flag that you can use to determine if there's a currently-running Browsersync instance.
         */
        active: boolean;
        /**
         * A simple true/false flag to determine if the current instance is paused
         */
        paused: boolean;
    }
}

declare const browserSync: browserSync.BrowserSyncStatic;
export = browserSync;
