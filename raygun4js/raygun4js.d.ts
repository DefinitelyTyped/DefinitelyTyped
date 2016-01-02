// Type definitions for raygun4js 1.18.3
// Project: https://github.com/MindscapeHQ/raygun4js
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module raygun {

    // https://github.com/MindscapeHQ/raygun4js/blob/c7d8880045214ab6d403d5cc613c207f696a3cdd/src/raygun.js#L533-539
    interface IStackTrace {
        LineNumber: number;
        ColumnNumber: number;
        ClassName: string;
        FileName: string;
        MethodName: string;
    }

    // https://github.com/MindscapeHQ/raygun4js/blob/c7d8880045214ab6d403d5cc613c207f696a3cdd/src/raygun.js#L598-637
    interface IPayload {
        OccurredOn: Date;
        Details: {
            Error: {
                ClassName: string;
                Message: string;
                StackTrace: IStackTrace[];
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
        };
    }

    // https://github.com/MindscapeHQ/raygun4js/blob/c7d8880045214ab6d403d5cc613c207f696a3cdd/src/raygun.js#L61-82
    interface IRaygunOptions {
        allowInsecureSubmissions?: boolean;
        ignoreAjaxAbort?: boolean;
        ignoreAjaxError?: boolean;
        disableAnonymousUserTracking?: boolean;
        excludedHostnames?: boolean;
        excludedUserAgents?: boolean;
        wrapAsynchronousCallbacks?: boolean;
        debugMode?: boolean;
        ignore3rdPartyErrors?: boolean;
    }

    interface RaygunStatic {
        noConflict(): RaygunStatic;
        constructNewRaygun(): RaygunStatic;
        init(apiKey: string, options?: IRaygunOptions, customdata?: any): RaygunStatic;
        withCustomData(customdata: any): RaygunStatic;
        withTags(tags: string[]): RaygunStatic;
        attach(): RaygunStatic;
        detach(): RaygunStatic;
        send(e: Error, customData?: any, tags?: string[]): RaygunStatic;
        setUser(user: string, isAnonymous?: boolean, email?: string, fullName?: string, firstName?: string, uuid?: string): RaygunStatic;
        resetAnonymousUser(): void;
        setVersion(version: string): RaygunStatic;
        saveIfOffline(enableOffline: boolean): RaygunStatic;
        filterSensitiveData(filteredKeys: string[]): RaygunStatic;
        setFilterScope(scope: string): RaygunStatic;
        whitelistCrossOriginDomains(whitelist: string[]): RaygunStatic;
        onBeforeSend(callback: (payload: IPayload) => IPayload): RaygunStatic;
    }

}

declare var Raygun: raygun.RaygunStatic;

declare module 'Raygun' {
    export = Raygun;
}