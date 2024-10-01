declare class VaultClient {
    /**
     * Boot an instance of Vault
     *
     * The instance will be stored in a local hash. Calling Vault.boot multiple
     * times with the same name will return the same instance.
     *
     * @param {String} name - Vault instance name
     * @param {Object} [options] - options for {@link Vault#constructor}.
     * @return Vault
     */
    static boot(name: string, options?: any): any;
    /**
     * Get an instance of Vault
     *
     * The instance will be stored in a local hash. Calling Vault.pop multiple
     * times with the same name will return the same instance.
     *
     * @param {String} name - Vault instance name
     * @return Vault
     */
    static get(name: string): any;
    /**
     * Clear named Vault instance
     *
     * If no name passed all named instances will be cleared.
     *
     * @param {String} [name] - Vault instance name, all instances will be cleared if no name were passed
     */
    static clear(name?: string): void;
    /**
     * Client constructor function.
     *
     * @param {Object} options
     * @param {Object} options.api
     * @param {String} options.api.url - the url of the vault server
     * @param {String} [options.api.apiVersion='v1']
     * @param {Object} options.auth
     * @param {String} options.auth.type
     * @param {Object} options.auth.config - auth configuration variables
     * @param {Object|false} options.logger - Logger that supports "error", "info", "warn", "trace", "debug" methods. Uses `console` by default. Pass `false` to disable logging.
     */
    constructor(options: {
        api: {
            url: string;
            apiVersion?: string;
        };
        auth: {
            type: string;
            config: any;
        };
        logger: any;
    });
    /**
     * Populates Vault's values to NPM "config" module
     */
    fillNodeConfig(): any;
    getHeaders(token: any): {
        "X-Vault-Token": any;
        "X-Vault-Namespace": any;
    } | {
        "X-Vault-Token": any;
        "X-Vault-Namespace"?: undefined;
    };
    /**
     * Read secret from Vault
     * @param {string} path - path to the secret
     * @returns {Promise<Lease>}
     */
    read(path: string): Promise<Lease>;
    /**
     * Retrieves secrets list
     *
     * @param {string} path - path to the secret
     * @returns {Promise<Lease>}
     */
    list(path: string): Promise<Lease>;
    /**
     * Writes data to Vault
     *
     * @param path - path used to write data
     * @param {object} data - data to write
     * @returns {Promise<T | never>}
     */
    write(path: any, data: object): Promise<any>;
}

declare class VaultApiClient {
    /**
     * @param {Object} config
     * @param {String} config.url - the url of the vault server
     * @param {String} [config.apiVersion='v1']
     * @param {Object} logger
     */
    constructor(config: {
        url: string;
        apiVersion?: string;
    }, logger: any);
    makeRequest(method: any, path: any, data: any, headers: any): any;
}

declare class Lease {
    static fromResponse(response: any): Lease;
    constructor(requestId: any, leaseId: any, leaseDuration: any, renewable: any, data: any);
    /**
     * @param {String} key
     * @returns {Object}
     */
    getValue(key: string): any;
    /**
     * @returns {Object}
     */
    getData(): any;
    /**
     * @returns {bool}
     */
    isRenewable(): boolean;
}

declare class VaultNodeConfig {
    constructor(vault: any);
    /**
     * Populates Vault's values to "node-config"
     */
    populate(): any;
}

declare class VaultError extends Error {
    constructor(message: any, error: any);
    name: any;
    message: any;
}

declare class InvalidArgumentsError extends VaultError {
}

declare class InvalidAWSCredentialsError extends InvalidArgumentsError {
}

declare class AuthTokenExpiredError extends VaultError {
}

declare class AuthToken {
    static fromResponse(response: any): AuthToken;
    /**
     * @param {string} id
     * @param {string} accessor
     * @param {number} createdAt - UNIX timestamp
     * @param {number|null} expiresAt - UNIX timestamp
     * @param {number} explicitMaxTtl - in seconds
     * @param {number} numUses
     * @param {boolean} isRenewable
     */
    constructor(
        id: string,
        accessor: string,
        createdAt: number,
        expiresAt: number | null,
        explicitMaxTtl: number,
        numUses: number,
        isRenewable: boolean,
    );
    /**
     * @returns {string}
     */
    getId(): string;
    getAccessor(): string;
    /**
     * @returns {boolean}
     */
    isExpired(): boolean;
    /**
     * @returns {boolean}
     */
    isRenewable(): boolean;
    /**
     * @returns {number|null} UNIX timestamp
     */
    getExpiresAt(): number | null;
}

declare class VaultAppRoleAuth extends VaultBaseAuth {
    /**
     * @param {VaultApiClient} apiClient - see {@link VaultBaseAuth#constructor}
     * @param {Object} config
     * @param {String} config.role_id - RoleID of the AppRole.
     * @param {String} [config.secret_id] - required when bind_secret_id is enabled SecretID belonging to AppRole.
     * @param {String} mount - Vault's  mount point ("approle" by default)
     */
    constructor(apiClient: VaultApiClient, logger: any, config: {
        role_id: string;
        secret_id?: string;
    }, mount: string);
}

declare class VaultBaseAuth {
    /**
     * @param {VaultApiClient} apiClient
     * @param {Object} logger
     * @param {String} mount - Vault's mount point
     */
    constructor(apiClient: VaultApiClient, logger: any, mount: string);
    getAuthToken(): any;
}

declare class VaultIAMAuth extends VaultBaseAuth {
    /**
     * @param {VaultApiClient} api - see {@link VaultBaseAuth#constructor}
     * @param {Object} logger
     * @param {VaultIAMAuthConfig} config
     * @param {String} mount - Vault's AWS Auth Backend mount point ("aws" by default)
     */
    constructor(api: VaultApiClient, logger: any, config: {
        /**
         * - Role name of the auth/{mount}/role/{name} backend.
         */
        role: string;
        /**
         * [credentials] - Optional. AWS Credentials
         */
        AWSCredentials?: any;
        /**
         * - Optional. Header's value X-Vault-AWS-IAM-Server-ID.
         */
        iam_server_id_header_value?: string;
    }, mount: string);
}

declare class VaultKubernetesAuth extends VaultBaseAuth {
    /**
     * @param {VaultApiClient} apiClient - see {@link VaultBaseAuth#constructor}
     * @param {Object} config
     * @param {String} config.role - Role configured in Vault Kubernetes Auth backend under which we want to issue Vault token.
     * @param {String} [config.tokenPath] - Path to the Kube JWT token. If omitted - default will be used.
     * @param {String} mount - Vault's  mount point ("kubernetes" by default)
     */
    constructor(apiClient: VaultApiClient, logger: any, config: {
        role: string;
        tokenPath?: string;
    }, mount: string);
}

declare class VaultTokenAuth extends VaultBaseAuth {
    /**
     * @param {Object} connConfig - see {@link VaultBaseAuth#constructor}
     * @param {Object} config
     * @param {String} config.token
     * @param {String} mount - Vault's  mount point ("token" by default)
     */
    constructor(connConfig: any, logger: any, config: {
        token: string;
    }, mount: string);
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
