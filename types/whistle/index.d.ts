// Type definitions for Whistle 2.9.2
// Project: https://wproxy.org
// Definitions by: Aven Wu <https://github.com/avwo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import startWhistle from 'whistle';
    startWhistle(options, callback);

 =============================================== */

 /// <reference types="node" />

 import { IncomingMessage, ServerResponse, Server } from 'http';
 import { Request, Response, NextFunction } from 'express';
 import { EventEmitter } from 'events';
 import { ParsedUrlQuery } from 'querystring';
 import LRUCache from 'lru-cache';

type StrExt = string | false;

interface WhistleFrame {
  reqId: string;
  frameId: string;
  base64?: string;
  bin?: '' | Buffer;
  text?: string;
  mask?: boolean;
  compressed?: boolean;
  length?: number;
  opcode?: number;
  isClient?: boolean;
  err?: string;
  closed?: true;
  code?: string | number;
  [propName: string]: any;
}

interface WhistleSession {
  id: string;
  url: string;
  useH2?: boolean;
  isHttps?: boolean;
  startTime: number;
  dnsTime?: number;
  requestTime: number;
  responseTime: number;
  endTime?: number;
  req: {
    method?: string;
    httpVersion?: string;
    ip?: string;
    port?: string | number;
    rawHeaderNames?: object;
    headers: object;
    size?: number;
    body?: StrExt;
    base64?: StrExt;
    rawHeaders?: object;
    [propName: string]: any;
  };
  res: {
    ip?: string;
    port?: string | number;
    rawHeaderNames?: object;
    statusCode?: number | string;
    statusMessage?: string;
    headers?: object;
    size?: number;
    body?: StrExt;
    base64?: StrExt;
    rawHeaders?: object;
    [propName: string]: any;
  };
  rules: object;
  rulesHeaders?: object;
  frames?: WhistleFrame[];
  [propName: string]: any;
}

 
type WhistleSecureFilter = ((item: WhistleSession, clientIp?: string, filter?: string) => WhistleSession) | string;

 interface WhistleOptions {
   config?: string;
   cluster?: number;
   server?: Server | EventEmitter;
   debugMode?: boolean;
   mode?: string;
   realPort?: number;
   port?: number | string;
   uiport?: number | string;
   socksPort?: number | string;
   httpPort?: number | string;
   httpsPort?: number | string;
   host?: string;
   addon?: string;
   authKey?: string;
   guestAuthKey?: string;
   reqCacheSize?: number;
   frameCacheSize?: number;
   allowMultipleChoice?: boolean;
   timeout?: number;
   username?: string;
   password?: string;
   guestName?: string;
   guestPassword?: string;
   disableAllRules?: boolean;
   disableAllPlugins?: boolean;
   replaceExistRule?: boolean;
   replaceExistValue?: boolean;
   allowPluginList?: boolean;
   blockPluginList?: boolean;
   webUIPath?: string;
   certDir?: string;
   middleware?: string;
   uiMiddleware?: string;
   cmdName?: string;
   dnsServer?: string;
   projectPluginsPath?: string;
   customPluginsPath?: string;
   pluginsPath?: string;
   inspect?: boolean;
   inspectBrk?: boolean;
   secureFilter?: WhistleSecureFilter;
   encrypted?: boolean;
   sockets?: number;
   dataDirname?: string;
   storage?: string;
   baseDir?: string;
   noGlobalPlugins?: boolean;
   pluginsDataMap?: object;
   globalData?: object;
   localUIHost?: string;
   extra?: string;
   rules?: object;
   values?: object;
   shadowRules?: string;
   dnsCache?: number;
   allowDisableShadowRules?: boolean;
   customHandler?: (req: Request, res: Response, next?: NextFunction) => void;
   pluginHost?: string;
   copy?: string;
   [propName: string]: any;
 }

interface WhistleAuth {
  username?: string;
  password?: string;
  guestName?: string;
  guestPassword?: string;
  guest?: {
    username?: string;
    password?: string;
  };
}

export const enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
  Debug = 'debug',
}

 interface WhistleFile {
  index: number;
  name: string;
  data: string;
  selected: boolean;
}

declare class WhistleStorage {
  constructor(dir: string, filters?: object, disabled?: boolean);
  count(): number;
  existsFile(file: string): false | WhistleFile;
  getFileList(origin: boolean): WhistleFile[];
  writeFile(file: string, data: string): boolean;
  updateFile(file: string, data: string): boolean;
  readFile(file: string): string;
  removeFile(file: string): boolean;
  renameFile(file: string, newFile: string): boolean;
  moveTo(fromName: string, toName: string): boolean;
  setProperty(name: string, value: string): void;
  hasProperty(file: string): boolean;
  setProperties(obj: object): boolean;
  getProperty(name: string): any;
  removeProperty(name: string): void;
}

