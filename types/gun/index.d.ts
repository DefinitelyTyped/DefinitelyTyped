declare const cons: Gun.Constructor;
export = cons;

declare namespace Gun {
    type ArrayOf<T> = T extends Array<infer U> ? U : never;
    /** Gun does not accept Array value, so we need extract to make types correct */
    type AllowArray<T> = ArrayOf<T> extends never ? T : ArrayOf<T>;
    type DisallowArray<T> = ArrayOf<T> extends never ? T : never;
    /** These types cannot be stored on Gun */

    type AlwaysDisallowedType<T> = T extends (...args: any[]) => void ? never
        : T extends { new(...args: any[]): any } ? never
        : AccessObject<T>;
    type AccessObject<T> = T extends object
        ? { [key in keyof T]: (AlwaysDisallowedType<T[key]> extends never ? never : AccessObject<T[key]>) }
        : T;
    /** These types cannot be stored on Gun's root level */
    type DisallowPrimitives<Open, T> = Open extends false ? T
        : T extends string ? never
        : T extends number ? never
        : T extends boolean ? never
        : T extends null ? never
        : T extends undefined ? never
        : T;
    type ArrayAsRecord<DataType> = ArrayOf<DataType> extends never ? DataType : Record<string, any>;
    /**
     * options['module name'] allows you to pass options to a 3rd party module.
     * Their project README will likely list the exposed options
     * https://github.com/amark/gun/wiki/Modules
     */
    type ConstructorOptions = Partial<{
        /** Undocumented but mentioned. Write data to a JSON. */
        file: string;
        /** Undocumented but mentioned. Create a websocket server */
        web: any;
        /** Undocumented but mentioned. Amazon S3 */
        s3: {
            key: any;
            secret: any;
            bucket: any;
        };
        /** the URLs are properties, and the value is an empty object. */
        peers: Record<string, {}>;
        /** default: true, creates and persists local (nodejs) data using Radisk. */
        radisk: boolean;
        /** default: true, persists local (browser) data to localStorage. */
        localStorage: boolean;
        /** uuid allows you to override the default 24 random alphanumeric soul generator with your own function. */
        uuid(): string;
        /**
         * allows you to pass options to a 3rd party module. Their project README will likely list the exposed options
         * @see https://github.com/amark/gun/wiki/Modules
         */
        [key: string]: any;
    }>;
    type Saveable<DataType> = Partial<DataType> | string | number | boolean | null | ChainReference<DataType>;
    type AckCallback = (ack: { err: Error; ok: any } | { err: undefined; ok: string }) => void;
    type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
    interface ChainReference<DataType = any, ReferenceKey = any, IsTop extends "pre_root" | "root" | false = false> {
        // #region API
        /**
         * Save data into gun, syncing it with your connected peers.
         *
         * * You cannot save primitive values at the root level.
         *
         * @param data You do not need to re-save the entire object every time,
         * gun will automatically merge your data into what already exists as a "partial" update.
         *
         * * `undefined`, `NaN`, `Infinity`, `array`, will be rejected.
         * * Traditional arrays are dangerous in real-time apps. Use `gun.set` instead.
         *
         * @param callback invoked on each acknowledgment
         */
        put(
            data: Partial<AlwaysDisallowedType<DisallowPrimitives<IsTop, DisallowArray<DataType>>>>,
            callback?: AckCallback,
        ): ChainReference<DataType, ReferenceKey, IsTop>;
        /**
         * Where to read data from.
         * @param key The key is the ID or property name of the data that you saved from earlier
         *  (or that will be saved later).
         * * Note that if you use .put at any depth after a get it first reads the data and then writes, merging the data as a partial update.
         * @param callback You will usually be using gun.on or gun.once to actually retrieve your data,
         * not this callback (it is intended for more low level control, for module and extensions).
         *
         * **Avoid use callback. The type in the document may be wrong.**
         *
         * **Here the type of callback respect to the actual behavior**
         */
        get<K extends keyof DataType>(
            key: ArrayOf<DataType> extends never ? K : never,
            callback?: (
                /** the raw data. Internal node of gun. Will not typed here. */
                paramA: Record<
                    "gun" | "$" | "root" | "id" | "back" | "on" | "tag" | "get" | "soul" | "ack" | "put",
                    any
                >,
                /** the key, ID, or property name of the data. */
                paramB: Record<"off" | "to" | "next" | "the" | "on" | "as" | "back" | "rid" | "id", any>,
            ) => void,
        ): ChainReference<DataType[K], K, IsTop extends "pre_root" ? "root" : false>;
        /**
         * Change the configuration of the gun database instance.
         * @param options The options argument is the same object you pass to the constructor.
         *
         * The options's properties replace those in the instance's configuration but options.peers are **added** to peers known to the gun instance.
         * @returns No mention in the document, behavior as `ChainReference<DataType, ReferenceKey>`
         */
        opt(options: ConstructorOptions): ChainReference<DataType, ReferenceKey>;
        /**
         * Move up to the parent context on the chain.
         *
         * Every time a new chain is created, a reference to the old context is kept to go back to.
         * @param amount The number of times you want to go back up the chain.
         * `-1` or `Infinity` will take you to the root.
         * @returns Impossible to determinate final type. You must cast it by yourself.
         */
        back(amount?: number): ChainReference;

