// Type definitions for Video.js 7.3
// Project: https://github.com/videojs/video.js, https://videojs.com
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 Simon Clériot <https://github.com/scleriot>
//                 Sean Bennett <https://github.com/SWBennett06>
//                 Christoph Wagner <https://github.com/IgelCampus>
//                 Gio Freitas <https://github.com/giofreitas>
//                 Grzegorz Błaszczyk <https://github.com/gjanblaszczyk>
//                 Stéphane Roucheray <https://github.com/sroucheray>
//                 Adam Eisenreich <https://github.com/AkxeOne>
//                 Mei Qingguang <https://github.com/meikidd>
//                 Joe Flateau <https://github.com/joeflateau>
//                 KuanYu Chu <https://github.com/ckybonist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// The Video.js API allows you to interact with the video through
// Javascript, whether the browser is playing the video through HTML5
// video, Flash, or any other supported playback technologies.

/**
 * Doubles as the main function for users to create a inplayer instance and also
 * the main library object.
 * The `videojs` function can be used to initialize or retrieve a player.
 *
 * @param id
 *        Video element or video element ID
 *
 * @param [options]
 *        Optional options object for config/settings
 *
 * @param [ready]
 *        Optional ready callback
 *
 * @return A player instance
 */
declare function videojs(id: any, options?: videojs.PlayerOptions, ready?: () => void): videojs.Player;
export default videojs;
export as namespace videojs;

declare namespace videojs {
    /**
     * Adding languages so that they're available to all players.
     * Example: `addLanguage('es', { 'Hello': 'Hola' });`
     *
     * @param code
     *        The language code or dictionary property
     *
     * @param data
     *        The data values to be translated
     *
     * @return The resulting language dictionary object
     */
    function addLanguage(code: string, data: LanguageTranslations): LanguageTranslations;

    /**
     * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
     * It also stores a unique id on the function so it can be easily removed from events.
     *
     * @param context
     *        The object to bind as scope.
     *
     * @param fn
     *        The function to be bound to a scope.
     *
     * @param [uid]
     *        An optional unique ID for the function to be set
     *
     * @return The new function that will be bound into the context given
     */
    function bind<F extends () => any>(context: any, fn: F, uid?: number): F;

    /**
     * Should create a fake `TimeRange` object which mimics an HTML5 time range instance.
     *
     * @param start
     *        The start of a single range or an array of ranges
     *
     * @param end
     *        The end of a single range.
     */
    function createTimeRanges(start?: number | TimeRange[], end?: number): TimeRange;

    /**
     * A suite of browser and device tests from {@link browser}.
     *
     */
    const browser: Browser;

    const dom: Dom;

    /**
     * Format seconds as a time string, H:MM:SS or M:SS. Supplying a guide (in seconds)
     * will force a number of leading zeros to cover the length of the guide.
     *
     * @param seconds
     *        Number of seconds to be turned into a string
     *
     * @param guide
     *        Number (in seconds) to model the string after
     *
     * @return Time formatted as H:MM:SS or M:SS
     */
    function formatTime(seconds: number, guide: number): string;

    /**
     * Returns an array of all current players.
     *
     * @return An array of all players. The array will be in the order that
     *         `Object.keys` provides, which could potentially vary between
     *         JavaScript engines.
     *
     */
    function getAllPlayers(): Player[];

    /**
     * Get a component class object by name
     *
     * @borrows Component.getComponent as getComponent
     */
    const getComponent: typeof Component.getComponent;

    /**
     * Get a single player based on an ID or DOM element.
     *
     * This is useful if you want to check if an element or ID has an associated
     * Video.js player, but not create one if it doesn't.
     *
     * @param id
     *          An HTML element - `<video>`, `<audio>`, or `<video-js>` -
     *          or a string matching the `id` of such an element.
     *
     * @return    A player instance or `undefined` if there is no player instance
     *          matching the argument.
     */
    function getPlayer(id: string): Player;

    /**
     * Get an object with the currently created players, keyed by player ID
     *
     * @return    The created players
     */
    function getPlayers(): { [key: string]: Player };

    /**
     * Gets a plugin by name if it exists.
     *
     * @param name
     *         The name of a plugin.
     *
     * @return    The plugin (or `undefined`).
     */
    const getPlugin: typeof Plugin.getPlugin;

    /**
     * Gets an object containing multiple Video.js plugins.
     *
     * @param [names]
     *         If provided, should be an array of plugin names. Defaults to _all_
     *         plugin names.
     *
     * @return    An object containing plugin(s) associated with their name(s) or
     *         `undefined` if no matching plugins exist).
     */
    const getPlugins: typeof Plugin.getPlugins;

    /**
     * Gets a plugin's version, if available
     *
     * @param name
     *         The name of a plugin.
     *
     * @return    The plugin's version or an empty string.
     */
    const getPluginVersion: typeof Plugin.getPluginVersion;

    /**
     * Get a Tech class object by name
     *
     * @borrows Tech.getTech as getTech
     */
    const getTech: typeof Tech.getTech;

    /**
     * Add a function hook to a specific videojs lifecycle.
     *
     * @param type
     *        the lifecycle to hook the function to.
     *
     * @param fn
     *        The function or array of functions to attach.
     */
    function hook(type: 'setup', fn: Hook.Setup | Hook.Setup[]): void;

    function hook(type: 'beforesetup', fn: Hook.BeforeSetup | Hook.BeforeSetup[]): void;

    /**
     * Add a function hook that will only run once to a specific videojs lifecycle.
     *
     * @param type
     *        the lifecycle to hook the function to.
     *
     * @param fn
     *        The function or array of functions to attach.
     */
    function hookOnce(type: string, fn?: (() => any) | Array<() => any>): void;

    /**
     * Get a list of hooks for a specific lifecycle
     *
     * @param type
     *        the lifecycle to get hooks from
     *
     * @param [fn]
     *        Optionally add a hook (or hooks) to the lifecycle that your are getting.
     *
     * @return    an array of hooks, or an empty array if there are none.
     */
    function hooks(type: string, fn?: (() => any) | Array<() => any>): void;

    /**
     * Returns whether the url passed is a cross domain request or not.
     *
     * @param url
     *        The url to check.
     *
     * @return    Whether it is a cross domain request or not.
     */
    function isCrossOrigin(url: string): boolean;

    /**
     * An Object that contains lifecycle hooks as keys which point to an array
     * of functions that are run when a lifecycle is triggered
     */
    const hooks_: { [type: string]: () => any };

    /**
     * Log messages
     *
     * @borrows log:log as log
     */
    const log: Log;

    /**
     * Deep-merge one or more options objects, recursively merging **only** plain
     * object properties.
     *
     * @param sources
     *          One or more objects to merge into a new object.
     *
     * @return    A new object that is the merged result of all sources.
     */
    function mergeOptions<A, B, C, D, E, F>(
        option: A,
        option2?: B,
        option3?: C,
        option4?: D,
        option5?: E,
        option6?: F,
    ): A & B & C & D & E & F;

    /**
     * Resolve and parse the elements of a URL.
     *
     * @param url
     *         The url to parse
     *
     * @return    An object of url details
     */
    function parseUrl(url: string): url.URLObject;

    /**
     * An object that can be returned by a middleware to signify
     * that the middleware is being terminated.
     */
    const middleware: { TERMINATOR: {} };

    /**
     * Removes event listeners from an element
     *
     * @param elem
     *        Object to remove listeners from.
     *
     * @param [type]
     *        Type of listener to remove. Don't include to remove all events from element.
     *
     * @param [fn]
     *        Specific listener to remove. Don't include to remove listeners for an event
     *        type.
     */
    function off(elem: Element, type: string | string, fn: EventTarget.EventListener): void;

    /**
     * Add an event listener to element
     * It stores the handler function in a separate cache object
     * and adds a generic handler to the element's event,
     * along with a unique id (guid) to the element.
     *
     * @param elem
     *        Element or object to bind listeners to
     *
     * @param type
     *        Type of event to bind to.
     *
     * @param fn
     *        Event listener.
     */
    function on(elem: Element, type: string | string[], fn: EventTarget.EventListener): void;

    /**
     * Trigger a listener only once for an event
     *
     * @param elem
     *        Element or object to bind to.
     *
     * @param type
     *        Name/type of event
     *
     * @param fn
     *        Event Listener function
     */
    function one(elem: Element, type: string | string[], fn: EventTarget.EventListener): void;

    /**
     * The global options object. These are the settings that take effect
     * if no overrides are specified when the player is created.
     *
     */
    const options: PlayerOptions;

    /**
     * Deprecated method to register a plugin with Video.js
     *
     * @deprecated
     *        plugin() is deprecated; use registerPlugin() instead
     *
     * @param name
     *        The plugin name
     *
     * @param plugin
     *         The plugin sub-class or function
     */
    const plugin: typeof Plugin.registerPlugin;

    /**
     * Register a component so it can referred to by name. Used when adding to other
     * components, either through addChild `component.addChild('myComponent')` or through
     * @default children options  `{ children: ['myComponent'] }`.
     *
     * > NOTE: You could also just initialize the component before adding.
     * `component.addChild(new MyComponent());`
     *
     * @param name
     *        The class name of the component
     *
     * @param comp
     *        The component class
     *
     * @return    The newly registered component
     */
    const registerComponent: typeof Component.registerComponent;

    /**
     * Register a Video.js plugin.
     *
     * @borrows plugin:registerPlugin as registerPlugin
     *
     * @param name
     *         The name of the plugin to be registered. Must be a string and
     *         must not match an existing plugin or a method on the `Player`
     *         prototype.
     *
     * @param plugin
     *         A sub-class of `Plugin` or a function for basic plugins.
     *
     * @return    For advanced plugins, a factory function for that plugin. For
     *         basic plugins, a wrapper function that initializes the plugin.
     */
    const registerPlugin: typeof Plugin.registerPlugin;

    /**
     * Register a Tech so it can referred to by name.
     * This is used in the tech order for the player.
     *
     * @borrows Tech.registerTech as registerTech
     */
    const registerTech: typeof Tech.registerTech;

    /**
     * Resets formatTime to the default implementation.
     */
    function resetFormatTime(): void;

    /**
     * Replaces the default formatTime implementation with a custom implementation.
     *
     * @param customImplementation
     *        A function which will be used in place of the default formatTime implementation.
     *        Will receive the current time in seconds and the guide (in seconds) as arguments.
     */
    function setFormatTime(customImplementation: (seconds: number, guide: number) => string): void;

    /**
     * Remove a hook from a specific videojs lifecycle.
     *
     * @param type
     *        the lifecycle that the function hooked to
     *
     * @param fn
     *        The hooked function to remove
     *
     * @return    The function that was removed or undef
     */
    function removeHook(type: string, fn: () => any): boolean;

    /**
     * Trigger an event for an element
     *
     * @param elem
     *        Element to trigger an event on
     *
     * @param event
     *        A string (the type) or an event object with a type attribute
     *
     * @param [hash]
     *        data hash to pass along with the event
     *
     * @return    - Returns the opposite of `defaultPrevented` if default was prevented
     *         - Otherwise returns undefined
     */
    function trigger(elem: Element, event: EventTarget.Event | string, hash?: any): boolean | undefined;

    /**
     * Whether or not the browser supports touch events. Included for backward
     * compatibility with 4.x, but deprecated. Use `browser.TOUCH_ENABLED`
     * instead going forward.
     *
     * @deprecated since version 5.0
     */
    const TOUCH_ENABLED: boolean;

    /**
     * Register a middleware to a source type.
     *
     * @param type A string representing a MIME type.
     * @param middleware A middleware factory that takes a player.
     */
    function use(type: string, middleware: (player: Player) => Middleware): void;

    /**
     * Current software version. Follows semver.
     *
     */
    const VERSION: string;

    /**
     * A cross-browser XMLHttpRequest wrapper. Here's a simple example:
     *
     * @param options
     *        settings for the request.
     *
     * @return The request object.
     *
     * @see https://github.com/Raynos/xhr
     */
    const xhr: XhrObject;

    namespace Hook {
        type BeforeSetup = (element: HTMLVideoElement, options: any) => any;

        type Setup = (player: Player) => void;
    }

    /**
     * A representation of a single `AudioTrack`. If it is part of an {@link AudioTrackList}
     * only one `AudioTrack` in the list will be enabled at a time.
     *
     * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#audiotrack}
     */
    const AudioTrack: {
        prototype: Track;

        /**
         * Create an instance of this class.
         *
         * @param [options={}]
         *        Object of option names and values
         *
         * @param [options.kind='']
         *        A valid audio track kind
         *
         * @param [options.id='vjs_track_' + Guid.newGUID()]
         *        A unique id for this AudioTrack.
         *
         * @param [options.label='']
         *        The menu label for this track.
         *
         * @param [options.language='']
         *        A valid two character language code.
         *
         * @param [options.enabled]
         *        If this track is the one that is currently playing. If this track is part of
         *        an {@link AudioTrackList}, only one {@link AudioTrack} will be enabled.
         */
        new (options?: AudioTrackOptions): Track;
    };

    /**
     * Object of option names and values
     *
     * @param [options.kind='']
     *        A valid audio track kind
     *
     * @param [options.id='vjs_track_' + Guid.newGUID()]
     *        A unique id for this AudioTrack.
     *
     * @param [options.label='']
     *        The menu label for this track.
     *
     * @param [options.language='']
     *        A valid two character language code.
     *
     * @param [options.enabled]
     *        If this track is the one that is currently playing. If this track is part of
     *        an {@link AudioTrackList}, only one {@link AudioTrack} will be enabled.
     */
    interface AudioTrackOptions {
        kind?: AudioTrack.Kind;
        id?: string;
        label?: string;
        language?: string;
        enabled?: boolean;
    }

    namespace AudioTrack {
        /**
         * All possible `AudioTrackKind`s
         *
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-audiotrack-kind
         */
        type Kind = 'alternative' | 'descriptions' | 'main' | 'main-desc' | 'translation' | 'commentary';
    }

    /**
     * The base class for buttons that toggle specific {@link AudioTrack} types.
     */
    interface AudioTrackButton extends MenuButton {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Allow sub components to stack CSS class names for the wrapper element
         *
         * @return The constructed wrapper DOM `className`
         */
        buildWrapperCSSClass(): string;

        /**
         * Create a menu item for each audio track
         *
         * @param [items=[]]
         *        An array of existing menu items to use.
         *
         * @return An array of menu items
         */
        createItems(items?: AudioTrackMenuItem[]): AudioTrackMenuItem[];
    }

