import { SugarCubeTemporaryVariables, SugarCubeStoryVariables } from "./userdata";

export interface StoryMoment {
    title: string;
    variables: SugarCubeStoryVariables;
}

export interface StateAPI {
    /**
     * Returns the active (present) moment.
     * @since 2.0.0
     */
    readonly active: StoryMoment;
    /**
     * Returns the bottommost (least recent) moment from the full in-play history (past + future).
     * @since 2.0.0
     */
    readonly bottom: StoryMoment;
    /**
     * Returns the current moment from the full in-play history (past + future), which is the pre-play version of the active
     * moment.
     *
     * **WARNING**: State.current is not a synonym for State.active. You will, very likely, never need to use State.current
     * directly within your code.
     *
     * @since 2.8.0
     */
    readonly current: StoryMoment;
    /**
     * Returns the number of moments within the past in-play history (past only).
     * @since 2.0.0
     */
    readonly length: number;
    /**
     * Returns the title of the passage associated with the active (present) moment.
     * @since 2.0.0
     */
    readonly passage: string;
    /**
     * Returns the current temporary variables.
     * @since 2.13.0
     */
    readonly temporary: SugarCubeTemporaryVariables;
    /**
     * Returns the number of moments within the full in-play history (past + future).
     * @since 2.0.0
     */
    readonly size: number;
    /**
     * Returns the topmost (most recent) moment from the full in-play history (past + future).
     *
     * **WARNING**: State.top is not a synonym for State.active. You will, very likely, never need to use State.top directly
     * within your code.
     * @since 2.0.0
     */
    readonly top: StoryMoment;
    /**
     * Returns the total number of played moments within the extended past history (expired + past).
     * @since 2.0.0
     */
    readonly turns: number;
    /**
     * Returns the variables from the active (present) moment.
     * @since 2.0.0
     */
    readonly variables: SugarCubeStoryVariables;
    /**
     * Returns the value of the story or temporary variable by the given name.
     * @param varName The name of the story or temporary variable, including its sigil—e.g. $charName.
     * @since 2.22.0
     */
    getVar(varName: string): any;
    /**
     * Returns whether any moments with the given title exist within the past in-play history (past only).
     *
     * **NOTE**: State.has() does not check expired moments. If you need to know if the player has ever been to a particular
     * passage, then you must use the State.hasPlayed() method or the hasVisited() story function.
     * @param passageTitle The title of the moment whose existence will be verified.
     * @since 2.0.0
     */
    has(passageTitle: string): boolean;
    /**
     * Returns whether any moments with the given title exist within the extended past history (expired + past).
     *
     * **NOTE**: If you need to check for multiple passages, the hasVisited() story function will likely be more convenient to
     * use.
     * @param passageTitle The title of the moment whose existence will be verified.
     * @since 2.0.0
     */
    hasPlayed(passageTitle: string): boolean;
    /**
     * Returns the moment, relative to the bottom of the past in-play history (past only), at the given index.
     * @param index The index of the moment to return.
     * @since 2.0.0
     */
    index(index: number): StoryMoment;
    /**
     * Initializes the seedable pseudo-random number generator (PRNG) and integrates it into the story state and saves.
     * Once initialized, the State.random() method and story functions, random() and randomFloat(), return results from
     * the seeded PRNG (by default, they return results from Math.random()).
     *
     * **NOTE**: State.initPRNG() must be called during story initialization, within either a script section (Twine 2: the
     * Story JavaScript, Twine 1/Twee: a script-tagged passage) or the StoryInit special passage. Additionally, it is
     * recommended that you do not specify any arguments to State.initPRNG() and allow it to automatically seed itself. If
     * you should chose to use an explicit seed, however, it is strongly recommended that you also enable additional
     * entropy, otherwise all playthroughs for all players will be exactly the same.
     * @param seed The explicit seed used to initialize the pseudo-random number generator.
     * @param useEntropy Enables the use of additional entropy to pad the specified explicit seed.
     * @since 2.0.0
     * @deprecated use State.prng.init() instead
     * @example
     * State.initPRNG() // Automatically seed the PRNG (recommended)
     * State.initPRNG("aVeryLongSeed") // Seed the PRNG with "aVeryLongSeed"
     * State.initPRNG("aVeryLongSeed", true) // Seed the PRNG with "aVeryLongSeed" and pad it with extra entropy
     */
    initPRNG(seed?: string, useEntropy?: boolean): void;
    /**
     * Returns whether the full in-play history (past + future) is empty.
     * @since 2.0.0
     */
    isEmpty(): boolean;
    /**
     * Returns the moment, relative to the top of the past in-play history (past only), at the, optional, offset.
     * @param offset The offset, from the top of the past in-play history, of the moment to return. If not given, an offset
     * of 0 is used.
     */
    peek(offset?: number): StoryMoment;
    /**
     * Returns a pseudo-random real number (floating-point) in the range 0 (inclusive) up to, but not including, 1
     * (exclusive).
     *
     * **NOTE**: By default, it simply returns results from Math.random(), however, when the seedable PRNG has been enabled,
     * via State.prng.init(), it returns results from the seeded PRNG instead.
     * @since 2.0.0
     */
    random(): number;
    /**
     * Sets the value of the story or temporary variable by the given name. Returns whether the operation was successful.
     * @param varName The name of the story or temporary variable, including its sigil—e.g. $charName.
     * @param value The value to assign.
     * @since 2.22.0
     */
    setVar(varName: string, value: any): boolean;

