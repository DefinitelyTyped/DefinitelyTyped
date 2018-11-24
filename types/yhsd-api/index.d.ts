// Type definitions for yhsd-api 1.0
// Project: https://github.com/yeezon/yhsd-api-node
// Definitions by: Qing Ray <https://github.com/yeezon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface AuthOption {
  appKey: string;
  appSecret: string;
  callbackUrl?: string;
  redirectUrl?: string;
  scope?: string[];
  private: boolean;
}

export = YhsdApi;

declare namespace YhsdApi {
  class Auth {
    constructor(options: AuthOption)

    verifyHmac(queryObj: object): boolean;

    getAuthorizeUrl(shopKey: string, state: string): string;

    getToken(code: string, callback: (err: Error, token: string) => any): string;

    getTokenAsync(code?: string): Promise<string>;
  }

  class Api {
    constructor(token: string);

    get(path: string, query: object, callback: (...args: any[]) => any): void;

    getAsync(path: string, query: object): Promise<object>;

    put(path: string, body: object, callback: (...args: any[]) => any): void;

    putAsync(path: string, body: object): Promise<object>;

    post(path: string, body: object, callback: (...args: any[]) => any): void;

    postAsync(path: string, body: object): Promise<object>;

    delete(path: string, callback: (...args: any[]) => any): void;

    deleteAsync(path: string): Promise<object>;

    httpRequest(method: string, path: string, params: object, callback: (err: Error, data: object) => any): void;

    httpRequestAsync(method: string, path: string, params: object): Promise<object>;
  }

  class WebHook {
    constructor(token: string);

    verifyHmac(hmac: string, bodyData: string): boolean;
  }
}
