import { Passage, PassageBase } from "./passage";
import { SaveDetails, SaveObject } from "./save";

type SaveObjectHander = (save: SaveObject, details: SaveDetails) => void;
type DescriptionHandler = (this: Passage) => string | null;

export interface ConfigAPI {
    readonly audio: {
        /**
         * Determines whether the audio subsystem automatically pauses tracks that have been faded to 0 volume (silent).
         * @default true
         * @since 2.28.0
         * @example
         * Config.audio.pauseOnFadeToZero = false;
         */
        pauseOnFadeToZero: boolean;
        /**
         * Determines whether the audio subsystem attempts to preload track metadata—meaning information about the track
         * (e.g., duration), not its audio frames.
         *
         * NOTE: It is unlikely that you will ever want to disable this setting.
         * @default true
         * @since 2.28.0
         * @example
         * Config.audio.preloadMetadata = false;
         */
        preloadMetadata: boolean;
    };
    readonly history: {
        /**
         * Determines whether the story's history controls (Backward, Jump To, & Forward buttons) are enabled within the UI bar.
         * @default true
         * @since 2.0.0
         * @example
         * Config.history.controls = false;
         */
        controls: boolean;
        /**
         * Sets the maximum number of states (moments) to which the history is allowed to grow. Should the history exceed the limit,
         * states will be dropped from the past (oldest first). A setting of 0 means that there is no limit to how large the history
         * may grow, though doing so is not recommended.
         * @default 40
         * @since 2.0.0
         * @example
         * // No history limit (you should never do this!)
         * Config.history.maxStates = 0;
         * // Limit the history to a single state
         * Config.history.maxStates = 1;
         * // Limit the history to 150 states
         * Config.history.maxStates = 150;
         */
        maxStates: number;
    };
    readonly macros: {
        /**
         * Determines whether the `<<if>>` macro returns an error when the = assignment operator is used within its conditional —
         * e.g., `<<if $suspect = "Bob">>`. Does not flag other assignment operators.
         *
         * NOTE: This setting exists because it's unlikely that you'll ever want to actually perform an assignment within a
         * conditional expression and typing = when you meant === (or ==) is a fairly easy to mistake make—either from a finger
         * slip or because you just don't know the difference between the operators.
         *
         * @default true
         * @since 2.0.0
         * @example
         * // No error is returned when = is used within an <<if>> or <<elseif>> conditional
         * Config.macros.ifAssignmentError = false;
         */
        ifAssignmentError: boolean;
        /**
         * Sets the maximum number of iterations allowed before the `<<for>>` macro conditional forms are terminated with an error.
         *
         * NOTE: This setting exists to prevent a misconfigured loop from making the browser unresponsive.
         *
         * @default 1000
         * @since 2.0.0
         * @example
         * // Allow only 5000 iterations
         * Config.macros.maxLoopIterations = 5000;
         */
        maxLoopIterations: number;
        /**
         * Sets the default KeyboardEvent.key value that causes the currently running <<type>> macro instance to finish
         * typing its content immediately.
         * @default " " (space)
         * @since 2.33.1
         * @example
         * // Change the default skip key to Control (CTRL)
         * Config.macros.typeSkipKey = "Control";
         */
        typeSkipKey: string;
        /**
         * Determines whether the <<type>> macro types out content on previously visited passages or simply outputs it
         * immediately.
         * @default true
         * @since 2.32.0
         * @example
         * // Do not type on previously visited passages
         * Config.macros.typeVisitedPassages = false;
         */
        typeVisitedPassages: boolean;
    };
    readonly navigation: {
        /**
         * Allows the destination of passage navigation to be overridden. The callback is passed one parameter, the original
         * destination passage title. If its return value is falsy, the override is cancelled and navigation to the original
         * destination continues unperturbed. If its return value is truthy, the override succeeds and that value is used as
         * the new destination of the navigation.
         *
         * @since 2.13.0
         * @example
         * Config.navigation.override = function (destinationPassage) {
         *         // code
         * };
         *
         * @example
         * // Force the player to the "You Died" passage if they let $health get too low.
         * Config.navigation.override = function (dest) {
         *     var sv = State.variables;
         *     // If $health is less-than-or-equal to 0, go to the "You Died" passage instead.
         *     if (sv.health <= 0) {
         *         return "You Died";
         *     }
         * };
         */
        override: (passageName: string) => any
    };
    readonly passages: {
        /**
         * Determines whether alternate passage descriptions are used by the Saves and Jump To menus—by default an excerpt
         * from the passage is used. Valid values are boolean true, which simply causes the passages' titles to be used, an
         * object, which maps passages' titles to their descriptions, or a function, which should return the passages'
         * description.
         *
         * NOTE:
         * * As boolean: You should ensure that all encounterable passage titles are meaningful.
         * * As object: If the mapping object does not contain an entry for the passage in question, then the passage's
         *   excerpt is used instead.
         * * As function: The function is called with the passage in question as its this value. If the function returns falsy,
         *   then the passage's excerpt is used instead.
         * @default null
         * @since 2.0.0
         * @example
         * // Uses passages' titles
         * Config.passages.descriptions = true;
         *
         * // Uses the description mapped by the title
         * Config.passages.descriptions = {
         *     "title" : "description"
         * };
         *
         * // Returns the description to be used
         * Config.passages.descriptions = function () {
         *     if (this.title === "title") {
         *         return "description";
         *     }
         * };
         */
        descriptions: true | {[x: string]: string} | DescriptionHandler | null;
        /**
         * Determines whether passage titles are combined with the story title, within the browser's/tab's titlebar, when
         * passages are displayed.
         * @default false
         * @since 2.0.0
         * @example
         * Config.passages.displayTitles = true;
         */
        displayTitles: boolean;
        /**
         * Determines whether rendering passages have their leading/trailing newlines removed and all remaining sequences of
         * newlines replaced with single spaces before they're rendered. Equivalent to including the nobr special tag on
         * every passage.
         * @default false
         * @since 2.19.0
         * @example
         * Config.passages.nobr = true;
         */
        nobr: boolean;

        /**
         * Allows custom processing of passage text. The function is invoked each time the <Passage>.processText()
         * method is called. It is passed an abbreviated version of the associated passage's Passage instance —
         * containing only the tags, text, and title properties. Its return value should be the post-processed text.
         * @since 2.30.0
         *
         * **NOTE**: Does not affect script or stylesheet tagged passages, for Twine 1/Twee, or the Story JavaScript or
         * Story Stylesheet sections, for Twine 2.
         *
         * **NOTE**: The function will be called just before the built-in no-break passage processing if you're also using
         * that—see the Config.passages.nobr setting and nobr special tag.
         *
         * @since 2.30.0
         * @example
         * // Change instances of "cat" to "dog".
         * Config.passages.onProcess = function (p) {
         *         return p.text.replace(/\bcat(s?)\b/g, 'dog$1');
         * };
         */
        onProcess: (passage: PassageBase) => string;

        /**
         * Sets the title of the initial passage, the very first passage which will be displayed.
         *
         * @default Twine 2: none; Twine 1/Twee: "Start"
         * @example
         * Config.passages.start = "That Other Starting Passage";
         */
        start: string;

        /**
         * Determines whether outgoing passage transitions are enabled. Valid values are the name of the property being
         * animated, which causes the outgoing passage elements to be removed once that transition animation is complete,
         * or an integer delay (in milliseconds), which causes the outgoing passage elements to be removed once the delay
         * has expired.
         *
         * **NOTE**: If using an integer delay, ideally, it should probably be slightly longer than the outgoing transition
         * delay that you intend to use — e.g., an additional 10ms or so should be sufficient.
         *
         * @since 2.0.0
         * @example
         * // Remove outgoing elements when their opacity animation ends
         * Config.passages.transitionOut = "opacity";
         *
         * // Remove outgoing elements after 1010ms (1.01s)
         * Config.passages.transitionOut = 1010;
         *
         * // CSS styles:
         * // At the very least you will need to specify a .passage-out style that defines the transition's end state. For example:
         *
         * .passage-out {
         *     opacity: 0;
         * }
         * // That probably won't be very pleasing to the eye, however, so you will likely need several styles to make something
         * // that looks half-decent. For example, the following will give you a basic crossfade:
         *
         * #passages {
         *     position: relative;
         * }
         * .passage {
         *     left: 0;
         *     position: absolute;
         *     top: 0;
         *     transition: opacity 1s ease;
         * }
         * .passage-out {
         *     opacity: 0;
         * }
         */
        transitionOut: string | number;
    };

