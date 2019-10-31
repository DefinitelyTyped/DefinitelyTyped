import { EventEmitter } from 'events';

export class Cookie {
  static fromString(content: string): Cookie;

  name: string;
  value: string;
  expires: string | number;
  path?: string;
  domain?: string;
  httponly?: boolean;

  constructor(
    name: string,
    value: string,
    expires: string | number,
    path?: string,
    domain?: string,
    httponly?: boolean,
  );

  toOutboundString(): string;
  toString(includeHeader?: boolean): string;
  isExpired(): boolean;
  matchDomain(domain: string): boolean;
  matchPath(path: string): boolean;
}

export default class CookieJar extends EventEmitter {
  cookies: Cookie[];

  add(
    name: string,
    value: string,
    expiry: string | number,
    path?: string,
    domain?: string,
    httponly?: boolean,
    callback?: (error?: Error, cookie?: Cookie) => void,
  ): this;
  remove(
    name?: string,
    domain?: string,
    callback?: (error?: Error, cookiesRemoved?: Cookie[]) => void,
  ): Cookie[];
  get(name?: string, domain?: string, callback?: (error?: Error, cookies?: Cookie[]) => void): Cookie[];
  getAsHeader(name?: string, domain?: string, callback?: (error?: Error, cookies?: Cookie[]) => void): string[];
  addFromHeaders(headers: string | string[], callback?: (error?: Error) => void): this;
  toString(): string;
}