    const AudioTrackButton: {
        prototype: AudioTrackButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options={}]
         *        The key/value store of player options.
         */
        new (player: Player, options?: TrackButtonOptions): AudioTrackButton;
    };

    /**
     * An {@link AudioTrack} {@link MenuItem}
     */
    interface AudioTrackMenuItem extends MenuItem {
        /**
         * Handle any {@link AudioTrack} change.
         *
         * @param [event]
         *        The {@link AudioTrackList#change} event that caused this to run.
         *
         * @listens AudioTrackList#change
         */
        handleTracksChange(event: EventTarget.Event): void;
    }

    const AudioTrackMenuItem: {
        prototype: AudioTrackMenuItem;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: AudioTrackMenuItemOptions): AudioTrackMenuItem;
    };

    interface VideojsAudioTrack {
        enabled: boolean;
        readonly id: string;
        kind: string;
        readonly label: string;
        language: string;
        readonly sourceBuffer: SourceBuffer | null;
    }

    interface AudioTrackMenuItemOptions extends MenuItemOptions {
        track?: VideojsAudioTrack;
    }

    /**
     * The initial play button that shows before the video has played. The hiding of the
     * `BigPlayButton` get done via CSS and `Player` states.
     */
    interface BigPlayButton extends Button {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object. Always returns 'vjs-big-play-button'.
         */
        buildCSSClass(): string;

        /**
         * This gets called when a `BigPlayButton` "clicked". See {@link ClickableComponent}
         * for more detailed information on what a click can be.
         *
         * @param event
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;

        /**
         * Called when this BigPlayButton has focus and a key gets pressed down. By
         * default it will call `this.handleClick` when the key is space or enter.
         *
         * @param event
         *        The `keydown` event that caused this function to be called.
         *
         * @listens keydown
         */
        handleKeyPress(event: EventTarget.Event): void;

        /**
         * Called when this BigPlayButton gets mouse pressed down
         *
         * @param event
         *        The `keydown` event that caused this function to be called.
         *
         * @listens mousedown
         */
        handleMouseDown(event: EventTarget.Event): void;
    }

    const BigPlayButton: {
        prototype: BigPlayButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options?: ComponentOptions): BigPlayButton;
    };

    interface Browser {
        ANDROID_VERSION: number | null;
        CHROME_VERSION: number;
        IS_ANDROID: boolean;
        IS_ANY_SAFARI: boolean;
        IS_CHROME: boolean;
        IS_EDGE: boolean;
        IS_NATIVE_ANDROID: boolean;
        IS_IPAD: boolean;
        IS_IPHONE: boolean;
        IS_IPOD: boolean;
        IS_IOS: boolean;
        IS_SAFARI: boolean;
        IE_VERSION: number;
        IOS_VERSION: number | null;
        TOUCH_ENABLED: boolean;
    }

    /**
     * Base class for all buttons.
     */
    interface Button extends ClickableComponent {
        options_: ComponentOptions;

        /**
         * Create the `Button`s DOM element.
         *
         * @param [tag="button"]
         *        The element's node type. This argument is IGNORED: no matter what
         *        is passed, it will always create a `button` element.
         *
         * @param [props={}]
         *        An object of properties that should be set on the element.
         *
         * @param [attributes={}]
         *        An object of attributes that should be set on the element.
         *
         * @return The element that gets created.
         */
        createEl(tag: string, props?: any, attributes?: any): HTMLButtonElement;

        /**
         * Add a child `Component` inside of this `Button`.
         *
         * @param child
         *        The name or instance of a child to add.
         *
         * @param [options={}]
         *        The key/value store of options that will get passed to children of
         *        the child.
         *
         * @return The `Component` that gets added as a child. When using a string the
         *         `Component` will get created by this process.
         *
         * @deprecated since version 5
         */
        addChild(component: string, optionsopt?: any, indexopt?: number): Component;

        addChild(component: Element, optionsopt?: any, indexopt?: number): Element;

        addChild<T extends Component>(child: string | T, options?: any): T;

        /**
         * Enable the `Button` element so that it can be activated or clicked. Use this with
         * {@link Button#disable}.
         */
        enable(): void;

        /**
         * Disable the `Button` element so that it cannot be activated or clicked. Use this with
         * {@link Button#enable}.
         */
        disable(): void;

        /**
         * This gets called when a `Button` has focus and `keydown` is triggered via a key
         * press.
         *
         * @param event
         *        The event that caused this function to get called.
         *
         * @listens keydown
         */
        handleKeyPress(event: EventTarget.Event): void;
    }

    const Button: {
        prototype: Button;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options?: ComponentOptions): Button;
    };

    /**
     * The button component for toggling and selecting captions
     */
    interface CaptionsButton extends TextTrackButton {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Allow sub components to stack CSS class names for the wrapper element
         *
         * @return The constructed wrapper DOM `className`
         */
        buildWrapperCSSClass(): string;

        /**
         * Create caption menu items
         *
         * @return The array of current menu items.
         */
        createItems(): CaptionSettingsMenuItem[];
    }

    const CaptionsButton: {
        prototype: CaptionsButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param [ready]
         *        The function to call when this function is ready.
         */
        new (player: Player, options?: TrackButtonOptions, ready?: Component.ReadyCallback): CaptionsButton;
    };

    /**
     * The menu item for caption track settings menu
     */
    interface CaptionSettingsMenuItem extends TextTrackMenuItem {
        /**
         * This gets called when an `CaptionSettingsMenuItem` is "clicked". See
         * {@link ClickableComponent} for more detailed information on what a click can be.
         *
         * @param [event]
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;
    }

    const CaptionsSettingsMenuItem: {
        prototype: CaptionSettingsMenuItem;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: CaptionSettingsMenuItemOptions): CaptionSettingsMenuItem;
    };

    interface CaptionSettingsMenuItemOptions extends TextTrackMenuItemOptions {
        kind: TextTrack.Kind;
    }

    /**
     * The button component for toggling and selecting chapters
     * Chapters act much differently than other text tracks
     * Cues are navigation vs. other tracks of alternative languages
     */
    interface ChaptersButton extends TextTrackButton {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Allow sub components to stack CSS class names for the wrapper element
         *
         * @return The constructed wrapper DOM `className`
         */
        buildWrapperCSSClass(): string;

        /**
         * Create a menu item for each text track
         *
         * @return Array of menu items
         */
        createItems(): TextTrackMenuItem[];

        /**
         * Create menu from chapter track
         *
         * @return New menu for the chapter buttons
         */
        createMenu(): Menu;

        /**
         * Find the track object that is currently in use by this ChaptersButton
         *
         * @return The current track or undefined if none was found.
         */
        findChaptersTrack(): TextTrack | undefined;

        /**
         * Get the caption for the ChaptersButton based on the track label. This will also
         * use the current tracks localized kind as a fallback if a label does not exist.
         *
         * @return The tracks current label or the localized track kind.
         */
        getMenuCaption(): string;

        /**
         * Set the currently selected track for the chapters button.
         *
         * @param track
         *        The new track to select. Nothing will change if this is the currently selected
         *        track.
         */
        setTrack(track: TextTrack): void;

        /**
         * Update the menu based on the current state of its items.
         *
         * @param [event]
         *        An event that triggered this function to run.
         *
         * @listens TextTrackList#addtrack
         * @listens TextTrackList#removetrack
         * @listens TextTrackList#change
         */
        update(event?: EventTarget.Event): void;
    }

    const ChaptersButton: {
        prototype: ChaptersButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param [ready]
         *        The function to call when this function is ready.
         */
        new (player: Player, options?: TrackButtonOptions, ready?: Component.ReadyCallback): ChaptersButton;
    };

    /**
     * The chapter track menu item
     */
    interface ChaptersTrackMenuItem extends MenuItem {
        track: TextTrack;

        cue: TextTrackCueList.TextTrackCue;

        /**
         * This gets called when an `ChaptersTrackMenuItem` is "clicked". See
         * {@link ClickableComponent} for more detailed information on what a click can be.
         *
         * @param [event]
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;

        /**
         * Update chapter menu item
         *
         * @param [event]
         *        The `cuechange` event that caused this function to run.
         *
         * @listens TextTrack#cuechange
         */
        update(event: EventTarget.Event): void;
    }

    const ChaptersTrackMenuItem: {
        prototype: ChaptersTrackMenuItem;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: ChaptersTrackMenuItemOptions): ChaptersTrackMenuItem;
    };

    interface ChaptersTrackMenuItemOptions extends MenuItemOptions {
        track: TextTrack;
        cue: TextTrackCueList.TextTrackCue;
    }

    type Child =
        | string
        | {
              name: string;
              children?: Child[];
          };

    /**
     * Clickable Component which is clickable or keyboard actionable,
     * but is not a native HTML button.
     */
    interface ClickableComponent extends Component {
        options_: ComponentOptions;

        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Create the `Component`s DOM element.
         *
         * @param [tag=div]
         *        The element's node type.
         *
         * @param [props={}]
         *        An object of properties that should be set on the element.
         *
         * @param [attributes={}]
         *        An object of attributes that should be set on the element.
         *
         * @return The element that gets created.
         */
        createEl(tag: string, props?: any, attributes?: any): Element;

        /**
         * Get the localize text to use for the controls on the `Component`.
         *
         * @return - The control text when getting
         */
        controlText(): string;

        /**
         * Set the localize text to use for the controls on the `Component`.
         *
         * @param [text]
         *        Control text for element.
         *
         * @param [el=this.el()]
         *        Element to set the title on.
         */
        controlText(text: string, el?: Element): void;

        /**
         * Create a control text element on this `Component`
         *
         * @param [el]
         *        Parent element for the control text.
         *
         * @return The control text element that gets created.
         */
        createControlTextEl(el?: Element): Element;

        /**
         * Disable this `Component`s element.
         */
        disable(): void;

        /**
         * Enable this `Component`s element.
         */
        enable(): void;

        /**
         * This gets called when a `ClickableComponent` gets:
         * - Clicked (via the `click` event, listening starts in the constructor)
         * - Tapped (via the `tap` event, listening starts in the constructor)
         * - The following things happen in order:
         *   1. {@link ClickableComponent#handleFocus} is called via a `focus` event on the
         *      `ClickableComponent`.
         *   2. {@link ClickableComponent#handleFocus} adds a listener for `keydown` on using
         *      {@link ClickableComponent#handleKeyPress}.
         *   3. `ClickableComponent` has not had a `blur` event (`blur` means that focus was lost). The user presses
         *      the space or enter key.
         *   4. {@link ClickableComponent#handleKeyPress} calls this function with the `keydown`
         *      event as a parameter.
         *
         * @param event
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;

        /**
         * This gets called when a `ClickableComponent` gains focus via a `focus` event.
         * Turns on listening for `keydown` events. When they happen it
         * calls `this.handleKeyPress`.
         *
         * @param event
         *        The `focus` event that caused this function to be called.
         *
         * @listens focus
         */
        handleFocus(event: EventTarget.Event): void;

        /**
         * Called when this ClickableComponent has focus and a key gets pressed down. By
         * default it will call `this.handleClick` when the key is space or enter.
         *
         * @param event
         *        The `keydown` event that caused this function to be called.
         *
         * @listens keydown
         */
        handleKeyPress(event: EventTarget.Event): void;

        /**
         * Called when a `ClickableComponent` loses focus. Turns off the listener for
         * `keydown` events. Which Stops `this.handleKeyPress` from getting called.
         *
         * @param event
         *        The `blur` event that caused this function to be called.
         *
         * @listens blur
         */
        handleBlur(event: EventTarget.Event): void;
    }

    const ClickableComponent: {
        prototype: ClickableComponent;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options?: ComponentOptions): ClickableComponent;
    };

    /**
     * The `CloseButton` is a `{@link Button}` that fires a `close` event when
     * it gets clicked.
     */
    interface CloseButton extends Button {
        options_: CloseButtonOptions;

        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * This gets called when a `CloseButton` gets clicked. See
         * {@link ClickableComponent#handleClick} for more information on when this will be
         * triggered
         *
         * @param event
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         * @fires CloseButton#close
         */
        handleClick(event: EventTarget.Event): void;
    }

    const CloseButton: {
        prototype: CloseButton;

        /**
         * Creates an instance of the this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options?: CloseButtonOptions): CloseButton;
    };

    interface CloseButtonOptions extends ComponentOptions {
        controlText?: string;
    }

    /**
     * Base class for all UI Components.
     * Components are UI objects which represent both a javascript object and an element
     * in the DOM. They can be children of other components, and can have
     * children themselves.
     *
     * Components can also use methods from {@link EventTarget}
     */
    interface Component extends EventedMixin {
        options_: ComponentOptions;

        player_: Player;

        children_: Component[];

        /**
         * Find a single DOM element matching a `selector`. This can be within the `Component`s
         * `contentEl()` or another custom context.
         *
         * @param selector
         *        A valid CSS selector, which will be passed to `querySelector`.
         *
         * @param [context=this.contentEl()]
         *        A DOM element within which to query. Can also be a selector string in
         *        which case the first matching element will get used as context. If
         *        missing `this.contentEl()` gets used. If  `this.contentEl()` returns
         *        nothing it falls back to `document`.
         *
         * @return the dom element that was found, or null
         *
         * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
         */
        $(selector: string, context?: string | Element): Element;

        /**
         * Finds all DOM element matching a `selector`. This can be within the `Component`s
         * `contentEl()` or another custom context.
         *
         * @param selector
         *        A valid CSS selector, which will be passed to `querySelectorAll`.
         *
         * @param [context=this.contentEl()]
         *        A DOM element within which to query. Can also be a selector string in
         *        which case the first matching element will get used as context. If
         *        missing `this.contentEl()` gets used. If  `this.contentEl()` returns
         *        nothing it falls back to `document`.
         *
         * @return a list of dom elements that were found
         *
         * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
         */
        $$(selector: string, context?: string | Element): NodeList;

        /**
         * Add a child `Component` inside the current `Component`.
         *
         *
         * @param child
         *        The name or instance of a child to add.
         *
         * @param [options={}]
         *        The key/value store of options that will get passed to children of
         *        the child.
         *
         * @param [index=this.children_.length]
         *        The index to attempt to add a child into.
         *
         * @return The `Component` that gets added as a child. When using a string the
         *         `Component` will get created by this process.
         */
        addChild(component: string, optionsopt?: any, indexopt?: number): Component;

        addChild(component: Element, optionsopt?: any, indexopt?: number): Element;

        addChild<T extends Component>(child: string | T, options?: any, index?: number): T;

        /**
         * Add a CSS class name to the `Component`s element.
         *
         * @param classToAdd
         *        CSS class name to add
         */
        addClass(classToAdd: string): void;

        /**
         * Remove the focus from this component
         */
        blur(): void;

        /**
         * Builds the default DOM class name. Should be overriden by sub-components.
         *
         * @return The DOM class name for this object.
         */
        buildCSSClass(): string;

        /**
         * Cancels a queued callback passed to {@link Component#requestAnimationFrame}
         * (rAF).
         *
         * If you queue an rAF callback via {@link Component#requestAnimationFrame},
         * use this function instead of `window.cancelAnimationFrame`. If you don't,
         * your dispose listener will not get cleaned up until {@link Component#dispose}!
         *
         * @param id
         *        The rAF ID to clear. The return value of {@link Component#requestAnimationFrame}.
         *
         * @return Returns the rAF ID that was cleared.
         *
         * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/window/cancelAnimationFrame}
         */
        cancelAnimationFrame(id: number): number;

        /**
         * Get an array of all child components
         *
         * @return The children
         */
        children(): Component[];

        /**
         * Clears an interval that gets created via `window.setInterval` or
         * {@link Component#setInterval}. If you set an inteval via {@link Component#setInterval}
         * use this function instead of `window.clearInterval`. If you don't your dispose
         * listener will not get cleaned up until {@link Component#dispose}!
         *
         * @param intervalId
         *        The id of the interval to clear. The return value of
         *        {@link Component#setInterval} or `window.setInterval`.
         *
         * @return Returns the interval id that was cleared.
         *
         * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval}
         */
        clearInterval(intervalId: number): number;

        /**
         * Clears a timeout that gets created via `window.setTimeout` or
         * {@link Component#setTimeout}. If you set a timeout via {@link Component#setTimeout}
         * use this function instead of `window.clearTimout`. If you don't your dispose
         * listener will not get cleaned up until {@link Component#dispose}!
         *
         * @param timeoutId
         *        The id of the timeout to clear. The return value of
         *        {@link Component#setTimeout} or `window.setTimeout`.
         *
         * @return Returns the timeout id that was cleared.
         *
         * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
         */
        clearTimeout(timeoutId: number): number;

        /**
         * Return the `Component`s DOM element. This is where children get inserted.
         * This will usually be the the same as the element returned in {@link Component#el}.
         *
         * @return The content element for this `Component`.
         */
        contentEl(): Element;

        controlText(key: string): string;

        /**
         * Create the `Component`s DOM element.
         *
         * @param [tagName]
         *        Element's DOM node type. e.g. 'div'
         *
         * @param [properties]
         *        An object of properties that should be set.
         *
         * @param [attributes]
         *        An object of attributes that should be set.
         *
         * @return The element that gets created.
         */
        createEl(tagName?: string, properties?: any, attributes?: any): Element;

        /**
         * Get the width or the height of the `Component` elements computed style. Uses
         * `window.getComputedStyle`.
         *
         * @param widthOrHeight
         *        A string containing 'width' or 'height'. Whichever one you want to get.
         *
         * @return The dimension that gets asked for or 0 if nothing was set
         *         for that dimension.
         */
        currentDimension(widthOrHeight: 'width' | 'height'): number;

        /**
         * Get an object that contains width and height values of the `Component`s
         * computed style.
         *
         * @return The dimensions of the components element
         */
        currentDimensions(): Component.DimensionObject;

        /**
         * Get the height of the `Component`s computed style. Uses `window.getComputedStyle`.
         *
         * @return height
         *           The height of the `Component`s computed style.
         */
        currentHeight(): number;

        /**
         * Get the width of the `Component`s computed style. Uses `window.getComputedStyle`.
         *
         * @return width
         *           The width of the `Component`s computed style.
         */
        currentWidth(): number;

        /**
         * Get or set width or height of the `Component` element. This is the shared code
         * for the {@link Component#width} and {@link Component#height}.
         *
         * Things to know:
         * - If the width or height in an number this will return the number postfixed with 'px'.
         * - If the width/height is a percent this will return the percent postfixed with '%'
         * - Hidden elements have a width of 0 with `window.getComputedStyle`. This function
         *   defaults to the `Component`s `style.width` and falls back to `window.getComputedStyle`.
         *   See [this]{@link http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/}
         *   for more information
         * - If you want the computed style of the component, use {@link Component#currentWidth}
         *   and {@link {Component#currentHeight}
         *
         * @fires Component#componentresize
         *
         * @param widthOrHeight
         *        'width' or 'height'
         *
         * @param [num]
         *         New dimension
         *
         * @param [skipListeners]
         *         Skip componentresize event trigger
         *
         * @return The dimension when getting or 0 if unset
         */
        dimension(widthOrHeight: 'width' | 'height', num: string | number, skipListeners?: boolean): void;

        dimension(widthOrHeight: 'width' | 'height'): number;

        /**
         * Set both the width and height of the `Component` element at the same time.
         *
         * @param width
         *         Width to set the `Component`s element to.
         *
         * @param height
         *         Height to set the `Component`s element to.
         */
        dimensions(width: string | number, height: string | number): void;

        /**
         * Dispose of the `Component` and all child components.
         *
         * @fires Component#dispose
         */
        dispose(): void;

        /**
         * Get the `Component`s DOM element
         *
         * @return The DOM element for this `Component`.
         */
        el(): Element;

        /**
         * Emit a 'tap' events when touch event support gets detected. This gets used to
         * support toggling the controls through a tap on the video. They get enabled
         * because every sub-component would have extra overhead otherwise.
         *
         * @fires Component#tap
         * @listens Component#touchstart
         * @listens Component#touchmove
         * @listens Component#touchleave
         * @listens Component#touchcancel
         * @listens Component#touchend
         */
        emitTapEvents(): void;

        /**
         * This function reports user activity whenever touch events happen. This can get
         * turned off by any sub-components that wants touch events to act another way.
         *
         * Report user touch activity when touch events occur. User activity gets used to
         * determine when controls should show/hide. It is simple when it comes to mouse
         * events, because any mouse event should show the controls. So we capture mouse
         * events that bubble up to the player and report activity when that happens.
         * With touch events it isn't as easy as `touchstart` and `touchend` toggle player
         * controls. So touch events can't help us at the player level either.
         *
         * User activity gets checked asynchronously. So what could happen is a tap event
         * on the video turns the controls off. Then the `touchend` event bubbles up to
         * the player. Which, if it reported user activity, would turn the controls right
         * back on. We also don't want to completely block touch events from bubbling up.
         * Furthermore a `touchmove` event and anything other than a tap, should not turn
         * controls back on.
         *
         * @listens Component#touchstart
         * @listens Component#touchmove
         * @listens Component#touchend
         * @listens Component#touchcancel
         */
        enableTouchActivity(): void;

        /**
         * Set the focus to this component
         */
        focus(): void;

        /**
         * Get the value of an attribute on the `Component`s element.
         *
         * @param attribute
         *        Name of the attribute to get the value from.
         *
         * @return - The value of the attribute that was asked for.
         *         - Can be an empty string on some browsers if the attribute does not exist
         *           or has no value
         *         - Most browsers will return null if the attibute does not exist or has
         *           no value.
         *
         * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute}
         */
        getAttribute(attribute: string): string | null;

        /**
         * Returns the child `Component` with the given `name`.
         *
         * @param name
         *        The name of the child `Component` to get.
         *
         * @return The child `Component` with the given `name` or undefined.
         */
        getChild(name: string): Component | undefined;

        /**
         * Returns the child `Component` with the given `id`.
         *
         * @param id
         *        The id of the child `Component` to get.
         *
         * @return The child `Component` with the given `id` or undefined.
         */
        getChildById(id: string): Component | undefined;

        /**
         * Check if a component's element has a CSS class name.
         *
         * @param classToCheck
         *        CSS class name to check.
         *
         * @return - True if the `Component` has the class.
         *         - False if the `Component` does not have the class`
         */
        hasClass(classToCheck: string): boolean;

        /**
         * Get or set the height of the component based upon the CSS styles.
         * See {@link Component#dimension} for more detailed information.
         *
         * @param [num]
         *        The height that you want to set postfixed with '%', 'px' or nothing.
         *
         * @param [skipListeners]
         *        Skip the componentresize event trigger
         *
         * @return The width when getting, zero if there is no width. Can be a string
         *         postpixed with '%' or 'px'.
         */
        height(num: number | string, skipListeners?: boolean): void;

        height(): number | string;

        /**
         * Hide the `Component`s element if it is currently showing by adding the
         * 'vjs-hidden` class name to it.
         */
        hide(): void;

        /**
         * Get this `Component`s ID
         *
         * @return The id of this `Component`
         */
        id(): string;

        /**
         * Add and initialize default child `Component`s based upon options.
         */
        initChildren(): void;

        /**
         * Localize a string given the string in english.
         *
         * If tokens are provided, it'll try and run a simple token replacement on the provided string.
         * The tokens it looks for look like `{1}` with the index being 1-indexed into the tokens array.
         *
         * If a `defaultValue` is provided, it'll use that over `string`,
         * if a value isn't found in provided language files.
         * This is useful if you want to have a descriptive key for token replacement
         * but have a succinct localized string and not require `en.json` to be included.
         *
         * Currently, it is used for the progress bar timing.
         * ```js
         * {
         *   "progress bar timing: currentTime={1} duration={2}": "{1} of {2}"
         * }
         * ```
         * It is then used like so:
         * ```js
         * this.localize('progress bar timing: currentTime={1} duration{2}',
         *               [this.player_.currentTime(), this.player_.duration()],
         *               '{1} of {2}');
         * ```
         *
         * Which outputs something like: `01:23 of 24:56`.
         *
         *
         * @param string
         *        The string to localize and the key to lookup in the language files.
         * @param [tokens]
         *        If the current item has token replacements, provide the tokens here.
         * @param [defaultValue]
         *        Defaults to `string`. Can be a default value to use for token replacement
         *        if the lookup key is needed to be separate.
         *
         * @return The localized string or if no localization exists the english string.
         */
        localize(string: string, tokens?: string[], defaultValue?: string): string;

        /**
         * Lock a `Component`s element in its visible state by adding the 'vjs-lock-showing'
         * class name to it. Used during fadeIn/fadeOut.
         *
         */
        lockShowing(): void;

        /**
         * Get the `Component`s name. The name gets used to reference the `Component`
         * and is set during registration.
         *
         * @return The name of this `Component`.
         */
        name(): string;

        /**
         * Deep merge of options objects with new options.
         * > Note: When both `obj` and `options` contain properties whose values are objects.
         *         The two properties get merged using {@link module:mergeOptions}
         *
         * @param obj
         *        The object that contains new options.
         *
         * @return A new object of `this.options_` and `obj` merged together.
         *
         * @deprecated since version 5
         */
        options(obj: any): any;

        played(): TimeRanges;

        /**
         * Return the {@link Player} that the `Component` has attached to.
         *
         * @return The player that this `Component` has attached to.
         */
        player(): Player;

        /**
         * Bind a listener to the component's ready state.
         * Different from event listeners in that if the ready event has already happened
         * it will trigger the function immediately.
         *
         * @return Returns itself; method can be chained.
         */
        ready(callback: (this: Player) => void): this;

        /**
         * Remove an attribute from the `Component`s element.
         *
         * @param attribute
         *        Name of the attribute to remove.
         *
         * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute}
         */
        removeAttribute(attribute: string): void;

        /**
         * Remove a child `Component` from this `Component`s list of children. Also removes
         * the child `Component`s element from this `Component`s element.
         *
         * @param component
         *        The child `Component` to remove.
         */
        removeChild(component: Component): void;

        /**
         * Remove a CSS class name from the `Component`s element.
         *
         * @param classToRemove
         *        CSS class name to remove
         */
        removeClass(classToRemove: string): void;

        /**
         * Queues up a callback to be passed to requestAnimationFrame (rAF), but
         * with a few extra bonuses:
         *
         * - Supports browsers that do not support rAF by falling back to
         *   {@link Component#setTimeout}.
         *
         * - The callback is turned into a {@link Component~GenericCallback} (i.e.
         *   bound to the component).
         *
         * - Automatic cancellation of the rAF callback is handled if the component
         *   is disposed before it is called.
         *
         * @param fn
         *         A function that will be bound to this component and executed just
         *         before the browser's next repaint.
         *
         * @return Returns an rAF ID that gets used to identify the timeout. It can
         *         also be used in {@link Component#cancelAnimationFrame} to cancel
         *         the animation frame callback.
         *
         * @listens Component#dispose
         * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame}
         */
        requestAnimationFrame(fn: Component.GenericCallback): number;

        /**
         * Set the value of an attribute on the `Component`'s element
         *
         * @param attribute
         *        Name of the attribute to set.
         *
         * @param value
         *        Value to set the attribute to.
         *
         * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute}
         */
        setAttribute(attribute: string, value: string): void;

        /**
         * Creates a function that gets run every `x` milliseconds. This function is a wrapper
         * around `window.setInterval`. There are a few reasons to use this one instead though.
         * 1. It gets cleared via  {@link Component#clearInterval} when
         *    {@link Component#dispose} gets called.
         * 2. The function callback will be a {@link Component~GenericCallback}
         *
         * @param fn
         *        The function to run every `x` seconds.
         *
         * @param interval
         *        Execute the specified function every `x` milliseconds.
         *
         * @return Returns an id that can be used to identify the interval. It can also be be used in
         *         {@link Component#clearInterval} to clear the interval.
         *
         * @listens Component#dispose
         * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval}
         */
        setInterval(fn: Component.GenericCallback, interval: number): number;

        /**
         * Creates a function that runs after an `x` millisecond timeout. This function is a
         * wrapper around `window.setTimeout`. There are a few reasons to use this one
         * instead though:
         * 1. It gets cleared via  {@link Component#clearTimeout} when
         *    {@link Component#dispose} gets called.
         * 2. The function callback will gets turned into a {@link Component~GenericCallback}
         *
         * > Note: You can't use `window.clearTimeout` on the id returned by this function. This
         *         will cause its dispose listener not to get cleaned up! Please use
         *         {@link Component#clearTimeout} or {@link Component#dispose} instead.
         *
         * @param fn
         *        The function that will be run after `timeout`.
         *
         * @param timeout
         *        Timeout in milliseconds to delay before executing the specified function.
         *
         * @return Returns a timeout ID that gets used to identify the timeout. It can also
         *         get used in {@link Component#clearTimeout} to clear the timeout that
         *         was set.
         *
         * @listens Component#dispose
         * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout}
         */
        setTimeout(fn: Component.GenericCallback, timeout: number): number;

        /**
         * Show the `Component`s element if it is hidden by removing the
         * 'vjs-hidden' class name from it.
         */
        show(): void;

        /**
         * Add or remove a CSS class name from the component's element.
         * - `classToToggle` gets added when {@link Component#hasClass} would return false.
         * - `classToToggle` gets removed when {@link Component#hasClass} would return true.
         *
         * @param classToToggle
         *         The class to add or remove based on (@link Component#hasClass}
         *
         * @param [predicate]
         *         An {@link Dom~predicate} function or a boolean
         */
        toggleClass(classToToggle: string, predicate?: boolean | Dom.Predicate): void;

        /**
         * Trigger all the ready listeners for this `Component`.
         *
         * @fires Component#ready
         */
        triggerReady(): void;

        /**
         * Unlock a `Component`s element from its visible state by removing the 'vjs-lock-showing'
         * class name from it. Used during fadeIn/fadeOut.
         *
         */
        unlockShowing(): void;

        /**
         * Get or set the width of the component based upon the CSS styles.
         * See {@link Component#dimension} for more detailed information.
         *
         * @param [num]
         *        The width that you want to set postfixed with '%', 'px' or nothing.
         *
         * @param [skipListeners]
         *        Skip the componentresize event trigger
         *
         * @return The width when getting, zero if there is no width. Can be a string
         *           postpixed with '%' or 'px'.
         */
        width(num: number, skipListeners?: number): void;

        width(): string | number;
    }

    const Component: {
        prototype: Component;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param [options.children]
         *        An array of children objects to intialize this component with. Children objects have
         *        a name property that will be used if more than one component of the same type needs to be
         *        added.
         *
         * @param [ready]
         *        Function that gets called when the `Component` is ready.
         */
        new (player: Player, options?: ComponentOptions, ready?: Component.ReadyCallback): Component;

        /**
         * Get a `Component` based on the name it was registered with.
         *
         * @param name
         *        The Name of the component to get.
         *
         * @return The `Component` that got registered under the given name.
         *
         * @deprecated In `videojs` 6 this will not return `Component`s that were not
         *             registered using {@link Component.registerComponent}. Currently we
         *             check the global `videojs` object for a `Component` name and
         *             return that if it exists.
         */
        getComponent(name: 'Button' | 'button'): typeof Button;
        getComponent(name: 'ClickableComponent' | 'clickablecomponent'): typeof ClickableComponent;
        getComponent(name: 'ModalDialog' | 'modaldialog'): typeof ModalDialog;
        getComponent(name: 'Menu' | 'menu'): typeof Menu;
        getComponent(name: 'MenuButton' | 'menubutton'): typeof MenuButton;
        getComponent(name: 'MenuItem' | 'menuitem'): typeof MenuItem;
        getComponent(name: 'MouseTimeDisplay' | 'mouseTimeDisplay'): typeof MouseTimeDisplay;
        getComponent(name: 'Spacer' | 'spacer'): typeof Spacer;
        getComponent(name: 'Player' | 'player'): typeof Player;
        getComponent(name: 'timeTooltip' | 'TimeTooltip'): typeof TimeToolTip;
        getComponent(name: 'Component' | 'component' | string): typeof Component;

        /**
         * Register a `Component` with `videojs` given the name and the component.
         *
         * > NOTE: {@link Tech}s should not be registered as a `Component`. {@link Tech}s
         *         should be registered using {@link Tech.registerTech} or
         *         {@link videojs:videojs.registerTech}.
         *
         * > NOTE: This function can also be seen on videojs as
         *         {@link videojs:videojs.registerComponent}.
         *
         * @param name
         *        The name of the `Component` to register.
         *
         * @param ComponentToRegister
         *        The `Component` class to register.
         *
         * @return The `Component` that was registered.
         */
        registerComponent(name: string, ComponentToRegister: any): any;
    };

    interface ComponentOptions {
        children?: Child[];
    }

    namespace Component {
        /**
         * A callback that is called when a component is ready. Does not have any
         * parameters and any callback value will be ignored.
         */
        type ReadyCallback = (this: Component) => void;

        /**
         * A callback that has no parameters and is bound into `Component`s context.
         */
        type GenericCallback = (this: Component) => void;

        /**
         * An object that contains width and height values of the `Component`s
         * computed style. Uses `window.getComputedStyle`.
         */
        interface DimensionObject {
            width: number;
            height: number;
        }
    }

    type Content = string | Element | Node | (() => string | Element | Node);

    /**
     * Container of main controls.
     */
    interface ControlBar extends Component {
        options_: ControlBarOptions;

        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;
    }

    const ControlBar: {
        prototype: ControlBar;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: ControlBarOptions): ControlBar;
    };

    interface ControlBarOptions extends ComponentOptions {
        volumePanel?: VolumePanelOptions | boolean;
        playToggle?: boolean;
        captionsButton?: boolean;
        chaptersButton?: boolean;
        subtitlesButton?: boolean;
        remainingTimeDisplay?: boolean;
        progressControl?: ProgressControlOptions | boolean;
        fullscreenToggle?: boolean;
        playbackRateMenuButton?: boolean;
        pictureInPictureToggle?: boolean;
        currentTimeDisplay?: boolean;
        timeDivider?: boolean;
        durationDisplay?: boolean;
        liveDisplay?: boolean;
        seekToLive?: boolean;
        customControlSpacer?: boolean;
        descriptionsButton?: boolean;
        subsCapsButton?: boolean;
        audioTrackButton?: boolean;
    }

    /**
     * Displays the current time
     */
    interface CurrentTimeDisplay extends TimeDisplay {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Update current time display
         *
         * @param [event]
         *        The `timeupdate` event that caused this function to run.
         *
         * @listens Player#timeupdate
         */
        updateContent(event: EventTarget.Event): void;

        /**
         * When the player fires ended there should be no time left. Sadly
         * this is not always the case, lets make it seem like that is the case
         * for users.
         *
         * @param [event]
         *        The `ended` event that caused this to run.
         *
         * @listens Player#ended
         */
        handleEnded(event: EventTarget.Event): void;
    }

    const CurrentTimeDisplay: {
        prototype: CurrentTimeDisplay;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options: ComponentOptions): CurrentTimeDisplay;
    };

    /**
     * Spacer specifically meant to be used as an insertion point for new plugins, etc.
     */
    interface CustomControlSpacer extends Spacer {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;
    }

    const CustomControlSpacer: {
        prototype: CustomControlSpacer;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param [ready]
         *        Function that gets called when the `Component` is ready.
         */
        new (player: Player, options?: ComponentOptions, ready?: Component.ReadyCallback): CustomControlSpacer;
    };

    /**
     * The button component for toggling and selecting descriptions
     */
    interface DescriptionsButton extends TextTrackButton {
        /**
         * Handle text track change
         *
         * @param event
         *        The event that caused this function to run
         *
         * @listens TextTrackList#change
         */
        handleTracksChange(event: EventTarget.Event): void;

        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Allow sub components to stack CSS class names for the wrapper element
         *
         * @return The constructed wrapper DOM `className`
         */
        buildWrapperCSSClass(): string;
    }

    const DescriptionsButton: {
        prototype: DescriptionsButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param [ready]
         *        The function to call when this component is ready.
         */
        new (player: Player, options?: TrackButtonOptions, ready?: Component.ReadyCallback): DescriptionsButton;
    };

    /**
     * Displays the duration
     */
    interface DurationDisplay extends TimeDisplay {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Update duration time display.
         *
         * @param [event]
         *        The `durationchange`, `timeupdate`, or `loadedmetadata` event that caused
         *        this function to be called.
         *
         * @listens Player#durationchange
         * @listens Player#timeupdate
         * @listens Player#loadedmetadata
         */
        updateContent(event: EventTarget.Event): void;
    }

    const DurationDisplay: {
        prototype: DurationDisplay;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options: ComponentOptions): DurationDisplay;
    };

    /**
     * A display that indicates an error has occurred. This means that the video
     * is unplayable.
     */
    interface ErrorDisplay extends ModalDialog {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         *
         * @deprecated Since version 5.
         */
        buildCSSClass(): string;

        /**
         * Gets the localized error message based on the `Player`s error.
         *
         * @return The `Player`s error message localized or an empty string.
         */
        content(): string;
    }

    const ErrorDisplay: {
        prototype: ErrorDisplay;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options?: ModalDialogOptions): ErrorDisplay;
    };

    interface Dom {
        /**
         * Finds a single DOM element matching `selector` within the optional
         * `context` of another DOM element (defaulting to `document`).
         *
         * @param selector
         *        A valid CSS selector, which will be passed to `querySelector`.
         *
         * @param [context=document]
         *        A DOM element within which to query. Can also be a selector
         *        string in which case the first matching element will be used
         *        as context. If missing (or no element matches selector), falls
         *        back to `document`.
         *
         * @return The element that was found or null.
         */
        $(selector: string, context?: string | Element): Element;

        /**
         * Finds a all DOM elements matching `selector` within the optional
         * `context` of another DOM element (defaulting to `document`).
         *
         * @param selector
         *           A valid CSS selector, which will be passed to `querySelectorAll`.
         *
         * @param [context=document]
         *           A DOM element within which to query. Can also be a selector
         *           string in which case the first matching element will be used
         *           as context. If missing (or no element matches selector), falls
         *           back to `document`.
         *
         * @return A element list of elements that were found. Will be empty if none were found.
         *
         */
        $$(selector: string, context?: string | Element): NodeList;

        /**
         * Add a CSS class name to an element
         *
         * @param element
         *        Element to add class name to.
         *
         * @param classToAdd
         *        Class name to add.
         *
         * @return The dom element with the added class name.
         */
        addClass(element: Element, classToAdd: string): Element;

        /**
         * Normalizes and appends content to an element.
         *
         * @param el
         *        Element to append normalized content to.
         *
         *
         * @param content
         *        See the `content` argument of {@link dom:normalizeContent}
         *
         * @return The element with appended normalized content.
         */
        appendContent(el: Element, content: Content | Content[]): Element;

        /**
         * Attempt to block the ability to select text while dragging controls
         */
        blockTextSelection(): void;

        /**
         * Creates an element and applies properties.
         *
         * @param [tagName='div']
         *         Name of tag to be created.
         *
         * @param [properties={}]
         *         Element properties to be applied.
         *
         * @param [attributes={}]
         *         Element attributes to be applied.
         *
         * @param [content]
         *         Contents for the element (see: {@link dom:normalizeContent})
         *
         * @return The element that was created.
         */
        createEl(tagName: 'canvas', properties?: any, attributes?: any, content?: any): HTMLCanvasElement;

        createEl(tagName: 'form', properties?: any, attributes?: any, content?: any): HTMLFormElement;

        createEl(tagName: 'img', properties?: any, attributes?: any, content?: any): HTMLImageElement;

        createEl(tagName: 'input', properties?: any, attributes?: any, content?: any): HTMLInputElement;

        createEl(tagName: 'option', properties?: any, attributes?: any, content?: any): HTMLOptionElement;

        createEl(tagName: 'select', properties?: any, attributes?: any, content?: any): HTMLSelectElement;

        createEl(tagName: 'textarea', properties?: any, attributes?: any, content?: any): HTMLTextAreaElement;

        createEl(tagName?: string, properties?: any, attributes?: any, content?: any): Element;

        /**
         * Empties the contents of an element.
         *
         * @param el
         *        The element to empty children from
         *
         * @return The element with no children
         */
        emptyEl(el: Element): Element;

        /**
         * Offset Left.
         * getBoundingClientRect technique from
         * John Resig
         *
         * @see http://ejohn.org/blog/getboundingclientrect-is-awesome/
         *
         * @param el
         *        Element from which to get offset
         *
         * @return The position of the element that was passed in.
         */
        findPosition(el: Element): Dom.Position;

        /**
         * Get the value of an element's attribute
         *
         * @param el
         *        A DOM element
         *
         * @param attribute
         *        Attribute to get the value of
         *
         * @return value of the attribute
         */
        getAttribute(el: Element, attribute: string): string;

        /**
         * Get an element's attribute values, as defined on the HTML tag
         * Attributes are not the same as properties. They're defined on the tag
         * or with setAttribute (which shouldn't be used with HTML)
         * This will return true or false for boolean attributes.
         *
         * @param tag
         *        Element from which to get tag attributes.
         *
         * @return All attributes of the element.
         */
        getAttributes(tag: Element): any;

        /**
         * Identical to the native `getBoundingClientRect` function, but ensures that
         * the method is supported at all (it is in all browsers we claim to support)
         * and that the element is in the DOM before continuing.
         *
         * This wrapper function also shims properties which are not provided by some
         * older browsers (namely, IE8).
         *
         * Additionally, some browsers do not support adding properties to a
         * `ClientRect`/`DOMRect` object; so, we shallow-copy it with the standard
         * properties (except `x` and `y` which are not widely supported). This helps
         * avoid implementations where keys are non-enumerable.
         *
         * @param el
         *         Element whose `ClientRect` we want to calculate.
         *
         * @return Always returns a plain
         */
        getBoundingClientRect(el: Element): ClientRect;

        /**
         * Get pointer position in element
         * Returns an object with x and y coordinates.
         * The base on the coordinates are the bottom left of the element.
         *
         * @param el
         *        Element on which to get the pointer position on
         *
         * @param event
         *        Event object
         *
         * @return A Coordinates object corresponding to the mouse position.
         *
         */
        getPointerPosition(el: Element, event: Event): Dom.Coordinates;

        /**
         * Check if an element has a CSS class
         *
         * @param element
         *        Element to check
         *
         * @param classToCheck
         *        Class name to check for
         *
         * @return - True if the element had the class
         *         - False otherwise.
         *
         * @throws {Error}
         *         Throws an error if `classToCheck` has white space.
         */
        hasClass(element: Element, classToCheck: string): boolean;

        /**
         * Normalizes and inserts content into an element; this is identical to
         * `appendContent()`, except it empties the element first.
         *
         * @param el
         *        Element to insert normalized content into.
         *
         * @param content
         *        See the `content` argument of {@link dom:normalizeContent}
         *
         * @return The element with inserted normalized content.
         *
         */
        insertContent(el: Element, content: string | Element | (() => any)): Element;

        /**
         * Determines, via duck typing, whether or not a value is a DOM element.
         *
         * @param value
         *        The thing to check
         *
         * @return - True if it is a DOM element
         *         - False otherwise
         */
        isEl(value: any): boolean;

        /**
         * Determines if the current DOM is embedded in an iframe.
         *
         * @return
         */
        isInFrame(): boolean;

        /**
         * Whether the current DOM interface appears to be real.
         *
         * @return
         */
        isReal(): boolean;

        /**
         * Check if event was a single left click
         *
         * @param event
         *        Event object
         *
         * @return - True if a left click
         *         - False if not a left click
         */
        isSingleLeftClick(event: EventTarget.Event): boolean;

        /**
         * Determines, via duck typing, whether or not a value is a text node.
         *
         * @param value
         *        Check if this value is a text node.
         *
         * @return - True if it is a text node
         *         - False otherwise
         */
        isTextNode(value: any): boolean;

        /**
         * Normalizes content for eventual insertion into the DOM.
         *
         * This allows a wide range of content definition methods, but protects
         * from falling into the trap of simply writing to `innerHTML`, which is
         * an XSS concern.
         *
         * The content for an element can be passed in multiple types and
         * combinations, whose behavior is as follows:
         *
         * @param content
         *        - String: Normalized into a text node.
         *        - Element/TextNode: Passed through.
         *        - Array: A one-dimensional array of strings, elements, nodes, or functions
         *          (which return single strings, elements, or nodes).
         *        - Function: If the sole argument, is expected to produce a string, element,
         *          node, or array as defined above.
         *
         * @return All of the content that was passed in normalized.
         */
        normalizeContent(content: Content | Content[]): Content[];

        /**
         * Insert an element as the first child node of another
         *
         * @param child
         *        Element to insert
         *
         * @param parent
         *        Element to insert child into
         */
        prependTo(child: Element, parent: Element): void;

        /**
         * Remove an element's attribute
         *
         * @param el
         *        A DOM element
         *
         * @param attribute
         *        Attribute to remove
         */
        removeAttribute(el: Element, attribute: string): void;

        /**
         * Remove a CSS class name from an element
         *
         * @param element
         *        Element to remove a class name from.
         *
         * @param classToRemove
         *        Class name to remove
         *
         * @return The dom element with class name removed.
         */
        removeClass(element: Element, classToRemove: string): Element;

        /**
         * Set the value of an element's attribute
         *
         * @param el
         *        A DOM element
         *
         * @param attribute
         *        Attribute to set
         *
         * @param value
         *        Value to set the attribute to
         */
        setAttribute(el: Element, attribute: string, value: string): void;

        /**
         * Apply attributes to an HTML element.
         *
         * @param el
         *        Element to add attributes to.
         *
         * @param [attributes]
         *        Attributes to be applied.
         */
        setAttributes(el: Element, attributes: any): void;

        /**
         * Injects text into an element, replacing any existing contents entirely.
         *
         * @param el
         *        The element to add text content into
         *
         * @param text
         *        The text content to add.
         *
         * @return The element with added text content.
         */
        textContent(el: Element, text: string): Element;

        /**
         * Adds or removes a CSS class name on an element depending on an optional
         * condition or the presence/absence of the class name.
         *
         * @param element
         *        The element to toggle a class name on.
         *
         * @param classToToggle
         *        The class that should be toggled
         *
         * @param [predicate]
         *        See the return value for {@link Dom~PredicateCallback}
         *
         * @return The element with a class that has been toggled.
         */
        toggleClass(element: Element, classToToggle: string, predicate: Dom.Predicate): Element;

        /**
         * Turn off text selection blocking
         */
        unblockTextSelection(): void;
    }

    namespace Dom {
        /**
         * x and y coordinates for a dom element or mouse pointer
         */
        interface Coordinates {
            /**
             * x coordinate in pixels
             */
            x: number;
            /**
             * y coordinate in pixels
             */
            y: number;
        }

        /**
         * The callback definition for toggleElClass.
         *
         * @param element
         *        The DOM element of the Component.
         *
         * @param classToToggle
         *        The `className` that wants to be toggled
         *
         * @return - If true the `classToToggle` will get added to `element`.
         *         - If false the `classToToggle` will get removed from `element`.
         *         - If undefined this callback will be ignored
         */
        type Predicate = (element: Element, classToToggle: string) => boolean;

        /**
         * The postion of a DOM element on the page.
         */
        interface Position {
            /**
             * Pixels on top
             */
            top: number;
            /**
             * Pixels to the left
             */
            left: number;
        }
    }

    /**
     * Contains methods that provide event capabilities to an object which is passed
     * to {@link module:evented|evented}.
     */
    interface EventedMixin {
        /**
         * Removes listener(s) from event(s) on an evented object.
         *
         * @param [targetOrType]
         *         If this is a string or array, it represents the event type(s).
         *
         *         Another evented object can be passed here instead, in which case
         *         ALL 3 arguments are _required_.
         *
         * @param [typeOrListener]
         *         If the first argument was a string or array, this may be the
         *         listener function. Otherwise, this is a string or array of event
         *         type(s).
         *
         * @param [listener]
         *         If the first argument was another evented object, this will be
         *         the listener function; otherwise, _all_ listeners bound to the
         *         event type(s) will be removed.
         */
        off(target?: Component | Element, type?: string | string[], listener?: (...args: any[]) => void): void;
        off(type?: string | string[], listener?: (...args: any[]) => void): void;

        /**
         * Add a listener to an event (or events) on this object or another evented
         * object.
         *
         * @param targetOrType
         *         If this is a string or array, it represents the event type(s)
         *         that will trigger the listener.
         *
         *         Another evented object can be passed here instead, which will
         *         cause the listener to listen for events on _that_ object.
         *
         *         In either case, the listener's `this` value will be bound to
         *         this object.
         *
         * @param typeOrListener
         *         If the first argument was a string or array, this should be the
         *         listener function. Otherwise, this is a string or array of event
         *         type(s).
         *
         * @param [listener]
         *         If the first argument was another evented object, this will be
         *         the listener function.
         */
        on(target?: Component | Element, type?: string | string[], listener?: (...args: any[]) => void): void;
        on(type?: string | string[], listener?: (...args: any[]) => void): void;

        /**
         * Add a listener to an event (or events) on this object or another evented
         * object. The listener will only be called once and then removed.
         *
         * @param targetOrType
         *         If this is a string or array, it represents the event type(s)
         *         that will trigger the listener.
         *
         *         Another evented object can be passed here instead, which will
         *         cause the listener to listen for events on _that_ object.
         *
         *         In either case, the listener's `this` value will be bound to
         *         this object.
         *
         * @param typeOrListener
         *         If the first argument was a string or array, this should be the
         *         listener function. Otherwise, this is a string or array of event
         *         type(s).
         *
         * @param [listener]
         *         If the first argument was another evented object, this will be
         *         the listener function.
         */
        one(target?: Component | Element, type?: string | string[], listener?: (...args: any[]) => void): void;
        one(type?: string | string[], listener?: (...args: any[]) => void): void;

        /**
         * Fire an event on this evented object, causing its listeners to be called.
         *
         * @param event
         *          An event type or an object with a type property.
         *
         * @param [hash]
         *          An additional object to pass along to listeners.
         *
         * @return Whether or not the default behavior was prevented.
         */
        trigger(event: any, hash?: any): boolean;
    }

    /**
     * `EventTarget` is a class that can have the same API as the DOM `EventTarget`. It
     * adds shorthand functions that wrap around lengthy functions. For example:
     * the `on` function is a wrapper around `addEventListener`.
     *
     * @see [EventTarget Spec]{@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget}
     */
    interface EventTarget {
        /**
         * An alias of {@link EventTarget#on}. Allows `EventTarget` to mimic
         * the standard DOM API.
         *
         * @param type
         *        An event name or an array of event names.
         *
         * @param fn
         *        The function to call with `EventTarget`s
         *
         * @see {@link EventTarget#on}
         */
        addEventListener(type: string | string[], fn: EventTarget.EventListener): void;

        /**
         * An alias of {@link EventTarget#trigger}. Allows `EventTarget` to mimic
         * the standard DOM API.
         *
         * @param event
         *        The name of the event, an `Event`, or an object with a key of type set to
         *        an event name.
         *
         * @see {@link EventTarget#trigger}
         */
        dispatchEvent(event: string | Event): void;

        /**
         * Removes an `event listener` for a specific event from an instance of `EventTarget`.
         * This makes it so that the `event listener` will no longer get called when the
         * named event happens.
         *
         * @param type
         *        An event name or an array of event names.
         *
         * @param fn
         *        The function to remove.
         */
        off(type: string | string[], fn: EventTarget.EventListener): void;

        /**
         * Adds an `event listener` to an instance of an `EventTarget`. An `event listener` is a
         * function that will get called when an event with a certain name gets triggered.
         *
         * @param type
         *        An event name or an array of event names.
         *
         * @param fn
         *        The function to call with `EventTarget`s
         */
        on(type: string | string[], fn: EventTarget.EventListener): void;

        /**
         * This function will add an `event listener` that gets triggered only once. After the
         * first trigger it will get removed. This is like adding an `event listener`
         * with {@link EventTarget#on} that calls {@link EventTarget#off} on itself.
         *
         * @param type
         *        An event name or an array of event names.
         *
         * @param fn
         *        The function to be called once for each event name.
         */
        one(type: string | string[], fn: EventTarget.EventListener): void;

        /**
         * An alias of {@link EventTarget#off}. Allows `EventTarget` to mimic
         * the standard DOM API.
         *
         * @param type
         *        An event name or an array of event names.
         *
         * @param fn
         *        The function to remove.
         *
         * @see {@link EventTarget#off}
         */
        removeEventListener(type: string | string[], fn: EventTarget.EventListener): void;

        /**
         * This function causes an event to happen. This will then cause any `event listeners`
         * that are waiting for that event, to get called. If there are no `event listeners`
         * for an event then nothing will happen.
         *
         * If the name of the `Event` that is being triggered is in `EventTarget.allowedEvents_`.
         * Trigger will also call the `on` + `uppercaseEventName` function.
         *
         * Example:
         * 'click' is in `EventTarget.allowedEvents_`, so, trigger will attempt to call
         * `onClick` if it exists.
         *
         * @param event
         *        The name of the event, an `Event`, or an object with a key of type set to
         *        an event name.
         */
        trigger(event: string | EventTarget.Event): void;
    }

    const EventTarget: {
        prototype: EventTarget;

        new (): EventTarget;
    };

    namespace EventTarget {
        /**
         * A Custom DOM event.
         * @see [Properties]{@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent}
         */
        interface Event extends CustomEvent {
            [key: string]: any;
        }

        /**
         * All event listeners should follow the following format.
         *
         * @param event
         *        the event that triggered this function
         *
         * @param [hash]
         *        hash of data sent during the event
         */
        type EventListener = (e: Event, data?: any) => void;
    }

    /**
     * Toggle fullscreen video
     */
    interface FullscreenToggle extends Button {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Handles fullscreenchange on the player and change control text accordingly.
         *
         * @param [event]
         *        The {@link Player#fullscreenchange} event that caused this function to be
         *        called.
         *
         * @listens Player#fullscreenchange
         */
        handleFullscreenChange(event: EventTarget.Event): void;

        /**
         * This gets called when an `FullscreenToggle` is "clicked". See
         * {@link ClickableComponent} for more detailed information on what a click can be.
         *
         * @param [event]
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;
    }

    const FullscreenToggle: {
        prototype: FullscreenToggle;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: ComponentOptions): FullscreenToggle;
    };

    /**
     * The current list of {@link HtmlTrackElement}s.
     */
    interface HTMLTrackElementList {
        [index: number]: HTMLTrackElement;

        /**
         * The current number of `Track`s in the this Trackist.
         */
        length: number;
    }

    const HTMLTrackElementList: {
        prototype: HTMLTrackElementList;

        /**
         * Create an instance of this class.
         *
         * @param [tracks=[]]
         *        A list of `HtmlTrackElement` to instantiate the list with.
         */
        new (tracks?: HTMLTrackElement[]): HTMLTrackElementList;
    };

    interface KeyboardEvent extends EventTarget.Event {
        readonly which: number;
    }

    interface LanguageTranslations {
        [language: string]: string;
    }

    /**
     * LiveTracker provides several useful helper functions and events for dealing with live playback, all of which are used and tested internally.
     * Internally this component keeps track of the live current time through a function that runs on a 30ms interval.
     */
    interface LiveTracker extends Component {
        /**
         * These functions can be called to arbitrarily start/stop tracking live playback.
         * Normally these are handled by automatically when the player triggers a durationchange with a duration of Infinity.
         * You won't want to call them unless you are doing something fairly specific.
         */
        startTracking(): void;

        /**
         * These functions can be called to arbitrarily start/stop tracking live playback.
         * Normally these are handled by automatically when the player triggers a durationchange with a duration of Infinity.
         * You won't want to call them unless you are doing something fairly specific.
         */
        stopTracking(): void;

        /**
         * seekableEnd gets the time in seconds of the furthest seekable end.
         * For instance if we have an array of seekable TimeRanges where the first element in the array is the start() second and the last is the end() second:
         */
        seekableEnd(): number;

        /**
         * seekableStart gets the time in seconds of the earliest seekable start.
         * For instance if we have an array of seekable TimeRanges where the first element in the array is the start() second and the last is the end() second:
         */
        seekableStart(): number;

        /**
         * This function gets the amount of time between the seekableStart() and the liveCurrentTime().
         * We use this internally to update the total length of our bars, such as the progress/seek bar.
         */
        liveWindow(): number;

        /**
         * Determines if the currentTime of the player is close enough to live to be considered live.
         * We make sure it's close enough, rather than absolutely live, because there are too many factors to determine when live actually is.
         * We consider the currentTime live when it is within two seekable increments and 70ms (two ticks of the live tracking interval).
         * The seekable increment is a number that is determined by the amount that seekable end changes as playback continues.
         * See the seekableendchange event and the pastSeekEnd() function for more info.
         */
        atLiveEdge(): boolean;

        /**
         * Determines if the currentTime of the player is close enough to live to be considered live.
         * We make sure it's close enough, rather than absolutely live, because there are too many factors to determine when live actually is.
         * We consider the currentTime live when it is within two seekable increments and 70ms (two ticks of the live tracking interval).
         * The seekable increment is a number that is determined by the amount that seekable end changes as playback continues.
         * See the seekableendchange event and the pastSeekEnd() function for more info.
         */
        behindLiveEdge(): boolean;

        /**
         * live current time is our best approximation of what the live current time is.
         * Internally it uses the pastSeekEnd() function and adds that to the seekableEnd() function.
         * It is possible for this function to return Infinity.
         */
        liveCurrentTime(): number;

        /**
         * This is the main value that we use to track if the player is live or not.
         * Every 30ms we add 0.03 seconds to this value and every seekableendchange it is reset to 0 and 0.03 is added to it right away.
         */
        pastSeekEnd(): number;

        /**
         * isTracking and isLive do the same thing they tell you if the LiveTracker is currently tracking live playback
         * and since we assume that live tracking will only be done during live they should be the same.
         */
        isLive(): boolean;

        /**
         * isTracking and isLive do the same thing they tell you if the LiveTracker is currently tracking live playback
         * and since we assume that live tracking will only be done during live they should be the same.
         */
        isTracking(): boolean;

        /**
         * This function sets the players currentTime to the result of the liveCurrentTime() function.
         * It will also start playback if playback is currently paused.
         * It starts playback because it is easy to fall behind the live edge if the player is not playing.
         */
        seekToLiveEdge(): void;
    }

    /**
     * @file log.js
     */
    interface Log {
        /**
         * Logs plain debug messages. Similar to `console.log`.
         * @param args
         *           One or more messages or objects that should be logged.
         */
        (...args: any[]): void;

        /**
         * Make a new module or plugin and log messages with a label.
         * It takes a name and gives you back a log object like videojs.log
         *
         * @param label
         */
        createLogger: (label: string) => Log;

        /**
         * Logs debug messages. Similar to `console.debug`, but may also act as a comparable
         * log if `console.debug` is not available
         *
         * @param args
         *        One or more messages or objects that should be logged as debug.
         */
        debug(...args: any[]): void;

        /**
         * Logs error messages. Similar to `console.error`.
         *
         * @param args
         *        One or more messages or objects that should be logged as an error
         */
        error(...args: any[]): void;

        history: {
            /**
             * Returns an array containing everything that has been logged to the history.
             *
             * This array is a shallow clone of the internal history record. However, its
             * contents are _not_ cloned; so, mutating objects inside this array will
             * mutate them in history.
             *
             * @return
             */
            (): any[];

            /**
             * Clears the internal history tracking, but does not prevent further history
             * tracking.
             */
            clear(): void;

            /**
             * Disable history tracking if it is currently enabled.
             */
            disable(): void;

            /**
             * Enable history tracking if it is currently disabled.
             */
            enable(): void;
        };

        /**
         * Get or set the current logging level. If a string matching a key from
         * {@link log.levels} is provided, acts as a setter. Regardless of argument,
         * returns the current logging level.
         *
         * @param [lvl]
         *         Pass to set a new logging level.
         *
         * @return The current logging level.
         */
        level(lvl?: string): string;

        /**
         * Enumeration of available logging levels, where the keys are the level names
         * and the values are `|`-separated strings containing logging methods allowed
         * in that logging level. These strings are used to create a regular expression
         * matching the function name being called.
         *
         * Levels provided by video.js are:
         *
         * - `off`: Matches no calls. Any value that can be cast to `false` will have
         *   this effect. The most restrictive.
         * - `all`: Matches only Video.js-provided functions (`debug`, `log`,
         *   `log.warn`, and `log.error`).
         * - `debug`: Matches `log.debug`, `log`, `log.warn`, and `log.error` calls.
         * - `info` (default): Matches `log`, `log.warn`, and `log.error` calls.
         * - `warn`: Matches `log.warn` and `log.error` calls.
         * - `error`: Matches only `log.error` calls.
         *
         */
        levels: {
            all: string;
            off: string;
            debug: string;
            info: string;
            warn: string;
            error: string;
            DEFAULT: string;
        };

        /**
         * Logs warning messages. Similar to `console.warn`.
         *
         * @param args
         *        One or more messages or objects that should be logged as a warning.
         */
        warn(...args: any[]): void;
    }

    /**
     * A Custom `MediaError` class which mimics the standard HTML5 `MediaError` class.
     *
     * @see [MediaError Spec]{@link https://dev.w3.org/html5/spec-author-view/video.html#mediaerror}
     * @see [Encrypted MediaError Spec]{@link https://www.w3.org/TR/2013/WD-encrypted-media-20130510/#error-codes}
     *
     */
    interface MediaError {
        /**
         * The error code that refers two one of the defined `MediaError` types
         *
         */
        code: number;

        /**
         * W3C error code for any custom error.
         * @default 0
         */
        MEDIA_ERR_CUSTOM: 0;

        /**
         * W3C error code for media error aborted.
         * @default 1
         */
        MEDIA_ERR_ABORTED: 1;

        /**
         * W3C error code for any network error.
         * @default 2
         */
        MEDIA_ERR_NETWORK: 2;

        /**
         * W3C error code for any decoding error.
         * @default 3
         */
        MEDIA_ERR_DECODE: 3;

        /**
         * W3C error code for any time that a source is not supported.
         * @default 4
         */
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4;

        /**
         * W3C error code for any time that a source is encrypted.
         * @default 5
         */
        MEDIA_ERR_ENCRYPTED: 5;

        /**
         * An optional message that to show with the error. Message is not part of the HTML5
         * video spec but allows for more informative custom errors.
         *
         */
        message: string;

        /**
         * An optional status code that can be set by plugins to allow even more detail about
         * the error. For example a plugin might provide a specific HTTP status code and an
         * error message for that code. Then when the plugin gets that error this class will
         * know how to display an error message for it. This allows a custom message to show
         * up on the `Player` error overlay.
         *
         */
        status: any[];
    }

    const MediaError: {
        prototype: MediaError;

        /**
         * Create an instance of this class.
         *
         * @param value
         *        This can be of multiple types:
         *        - number: should be a standard error code
         *        - string: an error message (the code will be 0)
         *        - Object: arbitrary properties
         *        - `MediaError` (native): used to populate a video.js `MediaError` object
         *        - `MediaError` (video.js): will return itself if it's already a
         *          video.js `MediaError` object.
         */
        new (value: number | string | { [key: string]: any } | MediaError): MediaError;

        /**
         * The default `MediaError` messages based on the {@link MediaError.errorTypes}.
         */
        defaultMessages: string[];

        /**
         * Errors indexed by the W3C standard. The order **CANNOT CHANGE**! See the
         * specification listed under {@link MediaError} for more information.
         *
         * 0 - MEDIA_ERR_CUSTOM
         * 1 - MEDIA_ERR_CUSTOM
         * 2 - MEDIA_ERR_ABORTED
         * 3 - MEDIA_ERR_NETWORK
         * 4 - MEDIA_ERR_SRC_NOT_SUPPORTED
         * 5 - MEDIA_ERR_ENCRYPTED
         */
        readonly errorTypes: string[];

        /**
         * W3C error code for any custom error.
         * @default 0
         */
        MEDIA_ERR_CUSTOM: 0;

        /**
         * W3C error code for media error aborted.
         * @default 1
         */
        MEDIA_ERR_ABORTED: 1;

        /**
         * W3C error code for any network error.
         * @default 2
         */
        MEDIA_ERR_NETWORK: 2;

        /**
         * W3C error code for any decoding error.
         * @default 3
         */
        MEDIA_ERR_DECODE: 3;

        /**
         * W3C error code for any time that a source is not supported.
         * @default 4
         */
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4;

        /**
         * W3C error code for any time that a source is encrypted.
         * @default 5
         */
        MEDIA_ERR_ENCRYPTED: 5;
    };

    /**
     * The Menu component is used to build popup menus, including subtitle and
     * captions selection menus.
     */
    interface Menu extends Component {
        options_: MenuOptions;

        menuButton_: MenuButton;

        /**
         * Add a {@link MenuItem} to the menu.
         *
         * @param component
         *        The name or instance of the `MenuItem` to add.
         *
         */
        addItem(component: string | MenuItem): void;

        /**
         * Create the `Menu`s DOM element.
         *
         * @return the element that was created
         */
        createEl(): HTMLDivElement;

        dispose(): void;

        /**
         * Set focus on a {@link MenuItem} in the `Menu`.
         *
         * @param [item=0]
         *        Index of child item set focus on.
         */
        focus(item?: any): void;

        /**
         * Handle a `keydown` event on this menu. This listener is added in the constructor.
         *
         * @param event
         *        A `keydown` event that happened on the menu.
         *
         * @listens keydown
         */
        handleKeyPress(event: EventTarget.Event): void;

        /**
         * Move to previous (higher) menu item for keyboard users.
         */
        stepBack(): void;

        /**
         * Move to next (lower) menu item for keyboard users.
         */
        stepForward(): void;
    }

    const Menu: {
        prototype: Menu;

        /**
         * Create an instance of this class.
         *
         * @param player
         *        the player that this component should attach to
         *
         * @param [options]
         *        Object of option names and values
         *
         */
        new (player: Player, options?: MenuOptions): Menu;
    };

    interface MenuOptions extends ComponentOptions {
        menuButton: MenuButton;
    }

    /**
     * A `MenuButton` class for any popup {@link Menu}.
     */
    interface MenuButton extends Component {
        options_: MenuButtonOptions;

        menu: Menu;

        menuButton_: Button;

        /**
         * Remove the focus from the actual button, not this element
         */
        blur(): void;

        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Allow sub components to stack CSS class names for the wrapper element
         *
         * @return The constructed wrapper DOM `className`
         */
        buildWrapperCSSClass(): string;

        /**
         * Get or set the localized control text that will be used for accessibility.
         *
         * > NOTE: This will come from the internal `menuButton_` element.
         *
         * @param [text]
         *        Control text for element.
         *
         * @param [el=this.menuButton_.el()]
         *        Element to set the title on.
         *
         * @return - The control text when getting
         */
        controlText(text?: string, el?: Element): string;

        /**
         * Create the `MenuButtons`s DOM element.
         *
         * @return The element that gets created.
         */
        createEl(): Element;

        /**
         * Create the list of menu items. Specific to each subclass.
         */
        createItems(): MenuItem[];

        /**
         * Create the menu and add all items to it.
         *
         * @return The constructed menu
         */
        createMenu(): Menu;

        /**
         * Disable the `MenuButton`. Don't allow it to be clicked.
         */
        disable(): void;

        /**
         * Enable the `MenuButton`. Allow it to be clicked.
         */
        enable(): void;

        /**
         * Set the focus to the actual button, not to this element
         */
        focus(): void;

        /**
         * Called when a `MenuButton` loses focus. Turns off the listener for
         * `keydown` events. Which Stops `this.handleKeyPress` from getting called.
         *
         * @param event
         *        The `blur` event that caused this function to be called.
         *
         * @listens blur
         */
        handleBlur(event: EventTarget.Event): void;

        /**
         * Handle a click on a `MenuButton`.
         * See {@link ClickableComponent#handleClick} for instances where this is called.
         *
         * @param event
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;

        /**
         * This gets called when a `MenuButton` gains focus via a `focus` event.
         * Turns on listening for `keydown` events. When they happen it
         * calls `this.handleKeyPress`.
         *
         * @param event
         *        The `focus` event that caused this function to be called.
         *
         * @listens focus
         */
        handleFocus(event: EventTarget.Event): void;

        /**
         * Handle tab, escape, down arrow, and up arrow keys for `MenuButton`. See
         * {@link ClickableComponent#handleKeyPress} for instances where this is called.
         *
         * @param event
         *        The `keydown` event that caused this function to be called.
         *
         * @listens keydown
         */
        handleKeyPress(event: EventTarget.Event): void;

        /**
         * Handle a `keydown` event on a sub-menu. The listener for this is added in
         * the constructor.
         *
         * @param event
         *        Key press event
         *
         * @listens keydown
         */
        handleSubmenuKeyPress(event: EventTarget.Event): void;

        /**
         * Put the current `MenuButton` into a pressed state.
         */
        pressButton(): void;

        /**
         * Take the current `MenuButton` out of a pressed state.
         */
        unpressButton(): void;

        /**
         * Update the menu based on the current state of its items.
         */
        update(): void;
    }

    const MenuButton: {
        prototype: MenuButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options={}]
         *        The key/value store of player options.
         */
        new (player: Player, options?: MenuButtonOptions): MenuButton;
    };

    interface MenuButtonOptions extends ComponentOptions {
        title?: string;
        iniChildren?: boolean;
    }

    /**
     * The component for a menu item. `<li>`
     */
    interface MenuItem extends ClickableComponent {
        options_: MenuItemOptions;

        /**
         * Create the `MenuItem's DOM element
         *
         * @param [type=li]
         *        Element's node type, not actually used, always set to `li`.
         *
         * @param [props={}]
         *        An object of properties that should be set on the element
         *
         * @param [attrs={}]
         *        An object of attributes that should be set on the element
         *
         * @return The element that gets created.
         */
        createEl(type: string, props?: any, attrs?: any): HTMLLIElement;

        /**
         * Any click on a `MenuItem` puts it into the selected state.
         * See {@link ClickableComponent#handleClick} for instances where this is called.
         *
         * @param event
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;

        /**
         * Set the state for this menu item as selected or not.
         *
         * @param selected
         *        if the menu item is selected or not
         */
        selected(selected: boolean): void;
    }

    const MenuItem: {
        prototype: MenuItem;

        /**
         * Creates an instance of the this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options={}]
         *        The key/value store of player options.
         *
         */
        new (player: Player, options?: MenuItemOptions): MenuItem;
    };

    interface MenuItemOptions extends ComponentOptions {
        label?: string;
        multiSelectable?: boolean;
        selectable?: boolean;
        selected?: boolean;
    }

    interface Middleware {
        /**
         *
         * @param src
         * @param next
         */
        setSource: (src: Tech.SourceObject, next: (err: any, src: Tech.SourceObject) => void) => void;
    }

    /**
     * The `ModalDialog` displays over the video and its controls, which blocks
     * interaction with the player until it is closed.
     *
     * Modal dialogs include a "Close" button and will close when that button
     * is activated - or when ESC is pressed anywhere.
     */
    interface ModalDialog extends Component {
        options_: ModalDialogOptions;

        closeable_: boolean;

        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Closes the modal, does nothing if the `ModalDialog` is
         * not open.
         *
         * @fires ModalDialog#beforemodalclose
         * @fires ModalDialog#modalclose
         */
        close(): void;

        /**
         * Check to see if the `ModalDialog` is closeable via the UI.
         *
         * @param [value]
         *         If given as a boolean, it will set the `closeable` option.
         *
         * @return Returns the final value of the closable option.
         */
        closeable(value: boolean): boolean;

        /**
         * Gets or sets the modal content, which gets normalized before being
         * rendered into the DOM.
         *
         * This does not update the DOM or fill the modal, but it is called during
         * that process.
         *
         * @param [value]
         *         If defined, sets the internal content value to be used on the
         *         next call(s) to `fill`. This value is normalized before being
         *         inserted. To "clear" the internal content value, pass `null`.
         *
         * @return The current content of the modal dialog
         */
        content(value?: Content): any;

        /**
         * Create the `ModalDialog`'s DOM element
         *
         * @return The DOM element that gets created.
         */
        createEl(): HTMLDivElement;

        /**
         * Returns the description string for this modal. Primarily used for
         * accessibility.
         *
         * @return The localized or raw description of this modal.
         */
        description(): string;

        dispose(): void;

        /**
         * Empties the content element. This happens anytime the modal is filled.
         *
         * @fires ModalDialog#beforemodalempty
         * @fires ModalDialog#modalempty
         */
        empty(): void;

        /**
         * Fill the modal's content element with the modal's "content" option.
         * The content element will be emptied before this change takes place.
         */
        fill(): void;

        /**
         * Fill the modal's content element with arbitrary content.
         * The content element will be emptied before this change takes place.
         *
         * @fires ModalDialog#beforemodalfill
         * @fires ModalDialog#modalfill
         *
         * @param [content]
         *        The same rules apply to this as apply to the `content` option.
         */
        fillWith(content?: Content): void;

        /**
         * Keydown handler. Attached when modal is focused.
         *
         * @listens keydown
         */
        handleKeyDown(): void;

        /**
         * Handles `keydown` events on the document, looking for ESC, which closes
         * the modal.
         *
         * @param e
         *        The keypress that triggered this event.
         *
         * @listens keydown
         */
        handleKeyPress(e: EventTarget.Event): void;

        /**
         * Returns the label string for this modal. Primarily used for accessibility.
         *
         * @return the localized or raw label of this modal.
         */
        label(): string;

        /**
         * Opens the modal.
         *
         * @fires ModalDialog#beforemodalopen
         * @fires ModalDialog#modalopen
         */
        open(): void;

        /**
         * If the `ModalDialog` is currently open or closed.
         *
         * @param [value]
         *         If given, it will open (`true`) or close (`false`) the modal.
         *
         * @return the current open state of the modaldialog
         */
        opened(value?: boolean): boolean;
    }

    const ModalDialog: {
        prototype: ModalDialog;

        /**
         * Create an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: ModalDialogOptions): ModalDialog;
    };

    /**
     * Options for this class
     *
     * @param [content=undefined]
     *        Provide customized content for this modal.
     *
     * @param [description]
     *        A text description for the modal, primarily for accessibility.
     *
     * @param [fillAlways=false]
     *        Normally, modals are automatically filled only the first time
     *        they open. This tells the modal to refresh its content
     *        every time it opens.
     *
     * @param [label]
     *        A text label for the modal, primarily for accessibility.
     *
     * @param [temporary=true]
     *        If `true`, the modal can only be opened once; it will be
     *        disposed as soon as it's closed.
     *
     * @param [uncloseable=false]
     *        If `true`, the user will not be able to close the modal
     *        through the UI in the normal ways. Programmatic closing is
     *        still possible.
     */
    interface ModalDialogOptions extends ComponentOptions {
        content?: any;
        description?: string;
        fillAlways?: boolean;
        label?: string;
        temporary?: boolean;
        uncloseable?: boolean;
    }

    /**
     * The {@link MouseTimeDisplay} component tracks mouse movement over the
     * {@link ProgressControl}. It displays an indicator and a {@link TimeTooltip}
     * indicating the time which is represented by a given point in the
     * {@link ProgressControl}.
     */
    interface MouseTimeDisplay extends Component {
        /**
         * Create the DOM element for this class.
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;

        /**
         * Enqueues updates to its own DOM as well as the DOM of its
         * {@link TimeTooltip} child.
         *
         * @param seekBarRect
         *        The `ClientRect` for the {@link SeekBar} element.
         *
         * @param seekBarPoint
         *        A number from 0 to 1, representing a horizontal reference point
         *        from the left edge of the {@link SeekBar}
         */
        update(seekBarRect: ClientRect, seekBarPoint: number): void;
    }

    const MouseTimeDisplay: {
        prototype: MouseTimeDisplay;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The {@link Player} that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: ComponentOptions): MouseTimeDisplay;
    };

    enum ReadyState {
        HaveNothing = 0,
        HaveMetadata = 1,
        HaveCurrentData = 2,
        HaveFutureData = 3,
        HaveEnoughData = 4,
    }

    enum NetworkState {
        Empty = 0,
        Idle = 1,
        Loading = 2,
        NoSource = 3,
    }

    type Player = VideoJsPlayer;

    const Player: {
        prototype: Player;

        /**
         * An instance of the `Player` class is created when any of the Video.js setup methods
         * are used to initialize a video.
         *
         * After an instance has been created it can be accessed globally in two ways:
         * 1. By calling `videojs('example_video_1');`
         * 2. By using it directly via  `videojs.players.example_video_1;`
         */
        new (player: Player, options?: PlayerOptions): Player;

        /**
         * Gets tag settings
         *
         * @param tag
         *        The player tag
         * @check
         * @return An object containing all of the settings
         *         for a player tag
         */
        getTagSettings(tag: Element): any;
    };

    namespace Player {
        /**
         * An object that describes a single piece of media.
         * Properties that are not part of this type description will be retained; so, this can be viewed as a generic metadata storage mechanism as well.
         */
        interface MediaObject {
            /**
             * Unused, except if this object is passed to the MediaSession API.
             */
            album?: string;

            /**
             * Unused, except if this object is passed to the MediaSession API.
             */
            artist?: string;

            /**
             * Unused, except if this object is passed to the MediaSession API. If not specified, will be populated via the poster, if available.
             */
            artwork?: any[];

            /**
             * URL to an image that will display before playback.
             */
            poster?: string;

            /**
             * A single source object, an array of source objects, or a string referencing a URL to a media source.
             * It is highly recommended that an object or array of objects is used here, so that source selection algorithms can take the type into account.
             */
            src?: string | Tech.SourceObject | Tech.SourceObject[];

            /**
             * Unused, except if this object is passed to the MediaSession API.
             */
            title?: string;

            /**
             *  An array of objects to be used to create text tracks, following the native track element format.
             *  For ease of removal, these will be created as "remote" text tracks and set to automatically clean up on source changes.
             */
            textTracks?: any[];

            /**
             * Properties that are not part of this type description will be retained; so, this can be viewed as a generic metadata storage mechanism as well.
             */
            [key: string]: any;
        }
    }

    type PlayerOptions = VideoJsPlayerOptions;

    /**
     * Parent class for all advanced plugins.
     *
     * @fires   Player#beforepluginsetup
     * @fires   Player#beforepluginsetup:$name
     * @fires   Player#pluginsetup
     * @fires   Player#pluginsetup:$name
     * @listens Player#dispose
     * @throws  {Error}
     *          If attempting to instantiate the base {@link Plugin} class
     *          directly instead of via a sub-class.
     */
    interface Plugin extends EventedMixin {
        player: Player;

        /**
         * Disposes a plugin.
         *
         * Subclasses can override this if they want, but for the sake of safety,
         * it's probably best to subscribe the "dispose" event.
         *
         * @fires Plugin#dispose
         */
        dispose(): void;

        /**
         * Each event triggered by plugins includes a hash of additional data with
         * conventional properties.
         *
         * This returns that object or mutates an existing hash.
         *
         * @param [hash={}]
         *          An object to be used as event an event hash.
         *
         * @return An event hash object with provided properties mixed-in.
         */
        getEventHash(hash?: any): Plugin.PluginEventHash;

        /**
         * Handles "statechanged" events on the plugin. No-op by default, override by
         * subclassing.
         *
         * @param e
         *           An event object provided by a "statechanged" event.
         *
         * @param e.changes
         *           An object describing changes that occurred with the "statechanged"
         *           event.
         */
        handleStateChanged(e: Event): void;

        /**
         * Get the version of the plugin that was set on <pluginName>.VERSION
         */
        version(): string;

        /**
         * Triggers an event on the plugin object and overrides
         * {@link module:evented~EventedMixin.trigger|EventedMixin.trigger}.
         *
         * @param event
         *          An event type or an object with a type property.
         *
         * @param [hash={}]
         *          Additional data hash to merge with a
         *          {@link Plugin~PluginEventHash|PluginEventHash}.
         *
         * @return Whether or not default was prevented.
         */
        trigger(event: any, hash?: any): boolean;
    }

    const Plugin: {
        prototype: Plugin;

        /**
         * The name of the base plugin class as it is registered.
         *
         */
        BASE_PLUGIN_NAME: string;

        /**
         * Creates an instance of this class.
         *
         * Sub-classes should call `super` to ensure plugins are properly initialized.
         *
         * @param player
         *        A Video.js player instance.
         */
        new (player: Player, options?: any): Plugin;

        /**
         * De-register a Video.js plugin.
         *
         * @param name
         *        The name of the plugin to be deregistered.
         */
        deregisterPlugin(name: string): void;

        /**
         * Gets a plugin by name if it exists.
         *
         * @param name
         *           The name of a plugin.
         *
         * @return The plugin (or `undefined`).
         */
        getPlugin(name: string): typeof Plugin;

        /**
         * Gets a plugin's version, if available
         *
         * @param name
         *          The name of a plugin.
         *
         * @return The plugin's version or an empty string.
         */
        getPluginVersion(name: string): string;

        /**
         * Gets an object containing multiple Video.js plugins.
         *
         * @param [names]
         *          If provided, should be an array of plugin names. Defaults to _all_
         *          plugin names.
         *
         * @return An object containing plugin(s) associated with their name(s) or
         *          `undefined` if no matching plugins exist).
         *
         * @check returning type
         */
        getPlugins(names?: string[]): { [name: string]: Plugin };

        /**
         * Determines if a plugin is a basic plugin (i.e. not a sub-class of `Plugin`).
         *
         * @param plugin
         *          If a string, matches the name of a plugin. If a function, will be
         *          tested directly.
         *
         * @return Whether or not a plugin is a basic plugin.
         */
        isBasic(plugin: string | (() => any)): boolean;
        /**
         * Register a Video.js plugin.
         *
         * @param name
         *          The name of the plugin to be registered. Must be a string and
         *          must not match an existing plugin or a method on the `Player`
         *          prototype.
         *
         * @param plugin
         *          A sub-class of `Plugin` or a function for basic plugins.
         *
         * @return For advanced plugins, a factory function for that plugin. For
         *          basic plugins, a wrapper function that initializes the plugin.
         */
        registerPlugin<T, K>(name: string, plugin: (this: Player, ...options: K[]) => T): (...options: K[]) => T;
        registerPlugin<T extends typeof Plugin>(name: string, plugin: T): () => T;
    };

    namespace Plugin {
        interface PluginEventHash {
            /**
             * For basic plugins, the return value of the plugin function. For
             * advanced plugins, the plugin instance on which the event is fired.
             */
            instance: Plugin;
            /**
             * The name of the plugin.
             */
            name: string;
            /**
             * For basic plugins, the plugin function. For advanced plugins, the
             * plugin class/constructor.
             */
            plugin: string;
        }
    }

    interface ProgressControl extends Component {
        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;

        /**
         * Disable all controls on the progress control and its children
         */
        disable(): void;

        /**
         * Enable all controls on the progress control and its children
         */
        enable(): void;

        /**
         * Are controls are currently enabled for this progress control.
         *
         * @return true if controls are enabled, false otherwise
         */
        enabled(): boolean;

        /**
         * Handle `mousedown` or `touchstart` events on the `ProgressControl`.
         *
         * @param event
         *        `mousedown` or `touchstart` event that triggered this function
         *
         * @listens mousedown
         * @listens touchstart
         */
        handleMouseDown(event: EventTarget.Event): void;

        /**
         * When the mouse moves over the `ProgressControl`, the pointer position
         * gets passed down to the `MouseTimeDisplay` component.
         *
         * @param event
         *        The `mousemove` event that caused this function to run.
         *
         * @listen mousemove
         */
        handleMouseMove(event: EventTarget.Event): void;

        /**
         * Handle `mousemove` or `touchmove` events on the `ProgressControl`.
         *
         * @param event
         *        `mousedown` or `touchstart` event that triggered this function
         *
         * @listens mousemove
         * @listens touchmove
         */
        handleMouseSeek(event: EventTarget.Event): void;

        /**
         * Handle `mouseup` or `touchend` events on the `ProgressControl`.
         *
         * @param event
         *        `mouseup` or `touchend` event that triggered this function.
         *
         * @listens touchend
         * @listens mouseup
         */
        handleMouseUp(event: EventTarget.Event): void;
    }

    const ProgressControl: {
        prototype: ProgressControl;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: ProgressControlOptions): ProgressControl;
    };

    interface ProgressControlOptions extends ComponentOptions {
        seekBar?: boolean;
    }

    interface Representation {
        id: string;
        width: number;
        height: number;
        bitrate: number;

        enabled(): boolean;

        enabled(enabled: boolean): void;
    }

    /**
     * Seek bar and container for the progress bars. Uses {@link PlayProgressBar}
     * as its `bar`.
     */
    interface SeekBar extends Slider {
        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;

        /**
         * Disable controls for this slider if they are enabled
         */
        disable(): void;

        /**
         * Enable controls for this slider if they are disabled
         */
        enable(): void;

        /**
         * Toggles the playback state of the player
         * This gets called when enter or space is used on the seekbar
         *
         * @param event
         *        The `keydown` event that caused this function to be called
         *
         */
        handleAction(event: EventTarget.Event): void;

        /**
         * We want the seek bar to be full on ended
         * no matter what the actual internal values are. so we force it.
         *
         * @param [event]
         *        The `timeupdate` or `ended` event that caused this to run.
         *
         * @listens Player#ended
         */
        handleEnded(event: EventTarget.Event): void;

        /**
         * Called when this SeekBar has focus and a key gets pressed down. By
         * default it will call `this.handleAction` when the key is space or enter.
         *
         * @param event
         *        The `keydown` event that caused this function to be called.
         *
         * @listens keydown
         */
        handleKeyPress(event: EventTarget.Event): void;

        /**
         * Handle mouse down on seek bar
         *
         * @param event
         *        The `mousedown` event that caused this to run.
         *
         * @listens mousedown
         */
        handleMouseDown(event: EventTarget.Event): void;

        /**
         * Handle mouse move on seek bar
         *
         * @param event
         *        The `mousemove` event that caused this to run.
         *
         * @listens mousemove
         */
        handleMouseMove(event: EventTarget.Event): void;

        /**
         * Handle mouse up on seek bar
         *
         * @param event
         *        The `mouseup` event that caused this to run.
         *
         * @listens mouseup
         */
        handleMouseUp(event: EventTarget.Event): void;

        /**
         * Get the percentage of media played so far.
         *
         * @return The percentage of media played so far (0 to 1).
         */
        getPercent(): number;

        /**
         * Move more quickly fast forward for keyboard-only users
         */
        stepForward(): void;

        /**
         * Move more quickly rewind for keyboard-only users
         */
        stepBack(): void;

        /**
         * Update the seek bar's UI.
         *
         * @listens Player#timeupdate
         *
         * @return The current percent at a number from 0-1
         */
        update(): number;
    }

    const SeekBar: {
        prototype: SeekBar;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: SliderOptions): SeekBar;
    };

    /**
     * The base functionality for a slider. Can be vertical or horizontal.
     * For instance the volume bar or the seek bar on a video is a slider.
     */
    interface Slider extends Component {
        options_: SliderOptions;

        /**
         * Enable controls for this slider if they are disabled
         */
        enable(): void;

        /**
         * Are controls are currently enabled for this slider or not.
         *
         * @return true if controls are enabled, false otherwise
         */
        enabled(): boolean;

        /**
         * Disable controls for this slider if they are enabled
         */
        disable(): void;

        /**
         * Create the `Slider`s DOM element.
         *
         * @param type
         *        Type of element to create.
         *
         * @param [props={}]
         *        List of properties in Object form.
         *
         * @param [attributes={}]
         *        list of attributes in Object form.
         *
         * @return The element that gets created.
         */
        createEl(type: string, props?: any, attributes?: any): Element;

        /**
         * Handle `mousedown` or `touchstart` events on the `Slider`.
         *
         * @param event
         *        `mousedown` or `touchstart` event that triggered this function
         *
         * @listens mousedown
         * @listens touchstart
         * @fires Slider#slideractive
         */
        handleMouseDown(event: EventTarget.Event): void;

        /**
         * Handle the `mousemove`, `touchmove`, and `mousedown` events on this `Slider`.
         * The `mousemove` and `touchmove` events will only only trigger this function during
         * `mousedown` and `touchstart`. This is due to {@link Slider#handleMouseDown} and
         * {@link Slider#handleMouseUp}.
         *
         * @param event
         *        `mousedown`, `mousemove`, `touchstart`, or `touchmove` event that triggered
         *        this function
         *
         * @listens mousemove
         * @listens touchmove
         */
        handleMouseMove(event: EventTarget.Event): void;

        /**
         * Handle `mouseup` or `touchend` events on the `Slider`.
         *
         * @param event
         *        The `mouseup` event that caused this to run.
         *
         * @listens touchend
         * @listens mouseup
         * @fires Slider#sliderinactive
         */
        handleMouseUp(event: EventTarget.Event): void;

        /**
         * Update the progress bar of the `Slider`.
         *
         * @return The percentage of progress the progress bar represents as a
         *          number from 0 to 1.
         */
        update(): number;

        /**
         * Calculate distance for slider
         *
         * @param event
         *        The event that caused this function to run.
         *
         * @return The current position of the Slider.
         *         - position.x for vertical `Slider`s
         *         - position.y for horizontal `Slider`s
         */
        calculateDistance(event: EventTarget.Event): number;

        /**
         * Handle a `focus` event on this `Slider`.
         *
         * @listens focus
         */
        handleFocus(): void;

        /**
         * Handle a `focus` event on this `Slider`.
         *
         * @listens focus
         */
        handleFocus(): void;

        /**
         * Handle a `blur` event on this `Slider`.
         *
         * @listens blur
         */
        handleBlur(): void;

        /**
         * Listener for click events on slider, used to prevent clicks
         *   from bubbling up to parent elements like button menus.
         *
         * @param event
         *        Event that caused this object to run
         */
        handleClick(event: EventTarget.Event): void;

        /**
         * Get/set if slider is horizontal for vertical
         *
         * @param [bool]
         *        - true if slider is vertical,
         *        - false is horizontal
         *
         * @return - true if slider is vertical, and getting
         *         - false if the slider is horizontal, and getting
         */
        vertical(bool: boolean): void;

        vertical(): boolean;
    }

    const Slider: {
        prototype: Slider;

        /**
         * Create an instance of this class
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: SliderOptions): Slider;
    };

    interface SliderOptions extends ComponentOptions {
        /**
         * Set property names to bar to match with the child Slider class is looking for
         */
        barName?: string;

        /**
         * Set a horizontal or vertical class on the slider depending on the slider type
         */
        vertical?: boolean;
    }

    /**
     * Just an empty spacer element that can be used as an append point for plugins, etc.
     * Also can be used to create space between elements when necessary.
     */
    interface Spacer extends Component {
        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;
    }

    const Spacer: {
        prototype: Spacer;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param [ready]
         *        Function that gets called when the `Component` is ready.
         */
        new (player: Player, options?: ComponentOptions, ready?: Component.ReadyCallback): Spacer;
    };

    interface Tech extends Component {
        /**
         * Boolean indicating whether the `Tech` supports fullscreen resize control.
         * Resizing plugins using request fullscreen reloads the plugin
         *
         * @default
         */
        featuresFullscreenResize: boolean;

        /**
         * Boolean indicating whether the `Tech` supports muting volume.
         *
         * @default
         */
        featuresMuteControl: boolean;

        /**
         * Boolean indicating whether the `Tech` supports the native `TextTrack`s.
         * This will help us integrate with native `TextTrack`s if the browser supports them.
         *
         * @default
         */
        featuresNativeTextTracks: boolean;

        /**
         * Boolean indicating whether the `Tech` supports changing the speed at which the video
         * plays. Examples:
         *   - Set player to play 2x (twice) as fast
         *   - Set player to play 0.5x (half) as fast
         *
         * @default
         */
        featuresPlaybackRate: boolean;

        /**
         * Boolean indicating whether the `Tech` supports the `progress` event. This is currently
         * not triggered by video-js-swf. This will be used to determine if
         * {@link Tech#manualProgressOn} should be called.
         *
         * @default
         */
        featuresProgressEvents: boolean;

        /**
         * Boolean indicating whether the `Tech` supports the `sourceset` event.
         *
         * A tech should set this to `true` and then use {@link Tech#triggerSourceset}
         * to trigger a {@link Tech#event:sourceset} at the earliest time after getting
         * a new source.
         *
         * @default
         */
        featuresSourceset: boolean;

        /**
         * Boolean indicating whether the `Tech` supports the `timeupdate` event. This is currently
         * not triggered by video-js-swf. This will be used to determine if
         * {@link Tech#manualTimeUpdates} should be called.
         *
         * @default
         */
        featuresTimeupdateEvents: boolean;

        /**
         * Boolean indicating whether the `Tech` supports volume control.
         *
         * @default
         */
        featuresVolumeControl: boolean;

        /**
         * Creates a remote text track object and returns an html track element.
         *
         * > Note: This can be an emulated {@link HTMLTrackElement} or a native one.
         *
         * @param options
         *        See {@link Tech#createRemoteTextTrack} for more detailed properties.
         *
         * @param [manualCleanup=true]
         *        - When false: the TextTrack will be automatically removed from the video
         *          element whenever the source changes
         *        - When True: The TextTrack will have to be cleaned up manually
         *
         * @return An Html Track Element.
         *
         * @deprecated The default functionality for this function will be equivalent
         *             to "manualCleanup=false" in the future. The manualCleanup parameter will
         *             also be removed.
         */
        addRemoteTextTrack(options: TextTrackOptions, manualCleanup: true): HTMLTrackElement;

        /**
         * Create and returns a remote {@link TextTrack} object.
         *
         * @param kind
         *        `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata)
         *
         * @param [label]
         *        Label to identify the text track
         *
         * @param [language]
         *        Two letter language abbreviation
         *
         * @return The TextTrack that gets created.
         */
        addTextTrack(kind: string, label: string, language: string): TextTrack;

        /**
         * Emulate TextTracks using vtt.js if necessary
         *
         * @fires Tech#vttjsloaded
         * @fires Tech#vttjserror
         */
        addWebVttScript_(): void;

        /**
         * Get the {@link AudioTrackList}
         *
         * @return Tech.prototype.audioTracks
         */
        audioTracks(): TrackList;

        /**
         * Get and create a `TimeRange` object for buffering.
         *
         * @return The time range object that was created.
         */
        buffered(): any;

        /**
         * Get the percentage of the current video that is currently buffered.
         *
         * @return A number from 0 to 1 that represents the decimal percentage of the
         *         video that is buffered.
         *
         */
        bufferedPercent(): number;

        /**
         * Check if the tech can support the given mime-type.
         *
         * The base tech does not support any type, but source handlers might
         * overwrite this.
         *
         * @param type
         *         The mimetype to check for support
         *
         * @return 'probably', 'maybe', or empty string
         *
         * @see [Spec]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType}
         */
        canPlayType(type: string): string;

        /**
         * Remove any TextTracks added via addRemoteTextTrack that are
         * flagged for automatic garbage collection
         */
        cleanupAutoTextTracks(): void;

        /**
         * Clear out a single `TrackList` or an array of `TrackLists` given their names.
         *
         * > Note: Techs without source handlers should call this between sources for `video`
         *         & `audio` tracks. You don't want to use them between tracks!
         *
         * @param types
         *        TrackList names to clear, valid names are `video`, `audio`, and
         *        `text`.
         */
        clearTracks(types: string | string[]): void;

        /**
         * Create an emulated TextTrack for use by addRemoteTextTrack
         *
         * This is intended to be overridden by classes that inherit from
         * Tech in order to create native or custom TextTracks.
         *
         * @param options
         *        The object should contain the options to initialize the TextTrack with.
         *
         * @param [options.kind]
         *        `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata).
         *
         * @param [options.label].
         *        Label to identify the text track
         *
         * @param [options.language]
         *        Two letter language abbreviation.
         *
         * @return The track element that gets created.
         */
        createRemoteTextTrack(options: TextTrackOptions): HTMLTextAreaElement;

        /**
         * Turn off all event polyfills, clear the `Tech`s {@link AudioTrackList},
         * {@link VideoTrackList}, and {@link TextTrackList}, and dispose of this Tech.
         *
         * @fires Component#dispose
         */
        dispose(): void;

        /**
         * Emulate texttracks
         *
         */
        emulateTextTracks(): void;

        /**
         * Get or set an error on the Tech.
         *
         * @param [err]
         *        Error to set on the Tech
         *
         * @return The current error object on the tech, or null if there isn't one.
         */
        error(err: MediaError): MediaError | null;

        /**
         * Gets available media playback quality metrics as specified by the W3C's Media
         * Playback Quality API.
         *
         * @see [Spec]{@link https://wicg.github.io/media-playback-quality}
         *
         * @return An object with supported media playback quality metrics
         */
        getVideoPlaybackQuality(): any;

        /**
         * Turn on listeners for {@link VideoTrackList}, {@link {AudioTrackList}, and
         * {@link TextTrackList} events.
         *
         * This adds {@link EventTarget~EventListeners} for `addtrack`, and  `removetrack`.
         *
         * @fires Tech#audiotrackchange
         * @fires Tech#videotrackchange
         * @fires Tech#texttrackchange
         */
        initTrackListeners(): void;

        manualProgressOff(): void;

        /**
         * Polyfill the `progress` event for browsers that don't support it natively.
         *
         * @see {@link Tech#trackProgress}
         */
        manualProgressOn(): void;

        /**
         * Turn off the polyfill for `progress` events that was created in
         * {@link Tech#manualProgressOn}
         */
        manualTimeUpdatesOff(): void;

        /**
         * Polyfill the `timeupdate` event for browsers that don't support it.
         *
         * @see {@link Tech#trackCurrentTime}
         */
        manualTimeUpdatesOn(): void;

        /**
         * Update our internal duration on a `durationchange` event by calling
         * {@link Tech#duration}.
         *
         * @param event
         *        The `durationchange` event that caused this to run.
         *
         * @listens Tech#durationchange
         */
        onDurationChange(event: Event): void;

        /**
         * Attempt to force override of native audio tracks.
         *
         * @param override - If set to true native audio will be overridden,
         * otherwise native audio will potentially be used.
         */
        overrideNativeAudioTracks(override: boolean): void;

        /**
         * Attempt to force override of native video tracks.
         *
         * @param override - If set to true native video will be overridden,
         * otherwise native video will potentially be used.
         */
        overrideNativeVideoTracks(override: boolean): void;

        /**
         * Returns the `TimeRange`s that have been played through for the current source.
         *
         * > NOTE: This implementation is incomplete. It does not track the played `TimeRange`.
         *         It only checks whether the source has played at all or not.
         *
         * @return - A single time range if this video has played
         *         - An empty set of ranges if not.
         */
        played(): any;

        /**
         * A method to check for the presence of the 'playsinline' <video> attribute.
         */
        playsinline(): any;

        /**
         * Get the remote element {@link HTMLTrackElementList}
         */
        remoteTextTrackEls(): HTMLTrackElementList;

        /**
         * Get the remote element {@link TextTrackList}
         */
        remoteTextTracks(): TextTrackList;

        /**
         * Remove a remote text track from the remote `TextTrackList`.
         *
         * @param track
         *        `TextTrack` to remove from the `TextTrackList`
         */
        removeRemoteTextTrack(track: TextTrack): void;

        /**
         * Reset the tech, which will removes all sources and reset the internal readyState.
         */
        reset(): void;

        /**
         * Causes a manual time update to occur if {@link Tech#manualTimeUpdatesOn} was
         * previously called.
         *
         * @fires Tech#timeupdate
         */
        setCurrentTime(): void;

        /**
         * A method to set or unset the 'playsinline' <video> attribute.
         */
        setPlaysinline(): void;

        /**
         * A method to set a poster from a `Tech`.
         */
        setPoster(): void;

        /**
         * Stop the interval function created in {@link Tech#trackCurrentTime} so that the
         * `timeupdate` event is no longer triggered.
         *
         * @listens {Tech#pause}
         */
        stopTrackingCurrentTime(): void;

        /**
         * Turn off the polyfill for `progress` events that was created in
         * {@link Tech#manualProgressOn}
         * Stop manually tracking progress events by clearing the interval that was set in
         * {@link Tech#trackProgress}.
         */
        stopTrackingProgress(): void;

        /**
         * Get the {@link TextTrackList}
         */
        textTracks(): TextTrackList;

        /**
         * Sets up an interval function to track current time and trigger `timeupdate` every
         * 250 milliseconds.
         *
         * @listens Tech#play
         * @triggers Tech#timeupdate
         */
        trackCurrentTime(): void;

        /**
         * This is used to trigger a `progress` event when the buffered percent changes. It
         * sets an interval function that will be called every 500 milliseconds to check if the
         * buffer end percent has changed.
         *
         * > This function is called by {@link Tech#manualProgressOn}
         *
         * @param event
         *        The `ready` event that caused this to run.
         *
         * @listens Tech#ready
         * @fires Tech#progress
         */
        trackProgress(event: EventTarget.Event): void;

        /**
         * A special function to trigger source set in a way that will allow player
         * to re-trigger if the player or tech are not ready yet.
         *
         * @fires Tech#sourceset
         * @param src The source string at the time of the source changing.
         */
        triggerSourceset(src: string): void;

        /**
         * Get the {@link VideoTrackList}
         */
        videoTracks(): TrackList;
    }

    const Tech: {
        prototype: Tech;

        /**
         * Create an instance of this Tech.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param ready
         *        Callback function to call when the `HTML5` Tech is ready.
         */
        new (options?: any, ready?: Component.ReadyCallback): Tech;

        /**
         * Check if the tech can support the given source
         * @param srcObj
         *        The source object
         * @param options
         *        The options passed to the tech
         * @return 'probably', 'maybe', or '' (empty string)
         */
        canPlaySource(srcObj: any, options: any): 'problably' | 'maybe' | '';

        /**
         * Check if the type is supported by this tech.
         *
         * The base tech does not support any type, but source handlers might
         * overwrite this.
         *
         * @param type
         *        The media type to check
         * @return Returns the native video element's response
         */
        canPlayType(type: string): string;

        /**
         * Get a `Tech` from the shared list by name.
         *
         * @param name
         *        `camelCase` or `TitleCase` name of the Tech to get
         *
         * @return The `Tech` or undefined if there was no tech with the name requested.
         */
        getTech(name: string): Tech | undefined;

        /**
         * Return whether the argument is a Tech or not.
         * Can be passed either a Class like `Html5` or a instance like `player.tech_`
         *
         * @param component
         *        The item to check
         *
         * @return Whether it is a tech or not
         *         - True if it is a tech
         *         - False if it is not
         */
        isTech(component: any): boolean;

        /**
         * Registers a `Tech` into a shared list for videojs.
         *
         * @param name
         *        Name of the `Tech` to register.
         *
         * @param tech
         *        The `Tech` class to register.
         */
        registerTech(name: string, tech: any): void;

        /**
         * A functional mixin for techs that want to use the Source Handler pattern.
         * Source handlers are scripts for handling specific formats.
         * The source handler pattern is used for adaptive formats (HLS, DASH) that
         * manually load video data and feed it into a Source Buffer (Media Source Extensions)
         * Example: `Tech.withSourceHandlers.call(MyTech);`
         *
         * @param tech
         *        The tech to add source handler functions to.
         *
         */
        withSourceHandlers(tech: typeof Tech): void;
    };

    namespace Tech {
        /**
         * An Object containing a structure like: `{src: 'url', type: 'mimetype'}` or string
         * that just contains the src url alone.
         * `var SourceObject = {src: 'http://ex.com/video.mp4', type: 'video/mp4'};`
         * `var SourceString = 'http://example.com/some-video.mp4';`
         */
        interface SourceObject {
            /**
             * The url to the source
             */
            src: string;

            /**
             * The mime type of the source
             */
            type?: string;
        }
    }

    /**
     * The base class for buttons that toggle specific text track types (e.g. subtitles)
     */
    interface TextTrackButton extends MenuButton {
        /**
         * Create a menu item for each text track
         *
         * @param [items=[]]
         *        Existing array of items to use during creation
         *
         * @param [TrackMenuItem=TextTrackMenuItem]
         *        Existing array of items to use during creation
         *
         * @return Array of menu items that were created
         */
        createItems(items?: TextTrackMenuItem[], TrackMenuItem?: typeof TextTrackMenuItem): TextTrackMenuItem[];
    }

    const TextTrackButton: {
        prototype: TextTrackButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options={}]
         *        The key/value store of player options.
         */
        new (player: Player, options?: TrackButtonOptions): TextTrackButton;
    };

    /**
     * A List of TextTrackCues.
     *
     * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcuelist}
     */
    interface TextTrackCueList {
        /**
         * Index getters for the cues.
         *
         * @param index
         */
        [index: number]: TextTrackCueList.TextTrackCue;

        /**
         * The current number of `TextTrackCue`s in the TextTrackCueList.
         */
        length: number;

        /**
         * Get a `TextTrackCue` that is currently in the `TextTrackCueList` by id.
         *
         * @param id
         *        The id of the cue that should be searched for.
         *
         * @return A single cue or null if none was found.
         */
        getCueById(id: string): TextTrackCueList.TextTrackCue;
    }

    const TextTrackCueList: {
        prototype: TextTrackCueList;

        /**
         * Create an instance of this class..
         *
         * @param cues
         *        A list of cues to be initialized with
         */
        new (cues: TextTrackCueList.TextTrackCue[]): TextTrackCueList;
    };

    namespace TextTrackCueList {
        /**
         * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcue}
         */
        interface TextTrackCue {
            /**
             * The unique id for this text track cue
             */
            id: string;

            /**
             * The start time for this text track cue
             */
            startTime: number;

            /**
             * The end time for this text track cue
             */
            endTime: number;

            /**
             * The text this cue is holding
             */
            text: string;

            /**
             * Pause when the end time is reached if true.
             */
            pauseOnExit: boolean;
        }
    }

    /**
     * The specific menu item type for selecting a language within a text track kind
     */
    interface TextTrackMenuItem extends MenuItem {
        /**
         * This gets called when an `TextTrackMenuItem` is "clicked". See
         * {@link ClickableComponent} for more detailed information on what a click can be.
         *
         * @param event
         *        The `keydown`, `tap`, or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */
        handleClick(event: EventTarget.Event): void;

        /**
         * Handle text track list change
         *
         * @param event
         *        The `change` event that caused this function to be called.
         *
         * @listens TextTrackList#change
         */
        handleTracksChange(event: EventTarget.Event): void;

        /**
         * Handle selected language change
         *
         * @param event
         *        The `change` event that caused this function to be called.
         */
        handleSelectedLanguageChange(event: EventTarget.Event): void;
    }

    const TextTrackMenuItem: {
        prototype: TextTrackMenuItem;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: TextTrackMenuItemOptions): TextTrackMenuItem;
    };

    interface TextTrackMenuItemOptions extends MenuItemOptions {
        track: TextTrack;
    }

    /**
     * Manipulate Text Tracks settings.
     */
    interface TextTrackSettings extends ModalDialog {
        /**
         * Gets or sets the modal content, which gets normalized before being
         * rendered into the DOM.
         *
         * This does not update the DOM or fill the modal, but it is called during
         * that process.
         *
         * @return The current content of the modal dialog
         */
        content(): Element[];

        /**
         * Returns the label string for this modal. Primarily used for accessibility.
         *
         * @return the localized or raw label of this modal.
         */
        label(): string;

        /**
         * Returns the description string for this modal. Primarily used for
         * accessibility.
         *
         * @return The localized or raw description of this modal.
         */
        description(): string;

        /**
         * Builds the default DOM `className`.
         *
         * @return The DOM `className` for this object.
         */
        buildCSSClass(): string;

        /**
         * Gets an object of text track settings (or null).
         *
         * @return An object with config values parsed from the DOM or localStorage.
         */
        getValues(): any;

        /**
         * Sets text track settings from an object of values.
         *
         * @param values
         *        An object with config values parsed from the DOM or localStorage.
         */
        setValues(values: any): void;

        /**
         * Sets all `<select>` elements to their default values.
         */
        setDefaults(): void;

        /**
         * Restore texttrack settings from localStorage
         */
        restoreSettings(): void;

        /**
         * Save text track settings to localStorage
         */
        saveSettings(): void;

        /**
         * Update display of text track settings
         */
        updateDisplay(): void;
    }

    const TextTrackSettings: {
        prototype: TextTrackSettings;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options: TextTrackSettingsOptions): TextTrackSettings;
    };

    interface TextTrackSettingsOptions extends ModalDialogOptions {
        persistTextTrackSettings?: boolean;
    }

    /**
     * Create an instance of this class.
     *
     * @param options={}
     *        Object of option names and values
     *
     * @param options.tech
     *        A reference to the tech that owns this TextTrack.
     *
     * @param [options.kind='subtitles']
     *        A valid text track kind.
     *
     * @param [options.mode='disabled']
     *        A valid text track mode.
     *
     * @param [options.id='vjs_track_' + Guid.newGUID()]
     *        A unique id for this TextTrack.
     *
     * @param [options.label='']
     *        The menu label for this track.
     *
     * @param [options.language='']
     *        A valid two character language code.
     *
     * @param [options.srclang='']
     *        A valid two character language code. An alternative, but deprioritized
     *        version of `options.language`
     *
     * @param [options.src]
     *        A url to TextTrack cues.
     *
     * @param [options.default]
     *        If this track should default to on or off.
     */
    interface TextTrack extends Track {
        /**
         * The list text track cues that are currently active for this TextTrack.
         */
        activeCues: TextTrackCueList;

        /**
         * @The text track cue list for this TextTrack.
         */
        cues: TextTrackCueList;

        /**
         * If this track was set to be on or off by default. Cannot be changed after creation.
         */
        readonly default: boolean;

        /**
         * Set the mode of this TextTrack to a valid {@link TextTrack~Mode}. Will
         * not be set if setting to an invalid mode.
         * @fires TextTrack#modechange
         */
        mode: TextTrack.Mode;

        /**
         * Add a cue to the internal list of cues.
         *
         * @param cue
         *        The cue to add to our internal list
         */
        addCue(cue: TextTrackCueList.TextTrackCue): void;

        /**
         * Remove a cue from our internal list
         *
         * @param cue
         *        The cue to remove from our internal list
         */
        removeCue(cue: TextTrackCueList.TextTrackCue): void;
    }

    const TextTrack: {
        prototype: TextTrack;

        /**
         * Create an instance of this class.
         *
         * @param options={}
         *        Object of option names and values
         *
         * @param options.tech
         *        A reference to the tech that owns this TextTrack.
         *
         * @param [options.kind='subtitles']
         *        A valid text track kind.
         *
         * @param [options.mode='disabled']
         *        A valid text track mode.
         *
         * @param [options.id='vjs_track_' + Guid.newGUID()]
         *        A unique id for this TextTrack.
         *
         * @param [options.label='']
         *        The menu label for this track.
         *
         * @param [options.language='']
         *        A valid two character language code.
         *
         * @param [options.srclang='']
         *        A valid two character language code. An alternative, but deprioritized
         *        version of `options.language`
         *
         * @param [options.src]
         *        A url to TextTrack cues.
         *
         * @param [options.default]
         *        If this track should default to on or off.
         */
        new (options: TextTrackOptions): TextTrack;
    };

    interface TextTrackOptions extends TrackOptions {
        tech?: Tech;
        kind?: TextTrack.Kind;
        mode?: TextTrack.Mode;
        srclang?: string;
        src?: string;
        default?: boolean;
    }

    namespace TextTrack {
        type Kind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';

        type Mode = 'disabled' | 'hidden' | 'showing';
    }

    /**
     * The current list of {@link TextTrack} for a media file.
     *
     * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#texttracklist}
     */
    interface TextTrackList extends TrackList {
        [index: number]: TextTrack;

        /**
         * Add a {@link TextTrack} to the `TextTrackList`
         *
         * @param track
         *        The text track to add to the list.
         *
         * @fires TrackList#addtrack
         */
        addTrack(track: TextTrack): void;
    }

    const TextTrackList: {
        prototype: TextTrackList;

        /**
         * Create an instance of this class
         *
         * @param tracks
         *        A list of tracks to initialize the list with.
         */
        new (tracks?: TextTrack[]): TextTrackList;
    };

    /**
     * An object that contains ranges of time for various reasons.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges
     */
    interface TimeRange {
        /**
         *           The number of time ranges represented by this Object
         */
        readonly length: number;

        /**
         * Returns the time offset at which a specified time range ends.
         *
         * @param [index=0]
         *        The range number to return the time for.
         *
         * @return The time that offset at the specified index.
         */
        end(index: number): number;

        /**
         * Returns the time offset at which a specified time range begins.
         *
         * @param [index=0]
         *        The range number to return the time for.
         *
         * @return The time that offset at the specified index.
         */
        start(index: number): number;
    }

    /**
     * Displays the time left in the video
     */
    interface TimeDisplay extends Component {
        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;

        /**
         * Dispose of the `TimeDisplay` and all child components.
         *
         * @fires Component#dispose
         */
        dispose(): void;

        /**
         * To be filled out in the child class, should update the displayed time
         * in accordance with the fact that the current time has changed.
         *
         * @param [event]
         *        The `timeupdate`  event that caused this to run.
         *
         * @listens Player#timeupdate
         */
        updateContent(event?: EventTarget.Event): void;
    }

    const TimeDisplay: {
        prototype: TimeDisplay;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: ComponentOptions): TimeDisplay;
    };

    /**
     * Time tooltips display a time above the progress bar.
     */
    interface TimeToolTip extends Component {
        /**
         * Create the time tooltip DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;

        /**
         * Updates the position of the time tooltip relative to the `SeekBar`.
         *
         * @param seekBarRect
         *        The `ClientRect` for the {@link SeekBar} element.
         *
         * @param seekBarPoint
         *        A number from 0 to 1, representing a horizontal reference point
         *        from the left edge of the {@link SeekBar}
         *
         * @param content
         */
        update(seekBarRect: ClientRect, seekBarPoint: number, content: string): void;
    }

    const TimeToolTip: {
        prototype: TimeToolTip;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options?: ComponentOptions): TimeToolTip;
    };

    /**
     * A Track class that contains all of the common functionality for {@link AudioTrack},
     * {@link VideoTrack}, and {@link TextTrack}.
     *
     * > Note: This class should not be used directly
     *
     * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html}
     */
    interface Track extends EventTarget {
        /**
         * The id of this track. Cannot be changed after creation.
         */
        readonly id: string;

        /**
         * The kind of track that this is. Cannot be changed after creation.
         */
        readonly kind: string;

        /**
         * The label of this track. Cannot be changed after creation.
         */
        readonly label: string;

        /**
         * The two letter language code for this track. Cannot be changed after creation.
         */
        readonly language: string;
    }

    const Track: {
        prototype: Track;

        /**
         * Create an instance of this class.
         *
         * @param [options={}]
         *        Object of option names and values
         *
         * @param [options.kind='']
         *        A valid kind for the track type you are creating.
         *
         * @param [options.id='vjs_track_' + Guid.newGUID()]
         *        A unique id for this AudioTrack.
         *
         * @param [options.label='']
         *        The menu label for this track.
         *
         * @param [options.language='']
         *        A valid two character language code.
         */
        new (options?: TrackOptions): Track;
    };

    interface TrackOptions {
        id?: string;
        kind?: string;
        label?: string;
        language?: string;
    }

    /**
     * The base class for buttons that toggle specific  track types (e.g. subtitles).
     */
    const TrackButton: {
        prototype: MenuButton;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *         The `Player` that this class should be attached to.
         *
         * @param [options]
         *         The key/value store of player options.
         */
        new (player: Player, options?: TrackButtonOptions): MenuButton;
    };

    interface TrackButtonOptions extends MenuButtonOptions {
        track: Track[];
    }

    /**
     * Common functionaliy between {@link TextTrackList}, {@link AudioTrackList}, and
     * {@link VideoTrackList}
     */
    interface TrackList extends EventTarget {
        [index: number]: Track;

        /**
         * The current number of `Track`s in the this Trackist.
         */
        length: number;

        /**
         * Add a {@link Track} to the `TrackList`
         *
         * @param track
         *        The audio, video, or text track to add to the list.
         *
         * @fires TrackList#addtrack
         */
        addTrack(track: Track): void;

        /**
         * Remove a {@link Track} from the `TrackList`
         *
         * @param track
         *        The audio, video, or text track to remove from the list.
         *
         * @fires TrackList#removetrack
         */
        removeTrack(track: Track): void;
    }

    const TrackList: {
        prototype: TrackList;

        /**
         * Create an instance of this class
         *
         * @param tracks
         *        A list of tracks to initialize the list with.
         */
        new (tracks?: Track[]): TrackList;
    };

    interface UserActions {
        doubleClick?: boolean | ((event: EventTarget.Event) => void);
        hotkeys?: boolean | ((event: KeyboardEvent) => void) | UserActionHotkeys;
    }

    interface UserActionHotkeys {
        fullscreenKey?: (event: KeyboardEvent) => boolean;
        muteKey?: (event: KeyboardEvent) => boolean;
        playPauseKey?: (event: KeyboardEvent) => boolean;
    }

    /**
     * The bar that contains the volume level and can be clicked on to adjust the level
     */
    interface VolumeBar extends Slider {
        /**
         * If the player is muted unmute it.
         */
        checkMuted(): void;

        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;

        /**
         * Handle mouse down on volume bar
         *
         * @param event
         *        The `mousedown` event that caused this to run.
         *
         * @listens mousedown
         */
        handleMouseDown(event: EventTarget.Event): void;

        /**
         * Get percent of volume level
         *
         * @return Volume level percent as a decimal number.
         */
        getPercent(): number;

        /**
         * Decrease volume level for keyboard users
         */
        stepBack(): void;

        /**
         * Increase volume level for keyboard users
         */
        stepForward(): void;

        /**
         * Update ARIA accessibility attributes
         *
         * @param [event]
         *        The `volumechange` event that caused this function to run.
         *
         * @listens Player#volumechange
         */
        updateARIAAttributes(event: EventTarget.Event): void;
    }

    const VolumeBar: {
        prototype: VolumeBar;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         */
        new (player: Player, options?: SliderOptions): VolumeBar;
    };

    /**
     * The component for controlling the volume level
     */
    interface VolumeControl extends Component {
        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;

        /**
         * Handle `mousedown` or `touchstart` events on the `VolumeControl`.
         *
         * @param event
         *        `mousedown` or `touchstart` event that triggered this function
         *
         * @listens mousedown
         * @listens touchstart
         */
        handleMouseDown(event: EventTarget.Event): void;

        /**
         * Handle `mouseup` or `touchend` events on the `VolumeControl`.
         *
         * @param event
         *        `mouseup` or `touchend` event that triggered this function.
         *
         * @listens touchend
         * @listens mouseup
         */
        handleMouseUp(event: EventTarget.Event): void;

        /**
         * Handle `mousedown` or `touchstart` events on the `VolumeControl`.
         *
         * @param event
         *        `mousedown` or `touchstart` event that triggered this function
         *
         * @listens mousedown
         * @listens touchstart
         */
        handleMouseMove(event: EventTarget.Event): void;
    }

    const VolumeControl: {
        prototype: VolumeControl;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options={}]
         *        The key/value store of player options.
         */
        new (player: Player, options?: VolumeControlOptions): VolumeControl;
    };

    interface VolumeControlOptions extends ComponentOptions {
        volumeBar?: VolumeBar;
        vertical?: boolean;
    }

    /**
     * Shows volume level
     */
    interface VolumeLevel extends Component {
        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;
    }

    const VolumeLevel: {
        prototype: VolumeLevel;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options]
         *        The key/value store of player options.
         *
         * @param [options.children]
         *        An array of children objects to intialize this component with. Children objects have
         *        a name property that will be used if more than one component of the same type needs to be
         *        added.
         *
         * @param [ready]
         *        Function that gets called when the `Component` is ready.
         */
        new (player: Player, options?: ComponentOptions, ready?: Component.ReadyCallback): VolumeLevel;
    };

    /**
     * A Component to contain the MuteToggle and VolumeControl so that
     * they can work together.
     */
    interface VolumePanel extends Component {
        /**
         * Create the `Component`'s DOM element
         *
         * @return The element that was created.
         */
        createEl(): HTMLDivElement;
    }

    const VolumePanel: {
        prototype: VolumePanel;

        /**
         * Creates an instance of this class.
         *
         * @param player
         *        The `Player` that this class should be attached to.
         *
         * @param [options={}]
         *        The key/value store of player options.
         */
        new (player: Player, options?: VolumePanel): VolumePanel;
    };

    interface VolumePanelOptions extends ComponentOptions {
        inline?: boolean;
        volumeControl?: VolumeControlOptions;
    }

    namespace url {
        interface URLObject {
            /**
             * The protocol of the url that was parsed.
             */
            protocol: string;
            /**
             * The hostname of the url that was parsed.
             */
            hostname: string;
            /**
             * The port of the url that was parsed.
             */
            port: string;
            /**
             * The pathname of the url that was parsed.
             */
            pathname: string;
            /**
             * The search query of the url that was parsed.
             */
            search: string;
            /**
             * The hash of the url that was parsed.
             */
            hash: string;
            /**
             * The host of the url that was parsed.
             */
            host: string;
        }
    }

    interface XhrObject extends Xhr {
        del: Xhr;
        get: Xhr;
        head: Xhr;
        patch: Xhr;
        post: Xhr;
        put: Xhr;
    }

    type XhrCallback = (error?: Error, response?: XhrResponse, body?: any) => void;

    interface Xhr {
        (url: string | XhrOptions, callback: XhrCallback): any;

        (url: string, options: XhrOptions, callback: XhrCallback): any;
    }

    interface XhrOptions {
        beforeSend?: (xhrObject: XMLHttpRequest) => void;
        body?: any;
        headers?: any;
        json?: boolean;
        method?: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT';
        password?: string;
        responseType?: '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
        sync?: boolean;
        timeout?: number;
        uri?: string;
        url?: string;
        username?: string;
        useXDR?: boolean;
        xhr?: XMLHttpRequest;
        withCredentials?: boolean;
    }

    interface XhrResponse {
        body: any;
        statusCode: number;
        method: string;
        headers: any;
        url: string;
        rawRequest: XMLHttpRequest;
    }
}

