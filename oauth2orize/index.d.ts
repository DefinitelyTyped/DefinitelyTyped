// Type definitions for oauth2orize v1.5.1
// Project: https://github.com/jaredhanson/oauth2orize/
// Definitions by: Wonshik Kim <https://github.com/wokim/>, Kei Son <https://github.com/heycalmdown>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

import * as http from "http";

declare module "oauth2orize" {

  interface ServerOptions {
    store: any;
    loadTransaction: boolean;
  }
  export function createServer(options?: ServerOptions): OAuth2Server;

  export interface AuthorizeOptions {
    idLength?: number;
    sessionKey?: string;
  }

  export interface ErrorHandlerOptions {
    mode?: string;
  }

  export class OAuth2Server {
    exchange(fn: ExchangeFunction): OAuth2Server;
    exchange(type: string, fn: ExchangeFunction): OAuth2Server;
    // Parses requests to obtain authorization
    authorize(options: AuthorizeOptions, validate: (clientId: string, redirectURI: string, validated: (err: Error, client: any, redirectURI: string) => void) => void): Function;
    authorize(validate: (clientId: string, redirectURI: string, validated: (err: Error | null, client?: any, redirectURI?: string) => void) => void): Function;
    //authorization(options: AuthorizeOptions, validate: (clientId: string, redirectURI: string, validated: (err: Error, client: any, redirectURI: string) => void) => void): Function;
    //authorization(validate: (clientId: string, redirectURI: string, validated: (err: Error, client: any, redirectURI: string) => void) => void): Function;
    token(options?: any): (req: http.IncomingMessage, res: http.ServerResponse, next: any) => void;
    errorHandler(options?: any): (err: Error, req: http.IncomingMessage, res: http.ServerResponse, next: any) => void;
    serializeClient(fn: (client: any, done: (err: Error | null, id: string) => void) => void): void;
    serializeClient(client: any, done: (err: Error | null, id: string) => void): void;
    deserializeClient(fn: (id: string, done: (err: Error | null, client?: any | boolean) => void) => void): void;
    deserializeClient(obj: any, done: (err: Error | null, client?: any | boolean) => void): void;
  }

  interface ExchangeFunction extends Function {
    (req: http.ServerRequest, res: http.ServerResponse, next: Function): void;
  }

  export module exchange {
    interface Options {
      // The 'user' property of `req` holds the authenticated user.  In the case
      // of the token endpoint, the property will contain the OAuth 2.0 client.
      userProperty?: string;

      // For maximum flexibility, multiple scope spearators can optionally be
      // allowed.  This allows the server to accept clients that separate scope
      // with either space or comma (' ', ',').  This violates the specification,
      // but achieves compatibility with existing client libraries that are already
      // deployed.
      scopeSeparator?: string;
    }

    interface IssuedFunction extends Function {
      (err: Error | null, accessToken?: string | boolean, refreshToken?: string, params?: any): void;
    }

    interface ClientCredentialFunction extends Function {
      (req: http.IncomingMessage, res: http.ServerResponse, next: Function): void;
    }

    interface RefreshTokenFunction extends Function {
      (req: http.IncomingMessage, res: http.ServerResponse, next: Function): void;
    }

    function authorizationCode(options: Options, issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): ExchangeFunction;
    function authorizationCode(issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): ExchangeFunction;
    function code(options: Options, issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): ExchangeFunction;
    function code(issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): ExchangeFunction;

    function clientCredentials(options: Options, issue: (client: any, scope: string[], issued: IssuedFunction) => void): ClientCredentialFunction;
    function clientCredentials(options: Options, issue: (client: any, issued: IssuedFunction) => void): ClientCredentialFunction;
    function clientCredentials(issue: (client: any, scope: string[], issued: IssuedFunction) => void): ClientCredentialFunction;
    function clientCredentials(issue: (client: any, issued: IssuedFunction) => void): ClientCredentialFunction;

    function password(options: Options, issue: (client: any, username: string, password: string, scope: string[], issued: IssuedFunction) => void): ExchangeFunction;
    function password(options: Options, issue: (client: any, username: string, password: string, issued: IssuedFunction) => void): ExchangeFunction;
    function password(issue: (client: any, username: string, password: string, scope: string[], issued: IssuedFunction) => void): ExchangeFunction;
    function password(issue: (client: any, username: string, password: string, issued: IssuedFunction) => void): ExchangeFunction;

    function refreshToken(options: Options, issue: (client: any, refreshToken: string, scope: string[], issued: IssuedFunction) => void): RefreshTokenFunction;
    function refreshToken(options: Options, issue: (client: any, refreshToken: string, issued: IssuedFunction) => void): RefreshTokenFunction;
    function refreshToken(issue: (client: any, refreshToken: string, scope: string[], issued: IssuedFunction) => void): RefreshTokenFunction;
    function refreshToken(issue: (client: any, refreshToken: string, issued: IssuedFunction) => void): RefreshTokenFunction;
  }
}
