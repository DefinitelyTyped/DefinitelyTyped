// Type definitions for ApplicationInsights-JS v0.22.14
// Project: https://github.com/Microsoft/ApplicationInsights-JS
// Definitions by: Kamil Szostak <https://github.com/kamilszostak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Microsoft.ApplicationInsights.Context {
    class Application {
        /**
         * The application version.
         */
        ver: string;

        /**
         * The application build version.
         */
        build: string;
    }

    class Device {
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

        /**
         * Constructs a new instance of the Device class
         */
        constructor();
    }

    class User {
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

        /**
        * Sets the autheticated user id and the account id in this session.
        *
        * @param authenticatedUserId {string} - The authenticated user id. A unique and persistent string that represents each authenticated user in the service.
        * @param accountId {string} - An optional string to represent the account associated with the authenticated user.
        */
        setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string): void;

        /**
         * Clears the authenticated user id and the account id from the user context.
         * @returns {}
         */
        clearAuthenticatedUserContext(): void;

        constructor(config: ITelemetryConfig);
    }

    class Session {
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

    class Location {
        /**
         * Client IP address for reverse lookup
         */
        ip: string;
    }

    class Operation {
        /**
         * Unique id
         */
        id: string;

        name: string;

        parentId: string;

        rootId: string;

        /**
         * String identifying the bot or test agent.
         */
        syntheticSource: string;
    }
}

declare module Microsoft.Telemetry {
    export class Base {
        public baseType: string;
        constructor() 
    }

    class Envelope {
        public ver: number;
        public name: string;
        public time: string;
        public sampleRate: number;
        public seq: string;
        public iKey: string;
        public flags: number;
        public deviceId: string;
        public os: string;
        public osVer: string;
        public appId: string;
        public appVer: string;
        public userId: string;
        public tags: any;
        public data: Base;

        constructor();
    }
}

declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Envelope extends Microsoft.Telemetry.Envelope  {
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: any;

        /**
         * Constructs a new instance of telemetry data.
         */
        constructor(data: Microsoft.Telemetry.Base, name: string);
    }
}


declare module Microsoft.ApplicationInsights {

    var Version: string;

    interface IConfig {
        // The key of your Application Insights resource in Azure
        instrumentationKey: string;

        // The Application Insights server
        endpointUrl: string;

        emitLineDelimitedJson: boolean;

        accountId: string;

        // A session is logged if the user is inactive for this time in milliseconds. Default 30 mins.
        sessionRenewalMs: number;

        // A session is logged if it has continued for this time in milliseconds. Default 24h.
        sessionExpirationMs: number;

        //Default 100k
        maxBatchSizeInBytes: number;

        // Default 15s
        maxBatchInterval: number;

        // If true, data is sent immediately and not batched.
        enableDebug: boolean;

        // If true, telemetry data is not collected or sent. Default false.
        disableTelemetry: boolean;

        verboseLogging: boolean;

        // Default 10s:
        diagnosticLogInterval: number;

        samplingPercentage: number;

        autoTrackPageVisitTime: boolean;

        // If true, exceptions are not monitored. 
        disableExceptionTracking: boolean;

        // If true, ajax calls are not monitored.
        disableAjaxTracking: boolean;

        // If true, default behavior of trackPageView is changed to record end of page view duration interval when 
        // trackPageView is called. If false and no custom duration is provided to trackPageView, the page view
        // performance is calculated using the navigation timing API.
        overridePageViewDuration: boolean;

        // Default 500 - controls how many ajax calls will be monitored per page view.
        // Set to -1 to monitor all ajax calls on the page.
        maxAjaxCallsPerView: number;

        disableDataLossAnalysis: boolean;

        disableCorrelationHeaders: boolean;

        disableFlushOnBeforeUnload: boolean;

        enableSessionStorageBuffer: boolean;

        // Custom cookie domain. This is helpful if you want to share Application Insights cookies across subdomains.
        cookieDomain: string;
    }

    interface ISenderConfig {
        /**
         * The url to which payloads will be sent
         */
        endpointUrl: () => string;
        /**
        * The JSON format (normal vs line delimited). True means line delimited JSON.
        */
        emitLineDelimitedJson: () => boolean;
        /**
         * The maximum size of a batch in bytes
         */
        maxBatchSizeInBytes: () => number;
        /**
         * The maximum interval allowed between calls to batchInvoke
         */
        maxBatchInterval: () => number;
        /**
         * The master off switch.  Do not send any data if set to TRUE
         */
        disableTelemetry: () => boolean;
        /**
         * Store a copy of a send buffer in the session storage
         */
        enableSessionStorageBuffer: () => boolean;
    }

