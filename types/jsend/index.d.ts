// Type definitions for jsend 1.0.2
// Project: https://github.com/Prestaul/jsend
// Definitions by: Federico Caselli <https://github.com/CaselIT> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Express {
  export interface Response {
    jsend: jsend.jsendExpress;
  }
}

declare namespace jsend {
  interface JSendObject {
    status: string;
    code?: number;
    data?: any;
    message?: string;
  }

  interface jsendCore {
    success(data: Object): JSendObject;
    fail(data: Object): JSendObject;
    error(message: string | { message: string, code?: number, data?: Object }): JSendObject;
  }

  interface jsendExpress extends jsendCore {
    (err: string | Object, json?: Object): void
  }

  interface jsend extends jsendCore {
    isValid(json: Object): boolean;
    forward(json: Object, done: (err: any, data: any) => any):void;
    fromArguments(err: string | Object, json?: Object): JSendObject;
    middleware(req: any, res: any, next: Function): any;
  }

  interface jsendExport extends jsend {
    (config?: { strict: boolean }, host?: Object): jsend
  }
  var jsend: jsendExport;
}

declare module "jsend" {
  export = jsend.jsend;
}

