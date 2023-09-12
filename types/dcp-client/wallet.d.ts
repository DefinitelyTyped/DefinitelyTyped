// In Node.js programs, calling `init()` injects `dcp/*` modules into the module cache.
// tslint:disable-next-line:no-single-declare-module
declare module 'dcp/wallet' {
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

        Keystore: typeof Keystore;
    }

    interface AuthKeystoreOptions {
        /**
         * The keystore name.
         */
        name: string | 'default';

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
    class Keystore {
        /**
         * Constructs a locked keystore.
         *
         * This form accepts no arguments and returns a Keystore object that
         * corresponds to a randomly-selected private key. This form will prompt the
         * user for a password to encrypt itself with.
         */
        constructor();

        /**
         * Constructs a locked keystore.
         *
         * This form accepts as its argument null and a passphrase, and returns a
         * Keystore object that corresponds to a randomly-selected private key,
         * encrypted with the supplied passphrase.
         *
         * @param privateKey - If null, a randomly private key will be used.
         * @param passphrase - The passphrase to encrypt the private key.
         */
        constructor(privateKey: null, passphrase: string);
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

    class AuthKeystore extends Keystore {}

    class Address {
        account: string;
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
        paths?: string[] | LoadOptions['dir'];
    }
}
