// Type definitions for fxn 0.0.4
// Project: https://github.com/poly/fxn
// Definitions by: Adam Charron <https://github.com/charrondev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';

export interface HttpHeaders {
  [item: string]: string;
}

export abstract class Controller {

  protected _method: HttpMethod;
  protected _path: string;
  protected _requestHeaders: Object;
  protected _headers: Object;
  protected _status: number;
  protected _responder: Function;
  protected _securityPolicies: Object;
  protected params: any;

  constructor(path: string, method: string, requestHeaders: Object, params: Object, responder: Function);
  convertMethod(method: HttpMethod, id: number): string;
  run(): void;
  notImplemented(msg: string, details: Object): boolean;
  before(): void;
  after(): void;
  get(): void;
  put(): void;
  post(): void;
  del(): void;
  options(): void;
  index(): void;
  show(): void;
  update(): void;
  create(): void;
  destroy(): void;
  status(value: number): boolean;
  setHeaders(): HttpHeaders;
  setHeader(key: string, value: string): string;
  appendHeader(key: string, value: string): string;
  getHeader(key: string, value: string): string;
  code(code: number): number;
  getStatus(): number;
  render(data: Buffer | String | Object): void;
  allowOrigin(value: string): this;
  securityPolicy(directive: string, src: string): string;
  redirect(location: string): void;
}

export abstract class Daemon {
  constructor(string: string);
}

export abstract class Application {
  constructor(string: string);
  send: Function;
}

export abstract class Router {}
export abstract class Scheduler {}
