// Type definitions for rox-browser 5.0
// Project: https://rollout.io
// Definitions by: dn-l <https://github.com/dn-l>
//                 AsafRollout: <https://github.com/asafRollout>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 *
 * Official documentation for rox-browser is available here:
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api
 *
 */

export = Rox;
export as namespace Rox;

declare namespace Rox {
  interface RoxContainer {
    [key: string]: Flag | RoxNumber | RoxString;
  }

  /**
   * The register function should be called before the call to Rox.setup()
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_register
   */
  function register(namespace: string, roxContainer: RoxContainer): void;

  function register(roxContainer: RoxContainer): void;

  /**
   * Set Global Context.
   * You can think of Global Context as a default context
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/feature-releases/custom-properties#_global_context
   */
  function setContext(globalContext: unknown): void;

  /**
   * Initiate connection with Rox servers for the application identified by the application key.
   * The registered containers will be synced and Rox entities will get the appropriate values.
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_setup
   */
  function setup(apiKey: string, options?: RoxSetupOptions): Promise<unknown>;

  interface RoxSetupOptions {
    version?: string;
    // https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_configurationfetchedhandler
    configurationFetchedHandler?(fetcherResult: RoxFetcherResult): void;
    debugLevel?: 'verbose';
    // https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_using_the_impressionhandler_option
    impressionHandler?(reporting: RoxReporting, context: unknown): void;
    platform?: string;
    freeze?: RoxFlagFreezeLevel;
    disableNetworkFetch?: boolean;
    devModeSecret?: string;
    /**
     * Set Roxy's URL for automated tests or local development.
     *
     * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/debugging/microservices-automated-testing-and-local-development
     */
    roxy?: string;
    // https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_dynamicpropertyrulehandler
    dynamicPropertyRuleHandler?(propName: string, context: any): any;
  }

  enum RoxFetcherStatus {
    AppliedFromEmbedded = 'APPLIED_FROM_EMBEDDED',
    AppliedFromCache = 'APPLIED_FROM_CACHE',
    AppliedFromNetwork = 'APPLIED_FROM_NETWORK',
    ErrorFetchFailed = 'ERROR_FETCH_FAILED'
  }

  enum RoxErrorTrigger {
    DYNAMIC_PROPERTIES_RULE = 'DYNAMIC_PROPERTIES_RULE',
    CONFIGURATION_FETCHED_HANDLER = 'CONFIGURATION_FETCHED_HANDLER',
    IMPRESSION_HANDLER = 'IMPRESSION_HANDLER',
    CUSTOM_PROPERTY_GENERATOR = 'CUSTOM_PROPERTY_GENERATOR'
  }

  interface RoxFetcherResult {
    fetcherStatus: RoxFetcherStatus;
    creationDate: Date;
    hasChanges: boolean;
    errorDetails?: string;
  }

  interface RoxReporting {
    name: string;
    value: string;
    targeting: boolean;
  }

  /**
   * Note that you might have to call unfreeze after setting custom properties such as email after login
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/feature-releases/custom-properties
   */
  function setCustomNumberProperty(name: string, value: number | ((context?: unknown) => number)): void;
  function setCustomStringProperty(name: string, value: string | ((context?: unknown) => string)): void;
  function setCustomBooleanProperty(name: string, value: boolean | ((context?: unknown) => boolean)): void;

  // https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_setuserspaceunhandlederrorhandler
  function setUserspaceUnhandledErrorHandler(
    handler: (errorTrigger: RoxErrorTrigger, error: Error) => void
  ): void;

  /**
   * Unfreeze the state of all flags in code
   * Calling this function will unfreeze all flags, and using a flag will return it’s most updated value
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/feature-flags/flag-freeze#_flag_unfreeze
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_unfreeze_4
   */
  function unfreeze(namespace?: string): void;

  /**
   * Pulls the latest configuration and flag values down from the Rollout servers
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_fetch
   */
  function fetch(): void;

  /**
   * Opens the flag override view, providing a debug UI for the application's set of feature flags.
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_showoverrides
   */
  function showOverrides(position?: RoxOverridesPosition): void;

  enum RoxOverridesPosition {
    TopLeft = 'top left',
    TopRight = 'top right',
    BottomLeft = 'bottom left',
    BottomRight = 'bottom right'
  }

  /**
   * Default is none
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/feature-flags/flag-freeze
   */
  enum RoxFlagFreezeLevel {
    None = 'none',
    UntilForeground = 'untilForeground',
    UntilLaunch = 'untilLaunch'
  }

  interface RoxFlagOptions {
    freeze?: RoxFlagFreezeLevel;
  }

  /**
   * Creates a new Flag
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_flag
   */
  class Flag {
    constructor(defaultValue?: boolean, options?: RoxFlagOptions);

    // The name of the Flag
    readonly name: string;

    // Default value of the Flag
    readonly defaultValue: boolean;

    // Returns true when the flag is enabled
    isEnabled(context?: unknown): boolean;

    // Unlock the Flag value from changes from the last time it was freezed
    unfreeze(): void;
  }

  /**
   * Used to create and manage Rollout feature flags that determine different predefined string values
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_roxstring
   */
  class RoxString {
    constructor(defaultValue: string, options?: ReadonlyArray<string>);

    // The name of the RoxString
    readonly name: string;

    // Default value of the RoxString
    readonly defaultValue: string;

    // Returns the current value of the RoxString, accounting for value overrides
    getValue(context?: unknown): string;

    // Unlock the RoxString value from changes from the last time it was freezed
    unfreeze(): void;
  }

  /**
   * Used to create and manage Rollout feature flags that determine different predefined number values
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_roxnumber
   */
  class RoxNumber {
    constructor(defaultValue: number, options?: ReadonlyArray<number>);

    // The name of the RoxNumber
    readonly name: string;

    // Default value of the RoxNumber
    readonly defaultValue: number;

    // Returns the current value of the RoxNumber, accounting for value overrides
    getValue(context?: unknown): number;

    // Unlock the RoxNumber value from changes from the last time it was freezed
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
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_overrides
   */
  namespace overrides {
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
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/latest/api-reference/javascript-browser-api#_rox_dynamicapi
   */
  namespace dynamicApi {
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

  const flags: ReadonlyArray<Flag>;
}
