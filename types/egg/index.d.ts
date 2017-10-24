// Type definitions for Egg 1.x
// Project: https://github.com/eggjs/egg
// Definitions by: Eward Song <https://github.com/sheperdwind>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as accepts from 'accepts';
import * as KoaApplication from 'koa';
import * as KoaRouter from 'koa-router';
import { Readable } from 'stream';
/**
 * BaseContextClass is a base class that can be extended,
 * it's instantiated in context level,
 * {@link Helper}, {@link Service} is extending it.
 */
declare class BaseContextClass { // tslint:disable-line
  /**
   * request context
   */
  ctx: Context;

  /**
   * Application
   */
  app: Application;

  /**
   * Application config object
   */
  config: EggAppConfig;

  /**
   * service
   */
  service: IService;

  constructor(ctx: Context);
}

export interface Logger {
  info(info: string, ...args: string[]): void;
  warn(info: string, ...args: string[]): void;
  debug(info: string, ...args: string[]): void;
  error(info: string, ...args: string[]): void;
}

interface Request extends KoaApplication.Request { // tslint:disable-line
  /**
   * detect if response should be json
   * 1. url path ends with `.json`
   * 2. response type is set to json
   * 3. detect by request accept header
   *
   * @since 1.0.0
   */
  acceptJSON: boolean;

  /**
   * Request remote IPv4 address
   * @example
   * ```js
   * this.request.ip
   * => '127.0.0.1'
   * => '111.10.2.1'
   * ```
   */
  ip: string;

  /**
   * Get all pass through ip addresses from the request.
   * Enable only on `app.config.proxy = true`
   *
   * @example
   * ```js
   * this.request.ips
   * => ['100.23.1.2', '201.10.10.2']
   * ```
   */
  ips: string[];

  protocol: string;

  /**
   * get params pass by querystring, all value are Array type. {@link Request#query}
   * @example
   * ```js
   * GET http://127.0.0.1:7001?a=b&a=c&o[foo]=bar&b[]=1&b[]=2&e=val
   * this.queries
   * =>
   * {
   *   "a": ["b", "c"],
   *   "o[foo]": ["bar"],
   *   "b[]": ["1", "2"],
   *   "e": ["val"]
   * }
   * ```
   */
  queries: { [key: string]: string[] };

  /**
   * get params pass by querystring, all value are String type.
   * @example
   * ```js
   * GET http://127.0.0.1:7001?name=Foo&age=20&age=21
   * this.query
   * => { 'name': 'Foo', 'age': 20 }
   *
   * GET http://127.0.0.1:7001?a=b&a=c&o[foo]=bar&b[]=1&b[]=2&e=val
   * this.query
   * =>
   * {
   *   "a": "b",
   *   "o[foo]": "bar",
   *   "b[]": "1",
   *   "e": "val"
   * }
   * ```
   */
  query: { [key: string]: string };
}

interface Response extends KoaApplication.Response { // tslint:disable-line
  /**
   * read response real status code.
   *
   * e.g.: Using 302 status redirect to the global error page
   * instead of show current 500 status page.
   * And access log should save 500 not 302,
   * then the `realStatus` can help us find out the real status code.
   */
  realStatus: number;
}

interface ContextView { // tslint:disable-line
  /**
   * Render a file by view engine
   * @param name - the file path based on root
   * @param [locals] - data used by template
   * @param [options] - view options, you can use `options.viewEngine` to specify view engine
   * @return result - return a promise with a render result
   */
  render(name: string, locals: any, options?: any): Promise<string>;

  /**
   * Render a template string by view engine
   * @param tpl - template string
   * @param [locals] - data used by template
   * @param [options] - view options, you can use `options.viewEngine` to specify view engine
   * @return result - return a promise with a render result
   */
  renderString(name: string, locals: any, options?: any): Promise<string>;
}

export type LoggerLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'NONE';

export interface EggAppConfig {
  workerStartTimeout: number;
  baseDir: string;
  bodyParser: {
    /**
     * enable bodyParser or not
     * @default true
     */
    enable: boolean;
    /**
     * body encoding config
     * @default utf8
     */
    encoding: string;
    /**
     * form body size limit
     * @default 100kb
     */
    formLimit: string;
    /**
     * json body size limit
     * @default 100kb
     */
    jsonLimit: string;
    /** json body strict mode, if set strict value true, then only receive object and array json body */
    strict: true;
    queryString: {
      /**
       * from item array length limit
       * @default 100
       */
      arrayLimit: number;
      /**
       * json value deep lenght
       * @default 5
       */
      depth: number;
      /**
       * paramter number limit
       * @default 1000
       */
      parameterLimit: number;
    };
  };

