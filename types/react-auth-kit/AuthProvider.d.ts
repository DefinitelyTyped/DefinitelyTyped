import React from 'react';
import { TokenObjectParamsInterface } from "./types";
interface AuthProviderProps extends TokenObjectParamsInterface {
    children: React.ReactChildren;
}
/**
 * AuthProvider Functional Component
 *
 * @param children - Children Component
 * @param authCookieName - Cookie Name for Auth Storing
 * @param cookieDomain - Domain Name for the Cookies
 * @param cookieSecure - HTTP / HTTPS
 * @constructor
 */
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
 * @constructor
 */
declare const AuthProvider: React.FunctionComponent<AuthProviderProps>;
export default AuthProvider;
