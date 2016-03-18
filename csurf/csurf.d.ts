// Type definitions for csurf
// Project: https://www.npmjs.org/package/csurf
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare namespace Express {
  export interface Request {
    csrfToken(): string;
  }
}

declare module "csurf" {
  import express = require('express');

  function csurf(options?: {
    value?: (req: express.Request) => string;
    cookie?: csurf.CookieOptions | boolean;
  }): express.RequestHandler;

  namespace csurf {
    export interface CookieOptions extends express.CookieOptions {
      key: string;
    }
  }

  export = csurf;
}
