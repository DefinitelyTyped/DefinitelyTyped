/*
require-2.1.8.d.ts may be freely distributed under the MIT license.

Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/require.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

declare module "module" {
    var mod: {
        config: () => any;
        id: string;
        uri: string;
    };
    export = mod;
}

interface RequireError extends Error {
    /**
     * The error ID that maps to an ID on a web page.
     */
    requireType: string;

    /**
     * Required modules.
     */
    requireModules: string[] | null;

    /**
     * The original error, if there is one (might be null).
     */
    originalError: Error;
}

interface RequireShim {
    /**
     * List of dependencies.
     */
    deps?: string[] | undefined;

    /**
     * Name the module will be exported as.
     */
    exports?: string | undefined;

    /**
     * Initialize function with all dependcies passed in,
     * if the function returns a value then that value is used
     * as the module export value instead of the object
     * found via the 'exports' string.
     * @param dependencies
     * @return
     */
    init?: ((...dependencies: any[]) => any) | undefined;
}

interface RequireConfig {
    /**
     * The root path to use for all module lookups.
     */
    baseUrl?: string | undefined;

    /**
     * Path mappings for module names not found directly under
     * baseUrl.
     */
    paths?: { [key: string]: any } | undefined;

    /**
     * Dictionary of Shim's.
     * Can be of type RequireShim or string[] of dependencies
     */
    shim?: { [key: string]: RequireShim | string[] } | undefined;

    /**
     * For the given module prefix, instead of loading the
     * module with the given ID, substitude a different
     * module ID.
     *
     * @example
     * requirejs.config({
     *    map: {
     *        'some/newmodule': {
     *            'foo': 'foo1.2'
     *        },
     *        'some/oldmodule': {
     *            'foo': 'foo1.0'
     *        }
     *    }
     * });
     */
    map?: {
        [id: string]: {
            [id: string]: string;
        };
    } | undefined;

    /**
     * Allows pointing multiple module IDs to a module ID that contains a bundle of modules.
     *
     * @example
     * requirejs.config({
     *    bundles: {
     *        'primary': ['main', 'util', 'text', 'text!template.html'],
     *        'secondary': ['text!secondary.html']
     *    }
     * });
     */
    bundles?: { [key: string]: string[] } | undefined;

    /**
     * AMD configurations, use module.config() to access in
     * define() functions
     */
    config?: { [id: string]: {} } | undefined;

    /**
     * Configures loading modules from CommonJS packages.
     */
    packages?: {} | undefined;

    /**
     * The number of seconds to wait before giving up on loading
     * a script.  The default is 7 seconds.
     */
    waitSeconds?: number | undefined;

    /**
     * A name to give to a loading context.  This allows require.js
     * to load multiple versions of modules in a page, as long as
     * each top-level require call specifies a unique context string.
     */
    context?: string | undefined;

    /**
     * An array of dependencies to load.
     */
    deps?: string[] | undefined;

    /**
     * A function to pass to require that should be require after
     * deps have been loaded.
     * @param modules
     */
    callback?: ((...modules: any[]) => void) | undefined;

    /**
     * If set to true, an error will be thrown if a script loads
     * that does not call define() or have shim exports string
     * value that can be checked.
     */
    enforceDefine?: boolean | undefined;

    /**
     * If set to true, document.createElementNS() will be used
     * to create script elements.
     */
    xhtml?: boolean | undefined;

    /**
     * Extra query string arguments appended to URLs that RequireJS
     * uses to fetch resources.  Most useful to cache bust when
     * the browser or server is not configured correctly.
     *
     * As of RequireJS 2.2.0, urlArgs can be a function. If a
     * function, it will receive the module ID and the URL as
     * parameters, and it should return a string that will be added
     * to the end of the URL. Return an empty string if no args.
     * Be sure to take care of adding the '?' or '&' depending on
     * the existing state of the URL.
     *
     * @example
     *
     * urlArgs: "bust=" + (new Date()).getTime()
     *
     * @example
     *
     * requirejs.config({
     *     urlArgs: function(id, url) {
     *         var args = 'v=1';
     *        if (url.indexOf('view.html') !== -1) {
     *             args = 'v=2'
     *         }
     *
     *        return (url.indexOf('?') === -1 ? '?' : '&') + args;
     *     }
     * });
     */
    urlArgs?: string | ((id: string, url: string) => string) | undefined;

