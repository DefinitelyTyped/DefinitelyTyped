export = OpenIdClient;
declare function OpenIdClient(options: OpenIdClientConstructorOptions): void;
declare class OpenIdClient {
    constructor(options: OpenIdClientConstructorOptions);
    getAuthorizationUri(options: AuthorizationRequestOptions): string;
    exchangeCode(
        accessCode: string,
        redirectUri: string,
        codeVerifier?: string
    ): import('../oauth2/OAuth2Client').TokenResponse;
    exchangePassword(
        username: string,
        password: string
    ): import('../oauth2/OAuth2Client').TokenResponse;
    exchangeRefreshToken(
        refreshToken: string,
        scopes?: string | string[]
    ): import('../oauth2/OAuth2Client').TokenResponse;
    exchangeClientCredentials(
        scopes?: string | string[]
    ): import('../oauth2/OAuth2Client').TokenResponse;
    introspect(accessToken: string): TokenIntrospectionResponse;
    revoke(token: string, tokenType?: string): void;
    getUserInfo(accessToken: string, subject?: string): any;
    getCodeVerifier(): string;
    getCodeChallenge(verifier: string): string;
    getSigningKey(kid: string): CryptoPKey;
}
declare namespace OpenIdClient {
    export {
        CryptoPKey,
        TokenIntrospectionResponse,
        OpenIdClientConstructorOptions,
        AuthorizationRequestOptions,
    };
}
interface OpenIdClientConstructorOptions {
    clientId?: string;
    clientSecret?: string;
    issuer?: string;
    authEndpoint?: string;
    jwks?: string;
    tokenEndpoint?: string;
    userInfoEndpoint?: string;
    introspectionEndpoint?: string;
    revocationEndpoint?: string;
}
interface AuthorizationRequestOptions {
    redirectUri: string;
    scopes?: string | string[];
    responseTypes?: string[];
    responseMode?: string;
    state?: string;
    nonce?: string;
    codeChallenge?: string;
    loginHint?: string;
    idTokenHint?: string;
    maxAge?: number;
    prompt?: string | string[];
    extraParams?: Record<string, string>;
}
type TokenIntrospectionResponse = import('../oauth2/OAuth2Client').TokenIntrospectionResponse;
type CryptoPKey = import('../crypto/CryptoPKey');
