// Type definitions for xdomain v0.7.5
// Project: http://jpillora.com/xdomain/
// Definitions by: Dan Chao <http://dchao.co/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare interface XDomainCookies {
  master: string;
  slave: string;
}

declare interface IXDomain {
  /**
   * Will initialize as a master
   *
   * Each of the slaves must be defined as: origin: proxy file
   *
   * The slaves object is used as a list slaves to force one proxy file per origin.
   * @param slaveObj
   */
  slaves (slaveObj: Object): void;
  /**
   * Will initialize as a slave
   *
   * Each of the masters must be defined as: origin: path
   *
   * origin and path are converted to a regular expression by escaping all non-alphanumeric chars, then converting * into .* and finally wrapping it with ^ and $. path can also be a RegExp literal.
   *
   * Requests that do not match both the origin and the path regular expressions will be blocked.
   * @param masterObj
   */
  masters (masterObj: Object): void;
  origin: string;
  /**
   * When true, XDomain will log actions to console
   */
  debug: boolean;
  /**
   * event may be log, warn or timeout. When listening for log and warn events, handler with contain the message as
   * the first parameter. The timeout event fires when an iframe exeeds the xdomain.timeout time limit.
   * @param event
   * @param handler
   */
  on (event: "log"|"warn"|"timeout", handler: (message?: string) => any): void;
  cookies: XDomainCookies;
}

declare var xdomain: IXDomain;

declare module "xdomain" {
  export const xdomain: IXDomain;
}
