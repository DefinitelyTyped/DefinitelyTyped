import Bluebird = require("bluebird");

/** Creates a new simple-oauth2 client with the passed configuration */
export function create(options: ModuleOptions): OAuthClient;

export interface ModuleOptions {
    client: {
        /** Service registered client id. Required. */
        id: string;
        /** Service registered client secret. Required. */
        secret: string;
        /** Parameter name used to send the client secret. Default to client_secret. */
        secretParamName?: string | undefined;
        /** Parameter name used to send the client id. Default to client_id. */
        idParamName?: string | undefined;
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
         * Defaults to header.
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
    refresh(params: {}, callback: (error: any, result: AccessToken) => void): Bluebird<AccessToken>;
    refresh(callback?: (error: any, result: AccessToken) => void): Bluebird<AccessToken>;
    /** Revoke access or refresh token */
    revoke(tokenType: TokenType, callback?: (error: any) => void): Bluebird<void>;
}

export type AuthorizationCode = string;
export interface AuthorizationTokenConfig {
    /** Authorization code (from previous step) */
    code: AuthorizationCode;
    /** A string that represents the callback uri */
    redirect_uri: string;
}

export interface PasswordTokenConfig {
    /** A string that represents the registered username */
    username: string;
    /** A string that represents the registered password. */
    password: string;
    /** A string or array of strings that represents the application privileges */
    scope: string | string[];
}

export interface ClientCredentialTokenConfig {
    /** A string that represents the application privileges */
    scope?: string | string[] | undefined;
}

export interface OAuthClient {
    authorizationCode: {
        /**
         * Redirect the user to the autorization page
         * @return the absolute authorization url
         */
        authorizeURL(
            params?: {
                /** A key-value pair where key is ModuleOptions#client.idParamName and the value represents the Client-ID */
                [idParamName: string]: string | undefined;
            } & {
                /** A string that represents the registered application URI where the user is redirected after authentication */
                redirect_uri?: string | undefined;
                /** A string or array of strings that represents the application privileges */
                scope?: string | string[] | undefined;
                /** A string that represents an option opaque value used by the client to main the state between the request and the callback */
                state?: string | undefined;
            },
        ): string;

        /** Returns the Access Token object */
        getToken(params: AuthorizationTokenConfig, callback?: (error: any, result: Token) => void): Bluebird<Token>;
    };

    ownerPassword: {
        /** Returns the Access Token Object */
        getToken(params: PasswordTokenConfig, callback?: (error: any, result: Token) => void): Bluebird<Token>;
    };

    clientCredentials: {
        /** Returns the Access Token Object */
        getToken(params: ClientCredentialTokenConfig, callback?: (error: any, result: Token) => void): Bluebird<Token>;
    };

    accessToken: {
        /** Creates an OAuth2.AccessToken instance */
        create(tokenToUse: Token): AccessToken;
    };
}
