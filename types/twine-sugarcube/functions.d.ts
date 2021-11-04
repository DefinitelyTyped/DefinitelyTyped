import { SugarCubeTemporaryVariables, SugarCubeStoryVariables } from "./userdata";

declare global {
    /**
     * Returns a deep copy of the given value.
     *
     * @param original The object to value.
     *
     * NOTE: Only the primitives, generic objects, some JavaScript natives (specifically: Array, Date, Map, RegExp, and Set),
     * and DOM node objects are supported by default. Unsupported objects will need a .clone() method to be properly supported
     * by the cone() function—when called on such an object, it will simply defer to the local method.
     *
     * @since 2.0.0
     *
     * @example
     * // Without clone(); given the generic object: $foo = { id : 1 }
     * <<set $bar to $foo>>
     * <<set $bar.id to 5>>
     * $foo.id -> Returns: 5
     * $bar.id -> Returns: 5
     * // With clone(); given the generic object: $foo = { id : 1 }
     * <<set $bar to clone($foo)>>
     * <<set $bar.id to 5>>
     * $foo.id -> Returns: 1
     * $bar.id -> Returns: 5
     */
    function clone<T>(original: T): T;

    /**
     * Returns a random value from its given arguments.
     *
     * @param list The list of values to operate on. May be any combination of singular values, actual arrays, or array-like
     * objects. All values will be concatenated into a single list for selection. NOTE: Does not flatten nested arrays — if
     * this is required, the <Array>.flatten() method may be used to flatten the nested arrays prior to passing them to
     * either().
     * @since 2.0.0
     * @example
     * // Using singular values
     * either("Blueberry", "Cherry", "Pecan") -> Returns a random pie from the whole list
     *
     * // Using arrays; given: $pies = ["Blueberry", "Cherry", "Pecan"]
     * either($pies) -> Returns a random pie from the whole array
     *
     * // Using singular values and arrays; given: $letters = ["A", "B"]
     * either($letters, "C", "D") -> Returns a random value from the whole list (i.e. "A", "B", "C", "D")
     *
     * // Using multiple arrays; given: $letters = ["A", "B"] & $numerals = ["1", "2"]
     * either($letters, $numerals) -> Returns a random value from the whole list (i.e. "A", "B", "1", "2")
     */
    function either<T>(...list: ReadonlyArray<T>): T;

    /**
     * Removes the specified key, and its associated value, from the story metadata store.
     * @param key The key to remove.
     * @since 2.29.0
     */
    function forget(key: string): void;

    /**
     * Returns whether the passage with the given title occurred within the story history. If multiple passage titles are given,
     * returns the logical-AND aggregate of the set (i.e. true if all were found, false if any were not found).
     * @param passageNames The title(s) of the passage(s) to search for. May be a list or an array of passages.
     * @since 2.7.0
     * @example
     * <<if hasVisited("Bar")>>…has been to the Bar…<</if>>
     * <<if not hasVisited("Bar")>>…has never been to the Bar…<</if>>
     * <<if hasVisited("Bar", "Café")>>…has been to both the Bar and Café<</if>>
     * <<if not hasVisited("Bar", "Café")>>…has never been to either the Bar, Café, or both…<</if>>
     */
    function hasVisited(...passageNames: ReadonlyArray<string>): boolean;

    /**
     * Returns the number of turns that have passed since the last instance of the passage with the given title occurred within
     * the story history or -1 if it does not exist. If multiple passage titles are given, returns the lowest count (which can
     * be -1).
     * @param passageNames The title(s) of the passage(s) to search for. May be a list or an array of passages.
     * @since 2.0.0
     * @example
     * <<if lastVisited("Bar") is -1>>…has never been to the Bar…<</if>>
     * <<if lastVisited("Bar") is 0>>…is currently in the Bar…<</if>>
     * <<if lastVisited("Bar") is 1>>…was in the Bar one turn ago…<</if>>
     * <<if lastVisited("Bar", "Café") is -1>>…has never been to the Bar, Café, or both…<</if>>
     * <<if lastVisited("Bar", "Café") is 2>>…has been to both the Bar and Café, most recently two turns ago…<</if>>
     */
    function lastVisited(...passageNames: ReadonlyArray<string>): number;

    /**
     * Load and integrate external JavaScript scripts.
     *
     * NOTE: Loading is done asynchronously at run time, so if the script must be available within a tight time frame, then you
     * should use the Promise returned by the function to ensure the script is loaded before before it is needed.
     *
     * NOTE: A script section (Twine 2: the Story JavaScript; Twine 1/Twee: a script-tagged passage) is normally the best place
     * to call importScripts().
     *
     * @param urls The URLs of the external scripts to import. Loose URLs are imported concurrently, arrays of URLs are imported
     *  sequentially.
     *
     * @since 2.16.0
     *
     * @example Basic usage
     * // Import all scripts concurrently
     * importScripts(
     *    "https://somesite/a/path/a.js",
     *    "https://somesite/a/path/b.js",
     *    "https://somesite/a/path/c.js",
     *    "https://somesite/a/path/d.js"
     * );
     *
     * // Import all scripts sequentially
     * importScripts([
     *   "https://somesite/a/path/a.js",
     *   "https://somesite/a/path/b.js",
     *   "https://somesite/a/path/c.js",
     *   "https://somesite/a/path/d.js"
     * ]);
     *
     * // Import scripts a.js, b.js, and the c.js/d.js group concurrently,
     * // while importing c.js and d.js sequentially relative to each other
     * importScripts(
     *   "https://somesite/a/path/a.js",
     *   "https://somesite/a/path/b.js",
     *   [
     *       "https://somesite/a/path/c.js",
     *       "https://somesite/a/path/d.js"
     *   ]
     * );
     *
     * @example Basic usage with the returned Promise object
     * // Import a script while using the returned Promise to ensure that
     * // the script has been fully loaded before executing dependent code
     * importScripts("https://somesite/a/path/a.js")
     *    .then(function () {
     *       // Code that depends on the script goes here.
     * })
     * .catch(function (err) {
     *     // There was an error loading the script, log it to the console.
     *     console.log(err);
     * });
     *
     * @example <caption>Saving the returned Promise object for later use</caption>
     * // Import a script while saving the returned Promise so it may be used later
     * setup.aScriptImport = importScripts("https://somesite/a/path/aScript.js");
     *
     * // Use the returned Promise later on to ensure that the script has been fully
     * // loaded before executing dependent code
     * setup.aScriptImport
     *    .then(function () {
     *        // Code that depends on the script goes here.
     * })
     *  .catch(function (err) {
     *     // There was an error loading the script, log it to the console.
     *     console.log(err);
     * });
     */
    function importScripts(...urls: ReadonlyArray<string>): Promise<void>;

    /**
     * Load and integrate external CSS stylesheets.
     *
     * NOTE: Loading is done asynchronously at run time, so if the stylesheet must be available within a tight time frame, then
     * you should use the Promise returned by the function to ensure the stylesheet is loaded before it is needed.
     *
     * NOTE: A script section (Twine 2: the Story JavaScript; Twine 1/Twee: a script-tagged passage) is normally the best place
     * to call importStyles().
     * @param urls The URLs of the external stylesheets to import. Loose URLs are imported concurrently, arrays of URLs are imported sequentially.
     * @since 2.16.0
     * @example <caption>Basic usage</caption>
     * // Import all stylesheets concurrently
     * importStyles(
     *    "https://somesite/a/path/a.css",
     *    "https://somesite/a/path/b.css",
     *    "https://somesite/a/path/c.css",
     *    "https://somesite/a/path/d.css"
     * );
     *
     * // Import all stylesheets sequentially
     * importStyles([
     *    "https://somesite/a/path/a.css",
     *    "https://somesite/a/path/b.css",
     *    "https://somesite/a/path/c.css",
     *    "https://somesite/a/path/d.css"
     * ]);
     *
     * // Import stylesheets a.css, b.css, and the c.css/d.css group concurrently,
     * // while importing c.css and d.css sequentially relative to each other
     * importStyles(
     *    "https://somesite/a/path/a.css",
     *    "https://somesite/a/path/b.css",
     *    [
     *         "https://somesite/a/path/c.css",
     *         "https://somesite/a/path/d.css"
     *    ]
     * );
     *
     * @example <caption>Basic usage with the returned Promise object</caption>
     * // Grab a loading screen lock
     * var lsLockId = LoadScreen.lock();
     *
     * // Import a stylesheet while using the returned Promise to ensure that the
     * // stylesheet has been fully loaded before unlocking the loading screen
     * importStyles("https://somesite/a/path/a.css")
     *    .then(function () {
     *      // The stylesheet has been loaded, release the loading screen lock.
     *        LoadScreen.unlock(lsLockId);
     * })
     *   .catch(function (err) {
     *      // There was an error loading the stylesheet, log it to the console.
     *      console.log(err);
     * });
     */
    function importStyles(...urls: ReadonlyArray<string>): Promise<void>;

    /**
     * Sets the specified key and value within the story metadata store, which causes them to persist over story and browser
     * restarts. To update the value associated with a key, simply set it again
     *
     * NOTE: The story metadata, like saves, is tied to the specific story it was generated with. It is not a mechanism for
     * moving data between stories.
     *
     * WARNING: The story metadata store is not, and should not be used as, a replacement for saves. Examples of good uses:
     * achievement tracking, new game+ data, playthrough statistics, etc.
     *
     * WARNING: This feature is largely incompatible with private browsing modes, which cause all in-browser storage mechanisms
     * to either persist only for the lifetime of the browsing session or fail outright.
     * @param key The key that should be set.
     * @param value The value to set.
     * @since 2.29.0
     * @example
     * // Sets 'achievements', with the given value, in the metadata store.
     * <<run memorize('achievements', { ateYellowSnow : true })>>
     *
     * // Sets 'ngplus', with the given value, in the metadata store.
     * <<run memorize('ngplus', true)>>
     */
    function memorize(key: string, value: any): void;

    /**
     * Returns the title of the active (present) passage.
     * @since 2.0.0
     * @example
     * <<if passage() is "Café">>…the current passage is the Café passage…<</if>>
     */
    function passage(): string;

    /**
     * Returns the title of the most recent previous passage whose title does not match that of the active passage or an empty
     * string, if there is no such passage.
     * @since 2.0.0
     * @example
     * <<if previous() is "Café">>…the most recent non-active passage is the Café passage…<</if>>
     * @example
     * // Commonly used as part of a link to return to the most recent non-active passage
     * [[Return|previous()]]
     */
    function previous(): string;

    /**
     * Returns a pseudo-random whole number (integer) within the range of the given bounds (inclusive)—i.e. [min, max].
     *
     * NOTE: By default, it uses Math.random() as its source of randomness, however, when the seedable PRNG has been enabled,
     * via State.initPRNG(), it uses the seeded PRNG instead.
     * @param min The lower bound of the random number (inclusive). If omitted, will default to 0.
     * @param max The upper bound of the random number (inclusive).
     * @since 2.0.0
     * @example
     * random(5) // Returns a number in the range 0–5
     * random(1, 6) // Returns a number in the range 1–6
     */
    function random(minOrMax: number, max?: number): number;

    /**
     * Returns a pseudo-random real number (floating-point) within the range of the given bounds (inclusive for the minimum,
     * exclusive for the maximum) — i.e. [min, max).
     *
     * NOTE: By default, it uses Math.random() as its source of randomness, however, when the seedable PRNG has been enabled,
     * via State.initPRNG(), it uses the seeded PRNG instead.
     * @param min The lower bound of the random number (inclusive). If omitted, will default to 0.0.
     * @param max The upper bound of the random number (exclusive).
     * @since 2.0.0
     * @example
     * randomFloat(5.0) // Returns a number in the range 0.0–4.9999999…
     * randomFloat(1.0, 6.0) // Returns a number in the range 1.0–5.9999999…
     */
    function randomFloat(minOrMax: number, max?: number): number;

    /**
     * Returns the value associated with the specified key from the story metadata store or, if no such key exists, the specified
     * default value, if any.
     * @param key The key whose value should be returned.
     * @param defaultValue The value to return if the key doesn't exist.
     * @since 2.29.0
     * @example
     * // Set setup.achievements to the 'achievements' metadata or an empty generic object.
     * <<set setup.achievements to recall('achievements', {})>>
     *
     * // Set setup.ngplus to the 'ngplus' metadata, with no default.
     * <<set setup.ngplus to recall('ngplus')>>
     */
    function recall(key: string, defaultValue?: any): any;

    /**
     * Renders the selected passage into the target element, replacing any existing content, and returns the element. If no passages are found and default text is specified, it will be used instead.
     * @param idOrElement The ID of the element or the element itself.
     * @param passages The name(s) of the passage(s) to search for. May be a single passage or an array of passages. If an array
     * of passage names is specified, the first passage to be found is used.
     * @param defaultText The default text to use if no passages are found.
     *
     * @since 2.0.0
     *
     * NOTE: As it is highly unlikely that either an array of passage names or default text will be needed in the vast majority
     * of cases, only a few basic examples will be given.
     * @example
     * // Using an ID; given an existing element on the page: <div id="my-display"></div>
     * setPageElement("my-display", "MyPassage");
     * @example
     * // Using an element; given a reference to an existing element: myElement
     * setPageElement(myElement, "MyPassage");
     */
    function setPageElement(
        idOrElement: string | HTMLElement,
        passages: string | string[],
        defaultText?: string): HTMLElement | null;

    /**
     * Returns a new array consisting of all of the tags of the given passages.
     * @param passages The passages from which to collect tags. May be a list or an array of passages. If omitted, will default
     * to the current passage.
     * @since 2.0.0
     * @example
     * <<if tags().includes("forest")>>…the current passage is part of the forest…<</if>>
     * <<if tags("Lonely Glade").includes("forest")>>…the Lonely Glade passage is part of the forest…<</if>>
     */
    function tags(...passages: ReadonlyArray<string>): string[];

    /**
     * Returns a reference to the current temporary variables store (equivalent to: State.temporary). This is only really useful
     * within pure JavaScript code, as within TwineScript you may simply access temporary variables natively.
     * @since 2.19.0
     * @example
     * // Given: _selection is 'Zagnut Bar'
     * if (temporary().selection === 'Zagnut Bar') {
     *   // Do something...
     * }
     */
    function temporary(): SugarCubeTemporaryVariables;

    /**
     * Returns the number of milliseconds which have passed since the current passage was rendered to the page.
     * @since 2.0.0
     * @example
     * // Links which vary based on the time
     * In the darkness, something wicked this way comes.  Quickly!  Do you \
     * <<link "try to run back into the light">>
     *   <<if time() lt 5000>>
     *        /% The player clicked the link in under 5s, so they escape %/
     *        <<goto "Well lit passageway">>
     *   <<else>>
     *        /% Else, they're eaten by a grue %/
     *        <<goto "Eaten by a grue">>
     *    <</if>>
     * <</link>> \
     * or [[stand your ground|Eaten by a grue]]?
     */
    function time(): number;

    /**
     * Returns the number of passages that the player has visited.
     * @since 2.0.0
     * @example
     * << print "This is turn #" + turns() >>
     */
    function turns(): number;

    /**
     * Returns a reference to the active(present) story variables store(equivalent to: State.variables).This is only really
     * useful within pure JavaScript code, as within TwineScript you may simply access story variables natively.
     * @since 2.0.0
     * @example
     * // Given: $hasGoldenKey is true
     * if (variables().hasGoldenKey) {
     *    //Do something
     * }
     */
    function variables(): SugarCubeStoryVariables;

    /**
     * Returns the number of times that the passage with the given title occurred within the story history. If multiple passage
     * titles are given, returns the lowest count.
     * @param passages The title(s) of the passage(s) to search for. May be a list or an array of passages. If omitted, will
     * default to the current passage.
     * @since 2.0.0
     * @example
     * <<if visited() is 3>>…this is the third visit to the current passage…<</if>>
     * <<if visited("Bar")>>…has been to the Bar at least once…<</if>>
     * <<if visited("Café") is 1>>…has been to the Café exactly once…<</if>>
     * <<if visited("Bar", "Café") is 4>>…has been to both the Bar and Café at least four times…<</if>>
     */
    function visited(...passages: ReadonlyArray<string>): number;

    /**
     * Returns the number of passages within the story history which are tagged with all of the given tags.
     * @param tags The tags to search for. May be a list or an array of tags.
     * @since 2.0.0
     * @example
     * <<if visitedTags("forest")>>…has been to some part of the forest at least once…<</if>>
     * <<if visitedTags("forest", "haunted") is 1>>…has been to the haunted part of the forest exactly once…<</if>>
     * <<if visitedTags("forest", "burned") is 3>>…has been to the burned part of the forest three times…<</if>>
     */
    function visitedTags(...tags: ReadonlyArray<string>): number;
}

export {};
