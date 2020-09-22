import * as React from 'react';
import { AuthContextInterface, AuthProviderProps } from "./types";
declare const AuthContext: React.Context<AuthContextInterface>;
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
declare const AuthContextConsumer: React.Consumer<AuthContextInterface>;
export { AuthContext, AuthContextConsumer };
