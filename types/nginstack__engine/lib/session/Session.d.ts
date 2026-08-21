export = Session;
declare function Session(): void;
declare class Session {
    userKey: number;
    userName: string;
    id: string;
    lastPath: string;
    createKeyLicense: number;
    scriptURI: string | number;
    startupScriptsExecuted: boolean;
    application: number;
    realm: string;
    runtime: string;
    scope: string;
    identityProviderKey: number;
    clientId: string;
    trackingId: string;
    login(userName: string, password: string): boolean;
    loginByToken(token: string): boolean;
    logout(): void;
    setTimeout(
        minutes: number,
        hours?: number,
        days?: number,
        months?: number,
        years?: number
    ): void;
    authorizeToken(authToken: AuthToken): string;
    updateAuthToken(authToken: AuthToken): void;
    revokeAuthTokenByKey(key: number): void;
    newSessionToken(scope: string | string[]): string;
    loginByAuthToken(authToken: string): void;
    limitKeyCreation(limit: number): void;
    setPassword(newPassword: string): void;
    executeStartupScripts(): void;
    hasRequest(): boolean;
}
import AuthToken = require('../security/AuthToken.js');
