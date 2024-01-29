/// <reference types="node" />
/// <reference types="express" />

import { IncomingMessage, ServerResponse } from "http";

declare global {
    namespace Express {
        interface Request {
            oauth2?: OAuth2 | undefined;
        }
    }
}

export interface OAuth2 {
    client: any;
    user: any;
    transactionID: string;
    redirectURI: string;
    req: OAuth2Req;
    info: OAuth2Info;
}

export interface OAuth2Req {
    clientID: string;
    redirectURI: string;
    scope: string[];
    state: string;
    type: string;
    transactionID: string;
}

export interface OAuth2Info {
    scope: string;
}

export interface MiddlewareRequest extends IncomingMessage {
    oauth2?: OAuth2 | undefined;
    user?: any;
}

export interface ServerOptions {
    store: any;
}

export function createServer(options?: ServerOptions): OAuth2Server;

export interface AuthorizeOptions {
    idLength?: number | undefined;
    sessionKey?: string | undefined;
}

export interface DecisionOptions {
    cancelField: string;
    userProperty: string;
    sessionKey: string;
    loadTransaction: boolean;
}

export interface ErrorHandlerOptions {
    mode?: string | undefined;
}

export class OAuth2Error extends Error {
    code: string;
    status: number;
    uri?: string | undefined;

    /**
     * @param code Defaults to *server_error*.
     * @param status Defaults to 500.
     */
    constructor(message?: string, code?: string, uri?: string, status?: number);
}

export type AuthorizationErrorCode =
    | "invalid_request"
    | "unauthorized_client"
    | "access_denied"
    | "unsupported_response_type"
    | "invalid_scope"
    | "temporarily_unavailable";

export class AuthorizationError extends OAuth2Error {
    /**
     * @param code The code sets the status unless status is present. Mapping:
     * invalid_request = 400
     * unauthorized_client = 403
     * access_denied = 403
     * unsupported_response_type = 501
     * invalid_scope = 400
     * temporarily_unavailable = 503
     * Defaults to *server_error*.
     * @param status Defaults to 500 if code is not specified.
     */
    constructor(message?: string, code?: AuthorizationErrorCode | string, uri?: string, status?: number);
}

export type TokenErrorCode =
    | "invalid_request"
    | "invalid_client"
    | "invalid_grant"
    | "unauthorized_client"
    | "unsupported_grant_type"
    | "invalid_scope";

export class TokenError extends OAuth2Error {
    /**
     * @param code The code sets the status unless status is present. Mapping:
     * invalid_request = 400
     * invalid_client = 401
     * invalid_grant = 403
     * unauthorized_client = 403
     * unsupported_grant_type = 501
     * invalid_scope = 400
     * Defaults to server_error.
     * @param status Defaults to 500 if code is not specified.
     */
    constructor(message?: string, code?: TokenErrorCode | string, uri?: string, status?: number);
}

export type MiddlewareFunction = (req: MiddlewareRequest, res: ServerResponse, next: MiddlewareNextFunction) => void;

export type MiddlewareErrorFunction = (
    err: Error,
    req: MiddlewareRequest,
    res: ServerResponse,
    next: MiddlewareNextFunction,
) => void;

export type MiddlewareNextFunction = (err?: Error) => void;

export type ValidateDoneFunction = (err: Error | null, client?: any, redirectURI?: string) => void;
export type ValidateFunctionArity5 = (
    clientId: string,
    redirectURI: string,
    scope: string[],
    type: string,
    validated: ValidateDoneFunction,
) => void;
export type ValidateFunctionArity4 = (
    clientId: string,
    redirectURI: string,
    scope: string[],
    validated: ValidateDoneFunction,
) => void;
export type ValidateFunction = (clientId: string, redirectURI: string, validated: ValidateDoneFunction) => void;
export type ValidateFunctionArity2 = (areq: OAuth2Req, validated: ValidateDoneFunction) => void;

export type ImmediateFunction = (
    client: any,
    user: any,
    scope: string[],
    type: string,
    areq: any,
    done: (err: Error | null, allow: boolean, info: any, locals: any) => void,
) => void;

export type DecisionParseFunction = (req: MiddlewareRequest, done: (err: Error | null, params: any) => void) => void;

export type SerializeClientFunction = (client: any, done: SerializeClientDoneFunction) => void;
export type SerializeClientDoneFunction = (err: Error | null, id: string) => void;

export type DeserializeClientFunction = (id: string, done: DeserializeClientDoneFunction) => void;
export type DeserializeClientDoneFunction = (err: Error | null, client?: any | boolean) => void;

