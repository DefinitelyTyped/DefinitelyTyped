// Type definitions for @onflow/fcl 0.0.78
// Project: https://github.com/onflow/fcl-js
// Definitions by: Louis Guitton <https://github.com/louisguitton/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fcl;

type Environment = 'local' | 'canarynet' | 'testnet' | 'mainnet';

// Ref: https://docs.onflow.org/fcl/reference/api/#common-configuration-keys
// Ref: https://docs.onflow.org/fcl/reference/configure-fcl/
type ConfigurationOptions = {
    /**
     * API URL for the Flow Blockchain Access Node you want to be communicating
     * with. See all available access node endpoints
     * [here]{@link https://docs.onflow.org/access-api/#flow-access-node-endpoints}.
     */
    'accessNode.api': string;
    /**
     * Used in conjunction with stored interactions.
     */
    env?: Environment;
    /**
     * Points FCL at the Wallet or Wallet Discovery mechanism.
     */
    'discovery.wallet': string;
    /**
     * ALPHA - Endpoint for alternative configurable Wallet Discovery mechanism.
     * Read more on
     * [discovery]{@link https://docs.onflow.org/fcl/reference/api/#discovery}.
     */
    'discovery.authn.endpoint'?: string;
    /**
     * Your applications title, can be requested by wallets and other services.
     */
    'app.detail.title'?: string;
    /**
     * Url for your applications icon, can be requested by wallets and other
     * services.
     */
    'app.detail.icon'?: string;
};

type Configuration = {
    /**
     * Set a configuration value.
     *
     * @param key - The key of the value to set. Must be one of the options for
     * the configuration at initialization.
     * @param value - The value to set.
     */
    put(key: keyof ConfigurationOptions, value: string): Configuration;
    /**
     * Set a configuration value.
     *
     * @param key - The key of the value to set. May start with `'0x'`.
     * Configuration keys that start with `'0x'` will be replaced in FCL scripts
     * and transactions, this allows you to write your script or transaction
     * Cadence code once and not have to change it when you point your
     * application at a difference instance of the Flow Blockchain.
     * @param value - The value to set.
     */
    put(key: string, value: string | number): Configuration;
    /**
     * Get a configuration value.
     *
     * @param key - The key of the value to get.
     * @param fallback - An optional fallback value to return in case the value
     * was not set.
     */
    get(key: string, fallback?: string | number): Promise<string | number | undefined>;
};

/**
 * FCL has a mechanism that lets you configure various aspects of FCL. The
 * main idea here (from an FCL perspective) should be that when you move from
 * one instance of the Flow Blockchain to another (Local Emulator to Testnet
 * to Mainnet) the only thing you should need to change (once again from an
 * FCL perspective) is your configuration.
 *
 * ```typescript
 * import * as fcl from "@onflow/fcl"
 *
 * const configuration = fcl.config({
 *   "accessNode.api": "https://access-testnet.onflow.org",
 *   "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
 *   "0xProfile": "0xba1132bc08f82fe2"
 * });
 *
 * configuration.put('foo', 'bar');
 * configuration.get('foo').then(console.log); // ↵ "bar"
 * ```
 *
 * @param options - The initial configuration values.
 */
export function config(options?: ConfigurationOptions): Configuration;

// Ref: https://github.com/onflow/fcl-discovery/blob/master/data/services.json
type WalletService = {
    f_type: 'Service';
    f_vsn: string;
    type: 'authn';
    method: string;
    uid: string;
    endpoint: string;
    provider: {
        address: Address;
        name: string;
        icon: string;
        description: string;
        color: string;
        supportEmail: string;
        website: string;
    };
};
type AuthenticateOptions = {
    service: WalletService;
};
// Ref: https://docs.onflow.org/fcl/reference/api/#authenticate
/**
 * Calling this method will authenticate the current user via any wallet that supports FCL.
 * Once called, FCL will initiate communication with the configured `discovery.wallet`
 * endpoint which lets the user select a wallet to authenticate with.
 * Once the wallet provider has authenticated the user, FCL will set the values on the
 * [current user object]{@link CurrentUserObject} for future use and authorization.
 * 
 * ⚠️ `authenticate` can also take a service returned from {@link discovery} with `fcl.authenticate({ service })`.
 */
export function authenticate(options?: AuthenticateOptions): void;

// Ref: https://docs.onflow.org/fcl/reference/api/#address
type Address = string;

// Ref: https://docs.onflow.org/fcl/reference/api/#currentuserobject
type CurrentUserObject = {
    /**
     * The public address of the current user
     */
    addr: Address;
    /**
     * Allows wallets to specify a content identifier for user metadata.
     */
    cid: string;
    /**
     * Allows wallets to specify a time-frame for a valid session.
     */
    expiresAt: number;
    /**
     * A type identifier used internally by FCL.
     */
    f_type: string;
    /**
     * FCL protocol version.
     */
    f_vsn: string;
    /**
     * If the user is logged in.
     */
    loggedIn: boolean;
    /**
     * A list of trusted services that express ways of interacting with the current user's identity,
     * including means to further discovery, authentication, authorization, or other kinds of interactions.
     */
    services: Object[];
};
