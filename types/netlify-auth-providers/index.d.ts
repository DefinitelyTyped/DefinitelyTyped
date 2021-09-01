// Type definitions for netlify-auth-providers 1.0.0-alpha5
// Project: https://www.npmjs.com/package/netlify-auth-providers
// Definitions by: Drazi Crendraven <https://github.com/drazisil/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'netlify-auth-providers' {
    interface Config {
        site_id?: string;
        base_url?: string;
    }

    interface AuthenticatorConfig {
        provider: string;
        scope?: string;
    }

    class Authenticator {
        constructor(config: Config);

        authenticate(options: AuthenticatorConfig, cb: (err: Error, data: any) => void): void;
    }

    export default Authenticator;
}
