import * as React from "react";
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
export interface AuthContextInterface {
    authState: TokenInterface;
    setAuthState: React.Dispatch<React.SetStateAction<TokenInterface>>;
}
export interface AuthProviderProps extends TokenObjectParamsInterface {
    children: React.ReactChildren;
}