  logger: {
    /** directory of log files */
    dir: string;
    /**
     * log file encloding
     * @default utf8
     */
    encoding: string;
    env: string;
    /**
     * default log level, could be: DEBUG, INFO, WARN, ERROR or NONE
     * @default INFO in production
     */
    level: LoggerLevel;
    /**
     * log level of stdout
     * @default INFO in local serverEnv, WARN in unittest, NONE elsewise
     */
    consoleLevel: LoggerLevel;
    /** log as JSON or not, defaults to false */
    outputJSON: boolean;
    /** if enabled, flush logs to disk at a certain frequency to improve performance, defaults to true */
    buffer: boolean;
    appLogName: string;
    /** file name of coreLogger */
    coreLogName: string;
    /** file name of agent worker log */
    agentLogName: string;
    /** file name of errorLogger */
    errorLogName: string;
    /** custom config of coreLogger */
    coreLogger: any;
  };

  httpclient: {
    keepAlive: boolean;
    freeSocketKeepAliveTimeout: number;
    timeout: number;
    maxSockets: number;
    maxFreeSockets: number;
    enableDNSCache: boolean;
  };

  development: {
    /**
     * dirs needed watch, when files under these change, application will reload, use relative path
     */
    watchDirs: string[];
    /**
     * dirs don't need watch, including subdirectories, use relative path
     */
    ignoreDirs: string[];
    /**
     * don't wait all plugins ready, default is true.
     */
    fastReady: boolean;
  };
  /**
   * It will ignore special keys when dumpConfig
   */
  dump: {
    ignore: Set<string>;
  };

  /**
   * The environment of egg
   */
  env: string;

  /**
   * The current HOME directory
   */
  HOME: string;

  hostHeaders: string;

  /**
   * I18n options
   */
  i18n: {
    /**
     * default value EN_US
     */
    defaultLocale: string;
    /**
     * i18n resource file dir, not recommend to change default value
     */
    dir: string;
    /**
     * custom the locale value field, default `query.locale`, you can modify this config, such as `query.lang`
     */
    queryField: string;
    /**
     * The locale value key in the cookie, default is locale.
     */
    cookieField: string;
    /**
     * Locale cookie expire time, default `1y`, If pass number value, the unit will be ms
     */
    cookieMaxAge: string | number;
  };

  /**
   * Detect request' ip from specified headers, not case-sensitive. Only worked when config.proxy set to true.
   */
  ipHeaders: string;

  jsonp: {
    /**
     * callback method name's max length
     * @default 50
     */
    limit: number;
    /**
     * jsonp callback method key
     * @default `_callback`
     */
    callback: string;
    /** enable csrf check or not. default to false */
    csrf: boolean;
    /** referrer white list */
    whiteList: string | RegExp | Array<string | RegExp>;
  };

  /**
   * The key that signing cookies. It can contain multiple keys seperated by .
   */
  keys: string;

  /**
   * The name of the application
   */
  name: string;

  /**
   * package.json
   */
  pkg: any;

  rundir: string;

  security: {
    domainWhiteList: string[];
    protocolWhiteList: string[];
    defaultMiddleware: string;
    csrf: any;
    xframe: {
      enable: boolean;
      value: 'SAMEORIGIN' | 'DENY' | 'ALLOW-FROM';
    };
    hsts: any;
    methodnoallow: { enable: boolean };
    noopen: { enable: boolean; }
    xssProtection: any;
    csp: any;
  };

  siteFile: any;

  static: any;

  view: any;

  watcher: any;
}

export interface Router extends KoaRouter {
  /**
   * restful router api
   */
  resources(name: string, prefix: string, middleware: any): Router;

  /**
   * @param name - Router name
   * @param params - more parameters
   * @example
   * ```js
   * router.url('edit_post', { id: 1, name: 'foo', page: 2 })
   * => /posts/1/edit?name=foo&page=2
   * router.url('posts', { name: 'foo&1', page: 2 })
   * => /posts?name=foo%261&page=2
   * ```
   * @return url by path name and query params.
   * @since 1.0.0
   */
  url(name: string, params: any): any;
}

