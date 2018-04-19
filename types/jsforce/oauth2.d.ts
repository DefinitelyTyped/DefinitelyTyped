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

export class OAuth2 {
    constructor (options? : OAuth2Options);

    protected _postParams(options: any, callback: () => any): void

    loginUrl: string;
    authzServiceUrl: string;
    tokenServiceUrl: string;
    revokeServiceUrl: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;

    getAuthorizationUrl(params: any): string;
    refreshToken(code: string, callback?: () => any): Promise<any>;
    requestToken(code: string, callback?: () => any): Promise<any>;
    authenticate(username: string, password: string, callback?: () => any): Promise<any>;
    revokeToken(accessToken: string, callback?: () => any): Promise<any>;
}
