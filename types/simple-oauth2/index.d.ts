// Type definitions for simple-oauth2 4.1
// Project: https://github.com/lelylan/simple-oauth2
// Definitions by: Michael Müller <https://github.com/mad-mike>,
//                 Troy Lamerton <https://github.com/troy-lamerton>
//                 Martín Rodriguez <https://github.com/netux>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Do Nam <https://github.com/namdien177>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export interface ModuleOptions<ClientIdName extends string = "client_id"> {
    client: {
        /** Service registered client id. Required. */
        id: string;
        /** Service registered client secret. Required. */
        secret: string;
        /** Parameter name used to send the client secret. Default to client_secret. */
        secretParamName?: string;
        /** Parameter name used to send the client id. Default to client_id. */
        idParamName?: ClientIdName;
    };
    auth: {
        /** String used to set the host to request the tokens to. Required. */
        tokenHost: string;
        /** String path to request an access token. Default to /oauth/token. */
        tokenPath?: string;
        /** String path to revoke an access token. Default to /oauth/revoke. */
        revokePath?: string;
        /** String used to set the host to request an "authorization code". Default to the value set on auth.tokenHost. */
        authorizeHost?: string;
        /** String path to request an authorization code. Default to /oauth/authorize. */
        authorizePath?: string;
    };
    /**
     * Used to set global options to the internal http library (wreck).
     * All options except baseUrl are allowed
     * Defaults to header.Accept = "application/json"
     */
    http?: {};
    options?: {
        /** Format of data sent in the request body. Defaults to form. */
        bodyFormat?: "json" | "form";
        /**
         * Indicates the method used to send the client.id/client.secret authorization params at the token request.
         * If set to body, the bodyFormat option will be used to format the credentials.
         * Defaults to header
         */
        authorizationMethod?: "header" | "body";
    };
}

export type TokenType = "access_token" | "refresh_token";

export interface Token {
    [x: string]: any;
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

    /** Refresh the access token */
    refresh(params?: {}): Promise<AccessToken>;

    /** Revoke access or refresh token */
    revoke(tokenType: TokenType): Promise<void>;

    /** Revoke both the existing access and refresh tokens */
    revokeAll(): Promise<void>;
}

export interface WreckHttpOptions {
    baseUrl?: string;
    socketPath?: string;
    payload?: any;
    headers?: { [key: string]: any };
    redirects?: number;
    redirect303?: boolean;
    beforeRedirect?: (
        redirectMethod: string,
        statusCode: number,
        location: string,
        resHeaders: { [key: string]: any },
        redirectOptions: any,
        next: () => {},
    ) => void;
    redirected?: (statusCode: number, location: string, req: any) => void;
    timeout?: number;
    maxBytes?: number;
    rejectUnauthorized?: boolean;
    downstreamRes?: any;
    agent?: any;
    secureProtocol?: string;
    ciphers?: string;
    events?: boolean;
    json?: true | "strict" | "force";
    gunzip?: boolean | "force";
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
        params?: {
            /** A string that represents the Client-ID */
            [key in ClientIdName]?: string;
        } & {
            redirect_uri?: string;
            scope?: string | string[];
            state?: string;
        },
    ): string;

    /**
     * Requests and returns an access token from the authorization server
     *
     * @param params
     * @param params.code Authorization code received by the callback URL
     * @param params.redirectURI String representing the registered application URI where the user is redirected after authentication
     * @param [params.scope] String or array of strings representing the application privileges
     * @param [httpOptions] Optional http options passed through the underlying http library
     */
    getToken(params: AuthorizationTokenConfig, httpOptions?: WreckHttpOptions): Promise<AccessToken>;

    /**
     * Creates a new access token by providing a token object as specified by RFC6750.
     * @param token
     */
    createToken(token: Token): AccessToken;
}

export interface AuthorizationTokenConfig {
    /** Authorization code received by the callback URL */
    code: string;
    /** String representing the registered application URI where the user is redirected after authentication */
    redirect_uri: string;
    /** String or array of strings representing the application privileges */
    scope?: string | string[];
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
     * Creates a new access token by providing a token object as specified by RFC6750.
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
    scope: string | string[];

    /**
     * Additional options will be automatically serialized as params for the token request.
     */
    [key: string]: any;
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
     * Creates a new access token by providing a token object as specified by RFC6750.
     *
     * @param token Plain object representation of an access token
     */
    createToken(token: Token): AccessToken;
}

export interface ClientCredentialTokenConfig {
    /** A string that represents the application privileges */
    scope?: string | string[];

    [key: string]: any;
}
