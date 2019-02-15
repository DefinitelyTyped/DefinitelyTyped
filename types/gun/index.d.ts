// Type definitions for gun 0.9
// Project: https://github.com/amark/gun#readme
// Definitions by: Jack Works <https://github.com/Jack-Works>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

declare const cons: Gun.Constructor;
export = cons;

declare namespace Gun {
    type ArrayOf<T> = T extends Array<infer U> ? U : never;
    /** Gun does not accept Array value, so we need extract to make types correct */
    type AllowArray<T> = ArrayOf<T> extends never ? T : ArrayOf<T>;
    type DisallowArray<T> = ArrayOf<T> extends never ? T : never;
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
    interface ChainReference<DataType = any, ReferenceKey = any> {
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
        put(data: DisallowArray<DataType>, callback?: AckCallback): ChainReference<DataType, ReferenceKey>;
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
                    'gun' | '$' | 'root' | 'id' | 'back' | 'on' | 'tag' | 'get' | 'soul' | 'ack' | 'put',
                    any
                >,
                /** the key, ID, or property name of the data. */
                paramB: Record<'off' | 'to' | 'next' | 'the' | 'on' | 'as' | 'back' | 'rid' | 'id', any>
            ) => void
        ): ChainReference<DataType[K], K>;
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
            callback: (data: ArrayAsRecord<DataType>, key: ReferenceKey) => void,
            option?: { change: boolean } | boolean
        ): ChainReference<DataType, ReferenceKey>;
        /**
         * Get the current data without subscribing to updates. Or `undefined` if it cannot be found.
         * @returns In the document, it said the return value may change in the future. Don't rely on it.
         */
        once(
            callback?: (data: (ArrayAsRecord<DataType>) | undefined, key: ReferenceKey) => void,
            option?: { wait: number }
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
            data: DataType extends Array<infer U>
                ? U extends { [key: string]: any; [key: number]: any }
                    ? ArrayOf<DataType>
                    : never
                : never,
            callback?: AckCallback
        ): ChainReference<ArrayOf<DataType>>;
        /**
         * Map iterates over each property and item on a node, passing it down the chain,
         * behaving like a forEach on your data.
         * It also subscribes to every item as well and listens for newly inserted items.
         */
        map(
            callback?: (value: ArrayOf<DataType>, key: DataType) => ArrayOf<DataType> | undefined
        ): ChainReference<ArrayOf<DataType>, ReferenceKey>;
        /**
         * Undocumented, but extremely useful and mentioned in the document
         *
         * Remove **all** listener on this node.
         */
        off(): void;

        // Extended API
        /**
         *
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
            onfulfilled?: (value: TResult1) => TResult1 | PromiseLike<TResult1>
        ): Promise<TResult1>;
        /**
         * Returns a promise for you to use.
         *
         * **Warning**: Not included by default! You must include it yourself via `require('gun/lib/then.js')` or
         *  `<script src="https://cdn.jsdelivr.net/npm/gun/lib/then.js"></script>`!
         */
        promise?<
            TResult1 = { put: ArrayAsRecord<DataType>; key: ReferenceKey; gun: ChainReference<DataType, ReferenceKey> }
        >(
            onfulfilled?: (value: TResult1) => TResult1 | PromiseLike<TResult1>
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
                key: ReferenceKey
            ) => void,
            seconds: number
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
            alsoReceiveNOldEvents?: number
        ): ChainReference<DataType, ReferenceKey>;
        /** Pushes data to a Timegraph with it's time set to Gun.state()'s time */
        time?(data: ArrayOf<DataType>): void;
    }

    interface GunSEA {
        // There is no the only content in the api document.
        user: {
            create(alias: string, passphrase: string, callback: (...args: any[]) => void): any;
        };
    }

    interface Constructor {
        /**
         * @description
         * no parameters creates a local datastore using the default persistence layer, either localStorage or Radisk.
         * @param options
         * passing a URL creates the above local datastore that also tries to sync with the URL.
         *
         * or you can pass in an array of URLs to sync with multiple peers.
         */
        <DataType = any>(options?: string | string[] | ConstructorOptions): ChainReference<DataType> & GunSEA;
        new <DataType = any>(options?: string | string[] | ConstructorOptions): ChainReference<DataType> & GunSEA;
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
        SEA: any;
    }
}
declare const Gun: Gun.Constructor;
