export interface TokenInterface {
    authToken: string | null;
    authTokenType: string | null;
    expireAt: Date | null;
    authState: object | null;
}
export interface signInFunctionParams {
    token: string;
    tokenType: string | 'Bearer';
    expiresIn: number;
    authState: object;
}
export interface TokenObjectParamsInterface {
    authStorageType: 'cookie' | 'localstorage';
    authStorageName: string;
    authTimeStorageName: string;
    stateStorageName: string;
    cookieDomain?: string;
    cookieSecure?: boolean;
}
