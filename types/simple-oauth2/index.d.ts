export interface ModuleOptions<ClientIdName extends string = "client_id"> {
    client: {
        /** Service registered client id. When required by the spec this value will be automatically encoded. Required. */
        id: string;
        /** Service registered client secret. When required by the spec this value will be automatically encoded. Required. */
        secret: string;
        /** Parameter name used to send the client secret. Defaults to client_secret. */
        secretParamName?: string | undefined;
        /** Parameter name used to send the client id. Defaults to client_id. */
        idParamName?: ClientIdName | undefined;
    };
    auth: {
        /** Base URL used to obtain access tokens. Required */
        tokenHost: string;
        /**
         * URL path to obtain access tokens. Defaults to /oauth/token.
         *
         * Note: URL paths are relatively resolved to their corresponding host property using the Node WHATWG URL resolution algorithm
         */
        tokenPath?: string | undefined;
        /**
         * URL path to refresh access tokens. Defaults to auth.tokenPath
         *
         * Note: URL paths are relatively resolved to their corresponding host property using the Node WHATWG URL resolution algorithm
         */
        refreshPath?: string | undefined;
        /**
         * URL path to revoke access tokens. Defaults to /oauth/revoke
         *
         * Note: URL paths are relatively resolved to their corresponding host property using the Node WHATWG URL resolution algorithm
         */
        revokePath?: string | undefined;
        /** Base URL used to request an authorization code. Only valid for AuthorizationCode. Defaults to auth.tokenHost */
        authorizeHost?: string | undefined;
        /**
         * URL path to request an authorization code. Only valid for AuthorizationCode. Defaults to /oauth/authorize
         *
         * Note: URL paths are relatively resolved to their corresponding host property using the Node WHATWG URL resolution algorithm
         */
        authorizePath?: string | undefined;
    };
    /**
     * Used to set global options to the internal http library (wreck).
     * All options except baseUrl are allowed
     * Defaults to header.Accept = "application/json"
     */
    http?:
        | Omit<WreckHttpOptions, "baseUrl" | "headers" | "redirects" | "json"> & {
            baseUrl?: undefined;
            headers?: {
                /**
                 * Acceptable http response content type. Defaults to application/json
                 */
                accept?: string;
                /**
                 * Always overriden by the library to properly send the required credentials on each scenario
                 */
                authorization?: string;
                [key: string]: unknown;
            } | undefined;
            /**
             * Number or redirects to follow. Defaults to false (no redirects)
             */
            redirects?: false | number | undefined;
            /**
             * JSON response parsing mode. Defaults to strict
             */
            json?: boolean | "strict" | "force" | undefined;
        }
        | undefined;
    options?: {
        /** Scope separator character. Some providers may require a different separator. Defaults to empty space */
        scopeSeparator?: string | undefined;
        /**
         * Setup how credentials are encoded when options.authorizationMethod is header.
         * Use loose if your provider doesn't conform to the OAuth 2.0 specification.
         * Defaults to strict
         */
        credentialsEncodingMode?: "strict" | "loose" | undefined;
        /** Format of data sent in the request body. Defaults to form. */
        bodyFormat?: "form" | "json" | undefined;
        /**
         * Indicates the method used to send the client.id/client.secret authorization params at the token request.
         * If set to body, the bodyFormat option will be used to format the credentials.
         * Defaults to header
         */
        authorizationMethod?: "header" | "body" | undefined;
    } | undefined;
}

export type TokenType = "access_token" | "refresh_token";

export interface Token {
    [x: string]: unknown;
}

export interface AccessToken {
    /**
     * Immutable object containing the token object provided while constructing a new access token instance.
     * This property will usually have the schema as specified by RFC6750,
     * but the exact properties may vary between authorization servers.
     */
    token: Token;

    /**
     * Determines if the current access token is definitely expired or not
     * @param expirationWindowSeconds Window of time before the actual expiration to refresh the token. Defaults to 0.
     */
    expired(expirationWindowSeconds?: number): boolean;

    /**
     * Refreshes the current access token
     *
     * @param params Optional argument for additional API request params.
     * @param [params.scope] String or array of strings representing the application privileges
     * @param [httpOptions] Optional http options passed through the underlying http library
     */
    refresh(params?: {
        scope?: string | string[] | undefined;
    }, httpOptions?: WreckHttpOptions): Promise<AccessToken>;

    /**
     * Revokes either the access or refresh token depending on the {tokenType} value
     *
     * @param tokenType A string containing the type of token to revoke (access_token or refresh_token)
     * @param [httpOptions] Optional http options passed through the underlying http library
     */
    revoke(tokenType: TokenType, httpOptions?: WreckHttpOptions): Promise<void>;

    /**
     * Revokes both the current access and refresh tokens
     *
     * @param [httpOptions] Optional http options passed through the underlying http library
     */
    revokeAll(httpOptions?: WreckHttpOptions): Promise<void>;
}

