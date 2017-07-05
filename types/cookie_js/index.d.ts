// Type definitions for cookie_js v1.2.2
// Project: https://github.com/florian/cookie.js
// Definitions by: slawiko <https://github.com/slawiko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'cookie_js' {
  export = cookie;
}

/**
 * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/16025#issuecomment-295784660
 */
declare module 'cookiejs' {
  export = cookie;
}

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
   * Remove cookies that were set with custom options (e.g. specifing domain or path)
   */
  export function removeSpecific(key : string, options?: any) : void;
  export function removeSpecific(keys : string[], options?: any): void;
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
