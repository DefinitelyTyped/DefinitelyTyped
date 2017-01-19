// Type definitions for Application Insights v0.15.12
// Project: https://github.com/Microsoft/ApplicationInsights-node.js
// Definitions by: Scott Southwood <https://github.com/scsouthw/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AutoCollectConsole {
    constructor(client: Client): AutoCollectConsole;
    enable(isEnabled: boolean): void;
    isInitialized(): boolean;
}

interface AutoCollectExceptions {
    constructor(client:Client): AutoCollectExceptions;
    isInitialized(): boolean;
    enable(isEnabled:boolean): void;
}

interface AutoCollectPerformance {
    constructor(client: Client): AutoCollectPerformance;
    enable(isEnabled: boolean): void;
    isInitialized(): boolean;
}

interface AutoCollectRequests {
    constructor(client: Client): AutoCollectRequests;
    enable(isEnabled: boolean): void;
    isInitialized(): boolean;
}


declare namespace ContractsModule {
    enum DataPointType {
        Measurement = 0,
        Aggregation = 1,
    }
    enum DependencyKind {
        SQL = 0,
        Http = 1,
        Other = 2,
    }
    enum DependencySourceType {
        Undefined = 0,
        Aic = 1,
        Apmc = 2,
    }
    enum SessionState {
        Start = 0,
        End = 1,
    }
    enum SeverityLevel {
        Verbose = 0,
        Information = 1,
        Warning = 2,
        Error = 3,
        Critical = 4,
    }
    interface ContextTagKeys {
        applicationVersion: string;
        applicationBuild: string;
        deviceId: string;
        deviceIp: string;
        deviceLanguage: string;
        deviceLocale: string;
        deviceModel: string;
        deviceNetwork: string;
        deviceOEMName: string;
        deviceOS: string;
        deviceOSVersion: string;
        deviceRoleInstance: string;
        deviceRoleName: string;
        deviceScreenResolution: string;
        deviceType: string;
        deviceMachineName: string;
        locationIp: string;
        operationId: string;
        operationName: string;
        operationParentId: string;
        operationRootId: string;
        operationSyntheticSource: string;
        operationIsSynthetic: string;
        sessionId: string;
        sessionIsFirst: string;
        sessionIsNew: string;
        userAccountAcquisitionDate: string;
        userAccountId: string;
        userAgent: string;
        userId: string;
        userStoreRegion: string;
        sampleRate: string;
        internalSdkVersion: string;
        internalAgentVersion: string;
        constructor(): ContextTagKeys;
    }
    interface Domain {
        ver: number;
        properties: any;
        constructor(): Domain;
    }
    interface Data<TDomain extends ContractsModule.Domain> {
        baseType: string;
        baseData: TDomain;
        constructor(): Data<TDomain>;
    }
    interface Envelope {
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
        tags: {
            [key: string]: string;
        };
        data: Data<Domain>;
        constructor(): Envelope;
    }
    interface EventData extends ContractsModule.Domain {
        ver: number;
        name: string;
        properties: any;
        measurements: any;
        constructor(): EventData;
    }
    interface MessageData extends ContractsModule.Domain {
        ver: number;
        message: string;
        severityLevel: ContractsModule.SeverityLevel;
        properties: any;
        constructor(): MessageData;
    }
    interface ExceptionData extends ContractsModule.Domain {
        ver: number;
        handledAt: string;
        exceptions: ExceptionDetails[];
        severityLevel: ContractsModule.SeverityLevel;
        problemId: string;
        crashThreadId: number;
        properties: any;
        measurements: any;
        constructor(): ExceptionData;
    }
    interface StackFrame {
        level: number;
        method: string;
        assembly: string;
        fileName: string;
        line: number;
        constructor(): StackFrame;
    }
    interface ExceptionDetails {
        id: number;
        outerId: number;
        typeName: string;
        message: string;
        hasFullStack: boolean;
        stack: string;
        parsedStack: StackFrame[];
        constructor(): ExceptionDetails;
    }
    interface DataPoint {
        name: string;
        kind: ContractsModule.DataPointType;
        value: number;
        count: number;
        min: number;
        max: number;
        stdDev: number;
        constructor(): DataPoint;
    }
    interface MetricData extends ContractsModule.Domain {
        ver: number;
        metrics: DataPoint[];
        properties: any;
        constructor(): MetricData;
    }
    interface PageViewData extends ContractsModule.EventData {
        ver: number;
        url: string;
        name: string;
        duration: string;
        properties: any;
        measurements: any;
        constructor(): PageViewData;
    }
    interface PageViewPerfData extends ContractsModule.PageViewData {
        ver: number;
        url: string;
        perfTotal: string;
        name: string;
        duration: string;
        networkConnect: string;
        sentRequest: string;
        receivedResponse: string;
        domProcessing: string;
        properties: any;
        measurements: any;
        constructor(): PageViewPerfData;
    }
    interface RemoteDependencyData extends ContractsModule.Domain {
        ver: number;
        name: string;
        kind: ContractsModule.DataPointType;
        value: number;
        count: number;
        min: number;
        max: number;
        stdDev: number;
        dependencyKind: ContractsModule.DependencyKind;
        success: boolean;
        async: boolean;
        dependencySource: ContractsModule.DependencySourceType;
        commandName: string;
        dependencyTypeName: string;
        properties: any;
        constructor(): RemoteDependencyData;
    }
    interface AjaxCallData extends ContractsModule.PageViewData {
        ver: number;
        url: string;
        ajaxUrl: string;
        name: string;
        duration: string;
        requestSize: number;
        responseSize: number;
        timeToFirstByte: string;
        timeToLastByte: string;
        callbackDuration: string;
        responseCode: string;
        success: boolean;
        properties: any;
        measurements: any;
        constructor(): AjaxCallData;
    }
    interface RequestData extends ContractsModule.Domain {
        ver: number;
        id: string;
        name: string;
        startTime: string;
        duration: string;
        responseCode: string;
        success: boolean;
        httpMethod: string;
        url: string;
        properties: any;
        measurements: any;
        constructor(): RequestData;
    }
    interface SessionStateData extends ContractsModule.Domain {
        ver: number;
        state: ContractsModule.SessionState;
        constructor(): SessionStateData;
    }
    interface PerformanceCounterData extends ContractsModule.Domain {
        ver: number;
        categoryName: string;
        counterName: string;
        instanceName: string;
        kind: DataPointType;
        count: number;
        min: number;
        max: number;
        stdDev: number;
        value: number;
        properties: any;
        constructor(): PerformanceCounterData;
    }
}


