// Type definitions for ApplicationInsights-JS v0.22.14
// Project: https://github.com/Microsoft/ApplicationInsights-JS
// Definitions by: Kamil Szostak <https://github.com/kamilszostak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module AI {
    enum SeverityLevel {
        Verbose = 0,
        Information = 1,
        Warning = 2,
        Error = 3,
        Critical = 4,
    }
}

declare module Microsoft.ApplicationInsights.Context {
    interface IApplication {
        /**
         * The application version.
         */
        ver: string;
        /**
         * The application build version.
         */
        build: string;
    }
	
	interface IDevice {
        /**
         * The type for the current device.
         */
        type: string;
        /**
         * A device unique ID.
         */
        id: string;
        /**
         * The device OEM for the current device.
         */
        oemName: string;
        /**
         * The device model for the current device.
         */
        model: string;
        /**
         * The IANA interface type for the internet connected network adapter.
         */
        network: number;
        /**
         * The application screen resolution.
         */
        resolution: string;
        /**
         * The current display language of the operating system.
         */
        locale: string;
        /**
         * The IP address.
         */
        ip: string;
        /**
         * The device language.
         */
        language: string;
        /**
         * The OS name.
         */
        os: string;
        /**
         * The OS version.
         */
        osversion: string;
    }
	
    interface ILocation {
        /**
         * Client IP address for reverse lookup
         */
        ip: string;
    }

    interface IInternal {
        /**
        * The SDK version used to create this telemetry item.
        */
        sdkVersion: string;
        /**
         * The SDK agent version.
         */
        agentVersion: string;
    }	
	
    interface ISample {
        /**
        * Sample rate
        */
        sampleRate: number;
    }
	
    interface ISession {
        /**
        * The session ID.
        */
        id: string;
        /**
         * The true if this is the first session
         */
        isFirst: boolean;
        /**
         * The date at which this guid was genereated.
         * Per the spec the ID will be regenerated if more than acquisitionSpan milliseconds ellapse from this time.
         */
        acquisitionDate: number;
        /**
         * The date at which this session ID was last reported.
         * This value should be updated whenever telemetry is sent using this ID.
         * Per the spec the ID will be regenerated if more than renewalSpan milliseconds elapse from this time with no activity.
         */
        renewalDate: number;
    }	
	
    interface IOperation {
        /**
         * Operation id
         */
        id: string;
        /**
         * Operation name
         */
        name: string;
        /**
         * Parent operation id
         */
        parentId: string;
        /**
         * Root operation id
         */
        rootId: string;
        /**
         * Synthetic source of the operation
         */
        syntheticSource: string;
    }
	
	interface IUser {
        /**
        * The telemetry configuration.
        */
        config: any;
        /**
         * The user ID.
         */
        id: string;
        /**
         * Authenticated user id
         */
        authenticatedId: string;
        /**
         * The account ID.
         */
        accountId: string;
        /**
         * The account acquisition date.
         */
        accountAcquisitionDate: string;
        /**
         * The user agent string.
         */
        agent: string;
        /**
         * The store region.
         */
        storeRegion: string;
    }
}

declare module Microsoft.Telemetry {
    class Base {
        baseType: string;
        constructor();
    }
	
	class Envelope {
        ver: number;
        name: string;
        time: string;
        sampleRate: number;
        seq: string;
        iKey: string;
        flags: number;
        deviceId: string;
        os: string;
        osVer: string;
        appId: string;
        appVer: string;
        userId: string;
        tags: any;
        data: Base;
        constructor();
    }
}

declare module Microsoft.ApplicationInsights {
    interface IConfig {
        instrumentationKey?: string;
        endpointUrl?: string;
        emitLineDelimitedJson?: boolean;
        accountId?: string;
        sessionRenewalMs?: number;
        sessionExpirationMs?: number;
        maxBatchSizeInBytes?: number;
        maxBatchInterval?: number;
        enableDebug?: boolean;
        disableExceptionTracking?: boolean;
        disableTelemetry?: boolean;
        verboseLogging?: boolean;
        diagnosticLogInterval?: number;
        samplingPercentage?: number;
        autoTrackPageVisitTime?: boolean;
        disableAjaxTracking?: boolean;
        overridePageViewDuration?: boolean;
        maxAjaxCallsPerView?: number;
        disableDataLossAnalysis?: boolean;
        disableCorrelationHeaders?: boolean;
        disableFlushOnBeforeUnload?: boolean;
        enableSessionStorageBuffer?: boolean;
        cookieDomain?: string;
        url?: string;
    }

    interface ITelemetryContext {
        /**
        * The object describing a component tracked by this object.
        */
        application: Context.IApplication;
        /**
         * The object describing a device tracked by this object.
         */
        device: Context.IDevice;
        /**
        * The object describing internal settings.
        */
        internal: Context.IInternal;
        /**
         * The object describing a location tracked by this object.
         */
        location: Context.ILocation;
        /**
         * The object describing a operation tracked by this object.
         */
        operation: Context.IOperation;
        /**
        * The object describing sampling settings.
        */
        sample: Context.ISample;
        /**
         * The object describing a user tracked by this object.
         */
        user: Context.IUser;
        /**
         * The object describing a session tracked by this object.
         */
        session: Context.ISession;
        /**
        * Adds telemetry initializer to the collection. Telemetry initializers will be called one by one
        * before telemetry item is pushed for sending and in the order they were added.
        */
        addTelemetryInitializer(telemetryInitializer: (envelope: Microsoft.Telemetry.Envelope) => boolean): any;
        /**
        * Tracks telemetry object.
        */
        track(envelope: Microsoft.Telemetry.Envelope): any;
    }

