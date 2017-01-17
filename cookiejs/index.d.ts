// Type definitions for cookie.js v1.0.0
// Project: https://github.com/js-coder/cookie.js
// Definitions by: Boltmade <https://github.com/Boltmade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/**
 * Shortcut for cookie.get()
 */

export = cookie;
export as namespace cookie;

declare function cookie(key : string, fallback?: string) : string;
declare function cookie(keys : string[], fallback?: string) : string;

declare namespace cookie {
  /**
   * Create a cookie. The value will automatically be escaped.
   */
  export function set(key : string, value : string, options? : any) : void;
  /**
   * Set several cookies at once
   */
  export function set(obj : any, options? : any) : void;
  /**
   * Remove cookies
   */
  export function remove(key : string) : void;
  export function remove(keys : string[]) : void;
  export function remove(...args : string[]) : void;
  /**
   * Remove all cookies
   */
  export function empty() : void;
  /**
   * Retrieve the value of the cookie
   */
  export function get(key : string, fallback?: string) : string;
  /**
   * Retrieve values of several cookies
   */
  export function get(keys : string[], fallback?: string) : any;
  /**
   * Get all currently saved cookies
   */
  export function all() : any;
  /**
   * Test if cookies are enabled
   */
  export function enabled() : boolean;
}
