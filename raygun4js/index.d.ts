// Type definitions for raygun4js 2.4.2
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
    allowInsecureSubmissions?: boolean;
    ignoreAjaxAbort?: boolean;
    ignoreAjaxError?: boolean;
    disableAnonymousUserTracking?: boolean;
    disableErrorTracking?: boolean;
    disablePulse?: boolean;
    excludedHostnames?: (string|RegExp)[];
    excludedUserAgents?: (string|RegExp)[];
    pulseMaxVirtualPageDuration?: number;
    pulseIgnoreUrlCasing?: boolean;
    apiUrl?: string;
    wrapAsynchronousCallbacks?: boolean;
    debugMode?: boolean;
    ignore3rdPartyErrors?: boolean;
    apiEndpoint?: string;
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
    noConflict(): RaygunStatic;
    constructNewRaygun(): RaygunStatic;
    init(apiKey: string, options?: RaygunOptions, customdata?: any): RaygunStatic;
    withCustomData(customdata: any): RaygunStatic;
    withTags(tags: string[]): RaygunStatic;
    attach(): RaygunStatic;
    detach(): RaygunStatic;
    send(ex: Error, customData?: any, tags?: string[]): RaygunStatic;
    setUser(user: string, isAnonymous?: boolean, email?: string, fullName?: string, firstName?: string, uuid?: string): RaygunStatic;
    resetAnonymousUser(): void;
    setVersion(version: string): RaygunStatic;
    saveIfOffline(enableOffline: boolean): RaygunStatic;
    filterSensitiveData(filteredKeys: string[]): RaygunStatic;
    setFilterScope(scope: string): RaygunStatic;
    whitelistCrossOriginDomains(whitelist: string[]): RaygunStatic;
    onBeforeSend(callback: (payload: RaygunPayload) => RaygunPayload): RaygunStatic;
    groupingKey(callback: (payload: RaygunPayload, stackTrace: TracekitStackTrace, options: any) => string): RaygunStatic;
    onBeforeXHR(callback: (xhr: XMLHttpRequest) => void): RaygunStatic;
    onAfterSend(callback: (response: XMLHttpRequest) => void): RaygunStatic;
    endSession(): void;
    trackEvent(type: "pageView", options: { path: string }): void;
}

interface RaygunV2UserDetails {
    identifier: string;
    isAnonymous: string;
    email: string;
    fullName: string;
    firstName: string;
    uuid: string;
}

interface RaygunV2 {
    (key: "options", value:RaygunOptions):void;
    (key: "setUser", value: RaygunV2UserDetails):void;
    (key: "onBeforeSend", callback: (payload: RaygunPayload) => string):void;
    (key: "onBeforeXHR"|"onAfterSend", callback: (xhr: XMLHttpRequest) => void): void;
    (key: "groupingKey", value:(payload: RaygunPayload, stackTrace: TracekitStackTrace, options: any) => string):void;
    (key: "trackEvent", value: { type: string, path: string }): void;
    (key: "apiKey"|"setVersion"|"setFilterScope", value:string):void;
    (key: "attach"|"enableCrashReporting"|"enablePulse"|"noConflict"|"saveIfOffline", value: boolean):void;
    (key: "filterSensitiveData"|"whitelistCrossOriginDomains"|"withTags", values: string[]): void;
    (key: "send"|"withCustomData", value: any): void;
    (key: "getRaygunInstance"):RaygunStatic;
    (key: "detach"): void;
    (key: string):void;
}

interface Window {
    Raygun: RaygunStatic;
}

declare var Raygun: RaygunStatic;

declare module 'raygun4js' {
    export = Raygun;
}