/**
 * An instance of the `Player` class is created when any of the Video.js setup methods
 * are used to initialize a video.
 *
 * After an instance has been created it can be accessed globally in two ways:
 * 1. By calling `videojs('example_video_1');`
 * 2. By using it directly via  `videojs.players.example_video_1;`
 */
export interface VideoJsPlayer extends videojs.Component {
    bigPlayButton: videojs.Button;

    controlBar: videojs.ControlBar;

    errorDisplay: videojs.ModalDialog;

    liveTracker: videojs.LiveTracker;

    loadingSpinner: videojs.Component;

    options_: videojs.PlayerOptions;

    userActivity_: boolean;

    userActive_: boolean;

    /**
     * A getter/setter for the `Player`'s aspect ratio.
     *
     * @param [ratio]
     *        The value to set the `Player's aspect ratio to.
     *
     * @return - The current aspect ratio of the `Player` when getting.
     *         - undefined when setting
     */
    aspectRatio(ratio: string): void;

    aspectRatio(): string;

    /**
     * Get or set the autoplay option. When this is a boolean it will
     * modify the attribute on the tech. When this is a string the attribute on
     * the tech will be removed and `Player` will handle autoplay on loadstarts.
     *
     * @param [value]
     *        - true: autoplay using the browser behavior
     *        - false: do not autoplay
     *        - 'play': call play() on every loadstart
     *        - 'muted': call muted() then play() on every loadstart
     *        - 'any': call play() on every loadstart. if that fails call muted() then play().
     *        - *: values other than those listed here will be set `autoplay` to true
     *
     * @return The current value of autoplay when getting
     */
    autoplay(value: boolean | string): void;

