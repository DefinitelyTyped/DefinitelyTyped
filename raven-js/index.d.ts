// Type definitions for Raven.js
// Project: https://github.com/getsentry/raven-js
// Definitions by: Santi Albo <https://github.com/santialbo/>, Benjamin Pannell <http://github.com/spartan563>, Gary Blackwood <http://github.com/Garee>, Rich Rout <http://github.com/richrout>, Ben Vinegar <https://github.com/benvinegar>, Ilya Pirogov <https://github.com/ilya-pirogov>, Eli White <https://github.com/TheSavior>, David Cramer <https://github.com/dcramer>, Connor Peet <https://github.com/connor4312>, comaz <https://github.com/combmag>, Luca Vazzano <https://github.com/LucaVazz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare let Raven: RavenStatic;
export default Raven;

interface RavenStatic {
    /** Raven.js version. */
    VERSION: string;

    /** A list of currently active plugins. */
    Plugins: { [id: string]: RavenPlugin };

    /**
     * Allow Raven to be configured as soon as it is loaded.
     * It uses a global RavenConfig = {dsn: '...', config: {}}
     */
    afterLoad(): void;

    /**
     * Allow multiple versions of Raven to be installed.
     * Strip Raven from the global context and returns the instance.
     */
    noConflict(): RavenStatic;

    /**
     * Configure Raven with a DSN and extra options
     *
     * @param dsn The public Sentry DSN
     * @param options Optional set of of global options
     */
    config(dsn: string, options?: RavenGlobalOptions): RavenStatic;

    /**
     * Set the DSN (can be called multiple times, unlike config)
     *
     * @param dsn The public Sentry DSN
     */
    setDSN(dsn: string): RavenStatic;

    /**
     * Installs a global window.onerror error handler to capture and report uncaught exceptions.
     * At this point, install() is required to be called due to the way TraceKit is set up.
     */
    install(): RavenStatic;

    /**
     * Adds a plugin to Raven
     */
    addPlugin(plugin: RavenPlugin, ...pluginArgs: any[]): RavenStatic;

    /**
     * Wrap code within a context so Raven can capture errors reliably across domains that is 
     * executed immediately.
     *
     * @param options A specific set of options for this context
     * @param func The callback to be immediately executed within the context
     * @param args An array of arguments to be called with the callback
     */
    context(func: Function, ...args: any[]): void;
    context(options: RavenWrapOptions, func: Function, ...args: any[]): void;

    /**
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param options A specific set of options for this context
     * @param func The function to be wrapped in a new context
     * @return The newly wrapped functions with a context
     */
    wrap(func: Function): Function;
    wrap(options: RavenWrapOptions, func: Function): Function;
    wrap<T extends Function>(func: T): T;
    wrap<T extends Function>(options: RavenWrapOptions, func: T): T;

    /**
     * Uninstalls the global error handler.
     */
    uninstall(): RavenStatic;

    /**
     * Manually capture an exception and send it over to Sentry
     *
     * @param ex An exception to be logged
     * @param options A specific set of options for this error
     */
    captureException(ex: Error, options?: RavenOptions): RavenStatic;

    /*
     * Manually send a message to Sentry
     *
     * @param msg A plain message to be captured in Sentry
     * @param options A specific set of options for this message
     */
    captureMessage(msg: string, options?: RavenOptions): RavenStatic;

    /** 
     * Add a breadcrumb
     * @param crumb The trail which should be added to the trail
     */
    captureBreadcrumb(crumb: RavenBreadcrumb): RavenStatic;

    /**
     * Set a user to be sent along with payloads.
     *
     * @param user The definition of the currently active user's unique identity
     */
    setUserContext(user: RavenUserContext): RavenStatic;

    /**
     * Clear the user context, removing the user data that would be sent to Sentry.
     */
    setUserContext(): RavenStatic;

    /** 
     * Add arbitrary data to be sent along with the payload.
     * @param extra data of an arbitrary, nested type which will be added
     */
    setExtraContext(extra: { [prop: string]: any }): RavenStatic;

    /** 
     * Add additional tags to be sent along with payloads.
     * @param tags A key/value-pair which will be added
     */
    setTagsContext(tags: { [id: string]: string }): RavenStatic;

    /** 
     * Clear the whole currently set context.
     */
    clearContext(): RavenStatic;

    /** 
     * Get a copy of the current context.
     */
    getContext(): Object;

    /** 
     * Set environment of application
     * @param environment Typically something like 'production'
     */
    setEnvironment(environment: string): RavenStatic;

    /**
     * Set release version of application
     * @param release Typically something like a git SHA to identify the current version
     */
    setRelease(release: string): RavenStatic;

    /**
     * Specify a function that can mutate the payload right before it is being sent to Sentry.
     * @param callback The function which can mutate the data
     */
    setDataCallback(callback: (data: any, orig?: string) => any): RavenStatic;

    /** 
     * Specify a callback function that can mutate or filter breadcrumbs when they are captured.
     * @param callback The function which applies the filter
     */
    setBreadcrumbCallback(callback :(data: any, orig?: string) => any): RavenStatic;

