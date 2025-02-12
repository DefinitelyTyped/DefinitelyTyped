export type AdvancedKey =
  | 'wrapper'
  | 'urls'
  | 'urlsRestore'
  | 'logFilter'
  | 'getInstance'
  | 'logObjects';
export type LogLevel = 'none' | 'error' | 'warn' | 'info' | 'debug' | 'trace';
export type KochavaEvent = (name: string, data?: KochavaEventData) => void;
export type KochavaEventData =
  | string
  | {
      [key: string]: string | number | boolean | null;
    };

/**
 * Kochava SDK instance
 */
export interface KochavaInstance {
  /**
   * Start the Kochava SDK with the app GUID
   * @param guid - the app GUID
   * @returns void
   */
  startWithAppGuid: (guid: string) => void;

  /**
   * sendPageEvent - Send a page event to Kochava
   * @param pageName - the name of the page
   * @param data - the data to send
   * @returns void
   */
  sendPageEvent: (pageName: string, data?: KochavaEventData) => void;

  /**
   * sendEvent - Send an event to Kochava
   * @param name - the name of the event
   * @param data - the data to send with the event (optional)
   */
  sendEvent: KochavaEvent;

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
   * @param callback - the callback to call with the device ID
   * @returns void
   */
  getDeviceId(callback: (deviceId: string) => void): void;

  /**
   * setLogLevel - Set the log level for the SDK
   * @param level - the log level
   * @returns void
   */
  setLogLevel: (level: LogLevel) => void;

  /**
   * shutdown - Shutdown the SDK
   * @param clear - clear the SDK state
   * @returns void
   */
  shutdown: (clear: boolean) => void;

  /**
   * useCookies - Enable or disable cookies
   * @param use - boolean to enable or disable
   */
  useCookies: (use: boolean) => void;

  /**
   * disableAutoPage - Disable auto page tracking
   * @param disable - boolean to enable or disable
   */
  disableAutoPage: (disable: boolean) => void;

  /**
   * executeAdvancedInstruction - Execute an advanced instruction
   * @param key - the key of the instruction
   * @param strJson - the JSON string of the instruction
   * @param callback - the callback to call with the instance
   */
  executeAdvancedInstruction: (
    key: AdvancedKey,
    strJson: string,
    callback: (instance: KochavaInstance) => void
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
  checkResendId: () => unknown;
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

