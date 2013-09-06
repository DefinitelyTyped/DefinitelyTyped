// Type definitions for Raven.js
// Project: https://github.com/getsentry/raven-js
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var Raven: RavenStatic;

interface RavenOptions {

    /** The name of the logger used by Sentry. Default: javascript */
    logger?: string;

    /** List of messages to be fitlered out before being sent to Sentry. */
    ignoreErrors?: string[];

    /** Similar to ignoreErrors, but will ignore errors from whole urls patching a regex pattern. */
    ignoreUrls?: RegExp[];

    /** The inverse of ignoreUrls. Only report errors from whole urls matching a regex pattern. */
    whitelistUrls?: RegExp[];

    /** An array of regex patterns to indicate which urls are a part of your app. */
    includePaths?: RegExp[];

    /** Additional data to be tagged onto the error. */
    tags?: any;

    extra?: any;
}

interface RavenStatic {

    /** Raven.js version. */
    VERSION: string;

    /*
     * Allow Raven to be configured as soon as it is loaded
     * It uses a global RavenConfig = {dsn: '...', config: {}}
     *
     * @return undefined
     */
    afterLoad(): void;

    /*
     * Allow multiple versions of Raven to be installed.
     * Strip Raven from the global context and returns the instance.
     *
     * @return {Raven}
     */
    noConflict(): RavenStatic;

    /*
     * Configure Raven with a DSN and extra options
     *
     * @param {string} dsn The public Sentry DSN
     * @param {object} options Optional set of of global options [optional]
     * @return {Raven}
     */
    config(dsn: string, options?: RavenOptions): RavenStatic;

    /*
     * Installs a global window.onerror error handler
     * to capture and report uncaught exceptions.
     * At this point, install() is required to be called due
     * to the way TraceKit is set up.
     *
     * @return {Raven}
     */
    install(): RavenStatic;

    /*
     * Wrap code within a context so Raven can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */
    context(func: Function, ...args: any[]): void;
    context(options: RavenOptions, func: Function, ...args: any[]): void;

    /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @return {function} The newly wrapped functions with a context
     */
    wrap(func: Function): Function;
    wrap(options: RavenOptions, func: Function): Function;

    /*
     * Uninstalls the global error handler.
     *
     * @return {Raven}
     */
    uninstall(): RavenStatic;

    /*
     * Manually capture an exception and send it over to Sentry
     *
     * @param {error} ex An exception to be logged
     * @param {object} options A specific set of options for this error [optional]
     * @return {Raven}
     */
    captureException(ex: Error, options?: RavenOptions): RavenStatic;

    /*
     * Manually send a message to Sentry
     *
     * @param {string} msg A plain message to be captured in Sentry
     * @param {object} options A specific set of options for this message [optional]
     * @return {Raven}
     */
    captureMessage(msg: string, options?: RavenOptions): RavenStatic;

    /*
     * Set/clear a user to be sent along with the payload.
     *
     * @param {object} user An object representing user data [optional]
     * @return {Raven}
     */
    setUser(user?: any): RavenStatic;
}
