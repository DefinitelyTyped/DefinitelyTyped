declare module "node-vault-client" {
    export default class VaultClient {
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
        __log: any;
        __api: VaultApiClient;
        /**
         */
        private __auth;
        __namespace: any;
        /**
         * @param {Object} authConfig
         * @param {string} authConfig.type
         * @param {string} authConfig.mount
         * @param {Object} authConfig.config
         * @param {VaultApiClient} api
         * @return {VaultBaseAuth}
         */
        private __getAuthProvider;
        /**
         * Populates Vault's values to NPM "config" module
         */
        fillNodeConfig(): any;
        getHeaders(token: any): {
            'X-Vault-Token': any;
            'X-Vault-Namespace': any;
        } | {
            'X-Vault-Token': any;
            'X-Vault-Namespace'?: undefined;
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
        private __setupLogger;
    }

    class VaultApiClient {
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
        __config: any;
        _logger: any;
        makeRequest(method: any, path: any, data: any, headers: any): any;
    }

    class Lease {
        static fromResponse(response: any): Lease;
        constructor(requestId: any, leaseId: any, leaseDuration: any, renewable: any, data: any);
        __requestId: any;
        __leaseId: any;
        __leaseDuration: any;
        __renewable: any;
        __data: any;
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

    class VaultNodeConfig {
        constructor(vault: any);
        __vault: any;
        __nodeConfig: any;
        /**
         * Populates Vault's values to "node-config"
         */
        populate(): any;
        /**
         */
        private __getSubstitutionMap;
        __traverse(o: any, func: any): void;
    }

    class VaultError extends Error {
        constructor(message: any, error: any);
        name: any;
        message: any;
    }
    class InvalidArgumentsError extends VaultError {
    }
    class InvalidAWSCredentialsError extends InvalidArgumentsError {
    }
    class AuthTokenExpiredError extends VaultError {
    }

    class AuthToken {
        static fromResponse(response: any): AuthToken;
        /**
         *
         * @param {string} id
         * @param {string} accessor
         * @param {number} createdAt - UNIX timestamp
         * @param {number|null} expiresAt - UNIX timestamp
         * @param {number} explicitMaxTtl - in seconds
         * @param {number} numUses
         * @param {boolean} isRenewable
         */
        constructor(id: string, accessor: string, createdAt: number, expiresAt: number | null, explicitMaxTtl: number, numUses: number, isRenewable: boolean);
        __id: string;
        __accessor: string;
        __createdAt: number;
        __expiresAt: any;
        __explicitMaxTtl: number;
        __numUses: number;
        __isRenewable: boolean;
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

    class VaultAppRoleAuth extends VaultBaseAuth {
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
        __roleId: string;
        __secretId: string;
        _authenticate(): any;
    }

    class VaultBaseAuth {
        /**
         * @param {VaultApiClient} apiClient
         * @param {Object} logger
         * @param {String} mount - Vault's mount point
         */
        constructor(apiClient: VaultApiClient, logger: any, mount: string);
        __apiClient: VaultApiClient;
        protected _log: any;
        _mount: string;
        __authToken: AuthToken;
        __refreshTimeout: any;
        /**
         * @returns {Promise<AuthToken>}
         */
        protected _authenticate(): Promise<AuthToken>;
        getAuthToken(): any;
        /**
         * @returns {Promise<AuthToken>}
         */
        protected _getTokenEntity(tokenId: any): Promise<AuthToken>;
        /**
         * @returns {boolean}
         */
        protected _reauthenticationAllowed(): boolean;
        /**
         * @param {AuthToken} authToken
         */
        private __setupTokenRefreshTimer;
        /**
         * @param {AuthToken} authToken
         * @returns {Promise.<AuthToken>}
         */
        private __renewToken;
    }

    class VaultIAMAuth extends VaultBaseAuth {
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
        __role: string;
        __iam_server_id_header_value: string;
        __namespace: any;
        __credentialChain: any;
        /**
         * @inheritDoc
         */
        _authenticate(): any;
        /**
         * Credentials resolved by {@see @aws-sdk/credential-providers}
         *
         * @returns {Promise<AwsCredentialIdentity>}
         */
        private __getCredentials;
        /**
         * Prepare vault auth request body
         *
         * @param stsRequest
         * @returns {Object} {@link https://www.vaultproject.io/docs/auth/aws.html#via-the-api}
         */
        private __getVaultAuthRequestBody;
        /**
         * Prepare signed request to AWS STS :: GetCallerIdentity
         *
         * @param credentials
         */
        private __getStsRequest;
        /**
         * @param string
         */
        private __base64encode;
        /**
         * @link https://github.com/hashicorp/vault/issues/2810
         * @link https://golang.org/pkg/net/http/#Header
         *
         * @param {Object} headers
         * @returns {Object}
         */
        private __headersLikeGolangStyle;
        _validateCredentialsConfig(credentials: any): void;
    }

    class VaultKubernetesAuth extends VaultBaseAuth {
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
        __role: string;
        __tokenPath: string;
        _authenticate(): any;
    }

    class VaultTokenAuth extends VaultBaseAuth {
        /**
         * @param {Object} connConfig - see {@link VaultBaseAuth#constructor}
         * @param {Object} config
         * @param {String} config.token
         * @param {String} mount - Vault's  mount point ("token" by default)
         */
        constructor(connConfig: any, logger: any, config: {
            token: string;
        }, mount: string);
        __token: string;
    }
}
