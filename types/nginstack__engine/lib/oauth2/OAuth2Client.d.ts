export = OAuth2Client;
declare function OAuth2Client(options: OAuth2ClientConstructorOptions): void;
declare class OAuth2Client {
    constructor(options: OAuth2ClientConstructorOptions);
    getAuthorizationUri(options?: AuthorizationRequestOptions): string;
    exchangeCode(accessCode: string, redirectUri: string, codeVerifier?: string): TokenResponse;
    exchangePassword(username: string, password: string): TokenResponse;
    exchangeRefreshToken(refreshToken: string, scopes?: string | string[]): TokenResponse;
    exchangeClientCredentials(scopes?: string | string[]): TokenResponse;
    introspect(accessToken: string): TokenIntrospectionResponse;
    revoke(token: string, tokenType?: string): void;
    getDeviceAuthorization(scopes?: string | string[]): DeviceAuthorizationResponse;
    exchangeDeviceAuthorization(
        deviceAuthResponse: DeviceAuthorizationResponse,
        timeout?: number
    ): TokenResponse;
    getCodeVerifier(): string;
    getCodeChallenge(verifier: string): string;
}
declare namespace OAuth2Client {
    export {
        encryptClientSecret,
        OAuth2ClientConstructorOptions,
        AuthorizationRequestOptions,
        TokenResponse,
        TokenIntrospectionResponse,
        DeviceAuthorizationResponse,
    };
}
interface OAuth2ClientConstructorOptions {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    authEndpoint?: string;
    authType?: string;
    tokenEndpoint?: string;
    introspectionEndpoint?: string;
    revocationEndpoint?: string;
    deviceAuthorizationEndpoint?: string;
}
interface AuthorizationRequestOptions {
    redirectUri: string;
    scopes?: string | string[];
    responseType?: string;
    state: string;
    codeChallenge?: string;
}
interface TokenResponse {
    accessToken: string;
    refreshToken?: string;
    tokenType: string;
    expiresIn?: number;
    scope: string[];
    idToken?: string;
}
interface TokenIntrospectionResponse {
    active: boolean;
    clientId?: string;
    username?: string;
    tokenType?: string;
    issuedAt?: number;
    expiresAt?: number;
    notBefore?: number;
    scopes?: string[];
}
interface DeviceAuthorizationResponse {
    verificationUri: string;
    verificationUriComplete: string;
    userCode: string;
    deviceCode: string;
    expiresIn: number;
}
declare function encryptClientSecret(secret: string): string;