    readonly saves: {
        /**
         * Determines whether the autosave, if it exists, is automatically loaded upon story startup. Valid values are
         * boolean true, which simply causes the autosave to be loaded, the string "prompt", which prompts the player via a
         * dialog to load the autosave, or a function, which causes the autosave to be loaded if its return value is truthy.
         *
         * **NOTE**: If the autosave cannot be loaded, for any reason, then the start passage is loaded instead.
         * @since 2.0.0
         * @example
         * // Automatically loads the autosave
         * Config.saves.autoload = true;
         *
         * // Prompts the player about loading the autosave
         * Config.saves.autoload = "prompt";
         *
         * // Loads the autosave if it returns a truthy value
         * Config.saves.autoload = function () {
         *     // code
         * };
         */
        autoload: boolean | "prompt" | (() => boolean) | null;

        /**
         * Determines whether the autosave is created/updated when passages are displayed. Valid values are boolean true,
         * which causes the autosave to be updated with every passage, an array of strings, which causes the autosave to
         * be updated for each passage with at least one matching tag, or a function, which causes the autosave to be
         * updated for each passage where its return value is truthy.
         *
         * **WARNING**: When setting the value to boolean true, you will likely also need to use the Config.saves.isAllowed
         * property to disallow saving on the start passage. Or, if you use the start passage as real part of your story and
         * allow the player to reenter it, rather than just as the initial landing/cover page, then you might wish to only
         * disallow saving on the start passage the very first time it's displayed (at story startup).
         * @since 2.0.0
         * @since 2.30.0: Added function values and deprecated string values.
         * @example
         * // Autosaves every passage
         * Config.saves.autosave = true;
         *
         * // Autosaves on passages tagged with any of "bookmark" or "autosave"
         * Config.saves.autosave = ["bookmark", "autosave"];
         *
         * // Autosaves on passages if it returns a truthy value
         * Config.saves.autosave = function () {
         *     // code
         * };
         */
        autosave: true | string | string[] | (() => boolean) | null;

        /**
         * Sets the story ID associated with saves.
         * @default slugified story title
         * @since 2.0.0
         * @example
         *  Config.saves.id = "a-big-huge-story-part-1";
         */
        id: string;

        /**
         * Determines whether saving is allowed within the current context. The callback is invoked each time a save is
         * requested. If its return value is false, the save is disallowed. If its return value is truthy, the save is
         * allowed to continue unperturbed.
         * @default undefined
         * @since 2.0.0
         * @example
         * Config.saves.isAllowed = function () {
         *     // code
         * };
         */
        isAllowed: (() => boolean) | null;

        /**
         * Performs any required pre-processing before the save data is loaded. The callback is passed one parameter, the
         * save object to be processed. If it encounters an unrecoverable problem during its processing, it may throw an
         * exception containing an error message; the message will be displayed to the player and loading of the save will
         * be terminated.
         *
         * @see SaveObject
         * @default undefined
         * @since 2.0.0
         * @deprecated since 2.36.0 in favor of the Save Events API.
         * @example
         * Config.saves.onLoad = function (save) {
         * // code
         * };
         */
        onLoad: SaveObjectHander | null;

        /**
         * Performs any required post-processing before the save data is saved. The callback is passed one parameter, the
         * save object to be processed.
         *
         * NOTE: See the save objects section of the Save API for information on the format of a save.
         * @default undefined
         * @since 2.0.0
         * @since 2.33.0: Added save operation details object parameter to the callback function.
         * @deprecated since 2.36.0 in favor of the Save Events API.
         * @example
         * Config.saves.onSave = function (save) {
         * // code
         * };
         */
        onSave: SaveObjectHander | null;

        /**
         * Sets the maximum number of available save slots.
         *
         * @default 8
         * @since 2.0.0
         * @example
         * Config.saves.slots = 4;
         */
        slots: number;

        /**
         * Determines whether saving to disk is enabled on mobile devices — i.e., smartphones, tablets, etc.
         *
         * WARNING: Mobile browsers can be fickle, so saving to disk may not work as expected in all browsers.
         * @default true
         * @since 2.34.0
         * @example
         * // To disable saving to disk on mobile devices.
         * Config.saves.tryDiskOnMobile = false;
         */
        tryDiskOnMobile: boolean;

        /**
         * Sets the version property of saves.
         *
         * **NOTE**: This setting is only used to set the version property of saves. Thus, it is only truly useful if you plan
         * to upgrade out-of-date saves via a Config.saves.onLoad callback.
         *
         * @since 2.0.0
         * @example
         * // As an integer
         * Config.saves.version = 3;
         * @example
         * // As a string
         * Config.saves.version = "v3";
         */
        version: any;
    };

