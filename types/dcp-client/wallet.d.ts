// In Node.js programs, calling `init()` injects `dcp/*` modules into the module cache.
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "dcp/wallet" {
    export default interface Wallet {
        /**
         * [See docs](https://docs.dcp.dev/specs/wallet-api.html#wallet-api)
         * Gets a keystore from the wallet
         * @returns a Promise which will be fulfilled with a AuthKeystore object.
         * @param options AuthKeystoreOptions
         */
        get(options: AuthKeystoreOptions): Promise<AuthKeystore>;

        /**
         * This function behaves exactly the same as get(),
         * except its default keystore file is the id keystore instead of the default keystore.
         */
        getId(): Promise<number>;

        /**
         * This function will add the provided keystore to the wallet API internal cache,
         * which will return the same keystore when get is called with the same name.
         *  @param keystore Keystore
         *  @param name string = ‘default’
         */
        add(keystore: Keystore, name: string): Promise<number>;

        /**
         * This function will clear the wallet API’s internal keystore cache.
         * @param keystore Keystore
         */
        addId(keystore: Keystore): Promise<number>;

        /**
         * This function will clear the wallet API’s internal keystore cache.
         */
        clear(): Promise<void>;

        /**
         * Gets a keystore from the disk
         * @returns a Promise which will be fulfilled with a AuthKeystore object.
         * @param options LoadOptions
         */
        load(options: LoadOptions): Promise<LoadResult>;

        Keystore: KeystoreConstructor;
        Address: typeof Address;
        PrivateKey: typeof PrivateKey;
    }

    interface AuthKeystoreOptions {
        /**
         * The keystore name.
         */
        name: string | "default";

        /**
         * An optional, user-defined identifier used for caching keystores.
         */
        contextId?: string | undefined;

        /**
         *  An optional name for the job that they keystore is being requested for.
         */
        jobName?: string | undefined;

        /**
         * Try an empty password before prompting user. Defaults to true.
         */
        checkEmpty: boolean | true;
    }

    /**
     * A class that represents a data structure which can store a (public) Address and a private key. This object is the
     * preferred way to communicate both addresses and private keys through DCP APIs. This is not the keystore object
     * used by an underlying API / third-party library.
     */
    interface Keystore {
        /**
         * An instance of {@link Address} which represents the (public) address in
         * the {@link Keystore}.
         */
        address: Address;
        /**
         * When not undefined, it is used to generate the message which is printed
         * to prompt for the passphrase during the unlock method.
         */
        label?: string;
    }

    interface KeystoreConstructor {
        /**
         * Constructs a locked keystore.
         *
         * This form accepts no arguments and returns a Keystore object that
         * corresponds to a randomly-selected private key. This form will prompt the
         * user for a password to encrypt itself with.
         */
        new(): Promise<Keystore>;

        /**
         * Constructs a locked keystore.
         *
         * This form accepts as its argument null and a passphrase, and returns a
         * Keystore object that corresponds to a randomly-selected private key,
         * encrypted with the supplied passphrase.
         *
         * @param privateKey If null, a randomly private key will be used.
         * @param passphrase The passphrase to encrypt the private key.
         */
        new(privateKey: null, passphrase: string): Promise<Keystore>;
    }

    const Keystore: KeystoreConstructor;

    class AuthKeystore extends Keystore {}

    /**
     * An object representing DCP Addresses.
     *
     * All Addresses used within DCP or DCP Applications should be represented by Address objects, and all comparisons
     * between Addresses and Address-like values must be done with the {@link Address.prototype.eq} method.
     */
    class Address {
        /**
         * If the passed address is a string, it should be (but is not required to be) in checksum format; a leading
         * `0x` is not required.
         *
         * If the passed address is a instance of {@link PrivateKey} or {@link Address}, the address associated with the
         * object used.
         *
         * If the passed address is any other type of object, we coerce the object with `toString(16)` before working
         * with it (`BigNumber` and similar objects are expected to “just work”).
         *
         * @param address The address value used to construct the object.
         */
        constructor(address: string | Address | PrivateKey | object);
        /**
         * Compares the equality two Addresses, or an {@link Address} and a {@link PrivateKey}.
         * @param address The address to check equality against.
         */
        eq(address: Address | PrivateKey): boolean;
        /**
         * Determines if the {@link Address} corresponds to a given {@link PrivateKey}.
         *
         * @param privateKey The private key to check.
         */
        ct(privateKey: PrivateKey): boolean;
        /**
         * Validates signatures in order to implement the `Connection.Request.authorizedFor method`.
         *
         * The first argument is the `messageBody` as a `string` or an `object`, and the second argument is the
         * `signature`.
         *
         * @param messageBody The thing to verify the signature against.
         * @param signature The signature to verify.
         */
        verifySignature(messageBody: string | object, signature: string): boolean;
    }

    /**
     * An object that represents DCP private keys.
     *
     * All raw private keys used throughout DCP or DCP Applications should be stored in PrivateKey objects, however for
     * security reasons, raw private keys should stored as little as possible: the preferred method to store a private
     * key is via a keystore file or Keystore object.
     *
     * All comparisons between PrivateKeys and PrivateKey-like values must be done with the
     * {@link PrivateKey.prototype.eq} method.
     */
    class PrivateKey {
        /**
         * The PrivateKey Constructor accepts as its argument a `string` or `object` corresponding to the private key
         * we want to represent.
         *
         * If the passed private key is a `string`, it should (but is not required to) have the `0x` prefix. If the
         * argument is an `object`, and is a {@link Keystore} object, we extract the private key; otherwise we coerce
         * the object with `toString(16)` before working with it (`BigNumber` and similar objects are expected to "just
         * work").
         *
         * @param privateKey The private key value to construct the object with.
         */
        constructor(privateKey: string | Keystore | object);
        /**
         * Compares this {@link PrivateKey} against another private key.
         *
         * Any argument which is acceptable to the constructor is acceptable to this method.
         *
         * @param privateKey The private key to compare against.
         */
        eq(privateKey: string | Keystore | object): boolean;
        /**
         * Determines if the {@link PrivateKey} corresponds to a given {@link Address}.
         *
         * @param address The address to check the correspondence of.
         */
        ct(address: Address): boolean;
    }

    interface LoadResult {
        keystore: Keystore;
        safe: boolean | false;
    }

    interface LoadOptions {
        /**
         * The keystore filename.
         */
        filename: string | undefined;

        /**
         * The keystore label or filename.
         */
        name: string | undefined;

        /**
         * Override paths.
         */
        dir: string | undefined;

        /**
         *  Override the default keystore directory search path (Node.js Only). This must be a complete pathname.
         */
        paths?: string[] | LoadOptions["dir"];
    }
}