    /**
     * Specify a callback function that determines if the given message should be sent to Sentry.
     * @param callback The function which determines if the given blob should be sent
     */
    setShouldSendCallback(callback: (data: any, orig?: string) => boolean): RavenStatic;

    /**
     * Override the default HTTP data transport handler.
     * @param transport The function which will be invoked to handle the data transmission
     */
    setTransport(transport: (options: RavenTransportOptions) => void): RavenStatic;

    /**
     * Get the latest raw exception that was captured by Raven.
     */
    lastException(): Error;

    /**
     * Get the ID of the last Event captured by Raven.
     */
    lastEventId(): string;

    /** 
     * Determine if Raven is setup and ready to go.
     */
    isSetup(): boolean;

    /**
     * Show the User Feedback Dialog of Sentry
     * @param RavenReportDialogOptions Optional Options to set for the User Feedback
     */
    showReportDialog(options?: RavenReportDialogOptions): void;
}


// --- Helper Interfaces for Options --------------
export interface RavenBreadcrumOptions {
    /** Whether to collect XHR calls, defaults to true */
    xhr?: boolean;

    /** Whether to collect console logs, defaults to true */
    console?: boolean;

    /** Whether to collect dom events, defaults to true */
    dom?: boolean;

    /** Whether to record window location and navigation, defaults to true */
    location?: boolean;
}

export interface CommonRavenOptions {
    /** The environment of the application you are monitoring with Sentry */
    environment?: string;

    /** The release version of the application you are monitoring with Sentry */
    release?: string;

    /** Additional key/value-data to be tagged onto the error. */
    tags?: { [id: string]: string };

    /** Additional, arbitrary metadata to collect */
    extra?: { [prop: string]: any };

    /** The name of the logger used by Sentry. Default: javascript */
    logger?: string;

    /** set to true to get the strack trace of your message */
    stacktrace?: boolean;
}

export interface RavenOptions extends CommonRavenOptions {
    /** The name of the server or device that the client is running on */
    server_name?: string;

    /** The log level associated with this event. Default: error */
    level?: string;

    /** In some cases you may see issues where Sentry groups multiple events together when they 
     * should be separate entities. In other cases, Sentry simply doesn’t group events together 
     * because they’re so sporadic that they never look the same. */
    fingerprint?: string[];

    /** Number of frames to trim off the stacktrace. Default: 1 */
    trimHeadFrames?: number;

    /** The name of the device platform. Default: "javascript" */
    platform?: string;
}

export interface RavenGlobalOptions extends CommonRavenOptions  {
    /** The name of the server or device that the client is running on */
    serverName?: string;

    /** Configures which breadcrumbs are collected automatically */
    autoBreadcrumbs?: boolean | RavenBreadcrumOptions;

    /** Whether to collect errors on the window via TraceKit.collectWindowErrors. Default: true. */
    collectWindowErrors?: boolean;

    /** Max number of breadcrumbs to collect. Default: 100 */
    maxBreadcrumbs?: number;

    /** Exclude messages which match one of the given RegEx-Patterns from being sent to Sentry. */
    ignoreErrors?: (RegExp | string)[];

    /** Exclude messages which come from whole urls matching one of the given RegEx patterns. */
    ignoreUrls?: (RegExp | string)[];

    /** Only report messages which come from whole urls matching one of the given RegEx patterns. */
    whitelistUrls?: (RegExp | string)[];

    /** An array of RegEx patterns to indicate which urls are a part of your app. */
    includePaths?: (RegExp | string)[];

    /** Maximum amount of stack frames to collect. Default: Infinity */
    stackTraceLimit?: number;

    /** Override the default HTTP data transport handler. */
    transport?: (options: RavenTransportOptions) => void;

    /** Limit the maxium length of a message to this number of characters. Default: Infinity */
    maxMessageLength?: number;

    /** Allows you to apply your own filters to determine if the message should be sent to Sentry. */
    shouldSendCallback?: (data: any) => boolean;

    /** A function which allows mutation of the data payload right before being sent to Sentry */
    dataCallback?: (data: any) => any;
}

export interface RavenWrapOptions extends RavenOptions {
    /** Whether to run the wrap recursively. Default: false. */
    deep?: boolean;
}

export interface RavenTransportOptions {
    url: string;
    data: any;
    auth: {
        sentry_version: string;
        sentry_client: string;
        sentry_key: string;
    };
    onSuccess: () => void;
    onFailure: () => void;
}

export interface RavenReportDialogOptions {
    eventId?: number,
    dsn?: string,
    user?: {
        name?: string,
        email?: string
    }
}


// --- Helper Interfaces for complex Data Structures --------------
export interface RavenPlugin {
    (raven: RavenStatic, ...args: any[]): RavenStatic;
}

export interface RavenUserContext {
    id?: string;
    username?: string;
    email?: string;
    ip_address?: string;
    extra?: { [prop: string]: any };
}

export interface RavenBreadcrumb {
    message: string;
    data: { [id: string]: string };
    category: string;
    level: string; 
}