export type IssueGrantCodeDoneFunction = (err: Error | null, code?: string) => void;

export type IssueGrantCodeFunctionArity7 = (
    client: any,
    redirectUri: string,
    user: any,
    res: any,
    req: OAuth2Req,
    locals: any,
    issued: IssueGrantCodeDoneFunction,
) => void;
export type IssueGrantCodeFunctionArity6 = (
    client: any,
    redirectUri: string,
    user: any,
    res: any,
    req: OAuth2Req,
    issued: IssueGrantCodeDoneFunction,
) => void;
export type IssueGrantCodeFunction = (
    client: any,
    redirectUri: string,
    user: any,
    res: any,
    issued: IssueGrantCodeDoneFunction,
) => void;
export type IssueGrantCodeFunctionArity4 = (
    client: any,
    redirectUri: string,
    user: any,
    issued: IssueGrantCodeDoneFunction,
) => void;

export type IssueGrantTokenFunction = (
    client: any,
    user: any,
    ares: any,
    issued: (err: Error | null, code?: string, params?: any) => void,
) => void;

export type IssueExchangeCodeFunctionArity6 = (
    client: any,
    code: string,
    redirectURI: string,
    body: Record<string, unknown>,
    authInfo: any,
    issued: ExchangeDoneFunction,
) => void;
export type IssueExchangeCodeFunctionArity5 = (
    client: any,
    code: string,
    redirectURI: string,
    body: Record<string, unknown>,
    issued: ExchangeDoneFunction,
) => void;
export type IssueExchangeCodeFunction = (
    client: any,
    code: string,
    redirectURI: string,
    issued: ExchangeDoneFunction,
) => void;

export type ExchangeDoneFunction = (
    err: Error | null,
    accessToken?: string | boolean,
    refreshToken?: string,
    params?: any,
) => void;

export class OAuth2Server {
    grant(type: string, fn: MiddlewareFunction): OAuth2Server;
    grant(fn: MiddlewareFunction): OAuth2Server;

    exchange(type: string, fn: MiddlewareFunction): OAuth2Server;
    exchange(fn: MiddlewareFunction): OAuth2Server;

    authorize(
        options: AuthorizeOptions,
        validate: ValidateFunctionArity5,
        immediate?: ImmediateFunction,
    ): MiddlewareFunction;
    authorize(
        options: AuthorizeOptions,
        validate: ValidateFunctionArity4,
        immediate?: ImmediateFunction,
    ): MiddlewareFunction;
    authorize(options: AuthorizeOptions, validate: ValidateFunction, immediate?: ImmediateFunction): MiddlewareFunction;
    authorize(
        options: AuthorizeOptions,
        validate: ValidateFunctionArity2,
        immediate?: ImmediateFunction,
    ): MiddlewareFunction;
    authorize(validate: ValidateFunctionArity5, immediate?: ImmediateFunction): MiddlewareFunction;
    authorize(validate: ValidateFunctionArity4, immediate?: ImmediateFunction): MiddlewareFunction;
    authorize(validate: ValidateFunction, immediate?: ImmediateFunction): MiddlewareFunction;
    authorize(validate: ValidateFunctionArity2, immediate?: ImmediateFunction): MiddlewareFunction;

    authorization: OAuth2Server["authorize"];

    decision(options: DecisionOptions, parse: DecisionParseFunction): MiddlewareFunction;
    decision(parse: DecisionParseFunction): MiddlewareFunction;
    decision(): MiddlewareFunction;

    token(options?: any): MiddlewareFunction;

    errorHandler(options?: any): MiddlewareErrorFunction;

    serializeClient(fn: SerializeClientFunction): void;
    serializeClient(client: any, done: SerializeClientDoneFunction): void;

    deserializeClient(fn: DeserializeClientFunction): void;
    deserializeClient(obj: any, done: DeserializeClientDoneFunction): void;
}

export namespace grant {
    interface Options {
        modes?: {
            query?: (txn: OAuth2, res: ServerResponse, params: Record<string, unknown>) => void;
        };
        // For maximum flexibility, multiple scope separators can optionally be
        // allowed.  This allows the server to accept clients that separate scope
        // with either space or comma (' ', ',').  This violates the specification,
        // but achieves compatibility with existing client libraries that are already
        // deployed.
        scopeSeparator?: string | undefined;
    }

