import { TokenInterface, TokenObjectParamsInterface } from "./types";
declare class TokenObject {
    private readonly authStorageName;
    private readonly stateStorageName;
    private readonly authTimeStorageName;
    private readonly cookieDomain?;
    private readonly cookieSecure?;
    private readonly authStorageTypeName;
    private readonly authStorageType;
    /**
     * TokenObject - Stores, retrieve and process tokens
     *
     * @param authStorageName
     * @param authStorageType
     * @param authTimeStorageName
     * @param stateStorageName
     * @param cookieDomain
     * @param cookieSecure
     * @constructor
     */
    constructor({ authStorageName, authStorageType, authTimeStorageName, stateStorageName, cookieDomain, cookieSecure }: TokenObjectParamsInterface);
    /**
     * Get the Initial Token
     *
     * @returns TokenInterface
     */
    initialToken(): TokenInterface;
    /**
     * Get the Initial Token from Cookie
     * If the React App uses Cookie for storing Auth info, this Function is called
     *
     * Called from this.initialToken
     *
     * @returns TokenInterface
     */
    initialCookieToken(): TokenInterface;
    /**
     * Get the Initial Token from LocalStorage
     * If the React App uses LocalStorage for storing Auth info, this Function is called
     *
     * Called from this.initialToken
     *
     * @returns TokenInterface
     */
    initialLSToken(): TokenInterface;
    /**
     * Check if the Initial token is valid or not,
     *
     * If the tokens are valid, then it response TokenObject with auth Information
     * Else it response TokenObject with null
     *
     * @param authToken
     * @param authTokenType
     * @param authTokenTime
     * @param stateCookie
     *
     * @returns TokenInterface
     *
     */
    checkTokenExist(authToken: string | null | undefined, authTokenType: string | null | undefined, authTokenTime: string | null | undefined, stateCookie: string | null | undefined): TokenInterface;
    /**
     * Sync Auth Tokens on time of login and logout
     *
     * Set the New Cookies or new Localstorage on login
     * Or Remove the old Cookies or old Localstorage on logout
     *
     * @param authState
     */
    syncTokens(authState: TokenInterface): void;
    /**
     * Set Cookies or localstorage on login
     *
     * @param authToken
     * @param authTokenType
     * @param expiresAt
     * @param authState
     */
    setToken(authToken: string, authTokenType: string, expiresAt: Date, authState: object): void;
    /**
     *
     * Set Cookie on time of Login
     *
     * @param authToken
     * @param authTokenType
     * @param expiresAt
     * @param authState
     */
    setCookieToken(authToken: string, authTokenType: string, expiresAt: Date, authState: object): void;
    /**
     * Set LocalStorage on time of Login
     *
     * @param authToken
     * @param authTokenType
     * @param expiresAt
     * @param authState
     */
    setLSToken(authToken: string, authTokenType: string, expiresAt: Date, authState: object): void;
    /**
     * Remove Tokens on time of Logout
     */
    removeToken(): void;
    /**
     * Remove Token from Cookies
     */
    removeCookieToken(): void;
    /**
     * Remove Token from LocalStorage
     */
    removeLSToken(): void;
}
export default TokenObject;