    /**
     * Specify the value for the type="" attribute used for script
     * tags inserted into the document by RequireJS.  Default is
     * "text/javascript".  To use Firefox's JavasScript 1.8
     * features, use "text/javascript;version=1.8".
     */
    scriptType?: string | undefined;

    /**
     * If set to true, skips the data-main attribute scanning done
     * to start module loading. Useful if RequireJS is embedded in
     * a utility library that may interact with other RequireJS
     * library on the page, and the embedded version should not do
     * data-main loading.
     */
    skipDataMain?: boolean | undefined;

    /**
     * Allow extending requirejs to support Subresource Integrity
     * (SRI).
     */
    onNodeCreated?:
        | ((node: HTMLScriptElement, config: RequireConfig, moduleName: string, url: string) => void)
        | undefined;
}

// todo: not sure what to do with this guy
interface RequireModule {
    /** */
    config(): {};
}

/** */
interface RequireMap {
    /** */
    prefix: string;

    /** */
    name: string;

    /** */
    parentMap: RequireMap;

    /** */
    url: string;

    /** */
    originalName: string;

    /** */
    fullName: string;
}

interface Require {
    /**
     * Configure require.js
     */
    config(config: RequireConfig): Require;

    /**
     * CommonJS require call
     * @param module Module to load
     * @return The loaded module
     */
    (module: string): any;

    /**
     * Start the main app logic.
     * Callback is optional.
     * Can alternatively use deps and callback.
     * @param modules Required modules to load.
     */
    (modules: string[]): void;

    /**
     * @see Require()
     * @param ready Called when required modules are ready.
     */
    (modules: string[], ready: Function): void;

    /**
     * @see http://requirejs.org/docs/api.html#errbacks
     * @param ready Called when required modules are ready.
     */
    (modules: string[], ready: Function, errback: Function): void;

    /**
     * Generate URLs from require module
     * @param module Module to URL
     * @return URL string
     */
    toUrl(module: string): string;

    /**
     * Returns true if the module has already been loaded and defined.
     * @param module Module to check
     */
    defined(module: string): boolean;

    /**
     * Returns true if the module has already been requested or is in the process of loading and should be available at some point.
     * @param module Module to check
     */
    specified(module: string): boolean;

    /**
     * On Error override
     * @param err
     */
    onError(err: RequireError, errback?: (err: RequireError) => void): void;

    /**
     * Undefine a module
     * @param module Module to undefine.
     */
    undef(module: string): void;

    /**
     * Semi-private function, overload in special instance of undef()
     */
    onResourceLoad(context: Object, map: RequireMap, depArray: RequireMap[]): void;
}

interface RequireDefine {
    /**
     * Define Simple Name/Value Pairs
     * @param config Dictionary of Named/Value pairs for the config.
     */
    (config: { [key: string]: any }): void;

    /**
     * Define function.
     * @param func: The function module.
     */
    (func: () => any): void;

    /**
     * Define function with dependencies.
     * @param deps List of dependencies module IDs.
     * @param ready Callback function when the dependencies are loaded.
     *    callback param deps module dependencies
     *    callback return module definition
     */
    (deps: string[], ready: Function): void;

    /**
     *  Define module with simplified CommonJS wrapper.
     * @param ready
     *    callback require requirejs instance
     *    callback exports exports object
     *    callback module module
     *    callback return module definition
     */
    (ready: (require: Require, exports: { [key: string]: any }, module: RequireModule) => any): void;

    /**
     * Define a module with a name and dependencies.
     * @param name The name of the module.
     * @param deps List of dependencies module IDs.
     * @param ready Callback function when the dependencies are loaded.
     *    callback deps module dependencies
     *    callback return module definition
     */
    (name: string, deps: string[], ready: Function): void;

    /**
     * Define a module with a name.
     * @param name The name of the module.
     * @param ready Callback function when the dependencies are loaded.
     *    callback return module definition
     */
    (name: string, ready: Function): void;

    /**
     * Used to allow a clear indicator that a global define function (as needed for script src browser loading) conforms
     * to the AMD API, any global define function SHOULD have a property called "amd" whose value is an object.
     * This helps avoid conflict with any other existing JavaScript code that could have defined a define() function
     * that does not conform to the AMD API.
     * define.amd.jQuery is specific to jQuery and indicates that the loader is able to account for multiple version
     * of jQuery being loaded simultaneously.
     */
    amd: Object;
}

// Ambient declarations for 'require' and 'define'
declare var requirejs: Require;
declare var require: Require;
declare var define: RequireDefine;
