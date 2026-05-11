export interface WhoIsResult {
    domainName: string;
    updatedDate?: string | undefined;
    creationDate?: string | undefined;
    expirationDate?: string | undefined;
    registrar?: string | undefined;
    status?: string[] | undefined;
    isAvailable: boolean;
}

export interface BasicAuthCredentials {
    password?: string | undefined;
    username?: string | undefined;
}

export interface HttpProxy {
    ipaddress?: string | undefined;
    port?: number | undefined;
    authentication?: BasicAuthCredentials | undefined;
    type?: number | undefined;
}

export interface WhoIsOptions {
    proxy?: HttpProxy | undefined;
}

export function lookup(domainName: string, whoIsOptions?: WhoIsOptions): Promise<WhoIsResult>;
