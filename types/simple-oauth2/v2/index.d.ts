/** Creates a new simple-oauth2 client with the passed configuration */
export function create<ClientIdName extends string = "client_id">(
    options: ModuleOptions<ClientIdName>,
): OAuthClient<ClientIdName>;

export interface ModuleOptions<ClientIdName extends string = "client_id"> {
    client: {
        /** Service registered client id. Required. */
        id: string;
        /** Service registered client secret. Required. */
        secret: string;
        /** Parameter name used to send the client secret. Default to client_secret. */
        secretParamName?: string | undefined;
        /** Parameter name used to send the client id. Default to client_id. */
        idParamName?: ClientIdName | undefined;
    };
    auth: {
        /** String used to set the host to request the tokens to. Required. */
        tokenHost: string;
        /** String path to request an access token. Default to /oauth/token. */
        tokenPath?: string | undefined;
        /** String path to revoke an access token. Default to /oauth/revoke. */
        revokePath?: string | undefined;
        /** String used to set the host to request an "authorization code". Default to the value set on auth.tokenHost. */
        authorizeHost?: string | undefined;
        /** String path to request an authorization code. Default to /oauth/authorize. */
        authorizePath?: string | undefined;
    };
    /**
     * Used to set global options to the internal http library (wreck).
     * All options except baseUrl are allowed
     * Defaults to header.Accept = "application/json"
     */
    http?: {} | undefined;
    options?: {
        /** Format of data sent in the request body. Defaults to form. */
        bodyFormat?: "json" | "form" | undefined;
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
    [x: string]: any;
}

export interface AccessToken {
    token: Token;

    /** Check if the access token is expired or not */
    expired(): boolean;
    /** Refresh the access token */
    refresh(params?: {}): Promise<AccessToken>;
    /** Revoke access or refresh token */
    revoke(tokenType: TokenType): Promise<void>;
    /** Revoke both the existing access and refresh tokens */
    revokeAll(): Promise<void>;
}

export type AuthorizationCode = string;
export interface AuthorizationTokenConfig {
    [key: string]: any;

    /** Authorization code (from previous step) */
    code: AuthorizationCode;
    /** A string that represents the callback uri */
    redirect_uri: string;
    /** A string or array of strings that represents the application privileges */
    scope?: string | string[] | undefined;
}

export interface PasswordTokenConfig {
    [key: string]: any;

    /** A string that represents the registered username */
    username: string;
    /** A string that represents the registered password. */
    password: string;
    /** A string or array of strings that represents the application privileges */
    scope: string | string[];
}

export interface ClientCredentialTokenConfig {
    [key: string]: any;

    /** A string that represents the application privileges */
    scope?: string | string[] | undefined;
}

export interface WreckHttpOptions {
    baseUrl?: string | undefined;
    socketPath?: string | undefined;
    payload?: any;
    headers?: { [key: string]: any } | undefined;
    redirects?: number | undefined;
    redirect303?: boolean | undefined;
    beforeRedirect?:
        | ((
            redirectMethod: string,
            statusCode: number,
            location: string,
            resHeaders: { [key: string]: any },
            redirectOptions: any,
            next: () => {},
        ) => void)
        | undefined;
    redirected?: ((statusCode: number, location: string, req: any) => void) | undefined;
    timeout?: number | undefined;
    maxBytes?: number | undefined;
    rejectUnauthorized?: boolean | undefined;
    downstreamRes?: any;
    agent?: any;
    secureProtocol?: string | undefined;
    ciphers?: string | undefined;
    events?: boolean | undefined;
    json?: true | "strict" | "force" | undefined;
    gunzip?: boolean | "force" | undefined;
}

export interface OAuthClient<ClientIdName extends string = "client_id"> {
    authorizationCode: {
        /**
         * Redirect the user to the autorization page
         * @return the absolute authorization url
         */
        authorizeURL(
            params?:
                & {
                    /** A string that represents the Client-ID */
                    [key in ClientIdName]?: string;
                }
                & {
                    /** A string that represents the registered application URI where the user is redirected after authentication */
                    redirect_uri?: string | undefined;
                    /** A string or array of strings that represents the application privileges */
                    scope?: string | string[] | undefined;
                    /** A string that represents an option opaque value used by the client to main the state between the request and the callback */
                    state?: string | undefined;
                },
        ): string;

        /** Returns the Access Token object */
        getToken(params: AuthorizationTokenConfig, httpOptions?: WreckHttpOptions): Promise<Token>;
    };

    ownerPassword: {
        /** Returns the Access Token Object */
        getToken(params: PasswordTokenConfig, httpOptions?: WreckHttpOptions): Promise<Token>;
    };

    clientCredentials: {
        /** Returns the Access Token Object */
        getToken(params: ClientCredentialTokenConfig, httpOptions?: WreckHttpOptions): Promise<Token>;
    };

    accessToken: {
        /** Creates an OAuth2.AccessToken instance */
        create(tokenToUse: Token, httpOptions?: WreckHttpOptions): AccessToken;
    };
}
