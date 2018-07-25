// Type definitions for raygun4js 2.6.0
// Project: https://github.com/MindscapeHQ/raygun4js
// Definitions by: Brian Surowiec <https://github.com/xt0rted>, Benjamin Harding <https://github.com/BenjaminHarding>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TracekitStackTrace {
    message: string;
    mode: string;
    name: string;
    stack: TracekitStack[];
    url: string;
    useragent: string;
}

interface TracekitStack {
    column: number;
    context: any;
    func: string;
    line: number;
    url: string;
}


interface RaygunStackTrace {
    LineNumber: number;
    ColumnNumber: number;
    ClassName: string;
    FileName: string;
    MethodName: string;
}

interface RaygunOptions {
    /**
     * Posts error payloads over HTTP. This allows IE8 to send JS errors.
     */
    allowInsecureSubmissions?: boolean;

    /**
     * User-aborted Ajax calls result in errors. If this option is true, these errors will not be sent.
     */
    ignoreAjaxAbort?: boolean;

    /**
     * Ajax requests that return error codes will not be sent as errors to Raygun if this options is true.
     */
    ignoreAjaxError?: boolean;

    /**
     * Disabling anonymous user tracking.
     */
    disableAnonymousUserTracking?: boolean;

    /**
     * Prevent uncaught errors from being sent.
     */
    disableErrorTracking?: boolean;

    /**
     * Prevent Pulse real user monitoring events from being sent.
     */
    disablePulse?: boolean;

    /**
     * Prevents errors from being sent from certain hostnames (domains) by providing an array of strings or RegExp objects (for partial matches). Each should match the hostname or TLD that you want to exclude. Note that protocols are not tested.
     */
    excludedHostnames?: (string|RegExp)[];

    /**
     * Prevents errors from being sent from certain user agents by providing an array of strings. This is very helpful to exclude errors reported by certain browsers or test automation with CasperJS, PhantomJS or any other testing utility that sends a custom user agent. If a part of the client's navigator.userAgent matches one of the given strings in the array, then the client will be excluded from error reporting.
     */
    excludedUserAgents?: (string|RegExp)[];

    /**
     * The maximum time a virtual page can be considered viewed, in milliseconds (defaults to 30 minutes).
     */
    pulseMaxVirtualPageDuration?: number;

    /**
     * Ignore URL casing when sending data to Pulse.
     */
    pulseIgnoreUrlCasing?: boolean;

    /**
     * A string URI containing the protocol, domain and port (optional) where all payloads will be sent to. This can be used to proxy payloads to the Raygun API through your own server. When not set this defaults internally to the Raygun API, and for most usages you won't need to set this.
     */
    apiUrl?: string;

    /**
     * If false, async callback functions triggered by setTimeout/setInterval will not be wrapped when attach() is called. Defaults to true
     */
    wrapAsynchronousCallbacks?: boolean;

    /**
     * Raygun4JS will log to the console when sending errors.
     */
    debugMode?: boolean;

    /**
     * Ignores any errors that have no stack trace information. This will discard any errors that occur completely within 3rd party scripts - if code loaded from the current domain called the 3rd party function, it will have at least one stack line and will still be sent.
     */
    ignore3rdPartyErrors?: boolean;

    /**
     * A string URI containing the protocol, domain and port (optional) where all payloads will be sent to. This can be used to proxy payloads to the Raygun API through your own server. When not set this defaults internally to the Raygun API, and for most usages you won't need to set this.
     */
    apiEndpoint?: string;

    /**
     * String which can be optionally set "onLoad" which will then boot the RealUserMonitoring side instead of waiting for the `load` event.
     */
    from?: string|"onLoad";
}

interface RaygunPayload {
    OccurredOn: Date;
    Details: {
        Error: {
            ClassName: string;
            Message: string;
            StackTrace: RaygunStackTrace[];
        };
        Environment: {
            UtcOffset: number;
            'User-Language': string;
            'Document-Mode': number;
            'Browser-Width': number;
            'Browser-Height': number;
            'Screen-Width': number;
            'Screen-Height': number;
            'Color-Depth': number;
            Browser: string;
            'Browser-Name': string;
            'Browser-Version': string;
            Platform: string;
        };
        Client: {
            Name: string;
            Version: string;
        };
        UserCustomData: any;
        Tags: string[];
        Request: {
            Url: string;
            QueryString: string;
            Headers: {
                'User-Agent': string;
                Referer: string;
                Host: string;
            };
        };
        Version: string;
        User: {
            Identifier?: string;
            IsAnonymous?: boolean;
            Email?: string;
            FullName?: string;
            FirstName?: string;
            UUID?: any;
        };
        GroupingKey?: string;
    };
}

interface RaygunStatic {

    /**
     * Prevents Raygun from overwriting anything bound to `window.Raygun`.
     */
    noConflict(): RaygunStatic;

    /**
     * Creates a new Raygun object. Allows the sending of errors to different applications.
     */
    constructNewRaygun(): RaygunStatic;

    /**
     * Configures the Raygun provider.
     */
    init(apiKey: string, options?: RaygunOptions, customdata?: any): RaygunStatic;

    /**
     * Attaches custom data to any errors sent to Raygun.
     */
    withCustomData(customdata: any): RaygunStatic;

    /**
     * Allows errors to be filtered by tag in the Raygun Dashboard.
     */
    withTags(tags: string[]): RaygunStatic;

    /**
     * Attaches to the `window.onerror` handler. Enables unhandled errors to be automatically tracked.
     */
    attach(): RaygunStatic;

    /**
     * Detaches the handler from the window.onerror method. Unhandled errors will no longer be tracked.
     */
    detach(): RaygunStatic;

    /**
     * Sends an error/exception to the Raygun Api.
     */
    send(ex: Error, customData?: any, tags?: string[]): RaygunStatic;