export interface WreckHttpOptions {
    baseUrl?: string | undefined;
    socketPath?: string | undefined;
    payload?: unknown;
    headers?: { [key: string]: unknown } | undefined;
    redirects?: false | number | undefined;
    redirect303?: boolean | undefined;
    beforeRedirect?:
        | ((
            redirectMethod: string,
            statusCode: number,
            location: string,
            resHeaders: { [key: string]: unknown },
            redirectOptions: unknown,
            next: () => {},
        ) => void)
        | undefined;
    redirected?: ((statusCode: number, location: string, req: unknown) => void) | undefined;
    timeout?: number | undefined;
    maxBytes?: number | undefined;
    rejectUnauthorized?: boolean | undefined;
    agent?: unknown;
    secureProtocol?: string | undefined;
    ciphers?: string | undefined;
    events?: boolean | undefined;
    json?: boolean | "strict" | "force" | undefined;
    gunzip?: boolean | "force" | undefined;
}

/**
 * The [Authorization Code](https://oauth.net/2/grant-types/authorization-code/) grant type is used by confidential
 * and public clients to exchange an authorization code for an access token.
 * After the user returns to the client via the redirect URL,
 * the application will get the authorization code from the URL and use it to request an access token.
 */
export class AuthorizationCode<ClientIdName extends string = "client_id"> {
    constructor(options: ModuleOptions<ClientIdName>);

    /**
     * Get a valid redirect URL used to redirect users to an authorization page
     *
     * @param params
     * @param params.redirectURI String representing the registered application URI where the user is redirected after authentication
     * @param params.scope String or array of strings representing the application privileges
     * @param params.state String representing an opaque value used by the client to main the state between the request and the callback
     *
     * @return the absolute authorization url
     */
    authorizeURL(
        params?:
            & {
                /** A string that represents the Client-ID */
                [key in ClientIdName]?: string;
            }
            & {
                redirect_uri?: string | undefined;
                scope?: string | string[] | undefined;
                state?: string | undefined;
            },
    ): string;

    /**
     * Requests and returns an access token from the authorization server
     *
     * @param params
     * @param params.code Authorization code (from previous step)
     * @param params.redirectURI String representing the registered application URI where the user is redirected after authentication
     * @param [params.scope] String or array of strings representing the application privileges
     * @param [httpOptions] Optional http options passed through the underlying http library
     */
    getToken(params: AuthorizationTokenConfig, httpOptions?: WreckHttpOptions): Promise<AccessToken>;

    /**
     * Creates a new access token instance from a plain object
     *
     * @param token Plain object representation of an access token
     */
    createToken(token: Token): AccessToken;
}

export interface AuthorizationTokenConfig {
    /** Authorization code (from previous step) */
    code: string;
    /** String representing the registered application URI where the user is redirected after authentication */
    redirect_uri: string;
    /** String or array of strings representing the application privileges */
    scope?: string | string[] | undefined;
}

/**
 * The [Resource Owner Password Credentials](https://oauth.net/2/grant-types/password/) grant type
 * is a way to exchange a user's credentials for an access token.
 * Because the client application has to collect the user's password and send it to the authorization server,
 * it is not recommended that this grant be used at all anymore.
 */
export class ResourceOwnerPassword<ClientIdName extends string = "client_id"> {
    constructor(options: ModuleOptions<ClientIdName>);

    /**
     * Requests and returns an access token from the authorization server
     *
     * @param params
     * @param params.username A string representing the registered username
     * @param params.password A string representing the registered password
     * @param [params.scope] A String or array of strings representing the application privileges
     * @param [httpOptions] Optional http options passed through the underlying http library
     */
    getToken(params: PasswordTokenConfig, httpOptions?: WreckHttpOptions): Promise<AccessToken>;

    /**
     * Creates a new access token instance from a plain object
     *
     * @param token Plain object representation of an access token
     */
    createToken(token: Token): AccessToken;
}

/**
 * Get a new access token using the current grant type.
 */
export interface PasswordTokenConfig {
    /** A string that represents the registered username */
    username: string;
    /** A string that represents the registered password. */
    password: string;
    /** A string or array of strings that represents the application privileges */
    scope?: string | string[];

    /**
     * Additional options will be automatically serialized as params for the token request.
     */
    [key: string]: unknown;
}

/**
 * The [Client Credentials](https://oauth.net/2/grant-types/client-credentials/) grant type
 * is used by clients to obtain an access token outside of the context of a user.
 * This is typically used by clients to access resources about themselves rather than to access a user's resources.
 */
export class ClientCredentials<ClientIdName extends string = "client_id"> {
    constructor(options: ModuleOptions<ClientIdName>);

    /**
     * Requests and returns an access token from the authorization server
     *
     * @param params
     * @param [params.scope] A String or array of strings representing the application privileges
     * @param [httpOptions] Optional http options passed through the underlying http library
     */
    getToken(params: ClientCredentialTokenConfig, httpOptions?: WreckHttpOptions): Promise<AccessToken>;

    /**
     * Creates a new access token instance from a plain object
     *
     * @param token Plain object representation of an access token
     */
    createToken(token: Token): AccessToken;
}

export interface ClientCredentialTokenConfig {
    /** A string that represents the application privileges */
    scope?: string | string[] | undefined;

    [key: string]: unknown;
}
