// Type definitions for rox-node 4.8
// Project: https://rollout.io
// Definitions by: g-guirado <https://github.com/g-guirado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 *
 * Official documentation for rox-node is available here:
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api
 *
 */

export interface RoxContainer {
  [key: string]: Flag | Configuration<any> | Variant;
}

/**
 * The register function should be called before the call to Rox.setup()
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_register
 */
export function register(namespace: string, roxContainer: RoxContainer): void;

/**
 * Set Global Context.
 * You can think of Global Context as a default context
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_setcontext
 */
export function setContext(globalContext: unknown): void;

/**
 * Initiate connection with Rox servers for the application identified by the application key.
 * The registered containers will be synced and Rox entities will get the appropriate values.
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_setup
 */
export function setup(apiKey: string, options?: RoxSetupOptions): Promise<unknown>;

export interface RoxSetupOptions {
  version?: string;
  // https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/reporting/configuration-fetched-handler
  configurationFetchedHandler?(fetcherResult: RoxFetcherResult): void;
  debugLevel?: 'verbose';
  // https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_using_the_impressionhandler_option
  impressionHandler?(reporting: RoxReporting, experiment: RoxExperiment, context: unknown): void;
  platform?: string;
  fetchIntervalInSec?: number;
  disableNetworkFetch?: boolean;
  devModeSecret?: string;
  /**
   * Set Roxy's URL for automated tests or local development.
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/debugging/microservices-automated-testing-and-local-development
   */
  roxy?: string;
}

export enum RoxFetcherStatus {
  AppliedFromEmbedded = 'APPLIED_FROM_EMBEDDED',
  AppliedFromCache = 'APPLIED_FROM_CACHE',
  AppliedFromNetwork = 'APPLIED_FROM_NETWORK',
  ErrorFetchFailed = 'ERROR_FETCH_FAILED'
}

export interface RoxFetcherResult {
  fetcherStatus: RoxFetcherStatus;
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
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/feature-releases/custom-properties
 */
export function setCustomNumberProperty(name: string, value: number | ((context?: unknown) => number)): void;
export function setCustomStringProperty(name: string, value: string | ((context?: unknown) => string)): void;
export function setCustomBooleanProperty(name: string, value: boolean | ((context?: unknown) => boolean)): void;
export function setDynamicCustomPropertyRule(
  handler: (propName: string, context: unknown) => number | string | boolean
): void;

/**
 * Pulls the latest configuration and flag values down from the Rollout servers
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_fetch
 */
export function fetch(): void;

/**
 * Creates a new Flag
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_flag
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
 * Used to create and manage Rollout feature flags that determine different predefined values
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_variant
 */
export class Variant<T extends string = string> {
  constructor(defaultValue: T, options: ReadonlyArray<T>, name?: string);

  // The name of the Variant
  readonly name: string;

  // Default value of the Variant
  readonly defaultValue: BasicType<T>;

  // Returns the current value of the Variant, accounting for value overrides
  getValue(context?: unknown): BasicType<T>;
}

/**
 * manages a remote configuration setting with a value of type string, boolean, or number.
 * The constructor sets the default value for the remote configuration setting
 *
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/nodejs-api#_configuration
 */
export class Configuration<T extends number | boolean | string> {
  constructor(defaultValue: T);

  // The name of the Configuration
  readonly name: string;

  // Default value of the Configuration
  readonly defaultValue: BasicType<T>;

  // Returns the current value of the Configuration, accounting for value overrides
  getValue(context?: unknown): BasicType<T>;
}

/**
 * Ensure that TypeScript properly types things with a basic type.
 * For example, if T is true, returnedtype shall be boolean, not true
 */
export type BasicType<T> = T extends boolean ? boolean : T extends number ? number : T extends string ? string : never;

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
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/javascript-browser-api#_rox_overrides
 */
export namespace overrides {
  /**
   * Sets an override value on a specific flag, this function accepts two parameters flag name (
   * full flag name including namespace) and desired value (from type String).
   * This function also saves the override value on the local device disk,
   * so it is "remembered" for the next the SDK is loaded to production.
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/javascript-browser-api#_rox_overrides_setoverride
   *
   * Note that for boolean flag we still give the value as a string.
   */
  function setOverride(nameSpacedFlagName: string, value: string): void;

  /**
   * Clears the override value from the flag (and the disk).
   *
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/javascript-browser-api#_rox_overrides_clearoverride
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
   * https://docs.cloudbees.com/docs/cloudbees-feature-flags-api/4.9/api-reference/javascript-browser-api#_rox_overrides_hasoverride
   */
  function hasOverride(nameSpacedFlagName: string): boolean;
}

/**
 * Dynamic API is an alternative to Rollout static API for defining flags on the
 * different container objects and accessing them from that container object.
 * https://docs.cloudbees.com/docs/cloudbees-feature-flags/latest/feature-flags/dynamic-api
 */
export namespace dynamicApi {
  /**
   * Getting boolean value of a flag
   */
  function isEnabled(nameSpacedFlagName: string, defaultValue: boolean, context?: unknown): boolean;

  /**
   * Getting string value of a Variant flag
   */
  function value(nameSpacedFlagName: string, defaultValue: string, context?: unknown): string;
}

export const flags: ReadonlyArray<Flag>;