interface Channel {
    constructor(isDisabled: () => boolean, getBatchSize: () => number, getBatchIntervalMs: () => number, sender: Sender): Channel;
    /**
     * Add a telemetry item to the send buffer
     */
    send(envelope: ContractsModule.Envelope): void;
    handleCrash(envelope: ContractsModule.Envelope): void;
    /**
     * Immediately send buffered data
     */
    triggerSend(isNodeCrashing?: boolean): void;
}

interface Client {
    config: Config;
    context: Context;
    commonProperties: {
        [key: string]: string;
    };
    channel: Channel;
    /**
     * Constructs a new client of the client
     * @param iKey the instrumentation key to use (read from environment variable if not specified)
     */
    constructor(iKey?: string): Client;
    /**
     * Log a user action or other occurrence.
     * @param   name    A string to identify this event in the portal.
     * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
     * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
     */
    trackEvent(name: string, properties?: {
        [key: string]: string;
    }, measurements?: {
        [key: string]: number;
    }): void;
    /**
     * Log a trace message
     * @param   message    A string to identify this event in the portal.
     * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
     */
    trackTrace(message: string, severityLevel?: ContractsModule.SeverityLevel, properties?: {
        [key: string]: string;
    }): void;
    /**
     * Log an exception you have caught.
     * @param   exception   An Error from a catch clause, or the string error message.
     * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
     * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
     */
    trackException(exception: Error, properties?: {
        [key: string]: string;
    }): void;
    /**
     * Log a numeric value that is not associated with a specific event. Typically used to send regular reports of performance indicators.
     * To send a single measurement, use just the first two parameters. If you take measurements very frequently, you can reduce the
     * telemetry bandwidth by aggregating multiple measurements and sending the resulting average at intervals.
     * @param name   A string that identifies the metric.
     * @param value  The value of the metric
     * @param count  the number of samples used to get this value
     * @param min    the min sample for this set
     * @param max    the max sample for this set
     * @param stdDev the standard deviation of the set
     */
    trackMetric(name: string, value: number, count?:number, min?: number, max?: number, stdDev?: number, properties?: {
        [key: string]: string;
    }): void;
    
    /**
     * Log an incoming http request to your server. The request data will be tracked during the response "finish" event if it is successful or the request "error" 
     * event if it fails. The request duration is automatically calculated as the timespan between when the trackRequest method was called, and when the response "finish"
     * or request "error" events were fired.
     * @param request   The http.IncomingMessage object to track
     * @param response  The http.ServerResponse object for this request
     * @param properties    map[string, string] - additional data used to filter requests in the portal. Defaults to empty.
     */
    trackRequest(request: any /* http.IncomingMessage */, response: any /* http.ServerResponse */, properties?: {
        [key: string]: string;
    }): void;
    
    /**
     * Log an incoming http request to your server. The request data is tracked synchronously rather than waiting for the response "finish"" or request "error"" events.
     * Use this if you need your request telemetry to respect custom app insights operation and user context (for example if you set any appInsights.client.context.tags).
     * @param request   The http.IncomingMessage object to track
     * @param response  The http.ServerResponse object for this request
     * @param ellapsedMilliseconds  The duration for this request. Defaults to 0.
     * @param properties    map[string, string] - additional data used to filter requests in the portal. Defaults to empty.
     * @param error     An error that was returned for this request if it was unsuccessful. Defaults to null.
     */
    trackRequestSync(request: any /*http.IncomingMessage */, response: any /*http.ServerResponse */, ellapsedMilliseconds?: number, properties?: {
        [key: string]: string;}, error?: any) : void;
    
