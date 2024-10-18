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
