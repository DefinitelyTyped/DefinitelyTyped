// Type definitions for Node OAuth2 Server 3.0
// Project: https://github.com/oauthjs/node-oauth2-server
// Definitions by:  Robbie Van Gorkom <https://github.com/vangorra>,
//                  Charles Irick <https://github.com/cirick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestHandler } from "express";
import { Request } from "express";

/**
 * Represents an OAuth2 server instance.
 */
declare class OAuth2Server {
    static OAuth2Server: typeof OAuth2Server;

    /**
     * Instantiates OAuth2Server using the supplied model
     *
     * @param options
     */
    constructor(options: OAuth2Server.ServerOptions);

    /**
     * Authenticates a request.
     *
     * @param request
     * @param response
     * @param options
     * @param callback
     */
    authenticate(
        request: OAuth2Server.Request,
        response: OAuth2Server.Response,
        options?: OAuth2Server.AuthenticateOptions,
        callback?: OAuth2Server.Callback<OAuth2Server.Token>
    ): Promise<OAuth2Server.Token>;

    /**
     * Authorizes a token request.
     *
     * @param request
     * @param response
     * @param options
     * @param callback
     */
    authorize(
        request: OAuth2Server.Request,
        response: OAuth2Server.Response,
        options?: OAuth2Server.AuthorizeOptions,
        callback?: OAuth2Server.Callback<OAuth2Server.AuthorizationCode>
    ): Promise<OAuth2Server.AuthorizationCode>;

    /**
     * Retrieves a new token for an authorized token request.
     *
     * @param request
     * @param response
     * @param options
     * @param callback
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
         * @param options
         */
        constructor(options?: { [key: string]: any } | Express.Request);

        /**
         * Returns the specified HTTP header field. The match is case-insensitive.
         *
         * @param field
         */
        get(field: string): any | undefined;

        /**
         * Checks if the request’s Content-Type HTTP header matches any of the given MIME types.
         *
         * @param types
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
         * @param options
         */
        constructor(options?: { [key: string]: any; } | Express.Response);

        /**
         * Returns the specified HTTP header field. The match is case-insensitive.
         *
         * @param field
         */
        get(field: string): any | undefined;

        /**
         * Sets the specified HTTP header field. The match is case-insensitive.
         *
         * @param field
         * @param value
         */
        set(field: string, value: string): void;

        /**
         * Redirects to the specified URL using 302 Found.
         *
         * @param url
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
        scope?: string | undefined;

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
         * @param client
         * @param user
         * @param scope
         * @param callback
         */
        generateAccessToken?(client: Client, user: User, scope: string, callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve a client using a client id or a client id/client secret combination, depending on the grant type.
         *
         * @param clientId
         * @param clientSecret
         * @param callback
         */
        getClient(clientId: string, clientSecret: string, callback?: Callback<Client | Falsey>): Promise<Client | Falsey>;

        /**
         * Invoked to save an access token and optionally a refresh token, depending on the grant type.
         *
         * @param token
         * @param client
         * @param user
         * @param callback
         */
        saveToken(token: Token, client: Client, user: User, callback?: Callback<Token>): Promise<Token>;
    }

    interface RequestAuthenticationModel {
        /**
         * Invoked to retrieve an existing access token previously saved through Model#saveToken().
         *
         * @param accessToken
         * @param callback
         */
        getAccessToken(accessToken: string, callback?: Callback<Token>): Promise<Token>;

        /**
         * Invoked during request authentication to check if the provided access token was authorized the requested scopes.
         *
         * @param token
         * @param scope
         * @param callback
         */
        verifyScope(token: Token, scope: string, callback?: Callback<boolean>): Promise<boolean>;
    }

    interface AuthorizationCodeModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to generate a new refresh token.
         *
         * @param client
         * @param user
         * @param scope
         * @param callback
         */
        generateRefreshToken?(client: Client, user: User, scope: string, callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to generate a new authorization code.
         *
         * @param callback
         */
        generateAuthorizationCode?(callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve an existing authorization code previously saved through Model#saveAuthorizationCode().
         *
         * @param authorizationCode
         * @param callback
         */
        getAuthorizationCode(authorizationCode: string, callback?: Callback<AuthorizationCode>): Promise<AuthorizationCode>;

        /**
         * Invoked to save an authorization code.
         *
         * @param code
         * @param client
         * @param user
         * @param callback
         */
        saveAuthorizationCode(code: AuthorizationCode, client: Client, user: User, callback?: Callback<AuthorizationCode>): Promise<AuthorizationCode>;

        /**
         * Invoked to revoke an authorization code.
         *
         * @param code
         * @param callback
         */
        revokeAuthorizationCode(code: AuthorizationCode, callback?: Callback<boolean>): Promise<boolean>;

        /**
         * Invoked to check if the requested scope is valid for a particular client/user combination.
         *
         * @param user
         * @param client
         * @param string
         * @param callback
         */
        validateScope?(user: User, client: Client, scope: string, callback?: Callback<string[] | Falsey>): Promise<string[] | Falsey>;
    }

    interface PasswordModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to generate a new refresh token.
         *
         * @param client
         * @param user
         * @param scope
         * @param callback
         */
        generateRefreshToken?(client: Client, user: User, scope: string, callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve a user using a username/password combination.
         *
         * @param username
         * @param password
         * @param callback
         */
        getUser(username: string, password: string, callback?: Callback<User | Falsey>): Promise<User | Falsey>;

        /**
         * Invoked to check if the requested scope is valid for a particular client/user combination.
         *
         * @param user
         * @param client
         * @param string
         * @param callback
         */
        validateScope?(user: User, client: Client, scope: string, callback?: Callback<string[] | Falsey>): Promise<string[] | Falsey>;
    }

    interface RefreshTokenModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to generate a new refresh token.
         *
         * @param client
         * @param user
         * @param scope
         * @param callback
         */
        generateRefreshToken?(client: Client, user: User, scope: string, callback?: Callback<string>): Promise<string>;

        /**
         * Invoked to retrieve an existing refresh token previously saved through Model#saveToken().
         *
         * @param refreshToken
         * @param callback
         */
        getRefreshToken(refreshToken: string, callback?: Callback<RefreshToken>): Promise<RefreshToken>;

        /**
         * Invoked to revoke a refresh token.
         *
         * @param token
         * @param callback
         */
        revokeToken(token: Token, callback?: Callback<boolean>): Promise<boolean>;
    }

    interface ClientCredentialsModel extends BaseModel, RequestAuthenticationModel {
        /**
         * Invoked to retrieve the user associated with the specified client.
         *
         * @param client
         * @param callback
         */
        getUserFromClient(client: Client, callback?: Callback<User | Falsey>): Promise<User | Falsey>;

        /**
         * Invoked to check if the requested scope is valid for a particular client/user combination.
         *
         * @param user
         * @param client
         * @param string
         * @param callback
         */
        validateScope?(user: User, client: Client, scope: string, callback?: Callback<string[] | Falsey>): Promise<string[] | Falsey>;
    }

    interface ExtensionModel extends BaseModel, RequestAuthenticationModel {}

    /**
     * An interface representing the user.
     * A user object is completely transparent to oauth2-server and is simply used as input to model functions.
     */
    interface User {
        id: string;
        [key: string]: any;
    }

    /**
     * An interface representing the client and associated data
     */
    interface Client {
        id: string;
        redirectUris?: string[];
        grants: string[];
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
        scope?: string;
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
        scope?: string;
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
        scope?: string;
        client: Client;
        user: User;
        [key: string]: any;
    }
}

export = OAuth2Server;
