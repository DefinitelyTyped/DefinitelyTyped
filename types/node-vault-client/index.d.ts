interface VaultOptions {
    api: {
        url: string;
        apiVersion?: string;
    };
    auth: {
        type: string;
        config: any;
    };
    logger: any;
}

declare class VaultClient {
    static boot(name: string, options?: VaultOptions): VaultClient;
    static get(name: string): VaultClient;
    static clear(name?: string): void;

    constructor(options: VaultOptions);

    fillNodeConfig(): any;
    getHeaders(token: any): { "X-Vault-Token": any; "X-Vault-Namespace"?: any };
    read(path: string): Promise<Lease>;
    list(path: string): Promise<Lease>;
    write(path: any, data: object): Promise<any>;
}

declare class VaultApiClient {
    constructor(config: { url: string; apiVersion?: string }, logger: any);
    makeRequest(method: any, path: any, data: any, headers: any): any;
}

declare class Lease {
    static fromResponse(response: any): Lease;
    constructor(requestId: any, leaseId: any, leaseDuration: any, renewable: any, data: any);
    getValue(key: string): any;
    getData(): any;
    isRenewable(): boolean;
}

declare class VaultNodeConfig {
    constructor(vault: any);
    populate(): any;
}

declare class VaultError extends Error {
    constructor(message: any, error: any);
    name: any;
    message: any;
}

declare class InvalidArgumentsError extends VaultError { }
declare class InvalidAWSCredentialsError extends InvalidArgumentsError { }
declare class AuthTokenExpiredError extends VaultError { }

declare class AuthToken {
    static fromResponse(response: any): AuthToken;
    constructor(
        id: string,
        accessor: string,
        createdAt: number,
        expiresAt: number | null,
        explicitMaxTtl: number,
        numUses: number,
        isRenewable: boolean
    );
    getId(): string;
    getAccessor(): string;
    isExpired(): boolean;
    isRenewable(): boolean;
    getExpiresAt(): number | null;
}

declare class VaultAppRoleAuth extends VaultBaseAuth {
    constructor(
        apiClient: VaultApiClient,
        logger: any,
        config: { role_id: string; secret_id?: string },
        mount: string
    );
}

declare class VaultBaseAuth {
    constructor(apiClient: VaultApiClient, logger: any, mount: string);
    getAuthToken(): any;
}

declare class VaultIAMAuth extends VaultBaseAuth {
    constructor(
        api: VaultApiClient,
        logger: any,
        config: { role: string; AWSCredentials?: any; iam_server_id_header_value?: string },
        mount: string
    );
}

declare class VaultKubernetesAuth extends VaultBaseAuth {
    constructor(
        apiClient: VaultApiClient,
        logger: any,
        config: { role: string; tokenPath?: string },
        mount: string
    );
}

declare class VaultTokenAuth extends VaultBaseAuth {
    constructor(
        connConfig: any,
        logger: any,
        config: { token: string },
        mount: string
    );
}

declare namespace VaultClient {
    export {
        AuthToken,
        AuthTokenExpiredError,
        InvalidArgumentsError,
        InvalidAWSCredentialsError,
        Lease,
        VaultApiClient,
        VaultAppRoleAuth,
        VaultBaseAuth,
        VaultError,
        VaultIAMAuth,
        VaultKubernetesAuth,
        VaultNodeConfig,
        VaultTokenAuth,
    };
}

export = VaultClient;
