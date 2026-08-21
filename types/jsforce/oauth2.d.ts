export interface OAuth2Options {
    authzServiceUrl?: string | undefined;
    tokenServiceUrl?: string | undefined;
    clientId?: string | undefined;
    clientSecret?: string | undefined;
    httpProxy?: string | undefined;
    loginUrl?: string | undefined;
    proxyUrl?: string | undefined;
    redirectUri?: string | undefined;
    refreshToken?: string | undefined;
    revokeServiceUrl?: string | undefined;
    authCode?: string | undefined;
    privateKeyFile?: string | undefined;
    privateKey?: string | undefined; // Used for sfdx auth files for legacy support reasons
}

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
}

export class OAuth2 {
    constructor(options?: OAuth2Options);

    loginUrl: string;
    authzServiceUrl: string;
    tokenServiceUrl: string;
    revokeServiceUrl: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;

    getAuthorizationUrl(params: {
        scope?: string | undefined;
        state?: string | undefined;
    }): string;
    refreshToken(code: string, callback?: (err: Error, tokenResponse: TokenResponse) => void): Promise<TokenResponse>;
    requestToken(code: string, callback?: (err: Error, tokenResponse: TokenResponse) => void): Promise<TokenResponse>;
    authenticate(
        username: string,
        password: string,
        callback?: (err: Error, tokenResponse: TokenResponse) => void,
    ): Promise<TokenResponse>;
    revokeToken(accessToken: string, callback?: (err: Error) => void): Promise<undefined>;
}
