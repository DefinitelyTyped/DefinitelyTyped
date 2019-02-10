// Type definitions for hapi-auth-bearer-token 6.1
// Project: https://github.com/johnbrett/hapi-auth-bearer-token
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    Request,
    Plugin,
    ResponseToolkit,
    AuthenticationData,
  } from 'hapi';

  type ValidateReturn = AuthenticationData & { isValid: boolean };

  declare module 'hapi' {
    interface ServerAuth {
      strategy(name: string, scheme: 'bearer-access-token', options: BearerToken.SchemaOptions): void;
    }
  }

  declare namespace BearerToken {
    interface SchemaOptions {
      validate: Validate;
      accessTokenName?: string;
      allowQueryToken?: boolean;
      allowCookieToken?: boolean;
      allowMultipleHeaders?: boolean;
      allowChaining?: boolean;
      tokenType?: string;
      unauthorized?: (message: string | null, scheme: string) => any;
    }

    type Validate = (request: Request, token: string, h: ResponseToolkit) => Promise<ValidateReturn> | ValidateReturn;
  }

  declare var BearerToken: Plugin<{}>;

  export = BearerToken;
