// Type definitions for secure-password 4.0
// Project: https://github.com/emilbayes/secure-password#readme
// Definitions by: Jarom Loveridge <https://github.com/jloveridge>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = SecurePassword;

/**
 * Making password storage safer for all.
 *
 * @example
 * // with async-await
 *
 * import SecurePassword = require('secure-password')
 *
 * // Initialise our password policy
 * const pwd = new SecurePassword()
 *
 * const userPassword = Buffer.from('my secret password');
 *
 * // Register user
 * const hash = await pwd.hash(userPassword)
 *
 * // Save hash somewhere
 * const result = await pwd.verify(userPassword, hash)
 *
 * switch (result) {
 *   case SecurePassword.INVALID_UNRECOGNIZED_HASH:
 *     console.error('This hash was not made with secure-password. Attempt legacy algorithm')
 *     return
 *   case SecurePassword.INVALID:
 *     console.log('Invalid password')
 *     return
 *   case SecurePassword.VALID:
 *     console.log('Authenticated')
 *     return
 *   case SecurePassword.VALID_NEEDS_REHASH:
 *     console.log('Yay you made it, wait for us to improve your safety')
 *
 *     try {
 *       const improvedHash = await pwd.hash(userPassword)
 *       // Save improvedHash somewhere
 *     } catch (err) {
 *       console.error('You are authenticated, but we could not improve your safety this time around')
 *     }
 *     return
 * }
 *
 * @example
 * // with continuation-passing-style (callbacks)
 *
 * import SecurePassword = require('secure-password')
 *
 * // Initialise our password policy
 * const pwd = new SecurePassword()
 *
 * const userPassword = Buffer.from('my secret password')
 *
 * // Register user
 * pwd.hash(userPassword, (err, hash) => {
 *   if (err) throw err
 *
 *   // Save hash somewhere
 *   pwd.verify(userPassword, hash, (err, result) => {
 *     if (err) throw err
 *
 *     switch (result) {
 *       case SecurePassword.INVALID_UNRECOGNIZED_HASH:
 *         console.error('This hash was not made with secure-password. Attempt legacy algorithm')
 *         return
 *       case SecurePassword.INVALID:
 *         console.log('Invalid password')
 *         return
 *       case SecurePassword.VALID:
 *         console.log('Authenticated')
 *         return
 *       case SecurePassword.VALID_NEEDS_REHASH:
 *         console.log('Yay you made it, wait for us to improve your safety')
 *
 *         pwd.hash(userPassword, (err, improvedHash) => {
 *           if (err) console.error('You are authenticated, but we could not improve your safety this time around')
 *
 *           // Save improvedHash somewhere
 *         })
 *         return
 *     }
 *   })
 * })
 */
declare class SecurePassword {
    /**
     * Make a new instance of SecurePassword which will contain your settings.
     * You can view this as a password policy for your application.
     */
    constructor(opts?: SecurePassword.Options);

    readonly memlimit: number;
    readonly opslimit: number;

    /**
     * Create a hash of the password. The hashing is done by a separate worker as to not
     * block the event loop, so normal execution and I/O can continue.
     *
     * @param passwordBuffer The password to hash. Must be a `Buffer` of length
     * `SecurePassword.PASSWORD_BYTES_MIN` - `SecurePassword.PASSWORD_BYTES_MAX`.
     * @returns A buffer of length `SecurePassword.HASH_BYTES`.
     */
    hash(passwordBuffer: Buffer): Promise<Buffer>;
    hash(
        passwordBuffer: Buffer,
        cb: (
            err: Error | null,
            /**
             * Will be a buffer of length `SecurePassword.HASH_BYTES`.
             */
            hash: Buffer,
        ) => void,
    ): void;

    /**
     * Create a hash of the password buffer. The hashing is done on the same thread as
     * the event loop, therefore normal execution and I/O will be blocked.
     *
     * @param passwordBuffer The password to hash. Must be a `Buffer` of length
     * `SecurePassword.PASSWORD_BYTES_MIN` - `SecurePassword.PASSWORD_BYTES_MAX`.
     * @returns A buffer of length `SecurePassword.HASH_BYTES`.
     */
    hashSync(passwordBuffer: Buffer): Buffer;