    interface ITelemetryConfig extends ISenderConfig {
        instrumentationKey: () => string;
        accountId: () => string;
        sessionRenewalMs: () => number;
        sessionExpirationMs: () => number;
        sampleRate: () => number;
        endpointUrl: () => string;
        cookieDomain: () => string;
    }


    class TelemetryContext {
        /**
         * The object describing a component tracked by this object.
         */
        application: Context.Application;

        /**
         * The object describing a device tracked by this object.
         */
        device: Context.Device;

        /**
         * The object describing a user tracked by this object.
         */
        user: Context.User;

        /**
         * The object describing a session tracked by this object.
         */
        session: Context.Session;

        /**
         * The object describing a location tracked by this object.
         */
        location: Context.Location;

        /**
         * The object describing a operation tracked by this object.
         */
        operation: Context.Operation;

        /**
         * Use Sender.ts to send telemetry object to the endpoint
         */
        track(envelope: Telemetry.Common.Envelope): Telemetry.Common.Envelope;

        /**
        * Adds telemetry initializer to the collection. Telemetry initializers will be called one by one
        * before telemetry item is pushed for sending and in the order they were added.
        */
        addTelemetryInitializer(telemetryInitializer: (envelope: Telemetry.Common.Envelope) => boolean): void;
    }

    /**
     * The main API that sends telemetry to Application Insights.
     * Learn more: http://go.microsoft.com/fwlink/?LinkID=401493
     */
    class AppInsights {
        constructor(config: IConfig);

        config: IConfig;

        context: TelemetryContext;

        /**
         * Starts timing how long the user views a page or other item. Call this when the page opens.
         * This method doesn't send any telemetry. Call {@link stopTrackTelemetry} to log the page when it closes.
         * @param   name  A string that idenfities this item, unique within this HTML document. Defaults to the document title.
         */
        startTrackPage(name?: string): void;

        /**
         * Logs how long a page or other item was visible, after {@link startTrackPage}. Call this when the page closes.
         * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
         * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
         * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        stopTrackPage(name?: string, url?: string, properties?: Object, measurements?: Object): void;

        /**
         * Logs that a page or other item was viewed.
         * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
         * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
         * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
         * @param   duration    number - the number of milliseconds it took to load the page. Defaults to undefined. If set to default value, page load time is calculated internally.
         */
        trackPageView(name?: string, url?: string, properties?: Object, measurements?: Object, duration?: number): void;

        /**
         * Start timing an extended event. Call {@link stopTrackEvent} to log the event when it ends.
         * @param   name    A string that identifies this event uniquely within the document.
         */
        startTrackEvent(name: string): void;

        /**
         * Log an extended event that you started timing with {@link startTrackEvent}.
         * @param   name    The string you used to identify this event in startTrackEvent.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        stopTrackEvent(name: string, properties?: Object, measurements?: Object): void;

        /**
         * Log a user action or other occurrence.
         * @param   name    A string to identify this event in the portal.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        trackEvent(name: string, properties?: Object, measurements?: Object): void;

        trackAjax(id: string, absoluteUrl: string, pathName: string, totalTime: number, success: boolean, resultCode: number, method?: string): void;

        /**
         * Log an exception you have caught.
         * @param   exception   An Error from a catch clause, or the string error message.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        trackException(exception: Error, handledAt?: string, properties?: Object, measurements?: Object): void;
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
        trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: Object): void;

        /**
        * Log a diagnostic message.
        * @param    message A message string
        * @param   properties  map[string, string] - additional data used to filter traces in the portal. Defaults to empty.
        */
        trackTrace(message: string, properties?: Object): void;

        /**
         * Immediately send all queued telemetry.
         */
        flush(): void;

        /**
         * Sets the autheticated user id and the account id in this session.
         * User auth id and account id should be of type string. They should not contain commas, semi-colons, equal signs, spaces, or vertical-bars.
         *
         * @param authenticatedUserId {string} - The authenticated user id. A unique and persistent string that represents each authenticated user in the service.
         * @param accountId {string} - An optional string to represent the account associated with the authenticated user.
         */
        setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string): void;

        /**
         * Clears the authenticated user id and the account id from the user context.
         */
        clearAuthenticatedUserContext(): void;

        /**
         * The custom error handler for Application Insights
         * @param {string} message - The error message
         * @param {string} url - The url where the error was raised
         * @param {number} lineNumber - The line number where the error was raised
         * @param {number} columnNumber - The column number for the line where the error was raised
         * @param {Error}  error - The Error object
         */
        _onerror(message: string, url: string, lineNumber: number, columnNumber: number, error: Error): void;
    }
}