    /**
     * Provides additional information about the current user.
     */
    setUser(user: string, isAnonymous?: boolean, email?: string, fullName?: string, firstName?: string, uuid?: string): RaygunStatic;

    /**
     * Resets the information about the current user.
     */
    resetAnonymousUser(): void;

    /**
     * Allows errors to be filtered by version in the Raygun Dashboard. Versions should be in the format `x.x.x`
     */
    setVersion(version: string): RaygunStatic;

    /**
     * Whether caught errors should be saved in Local Storage when there is no network activity. Saved errors will be send when another error occurs, and activity is regained. Disabled by default.
     */
    saveIfOffline(enableOffline: boolean): RaygunStatic;

    /**
     * Blacklist keys to prevent their values from being sent to Raygun.
     */
    filterSensitiveData(filteredKeys: (string|RegExp)[]): RaygunStatic;

    /**
     * Change the scope at which filters are applied. Defaults to `customData` by default.
     */
    setFilterScope(scope: "all"|"customData"): RaygunStatic;

    /**
     * Whitelist damains which should transmit errors to Raygun.
     */
    whitelistCrossOriginDomains(whitelist: string[]): RaygunStatic;

    /**
     * Executed before the payload is sent. If a truthy object is returned, Raygun will attempt to use that as the payload. Raygun will abort the send if `false` is returned.
     */
    onBeforeSend(callback: (payload: RaygunPayload) => RaygunPayload|boolean): RaygunStatic;

    /**
     * Overrides the default automatic grouping and instead group errors together by the string returned by the callback.
     */
    groupingKey(callback: (payload: RaygunPayload, stackTrace: TracekitStackTrace, options: any) => string|void): RaygunStatic;
    onBeforeXHR(callback: (xhr: XMLHttpRequest) => void): RaygunStatic;
    onAfterSend(callback: (response: XMLHttpRequest) => void): RaygunStatic;
    endSession(): void;

    /**
     * Track Single Page Application route events.
     */
    trackEvent(type: "pageView", options: { path: string }): void;

    /**
     * Records a manual breadcrumb with the given message and metadata passed.
     */
    recordBreadcrumb(message:string,metadata?:any): void;

    /**
     * Enables all breadcrumbs level or a type can be passed which will enable only that passed one.
     */
    enableAutoBreadcrumbs(type?:"XHR"|"Clicks"|"Console"|"Navigation"): void;

    /**
     * Disables all breadcrumbs or a type can be passed to disable only that one.
     */
    disableAutoBreadcrumbs(type?:"XHR"|"Clicks"|"Console"|"Navigation"): void;

    /**
     * Pass "breadcrumbsLevel" alongside a valid breadcrumbs level to set the current level. Passing options other than "breadcrumbsLevel" will set xhr hosts to ignore being
     */
    setBreadcrumbOption(option?:string|"breadcrumbsLevel", value?:string|"debug"|"info"|"warning"|"error"): void;
}

interface RaygunV2UserDetails {
    /**
     * Uniquely identifies the user within Raygun.
     */
    identifier: string;

    /**
     * Indicates whether the user is anonymous or has a user account. Even if this is set to true, you should still give the user a unique identifier of some kind.
     */
    isAnonymous?: string;

    /**
     * The user's email address.
     */
    email?: string;

    /**
     * The user's full name.
     */
    fullName?: string;

    /**
     * The user's first or preferred name.
     */
    firstName?: string;

    /**
     * Identifier of the device the app is running on. This could be used to correlate user accounts over multiple machines.
     */
    uuid?: string;
}


interface RaygunV2 {
    (key: "options", value:RaygunOptions):void;
    (key: "setUser", value: RaygunV2UserDetails):void;
    (key: "onBeforeSend", callback: (payload: RaygunPayload) => RaygunPayload|boolean):void;
    (key: "onBeforeXHR"|"onAfterSend", callback: (xhr: XMLHttpRequest) => void): void;
    (key: "groupingKey", value:(payload: RaygunPayload, stackTrace: TracekitStackTrace, options: any) => string|void):void;
    (key: "trackEvent", value: { type: string, path: string }): void;
    (key: "apiKey"|"setVersion"|"setFilterScope", value:string):void;
    (key: "attach"|"enableCrashReporting"|"enablePulse"|"noConflict"|"saveIfOffline", value: boolean):void;
    (key: "filterSensitiveData"|"whitelistCrossOriginDomains"|"withTags", values: string[]): void;
    (key: "send"|"withCustomData", value: any): void;
    (key: "getRaygunInstance"):RaygunStatic;
    (key: "detach"): void;
    (key: "disableAutoBreadcrumbs"): void;
    (key: "enableAutoBreadcrumbs"): void;
    (key: "disableAutoBreadcrumbsConsole"): void;
    (key: "enableAutoBreadcrumbsConsole"): void;
    (key: "disableAutoBreadcrumbsNavigation"): void;
    (key: "enableAutoBreadcrumbsNavigation"): void;
    (key: "disableAutoBreadcrumbsClicks"): void;
    (key: "enableAutoBreadcrumbsClicks"): void;
    (key: "disableAutoBreadcrumbsXHR"): void;
    (key: "enableAutoBreadcrumbsXHR"): void;
    (key: "setAutoBreadcrumbsXHRIgnoredHosts"): void;
    (key: "setBreadcrumbLevel"): void;
    (key: "recordBreadcrumb", message:string|{message:string,metadata:any,level:string|"debug"|"info"|"warning"|"error",location:string}, metadata:any): void;
    (key: string):void;
}

interface Window {
    Raygun: RaygunStatic;
}

declare var Raygun: RaygunStatic;

declare module 'raygun4js' {
    export = Raygun;
}
