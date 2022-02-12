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

// TODO: Builders
// TODO: Interaction

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

// TODO: AccountObject

/**
 * @see {@link https://docs.onflow.org/fcl/reference/api/#address}
 */
type Address = string;

// TODO: ArgumentObject
// TODO: ArgumentFunction
// TODO: Authorization Function

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
 * Consumes a payload and produces a signature for a transaction.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#signing-function}
 */
type SigningFunction = (options: SigningPayload) => Promise<SignableObject>;

// TODO: TransactionRolesObject

/**
 * A event name in Flow must follow the format `A.{AccountAddress}.{ContractName}.{EventName}`
 * eg. `A.ba1132bc08f82fe2.Debug.Log`
 * @see {@link https://docs.onflow.org/fcl/reference/api/#eventname}
 */
type EventName = string;

// TODO: Contract
// TODO: KeyObject
// TODO: BlockObject
// TODO: BlockHeaderObject
// TODO: CollectionGuaranteeObject
// TODO: CollectionObject
// TODO: ResponseObject

/**
 * @see {@link https://docs.onflow.org/fcl/reference/api/#event-object}
 */
type EventObject = {
    /**
     * ID of the block that contains the event.
     */
    blockId: string;
    /**
     * Height of the block that contains the event.
     */
    blockHeight: number;
    /**
     * The timestamp of when the block was sealed in a `DateString` format. eg. '2021-06-25T13:42:04.227Z'
     */
    blockTimestamp: string;
    /**
     * A string containing the event name.
     */
    type: EventName;
    /**
     * Can be used to query transaction information, eg. via a Flow block
     * explorer.
     */
    transactionId: string;
    /**
     * Used to prevent replay attacks.
     */
    transactionIndex: number;
    /**
     * Used to prevent replay attacks.
     */
    eventIndex: number;
    /**
     * The data emitted from the event.
     */
    data: Record<string, unknown>;
};

/**
 * The status of a transaction will depend on the Flow blockchain network and which
 * phase it is in as it completes and is finalized.
 * @see {@link https://docs.onflow.org/fcl/reference/api/#transaction-statuses}
 */
export enum TransactionStatus {
    UNKNOWN = 0,
    /**
     * Transaction Pending - Awaiting Finalization
     */
    PENDING = 1,
    /**
     * Transaction Finalized - Awaiting Execution
     */
    FINALIZED = 2,
    /**
     * Transaction Executed - Awaiting Sealing
     */
    EXECUTED = 3,
    /**
     * Transaction Sealed - Transaction Complete. At this point the transaction
     * result has been committed to the blockchain.
     */
    SEALED = 4,
    /**
     * Transaction Expired
     */
    EXPIRED = 5,
}

/**
 * The access node GRPC implementation follows the standard GRPC Core status code spec.
 * @see {@link https://grpc.github.io/grpc/core/md_doc_statuscodes.html}
 */
export enum GRPCStatus {
    /**
     *  Not an error; returned on success.
     */
    OK = 0,
    /**
     * The operation was cancelled, typically by the caller.
     */
    CANCELLED = 1,
    /**
     * Unknown error. For example, this error may be returned when a
     * Status value received from another address space belongs to an error
     * space that is not known in this address space. Also errors raised by APIs
     * that do  not return enough error information may be converted to this
     * error.
     */
    UNKNOWN = 2,
    /**
     * The client specified an invalid argument. Note that
     * this differs from FAILED_PRECONDITION. INVALID_ARGUMENT indicates
     * arguments that are problematic regardless of the state of the system
     * (e.g., a malformed file name).
     */
    INVALID_ARGUMENT = 3,
    /**
     * The deadline expired before the operation could
     * complete. For operations that change the state of the system, this error
     * may be returned even if the operation has completed successfully. For
     * example, a successful response from a server could have been delayed
     * long.
     */
    DEADLINE_EXCEEDED = 4,
    /**
     * Some requested entity (e.g., file or directory) was not
     * found. Note to server developers: if a request is denied for an entire
     * class of users, such as gradual feature rollout or undocumented
     * allowlist, NOT_FOUND may be used. If a request is denied for some users
     * within a class of users, such as user-based access control,
     * PERMISSION_DENIED must be used.
     */
    NOT_FOUND = 5,
    /**
     * The entity that a client attempted to create (e.g., file
     * or directory) already exists.
     */
    ALREADY_EXISTS = 6,
    /**
     * The caller does not have permission to execute the
     * specified operation. PERMISSION_DENIED must not be used for rejections
     * caused by exhausting some resource (use RESOURCE_EXHAUSTED instead for
     * those errors). PERMISSION_DENIED must not be used if the caller can not
     * be identified (use UNAUTHENTICATED instead for those errors). This error
     * code does not imply the request is valid or the requested entity exists
     * or satisfies other pre-conditions.
     */
    PERMISSION_DENIED = 7,
    /**
     * Some resource has been exhausted, perhaps a per-user
     * quota, or perhaps the entire file system is out of space.
     */
    RESOURCE_EXHAUSTED = 8,
    /**
     * The operation was rejected because the system is
     * not in a state required for the operation's execution. For example, the
     * directory to be deleted is non-empty, an rmdir operation is applied to a
     * non-directory, etc. Service implementors can use the following guidelines
     * to decide between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE: (a) Use
     * UNAVAILABLE if the client can retry just the failing call. (b) Use
     * ABORTED if the client should retry at a higher level (e.g., when a
     * client-specified test-and-set fails, indicating the client should restart
     * a read-modify-write sequence). (c) Use FAILED_PRECONDITION if the client
     * should not retry until the system state has been explicitly fixed. E.g.,
     * if an "rmdir" fails because the directory is non-empty,
     * FAILED_PRECONDITION should be returned since the client should not retry
     * unless the files are deleted from the directory.
     */
    FAILED_PRECONDITION = 9,
    /**
     * The operation was aborted, typically due to a concurrency issue
     * such as a sequencer check failure or transaction abort. See the
     * guidelines above for deciding between FAILED_PRECONDITION, ABORTED, and
     * UNAVAILABLE.
     */
    ABORTED = 10,
    /**
     * The operation was attempted past the valid range. E.g.,
     * seeking or reading past end-of-file. Unlike INVALID_ARGUMENT, this error
     * indicates a problem that may be fixed if the system state changes. For
     * example, a 32-bit file system will generate INVALID_ARGUMENT if asked to
     * read at an offset that is not in the range [0,2^32-1], but it will
     * generate OUT_OF_RANGE if asked to read from an offset past the current
     * file size. There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE = 11,
    /**
     * The operation is not implemented or is not
     * supported/enabled in this service.
     */
    UNIMPLEMENTED = 12,
    /**
     * Internal errors. This means that some invariants expected by
     * the underlying system have been broken. This error code is reserved for
     * serious errors.
     */
    INTERNAL = 13,
    /**
     * The service is currently unavailable. This is most likely a
     * transient condition, which can be corrected by retrying with a backoff.
     * Note that it is not always safe to retry non-idempotent operations.
     */
    UNAVAILABLE = 14,
    /**
     * Unrecoverable data loss or corruption.
     */
    DATA_LOSS = 15,
    /**
     * The request does not have valid authentication
     * credentials for the operation.
     */
    UNAUTHENTICATED = 16,
}

// TODO: FType
