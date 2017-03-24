// Type definitions for oauth2orize v1.5.1
// Project: https://github.com/jaredhanson/oauth2orize/
// Definitions by: Wonshik Kim <https://github.com/wokim/>, Kei Son <https://github.com/heycalmdown>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

import * as http from "http";

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

type MiddlewareFunction = (req: http.IncomingMessage, res: http.ServerResponse, next: Function) => void;
type ValidatedFunction = (err: Error | null, client?: any, redirectURI?: string) => void;
type IssuedFunction = (err: Error | null, accessToken?: string | boolean, refreshToken?: string, params?: any) => void;

export class OAuth2Server {
  exchange(fn: MiddlewareFunction): OAuth2Server;
  exchange(type: string, fn: MiddlewareFunction): OAuth2Server;
  // Parses requests to obtain authorization
  authorize    (options: AuthorizeOptions, validate: (clientId: string, redirectURI: string, validated: ValidatedFunction) => void): MiddlewareFunction;
  authorization(options: AuthorizeOptions, validate: (clientId: string, redirectURI: string, validated: ValidatedFunction) => void): MiddlewareFunction;
  authorize    (validate: (clientId: string, redirectURI: string, validated: ValidatedFunction) => void): MiddlewareFunction;
  authorization(validate: (clientId: string, redirectURI: string, validated: ValidatedFunction) => void): MiddlewareFunction;

  token(options?: any): MiddlewareFunction;
  errorHandler(options?: any): (err: Error, req: http.IncomingMessage, res: http.ServerResponse, next: any) => void;
  serializeClient(fn: (client: any, done: (err: Error | null, id: string) => void) => void): void;
  serializeClient(client: any, done: (err: Error | null, id: string) => void): void;
  deserializeClient(fn: (id: string, done: (err: Error | null, client?: any | boolean) => void) => void): void;
  deserializeClient(obj: any, done: (err: Error | null, client?: any | boolean) => void): void;
}

export namespace exchange {
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

  function authorizationCode(options: Options, issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): MiddlewareFunction;
  function authorizationCode(issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): MiddlewareFunction;
  function code(options: Options, issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): MiddlewareFunction;
  function code(issue: (client: any, code: string, redirectURI: string, issued: IssuedFunction) => void): MiddlewareFunction;

  // arity == 5; issue(client, scope, req.body, req.authInfo, issued);
  function clientCredentials(options: Options, issue: (client: any, scope: string[], body: any, authInfo: any, issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 4; issue(client, scope, req.body, issued);
  function clientCredentials(options: Options, issue: (client: any, scope: string[], body: any, issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 3; issue(client, scope, issued);
  function clientCredentials(options: Options, issue: (client: any, scope: string[], issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 2; issue(client, issued);
  function clientCredentials(options: Options, issue: (client: any, issued: IssuedFunction) => void): MiddlewareFunction;
  function clientCredentials(issue: (client: any, scope: string[], issued: IssuedFunction) => void): MiddlewareFunction;
  function clientCredentials(issue: (client: any, issued: IssuedFunction) => void): MiddlewareFunction;

  // arity == 7; issue(client, username, passwd, scope, req.body, req.authInfo, issued);
  function password(options: Options, issue: (client: any, username: string, password: string, scope: string[], body: any, authInfo: any, issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 6; issue(client, username, passwd, scope, req.body, issued);
  function password(options: Options, issue: (client: any, username: string, password: string, scope: string[], body: any, issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 5; issue(client, username, passwd, scope, issued);
  function password(options: Options, issue: (client: any, username: string, password: string, scope: string[], issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 4; issue(client, username, passwd, issued);
  function password(options: Options, issue: (client: any, username: string, password: string, issued: IssuedFunction) => void): MiddlewareFunction;
  function password(issue: (client: any, username: string, password: string, scope: string[], issued: IssuedFunction) => void): MiddlewareFunction;
  function password(issue: (client: any, username: string, password: string, issued: IssuedFunction) => void): MiddlewareFunction;

  // arity == 6; issue(client, refreshToken, scope, req.body, req.authInfo, issued);
  function refreshToken(options: Options, issue: (client: any, refreshToken: string, scope: string[], body: any, authInfo: any, issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 5; issue(client, refreshToken, scope, req.body, issued);
  function refreshToken(options: Options, issue: (client: any, refreshToken: string, scope: string[], body: any, issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 4; issue(client, refreshToken, scope, issued);
  function refreshToken(options: Options, issue: (client: any, refreshToken: string, scope: string[], issued: IssuedFunction) => void): MiddlewareFunction;
  // arity == 3; issue(client, refreshToken, issued);
  function refreshToken(options: Options, issue: (client: any, refreshToken: string, issued: IssuedFunction) => void): MiddlewareFunction;
  function refreshToken(issue: (client: any, refreshToken: string, scope: string[], issued: IssuedFunction) => void): MiddlewareFunction;
  function refreshToken(issue: (client: any, refreshToken: string, issued: IssuedFunction) => void): MiddlewareFunction;
}