    readonly metadata: {
        /**
         * Returns the size of the story metadata store—i.e., the number of stored pairs.
         * @since 2.29.0
         */
        readonly size: number;
        /**
         * Empties the story metadata store.
         * @since 2.29.0
         */
        clear(): void;

        /**
         * Removes the specified key, and its associated value, from the story metadata store.
         * @param key The key to delete.
         * @since 2.29.0
         * @example
         * // Removes 'achievements' from the metadata store.
         * State.metadata.delete('achievements');
         */
        delete(key: string): void;

        /**
         * Returns an array of the story metadata store's key/value pairs as [key, value] arrays.
         * @since 2.36.0
         * @example
         * // Get the metadata store's key/value pairs.
         * var metadata = State.metadata.entries();
         *
         * // Iterate over the pairs with a `for` loop.
         * for (var i = 0; i < metadata.length; ++i) {
         *     var key   = metadata[i][0];
         *     var value = metadata[i][1];
         *     // do something
         * }
         *
         * @example
         * // Iterate over the pairs with `<Array>.forEach()`.
         * State.metadata.entries().forEach(function (pair) {
         *     var key   = pair[0];
         *     var value = pair[1];
         *     // do something
         * });
         */
        entries(): Array<[string, any]>;

        /**
         * Returns the value associated with the specified key from the story metadata store.
         * @param key The key whose value should be returned.
         * @since 2.29.0
         * @example
         * // Returns the value of 'achievements' from the metadata store.
         * var playerAchievements = State.metadata.get('achievements');
         */
        get(key: string): any;

        /**
         * Returns whether the specified key exists within the story metadata store.
         * @param key The key whose existence should be tested.
         * @since 2.29.0
         * @example
         * // Returns whether 'achievements' exists within the metadata store.
         * if (State.metadata.has('achievements')) {
         *         // do something
         * }
         */
        has(key: string): boolean;

        /**
         * Returns an array of the story metadata store's keys.
         * @since 2.36.0
         * @example
         * // Get the metadata store's keys.
         * var metadataKeys = State.metadata.keys();
         *
         * // Iterate over the keys with a `for` loop.
         * for (var i = 0; i < metadataKeys.length; ++i) {
         *     var key = metadataKeys[i];
         *     // do something
         * }
         *
         * @example
         * // Iterate over the keys with `<Array>.forEach()`.
         * State.metadata.forEach(function (key) {
         *     // do something
         * });
         */
        keys(): string[];

        /**
         * Sets the specified key and value within the story metadata store, which causes them to persist over story and browser
         * restarts—n.b. private browsing modes do interfere with this. To update the value associated with a key, simply set it
         * again.
         *
         * **NOTE**: The story metadata, like saves, is tied to the specific story it was generated with. It is not a mechanism
         * for moving data between stories
         *
         * **WARNING**: The story metadata store is not, and should not be used as, a replacement for saves. Examples of good
         * uses: achievement tracking, new game+ data, playthrough statistics, etc.
         *
         * **WARNING**: This feature is largely incompatible with private browsing modes, which cause all in-browser storage
         * mechanisms to either persist only for the lifetime of the browsing session or fail outright.
         * @param key The key that should be set.
         * @param value The value to set.
         * @since 2.29.0
         * @example
         * // Sets 'achievements', with the given value, in the metadata store.
         * State.metadata.set('achievements', { ateYellowSnow : true });
         *
         * // Sets 'ngplus', with the given value, in the metadata store.
         * State.metadata.set('ngplus', true);
         */
        set(key: string, value: any): void;
    };

    readonly prng: {
        /**
         * Initializes the seedable pseudo-random number generator (PRNG) and integrates it into the story state and saves.
         * Once initialized, the State.random() method and story functions, random() and randomFloat(), return deterministic
         * results from the seeded PRNG—by default, they return non-deterministic results from Math.random().
         *
         * **NOTE**: State.prng.init() must be called during story initialization, within either a script section (Twine 2: the
         * Story JavaScript, Twine 1/Twee: a script-tagged passage) or the StoryInit special passage. Additionally, it is
         * strongly recommended that you do not specify any arguments to State.prng.init() and allow it to automatically
         * seed itself. If you should chose to use an explicit seed, however, it is strongly recommended that you also enable
         * additional entropy, otherwise all playthroughs for all players will be exactly the same.
         *
         * @param seed The explicit seed used to initialize the pseudo-random number generator.
         * @param useEntropy Enables the use of additional entropy to pad the specified explicit seed.
         *
         * @since 2.29.0
         * @example
         * State.prng.init(); // Automatically seed the PRNG (recommended)
         * State.prng.init("aVeryLongSeed"); // Seed the PRNG with "aVeryLongSeed" (not recommended)
         * State.prng.init("aVeryLongSeed", true); //Seed the PRNG with "aVeryLongSeed" and pad it with extra entropy
         */
        init(seed?: string, useEntropy?: boolean): void;

        /**
         * Returns whether the seedable PRNG has been enabled
         * @since 2.29.0
         */
        isEnabled(): boolean;

        /**
         * Returns the current pull count—i.e., how many requests have been made—from the seedable PRNG or, if the PRNG is
         * not enabled, NaN.
         *
         * **NOTE**: The pull count is automatically included within saves and sessions, so this is not especially useful
         * outside of debugging purposes.
         * @since 2.29.0
         */
        pull(): number;

        /**
         * Returns the seed from the seedable PRNG or, if the PRNG is not enabled, null.
         * @since 2.29.0
         */
        seed(): string;
    };
}

export {};
