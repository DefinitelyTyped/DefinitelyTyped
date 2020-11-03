/**
 * The APIs that reside in the global scope, which may be called without a namespace prefix.
 *
 * Based on https://github.com/appcelerator/titanium_mobile/blob/23c15e8f4b1732486729eaf702c6e0911de153ed/apidoc/Global/Global.yml
 */

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether build target is `'dist-adhoc'`.
 */
declare const DIST_ADHOC: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether build target is `'dist-appstore'` or `'dist-playstore'`.
 */
declare const DIST_STORE: boolean;

/**
 * Alias for <ENV_DEVELOPMENT>
 */
declare const ENV_DEV: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether deploy type is `'development'`. Typically true for simulator/emulator builds.
 */
declare const ENV_DEVELOPMENT: boolean;

/**
 * Alias for <ENV_PRODUCTION>
 */
declare const ENV_PROD: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether deploy type is `'production'`. Typically true for app store/ad-hoc builds.
 */
declare const ENV_PRODUCTION: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether deploy type is `'test'`. Typically true for device builds.
 */
declare const ENV_TEST: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value.
 */
declare const OS_ANDROID: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value.
 */
declare const OS_IOS: boolean;

/**
 * Console logging facilities.
 */
declare var console: Console;

declare var global: Titanium.Global;

/**
 * An alias for [Titanium.Locale.getString](Titanium.Locale.getString).
 */
declare function L(key: string, hint?: string): string;

/**
 * Displays a pop-up alert dialog with the passed in `message`.
 */
declare function alert(message: string): void;

/**
 * Cancels an interval timer.
 */
declare function clearInterval(timerId?: number): void;

/**
 * Cancels a one-time timer.
 */
declare function clearTimeout(timerId?: number): void;

/**
 * Replaces each escape sequence in the specified string, created using the `encodedURI`
 * method, with the character that it represents.
 */
declare function decodeURIComponent(encodedURI: string): string;

/**
 * Replaces each special character in the specified string with the equivalent URI escape
 * sequence. Useful for encoding URIs.
 */
declare function encodeURIComponent(string: string): string;

/**
 * Loads either a native Titanium module or a CommonJS module.
 */
declare function require(moduleId: string): any;

/**
 * Executes a function repeatedly with a fixed time delay between each call to that function.
 */
declare function setInterval(func: (...args: any[]) => void, delay?: number): number;

/**
 * Executes code or a function after a delay.
 */
declare function setTimeout(func: (...args: any[]) => void, delay?: number): number;

// String constructor augmentation ---------------------------------------------

interface StringConstructor {
  /**
   * Formats a string using `printf`-style substitution.
   *
   * @param formatString An IEEE `printf`-style string, containing zero or more conversion specifications.
   * @param value Values to substitute into the `formatString`.
   */
  format(formatString: string, ...value: Array<string | number>): string;

  /**
   * Formats a number into the currency format, including currency symbol, of the locale
   * configured for the system.
   *
   * @param value Currency value,
   */
  formatCurrency(value: number): string;

  /**
   * Formats a date into the date format of the locale configured for the system.
   *
   * @param date Date to format.
   * @param format Date format to use. One of 'short', 'medium', 'long' or 'full'. Defaults to 'short'.
   */
  formatDate(date: Date, format?: string): string;

  /**
   * Formats a number into the decimal format, including decimal symbol, of the locale
   * configured for the system.
   *
   * @param value Value to format.
   * @param pattern Format pattern.
   */
  formatDecimal(value: number, pattern: string): string;
  /**
   * @param value Value to format.
   * @param locale Locale string. For example, `en-US` for US English.
   * @param pattern Format pattern.
   */
  formatDecimal(value: number, locale: string, pattern: string): string;

  /**
   * Formats a date into the time format of the locale configured for the system.
   *
   * @param date Date to format.
   * @param format Date format to use. One of 'short', 'medium', or 'long' (iOS only). Defaults to 'short'.
   */
  formatTime(date: Date, format?: string): string;
}

declare namespace Titanium {
  interface Global {
    L(key: string, hint?: string): string;
    alert(message: string): void;
    clearInterval(timerId?: number): void;
    clearTimeout(timerId?: number): void;
    decodeURIComponent(encodedURI: string): string;
    encodeURIComponent(string: string): string;
    require(moduleId: string): any;
    setInterval(func: (...args: any[]) => void, delay?: number): number;
    setTimeout(func: (...args: any[]) => void, delay?: number): number;
  }
}