declare interface EggApplication extends KoaApplication { // tslint:disable-line
  /**
   * The current directory of application
   */
  baseDir: string;

  /**
   * The configuration of application
   */
  config: EggAppConfig;

  /**
   * app.env delegate app.config.env
   */
  env: string;

  /**
   * core logger for framework and plugins, log file is $HOME/logs/{appname}/egg-web
   */
  coreLogger: Logger;

  /**
   * Alias to https://npmjs.com/package/depd
   */
  deprecate: any;

  /**
   * HttpClient instance
   */
  httpclient: any;

  /**
   * The loader instance, the default class is EggLoader. If you want define
   */
  loader: any;

  /**
   * Logger for Application, wrapping app.coreLogger with context infomation
   *
   * @since 1.0.0
   * @example
   * ```js
   * this.logger.info('some request data: %j', this.request.body);
   * this.logger.warn('WARNING!!!!');
   * ```
   */
  logger: Logger;

  /**
   * All loggers contain logger, coreLogger and customLogger
   */
  loggers: { [loggerName: string]: Logger };

  /**
   * messenger instance
   */
  messenger: any;

  plugins: any;

  /**
   * get router
   */
  router: Router;

  Service: Service;

  /**
   * Whether `application` or `agent`
   */
  type: string;

  /**
   * create a singleton instance
   */
  addSingleton(name: string, create: any): void;

  /**
   * Excute scope after loaded and before app start
   */
  beforeStart(scrope: () => void): void;

  /**
   * Close all, it wil close
   * - callbacks registered by beforeClose
   * - emit `close` event
   * - remove add listeners
   *
   * If error is thrown when it's closing, the promise will reject.
   * It will also reject after following call.
   * @return promise
   * @since 1.0.0
   */
  close(): Promise<any>;

  /**
   * http request helper base on httpclient, it will auto save httpclient log.
   * Keep the same api with httpclient.request(url, args).
   * See https://github.com/node-modules/urllib#api-doc for more details.
   */
  curl(url: string, opt: any): Promise<any>;

  /**
   * Get logger by name, it's equal to app.loggers['name'], but you can extend it with your own logical
   */
  getLogger(name: string): Logger;

  /**
   * print the infomation when console.log(app)
   */
  inspect(): any;

  /**
   * Alias to Router#url
   */
  url(name: string, params: any): any;
}

export interface Application extends EggApplication {
  /**
   * global locals for view
   * @see Context#locals
   */
  locals: any;

  /**
   * HTTP get method
   */
  get(path: string, fn: string): void;
  get(path: string, ...middleware: any[]): void;

  /**
   * HTTP post method
   */
  post(path: string, fn: string): void;
  post(path: string, ...middleware: any[]): void;

  /**
   * HTTP put method
   */
  put(path: string, fn: string): void;
  put(path: string, ...middleware: any[]): void;

  /**
   * HTTP delete method
   */
  delete(path: string, fn: string): void;
  delete(path: string, ...middleware: any[]): void;

  /**
   * restful router api
   */
  resources(name: string, prefix: string, fn: string): Router;

  redirect(path: string, redirectPath: string): void;

  controller: IController;

  Controller: Controller;
}

interface FileStream extends Readable { // tslint:disable-line
  fields: any;
}

export interface Context extends KoaApplication.Context {
  app: Application;

  service: IService;

  request: Request;

  response: Response;

  /**
   * Resource Parameters
   * @example
   * ##### ctx.params.id {string}
   *
   * `GET /api/users/1` => `'1'`
   *
   * ##### ctx.params.ids {Array<String>}
   *
   * `GET /api/users/1,2,3` => `['1', '2', '3']`
   *
   * ##### ctx.params.fields {Array<String>}
   *
   * Expect request return data fields, for example
   * `GET /api/users/1?fields=name,title` => `['name', 'title']`.
   *
   * ##### ctx.params.data {Object}
   *
   * Tht request data object
   *
   * ##### ctx.params.page {Number}
   *
   * Page number, `GET /api/users?page=10` => `10`
   *
   * ##### ctx.params.per_page {Number}
   *
   * The number of every page, `GET /api/users?per_page=20` => `20`
   */
  params: any;

