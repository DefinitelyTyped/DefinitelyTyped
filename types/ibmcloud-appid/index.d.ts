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
}

// tslint:disable-next-line:no-unnecessary-class
export class SelfServiceManager {
    constructor(options: SelfServiceOptions);
}

// tslint:disable-next-line:no-unnecessary-class
export class UserProfileManager {
    constructor();
}

// tslint:disable-next-line:no-unnecessary-class
export class UnauthorizedException {
    constructor();
}
