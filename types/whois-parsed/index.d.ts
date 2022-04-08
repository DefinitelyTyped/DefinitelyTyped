// Type definitions for whois-parsed 1.0
// Project: https://github.com/moneals/whois-parsed#readme
// Definitions by: Uche Chilaka <https://github.com/uchilaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface WhoIsResult {
    domainName: string;
    updatedDate?: string;
    creationDate?: string;
    expirationDate?: string;
    registrar?: string;
    status?: string[];
    isAvailable: boolean;
}

export interface BasicAuthCredentials {
    password?: string;
    username?: string;
}

export interface HttpProxy {
    ipaddress?: string;
    port?: number;
    authentication?: BasicAuthCredentials;
    type?: number;
}

export interface WhoIsOptions {
    proxy?: HttpProxy;
}

export function lookup(domainName: string, whoIsOptions?: WhoIsOptions): Promise<WhoIsResult>;