        // Main API
        /**
         * Subscribe to updates and changes on a node or property in realtime.
         * @param option Currently, the only option is to filter out old data, and just be given the changes.
         * If you're listening to a node with 100 fields, and just one changes,
         * you'll instead be passed a node with a single property representing that change rather than the full node every time.
         * @param callback
         * Once initially and whenever the property or node you're focused on changes, this callback is immediately fired with the data as it is at that point in time.
         *
         * Since gun streams data, the callback will probably be called multiple times as new chunk comes in.
         * To remove a listener call .off() on the same property or node.
         */
        on(
            callback: (
                data: DisallowPrimitives<IsTop, AlwaysDisallowedType<ArrayAsRecord<DataType>>>,
                key: ReferenceKey,
            ) => void,
            option?: { change: boolean } | boolean,
        ): ChainReference<DataType, ReferenceKey>;
        /**
         * Get the current data without subscribing to updates. Or `undefined` if it cannot be found.
         * @returns In the document, it said the return value may change in the future. Don't rely on it.
         */
        once(
            callback?: (
                data: (DisallowPrimitives<IsTop, AlwaysDisallowedType<ArrayAsRecord<DataType>>>) | undefined,
                key: ReferenceKey,
            ) => void,
            option?: { wait: number },
        ): ChainReference<DataType, ReferenceKey>;
        /**
         * **.set does not means 'set data', it means a Mathematical Set**
         *
         * Add a unique item to an unordered list.
         * `gun.set` works like a mathematical set, where each item in the list is unique.
         * If the item is added twice, it will be merged.
         *
         * **This means only objects, for now, are supported.**
         */
        set(
            data: AlwaysDisallowedType<
                DataType extends Array<infer U>
                    ? U extends { [key: string]: any; [key: number]: any } ? ArrayOf<DataType>
                    : never
                    : never
            >,
            callback?: AckCallback,
        ): ChainReference<ArrayOf<DataType>>;
        /**
         * Map iterates over each property and item on a node, passing it down the chain,
         * behaving like a forEach on your data.
         * It also subscribes to every item as well and listens for newly inserted items.
         */
        map(
            callback?: (value: ArrayOf<DataType>, key: DataType) => ArrayOf<DataType> | undefined,
        ): ChainReference<ArrayOf<DataType>, ReferenceKey>;
        /**
         * Undocumented, but extremely useful and mentioned in the document
         *
         * Remove **all** listener on this node.
         */
        off(): void;
        // #endregion
        // #region Extended API
        /**
         * Path does the same thing as `.get` but has some conveniences built in.
         * @deprecated This is not friendly with type system.
         *
         * **Warning**: This extension was removed from core, you probably shouldn't be using it!
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/path.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/path.js"></script>`!
         */
        path?(path: string | string[]): ChainReference;
        /**
         * Handle cases where data can't be found.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/not.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/not.js"></script>`!
         */
        not?(callback: (key: ReferenceKey) => void): ChainReference<DataType, ReferenceKey>;
        /**
         * Open behaves very similarly to gun.on, except it gives you the **full depth of a document** on every update.
         * It also works with graphs, tables, or other data structures. Think of it as opening up a live connection to a document.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/open.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/open.js"></script>`!
         */
        open?(callback: (data: ArrayAsRecord<DataType>) => void): ChainReference<DataType, ReferenceKey>;
        /**
         * Loads the full object once. It is the same as `open` but with the behavior of `once`.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/load.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/load.js"></script>`!
         */
        load?(callback: (data: ArrayAsRecord<DataType>) => void): ChainReference<DataType, ReferenceKey>;
        /**
         * Returns a promise for you to use.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/then.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/then.js"></script>`!
         */
        then?<TResult1 = ArrayAsRecord<DataType>>(
            onfulfilled?: (value: TResult1) => TResult1 | PromiseLike<TResult1>,
        ): Promise<TResult1>;
        /**
         * Returns a promise for you to use.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/then.js')` or
         *  `<script src="https://cdn.jsdelivr.net/npm/gun/lib/then.js"></script>`!
         */
        promise?<
            TResult1 = { put: ArrayAsRecord<DataType>; key: ReferenceKey; gun: ChainReference<DataType, ReferenceKey> },
        >(
            onfulfilled?: (value: TResult1) => TResult1 | PromiseLike<TResult1>,
        ): Promise<TResult1>;
        /**
         * bye lets you change data after that browser peer disconnects.
         * This is useful for games and status messages,
         * that if a player leaves you can remove them from the game or set a user's status to "away".
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/bye.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/bye.js"></script>`!
         */
        bye?(): {
            put(data: DisallowArray<Saveable<DataType>>): void;
        };
        /**
         * Say you save some data, but want to do something with it later, like expire it or refresh it.
         * Well, then `later` is for you! You could use this to easily implement a TTL or similar behavior.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/later.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/later.js"></script>`!
         */
        later?(
            callback: (
                this: ChainReference<DataType, ReferenceKey>,
                data: ArrayAsRecord<DataType>,
                key: ReferenceKey,
            ) => void,
            seconds: number,
        ): ChainReference<DataType, ReferenceKey>;
        /**
         * After you save some data in an unordered list, you may need to remove it.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/unset.js')` or
         * `<script src="https://cdn.jsdelivr.net/npm/gun/lib/unset.js"></script>`!
         */
        unset?(data: ArrayOf<DataType>): ChainReference<DataType, ReferenceKey>;
        /**
         * Subscribes to all future events that occur on the Timegraph and retrieve a specified number of old events
         *
         * **Warning**: The Timegraph extension isn't required by default, you would need to include at "gun/lib/time.js"
         */
        time?(
            callback: (data: ArrayOf<DataType>, key: ReferenceKey, time: number) => void,
            alsoReceiveNOldEvents?: number,
        ): ChainReference<DataType, ReferenceKey>;
        /** Pushes data to a Timegraph with it's time set to Gun.state()'s time */
        time?(data: ArrayOf<DataType>): void;
        // #endregion
        // #region User
        /**
         * Creates a new user and calls callback upon completion.
         * @param alias Username or Alias which can be used to find a user.
         * @param pass Passphrase that will be extended with PBKDF2 to make it a secure way to login.
         * @param cb Callback that is to be called upon creation of the user.
         * @param opt Option Object containing options for creation. (In gun options are added at end of syntax. opt is rarely used, hence is added at the end.)
         */
        create(
            alias: string,
            pass: string,
            cb?: (ack: { ok: 0; pub: string } | { err: string }) => void,
            opt?: {},
        ): ChainReference;
        /**
         * Authenticates a user, previously created via User.create.
         * @param alias Username or Alias which can be used to find a user.
         * @param pass Passphrase for the user
         * @param cb Callback that is to be called upon authentication of the user.
         * @param opt Option Object containing options for authentiaction. (In gun options are added at end of syntax. opt is rarely used, hence is added at the end.)
         */
        auth(
            alias: string,
            pass: string,
            cb?: (
                ack:
                    | {
                        ack: 2;
                        get: string;
                        on: (...args: [unknown, unknown, unknown]) => unknown;
                        put: { alias: string; auth: any; epub: string; pub: string };
                        sea: CryptoKeyPair;
                        soul: string;
                    }
                    | { err: string },
            ) => void,
            opt?: {},
        ): ChainReference;
        /**
         * Returns the key pair in the form of an object as below.
         */
        pair(): CryptoKeyPair;
        /**
         * Log out currently authenticated user. Parameters are unused in the current implementation.
         * @param opt unused in current implementation.
         * @param cb unused in current implementation.
         */
        leave(opt?: never, cb?: never): ChainReference;
        /**
         * Deletes a user from the current gun instance and propagates the delete to other peers.
         * @param alias Username or alias.
         * @param pass Passphrase for the user.
         * @param cb Callback that is called when the user was successfully deleted.
         */
        delete(alias: string, pass: string, cb?: (ack: { ok: 0 }) => void): Promise<void>;
        /**
         * Recall saves a users credentials in sessionStorage of the browser. As long as the tab of your app is not closed the user stays logged in, even through page refreshes and reloads.
         * @param opt option object If you want to use browser sessionStorage to allow users to stay logged in as long as the session is open, set opt.sessionStorage to true
         * @param cb internally the callback is passed on to the user.auth function to logged the user back in. Refer to user.auth for callback documentation.
         */
        recall(opt?: { sessionStorage: boolean }, cb?: Parameters<ChainReference["auth"]>[2]): ChainReference;
        /**
         * @param publicKey If you know a users publicKey you can get their user graph and see any unencrypted data they may have stored there.
         */
        user(publicKey?: string): ChainReference;
        // #endregion
    }

