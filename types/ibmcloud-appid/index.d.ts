// Type definitions for ibmcloud-appid 6.2
// Project: https://github.com/ibm-cloud-security/appid-serversdk-nodejs
// Definitions by: Younes A <https://github.com/younes-io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

/*~ You can declare types that are available via importing the module */
export interface StrategyOptions {
    [key: string]: any;
}

export interface SelfServiceOptions {
    iamApiKey?: string;
    managementUrl?: string;
    tenantId?: string;
    oAuthServerUrl?: string;
    iamTokenUrl?: string;
}

export class Strategy {
    authenticate: () => void;
}

export interface ApplicationIdentityToken {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
}

export interface CustomIdentityToken extends ApplicationIdentityToken {
    identityToken: string;
}

export interface UserSCIM {
    id: string;
    userName: string;
    [key: string]: any;
}

// tslint:disable-next-line:no-unnecessary-class
export class APIStrategy extends Strategy {
    constructor(options: StrategyOptions);
}

// tslint:disable-next-line:no-unnecessary-class
export class WebAppStrategy extends Strategy {
    constructor(options: StrategyOptions);
}

// tslint:disable-next-line:no-unnecessary-class
export class TokenManager {
    constructor(options: StrategyOptions);
    getApplicationIdentityToken: () => Promise<ApplicationIdentityToken | Error>;
    getCustomIdentityTokens: () => Promise<CustomIdentityToken | Error>;
}

// tslint:disable-next-line:no-unnecessary-class
export class SelfServiceManager {
    constructor(options: SelfServiceOptions);
    signUp: (userData: unknown, language: string, iamToken: string) => Promise<UserSCIM>;
}

// tslint:disable-next-line:no-unnecessary-class
export class UserProfileManager {
    constructor();
}

// tslint:disable-next-line:no-unnecessary-class
export class UnauthorizedException {
    constructor();
}
