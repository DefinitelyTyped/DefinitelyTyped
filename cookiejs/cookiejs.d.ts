// Type definitions for cookie.js v1.0.0
// Project: https://github.com/js-coder/cookie.js
// Definitions by: Boltmade <https://github.com/Boltmade>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function cookie(key : string, fallback?: string) : string;
declare function cookie(keys : string[], fallback?: string) : string;

declare module cookie {
  export function set(key : string, value : string, options? : any) : void;
  export function set(obj : any, options? : any) : void;
  export function remove(key : string) : void;
  export function remove(keys : string[]) : void;
  export function remove(...args : string[]) : void;
  export function empty() : void;
  export function get(key : string, fallback?: string) : string;
  export function get(keys : string[], fallback?: string) : string;
  export function all() : any;
  export function enabled() : boolean;
}

declare module "cookiejs" {
  export = cookie;
}
