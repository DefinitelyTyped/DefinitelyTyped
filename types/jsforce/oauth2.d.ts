export interface OAuth2Options {
    authzServiceUrl?: string;
    tokenServiceUrl?: string;
    clientId?: string;
    clientSecret?: string;
    httpProxy?: string;
    loginUrl?: string;
    proxyUrl?: string;
    redirectUri?: string;
    refreshToken?: string;
    revokeServiceUrl?: string;
    authCode?: string;
    privateKeyFile?: string;
    privateKey?: string; // Used for sfdx auth files for legacy support reasons
}

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
}

export class OAuth2 {
    constructor(options?: OAuth2Options);

    protected _postParams(options: any, callback: () => any): void

    loginUrl: string;
    authzServiceUrl: string;
    tokenServiceUrl: string;
    revokeServiceUrl: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;

    getAuthorizationUrl(params: {
        scope?: string,
        state?: string
    }): string;
    refreshToken(code: string, callback?: () => any): Promise<TokenResponse>;
    requestToken(code: string, callback?: () => any): Promise<TokenResponse>;
    authenticate(username: string, password: string, callback?: () => any): Promise<TokenResponse>;
    revokeToken(accessToken: string, callback?: () => any): Promise<undefined>;
}
