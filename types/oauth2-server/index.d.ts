// Type definitions for Node OAuth2 Server 3.0
// Project: https://github.com/oauthjs/node-oauth2-server
// Definitions by:  Robbie Van Gorkom <https://github.com/vangorra>,
//                  Charles Irick <https://github.com/cirick>,
//                  Daniel Fischer <https://github.com/d-fischer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import Express = require("express");

/**
 * Represents an OAuth2 server instance.
 */
declare class OAuth2Server {
    static OAuth2Server: typeof OAuth2Server;

    /**
     * Instantiates OAuth2Server using the supplied model
     */
    constructor(options: OAuth2Server.ServerOptions);

    /**
     * Authenticates a request.
     */
    authenticate(
        request: OAuth2Server.Request,
        response: OAuth2Server.Response,
        options?: OAuth2Server.AuthenticateOptions,
        callback?: OAuth2Server.Callback<OAuth2Server.Token>
    ): Promise<OAuth2Server.Token>;

    /**
     * Authorizes a token request.
     */
    authorize(
        request: OAuth2Server.Request,
        response: OAuth2Server.Response,
        options?: OAuth2Server.AuthorizeOptions,
        callback?: OAuth2Server.Callback<OAuth2Server.AuthorizationCode>
    ): Promise<OAuth2Server.AuthorizationCode>;

    /**
     * Retrieves a new token for an authorized token request.
     */
    token(
        request: OAuth2Server.Request,
        response: OAuth2Server.Response,
        options?: OAuth2Server.TokenOptions,
        callback?: OAuth2Server.Callback<OAuth2Server.Token>
    ): Promise<OAuth2Server.Token>;
}

declare namespace OAuth2Server {
    /**
     * Represents an incoming HTTP request.
     */
    class Request {
        body?: any;
        headers?: { [key: string]: string; };
        method?: string;
        query?: { [key: string]: string; };

        /**
         * Instantiates Request using the supplied options.
         *
         */
        constructor(options?: { [key: string]: any } | Express.Request);

        /**
         * Returns the specified HTTP header field. The match is case-insensitive.
         *
         */
        get(field: string): any | undefined;

        /**
         * Checks if the request’s Content-Type HTTP header matches any of the given MIME types.
         *
         */
        is(types: string[]): string | false;
    }

    /**
     * Represents an outgoing HTTP response.
     */
    class Response {
        body?: any;
        headers?: { [key: string]: string; };
        status?: number;

        /**
         * Instantiates Response using the supplied options.
         *
         */
        constructor(options?: { [key: string]: any; } | Express.Response);

        /**
         * Returns the specified HTTP header field. The match is case-insensitive.
         *
         */
        get(field: string): any | undefined;

        /**
         * Sets the specified HTTP header field. The match is case-insensitive.
         *
         */
        set(field: string, value: string): void;

        /**
         * Redirects to the specified URL using 302 Found.
         *
         */
        redirect(url: string): void;
    }

    interface ServerOptions extends AuthenticateOptions, AuthorizeOptions, TokenOptions {
        /**
         * Model object
         */
        model: AuthorizationCodeModel | ClientCredentialsModel | RefreshTokenModel | PasswordModel | ExtensionModel;
    }

    interface AuthenticateOptions {
        /**
         * The scope(s) to authenticate.
         */
        scope?: string | string[];

        /**
         * Set the X-Accepted-OAuth-Scopes HTTP header on response objects.
         */
        addAcceptedScopesHeader?: boolean;

        /**
         * Set the X-OAuth-Scopes HTTP header on response objects.
         */
        addAuthorizedScopesHeader?: boolean;

        /**
         * Allow clients to pass bearer tokens in the query string of a request.
         */
        allowBearerTokensInQueryString?: boolean;
    }

    interface AuthorizeOptions {
        /**
         * The authenticate handler
         */
        authenticateHandler?: {};

        /**
         * Allow clients to specify an empty state
         */
        allowEmptyState?: boolean;

        /**
         * Lifetime of generated authorization codes in seconds (default = 5 minutes).
         */
        authorizationCodeLifetime?: number;
    }

    interface TokenOptions {
        /**
         * Lifetime of generated access tokens in seconds (default = 1 hour)
         */
        accessTokenLifetime?: number;

        /**
         * Lifetime of generated refresh tokens in seconds (default = 2 weeks)
         */
        refreshTokenLifetime?: number;

        /**
         * Allow extended attributes to be set on the returned token
         */
        allowExtendedTokenAttributes?: boolean;

        /**
         * Require a client secret. Defaults to true for all grant types.
         */
        requireClientAuthentication?: {};

        /**
         * Always revoke the used refresh token and issue a new one for the refresh_token grant.
         */
        alwaysIssueNewRefreshToken?: boolean;
    }

    /**
     * Represents a generic callback structure for model callbacks
     */
    type Callback<T> = (err?: any, result?: T) => void;

    /**
     * For returning falsey parameters in cases of failure
     */
    type Falsey = '' | 0 | false | null | undefined;

    interface BaseModel {
        /**
         * Invoked to generate a new access token.
         *
         */
        generateAccessToken?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve a client using a client id or a client id/client secret combination, depending on the grant type.
         *
         */
        getClient(clientId: string, clientSecret: string, callback?: Callback<Client | Falsey>): Promise<Client | Falsey>;

