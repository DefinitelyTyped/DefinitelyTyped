// Type definitions for netlify-auth-providers 1.0
// Project: https://www.npmjs.com/package/netlify-auth-providers
// Definitions by: Drazi Crendraven <https://github.com/drazisil/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Config {
    site_id?: string;
    base_url?: string;
}

export interface AuthenticatorConfig {
    provider: string;
    scope?: string;
}

export default class Authenticator {
    constructor(config: Config);

    authenticate(options: AuthenticatorConfig, cb: (err: Error, data: any) => void): void;
}