  /**
   * @see Request#accept
   */
  queries: { [key: string]: string[] };

  /**
   * @see Request#accept
   */
  accept: accepts.Accepts;

  /**
   * @see Request#acceptJSON
   */
  acceptJSON: boolean;

  /**
   * @see Request#ip
   */
  ip: string;

  /**
   * @see Response#realStatus
   */
  realStatus: number;

  /**
   * 设置返回资源对象
   * set the ctx.body.data value
   *
   * @example
   * ```js
   * ctx.data = {
   *   id: 1,
   *   name: 'fengmk2'
   * };
   * ```
   *
   * will get responce
   *
   * ```js
   * HTTP/1.1 200 OK
   *
   * {
   *   "data": {
   *     "id": 1,
   *     "name": "fengmk2"
   *   }
   * }
   * ```
   */
  data: any;

  /**
   * set ctx.body.meta value
   *
   * @example
   * ```js
   * ctx.meta = {
   *   count: 100
   * };
   * ```
   * will get responce
   *
   * ```js
   * HTTP/1.1 200 OK
   *
   * {
   *   "meta": {
   *     "count": 100
   *   }
   * }
   * ```
   */
  meta: any;

  /**
   * locals is an object for view, you can use `app.locals` and `ctx.locals` to set variables,
   * which will be used as data when view is rendering.
   * The difference between `app.locals` and `ctx.locals` is the context level, `app.locals` is global level, and `ctx.locals` is request level. when you get `ctx.locals`, it will merge `app.locals`.
   *
   * when you set locals, only object is available
   *
   * ```js
   * this.locals = {
   *   a: 1
   * };
   * this.locals = {
   *   b: 1
   * };
   * this.locals.c = 1;
   * console.log(this.locals);
   * {
   *   a: 1,
   *   b: 1,
   *   c: 1,
   * };
   * ```
   *
   * `ctx.locals` has cache, it only merges `app.locals` once in one request.
   *
   */
  locals: any;

  /**
   * alias to {@link locals}, compatible with koa that use this variable
   */
  state: any;

  /**
   * Logger for Application, wrapping app.coreLogger with context infomation
   *
   * @since 1.0.0
   * @example
   * ```js
   * this.logger.info('some request data: %j', this.request.body);
   * this.logger.warn('WARNING!!!!');
   * ```
   */
  logger: Logger;

  /**
   * Request start time
   */
  starttime: number;

  /**
   * View instance that is created every request
   */
  view: ContextView;

  /**
   * http request helper base on httpclient, it will auto save httpclient log.
   * Keep the same api with httpclient.request(url, args).
   * See https://github.com/node-modules/urllib#api-doc for more details.
   */
  curl(url: string, opt: any): Promise<any>;

  /**
   * Render a file by view engine
   * @param name - the file path based on root
   * @param [locals] - data used by template
   * @param [options] - view options, you can use `options.viewEngine` to specify view engine
   * @return result - return a promise with a render result
   */
  render(name: string, locals: any, options?: any): Promise<string>;

  /**
   * Render a template string by view engine
   * @param tpl - template string
   * @param [locals] - data used by template
   * @param [options] - view options, you can use `options.viewEngine` to specify view engine
   * @return result - return a promise with a render result
   */
  renderString(name: string, locals: any, options?: any): Promise<string>;

  __(key: string, ...values: string[]): string;
  gettext(key: string, ...values: string[]): string;

  /**
   * get upload file stream
   * @example
   * ```js
   * const stream = yield this.getFileStream();
   * // get other fields
   * console.log(stream.fields);
   * ```
   * @return stream
   * @since 1.0.0
   */
  getFileStream(): Promise<FileStream>;

  /**
   * @see Responce.redirect
   */
  redirect(url: string, alt?: string): void;
}

export class Controller extends BaseContextClass { }

export class Service extends BaseContextClass { }

/**
 * The empty interface `IService` is an placehoder, for egg
 * to auto injection service to ctx.service
 *
 * @example
 *
 * import { Service } from 'egg';
 * class FooService extends Service {
 *   async bar() {}
 * }
 *
 * declare module 'egg' {
 *   export interface IService {
 *     foo: FooService;
 *   }
 * }
 *
 * Now I can get ctx.service.foo at controller and other service file.
 */
export interface IService { }// tslint:disable-line

export interface IController { } // tslint:disable-line