        /**
         * Invoked to save an access token and optionally a refresh token, depending on the grant type.
         *
         */
        saveToken(token: Token, client: Client, user: User, callback?: Callback<Token>): Promise<Token | Falsey>;
    }

    interface RequestAuthenticationModel {
        /**
         * Invoked to retrieve an existing access token previously saved through Model#saveToken().
         *
         */
        getAccessToken(accessToken: string, callback?: Callback<Token>): Promise<Token | Falsey>;

        /**
         * Invoked during request authentication to check if the provided access token was authorized the requested scopes.
         *
         */
        verifyScope(token: Token, scope: string | string[], callback?: Callback<boolean>): Promise<boolean>;
    }

    interface AuthorizationCodeModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to generate a new refresh token.
         *
         */
        generateRefreshToken?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to generate a new authorization code.
         *
         */
        generateAuthorizationCode?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve an existing authorization code previously saved through Model#saveAuthorizationCode().
         *
         */
        getAuthorizationCode(authorizationCode: string, callback?: Callback<AuthorizationCode>): Promise<AuthorizationCode | Falsey>;

        /**
         * Invoked to save an authorization code.
         *
         */
        saveAuthorizationCode(code: AuthorizationCode, client: Client, user: User, callback?: Callback<AuthorizationCode>): Promise<AuthorizationCode | Falsey>;

        /**
         * Invoked to revoke an authorization code.
         *
         */
        revokeAuthorizationCode(code: AuthorizationCode, callback?: Callback<boolean>): Promise<boolean>;

        /**
         * Invoked to check if the requested scope is valid for a particular client/user combination.
         *
         */
        validateScope?(user: User, client: Client, scope: string | string[], callback?: Callback<string | Falsey>): Promise<string | string[] | Falsey>;
    }

    interface PasswordModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to generate a new refresh token.
         *
         */
        generateRefreshToken?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve a user using a username/password combination.
         *
         */
        getUser(username: string, password: string, callback?: Callback<User | Falsey>): Promise<User | Falsey>;

        /**
         * Invoked to check if the requested scope is valid for a particular client/user combination.
         *
         */
        validateScope?(user: User, client: Client, scope: string | string[], callback?: Callback<string | Falsey>): Promise<string | string[] | Falsey>;
    }

    interface RefreshTokenModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to generate a new refresh token.
         *
         */
        generateRefreshToken?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve an existing refresh token previously saved through Model#saveToken().
         *
         */
        getRefreshToken(refreshToken: string, callback?: Callback<RefreshToken>): Promise<RefreshToken | Falsey>;

        /**
         * Invoked to revoke a refresh token.
         *
         */
        revokeToken(token: RefreshToken | Token, callback?: Callback<boolean>): Promise<boolean>;
    }

    interface ClientCredentialsModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to retrieve the user associated with the specified client.
         *
         */
        getUserFromClient(client: Client, callback?: Callback<User | Falsey>): Promise<User | Falsey>;

        /**
         * Invoked to check if the requested scope is valid for a particular client/user combination.
         *
         */
        validateScope?(user: User, client: Client, scope: string | string[], callback?: Callback<string | Falsey>): Promise<string | string[] | Falsey>;
    }

    interface ExtensionModel extends BaseModel, RequestAuthenticationModel {}

    /**
     * An interface representing the user.
     * A user object is completely transparent to oauth2-server and is simply used as input to model functions.
     */
    interface User {
        [key: string]: any;
    }

    /**
     * An interface representing the client and associated data
     */
    interface Client {
        id: string;
        redirectUris?: string | string[];
        grants: string | string[];
        accessTokenLifetime?: number;
        refreshTokenLifetime?: number;
        [key: string]: any;
    }

    /**
     * An interface representing the authorization code and associated data.
     */
    interface AuthorizationCode {
        authorizationCode: string;
        expiresAt: Date;
        redirectUri: string;
        scope?: string | string[];
        client: Client;
        user: User;
        [key: string]: any;
    }

    /**
     * An interface representing the token(s) and associated data.
     */
    interface Token {
        accessToken: string;
        accessTokenExpiresAt?: Date;
        refreshToken?: string;
        refreshTokenExpiresAt?: Date;
        scope?: string | string[];
        client: Client;
        user: User;
        [key: string]: any;
    }

    /**
     * An interface representing the refresh token and associated data.
     */
    interface RefreshToken {
        refreshToken: string;
        refreshTokenExpiresAt?: Date;
        scope?: string | string[];
        client: Client;
        user: User;
        [key: string]: any;
    }

    class OAuthError extends Error {
        constructor(messageOrError: string | Error, properties?: object);

        /**
         * The HTTP error code.
         */
        code: number;

        /**
         * The OAuth error code.
         */
        name: string;

        /**
         * A human-readable error message.
         */
        message: string;
    }

    class AccessDeniedError extends OAuthError {}
    class InsufficientScopeError extends OAuthError {}
    class InvalidArgumentError extends OAuthError {}
    class InvalidClientError extends OAuthError {}
    class InvalidGrantError extends OAuthError {}
    class InvalidRequestError extends OAuthError {}
    class InvalidScopeError extends OAuthError {}
    class InvalidTokenError extends OAuthError {}
    class ServerError extends OAuthError {}
    class UnauthorizedClientError extends OAuthError {}
    class UnauthorizedRequestError extends OAuthError {}
    class UnsupportedGrantTypeError extends OAuthError {}
    class UnsupportedResponseTypeError extends OAuthError {}
}

export = OAuth2Server;