    autoplay(): boolean | string;

    /**
     * Get the remote {@link TextTrackList}
     * @return The current remote text track list
     */
    textTracks(): TextTrackList;

    /**
     * Get the remote {@link TextTrackList}
     * @return The current remote text track list
     */
    remoteTextTracks(): TextTrackList;

    /**
     * Create a remote {@link TextTrack} and an {@link HTMLTrackElement}. It will
     * automatically removed from the video element whenever the source changes, unless
     * manualCleanup is set to false.
     *
     * @param options
     *        Options to pass to {@link HTMLTrackElement} during creation. See
     *        {@link HTMLTrackElement} for object properties that you should use.
     *
     * @param [manualCleanup=true] if set to false, the TextTrack will be
     *
     * @return the HTMLTrackElement that was created and added
     *         to the HtmlTrackElementList and the remote
     *         TextTrackList
     */
    addRemoteTextTrack(options: videojs.TextTrackOptions, manualCleanup: boolean): HTMLTrackElement;

    /**
     * A helper method for adding a {@link TextTrack} to our
     * {@link TextTrackList}.
     *
     * In addition to the W3C settings we allow adding additional info through options.
     *
     * @see http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
     *
     * @param [kind]
     *        the kind of TextTrack you are adding
     *
     * @param [label]
     *        the label to give the TextTrack label
     *
     * @param [language]
     *        the language to set on the TextTrack
     *
     * @return the TextTrack that was added or undefined
     *         if there is no tech
     */
    addTextTrack(kind?: string, label?: string, language?: string): void;

