// Type definitions for yhsd-api 1.0.6
// Project: https://github.com/yeezon/yhsd-api-node
// Definitions by: Qing Ray <https://github.com/yeezon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1.6

interface AuthOption {
  appKey: string;
  appSecret: string;
  callbackUrl?: string;
  redirectUrl?: string;
  scope?: string[];
  private: boolean;
}

export declare class Auth {
  constructor(options: AuthOption)

  verifyHmac(queryObj: object): boolean

  getAuthorizeUrl(shopKey: string, state: string): string

  getToken(code: string, callback: (err: Error, token: string) => any)

  getTokenAsync(code?: string): Promise<string>
}

export declare class Api {
  constructor(token: string)

  get(path: string, query: object, callback: (...args: any[]) => any);

  getAsync(path: string, query: object): Promise<object>

  put(path: string, body: object, callback: (...args: any[]) => any);

  putAsync(path: string, body: object): Promise<object>

  post(path: string, body: object, callback: (...args: any[]) => any);

  postAsync(path: string, body: object): Promise<object>

  delete(path: string, callback: (...args: any[]) => any);

  deleteAsync(path: string): Promise<object>

  httpRequest(method: string, path: string, params: object, callback: (err: Error, data: object) => any)

  httpRequestAsync(method: string, path: string, params: object): Promise<object>
}

export declare class WebHook {
  constructor(token: string)

  verifyHmac(hmac: string, bodyData: string): boolean
}
