/**
 * Kochava SDK instance
 */
export interface KochavaInstance {
    /**
     * Start the Kochava SDK with the app GUID
     * @param guid - the app GUID
     * @returns void
     */
    startWithAppGuid: (appGuid: string) => void;

    /**
     * sendPageEvent - Send a page event to Kochava
     * @param pageName - the name of the page
     * @param data - the data to send
     * @returns void
     */
    sendPageEvent: (pageName: string, additionalData?: EventData) => void;

    /**
     * sendEvent - Send an event to Kochava
     * @param name - the name of the event
     * @param data - the data to send with the event (optional)
     */
    sendEvent: (name: string, data?: string | EventData) => void;

    /**
     * registerIdentityLink - Register an identity link with Kochava
     * @param name - the name of the identity link
     * @param identifier - the identifier for the identity link
     * @returns void
     */
    registerIdentityLink: (name: string, identifier: string) => void;

    /**
     * setSleep - Set the sleep state of the SDK
     * @param sleep - the sleep state
     * @returns void
     */
    setSleep: (sleep: boolean) => void;

    /**
     * getDeviceId - Get the device ID from Kochava
     * @returns string - the device ID
     */
    getDeviceId(): string;

    /**
     * setLogLevel - Set the log level for the SDK
     * @param logLevel - the log level
     * @returns void
     */
    setLogLevel: (logLevel: LogLevel) => void;

    /**
     * shutdown - Shutdown the SDK
     * @param deleteData - clear the SDK state
     * @returns void
     */
    shutdown: (deleteData: boolean) => void;

    /**
     * useCookies - Enable or disable cookies
     * @param condition - boolean to enable or disable
     */
    useCookies: (condition: boolean) => void;

    /**
     * disableAutoPage - Disable auto page tracking
     * @param condition - boolean to enable or disable
     */
    disableAutoPage: (condition: boolean) => void;

    /**
     * executeAdvancedInstruction - Execute an advanced instruction
     * @param key - the key of the instruction
     * @param valueStr - the JSON string of the instruction
     * @param callback - the callback to call with the instance
     */
    executeAdvancedInstruction: (
        key: AdvancedInstructionKey,
        valueStr: string,
        callback: (instance: KochavaInstance) => void,
    ) => void;

    /**
     * registerCustomValue - Register a custom value with Kochava
     * @param name - the name of the custom value
     * @param value - the value of the custom value
     */
    registerCustomValue: (name: string, value: string) => void;

    /**
     * registerCustomDeviceIdentifier - Register a custom device identifier with Kochava
     * @param name - the name of the custom device identifier
     * @param value - the value of the custom device identifier
     */
    registerCustomDeviceIdentifier: (name: string, value: string) => void;

    /**
     * getStarted - Get the started state of the SDK
     * @returns boolean - the started state
     */
    getStarted: () => boolean;
    performNewKvinit: () => unknown;
    checkResendId: () => boolean;
    performInstall: () => unknown;
}

export interface KochavaSDK {
    /**
     * Create a new Kochava SDK instance for the browser
     * @returns KochavaInstance
     */
    create(): KochavaInstance;
    /**
     * Create a new Kochava SDK instance for the node
     * @returns KochavaInstance
     */
    createForNode(): KochavaInstance;
    /**
     * Create a new Kochava SDK instance for React
     * @returns KochavaInstance
     */
    createForReact: () => KochavaInstance;
    /**
     * Create a new Kochava SDK instance for Vue
     * @returns KochavaInstance
     */
    createForVue(): KochavaInstance;
    /**
     * Create a new Kochava SDK instance for Angular
     * @returns KochavaInstance
     */
    createForAngular(): KochavaInstance;
}

/**
 * Kochava SDK instance creators
 * each creator is a function that returns a new Kochava SDK instance
 */
export const Kochava: KochavaSDK;

export type LogLevel = "none" | "error" | "warn" | "info" | "debug" | "trace";
export interface EventData {
    [key: string]: string | number | boolean | null;
}
export type AdvancedInstructionKey =
    | "wrapper"
    | "urls"
    | "urlsRestore"
    | "logFilter"
    | "getInstance"
    | "logObjects";