    /**
     * Get a TimeRange object with an array of the times of the video
     * that have been downloaded. If you just want the percent of the
     * video that's been downloaded, use bufferedPercent.
     *
     * @see [Buffered Spec]{@link http://dev.w3.org/html5/spec/video.html#dom-media-buffered}
     *
     * @return A mock TimeRange object (following HTML spec)
     */
    buffered(): videojs.TimeRange;

    /**
     * Get the ending time of the last buffered time range
     * This is used in the progress bar to encapsulate all time ranges.
     *
     * @return The end of the last buffered time range
     */
    bufferedEnd(): number;

    /**
     * Get the percent (as a decimal) of the video that's been downloaded.
     * This method is not a part of the native HTML video API.
     *
     * @return A decimal between 0 and 1 representing the percent
     *         that is buffered 0 being 0% and 1 being 100%
     */
    bufferedPercent(): number;

    /**
     * Check whether the player can play a given mimetype
     *
     * @see https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype
     *
     * @param type
     *        The mimetype to check
     *
     * @return 'probably', 'maybe', or '' (empty string)
     */
    canPlayType(type: string): 'probably' | 'maybe' | '';

    cancelFullScreen(): videojs.Player;

    /**
     * Get or set whether or not the controls are showing.
     *
     * @fires Player#controlsenabled
     *
     * @param [bool]
     *        - true to turn controls on
     *        - false to turn controls off
     *
     * @return The current value of controls when getting
     */
    controls(bool: boolean): void;

