// Type definitions for @onflow/fcl 0.0.78
// Project: https://github.com/onflow/fcl-js
// Definitions by: Louis Guitton <https://github.com/louisguitton/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fcl;

// CONFIGURATION
type Environment = 'local' | 'canarynet' | 'testnet' | 'mainnet';

/**
 * @see {@link https://docs.onflow.org/fcl/reference/api/#common-configuration-keys}
 * @see {@link https://docs.onflow.org/fcl/reference/configure-fcl/}
 */
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


// WALLET INTERACTIONS
/**
 * @see {@link https://github.com/onflow/fcl-discovery/blob/master/data/services.json}
 */
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

/**
 * Calling this method will authenticate the current user via any wallet that supports FCL.
 * Once called, FCL will initiate communication with the configured `discovery.wallet`
 * endpoint which lets the user select a wallet to authenticate with.
 * Once the wallet provider has authenticated the user, FCL will set the values on the
 * [current user object]{@link CurrentUserObject} for future use and authorization.
 *
 * @param options `authenticate` can also take a service returned from {@link discovery}
 *
 * @see {@link https://docs.onflow.org/fcl/reference/api/#authenticate}
 */
export function authenticate(options?: AuthenticateOptions): void;

// Ref: https://docs.onflow.org/fcl/reference/api/#unauthenticate
/**
 * Logs out the current user and sets the values on the [current user object]{@link CurrentUserObject} to null.
 */
export function unauthenticate(): void;

/**
 * A **convenience method** that calls {@link unauthenticate} and then {@link authenticate} for the current user.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#reauthenticate}
 */
export function reauthenticate(): void;

/**
 * A **convenience method** that calls and is equivalent to {@link authenticate}.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#signup}
 */
export function signUp(): void;

/**
 * A **convenience method** that calls and is equivalent to {@link authenticate}.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#login}
 */
export function logIn(): void;

/**
 * A **convenience method** that produces the needed authorization details for the
 * current user to submit transactions to Flow. It defines a signing function that
 * connects to a user's wallet provider to produce signatures to submit transactions.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#authz}
 */
export function authz(): AuthorizationObject;

/**
 * Holds the [current user]{@link CurrentUserObject}, if set, and offers a set of
 * functions to manage the authentication and authorization of the user.
 */
export function currentUser(): CurrentUserObject;

export namespace currentUser {
    /**
     * @param callback The callback will be called with the [current user]{@link CurrentUserObject}
     * as the first argument when the current user is set or removed.
     */
    function subscribe(callback: (user: CurrentUserObject) => void): void;

    /**
     * Returns the [current user object]{@link CurrentUserObject}.
     * This is the same object that is set and available on {@link subscribe}.
     */
    function snapshot(): CurrentUserObject;

    /**
     * Equivalent to {@link fcl.authenticate}.
     * @param options `authenticate` can also take a service returned from {@link fcl.discovery}
     */
    function authenticate(options?: AuthenticateOptions): void;

    /**
     * Equivalent to {@link fcl.unauthenticate}.
     * @see {@link https://docs.onflow.org/fcl/reference/api/#currentuserunauthenticate}
     */
    function unauthenticate(): void;

    /**
     * Equivalent to {@link fcl.authz}.
     * @see {@link https://docs.onflow.org/fcl/reference/api/#currentuserauthorization}
     */
    function authorization(): void;

    /**
     * A method to use allowing the user to personally sign data via FCL Compatible Wallets/Services.
     * @param message A hexadecimal string to be signed
     * @see {@link https://docs.onflow.org/fcl/reference/api/#currentusersignusermessage}
     */
    function signUserMessage(message: string): Promise<CompositeSignature[]>;
}

/**
 * @see {@link https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/draft-v2.md#compositesignature}
 */
type CompositeSignature = {
    f_type: 'CompositeSignature';
    f_vsn: string;
    addr: Address;
    keyId: number;
    signature: string;
};

