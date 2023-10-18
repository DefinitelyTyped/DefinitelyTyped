/**
 * Official documentation for rox-node is available here:
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api
 */

export interface RoxContainer {
    [key: string]: Flag | RoxNumber | RoxString;
}

/**
 * The register function should be called before the call to Rox.setup()
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_register
 */
export function register(namespace: string, roxContainer: RoxContainer): void;

export function register(roxContainer: RoxContainer): void;

/**
 * Set Global Context.
 * You can think of Global Context as a default context
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_setcontext
 */
export function setContext(globalContext: unknown): void;

/**
 * Initiate connection with Rox servers for the application identified by the application key.
 * The registered containers will be synced and Rox entities will get the appropriate values.
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_setup
 */
export function setup(apiKey: string, options?: RoxSetupOptions): Promise<unknown>;

export interface RoxSetupOptions {
    version?: string | undefined;
    // https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/reporting/configuration-fetched-handler
    configurationFetchedHandler?(fetcherResult: RoxFetcherResult): void;
    debugLevel?: "verbose" | undefined;
    // https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_using_the_impressionhandler_option
    impressionHandler?(reporting: RoxReporting, context: unknown): void;
    platform?: string | undefined;
    fetchIntervalInSec?: number | undefined;
    disableNetworkFetch?: boolean | undefined;
    devModeSecret?: string | undefined;
    /**
     * Set Roxy's URL for automated tests or local development.
     *
     * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/debugging/microservices-automated-testing-and-local-development
     */
    roxy?: string | undefined;
    // https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_dynamicpropertyrulehandler
    dynamicPropertyRuleHandler?(propName: string, context: any): any;
}

export enum RoxFetcherStatus {
    AppliedFromEmbedded = "APPLIED_FROM_EMBEDDED",
    AppliedFromCache = "APPLIED_FROM_CACHE",
    AppliedFromNetwork = "APPLIED_FROM_NETWORK",
    ErrorFetchFailed = "ERROR_FETCH_FAILED",
}

export enum RoxErrorTrigger {
    DYNAMIC_PROPERTIES_RULE = "DYNAMIC_PROPERTIES_RULE",
    CONFIGURATION_FETCHED_HANDLER = "CONFIGURATION_FETCHED_HANDLER",
    IMPRESSION_HANDLER = "IMPRESSION_HANDLER",
    CUSTOM_PROPERTY_GENERATOR = "CUSTOM_PROPERTY_GENERATOR",
}

export interface RoxFetcherResult {
    fetcherStatus: RoxFetcherStatus;
    creationDate: Date;
    hasChanges: boolean;
    errorDetails?: string | undefined;
}

export interface RoxReporting {
    name: string;
    value: string;
    targeting: boolean;
}

/**
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/feature-releases/custom-properties
 */
export function setCustomNumberProperty(name: string, value: number | ((context?: unknown) => number)): void;
export function setCustomStringProperty(name: string, value: string | ((context?: unknown) => string)): void;
export function setCustomBooleanProperty(name: string, value: boolean | ((context?: unknown) => boolean)): void;

// https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_setuserspaceunhandlederrorhandler
export function setUserspaceUnhandledErrorHandler(
    handler: (errorTrigger: RoxErrorTrigger, error: Error) => void,
): void;

/**
 * Pulls the latest configuration and flag values down from the Rollout servers
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_fetch
 */
export function fetch(): void;

/**
 * Creates a new Flag
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_flag
 */
export class Flag {
    constructor(defaultValue?: boolean);

    // The name of the Flag
    readonly name: string;

    // Default value of the Flag
    readonly defaultValue: boolean;

    // Returns true when the flag is enabled
    isEnabled(context?: unknown): boolean;
}

/**
 * Used to create and manage Rollout feature flags that determine different predefined string values
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_rox_roxstring
 */
export class RoxString {
    constructor(defaultValue: string, options?: ReadonlyArray<string>);

    // The name of the string flag
    readonly name: string;

    // Default value of the string flag
    readonly defaultValue: string;

    // Returns the current value of the string flag, accounting for value overrides
    getValue(context?: unknown): string;
}

/**
 * Used to create and manage Rollout feature flags that determine different predefined number values
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_rox_roxnumber
 */
export class RoxNumber {
    constructor(defaultValue: number, options?: ReadonlyArray<number>);

    // The name of the number flag
    readonly name: string;

    // Default value of the number flag
    readonly defaultValue: number;

    // Returns the current value of the number flag, accounting for value overrides
    getValue(context?: unknown): number;
}

/**
 * Override: Should only be used for development purposes (QA - Feature dev - e2e)
 *
 * When you override an existing flag value using the Rox.overrides.setOverride method,
 * the SDK will disregard existing configuration coming from the dashboard and will
 * serialize the override on disk this value will be loaded and override the flag
 * right after you call Rox.setup. To clear the override from the cache you need to
 * call the Rox.overrides.clearOverride method.
 *
 * One can refer to the javascript-browser-api for this feature:
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_overrides
 */
export namespace overrides {
    /**
     * Sets an override value on a specific flag, this function accepts two parameters flag name (
     * full flag name including namespace) and desired value (from type String).
     * This function also saves the override value on the local device disk,
     * so it is "remembered" for the next the SDK is loaded to production.
     *
     * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_overrides_setoverride
     *
     * Note that for boolean flag we still give the value as a string.
     */
    function setOverride(nameSpacedFlagName: string, value: string): void;

    /**
     * Clears the override value from the flag (and the disk).
     *
     * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_overrides_clearoverride
     */
    function clearOverride(nameSpacedFlagName: string): void;

    /**
     * Clears all override values
     */
    function clearAllOverrides(): void;

    function getOriginalValue(nameSpacedFlagName: string): string;

    /**
     * full flag name including namespace
     *
     * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_overrides_hasoverride
     */
    function hasOverride(nameSpacedFlagName: string): boolean;
}

/**
 * Dynamic API is an alternative to Rollout static API for defining flags on the
 * different container objects and accessing them from that container object.
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/nodejs-api#_rox_dynamicapi
 */
export namespace dynamicApi {
    /**
     * Getting boolean value of a flag
     */
    function isEnabled(nameSpacedFlagName: string, defaultValue: boolean, context?: unknown): boolean;

    /**
     * Getting string value of a string flag
     */
    function value(nameSpacedFlagName: string, defaultValue: string, context?: unknown): string;

    /**
     * Getting string value of a number flag
     */
    function getNumber(nameSpacedFlagName: string, defaultValue: number, context?: unknown): number;
}

export const flags: ReadonlyArray<Flag>;