interface WhistleRuntimeInfo {
  memUsage: NodeJS.MemoryUsage;
  uptime: number;
  cpuPercent: string;
  startupTime: number;
  updateTime: number;
  httpRequests: number;
  allHttpRequests: number;
  wsRequests: number;
  allWsRequests: number;
  tunnelRequests: number;
  totalHttpRequests: number;
  totalWsRequests: number;
  totalTunnelRequests: number;
  totalAllHttpRequests: number;
  totalAllWsRequests: number;
  httpQps: number;
  tunnelQps: number;
  wsQps: number;
  totalQps: number;
  maxQps: number;
  maxAllQps: number;
  maxRss: number;
  maxCpu: number;
}

interface WhistlePluginOptions {
  name: string;
  version: string;
  debugMode?: boolean;
  CUSTOM_CERT_HEADER: string;
  ENABLE_CAPTURE_HEADER: string;
  RULE_VALUE_HEADER: string;
  SNI_VALUE_HEADER: string;
  RULE_URL_HEADER: string;
  MAX_AGE_HEADER: string;
  ETAG_HEADER: string;
  FULL_URL_HEADER: string;
  REAL_URL_HEADER: string;
  RELATIVE_URL_HEADER: string;
  REQ_ID_HEADER: string;
  PIPE_VALUE_HEADER: string;
  CUSTOM_PARSER_HEADER: string;
  STATUS_CODE_HEADER: string;
  PLUGIN_REQUEST_HEADER: string;
  LOCAL_HOST_HEADER: string;
  HOST_VALUE_HEADER: string;
  PROXY_VALUE_HEADER: string;
  PAC_VALUE_HEADER: string;
  METHOD_HEADER: string;
  CLIENT_IP_HEADER: string;
  CLIENT_PORT_HEAD: string;
  UI_REQUEST_HEADER: string;
  GLOBAL_VALUE_HEAD: string;
  SERVER_NAME_HEAD: string;
  COMMON_NAME_HEAD: string;
  CERT_CACHE_INFO: string;
  HOST_IP_HEADER: string;
  REQ_FROM_HEADER: string;
  config: {
    name: string;
    version: string;
    localUIHost: string;
    port: number;
    sockets: number;
    timeout: number;
    baseDir: string;
    uiport: number;
    clientId: string;
    uiHostList: string[];
    pluginHosts: object;
    host: string;
    [propName: string]: any;
  };
  parseUrl(url: string): ParsedUrlQuery;
  wsParser: {
    getExtensions(res: any, isServer?: boolean): any;
    getSender(socket: any, toServer?: boolean): any;
    getReceiver(res: any, fromServer?: boolean, maxPayload?: number): any;
  };
  wrapWsReader(socket?: any, maxPayload?: number): any;
  wrapWsWriter(socket?: any): any;
  shortName: string;
  Storage: WhistleStorage;
  localStorage: WhistleStorage;
  storage: WhistleStorage;
  baseUrl: string;
  LRU: LRUCache<string, any>;
  getValue(key: string, cb: (value: string) => void): void;
  getCert(domain: string, cb: (cert: any) => void): void;
  getRootCA(cb: (cert: any) => void): void;
  getHttpsStatus(cb: (status: any) => void): void;
  getRuntimeInfo(cb: (info: any) => void): void;
  updateRules(): void;
  compose(options: any, cb: (err: any, data?: any) => void): void;
  getRules(cb: (rules: any) => void): void;
  getValues(cb: (values: any) => void): void;
  getCustomCertsInfo(cb: (certs: any) => void): void;
  isActive(cb: (active: boolean) => void): void;
  ctx: any;
  connect(opts: any, cb?: Function): any;
  request(opts: any, cb?: Function): any;
  [propName: string]: any;
}


type LogFn = (msg: Object, ...restMsg: Object[]) => void;
 
interface WhistleResult {
logger: {
  log: (msg: Object, level?: Level) => void;
  fatal: LogFn;
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
};
setAuth: (auth: WhistleAuth) => void;
setUIHost: (host: string | string[]) => void;
setPluginUIHost: (pluginName: string, host: string | string[]) => void;
getRuntimeInfo: () => WhistleRuntimeInfo;
getShadowRules:() => string;
setShadowRules:(shadowRules: string) => void;
[propName: string]: any;
}

