// Type definitions for rox-react-native 4.5
// Project: https://rollout.io
// Definitions by: ahanriat <https://github.com/ahanriat>
//                 g-guirado <https://github.com/g-guirado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 *
 * Official documentation for rox-react-native is available here:
 * https://support.rollout.io/docs/reactnative
 *
 */

export interface RoxContainer {
    [key: string]: Flag | Configuration | Variant;
}

/**
 * The register function should be called before the call to Rox.setup()
 *
 * https://support.rollout.io/docs/reactnative#section-register
 */
export function register(namespace: string, roxContainer: RoxContainer): void;

/**
 * Initiate connection with Rox servers for the application identified by the application key.
 * The registered containers will be synced and Rox entities will get the appropriate values.
 *
 * https://support.rollout.io/docs/reactnative#section-setup
 */
export function setup(
    apiKey: string,
    options?: RoxSetupOptions
): Promise<unknown>;

export interface RoxSetupOptions {
    version?: string;
    // https://support.rollout.io/docs/reactnative#section-configurationfetchedhandler
    configurationFetchedHandler?(fetcherResult: RoxFetcherResult): void;
    debugLevel?: 'verbose';
    // https://support.rollout.io/docs/reactnative#section-using-the-impressionhandler-option
    impressionHandler?(reporting: RoxReporting, experiment: RoxExperiment, context: unknown): void;
    platform?: string;
    freeze?: 'untilLaunch' | 'none';
}

export interface RoxFetcherResult {
    fetcherStatus:
        | 'APPLIED_FROM_EMBEDDED'
        | 'APPLIED_FROM_CACHE'
        | 'APPLIED_FROM_NETWORK'
        | 'ERROR_FETCH_FAILED';
    creationDate: Date;
    hasChanges: boolean;
    errorDetails?: string;
}

export interface RoxReporting {
    name: string;
    value: string;
}

export interface RoxExperiment {
    identifier: string; //  experiment id
    name: string;
    isArchived: boolean;
    labels: string[]; // experiment's labels. assigned from dashboard
}

/**
 * Note that you might have to call unfreeze after setting custom properties such as email after login
 * https://support.rollout.io/docs/custom-properties
 */
export function setCustomNumberProperty(
    name: string,
    value: number | (() => number)
): void;
export function setCustomStringProperty(
    name: string,
    value: string | (() => string)
): void;
export function setCustomBooleanProperty(
    name: string,
    value: boolean | (() => boolean)
): void;

/**
 * Unfreeze the state of all flags in code
 * Calling this function will unfreeze all flags, and using a flag will return it’s most updated value
 *
 * https://support.rollout.io/docs/flags-update-flow#section-flag-unfreeze
 * https://support.rollout.io/docs/reactnative#section--unfreeze-
 */
export function unfreeze(namespace?: string): void;

/**
 * Pulls the latest configuration and flag values down from the Rollout servers
 *
 * https://support.rollout.io/docs/reactnative#section-fetch
 */
export function fetch(): Promise<unknown>;

/**
 * Default is untilForeground
 *
 * https://support.rollout.io/docs/reactnative#section--rox-freezeoptions-
 */
export type RoxFlagFreezeLevel = 'none' | 'untilForeground' | 'untilLaunch';
export interface RoxFlagOptions {
    freeze?: RoxFlagFreezeLevel;
}

/**
 * Creates a new Flag
 * https://support.rollout.io/docs/reactnative#section--rox-freezeoptions-
 */
export class Flag {
    constructor(defaultValue: boolean, options?: RoxFlagOptions);

    // The name of the Flag
    name: string;

    // Returns true when the flag is enabled
    isEnabled(): boolean;

    getNameDetails(): RoxNameDetails;

    // Unlock the Flag value from changes from the last time it was freezed
    unfreeze(): void;
}

/**
 * Used to create and manage Rollout feature flags that determine different predefined values
 *
 * https://support.rollout.io/docs/reactnative#section--rox-variant-
 */
export class Variant<T extends string = string> {
    constructor(defaultValue: T, options: T[], name?: string);

    // The name of the Flag
    name: string;

    // Returns the current value of the Variant, accounting for value overrides
    getValue(): T;

    getNameDetails(): RoxNameDetails;

    // Unlock the Flag value from changes from the last time it was freezed
    unfreeze(): void;
}

export interface RoxNameDetails {
    name: string;
    namespace: string;
}

/**
 * manages a remote configuration setting with a value of type string, boolean, or number.
 * The constructor sets the default value for the remote configuration setting
 *
 * https://support.rollout.io/docs/reactnative#section--rox-configuration-
 */
export class Configuration<T extends string | boolean | number = string> {
    constructor(defaultValue: T);

    // The name of the Configuration
    name: string;

    // Returns the current value of the Configuration, accounting for value overrides
    getValue(): T;

    // Unlock the Configuration value from changes from the last time it was freezed
    unfreeze(): void;
}

/**
 * Override: Should only be used for development purposes (QA - Feature dev - e2e)
 *
 * When you override an existing flag value using the Rox.overrides.setOverride method,
 * the SDK will disregard existing configuration coming from the dashboard and will
 * serialize the override on disk this value will be loaded and override the flag
 * right after you call Rox.setup. To clear the override from the cache you need to
 * call the Rox.overrides.clearOverride method
 *
 * https://support.rollout.io/docs/reactnative#section--rox-overrides-
 */
export namespace overrides {
    /**
     * Sets an override value on a specific flag, this function accepts two parameters flag name (
     * full flag name including namespace) and desired value (from type String).
     * This function also saves the override value on the local device disk,
     * so it is "remembered" for the next the SDK is loaded to production.
     *
     * https://support.rollout.io/docs/reactnative#section--rox-overrides-setoverride-
     *
     * Note that for boolean flag we still give the value as a string.
     */
    function setOverride(nameSpacedFlagName: string, value: string | 'false' | 'true'): void;

    /**
     * Clears the override value from the flag (and the disk).
     *
     * https://support.rollout.io/docs/reactnative#section--rox-overrides-clearoverride-
     */
    function clearOverride(nameSpacedFlagName: string): void;

    function getOriginalValue(nameSpacedFlagName: string): string;

    /**
     * full flag name including namespace
     *
     * https://support.rollout.io/docs/reactnative#section--rox-overrides-hasoverride-
     */
    function hasOverride(nameSpacedFlagName: string): boolean;
}
