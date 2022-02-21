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
 import {
   WhistleRuntimeInfo,
   WhistleFile,
   WhistleStorage,
   WhistlePluginOptions,
} from './plugin';

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
   middlewares?: string;
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
      storage: WhistleStorage;
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
    }
    
    class PluginResponse extends ServerResponse {
      
    }
    
    class PluginServer extends Server {
    
    }

    class PluginUIRequest extends IncomingMessage {

  }
  
  class PluginUIResponse extends ServerResponse {
  
  }
  
  class PluginUIServer extends Server {
  
  }

  type PluginHook = () => void;

  interface Hooks {

  }
  }
}
 