    function code(options: Options, issue: IssueGrantCodeFunctionArity7): MiddlewareFunction;
    function code(options: Options, issue: IssueGrantCodeFunctionArity6): MiddlewareFunction;
    function code(options: Options, issue: IssueGrantCodeFunction): MiddlewareFunction;
    function code(options: Options, issue: IssueGrantCodeFunctionArity4): MiddlewareFunction;
    function code(issue: IssueGrantCodeFunctionArity7): MiddlewareFunction;
    function code(issue: IssueGrantCodeFunctionArity6): MiddlewareFunction;
    function code(issue: IssueGrantCodeFunction): MiddlewareFunction;
    function code(issue: IssueGrantCodeFunctionArity4): MiddlewareFunction;

    function token(options: Options, issue: IssueGrantTokenFunction): MiddlewareFunction;
    function token(issue: IssueGrantTokenFunction): MiddlewareFunction;
}

export namespace exchange {
    interface Options {
        // The 'user' property of `req` holds the authenticated user.  In the case
        // of the token endpoint, the property will contain the OAuth 2.0 client.
        userProperty?: string | undefined;

        // For maximum flexibility, multiple scope separators can optionally be
        // allowed.  This allows the server to accept clients that separate scope
        // with either space or comma (' ', ',').  This violates the specification,
        // but achieves compatibility with existing client libraries that are already
        // deployed.
        scopeSeparator?: string | undefined;
    }

    function authorizationCode(options: Options, issue: IssueExchangeCodeFunctionArity6): MiddlewareFunction;
    function authorizationCode(options: Options, issue: IssueExchangeCodeFunctionArity5): MiddlewareFunction;
    function authorizationCode(options: Options, issue: IssueExchangeCodeFunction): MiddlewareFunction;
    function authorizationCode(issue: IssueExchangeCodeFunctionArity6): MiddlewareFunction;
    function authorizationCode(issue: IssueExchangeCodeFunctionArity5): MiddlewareFunction;
    function authorizationCode(issue: IssueExchangeCodeFunction): MiddlewareFunction;

    const code: typeof authorizationCode;

    // arity == 5; issue(client, scope, req.body, req.authInfo, issued);
    function clientCredentials(
        options: Options,
        issue: (client: any, scope: string[], body: any, authInfo: any, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    // arity == 4; issue(client, scope, req.body, issued);
    function clientCredentials(
        options: Options,
        issue: (client: any, scope: string[], body: any, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    // arity == 3; issue(client, scope, issued);
    function clientCredentials(
        options: Options,
        issue: (client: any, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    // arity == 2; issue(client, issued);
    function clientCredentials(
        options: Options,
        issue: (client: any, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    function clientCredentials(
        issue: (client: any, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    function clientCredentials(issue: (client: any, issued: ExchangeDoneFunction) => void): MiddlewareFunction;

    // arity == 7; issue(client, username, passwd, scope, req.body, req.authInfo, issued);
    function password(
        options: Options,
        issue: (
            client: any,
            username: string,
            password: string,
            scope: string[],
            body: any,
            authInfo: any,
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction;
    // arity == 6; issue(client, username, passwd, scope, req.body, issued);
    function password(
        options: Options,
        issue: (
            client: any,
            username: string,
            password: string,
            scope: string[],
            body: any,
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction;
    // arity == 5; issue(client, username, passwd, scope, issued);
    function password(
        options: Options,
        issue: (client: any, username: string, password: string, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    // arity == 4; issue(client, username, passwd, issued);
    function password(
        options: Options,
        issue: (client: any, username: string, password: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    function password(
        issue: (client: any, username: string, password: string, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    function password(
        issue: (client: any, username: string, password: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;

    // arity == 6; issue(client, refreshToken, scope, req.body, req.authInfo, issued);
    function refreshToken(
        options: Options,
        issue: (
            client: any,
            refreshToken: string,
            scope: string[],
            body: any,
            authInfo: any,
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction;
    // arity == 5; issue(client, refreshToken, scope, req.body, issued);
    function refreshToken(
        options: Options,
        issue: (client: any, refreshToken: string, scope: string[], body: any, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    // arity == 4; issue(client, refreshToken, scope, issued);
    function refreshToken(
        options: Options,
        issue: (client: any, refreshToken: string, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    // arity == 3; issue(client, refreshToken, issued);
    function refreshToken(
        options: Options,
        issue: (client: any, refreshToken: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    function refreshToken(
        issue: (client: any, refreshToken: string, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
    function refreshToken(
        issue: (client: any, refreshToken: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction;
}