    controls(): boolean;

    /**
     * Create the `Player`'s DOM element.
     *
     * @return The DOM element that gets created.
     */
    createEl(): Element;

    /**
     * Creates a simple modal dialog (an instance of the {@link ModalDialog}
     * component) that immediately overlays the player with arbitrary
     * content and removes itself when closed.
     *
     * @param content
     *        Same as {@link ModalDialog#content}'s param of the same name.
     *        The most straight-forward usage is to provide a string or DOM
     *        element.
     *
     * @param [options]
     *        Extra options which will be passed on to the {@link ModalDialog}.
     * @check
     * @return the {@link ModalDialog} that was created
     */
    createModal(content: string | (() => any) | Element | any[], options: any): videojs.ModalDialog;

    /**
     * Returns the current source object.
     *
     * @return The current source object
     */
    currentSource(): videojs.Tech.SourceObject;

    /**
     * Returns all of the current source objects.
     *
     * @return The current source objects
     */
    currentSources(): videojs.Tech.SourceObject[];

    /**
     * Returns the fully qualified URL of the current source value e.g. http://mysite.com/video.mp4
     * Can be used in conjunction with `currentType` to assist in rebuilding the current source object.
     *
     * @return The current source
     */
    currentSrc(): string;

    /**
     * Get or set the current time (in seconds)
     *
     * @param [seconds]
     *        The time to seek to in seconds
     *
     * @return - the current time in seconds when getting
     */
    currentTime(seconds: number): void;

