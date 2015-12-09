// Type definitions for jwt-simple v0.2.0
// Project: https://github.com/hokaccha/node-jwt-simple
// Definitions by: Ken Fukuyama <https://github.com/kenfdev>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module "jwt-simple" {
  /**
   * Decode jwt
   * @param token
   * @param key
   * @param noVerify
   * @api public
   */
  export function decode(token:any, key:string, noVerify?:boolean):any;
  /**
   * Encode jwt
   * @param payload
   * @param key
   * @param algorithm default is HS256
   * @api public
   */
  export function encode(payload:any, key:string, algorithm?:string):string;
}