    /**
     * Takes buffer `passwordBuffer` and hashes it and then safely compares it to the
     * buffer `hashBuffer`. The hashing is done by a separate worker as to not block the
     * event loop, so normal execution and I/O can continue.
     *
     * @param passwordBuffer The password to verify. Must be a `Buffer` of length
     * `SecurePassword.PASSWORD_BYTES_MIN` - `SecurePassword.PASSWORD_BYTES_MAX`.
     * @param hashBuffer The hash to compare against. Must be a Buffer of length
     * `SecurePassword.HASH_BYTES`.
     * @return A symbol describing the verification result. If return value is
     * `SecurePassword.NEEDS_REHASH` you should call `securePassword.hash()` with
     * `passwordBuffer` and save the new hash for next time. Be careful not to introduce a
     * bug where a user trying to login multiple times, successfully, in quick succession
     * makes your server do unnecessary work.
     */
    verify(passwordBuffer: Buffer, hashBuffer: Buffer): Promise<SecurePassword.VerificationResult>;
    verify(
        passwordBuffer: Buffer,
        hashBuffer: Buffer,
        cb: (err: Error | null, result: SecurePassword.VerificationResult) => void,
    ): void;

    /**
     * Takes buffer `passwordBuffer` and hashes it and then safely compares it to the
     * buffer `hashBuffer`. The hashing is done on the same thread as the event loop,
     * therefore normal execution and I/O will be blocked.
     *
     * @param passwordBuffer The password to verify. Must be a `Buffer` of length
     * `SecurePassword.PASSWORD_BYTES_MIN` - `SecurePassword.PASSWORD_BYTES_MAX`.
     * @param hashBuffer The hash to compare against. Must be a Buffer of length
     * `SecurePassword.HASH_BYTES`.
     * @return A symbol describing the verification result. If return value is
     * `SecurePassword.NEEDS_REHASH` you should call `securePassword.hash()` with
     * `passwordBuffer` and save the new hash for next time. Be careful not to introduce a
     * bug where a user trying to login multiple times, successfully, in quick succession
     * makes your server do unnecessary work.
     */
    verifySync(passwordBuffer: Buffer, hashBuffer: Buffer): SecurePassword.VerificationResult;

    /**
     * Size of the `hashBuffer` buffer returned by `hash()` and `hashSync()` and used by
     * `verify()` and `verifySync()`.
     */
    static readonly HASH_BYTES: number;

    /** Minimum length of the `passwordBuffer` buffer. */
    static readonly PASSWORD_BYTES_MIN: number;
    /** Maximum length of the `passwordBuffer` buffer. */
    static readonly PASSWORD_BYTES_MAX: number;

    /** Minimum value for the `opts.memlimit` option. */
    static readonly MEMLIMIT_MIN: number;
    /** Maximum value for the `opts.memlimit` option. */
    static readonly MEMLIMIT_MAX: number;

    /** Minimum value for the `opts.opslimit` option. */
    static readonly OPSLIMIT_MIN: number;
    /** Maximum value for the `opts.opslimit` option. */
    static readonly OPSLIMIT_MAX: number;

    /** Default value for the `opts.memlimit` option. */
    static readonly MEMLIMIT_DEFAULT: number;
    /** Default value for the `opts.opslimit` option. */
    static readonly OPSLIMIT_DEFAULT: number;

    /** The password was verified and is valid. */
    static readonly VALID: unique symbol;
    /** The password was invalid. */
    static readonly INVALID: unique symbol;
    /** The password was verified and is valid, but needs to be rehashed with new parameters. */
    static readonly VALID_NEEDS_REHASH: unique symbol;
    /**
     * The hash was unrecognized and therefore could not be verified. As an implementation
     * detail it is currently very cheap to attempt verifying unrecognized hashes, since this
     * only requires some lightweight pattern matching.
     */
    static readonly INVALID_UNRECOGNIZED_HASH: unique symbol;
}

declare namespace SecurePassword {
    interface Options {
        /**
         * Constrained by the constants `SecurePassword.MEMLIMIT_MIN` - `SecurePassword.MEMLIMIT_MAX`.
         * Default value should be fast enough for a general purpose web server without your users
         * noticing too much of a load time.
         *
         * @default SecurePassword.MEMLIMIT_DEFAULT
         */
        memlimit?: number | undefined;
        /**
         * Constrained by the constants `SecurePassword.OPSLIMIT_MIN` - `SecurePassword.OPSLIMIT_MAX`.
         * Default value should be fast enough for a general purpose web server without your users
         * noticing too much of a load time.
         *
         * @default SecurePassword.OPSLIMIT_DEFAULT
         */
        opslimit?: number | undefined;
    }

    type VerificationResult =
        // tslint:disable-next-line no-unnecessary-qualifier
        | typeof SecurePassword.INVALID_UNRECOGNIZED_HASH
        // tslint:disable-next-line no-unnecessary-qualifier
        | typeof SecurePassword.INVALID
        // tslint:disable-next-line no-unnecessary-qualifier
        | typeof SecurePassword.VALID_NEEDS_REHASH
        // tslint:disable-next-line no-unnecessary-qualifier
        | typeof SecurePassword.VALID;
}
