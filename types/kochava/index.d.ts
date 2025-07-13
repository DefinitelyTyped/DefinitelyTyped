/**
 * Kochava SDK instance
 */
export class Kochava {
    constructor();

    /**
     * Creates a new Kochava SDK instance for the browser
     * @returns Kochava
     */
    static create(): Kochava;
    /**
     * Creates a new Kochava SDK instance for the node
     * @returns Kochava
     */
    static createForNode(): Kochava;
    /**
     * Creates a new Kochava SDK instance for React
     * @returns Kochava
     */
    static createForReact(): Kochava;
    /**
     * Creates a new Kochava SDK instance for Vue
     * @returns Kochava
     */
    static createForVue(): Kochava;
    /**
     * Creates a new Kochava SDK instance for Angular
     * @returns Kochava
     */
    static createForAngular(): Kochava;

    /**
     * Start the Kochava SDK with the app GUID
     * @param guid - the app GUID
     * @returns void
     */
    startWithAppGuid(appGuid: string): void;

    /**
     * sendPageEvent - Send a page event to Kochava
     * @param pageName - the name of the page
     * @param data - the data to send
     * @returns void
     */
    sendPageEvent(pageName: string, additionalData?: EventData): void;

    /**
     * sendEvent - Send an event to Kochava
     * @param name - the name of the event
     * @param data - the data to send with the event (optional)
     */
    sendEvent(name: string, data?: string | EventData): void;

    /**
     * registerIdentityLink - Register an identity link with Kochava
     * @param name - the name of the identity link
     * @param identifier - the identifier for the identity link
     * @returns void
     */
    registerIdentityLink(name: string, identifier: string): void;

    /**
     * setSleep - Set the sleep state of the SDK
     * @param sleep - the sleep state
     * @returns void
     */
    setSleep(sleep: boolean): void;

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
    setLogLevel(logLevel: LogLevel): void;

    /**
     * shutdown - Shutdown the SDK
     * @param deleteData - clear the SDK state
     * @returns void
     */
    shutdown(deleteData: boolean): void;

    /**
     * useCookies - Enable or disable cookies
     * @param condition - boolean to enable or disable
     */
    useCookies(condition: boolean): void;

    /**
     * disableAutoPage - Disable auto page tracking
     * @param condition - boolean to enable or disable
     */
    disableAutoPage(condition: boolean): void;

    /**
     * executeAdvancedInstruction - Execute an advanced instruction
     * @param key - the key of the instruction
     * @param valueStr - the JSON string of the instruction
     * @param callback - the callback to call with the instance
     */
    executeAdvancedInstruction(
        key: string,
        valueStr: string,
        callback?: (result: string) => void,
    ): void;

    /**
     * registerCustomValue - Register a custom value with Kochava
     * @param name - the name of the custom value
     * @param value - the value of the custom value
     */
    registerCustomValue(name: string, value: string): void;

    /**
     * registerCustomDeviceIdentifier - Register a custom device identifier with Kochava
     * @param name - the name of the custom device identifier
     * @param value - the value of the custom device identifier
     */
    registerCustomDeviceIdentifier(name: string, value: string): void;

    /**
     * getStarted - Get the started state of the SDK
     * @returns boolean - the started state
     */
    getStarted(): boolean;
}

// add koachava to window and global scope
declare global {
    // access using window.kochava
    interface Window {
        /**
         * Kochava instance
         * it could be undefined if the SDK is not loaded
         * make sure to check if it's defined before using it
         * @example window.kochava.startWithAppGuid("app-guid");
         * @example window.kochava.sendPageEvent("page-name", { data: "data" });
         */
        readonly kochava?: Kochava;
    }
    /**
     * Kochava instance,
     * it could be undefined if the SDK is not loaded,
     * make sure to check if it's defined before using it
     * @example kochava.startWithAppGuid("app-guid");
     * @example kochava.sendPageEvent("page-name", { data: "data" });
     */
    const kochava: Kochava | undefined;
}

// internal types
export type LogLevel = "none" | "error" | "warn" | "info" | "debug" | "trace";
export interface EventData {
    readonly [key: string]: string | number | boolean | null;
}
