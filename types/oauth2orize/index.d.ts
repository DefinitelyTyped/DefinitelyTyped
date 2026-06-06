/// <reference types="node" />
/// <reference types="express" />

import { IncomingMessage, ServerResponse } from "http";

export interface OAuth2<Client = any, User = any> {
    client: Client;
    user: User;
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

export interface MiddlewareRequest<Client = any, User = any> extends IncomingMessage {
    oauth2?: OAuth2<Client, User> | undefined;
    user?: User;
}

export interface ServerOptions {
    store: any;
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function createServer<Client = any, User = any>(options?: ServerOptions): OAuth2Server<Client, User>;

export interface AuthorizeOptions {
    idLength?: number | undefined;
    sessionKey?: string | undefined;
}

export interface DecisionOptions {
    cancelField?: string;
    userProperty?: string;
    sessionKey?: string;
    loadTransaction?: boolean;
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

export type MiddlewareFunction<
    Client = any,
    User = any,
    TReq extends MiddlewareRequest<Client, User> = MiddlewareRequest<Client, User>,
> = (
    req: TReq,
    res: ServerResponse,
    next: MiddlewareNextFunction,
) => void;

export type MiddlewareErrorFunction<Client = any, User = any> = (
    err: Error,
    req: MiddlewareRequest<Client, User>,
    res: ServerResponse,
    next: MiddlewareNextFunction,
) => void;

export type MiddlewareNextFunction = (err?: Error) => void;

export type ValidateDoneFunction<Client = any> = (
    err: Error | null,
    client?: Client | false,
    redirectURI?: string,
) => void;
export type ValidateFunctionArity5<Client = any> = (
    clientId: string,
    redirectURI: string,
    scope: string[],
    type: string,
    validated: ValidateDoneFunction<Client>,
) => void;
export type ValidateFunctionArity4<Client> = (
    clientId: string,
    redirectURI: string,
    scope: string[],
    validated: ValidateDoneFunction<Client>,
) => void;
export type ValidateFunction<Client = any> = (
    clientId: string,
    redirectURI: string,
    validated: ValidateDoneFunction<Client>,
) => void;
export type ValidateFunctionArity2<Client = any> = (areq: OAuth2Req, validated: ValidateDoneFunction<Client>) => void;

export type ImmediateFunction<Client = any, User = any> = (
    client: Client,
    user: User,
    scope: string[],
    type: string,
    areq: any,
    done: (err: Error | null, allow: boolean, info: any, locals: any) => void,
) => void;

export type DecisionParseFunction<
    Client = any,
    User = any,
    TReq extends MiddlewareRequest<Client, User> = MiddlewareRequest<any, any>,
> = (
    req: TReq,
    done: (err: Error | null, params?: any) => void,
) => void;

export type SerializeClientFunction<Client = any> = (client: Client, done: SerializeClientDoneFunction) => void;
export type SerializeClientDoneFunction = (err: Error | null, id: string) => void;

export type DeserializeClientFunction<Client = any> = (id: string, done: DeserializeClientDoneFunction<Client>) => void;
export type DeserializeClientDoneFunction<Client = any> = (err: Error | null, client?: Client | boolean) => void;

export type IssueGrantCodeDoneFunction = (err: Error | null, code?: string) => void;

export type IssueGrantCodeFunctionArity7<Client = any, User = any> = (
    client: Client,
    redirectUri: string,
    user: User,
    res: any,
    req: OAuth2Req,
    locals: any,
    issued: IssueGrantCodeDoneFunction,
) => void;
export type IssueGrantCodeFunctionArity6<Client = any, User = any> = (
    client: Client,
    redirectUri: string,
    user: User,
    res: any,
    req: OAuth2Req,
    issued: IssueGrantCodeDoneFunction,
) => void;
export type IssueGrantCodeFunction<Client = any, User = any> = (
    client: Client,
    redirectUri: string,
    user: User,
    res: any,
    issued: IssueGrantCodeDoneFunction,
) => void;
export type IssueGrantCodeFunctionArity4<Client = any, User = any> = (
    client: Client,
    redirectUri: string,
    user: User,
    issued: IssueGrantCodeDoneFunction,
) => void;

export type IssueGrantTokenFunctionArity5<Client = any, User = any> = (
    client: Client,
    user: User,
    ares: any,
    areq: any,
    issued: (err: Error | null, code?: string | boolean, params?: any) => void,
) => void;
export type IssueGrantTokenFunctionArity4<Client = any, User = any> = (
    client: Client,
    user: User,
    ares: any,
    issued: (err: Error | null, code?: string | boolean, params?: any) => void,
) => void;

export type IssueExchangeCodeFunctionArity6<Client = any> = (
    client: Client,
    code: string,
    redirectURI: string,
    body: Record<string, unknown>,
    authInfo: any,
    issued: ExchangeDoneFunction,
) => void;
export type IssueExchangeCodeFunctionArity5<Client = any> = (
    client: Client,
    code: string,
    redirectURI: string,
    body: Record<string, unknown>,
    issued: ExchangeDoneFunction,
) => void;
export type IssueExchangeCodeFunction<Client = any> = (
    client: Client,
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

export class OAuth2Server<Client = any, User = any> {
    grant(type: string, fn: MiddlewareFunction<Client, User>): OAuth2Server<Client, User>;
    grant(fn: MiddlewareFunction<Client, User>): OAuth2Server<Client, User>;

    exchange(type: string, fn: MiddlewareFunction<Client, User>): OAuth2Server<Client, User>;
    exchange(fn: MiddlewareFunction<Client, User>): OAuth2Server<Client, User>;

    authorize(
        options: AuthorizeOptions,
        validate: ValidateFunctionArity5<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    authorize(
        options: AuthorizeOptions,
        validate: ValidateFunctionArity4<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    authorize(
        options: AuthorizeOptions,
        validate: ValidateFunction<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    authorize(
        options: AuthorizeOptions,
        validate: ValidateFunctionArity2<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    authorize(
        validate: ValidateFunctionArity5<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    authorize(
        validate: ValidateFunctionArity4<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    authorize(
        validate: ValidateFunction<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    authorize(
        validate: ValidateFunctionArity2<Client>,
        immediate?: ImmediateFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;

    authorization: OAuth2Server<Client, User>["authorize"];

    decision<TReq extends MiddlewareRequest<Client, User>>(
        options: DecisionOptions,
        parse: DecisionParseFunction<Client, User, TReq>,
    ): MiddlewareFunction<Client, User, TReq>;
    decision<TReq extends MiddlewareRequest<Client, User>>(
        parse: DecisionParseFunction<Client, User, TReq>,
    ): MiddlewareFunction<Client, User, TReq>;
    decision<TReq extends MiddlewareRequest<Client, User>>(): MiddlewareFunction<Client, User, TReq>;

    token(options?: any): MiddlewareFunction<Client, User>;

    errorHandler(options?: any): MiddlewareErrorFunction<Client, User>;

    serializeClient(fn: SerializeClientFunction<Client>): void;
    serializeClient(client: Client, done: SerializeClientDoneFunction): void;

    deserializeClient(fn: DeserializeClientFunction<Client>): void;
    deserializeClient(obj: any, done: DeserializeClientDoneFunction<Client>): void;
}

export namespace grant {
    interface Options<Client = any, User = any> {
        modes?: {
            query?: (txn: OAuth2<Client, User>, res: ServerResponse, params: Record<string, unknown>) => void;
        };
        // For maximum flexibility, multiple scope separators can optionally be
        // allowed.  This allows the server to accept clients that separate scope
        // with either space or comma (' ', ',').  This violates the specification,
        // but achieves compatibility with existing client libraries that are already
        // deployed.
        scopeSeparator?: string | undefined;
    }

    function code<Client = any, User = any>(
        options: Options<Client, User>,
        issue: IssueGrantCodeFunctionArity7<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function code<Client = any, User = any>(
        options: Options<Client, User>,
        issue: IssueGrantCodeFunctionArity6<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function code<Client = any, User = any>(
        options: Options<Client, User>,
        issue: IssueGrantCodeFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function code<Client = any, User = any>(
        options: Options<Client, User>,
        issue: IssueGrantCodeFunctionArity4<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function code<Client = any, User = any>(
        issue: IssueGrantCodeFunctionArity7<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function code<Client = any, User = any>(
        issue: IssueGrantCodeFunctionArity6<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function code<Client = any, User = any>(
        issue: IssueGrantCodeFunction<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function code<Client = any, User = any>(
        issue: IssueGrantCodeFunctionArity4<Client, User>,
    ): MiddlewareFunction<Client, User>;

    function token<Client = any, User = any>(
        options: Options<Client, User>,
        issue: IssueGrantTokenFunctionArity5<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function token<Client = any, User = any>(
        options: Options<Client, User>,
        issue: IssueGrantTokenFunctionArity4<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function token<Client = any, User = any>(
        issue: IssueGrantTokenFunctionArity5<Client, User>,
    ): MiddlewareFunction<Client, User>;
    function token<Client = any, User = any>(
        issue: IssueGrantTokenFunctionArity4<Client, User>,
    ): MiddlewareFunction<Client, User>;
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

    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function authorizationCode<Client = any, User = any>(
        options: Options,
        issue: IssueExchangeCodeFunctionArity6<Client>,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function authorizationCode<Client = any, User = any>(
        options: Options,
        issue: IssueExchangeCodeFunctionArity5<Client>,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function authorizationCode<Client = any, User = any>(
        options: Options,
        issue: IssueExchangeCodeFunction<Client>,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function authorizationCode<Client = any, User = any>(
        issue: IssueExchangeCodeFunctionArity6<Client>,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function authorizationCode<Client = any, User = any>(
        issue: IssueExchangeCodeFunctionArity5<Client>,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function authorizationCode<Client = any, User = any>(
        issue: IssueExchangeCodeFunction<Client>,
    ): MiddlewareFunction<Client, User>;

    const code: typeof authorizationCode;

    // arity == 5; issue(client, scope, req.body, req.authInfo, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function clientCredentials<Client = any, User = any>(
        options: Options,
        issue: (client: Client, scope: string[], body: any, authInfo: any, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 4; issue(client, scope, req.body, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function clientCredentials<Client = any, User = any>(
        options: Options,
        issue: (client: Client, scope: string[], body: any, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 3; issue(client, scope, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function clientCredentials<Client = any, User = any>(
        options: Options,
        issue: (client: Client, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 2; issue(client, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function clientCredentials<Client = any, User = any>(
        options: Options,
        issue: (client: Client, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function clientCredentials<Client = any, User = any>(
        issue: (client: Client, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function clientCredentials<Client = any, User = any>(
        issue: (client: Client, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;

    // arity == 7; issue(client, username, passwd, scope, req.body, req.authInfo, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function password<Client = any, User = any>(
        options: Options,
        issue: (
            client: Client,
            username: string,
            password: string,
            scope: string[],
            body: any,
            authInfo: any,
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 6; issue(client, username, passwd, scope, req.body, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function password<Client = any, User = any>(
        options: Options,
        issue: (
            client: Client,
            username: string,
            password: string,
            scope: string[],
            body: any,
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 5; issue(client, username, passwd, scope, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function password<Client = any, User = any>(
        options: Options,
        issue: (
            client: Client,
            username: string,
            password: string,
            scope: string[],
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 4; issue(client, username, passwd, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function password<Client = any, User = any>(
        options: Options,
        issue: (client: Client, username: string, password: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function password<Client = any, User = any>(
        issue: (
            client: Client,
            username: string,
            password: string,
            scope: string[],
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function password<Client = any, User = any>(
        issue: (client: Client, username: string, password: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;

    // arity == 6; issue(client, refreshToken, scope, req.body, req.authInfo, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function refreshToken<Client = any, User = any>(
        options: Options,
        issue: (
            client: Client,
            refreshToken: string,
            scope: string[],
            body: any,
            authInfo: any,
            issued: ExchangeDoneFunction,
        ) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 5; issue(client, refreshToken, scope, req.body, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function refreshToken<Client = any, User = any>(
        options: Options,
        issue: (client: Client, refreshToken: string, scope: string[], body: any, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 4; issue(client, refreshToken, scope, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function refreshToken<Client = any, User = any>(
        options: Options,
        issue: (client: Client, refreshToken: string, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // arity == 3; issue(client, refreshToken, issued);
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function refreshToken<Client = any, User = any>(
        options: Options,
        issue: (client: Client, refreshToken: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function refreshToken<Client = any, User = any>(
        issue: (client: Client, refreshToken: string, scope: string[], issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function refreshToken<Client = any, User = any>(
        issue: (client: Client, refreshToken: string, issued: ExchangeDoneFunction) => void,
    ): MiddlewareFunction<Client, User>;
}