    type CryptoKeyPair = Record<"pub" | "priv" | "epub" | "epriv", string>;
    interface Constructor {
        /**
         * @description
         * no parameters creates a local datastore using the default persistence layer, either localStorage or Radisk.
         * @param options
         * passing a URL creates the above local datastore that also tries to sync with the URL.
         *
         * or you can pass in an array of URLs to sync with multiple peers.
         */
        <DataType = any>(options?: string | string[] | ConstructorOptions): ChainReference<DataType, any, "pre_root">;
        new<DataType = any>(options?: string | string[] | ConstructorOptions): ChainReference<
            DataType,
            any,
            "pre_root"
        >;
        node: {
            /** Returns true if data is a gun node, otherwise false. */
            is(anything: any): anything is ChainReference;
            /**
             * Returns data's gun ID (instead of manually grabbing its metadata i.e. data["_"]["#"], which is faster but could change in the future)
             *
             * Returns undefined if data is not correct gun data.
             */
            soul(data: ChainReference): string;
            /** Returns a "gun-ified" variant of the json input by injecting a new gun ID into the metadata field. */
            ify(json: any): any;
        };
        /** @see https://gun.eco/docs/SEA */
        SEA: {
            /** If you want SEA to throw while in development, turn SEA.throw = true on, but please do not use this in production. */
            throw?: boolean | undefined;
            /** Last known error */
            err?: Error | undefined;
            /**
             * This gives you a Proof of Work (POW) / Hashing of Data
             * @param data The data to be hashed, work to be performed on.
             * @param pair (salt) You can pass pair of keys to use as salt. Salt will prevent others to pre-compute the work,
             *  so using your public key is not a good idea. If it is not specified, it will be random,
             *  which ruins your chance of ever being able to re-derive the work deterministically
             * @param callback function to executed upon execution of proof
             * @param opt default: {name: 'PBKDF2', encode: 'base64'}
             */
            work(
                data: any,
                pair?: any,
                callback?: (data: string | undefined) => void,
                opt?: Partial<{
                    name: "SHA-256" | "PBKDF2";
                    encode: "base64" | "base32" | "base16";
                    /** iterations to use on subtle.deriveBits */
                    iterations: number;
                    salt: any;
                    hash: string;
                    length: any;
                }>,
            ): Promise<string | undefined>;
            /**
             * This generates a cryptographically secure public/private key pair - be careful not to leak the private keys!
             * Note: API subject to change we may change the parameters to accept data and work, in addition to generation.
             * You will need this for most of SEA's API, see those method's examples.
             * The default cryptographic primitives for the asymmetric keys are ECDSA for signing and ECDH for encryption.
             */
            pair(cb: (data: CryptoKeyPair) => void, opt?: {}): Promise<CryptoKeyPair | undefined>;
            /**
             * Adds a signature to a message, for data that you want to prevent attackers tampering with.
             * @param data is the content that you want to prove is authorized.
             * @param pair is from .pair.
             */
            sign(data: any, pair: CryptoKeyPair): Promise<string | undefined>;
            /**
             * Gets the data if and only if the message can be verified as coming from the person you expect.
             * @param message is what comes from .sign.
             * @param pair from .pair or its public key text (pair.pub).
             */
            verify(message: any, pair: CryptoKeyPair | string): Promise<unknown>;
            /**
             * Takes some data that you want to keep secret and encrypts it so nobody else can read it.
             * @param data is the content that you want to encrypt.
             * @param pair from .pair or a passphrase you want to use as a cypher to encrypt with.
             */
            encrypt(data: any, pair: CryptoKeyPair | string): Promise<string>;
            /**
             * Read the secret data, if and only if you are allowed to.
             * @param message is what comes from .encrypt.
             * @param pair from .pair or the passphrase to decypher the message.
             */
            decrypt(message: any, pair: CryptoKeyPair | string): Promise<unknown>;
        };
    }
}
declare const Gun: Gun.Constructor;
