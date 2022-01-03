// Type definitions for Apache Background Mode plugin
// Project: https://github.com/katzer/cordova-plugin-background-mode
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The plugin prevent the app from going to sleep while in background
 */
interface CordovaPluginBackgroundMode {

  /**
   * The background mode can be enabled
   */
  enable(): void;
  /**
   * The background mode can be disabled
   */
  disable(): void;
  /**
   * Checks if the background mode is enabled or not
   */
  isEnabled(): boolean;
  /**
   * Checks if the background mode is activated or not
   */
  isActivated(): boolean;
  /**
   * Function to get notified when the background mode has been activated
   */
  onactivate(): void;
  /**
   * Function to get notified when the background mode has been deactivated
   */
  ondeactivate(): void;
  /**
   * Function to get notified when the background could not benn activated
   */
  onfailure(callback: (errorCode: number) => void): void;
  /**
   * Customize default title, ticker and text for the notification
   */
  setDefaults(item: ICordovaPluginBackgroundModeNotificationItem): void;
  /**
   * Configure the default background notification
   */
  configure(item: ICordovaPluginBackgroundModeNotificationItem): void;
}

interface ICordovaPluginBackgroundModeNotificationItem {

  /**
   * The title of the notification displayed in background mode
   */
  title?: string | undefined,
  /**
   * The ticker of the notification displayed in background mode
   */
  ticker?: string | undefined,
  /**
   * The body of the notification displayed in background mode
   */
  text?: string | undefined,
  /**
   * Handles if app is coming to foreground when tapping on the notification
   */
  resume?: boolean | undefined,
  /**
   * Handles if there is a notification when background is activated
   */
  silent?: boolean | undefined
}

interface CordovaPlugins {

  backgroundMode: CordovaPluginBackgroundMode
}
