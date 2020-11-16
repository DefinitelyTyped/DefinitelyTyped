// Type definitions for rox-node 4.8
// Project: https://rollout.io
// Definitions by: g-guirado <https://github.com/g-guirado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 *
 * Official documentation for rox-node is available here:
 * https://support.rollout.io/docs/nodejs-api
 *
 */

export interface RoxContainer {
  [key: string]: Flag | Configuration<any> | Variant;
}

/**
 * The register function should be called before the call to Rox.setup()
 *
 * https://support.rollout.io/docs/nodejs-api#section-register
 */
export function register(namespace: string, roxContainer: RoxContainer): void;

/**
 * Set Global Context.
 * You can think of Global Context as a default context
 *
 * https://support.rollout.io/docs/nodejs-api#section-setcontext
 */
export function setContext(globalContext: unknown): void;

/**
 * Initiate connection with Rox servers for the application identified by the application key.
 * The registered containers will be synced and Rox entities will get the appropriate values.
 *
 * https://support.rollout.io/docs/nodejs-api#section-setup
 */
export function setup(apiKey: string, options?: RoxSetupOptions): Promise<unknown>;

export interface RoxSetupOptions {
  version?: string;
  // https://support.rollout.io/docs/configuration-fetched-handler
  configurationFetchedHandler?(fetcherResult: RoxFetcherResult): void;
  debugLevel?: 'verbose';
  // https://support.rollout.io/docs/nodejs-api#section-using-the-impressionhandler-option
  impressionHandler?(reporting: RoxReporting, experiment: RoxExperiment, context: unknown): void;
  platform?: string;
  fetchIntervalInSec?: number;
  disableNetworkFetch?: boolean;
  devModeSecret?: string;
  /**
   * Set Roxy's URL for automated tests or local development.
   *
   * https://support.rollout.io/docs/microservices-automated-testing-and-local-development
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
 * https://support.rollout.io/docs/custom-properties
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
 * https://support.rollout.io/docs/nodejs-api#section-fetch
 */
export function fetch(): void;

/**
 * Creates a new Flag
 * https://support.rollout.io/docs/nodejs-api#section--flag-
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
 * https://support.rollout.io/docs/nodejs-api#section--variant-
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
 * https://support.rollout.io/docs/nodejs-api#section--configuration-
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
 * https://support.rollout.io/docs/javascript-browser-api#section--rox-overrides-
 */
export namespace overrides {
  /**
   * Sets an override value on a specific flag, this function accepts two parameters flag name (
   * full flag name including namespace) and desired value (from type String).
   * This function also saves the override value on the local device disk,
   * so it is "remembered" for the next the SDK is loaded to production.
   *
   * https://support.rollout.io/docs/javascript-browser-api#section--rox-overrides-setoverride-
   *
   * Note that for boolean flag we still give the value as a string.
   */
  function setOverride(nameSpacedFlagName: string, value: string): void;

  /**
   * Clears the override value from the flag (and the disk).
   *
   * https://support.rollout.io/docs/javascript-browser-api#section--rox-overrides-clearoverride-
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
   * https://support.rollout.io/docs/javascript-browser-api#section--rox-overrides-hasoverride-
   */
  function hasOverride(nameSpacedFlagName: string): boolean;
}

/**
 * Dynamic API is an alternative to Rollout static API for defining flags on the
 * different container objects and accessing them from that container object.
 * https://support.rollout.io/docs/dynamic-api
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
