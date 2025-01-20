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
    application: DBKey;
    realm: string;
    scope: string;
    clientId: string;
    trackingId: string;
    login(userName: string, password: string): boolean;
    loginByToken(token: string): boolean;
    logout(): void;
    setTimeout(
        minutes: number,
        opt_hours?: number,
        opt_days?: number,
        opt_months?: number,
        opt_years?: number
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
import DBKey = require('../dbkey/DBKey.js');
import AuthToken = require('../security/AuthToken.js');
