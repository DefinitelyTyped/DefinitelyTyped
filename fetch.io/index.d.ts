// Type definitions for fetch.io 3.1
// Project: https://github.com/haoxins/fetch.io
// Definitions by: newraina <https://github.com/newraina>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="whatwg-fetch" />

  type TUrl = string;

  type TMethod = 'delete' | 'get' | 'head' | 'options' | 'post' | 'put';

  interface Query {
    [key: string]: number | boolean | string;
  }

  interface Header {
    [key: string]: string;
  }

  interface Options extends RequestInit {

    prefix?: string;

    query?: Query;

    header?: Header;

    beforeRequest?(url: TUrl, body: BodyInit): boolean;

    afterResponse?(res: Response): void;

    afterJSON?(body: any): void;
  }

  declare namespace FetchIo {

    class Request {

      constructor(method: TMethod, url: TUrl, options: Options)

      delete: (url: TUrl) => this;

      get: (url: TUrl) => this;

      head: (url: TUrl) => this;

      options: (url: TUrl) => this;

      post: (url: TUrl) => this;

      put: (url: TUrl) => this;

      config(key: string, value: any): this

      config(opts: {[key: string]: any}): this

      set(key: string, value: any): this

      set(opts: {[key: string]: any}): this

      type(type: 'json' | 'form' | 'urlencoded'): this

      query(object: {[key: string]: any}): this

      send(data: {[key: string]: any}): this

      append(key: string, value: string): this

      then(resolve: (value?: Response) => void, reject?: (reason?: any) => void): Promise<any>

      then<T>(resolve: (value?: Response) => void, reject?: (reason?: any) => void): Promise<T>

      json(strict?: boolean): Promise<any>

      json<T>(strict?: boolean): Promise<T>

      text(): Promise<string>

      text<T>(): Promise<T>
    }

  class Fetch extends Request {
    constructor(options?: Options)
  }
}

export = FetchIo.Fetch;
