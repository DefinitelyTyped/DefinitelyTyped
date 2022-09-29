import { AuthKeystore, AuthKeystoreOptions, Keystore, LoadOptions, LoadResult } from "../index";

export interface Wallet {
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
}