export default function(options?: WhistleOptions, callback?: Function): WhistleResult;

type WhistleLevel = Level;

type GetSession = (cb: (session: WhistleSession | '') => void) => void;
type GetFrame = (cb: (Frames: WhistleFrame[] | '') => void) => void;
type SetRules = (rules: string) => boolean;
type PassThrough = (uri?: any, trailers?: any) => void;

interface WriteHead {
  (code: string | number, msg?: string, headers?: any): void;
  (code: string | number, headers?: any): void;
}

interface RequestFn {
  (uri: any, cb?: (res: any) => void, opts?: any): any;
  (uri: any, opts?: any, cb?: (res: any) => void): any;
}
declare global {
  namespace Whistle {
    type Options = WhistleOptions;
    type SecureFilter = WhistleSecureFilter;
    type Session = WhistleSession;
    type RuntimeInfo = WhistleRuntimeInfo;
    type Result = WhistleResult;
    type Auth = WhistleAuth;
    type Level = WhistleLevel;
    type Frame = WhistleFrame;
    type File = WhistleFile;
    type Storage = WhistleStorage;
    type PluginOptions = WhistlePluginOptions;

    class PluginRequest extends IncomingMessage {
      clientIp: string;
      isUIRequest: boolean;
      fullUrl: string;
      isHttps: boolean;
      fromTunnel: boolean;
      fromComposer: boolean;
      isHttpsServer?: boolean;
      isSNI: boolean;
      getReqSession: GetSession;
      getSession: GetSession;
      getFrames: GetFrame;
      Storage: WhistleStorage;
      localStorage: WhistleStorage;
      sessionStorage: {
        set(key: string, value: any): any;
        get(key: string): any;
        remove(key: string): any;
      }
      originalReq: {
        id: string;
        clientIp: string;
        isH2: boolean;
        existsCustomCert: boolean;
        isUIRequest: boolean;
        enableCapture: boolean;
        isFromPlugin: boolean;
        ruleValue: string;
        ruleUrl: string;
        pipeValue: string;
        sniValue: string;
        hostValue: string;
        fullUrl: string;
        url: string;
        isHttps: boolean;
        remoteAddress: string;
        remotePort: number;
        fromTunnel: boolean;
        fromComposer: boolean;
        servername: string;
        certCacheName: string;
        certCacheTime: number;
        isSNI: boolean;
        commonName: string;
        realUrl: string;
        relativeUrl: string;
        method: string;
        clientPort: string;
        globalValue: string;
        proxyValue: string;
        pacValue: string;
        pluginVars: string[];
        globalPluginVars: string[];
        headers: any;
        isRexExp?: boolean;
        pattern?: string;
        customParser: boolean | '';
      };
      originalRes: {
        serverIp: string;
        statusCode: string;
      };
      setReqRules: SetRules;
      setResRules: SetRules;
      writeHead: WriteHead;
      request: RequestFn;
      connect: RequestFn;
      passThrough: PassThrough;
      setHtml(html: string): void;
      setUrl(url: string): void;
      setHeader(key: string, value: string): void;
      setRedirect(url: string): void;;
      setLogin(login: boolean): void;
    }
    
    class PluginResponse extends ServerResponse {
      setReqRules: SetRules;
      setResRules: SetRules;
      disableTrailers?: boolean;
    }
    class PluginUIRequest extends IncomingMessage {
      clientIp: string;
      Storage: WhistleStorage;
      localStorage: WhistleStorage;
    }

    class PluginUIResponse extends ServerResponse {}
    
    type PluginHook = (server: Server, options?: PluginOptions) => void;
    type PluginUIHook = (server: Server, options?: PluginOptions) => void;

    interface PluginHooks {
      uiServer?: PluginUIHook;
      rulesServer?: PluginHook;
      tunnelRulesServer?: PluginHook;
      server?: PluginHook;
      resRulesServer?: PluginHook;
      statsServer?: PluginHook;
      resStatsServer?: PluginHook;
      reqRead?: PluginHook;
      reqWrite?: PluginHook;
      resRead?: PluginHook;
      resWrite?: PluginHook;
      wsReqRead?: PluginHook;
      wsReqWrite?: PluginHook;
      wsResRead?: PluginHook;
      wsResWrite?: PluginHook;
      tunnelReqRead?: PluginHook;
      tunnelReqWrite?: PluginHook;
      tunnelResRead?: PluginHook;
      tunnelResWrite?: PluginHook;
    }
  }
}
 