    currentTime(): number;

    /**
     * Get the current source type e.g. video/mp4
     * This can allow you rebuild the current source object so that you could load the same
     * source and tech later
     *
     * @return The source MIME type
     */
    currentType(): string;

    /**
     * Get the current defaultMuted state, or turn defaultMuted on or off. defaultMuted
     * indicates the state of muted on initial playback.
     *
     * ```js
     *   var myPlayer = videojs('some-player-id');
     *
     *   myPlayer.src("http://www.example.com/path/to/video.mp4");
     *
     *   // get, should be false
     *   console.log(myPlayer.defaultMuted());
     *   // set to true
     *   myPlayer.defaultMuted(true);
     *   // get should be true
     *   console.log(myPlayer.defaultMuted());
     * ```
     *
     * @param [defaultMuted]
     *        - true to mute
     *        - false to unmute
     *
     * @return - true if defaultMuted is on and getting
     *         - false if defaultMuted is off and getting
     *         - A reference to the current player when setting
     */
    defaultMuted(defaultMuted: boolean): void;

    defaultMuted(): boolean;

    /**
     * Gets or sets the current default playback rate. A default playback rate of
     * 1.0 represents normal speed and 0.5 would indicate half-speed playback, for instance.
     * defaultPlaybackRate will only represent what the initial playbackRate of a video was, not
     * not the current playbackRate.
     *
     * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-defaultplaybackrate
     *
     * @param [rate]
     *       New default playback rate to set.
     *
     * @return - The default playback rate when getting or 1.0
     *         - the player when setting
     */
    defaultPlaybackRate(rate: number): videojs.Player;

