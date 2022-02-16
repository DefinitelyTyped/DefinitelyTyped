// Type definitions for Whistle 2.9.2
// Project: https://wproxy.org
// Definitions by: Aven Wu <https://github.com/avwo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import startWhistle from 'whistle';
    startWhistle(options, callback);

 =============================================== */

import { IncomingMessage, ServerResponse, Server } from 'http';
import EventEmitter from 'events';

export type Session = {
  url: string;
};

export type WhistleSecureFilter = ((item: Session, clientIp?: string, filter?: string) => Session) | string;


type WhistleOptions = {
  config?: string;
  cluster?: number;
  server?: Server | EventEmitter;
  debugMode?: boolean;
  mode?: string;
  realPort?: number;
  port?: number | string;
  socksPort?: number | string;
  httpPort?: number | string;
  httpsPort?: number | string;
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
  projectPluginPath?: string;
  customPluginPath?: string;
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
  dnsCache?: number;
  allowDisableShadowRules?: boolean;
  customHandler?: Function;
};

export type Options = WhistleOptions;

export type Result = {

};

export default function(options?: Options, callback?: Function): Result | void;

declare global {
  namespace Whistle {
    type Options = WhistleOptions;
    type SecureFilter = WhistleSecureFilter;

    class PluginRequest extends IncomingMessage {

    }
    
    class PluginResponse extends ServerResponse {
    
    }
    
    class PluginServer extends Server {
    
    }
  }
}
