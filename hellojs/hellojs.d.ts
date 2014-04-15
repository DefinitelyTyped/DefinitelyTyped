// Type definitions for hello.js 0.2.1 
// Project: http://knockoutjs.com
// Definitions by: Pavel Zika <https://github.com/PavelPZ>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface HelloJSLoginOptions {
  redirect_uri?: string;
  display?: string;
  scope?: string;
  response_type?: string;
  force?: boolean;
  oauth_proxy?: string;
  timeout?: number;
  default_service?: string;
}

interface HelloJSEventArgument {
  network: string;
  authResponse?: any;
}

interface HelloJSStatic {
  init(serviceAppIds: { [id: string]: string; }, defaultOptions?: HelloJSLoginOptions);
  login(network: string, option?: HelloJSLoginOptions, callback?: () => void);
  logout(network: string, callback?: () => void);
  on(eventName: string, event: (auth: HelloJSEventArgument) => void): HelloJSStatic;
  off(eventName: string, event: (auth: HelloJSEventArgument) => void): HelloJSStatic;
  getAuthResponse(network: string): any;
  service(network: string): any;
  settings: HelloJSLoginOptions;
  (network: string): HelloJSStaticNamed;
  init(servicesDef: { [id: string]: HelloJSServiceDef; });
}

interface HelloJSStaticNamed {
  login(option?: HelloJSLoginOptions, callback?: () => void);
  logout(callback?: () => void);
  getAuthResponse(): any;
}

interface HelloJSOAuthDef {
  version: number;
  auth: string;
  request: string;
  token: string;
}

interface HelloJSServiceDef {
  name: string;
  oauth: HelloJSOAuthDef;
  scope?: { [id: string]: string; };
  scope_delim?: string;
  autorefresh?: boolean;
  base?: string;
  root?: string;
  get?: { [id: string]: any; }
  post?: { [id: string]: any; }
  del?: { [id: string]: string; }
  put?: { [id: string]: any; }
  wrap?: { [id: string]: (par: any) => void; }
  xhr?: (par: any) => void;
  jsonp?: (par: any) => void;
  form?: (par: any) => void;
  api?: (...par: any[]) => void;
}

declare var hello: HelloJSStatic;