/**
 * Discovery abstracts away code so that developers don't have to deal with the
 * discovery of Flow compatible wallets, integration, or authentication.
 * Using `discovery` from FCL allows dapps to list and authenticate with
 * wallets while having full control over the UI.
 * Common use cases for this are login or registration pages.
 * (Alternatively, if you don't need control over your UI you can
 * continue to use the `discovery.wallet` config value documented
 * in the Quickstart for the simplest configuration.)
 * @see {@link https://docs.onflow.org/fcl/reference/api/#discovery-1}
 */
export namespace discovery {
    /**
     * By default, limited functionality services, like Ledger,
     * require apps to opt-in in order to display to users.
     * This is so users don't authenticate only to later find out
     * certain services cannot complete certain actions.
     * To enable specific limited functionality services in an application,
     * use the `discovery.authn.include` property in your configuration
     * with a value of an array of services you'd like your app to
     * opt-in to displaying for users.
     * @see {@link https://docs.onflow.org/fcl/reference/api/#authn}
     */
    namespace authn {
        /**
         * Return a list of `authn` services.
         * @see {@link https://docs.onflow.org/fcl/reference/api/#discoveryauthnsnapshot}
         */
        function snapshot(): WalletService[];

        /**
         * @param callback The callback sent to `subscribe` will be called with a list of `authn` services.
         * @see {@link https://docs.onflow.org/fcl/reference/api/#discoveryauthnsubscribecallback}
         */
        // TODO: check param
        function subscribe(callback: (res: { results: WalletService[] }) => void): void;
    }
}

// ON-CHAIN INTERACTIONS
// TODO

// TYPES, INTERFACES, AND DEFINITIONS
/**
 * @see {@link https://docs.onflow.org/fcl/reference/api/#payload}
 */
type SigningPayload = {
    /**
     * The encoded string which needs to be used to produce the signature.
     */
    message: string;
    /**
     * The encoded string which needs to be used to produce the signature.
     */
    addr: Address;
    /**
     * The encoded string which needs to be used to produce the signature.
     */
    keyId: string;
    /**
     * The encoded string which needs to be used to produce the signature.
     */
    roles: string;
    /**
     * The raw transactions information, can be used to create the message
     * for additional safety and lack of trust in the supplied message.
     */
    voucher: Object;
};

/**
 * An object that contains all the information needed for FCL to sign a message with the user's signature.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#signableobject}
 */
type SignableObject = {
    /**
     * The address of the authorizer
     */
    addr: Address;
    /**
     * The index of the key to use during authorization. (Multiple keys on an account is possible).
     */
    keyId: number;
    /**
     * A {@link SigningFunction} that can produce a valid signature for a user from a message.
     */
    signature: SigningFunction;
};

/**
 * Consumes a payload and produces a signature for a transaction.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#signing-function}
 */
type SigningFunction = (options: SigningPayload) => Promise<SignableObject>;

/**
 * An authorization function must produce the information of the user that is going
 * to sign and a signing function to use the information to produce a signature.
 *
 * 📣 By default FCL exposes `fcl.authz` that produces the authorization object
 * for the current user (given they are signed in and only on the browser).
 * Replace this with your own function that conforms to this interface to
 * use it wherever an authorization object is needed.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#authorizationobject}
 */
type AuthorizationObject = {
    /**
     * The address of the authorizer
     */
    addr: Address;
    /**
     * A function that allows FCL to sign using the authorization details and produce a valid signature.
     */
    signingFunction: SigningFunction;
    /**
     * The index of the key to use during authorization. (Multiple keys on an account is possible).
     */
    keyId: number;
    /**
     * A number that is incremented per transaction using they keyId.
     */
    sequenceNum: number;
};

/**
 * @see {@link https://docs.onflow.org/fcl/reference/api/#address}
 */
type Address = string;

/**
 * @see {@link https://docs.onflow.org/fcl/reference/api/#currentuserobject}
 */
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