    readonly ui: {
        /**
         * Determines whether the UI bar (sidebar) starts in the stowed (shut) state initially. Valid values are boolean
         * true/false, which causes the UI bar to always/never start in the stowed state, or an integer, which causes the UI
         * bar to start in the stowed state if the viewport width is less-than-or-equal-to the specified number of pixels.
         *
         * @default 800
         * @since 2.11.0
         *
         * @example
         * // As a boolean; always start stowed
         * Config.ui.stowBarInitially = true;
         *
         * @example
         * // As a boolean; never start stowed
         * Config.ui.stowBarInitially = false;
         *
         * @example
         * // As an integer; start stowed if the viewport is 800px or less
         * Config.ui.stowBarInitially = 800;
         */
        stowBarInitially: boolean | number;

        /**
         * Determines whether certain elements within the UI bar are updated when passages are displayed. The affected
         * elements are the story: banner, subtitle, author, caption, and menu.
         *
         * **NOTE**: SugarCube uses the story's title as the basis for the key used to store and load data used when playing the
         * story and for saves. Because of this, the story title is not included in updates and it is strongly recommended
         * that you do not add any kind of dynamic code to it.
         *
         * @default true
         * @since 2.0.0
         * @example
         * // If you don't need those elements to update
         * Config.ui.updateStoryElements = false;
         */
        updateStoryElements: boolean;
    };