    /**
     * Log information about a dependency of your app. Typically used to track the time database calls or outgoing http requests take from your server.
     * @param name   The name of the dependency (i.e. "myDatabse")
     * @param commandname   The name of the command executed on the dependency
     * @param elapsedTimeMs   The amount of time in ms that the dependency took to return the result
     * @param success         True if the dependency succeeded, false otherwise
     * @param dependencyTypeName  The type of the dependency (i.e. "SQL" "HTTP"). Defaults to empty.
     * @param properties   map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
     * @param dependencyKind   ContractsModule.DependencyKind of this dependency. Defaults to Other.
     * @param async  True if the dependency was executed asynchronously, false otherwise. Defaults to false
     * @param dependencySource  ContractsModule.DependencySourceType of this dependency. Defaults to Undefined.
     */
    trackDependency(name: string, commandName: string, elapsedTimeMs: number, success: boolean, dependencyTypeName?: string, properties?: {}, dependencyKind?: any, async?: boolean, dependencySource?: number): void;
    /**
     * Immediately send all queued telemetry.
     */
    sendPendingData(callback?: (response: string) => void): void;
    getEnvelope(data: ContractsModule.Data<ContractsModule.Domain>, tagOverrides?: {
        [key: string]: string;
    }): ContractsModule.Envelope;
    /**
     * Generic track method for all telemetry types
     * @param data the telemetry to send
     * @param tagOverrides the context tags to use for this telemetry which overwrite default context values
     */
    track(data: ContractsModule.Data<ContractsModule.Domain>, tagOverrides?: {
        [key: string]: string;
    }): void;
}

interface Config {
    instrumentationKey: string;
    sessionRenewalMs: number;
    sessionExpirationMs: number;
    endpointUrl: string;
    maxBatchSize: number;
    maxBatchIntervalMs: number;
    disableAppInsights: boolean;
    constructor(instrumentationKey?: string): Config;
}

interface Context {
    keys: ContractsModule.ContextTagKeys;
    tags: {
        [key: string]: string;
    };
    constructor(packageJsonPath?: string): Context;
}

interface Sender {
    constructor(getUrl: () => string, onSuccess?: (response: string) => void, onError?: (error: Error) => void): Sender;
    send(payload: any/* Buffer */): void;
    saveOnCrash(payload: string): void;
    /**
     * enable caching events locally on error
     */
    enableCacheOnError(): void;
    /**
     * disable caching events locally on error
     */
    disableCacheOnError(): void;
}

/**
 * The singleton meta interface for the default client of the client. This interface is used to setup/start and configure
 * the auto-collection behavior of the application insights module.
 */
interface ApplicationInsights {
    client: Client;
    /**
     * Initializes a client with the given instrumentation key, if this is not specified, the value will be
     * read from the environment variable APPINSIGHTS_INSTRUMENTATIONKEY
     * @returns {ApplicationInsights/Client} a new client
     */
    getClient(instrumentationKey?: string): Client;
    /**
     * Initializes the default client of the client and sets the default configuration
     * @param instrumentationKey the instrumentation key to use. Optional, if this is not specified, the value will be
     * read from the environment variable APPINSIGHTS_INSTRUMENTATIONKEY
     * @returns {ApplicationInsights} this interface
     */
    setup(instrumentationKey?: string): ApplicationInsights;
    /**
     * Starts automatic collection of telemetry. Prior to calling start no telemetry will be collected
     * @returns {ApplicationInsights} this interface
     */
    start(): ApplicationInsights;
    /**
     * Sets the state of console tracking (enabled by default)
     * @param value if true console activity will be sent to Application Insights
     * @returns {ApplicationInsights} this interface
     */
    setAutoCollectConsole(value: boolean): ApplicationInsights;
    /**
     * Sets the state of exception tracking (enabled by default)
     * @param value if true uncaught exceptions will be sent to Application Insights
     * @returns {ApplicationInsights} this interface
     */
    setAutoCollectExceptions(value: boolean): ApplicationInsights;
    /**
     * Sets the state of performance tracking (enabled by default)
     * @param value if true performance counters will be collected every second and sent to Application Insights
     * @returns {ApplicationInsights} this interface
     */
    setAutoCollectPerformance(value: boolean): ApplicationInsights;
    /**
     * Sets the state of request tracking (enabled by default)
     * @param value if true requests will be sent to Application Insights
     * @returns {ApplicationInsights} this interface
     */
    setAutoCollectRequests(value: boolean): ApplicationInsights;
    /**
     * Enables verbose debug logging
     * @returns {ApplicationInsights} this interface
     */
    enableVerboseLogging(): ApplicationInsights;
}

declare module "applicationinsights" {
    const applicationinsights: ApplicationInsights;
    export = applicationinsights;
}
