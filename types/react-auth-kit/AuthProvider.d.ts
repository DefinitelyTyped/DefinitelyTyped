import * as React from 'react';
import { TokenInterface, TokenObjectParamsInterface } from "./types";
interface AuthProviderProps extends TokenObjectParamsInterface {
    children: React.ReactChildren;
}
/**
 * AuthContextInterface
 *
 * authState - Stores the value of authentication State
 * setAuthState - Sets the authState Value
 */
interface AuthContextInterface {
    authState: TokenInterface;
    setAuthState: React.Dispatch<React.SetStateAction<TokenInterface>>;
}
declare const AuthContext: React.Context<AuthContextInterface | null>;
/**
 * AuthProvider - The Authentication Context Provider
 *
 * @param children
 * @param authStorageName
 * @param authStorageType
 * @param authTimeStorageName
 * @param cookieDomain
 * @param cookieSecure
 * @param stateStorageName
 */
declare const AuthProvider: React.FunctionComponent<AuthProviderProps>;
export default AuthProvider;
declare const AuthContextConsumer: React.Consumer<AuthContextInterface | null>;
export { AuthContext, AuthContextConsumer };