    /**
     * Determines whether the link-visited class is added to internal passage links which go to previously visited
     * passages — i.e. the passage already exists within the story history
     *
     * **NOTE** You must provide your own styling for the `link-visited` class as none is provided by default.
     * @default false
     * @since 2.0.0
     * @example
     * Config.addVisitedLinkClass = true;
     * // An example style:
     * .link-visited {
     *      color: purple;
     * }
     */
    addVisitedLinkClass: boolean;

    /**
     * Determines whether the output of the Wikifier is post-processed into more sane markup — i.e. where appropriate, it
     * tries to transition the plethora of <br> elements into <p> elements.
     * @default false
     * @since 2.0.0
     * @example
     * Config.cleanupWikifierOutput = true;
     */
    cleanupWikifierOutput: boolean;

    /**
     * Indicates whether SugarCube is running in test mode, which enables debug views. See Test Mode for more information.
     *
     * NOTE: This property is automatically set based on whether you're using a testing mode in a Twine compiler — i.e. Test
     * mode in Twine 2, Test Play From Here in Twine 1, or the test mode options (-t, --test) in Tweego. You may, however,
     * forcibly enable it if you need to for some reason — e.g. if you're using another compiler, which doesn't offer a way
     * to enable test mode.
     *
     * @default false
     * @since 2.2.0
     * @example
     * // Forcibly enable test mode
     *  Config.debug = true;
     *
     * @example
     * // Check if test mode is enabled in JavaScript
     * if (Config.debug) {
     *    // do something debug related
     * }
     *
     * @example
     * // Check if test mode is enabled via the <<if>> macro
     * <<if Config.debug>>
     *     // do something debug related
     * <</if>>
     */
    debug: boolean;

    /**
     * Sets the integer delay (in milliseconds) before the loading screen is dismissed, once the document has signaled its
     * readiness. Not generally necessary, however, some browsers render slower than others and may need a little extra time
     * to get a media-heavy page done. This allows you to fine tune for those cases.
     *
     * @default 0
     * @since 2.0.0
     *
     * @example
     * // Delay the dismissal of the loading screen by 2000ms (2s)
     * Config.loadDelay = 2000;
     */
    loadDelay: number;
}

export {};
