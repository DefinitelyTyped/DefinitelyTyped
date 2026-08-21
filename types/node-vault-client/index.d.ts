// eslint-disable-next-line @typescript-eslint/naming-convention
interface IAMAuthConfig {
    role: string;
    credentials?: {
        accessKeyId: string;
        secretAccessKey: string;
        sessionToken?: string | undefined;
    } | undefined;
    iam_server_id_header_value?: string | undefined;
}

interface AppRoleAuthConfig {
    role_id: string;
    secret_id?: string | undefined;
}

interface TokenAuthConfig {
    token: string;
}

interface KubernetesAuthConfig {
    role: string;
    tokenPath?: string | undefined;
}

type AuthConfig =
    | { type: "iam"; config: IAMAuthConfig; mount?: string | undefined }
    | { type: "appRole"; config: AppRoleAuthConfig; mount?: string | undefined }
    | { type: "token"; config: TokenAuthConfig; mount?: string | undefined }
    | { type: "kubernetes"; config: KubernetesAuthConfig; mount?: string | undefined };

interface ApiConfig {
    url: string;
    apiVersion?: string | undefined;
}

interface VaultOptions {
    api: ApiConfig;
    auth: AuthConfig;
    logger?: unknown | undefined;
}

declare class VaultClient {
    static boot(name: string, options?: VaultOptions): VaultClient;
    static get(name: string): VaultClient;
    static clear(name?: string): void;

    constructor(options: VaultOptions);

    fillNodeConfig(): Promise<void>;
    getHeaders(token: AuthToken): { "X-Vault-Token": string; "X-Vault-Namespace"?: string };
    read(path: string): Promise<Lease>;
    list(path: string): Promise<Lease>;
    write(path: string, data: Record<string, unknown>): Promise<void>;
}

declare class VaultApiClient {
    constructor(config: ApiConfig, logger: unknown | undefined);
    makeRequest(
        method: string,
        path: string,
        data: Record<string, unknown> | null,
        headers: Record<string, string>,
    ): Promise<unknown>;
}

declare class Lease {
    static fromResponse(response: unknown): Lease;
    constructor(
        requestId: string,
        leaseId: string,
        leaseDuration: number,
        renewable: boolean,
        data: Record<string, unknown>,
    );
    getValue(key: string): unknown;
    getData(): Record<string, unknown>;
    isRenewable(): boolean;
}

declare class VaultNodeConfig {
    constructor(vault: VaultClient);
    populate(): unknown;
}

declare class VaultError extends Error {
    constructor(message: string, error: unknown);
    name: string;
    message: string;
}

declare class InvalidArgumentsError extends VaultError {}
declare class InvalidAWSCredentialsError extends InvalidArgumentsError {}
declare class AuthTokenExpiredError extends VaultError {}

declare class AuthToken {
    static fromResponse(response: unknown): AuthToken;
    constructor(
        id: string,
        accessor: string,
        createdAt: number,
        expiresAt: number | null,
        explicitMaxTtl: number,
        numUses: number,
        isRenewable: boolean,
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
        logger: unknown | undefined,
        config: AppRoleAuthConfig,
        mount: string,
    );
}

declare class VaultBaseAuth {
    constructor(apiClient: VaultApiClient, logger: unknown | undefined, mount: string);
    getAuthToken(): unknown;
}

declare class VaultIAMAuth extends VaultBaseAuth {
    constructor(
        api: VaultApiClient,
        logger: unknown | undefined,
        config: IAMAuthConfig,
        mount: string,
    );
}

declare class VaultKubernetesAuth extends VaultBaseAuth {
    constructor(
        apiClient: VaultApiClient,
        logger: unknown | undefined,
        config: KubernetesAuthConfig,
        mount: string,
    );
}

declare class VaultTokenAuth extends VaultBaseAuth {
    constructor(
        connConfig: unknown,
        logger: unknown | undefined,
        config: TokenAuthConfig,
        mount: string,
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