    interface IAppInsights {
        config: IConfig;
        context: ITelemetryContext;
        queue: (() => void)[];
        /**
        * Starts timing how long the user views a page or other item. Call this when the page opens.
        * This method doesn't send any telemetry. Call {@link stopTrackTelemetry} to log the page when it closes.
        * @param   name  A string that idenfities this item, unique within this HTML document. Defaults to the document title.
        */
        startTrackPage(name?: string): any;
        /**
        * Logs how long a page or other item was visible, after {@link startTrackPage}. Call this when the page closes.
        * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
        * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
        * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
        * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
        */
        stopTrackPage(name?: string, url?: string, properties?: {
            [name: string]: string;
        }, measurements?: {
            [name: string]: number;
        }): any;
        /**
         * Logs that a page or other item was viewed.
         * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
         * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
         * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
         * @param   duration    number - the number of milliseconds it took to load the page. Defaults to undefined. If set to default value, page load time is calculated internally.
         */
        trackPageView(name?: string, url?: string, properties?: {
            [name: string]: string;
        }, measurements?: {
            [name: string]: number;
        }, duration?: number): any;
        /**
         * Start timing an extended event. Call {@link stopTrackEvent} to log the event when it ends.
         * @param   name    A string that identifies this event uniquely within the document.
         */
        startTrackEvent(name: string): any;
        /**
         * Log an extended event that you started timing with {@link startTrackEvent}.
         * @param   name    The string you used to identify this event in startTrackEvent.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        stopTrackEvent(name: string, properties?: {
            [name: string]: string;
        }, measurements?: {
            [name: string]: number;
        }): any;
        /**
        * Log a user action or other occurrence.
        * @param   name    A string to identify this event in the portal.
        * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
        * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
        */
        trackEvent(name: string, properties?: {
            [name: string]: string;
        }, measurements?: {
            [name: string]: number;
        }): any;
        /**
        * Log an AJAX request
        * @param  id  Event id
        * @param  absoluteUrl Full url
        * @param  pathName Leave this parameter blank
        * @param  totalTime Total time it took for AJAX request to complete
        * @param  success Whether AJAX request succeeded or failed
        * @param  resultCode Result code returned from AJAX call
        * @param  method  HTTP verb that was used (GET, POST)
        */
        trackAjax(id: string, absoluteUrl: string, pathName: string, totalTime: number, success: boolean, resultCode: number, method?: string): any;
        /**
         * Log an exception you have caught.
         * @param   exception   An Error from a catch clause, or the string error message.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         * @param   severityLevel   AI.SeverityLevel - severity level
         */
        trackException(exception: Error, handledAt?: string, properties?: {
            [name: string]: string;
        }, measurements?: {
            [name: string]: number;
        }, severityLevel?: AI.SeverityLevel): any;
        /**
         * Log a numeric value that is not associated with a specific event. Typically used to send regular reports of performance indicators.
         * To send a single measurement, use just the first two parameters. If you take measurements very frequently, you can reduce the
         * telemetry bandwidth by aggregating multiple measurements and sending the resulting average at intervals.
         * @param   name    A string that identifies the metric.
         * @param   average Number representing either a single measurement, or the average of several measurements.
         * @param   sampleCount The number of measurements represented by the average. Defaults to 1.
         * @param   min The smallest measurement in the sample. Defaults to the average.
         * @param   max The largest measurement in the sample. Defaults to the average.
         */
        trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: {
            [name: string]: string;
        }): any;
        /**
        * Log a diagnostic message.
        * @param    message A message string
        * @param   properties  map[string, string] - additional data used to filter traces in the portal. Defaults to empty.
        */
        trackTrace(message: string, properties?: {
            [name: string]: string;
        }): any;
        /**
         * Immediately send all queued telemetry.
         */
        flush(): any;
        /**
        * Sets the autheticated user id and the account id in this session.
        * User auth id and account id should be of type string. They should not contain commas, semi-colons, equal signs, spaces, or vertical-bars.
        *
        * @param authenticatedUserId {string} - The authenticated user id. A unique and persistent string that represents each authenticated user in the service.
        * @param accountId {string} - An optional string to represent the account associated with the authenticated user.
        */
        setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string): any;
        /**
         * Clears the authenticated user id and the account id from the user context.
         */
        clearAuthenticatedUserContext(): any;
        downloadAndSetup?(config: Microsoft.ApplicationInsights.IConfig): void;
        /**
         * The custom error handler for Application Insights
         * @param {string} message - The error message
         * @param {string} url - The url where the error was raised
         * @param {number} lineNumber - The line number where the error was raised
         * @param {number} columnNumber - The column number for the line where the error was raised
         * @param {Error}  error - The Error object
         */
        _onerror(message: string, url: string, lineNumber: number, columnNumber: number, error: Error): any;
    }
}