    defaultPlaybackRate(): boolean;

    /**
     * A getter/setter for the `Player`'s width & height.
     *
     * @param dimension
     *        This string can be:
     *        - 'width'
     *        - 'height'
     *
     * @param [value]
     *        Value for dimension specified in the first argument.
     *
     * @return The dimension arguments value when getting (width/height).
     */
    dimension(dimension: 'width' | 'height', value: number): void;

    dimension(dimension: 'width' | 'height'): number;

    /**
     * An instance of the `Player` class is created when any of the Video.js setup methods
     * are used to initialize a video.
     *
     * After an instance has been created it can be accessed globally in two ways:
     * 1. By calling `videojs('example_video_1');`
     * 2. By using it directly via  `videojs.players.example_video_1;`
     */
    dispose(): void;

    /**
     * Normally gets the length in time of the video in seconds;
     * in all but the rarest use cases an argument will NOT be passed to the method
     *
     * > **NOTE**: The video must have started loading before the duration can be
     * known, and in the case of Flash, may not be known until the video starts
     * playing.
     *
     *
     * @fires Player#durationchange
     *
     * @param [seconds]
     *        The duration of the video to set in seconds
     *
     * @return - The duration of the video in seconds when getting
     */
    duration(seconds: number): void;

    duration(): number;

    /**
     * A getter/setter/toggler for the vjs-fluid `className` on the `Player`.
     *
     * @param [bool]
     *        - A value of true adds the class.
     *        - A value of false removes the class.
     *        - No value will toggle the fluid class.
     *
     * @return - The value of fluid when getting.
     *         - `undefined` when setting.
     */
    fluid(bool: boolean): void;

    fluid(): boolean;

    /**
     * Get object for cached values.
     *
     * @return get the current object cache
     */
    getCache(): any;

    /**
     * Gets available media playback quality metrics as specified by the W3C's Media
     * Playback Quality API.
     *
     * @see [Spec]{@link https://wicg.github.io/media-playback-quality}
     *
     * @return An object with supported media playback quality metrics or undefined if there
     *         is no tech or the tech does not support it.
     */
    getVideoPlaybackQuality(): any;

    /**
     * Get the value of `ended` from the media element. `ended` indicates whether
     * the media has reached the end or not.
     *
     * @return - The value of `ended` from the media element.
     *         - True indicates that the media has ended.
     *         - False indicates that the media has not ended.
     *
     * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-ended}
     */
    ended(): boolean;

    /**
     * When fullscreen isn't supported we can stretch the
     * video container to as wide as the browser will let us.
     *
     * @fires Player#enterFullWindow
     */
    enterFullWindow(): void;

    /**
     * Set or get the current MediaError
     *
     * @fires Player#error
     *
     * @param [err]
     *         A MediaError or a string/number to be turned
     *         into a MediaError
     *
     * @return The current MediaError when getting (or null)
     */
    error(err: MediaError | string | number | null): void;

    error(): MediaError | null;

    /**
     * Return the video to its normal size after having been in full screen mode
     *
     * @fires Player#fullscreenchange //noinspection JSUnresolvedVariable
     */
    exitFullscreen(): videojs.Player;

    /**
     * Exit full window
     *
     * @fires Player#exitFullWindow
     */
    exitFullWindow(): void;

    /**
     * Get a clone of the current Player~MediaObject for this player.
     * If the loadMedia method has not been used, will attempt to return a Player~MediaObject based on the current state of the player.
     */
    getMedia(): videojs.Player.MediaObject;

    /**
     * Reports whether or not a player has a plugin available.
     *
     * This does not report whether or not the plugin has ever been initialized
     * on this player. For that, [usingPlugin]{@link Player#usingPlugin}.
     *
     * @param name
     *         The name of a plugin.
     *
     * @return Whether or not this player has the requested plugin available.
     */
    hasPlugin(name: string): boolean;

    /**
     * Add/remove the vjs-has-started class
     *
     * @fires Player#firstplay
     *
     * @param request
     *        - true: adds the class
     *        - false: remove the class
     *
     * @return the boolean value of hasStarted_
     */
    hasStarted(request: boolean): void;

    hasStarted(): boolean;

    /**
     * A getter/setter for the `Player`'s height. Returns the player's configured value.
     * To get the current height use `currentheight()`.
     *
     * @param [value]
     *        The value to set the `Player`'s heigth to.
     *
     * @return The current height of the `Player` when getting.
     */
    height(value: number): void;

    height(): number;

    /**
     * Gets or sets the audio flag
     *
     * @param bool
     *        - true signals that this is an audio player
     *        - false signals that this is not an audio player
     *
     * @return The current value of isAudio when getting
     */
    isAudio(bool: boolean): void;

    isAudio(): boolean;

    /**
     * Check if the player is in fullscreen mode or tell the player that it
     * is or is not in fullscreen mode.
     *
     * > NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
     * property and instead document.fullscreenElement is used. But isFullscreen is
     * still a valuable property for internal player workings.
     *
     * @param [isFS]
     *         Set the players current fullscreen state
     *
     * @return - true if fullscreen is on and getting
     *         - false if fullscreen is off and getting
     */
    isFullscreen(isFS: boolean): void;

    isFullscreen(): boolean;

    /**
     * The player's language code
     * NOTE: The language should be set in the player options if you want the
     * the controls to be built with a specific language. Changing the language
     * later will not update controls text.
     *
     * @param [code]
     *        the language code to set the player to
     *
     * @return The current language code when getting
     */
    language(code: string): void;

    language(): string;

    /**
     * Get the player's language dictionary
     * Merge every time, because a newly added plugin might call videojs.addLanguage() at any time
     * Languages specified directly in the player options have precedence
     *
     * @return An array of of supported languages
     */
    languages(): string[];

    languageSwitch(options: any): void;

    /**
     * Begin loading the src data.
     */
    load(): void;

    /**
     * Populate the player using a MediaObject.
     */
    loadMedia(media: videojs.Player.MediaObject, ready: () => any): void;

    /**
     * Get or set the loop attribute on the video element.
     *
     * @param [value]
     *        - true means that we should loop the video
     *        - false means that we should not loop the video
     *
     * @return The current value of loop when getting
     */
    loop(value: boolean): void;

    loop(): boolean;

    /**
     * Get the current muted state, or turn mute on or off
     *
     * @param [muted]
     *        - true to mute
     *        - false to unmute
     *
     * @return - true if mute is on and getting
     *         - false if mute is off and getting
     */
    muted(muted: boolean): void;

    muted(): boolean;

    /**
     * Returns the current state of network activity for the element
     *
     * @return The current network state
     */
    networkState(): videojs.NetworkState;

    /**
     * Pause the video playback
     * @check
     * @return A reference to the player object this function was called on
     */
    pause(): videojs.Player;

    /**
     * Check if the player is paused or has yet to play
     *
     * @return - false: if the media is currently playing
     *         - true: if media is not currently playing
     */
    paused(): boolean;

    /**
     * Attempt to begin playback at the first opportunity.
     * @check
     * @return Returns a `Promise` only if the browser returns one and the player
     *         is ready to begin playback. For some browsers and all non-ready
     *         situations, this will return `undefined`.
     */
    play(): Promise<void> | undefined;

    /**
     * Gets or sets the current playback rate. A playback rate of
     * 1.0 represents normal speed and 0.5 would indicate half-speed
     * playback, for instance.
     *
     * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-playbackrate
     *
     * @param [rate]
     *       New playback rate to set.
     *
     * @return The current playback rate when getting or 1.0
     */
    playbackRate(rate: number): void;

    playbackRate(): number;

    /**
     * Get a TimeRange object representing the current ranges of time that the user
     * has played.
     * @check
     * @return A time range object that represents all the increments of time that have
     *         been played.
     */
    played(): any;

    /**
     * Set or unset the playsinline attribute.
     * Playsinline tells the browser that non-fullscreen playback is preferred.
     *
     * @param [value]
     *        - true means that we should try to play inline by default
     *        - false means that we should use the browser's default playback mode,
     *          which in most cases is inline. iOS Safari is a notable exception
     *          and plays fullscreen by default.
     *
     * @return - the current value of playsinline
     *         - the player when setting
     *
     * @see [Spec]{@link https://html.spec.whatwg.org/#attr-video-playsinline}
     */
    playsinline(value: boolean): videojs.Player;

    playsinline(): string;

    /**
     * Get or set the poster image source url
     *
     * @fires Player#posterchange
     *
     * @param [src]
     *        Poster image source URL
     *
     * @return The current value of poster when getting
     */
    poster(src: string): void;

    poster(): string;

    /**
     * Get or set the preload attribute
     *
     * @param [value]
     *        - true means that we should preload
     *        - false means that we should not preload
     *
     * @return The preload attribute value when getting
     */
    preload(value?: boolean): string;

    /**
     * Returns a value that expresses the current state of the element
     * with respect to rendering the current playback position.
     */
    readyState(): videojs.ReadyState;

    /**
     * Calculates how much time is left in the video. Not part
     * of the native video API.
     *
     * @return The time remaining in seconds
     */
    remainingTime(): number;

    /**
     * A remaining time function that is intented to be used when
     * the time is to be displayed directly to the user.
     *
     * @return The rounded time remaining in seconds
     */
    remainingTimeDisplay(): number;

    /**
     * Remove a remote {@link TextTrack} from the respective
     * {@link TextTrackList} and {@link HtmlTrackElementList}.
     *
     * @param track
     *        Remote {@link TextTrack} to remove
     *
     * @return does not return anything
     */
    removeRemoteTextTrack(track: HTMLTrackElement): void;

    /**
     * Increase the size of the video to full screen
     * In some browsers, full screen is not supported natively, so it enters
     * "full window mode", where the video fills the browser window.
     * In browsers and devices that support native full screen, sometimes the
     * browser's default controls will be shown, and not the Video.js custom skin.
     * This includes most mobile devices (iOS, Android) and older versions of
     * Safari.
     *
     * @fires Player#fullscreenchange
     */
    requestFullscreen(): videojs.Player;

    /**
     * Report user activity
     *
     * @param event
     *        Event object
     */
    reportUserActivity(event: any): void;

    /**
     * Reset the player. Loads the first tech in the techOrder,
     * and calls `reset` on the tech`.
     */
    reset(): void;

    /**
     * Get or set a flag indicating whether or not this player should adjust its
     * UI based on its dimensions.
     *
     * @param [value] Should be `true` if the player should adjust its UI based
     * on its dimensions; otherwise, should be `false`.
     *
     * @return Will be `true` if this player should adjust its UI based on its
     * dimensions; otherwise, will be `false`.
     */
    responsive(value: boolean): void;

    responsive(): boolean;

    /**
     * Returns whether or not the player is in the "seeking" state.
     *
     * @return boolean True if the player is in the seeking state, false if not.
     */
    seeking(): boolean;

    /**
     * Returns the TimeRanges of the media that are currently available for seeking to.
     *
     * @return TimeRanges Returns the TimeRanges of the media that are currently available for seeking to.
     */
    seekable(): TimeRanges;

    /**
     * Select source based on tech-order or source-order
     * Uses source-order selection if `options.sourceOrder` is truthy. Otherwise,
     * defaults to tech-order selection
     *
     * @param sources
     *        The sources for a media asset
     *
     * @return Object of source and tech order or false
     */
    selectSource(sources: any[]): any;

    /**
     * Returns whether or not the user is "scrubbing". Scrubbing is
     * when the user has clicked the progress bar handle and is
     * dragging it along the progress bar.
     *
     * @param [isScrubbing]
     *        whether the user is or is not scrubbing
     *
     * @return The value of scrubbing when getting
     */
    scrubbing(isScrubbing: boolean): void;

    scrubbing(): boolean;

    /**
     * Get or set the video source.
     *
     * @param [source]
     *        A SourceObject, an array of SourceObjects, or a string referencing
     *        a URL to a media source. It is _highly recommended_ that an object
     *        or array of objects is used here, so that source selection
     *        algorithms can take the `type` into account.
     *
     *        If not provided, this method acts as a getter.
     *
     * @return If the `source` argument is missing, returns the current source
     *         URL. Otherwise, returns nothing/undefined.
     */
    src(source: string | videojs.Tech.SourceObject | videojs.Tech.SourceObject[]): void;

    src(): string;

    /**
     * Check if current tech can support native fullscreen
     * (e.g. with built in controls like iOS, so not our flash swf)
     *
     * @return if native fullscreen is supported
     */
    supportsFullScreen(): boolean;

    /**
     * Return a reference to the current {@link Tech}.
     * It will print a warning by default about the danger of using the tech directly
     * but any argument that is passed in will silence the warning.
     *
     * @param [safety]
     *        Anything passed in to silence the warning
     *
     * @return The Tech
     */
    tech(safety?: any): videojs.Tech;

    /**
     * returns a JavaScript object reperesenting the current track
     * information. **DOES not return it as JSON**
     *
     * @return Object representing the current of track info
     */
    toJSON(): any;

    /**
     * Get/set if user is active
     *
     * @fires Player#useractive
     * @fires Player#userinactive
     *
     * @param [bool]
     *        - true if the user is active
     *        - false if the user is inactive
     *
     * @return The current value of userActive when getting
     */
    userActive(bool: boolean): void;

    userActive(): boolean;

    /**
     * Toggle native controls on/off. Native controls are the controls built into
     * devices (e.g. default iPhone controls), Flash, or other techs
     * (e.g. Vimeo Controls)
     * **This should only be set by the current tech, because only the tech knows
     * if it can support native controls**
     *
     * @fires Player#usingnativecontrols
     * @fires Player#usingcustomcontrols
     *
     * @param [bool]
     *        - true to turn native controls on
     *        - false to turn native controls off
     *
     * @return The current value of native controls when getting
     */
    usingNativeControls(bool: boolean): void;

    usingNativeControls(): boolean;

    /**
     * Reports whether or not a player is using a plugin by name.
     *
     * For basic plugins, this only reports whether the plugin has _ever_ been
     * initialized on this player.
     *
     * @param name
     *         The name of a plugin.
     *
     * @return Whether or not this player is using the requested plugin.
     */
    usingPlugin(name: string): boolean;

    /**
     * Get video height
     *
     * @return current video height
     */
    videoHeight(): number;

    /**
     * Get video width
     *
     * @return current video width
     */
    videoWidth(): number;

    /**
     * Get or set the current volume of the media
     *
     * @param [percentAsDecimal]
     *         The new volume as a decimal percent:
     *         - 0 is muted/0%/off
     *         - 1.0 is 100%/full
     *         - 0.5 is half volume or 50%
     *
     * @return The current volume as a percent when getting
     */
    volume(percentAsDecimal: number): videojs.TimeRange;

    volume(): number;

    /**
     * A getter/setter for the `Player`'s width. Returns the player's configured value.
     * To get the current width use `currentWidth()`.
     *
     * @param [value]
     *        The value to set the `Player`'s width to.
     *
     * @return The current width of the `Player` when getting.
     */
    width(value: number): void;

    width(): number;
}

export interface VideoJsPlayerOptions extends videojs.ComponentOptions {
    aspectRatio?: string;
    autoplay?: boolean | string;
    bigPlayButton?: boolean;
    controlBar?: videojs.ControlBarOptions | false;
    textTrackSettings?: videojs.TextTrackSettingsOptions;
    controls?: boolean;
    defaultVolume?: number;
    fluid?: boolean;
    height?: number;
    html5?: any;
    inactivityTimeout?: number;
    language?: string;
    languages?: { [code: string]: videojs.LanguageTranslations };
    liveui?: boolean;
    loop?: boolean;
    muted?: boolean;
    nativeControlsForTouch?: boolean;
    notSupportedMessage?: string;
    playbackRates?: number[];
    plugins?: Partial<VideoJsPlayerPluginOptions>;
    poster?: string;
    preload?: string;
    responsive?: boolean;
    sourceOrder?: boolean;
    sources?: videojs.Tech.SourceObject[];
    src?: string;
    techOrder?: string[];
    tracks?: videojs.TextTrackOptions[];
    userActions?: videojs.UserActions;
    width?: number;
}

export interface VideoJsPlayerPluginOptions {
    [pluginName: string]: any;
}
