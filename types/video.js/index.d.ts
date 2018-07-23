// Type definitions for Video.js 7.0
// Project: https://github.com/videojs/video.js
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 Simon Clériot <https://github.com/scleriot>
//                 Sean Bennett <https://github.com/SWBennett06>
//                 Christoph Wagner <https://github.com/IgelCampus>
//                 Gio Freitas <https://github.com/giofreitas>
//                 Grzegorz Błaszczyk <https://github.com/gjanblaszczyk>
//                 Stéphane Roucheray <https://github.com/sroucheray>
//                 Adam Eisenreich <https://github.com/AkxeOne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// The Video.js API allows you to interact with the video through
// Javascript, whether the browser is playing the video through HTML5
// video, Flash, or any other supported playback technologies.

declare module 'video.js' {
	export default vjsObj;
}

declare const vjsObj: videojs.Static;

declare namespace videojs {
	interface Static {
		/**
		 * Doubles as the main function for users to create a player instance and also
		 * the main library object.
		 * The `videojs` function can be used to initialize or retrieve a player.
		 *
		 * param {string|Element} id
		 *        Video element or video element ID
		 *
		 * param {Object} [options]
		 *        Optional options object for config/settings
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        Optional ready callback
		 *
		 * return {Player}
		 *         A player instance
		 */
		(id: any, options?: Player.Options, ready?: () => void): Player;

		/**
		 * Adding languages so that they're available to all players.
		 * Example: `addLanguage('es', { 'Hello': 'Hola' });`
		 *
		 * param {string} code
		 *        The language code or dictionary property
		 *
		 * param {Object} data
		 *        The data values to be translated
		 *
		 * return {Object}
		 *         The resulting language dictionary object
		 */
		addLanguage(code: string, data: LanguageTranslations): LanguageTranslations;

		/**
		 * export the AudioTrack class so that source handlers can create
		 * AudioTracks and then add them to the players AudioTrackList
		 *
		 * borrows AudioTrack as AudioTrack
		 */
		AudioTrack: AudioTrack;

		/**
		 * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
		 * It also stores a unique id on the function so it can be easily removed from events.
		 *
		 * param {Mixed} context
		 *        The object to bind as scope.
		 *
		 * param {Function} fn
		 *        The function to be bound to a scope.
		 *
		 * param {number} [uid]
		 *        An optional unique ID for the function to be set
		 *
		 * return {Function}
		 *         The new function that will be bound into the context given
		 */
		bind<F extends (() => any)>(context: any, fn: F, uid?: number): F;

		/**
		 * Should create a fake `TimeRange` object which mimics an HTML5 time range instance.
		 *
		 * param {number|Array} start
		 *        The start of a single range or an array of ranges
		 *
		 * param {number} end
		 *        The end of a single range.
		 */
		createTimeRanges(start?: number | TimeRange[], end?: number): TimeRange;

		/**
		 * A suite of browser and device tests from {browser}.
		 *
		 * type {Object}
		 */
		browser: Browser;

		dom: Dom;

		/**
		 * Event target class.
		 *
		 * borrows EventTarget as EventTarget
		 */
		EventTarget: typeof EventTarget;

		/**
		 * Function for subclassing using the same inheritance that
		 * videojs uses internally
		 *
		 * static
		 * const
		 *
		 * param {Object} superClass
		 *        The class to inherit from
		 *
		 * param {Object} [subClassMethods={}]
		 *        The class to inherit to
		 *
		 * return {Object}
		 *         The new object with subClassMethods that inherited superClass.
		 */
		extends(superClass: any, subClassMethods: any): any;

		/**
		 * Format seconds as a time string, H:MM:SS or M:SS. Supplying a guide (in seconds)
		 * will force a number of leading zeros to cover the length of the guide.
		 *
		 * param {number} seconds
		 *        Number of seconds to be turned into a string
		 *
		 * param {number} guide
		 *        Number (in seconds) to model the string after
		 *
		 * return {string}
		 *         Time formatted as H:MM:SS or M:SS
		 */
		formatTime(seconds: number, guide: number): string;

		/**
		 * Returns an array of all current players.
		 *
		 * return {Array}
		 *         An array of all players. The array will be in the order that
		 *         `Object.keys` provides, which could potentially vary between
		 *         JavaScript engines.
		 *
		 */
		getAllPlayers(): Player[];

		/**
		 * Get a component class object by name
		 *
		 * borrows Component.getComponent as getComponent
		 */
		getComponent: typeof Component.getComponent;

		/**
		 * Get a single player based on an ID or DOM element.
		 *
		 * This is useful if you want to check if an element or ID has an associated
		 * Video.js player, but not create one if it doesn't.
		 *
		 * param   {string|Element} id
		 *          An HTML element - `<video>`, `<audio>`, or `<video-js>` -
		 *          or a string matching the `id` of such an element.
		 *
		 * returns {Player|undefined}
		 *          A player instance or `undefined` if there is no player instance
		 *          matching the argument.
		 */
		getPlayer(id: string): Player;

		/**
		 * Get an object with the currently created players, keyed by player ID
		 *
		 * return {Object}
		 *         The created players
		 */
		getPlayers(): Player;

		/**
		 * Gets a plugin by name if it exists.
		 *
		 * param  {string} name
		 *         The name of a plugin.
		 *
		 * return {Function|undefined}
		 *         The plugin (or `undefined`).
		 */
		getPlugin: typeof Plugin.getPlugin;

		/**
		 * Gets an object containing multiple Video.js plugins.
		 *
		 * param  {Array} [names]
		 *         If provided, should be an array of plugin names. Defaults to _all_
		 *         plugin names.
		 *
		 * return {Object|undefined}
		 *         An object containing plugin(s) associated with their name(s) or
		 *         `undefined` if no matching plugins exist).
		 */
		getPlugins: typeof Plugin.getPlugins;

		/**
		 * Gets a plugin's version, if available
		 *
		 * param  {string} name
		 *         The name of a plugin.
		 *
		 * return {string}
		 *         The plugin's version or an empty string.
		 */
		getPluginVersion: typeof Plugin.getPluginVersion;

		/**
		 * Get a Tech class object by name
		 *
		 * borrows Tech.getTech as getTech
		 */
		getTech: typeof Tech.getTech;

		/**
		 * Add a function hook to a specific videojs lifecycle.
		 *
		 * param {string} type
		 *        the lifecycle to hook the function to.
		 *
		 * param {Function|Function[]} fn
		 *        The function or array of functions to attach.
		 */
		hook(type: 'setup', fn: Hook.Setup | Hook.Setup[]): undefined;
		hook(type: 'beforesetup', fn: Hook.BeforeSetup | Hook.BeforeSetup[]): undefined;

		/**
		 * Add a function hook that will only run once to a specific videojs lifecycle.
		 *
		 * param {string} type
		 *        the lifecycle to hook the function to.
		 *
		 * param {Function|Function[]} fn
		 *        The function or array of functions to attach.
		 */
		hookOnce(type: string, fn?: (() => any) | Array<() => any>): undefined;

		/**
		 * Get a list of hooks for a specific lifecycle
		 * function hooks
		 *
		 * param {string} type
		 *        the lifecycle to get hooks from
		 *
		 * param {Function|Function[]} [fn]
		 *        Optionally add a hook (or hooks) to the lifecycle that your are getting.
		 *
		 * return {Array}
		 *         an array of hooks, or an empty array if there are none.
		 */
		hooks(type: string, fn?: (() => any) | Array<() => any>): undefined;

		/**
		 * Returns whether the url passed is a cross domain request or not.
		 *
		 * param {string} url
		 *        The url to check.
		 *
		 * return {boolean}
		 *         Whether it is a cross domain request or not.
		 */
		isCrossOrigin(url: string): boolean;

		/**
		 * An Object that contains lifecycle hooks as keys which point to an array
		 * of functions that are run when a lifecycle is triggered
		 */
		hooks_: {[type: string]: (() => any)};

		/**
		 * Log messages
		 *
		 * borrows log:log as log
		 */
		log: Log;

		/**
		 * Deep-merge one or more options objects, recursively merging **only** plain
		 * object properties.
		 *
		 * param   {Object[]} sources
		 *          One or more objects to merge into a new object.
		 *
		 * returns {Object}
		 *          A new object that is the merged result of all sources.
		 */
		mergeOptions< A, B, C, D, E, F >(option: A, option2?: B, option3?: C, option4?: D, option5?: E, option6?: F): A & B & C & D & E & F;

		/**
		 * Resolve and parse the elements of a URL.
		 *
		 * param  {String} url
		 *         The url to parse
		 *
		 * return {url:URLObject}
		 *         An object of url details
		 */
		parseUrl(url: string): url.URLObject;

		/**
		 * An object that can be returned by a middleware to signify
		 * that the middleware is being terminated.
		 *
		 * type {object}
		 * memberof {videojs}
		 * property {object} middleware.TERMINATOR
		 */
		middleware: {TERMINATOR: {}};

		/**
		 * Removes event listeners from an element
		 *
		 * param {Element|Object} elem
		 *        Object to remove listeners from.
		 *
		 * param {string|string[]} [type]
		 *        Type of listener to remove. Don't include to remove all events from element.
		 *
		 * param {EventTarget~EventListener} [fn]
		 *        Specific listener to remove. Don't include to remove listeners for an event
		 *        type.
		 */
		off(elem: Element, type: string | string, fn: EventTarget.EventListener): undefined;

		/**
		 * Add an event listener to element
		 * It stores the handler function in a separate cache object
		 * and adds a generic handler to the element's event,
		 * along with a unique id (guid) to the element.
		 *
		 * param {Element|Object} elem
		 *        Element or object to bind listeners to
		 *
		 * param {string|string[]} type
		 *        Type of event to bind to.
		 *
		 * param {EventTarget~EventListener} fn
		 *        Event listener.
		 */
		on(elem: Element, type: string | string[], fn: EventTarget.EventListener): undefined;

		/**
		 * Trigger a listener only once for an event
		 *
		 * param {Element|Object} elem
		 *        Element or object to bind to.
		 *
		 * param {string|string[]} type
		 *        Name/type of event
		 *
		 * param {Event~EventListener} fn
		 *        Event Listener function
		 */
		one(elem: Element, type: string | string[], fn: EventTarget.EventListener): undefined;

		/**
		 * The global options object. These are the settings that take effect
		 * if no overrides are specified when the player is created.
		 *
		 * type {Object}
		 */
		options: Player.Options;

		/**
		 * Deprecated method to register a plugin with Video.js
		 *
		 * @deprecated
		 *        plugin() is deprecated; use registerPlugin() instead
		 *
		 * param {string} name
		 *        The plugin name
		 *
		 * param {Plugin|Function} plugin
		 *         The plugin sub-class or function
		 */
		plugin: typeof Plugin.registerPlugin;

		/**
		 * Register a component so it can referred to by name. Used when adding to other
		 * components, either through addChild `component.addChild('myComponent')` or through
		 * default children options  `{ children: ['myComponent'] }`.
		 *
		 * > NOTE: You could also just initialize the component before adding.
		 * `component.addChild(new MyComponent());`
		 *
		 * param {string} name
		 *        The class name of the component
		 *
		 * param {Component} comp
		 *        The component class
		 *
		 * return {Component}
		 *         The newly registered component
		 */
		registerComponent: typeof Component.registerComponent;

		/**
		 * Register a Video.js plugin.
		 *
		 * borrows plugin:registerPlugin as registerPlugin
		 * method registerPlugin
		 *
		 * param  {string} name
		 *         The name of the plugin to be registered. Must be a string and
		 *         must not match an existing plugin or a method on the `Player`
		 *         prototype.
		 *
		 * param  {Function} plugin
		 *         A sub-class of `Plugin` or a function for basic plugins.
		 *
		 * return {Function}
		 *         For advanced plugins, a factory function for that plugin. For
		 *         basic plugins, a wrapper function that initializes the plugin.
		 */
		registerPlugin: typeof Plugin.registerPlugin;

		/**
		 * Register a Tech so it can referred to by name.
		 * This is used in the tech order for the player.
		 *
		 * borrows Tech.registerTech as registerTech
		 */
		registerTech: typeof Tech.registerTech;

		/**
		 * Resets formatTime to the default implementation.
		 */
		resetFormatTime(): undefined;

		/**
		 * Replaces the default formatTime implementation with a custom implementation.
		 *
		 * param {Function} customImplementation
		 *        A function which will be used in place of the default formatTime implementation.
		 *        Will receive the current time in seconds and the guide (in seconds) as arguments.
		 */
		setFormatTime(customImplementation: (seconds: number, guide: number) => string): undefined;

		/**
		 * Remove a hook from a specific videojs lifecycle.
		 *
		 * param {string} type
		 *        the lifecycle that the function hooked to
		 *
		 * param {Function} fn
		 *        The hooked function to remove
		 *
		 * return {boolean}
		 *         The function that was removed or undef
		 */
		removeHook(type: string, fn: (() => any)): boolean;

		/**
		 * TextTrack class
		 *
		 * borrows TextTrack as TextTrack
		 */
		TextTrack: typeof TextTrack;

		/**
		 * Trigger an event for an element
		 *
		 * param {Element|Object} elem
		 *        Element to trigger an event on
		 *
		 * param {EventTarget~Event|string} event
		 *        A string (the type) or an event object with a type attribute
		 *
		 * param {Object} [hash]
		 *        data hash to pass along with the event
		 *
		 * return {boolean|undefined}
		 *         - Returns the opposite of `defaultPrevented` if default was prevented
		 *         - Otherwise returns undefined
		 */
		trigger(elem: Element, event: EventTarget.Event | string, hash?: any): boolean | undefined;

		/**
		 * Whether or not the browser supports touch events. Included for backward
		 * compatibility with 4.x, but deprecated. Use `browser.TOUCH_ENABLED`
		 * instead going forward.
		 *
		 * @deprecated since version 5.0
		 * type {boolean}
		 */
		TOUCH_ENABLED: boolean;

		/**
		 * Register a middleware to a source type.
		 *
		 * param {String} type A string representing a MIME type.
		 * param {function(player):object} middleware A middleware factory that takes a player.
		 */
		use(type: string, middleware: (player: Player) => Middleware): undefined;

		/**
		 * Current software version. Follows semver.
		 *
		 * type {string}
		 */
		VERSION: string;

		/**
		 * export the VideoTrack class so that source handlers can create
		 * VideoTracks and then add them to the players VideoTrackList
		 *
		 * borrows VideoTrack as VideoTrack
		 */
		VideoTrack: typeof VideoTrack;

		/**
		 * A cross-browser XMLHttpRequest wrapper. Here's a simple example:
		 *
		 * param {Object} options
		 *        settings for the request.
		 *
		 * return {XMLHttpRequest|XDomainRequest}
		 *         The request object.
		 *
		 * @see https://github.com/Raynos/xhr
		 */
		xhr: XhrObject;
	}

	namespace Hook {
		type BeforeSetup = (element: HTMLVideoElement, options: any) => any;

		type Setup = (player: Player) => void;
	}

	/**
	 * A representation of a single `AudioTrack`. If it is part of an {AudioTrackList}
	 * only one `AudioTrack` in the list will be enabled at a time.
	 *
	 * @see [Spec]{https://html.spec.whatwg.org/multipage/embedded-content.html#audiotrack}
	 * extends Track
	 */
	const AudioTrack: {
		prototype: Track;

		/**
		 * Create an instance of this class.
		 *
		 * param {Object} [options={}]
		 *        Object of option names and values
		 *
		 * param {AudioTrack~Kind} [options.kind='']
		 *        A valid audio track kind
		 *
		 * param {string} [options.id='vjs_track_' + Guid.newGUID()]
		 *        A unique id for this AudioTrack.
		 *
		 * param {string} [options.label='']
		 *        The menu label for this track.
		 *
		 * param {string} [options.language='']
		 *        A valid two character language code.
		 *
		 * param {boolean} [options.enabled]
		 *        If this track is the one that is currently playing. If this track is part of
		 *        an {AudioTrackList}, only one {AudioTrack} will be enabled.
		 */
		new (options?: AudioTrack.Options): Track;
	};
	namespace AudioTrack {
		/**
		 * Object of option names and values
		 *
		 * param {AudioTrack~Kind} [options.kind='']
		 *        A valid audio track kind
		 *
		 * param {string} [options.id='vjs_track_' + Guid.newGUID()]
		 *        A unique id for this AudioTrack.
		 *
		 * param {string} [options.label='']
		 *        The menu label for this track.
		 *
		 * param {string} [options.language='']
		 *        A valid two character language code.
		 *
		 * param {boolean} [options.enabled]
		 *        If this track is the one that is currently playing. If this track is part of
		 *        an {AudioTrackList}, only one {AudioTrack} will be enabled.
		 */
		interface Options {
			kind?: Kind;
			id?: string;
			label?: string;
			language?: string;
			enabled?: boolean;
		}

		/**
		 * All possible `AudioTrackKind`s
		 *
		 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-audiotrack-kind
		 * typedef AudioTrack~Kind
		 * enum
		 */
		type Kind = 'alternative' | 'descriptions' | 'main' | 'main-desc' | 'translation' | 'commentary';
	}
	/**
	 * The base class for buttons that toggle specific {AudioTrack} types.
	 *
	 * extends TrackButton
	 */
	interface AudioTrackButton extends MenuButton {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Allow sub components to stack CSS class names for the wrapper element
		 *
		 * return {string}
		 *         The constructed wrapper DOM `className`
		 */
		buildWrapperCSSClass(): string;

		/**
		 * Create a menu item for each audio track
		 *
		 * param {AudioTrackMenuItem[]} [items=[]]
		 *        An array of existing menu items to use.
		 *
		 * return {AudioTrackMenuItem[]}
		 *         An array of menu items
		 */
		createItems(items?: AudioTrackMenuItem[]): AudioTrackMenuItem[];
	}
	const AudioTrackButton: {
		prototype: AudioTrackButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of player options.
		 */
		new(player: Player, options?: TrackButton.Options): AudioTrackButton;
	};

	/**
	 * An {AudioTrack} {MenuItem}
	 *
	 * extends MenuItem
	 */
	interface AudioTrackMenuItem extends MenuItem {
		/**
		 * Handle any {AudioTrack} change.
		 *
		 * param {EventTarget~Event} [event]
		 *        The {AudioTrackList#change} event that caused this to run.
		 *
		 * listens AudioTrackList#change
		 */
		handleTracksChange(event: EventTarget.Event): undefined;
	}
	const AudioTrackMenuItem: {
		prototype: AudioTrackMenuItem;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new(player: Player, options?: AudioTrackMenuItem.Options): AudioTrackMenuItem;
	};
	namespace AudioTrackMenuItem {
		interface Options extends MenuItem.Options {
			track?: AudioTrack;
		}
	}

	/**
	 * The initial play button that shows before the video has played. The hiding of the
	 * `BigPlayButton` get done via CSS and `Player` states.
	 *
	 * extends Button
	 */
	interface BigPlayButton extends Button {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object. Always returns 'vjs-big-play-button'.
		 */
		buildCSSClass(): string;

		/**
		 * This gets called when a `BigPlayButton` "clicked". See {ClickableComponent}
		 * for more detailed information on what a click can be.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 */
		handleClick(event: EventTarget.Event): undefined;

		/**
		 * Called when this BigPlayButton has focus and a key gets pressed down. By
		 * default it will call `this.handleClick` when the key is space or enter.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown` event that caused this function to be called.
		 *
		 * listens keydown
		 */
		handleKeyPress(event: EventTarget.Event): undefined;

		/**
		 * Called when this BigPlayButton gets mouse pressed down
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown` event that caused this function to be called.
		 *
		 * listens mousedown
		 */
		handleMouseDown(event: EventTarget.Event): undefined;
	}

	const BigPlayButton: {
		prototype: BigPlayButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param  {Player} player
		 *         The `Player` that this class should be attached to.
		 *
		 * param  {Object} [options]
		 *         The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): BigPlayButton;
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
	 *
	 * extends ClickableComponent
	 */
	interface Button extends ClickableComponent {
		options_: Component.Options;

		/**
		 * Create the `Button`s DOM element.
		 *
		 * param {string} [tag="button"]
		 *        The element's node type. This argument is IGNORED: no matter what
		 *        is passed, it will always create a `button` element.
		 *
		 * param {Object} [props={}]
		 *        An object of properties that should be set on the element.
		 *
		 * param {Object} [attributes={}]
		 *        An object of attributes that should be set on the element.
		 *
		 * return {Element}
		 *         The element that gets created.
		 */
		createEl(tag: string, props?: any, attributes?: any): HTMLButtonElement;

		/**
		 * Add a child `Component` inside of this `Button`.
		 *
		 * param {string|Component} child
		 *        The name or instance of a child to add.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of options that will get passed to children of
		 *        the child.
		 *
		 * return {Component}
		 *         The `Component` that gets added as a child. When using a string the
		 *         `Component` will get created by this process.
		 *
		 * @deprecated since version 5
		 */
		addChild(component: string, optionsopt?: any, indexopt?: number): Component;
		addChild(component: Element, optionsopt?: any, indexopt?: number): Element;
		addChild<T extends Component>(child: string| T, options?: any): T;

		/**
		 * Enable the `Button` element so that it can be activated or clicked. Use this with
		 * {Button#disable}.
		 */
		enable(): undefined;

		/**
		 * Disable the `Button` element so that it cannot be activated or clicked. Use this with
		 * {Button#enable}.
		 */
		disable(): undefined;

		/**
		 * This gets called when a `Button` has focus and `keydown` is triggered via a key
		 * press.
		 *
		 * param {EventTarget~Event} event
		 *        The event that caused this function to get called.
		 *
		 * listens keydown
		 */
		handleKeyPress(event: EventTarget.Event): undefined;
	}

	const Button: {
		prototype: Button;

		/**
		 * Creates an instance of this class.
		 *
		 * param  {Player} player
		 *         The `Player` that this class should be attached to.
		 *
		 * param  {Object} [options]
		 *         The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): Button;
	};
	/**
	 * The button component for toggling and selecting captions
	 *
	 * extends TextTrackButton
	 */
	interface CaptionsButton extends TextTrackButton {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Allow sub components to stack CSS class names for the wrapper element
		 *
		 * return {string}
		 *         The constructed wrapper DOM `className`
		 */
		buildWrapperCSSClass(): string;

		/**
		 * Create caption menu items
		 *
		 * return {CaptionSettingsMenuItem[]}
		 *         The array of current menu items.
		 */
		createItems(): CaptionSettingsMenuItem[];
	}

	const CaptionsButton: {
		prototype: CaptionsButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        The function to call when this function is ready.
		 */
		new (player: Player, options?: TrackButton.Options, ready?: Component.ReadyCallback): CaptionsButton;
	};

	/**
	 * The menu item for caption track settings menu
	 *
	 * extends TextTrackMenuItem
	 */
	interface CaptionSettingsMenuItem extends TextTrackMenuItem {
		/**
		 * This gets called when an `CaptionSettingsMenuItem` is "clicked". See
		 * {ClickableComponent} for more detailed information on what a click can be.
		 *
		 * param {EventTarget~Event} [event]
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 */
		handleClick(event: EventTarget.Event): undefined;
	}

	const CaptionsSettingsMenuItem: {
		prototype: CaptionSettingsMenuItem;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new(player: Player, options?: CaptionSettingsMenuItem.Options): CaptionSettingsMenuItem;
	};

	namespace CaptionSettingsMenuItem {
		interface Options extends TextTrackMenuItem.Options {
			kind: TextTrack.Kind;
		}
	}

	/**
	 * The button component for toggling and selecting chapters
	 * Chapters act much differently than other text tracks
	 * Cues are navigation vs. other tracks of alternative languages
	 *
	 * extends TextTrackButton
	 */
	interface ChaptersButton extends TextTrackButton {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Allow sub components to stack CSS class names for the wrapper element
		 *
		 * return {string}
		 *         The constructed wrapper DOM `className`
		 */
		buildWrapperCSSClass(): string;

		/**
		 * Create a menu item for each text track
		 *
		 * return {TextTrackMenuItem[]}
		 *         Array of menu items
		 */
		createItems(): TextTrackMenuItem[];

		/**
		 * Create menu from chapter track
		 *
		 * return {Menu}
		 *         New menu for the chapter buttons
		 */
		createMenu(): Menu;

		/**
		 * Find the track object that is currently in use by this ChaptersButton
		 *
		 * return {TextTrack|undefined}
		 *         The current track or undefined if none was found.
		 */
		findChaptersTrack(): TextTrack | undefined;

		/**
		 * Get the caption for the ChaptersButton based on the track label. This will also
		 * use the current tracks localized kind as a fallback if a label does not exist.
		 *
		 * return {string}
		 *         The tracks current label or the localized track kind.
		 */
		getMenuCaption(): string;

		/**
		 * Set the currently selected track for the chapters button.
		 *
		 * param {TextTrack} track
		 *        The new track to select. Nothing will change if this is the currently selected
		 *        track.
		 */
		setTrack(track: TextTrack): undefined;

		/**
		 * Update the menu based on the current state of its items.
		 *
		 * param {EventTarget~Event} [event]
		 *        An event that triggered this function to run.
		 *
		 * listens TextTrackList#addtrack
		 * listens TextTrackList#removetrack
		 * listens TextTrackList#change
		 */
		update(event?: EventTarget.Event): undefined;
	}

	const ChaptersButton: {
		prototype: ChaptersButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        The function to call when this function is ready.
		 */
		new (player: Player, options?: TrackButton.Options, ready?: Component.ReadyCallback): ChaptersButton;
	};

	/**
	 * The chapter track menu item
	 *
	 * extends MenuItem
	 */
	interface ChaptersTrackMenuItem extends MenuItem {
		track: TextTrack;

		cue: TextTrackCueList.TextTrackCue;

		/**
		 * This gets called when an `ChaptersTrackMenuItem` is "clicked". See
		 * {ClickableComponent} for more detailed information on what a click can be.
		 *
		 * param {EventTarget~Event} [event]
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 */
		handleClick(event: EventTarget.Event): undefined;

		/**
		 * Update chapter menu item
		 *
		 * param {EventTarget~Event} [event]
		 *        The `cuechange` event that caused this function to run.
		 *
		 * listens TextTrack#cuechange
		 */
		update(event: EventTarget.Event): undefined;
	}

	const ChaptersTrackMenuItem: {
		prototype: ChaptersTrackMenuItem;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: ChaptersTrackMenuItem.Options): ChaptersTrackMenuItem;
	};

	namespace ChaptersTrackMenuItem {
		interface Options extends MenuItem.Options {
			track: TextTrack;
			cue: TextTrackCueList.TextTrackCue;
		}
	}

	type Child = string | {
		name: string,
		children?: Child[]
	};

	/**
	 * Clickable Component which is clickable or keyboard actionable,
	 * but is not a native HTML button.
	 *
	 * extends Component
	 */
	interface ClickableComponent extends Component {
		options_: Component.Options;

		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Create the `Component`s DOM element.
		 *
		 * param {string} [tag=div]
		 *        The element's node type.
		 *
		 * param {Object} [props={}]
		 *        An object of properties that should be set on the element.
		 *
		 * param {Object} [attributes={}]
		 *        An object of attributes that should be set on the element.
		 *
		 * return {Element}
		 *         The element that gets created.
		 */
		createEl(tag: string, props?: any, attributes?: any): Element;

		/**
		 * Get the localize text to use for the controls on the `Component`.
		 *
		 * return {string}
		 *         - The control text when getting
		 */
		controlText(): string;

		/**
		 * Set the localize text to use for the controls on the `Component`.
		 *
		 * param {string} [text]
		 *        Control text for element.
		 *
		 * param {Element} [el=this.el()]
		 *        Element to set the title on.
		 */
		controlText(text: string, el?: Element): undefined;

		/**
		 * Create a control text element on this `Component`
		 *
		 * param {Element} [el]
		 *        Parent element for the control text.
		 *
		 * return {Element}
		 *         The control text element that gets created.
		 */
		createControlTextEl(el?: Element): Element;

		/**
		 * Disable this `Component`s element.
		 */
		disable(): undefined;

		/**
		 * Enable this `Component`s element.
		 */
		enable(): undefined;

		/**
		 * This gets called when a `ClickableComponent` gets:
		 * - Clicked (via the `click` event, listening starts in the constructor)
		 * - Tapped (via the `tap` event, listening starts in the constructor)
		 * - The following things happen in order:
		 *   1. {ClickableComponent#handleFocus} is called via a `focus` event on the
		 *      `ClickableComponent`.
		 *   2. {ClickableComponent#handleFocus} adds a listener for `keydown` on using
		 *      {ClickableComponent#handleKeyPress}.
		 *   3. `ClickableComponent` has not had a `blur` event (`blur` means that focus was lost). The user presses
		 *      the space or enter key.
		 *   4. {ClickableComponent#handleKeyPress} calls this function with the `keydown`
		 *      event as a parameter.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 * abstract
		 */
		handleClick(event: EventTarget.Event): undefined;

		/**
		 * This gets called when a `ClickableComponent` gains focus via a `focus` event.
		 * Turns on listening for `keydown` events. When they happen it
		 * calls `this.handleKeyPress`.
		 *
		 * param {EventTarget~Event} event
		 *        The `focus` event that caused this function to be called.
		 *
		 * listens focus
		 */
		handleFocus(event: EventTarget.Event): undefined;

		/**
		 * Called when this ClickableComponent has focus and a key gets pressed down. By
		 * default it will call `this.handleClick` when the key is space or enter.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown` event that caused this function to be called.
		 *
		 * listens keydown
		 */
		handleKeyPress(event: EventTarget.Event): undefined;

		/**
		 * Called when a `ClickableComponent` loses focus. Turns off the listener for
		 * `keydown` events. Which Stops `this.handleKeyPress` from getting called.
		 *
		 * param {EventTarget~Event} event
		 *        The `blur` event that caused this function to be called.
		 *
		 * listens blur
		 */
		handleBlur(event: EventTarget.Event): undefined;
	}

	const ClickableComponent: {
		prototype: ClickableComponent;

		/**
		 * Creates an instance of this class.
		 *
		 * param  {Player} player
		 *         The `Player` that this class should be attached to.
		 *
		 * param  {Object} [options]
		 *         The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): ClickableComponent;
	};

	/**
	 * The `CloseButton` is a `{Button}` that fires a `close` event when
	 * it gets clicked.
	 *
	 * extends Button
	 */
	interface CloseButton extends Button {
		options_: CloseButton.Options;

		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * This gets called when a `CloseButton` gets clicked. See
		 * {ClickableComponent#handleClick} for more information on when this will be
		 * triggered
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 * @fires CloseButton#close
		 */
		handleClick(event: EventTarget.Event): undefined;
	}

	const CloseButton: {
		prototype: CloseButton;

		/**
		 * Creates an instance of the this class.
		 *
		 * param  {Player} player
		 *         The `Player` that this class should be attached to.
		 *
		 * param  {CloseButton~Options} [options]
		 *         The key/value store of player options.
		 */
		new (player: Player, options?: CloseButton.Options): CloseButton;
	};

	namespace CloseButton {
		interface Options extends Component.Options {
			controlText?: string;
		}
	}

	/**
	 * Base class for all UI Components.
	 * Components are UI objects which represent both a javascript object and an element
	 * in the DOM. They can be children of other components, and can have
	 * children themselves.
	 *
	 * Components can also use methods from {EventTarget}
	 */
	interface Component extends EventedMixin {
		options_: Component.Options;

		player_: Player;

		children_: Component[];

		/**
		 * Find a single DOM element matching a `selector`. This can be within the `Component`s
		 * `contentEl()` or another custom context.
		 *
		 * param {string} selector
		 *        A valid CSS selector, which will be passed to `querySelector`.
		 *
		 * param {Element|string} [context=this.contentEl()]
		 *        A DOM element within which to query. Can also be a selector string in
		 *        which case the first matching element will get used as context. If
		 *        missing `this.contentEl()` gets used. If  `this.contentEl()` returns
		 *        nothing it falls back to `document`.
		 *
		 * return {Element|null}
		 *         the dom element that was found, or null
		 *
		 * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
		 */
		$(selector: string, context?: string | Element): Element;

		/**
		 * Finds all DOM element matching a `selector`. This can be within the `Component`s
		 * `contentEl()` or another custom context.
		 *
		 * param {string} selector
		 *        A valid CSS selector, which will be passed to `querySelectorAll`.
		 *
		 * param {Element|string} [context=this.contentEl()]
		 *        A DOM element within which to query. Can also be a selector string in
		 *        which case the first matching element will get used as context. If
		 *        missing `this.contentEl()` gets used. If  `this.contentEl()` returns
		 *        nothing it falls back to `document`.
		 *
		 * return {NodeList}
		 *         a list of dom elements that were found
		 *
		 * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
		 */
		$$(selector: string, context?: string | Element): NodeList;

		/**
		 * Add a child `Component` inside the current `Component`.
		 *
		 *
		 * param {string|Component} child
		 *        The name or instance of a child to add.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of options that will get passed to children of
		 *        the child.
		 *
		 * param {number} [index=this.children_.length]
		 *        The index to attempt to add a child into.
		 *
		 * return {Component}
		 *         The `Component` that gets added as a child. When using a string the
		 *         `Component` will get created by this process.
		 */
		addChild(component: string, optionsopt?: any, indexopt?: number): Component;
		addChild(component: Element, optionsopt?: any, indexopt?: number): Element;
		addChild<T extends Component>(child: string| T, options?: any, index?: number): T;

		/**
		 * Add a CSS class name to the `Component`s element.
		 *
		 * param {string} classToAdd
		 *        CSS class name to add
		 */
		addClass(classToAdd: string): undefined;

		/**
		 * Remove the focus from this component
		 */
		blur(): undefined;

		/**
		 * Builds the default DOM class name. Should be overriden by sub-components.
		 *
		 * return {string}
		 *         The DOM class name for this object.
		 *
		 * abstract
		 */
		buildCSSClass(): string;

		/**
		 * Cancels a queued callback passed to {Component#requestAnimationFrame}
		 * (rAF).
		 *
		 * If you queue an rAF callback via {Component#requestAnimationFrame},
		 * use this function instead of `window.cancelAnimationFrame`. If you don't,
		 * your dispose listener will not get cleaned up until {Component#dispose}!
		 *
		 * param {number} id
		 *        The rAF ID to clear. The return value of {Component#requestAnimationFrame}.
		 *
		 * return {number}
		 *         Returns the rAF ID that was cleared.
		 *
		 * @see [Similar to]{https://developer.mozilla.org/en-US/docs/Web/API/window/cancelAnimationFrame}
		 */
		cancelAnimationFrame(id: number): number;

		/**
		 * Get an array of all child components
		 *
		 * return {Array}
		 *         The children
		 */
		children(): Component[];

		/**
		 * Clears an interval that gets created via `window.setInterval` or
		 * {Component#setInterval}. If you set an inteval via {Component#setInterval}
		 * use this function instead of `window.clearInterval`. If you don't your dispose
		 * listener will not get cleaned up until {Component#dispose}!
		 *
		 * param {number} intervalId
		 *        The id of the interval to clear. The return value of
		 *        {Component#setInterval} or `window.setInterval`.
		 *
		 * return {number}
		 *         Returns the interval id that was cleared.
		 *
		 * @see [Similar to]{https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval}
		 */
		clearInterval(intervalId: number): number;

		/**
		 * Clears a timeout that gets created via `window.setTimeout` or
		 * {Component#setTimeout}. If you set a timeout via {Component#setTimeout}
		 * use this function instead of `window.clearTimout`. If you don't your dispose
		 * listener will not get cleaned up until {Component#dispose}!
		 *
		 * param {number} timeoutId
		 *        The id of the timeout to clear. The return value of
		 *        {Component#setTimeout} or `window.setTimeout`.
		 *
		 * return {number}
		 *         Returns the timeout id that was cleared.
		 *
		 * @see [Similar to]{https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
		 */
		clearTimeout(timeoutId: number): number;

		/**
		 * Return the `Component`s DOM element. This is where children get inserted.
		 * This will usually be the the same as the element returned in {Component#el}.
		 *
		 * return {Element}
		 *         The content element for this `Component`.
		 */
		contentEl(): Element;

		controlText(key: string): string;

		/**
		 * Create the `Component`s DOM element.
		 *
		 * param {string} [tagName]
		 *        Element's DOM node type. e.g. 'div'
		 *
		 * param {Object} [properties]
		 *        An object of properties that should be set.
		 *
		 * param {Object} [attributes]
		 *        An object of attributes that should be set.
		 *
		 * return {Element}
		 *         The element that gets created.
		 */
		createEl(tagName?: string, properties?: any, attributes?: any): Element;

		/**
		 * Get the width or the height of the `Component` elements computed style. Uses
		 * `window.getComputedStyle`.
		 *
		 * param {string} widthOrHeight
		 *        A string containing 'width' or 'height'. Whichever one you want to get.
		 *
		 * return {number}
		 *         The dimension that gets asked for or 0 if nothing was set
		 *         for that dimension.
		 */
		currentDimension(widthOrHeight: 'width'|'height'): number;

		/**
		 * Get an object that contains width and height values of the `Component`s
		 * computed style.
		 *
		 * return {Component~DimensionObject}
		 *         The dimensions of the components element
		 */
		currentDimensions(): Component.DimensionObject;

		/**
		 * Get the height of the `Component`s computed style. Uses `window.getComputedStyle`.
		 *
		 * return {number} height
		 *           The height of the `Component`s computed style.
		 */
		currentHeight(): number;

		/**
		 * Get the width of the `Component`s computed style. Uses `window.getComputedStyle`.
		 *
		 * return {number} width
		 *           The width of the `Component`s computed style.
		 */
		currentWidth(): number;

		/**
		 * Get or set width or height of the `Component` element. This is the shared code
		 * for the {Component#width} and {Component#height}.
		 *
		 * Things to know:
		 * - If the width or height in an number this will return the number postfixed with 'px'.
		 * - If the width/height is a percent this will return the percent postfixed with '%'
		 * - Hidden elements have a width of 0 with `window.getComputedStyle`. This function
		 *   defaults to the `Component`s `style.width` and falls back to `window.getComputedStyle`.
		 *   See [this]{http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/}
		 *   for more information
		 * - If you want the computed style of the component, use {Component#currentWidth}
		 *   and {{Component#currentHeight}
		 *
		 * @fires Component#componentresize
		 *
		 * param {string} widthOrHeight
		 *        'width' or 'height'
		 *
		 * param  {number|string} [num]
		 *         New dimension
		 *
		 * param  {boolean} [skipListeners]
		 *         Skip componentresize event trigger
		 *
		 * return {number}
		 *         The dimension when getting or 0 if unset
		 */
		dimension(widthOrHeight: 'width'|'height', num: string | number, skipListeners?: boolean): undefined;
		dimension(widthOrHeight: 'width'|'height'): number;

		/**
		 * Set both the width and height of the `Component` element at the same time.
		 *
		 * param  {number|string} width
		 *         Width to set the `Component`s element to.
		 *
		 * param  {number|string} height
		 *         Height to set the `Component`s element to.
		 */
		dimensions(width: string | number, height: string | number): undefined;

		/**
		 * Dispose of the `Component` and all child components.
		 *
		 * @fires Component#dispose
		 */
		dispose(): undefined;

		/**
		 * Get the `Component`s DOM element
		 *
		 * return {Element}
		 *         The DOM element for this `Component`.
		 */
		el(): Element;

		/**
		 * Emit a 'tap' events when touch event support gets detected. This gets used to
		 * support toggling the controls through a tap on the video. They get enabled
		 * because every sub-component would have extra overhead otherwise.
		 *
		 * private
		 * @fires Component#tap
		 * listens Component#touchstart
		 * listens Component#touchmove
		 * listens Component#touchleave
		 * listens Component#touchcancel
		 * listens Component#touchend
		 */
		emitTapEvents(): undefined;

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
		 * listens Component#touchstart
		 * listens Component#touchmove
		 * listens Component#touchend
		 * listens Component#touchcancel
		 */
		enableTouchActivity(): undefined;

		/**
		 * Set the focus to this component
		 */
		focus(): undefined;

		/**
		 * Get the value of an attribute on the `Component`s element.
		 *
		 * param {string} attribute
		 *        Name of the attribute to get the value from.
		 *
		 * return {string|null}
		 *         - The value of the attribute that was asked for.
		 *         - Can be an empty string on some browsers if the attribute does not exist
		 *           or has no value
		 *         - Most browsers will return null if the attibute does not exist or has
		 *           no value.
		 *
		 * @see [DOM API]{https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute}
		 */
		getAttribute(attribute: string): string | null;

		/**
		 * Returns the child `Component` with the given `name`.
		 *
		 * param {string} name
		 *        The name of the child `Component` to get.
		 *
		 * return {Component|undefined}
		 *         The child `Component` with the given `name` or undefined.
		 */
		getChild(name: string): Component | undefined;

		/**
		 * Returns the child `Component` with the given `id`.
		 *
		 * param {string} id
		 *        The id of the child `Component` to get.
		 *
		 * return {Component|undefined}
		 *         The child `Component` with the given `id` or undefined.
		 */
		getChildById(id: string): Component | undefined;

		/**
		 * Check if a component's element has a CSS class name.
		 *
		 * param {string} classToCheck
		 *        CSS class name to check.
		 *
		 * return {boolean}
		 *         - True if the `Component` has the class.
		 *         - False if the `Component` does not have the class`
		 */
		hasClass(classToCheck: string): boolean;

		/**
		 * Get or set the height of the component based upon the CSS styles.
		 * See {Component#dimension} for more detailed information.
		 *
		 * param {number|string} [num]
		 *        The height that you want to set postfixed with '%', 'px' or nothing.
		 *
		 * param {boolean} [skipListeners]
		 *        Skip the componentresize event trigger
		 *
		 * return {number|string}
		 *         The width when getting, zero if there is no width. Can be a string
		 *         postpixed with '%' or 'px'.
		 */
		height(num: number|string, skipListeners?: boolean): undefined;
		height(): number|string;

		/**
		 * Hide the `Component`s element if it is currently showing by adding the
		 * 'vjs-hidden` class name to it.
		 */
		hide(): undefined;

		/**
		 * Get this `Component`s ID
		 *
		 * return {string}
		 *         The id of this `Component`
		 */
		id(): string;

		/**
		 * Add and initialize default child `Component`s based upon options.
		 */
		initChildren(): undefined;

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
		 * param {string} string
		 *        The string to localize and the key to lookup in the language files.
		 * param {string[]} [tokens]
		 *        If the current item has token replacements, provide the tokens here.
		 * param {string} [defaultValue]
		 *        Defaults to `string`. Can be a default value to use for token replacement
		 *        if the lookup key is needed to be separate.
		 *
		 * return {string}
		 *         The localized string or if no localization exists the english string.
		 */
		localize(string: string, tokens?: string[], defaultValue?: string): string;

		/**
		 * Lock a `Component`s element in its visible state by adding the 'vjs-lock-showing'
		 * class name to it. Used during fadeIn/fadeOut.
		 *
		 * private
		 */
		lockShowing(): undefined;

		/**
		 * Get the `Component`s name. The name gets used to reference the `Component`
		 * and is set during registration.
		 *
		 * return {string}
		 *         The name of this `Component`.
		 */
		name(): string;

		/**
		 * Deep merge of options objects with new options.
		 * > Note: When both `obj` and `options` contain properties whose values are objects.
		 *         The two properties get merged using {module:mergeOptions}
		 *
		 * param {Object} obj
		 *        The object that contains new options.
		 *
		 * return {Object}
		 *         A new object of `this.options_` and `obj` merged together.
		 *
		 * @deprecated since version 5
		 */
		options(obj: any): any;

		played(): TimeRanges;

		/**
		 * Return the {Player} that the `Component` has attached to.
		 *
		 * return {Player}
		 *         The player that this `Component` has attached to.
		 */
		player(): Player;

		/**
		 * Bind a listener to the component's ready state.
		 * Different from event listeners in that if the ready event has already happened
		 * it will trigger the function immediately.
		 *
		 * return {Component}
		 *         Returns itself; method can be chained.
		 */
		ready(callback: (this: Player) => void): this;

		/**
		 * Remove an attribute from the `Component`s element.
		 *
		 * param {string} attribute
		 *        Name of the attribute to remove.
		 *
		 * @see [DOM API]{https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute}
		 */
		removeAttribute(attribute: string): undefined;

		/**
		 * Remove a child `Component` from this `Component`s list of children. Also removes
		 * the child `Component`s element from this `Component`s element.
		 *
		 * param {Component} component
		 *        The child `Component` to remove.
		 */
		removeChild(component: Component): undefined;

		/**
		 * Remove a CSS class name from the `Component`s element.
		 *
		 * param {string} classToRemove
		 *        CSS class name to remove
		 */
		removeClass(classToRemove: string): undefined;

		/**
		 * Queues up a callback to be passed to requestAnimationFrame (rAF), but
		 * with a few extra bonuses:
		 *
		 * - Supports browsers that do not support rAF by falling back to
		 *   {Component#setTimeout}.
		 *
		 * - The callback is turned into a {Component~GenericCallback} (i.e.
		 *   bound to the component).
		 *
		 * - Automatic cancellation of the rAF callback is handled if the component
		 *   is disposed before it is called.
		 *
		 * param  {Component~GenericCallback} fn
		 *         A function that will be bound to this component and executed just
		 *         before the browser's next repaint.
		 *
		 * return {number}
		 *         Returns an rAF ID that gets used to identify the timeout. It can
		 *         also be used in {Component#cancelAnimationFrame} to cancel
		 *         the animation frame callback.
		 *
		 * listens Component#dispose
		 * @see [Similar to]{https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame}
		 */
		requestAnimationFrame(fn: Component.GenericCallback): number;

		/**
		 * Set the value of an attribute on the `Component`'s element
		 *
		 * param {string} attribute
		 *        Name of the attribute to set.
		 *
		 * param {string} value
		 *        Value to set the attribute to.
		 *
		 * @see [DOM API]{https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute}
		 */
		setAttribute(attribute: string, value: string): undefined;

		/**
		 * Creates a function that gets run every `x` milliseconds. This function is a wrapper
		 * around `window.setInterval`. There are a few reasons to use this one instead though.
		 * 1. It gets cleared via  {Component#clearInterval} when
		 *    {Component#dispose} gets called.
		 * 2. The function callback will be a {Component~GenericCallback}
		 *
		 * param {Component~GenericCallback} fn
		 *        The function to run every `x` seconds.
		 *
		 * param {number} interval
		 *        Execute the specified function every `x` milliseconds.
		 *
		 * return {number}
		 *         Returns an id that can be used to identify the interval. It can also be be used in
		 *         {Component#clearInterval} to clear the interval.
		 *
		 * listens Component#dispose
		 * @see [Similar to]{https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval}
		 */
		setInterval(fn: Component.GenericCallback, interval: number): number;

		/**
		 * Creates a function that runs after an `x` millisecond timeout. This function is a
		 * wrapper around `window.setTimeout`. There are a few reasons to use this one
		 * instead though:
		 * 1. It gets cleared via  {Component#clearTimeout} when
		 *    {Component#dispose} gets called.
		 * 2. The function callback will gets turned into a {Component~GenericCallback}
		 *
		 * > Note: You can't use `window.clearTimeout` on the id returned by this function. This
		 *         will cause its dispose listener not to get cleaned up! Please use
		 *         {Component#clearTimeout} or {Component#dispose} instead.
		 *
		 * param {Component~GenericCallback} fn
		 *        The function that will be run after `timeout`.
		 *
		 * param {number} timeout
		 *        Timeout in milliseconds to delay before executing the specified function.
		 *
		 * return {number}
		 *         Returns a timeout ID that gets used to identify the timeout. It can also
		 *         get used in {Component#clearTimeout} to clear the timeout that
		 *         was set.
		 *
		 * listens Component#dispose
		 * @see [Similar to]{https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout}
		 */
		setTimeout(fn: Component.GenericCallback, timeout: number): number;

		/**
		 * Show the `Component`s element if it is hidden by removing the
		 * 'vjs-hidden' class name from it.
		 */
		show(): undefined;

		/**
		 * Add or remove a CSS class name from the component's element.
		 * - `classToToggle` gets added when {Component#hasClass} would return false.
		 * - `classToToggle` gets removed when {Component#hasClass} would return true.
		 *
		 * param  {string} classToToggle
		 *         The class to add or remove based on (Component#hasClass}
		 *
		 * param  {boolean|Dom~predicate} [predicate]
		 *         An {Dom~predicate} function or a boolean
		 */
		toggleClass(classToToggle: string, predicate?: boolean | Dom.Predicate): undefined;

		/**
		 * Trigger all the ready listeners for this `Component`.
		 *
		 * @fires Component#ready
		 */
		triggerReady(): undefined;

		/**
		 * Unlock a `Component`s element from its visible state by removing the 'vjs-lock-showing'
		 * class name from it. Used during fadeIn/fadeOut.
		 *
		 * private
		 */
		unlockShowing(): undefined;

		/**
		 * Get or set the width of the component based upon the CSS styles.
		 * See {Component#dimension} for more detailed information.
		 *
		 * param {number|string} [num]
		 *        The width that you want to set postfixed with '%', 'px' or nothing.
		 *
		 * param {boolean} [skipListeners]
		 *        Skip the componentresize event trigger
		 *
		 * return {number|string}
		 *         The width when getting, zero if there is no width. Can be a string
		 *           postpixed with '%' or 'px'.
		 */
		width(num: number, skipListeners?: number): undefined;
		width(): string | number;
	}

	const Component: {
		prototype: Component;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Object[]} [options.children]
		 *        An array of children objects to intialize this component with. Children objects have
		 *        a name property that will be used if more than one component of the same type needs to be
		 *        added.
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        Function that gets called when the `Component` is ready.
		 */
		new (player: Player, options?: Component.Options, ready?: Component.ReadyCallback): Component;

		/**
		 * Get a `Component` based on the name it was registered with.
		 *
		 * param {string} name
		 *        The Name of the component to get.
		 *
		 * return {Component}
		 *         The `Component` that got registered under the given name.
		 *
		 * @deprecated In `videojs` 6 this will not return `Component`s that were not
		 *             registered using {Component.registerComponent}. Currently we
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
		 * > NOTE: {Tech}s should not be registered as a `Component`. {Tech}s
		 *         should be registered using {Tech.registerTech} or
		 *         {videojs:videojs.registerTech}.
		 *
		 * > NOTE: This function can also be seen on videojs as
		 *         {videojs:videojs.registerComponent}.
		 *
		 * param {string} name
		 *        The name of the `Component` to register.
		 *
		 * param {Component} ComponentToRegister
		 *        The `Component` class to register.
		 *
		 * return {Component}
		 *         The `Component` that was registered.
		 */
		registerComponent(name: string, ComponentToRegister: any): any;
	};

	namespace Component {
		interface Options {
			children?: Child[];
		}

		/**
		 * A callback that is called when a component is ready. Does not have any
		 * parameters and any callback value will be ignored.
		 *
		 * callback Component~ReadyCallback
		 * this Component
		 */
		type ReadyCallback = (this: Component) => void;

		/**
		 * A callback that has no parameters and is bound into `Component`s context.
		 *
		 * callback Component~GenericCallback
		 * this Component
		 */
		type GenericCallback = (this: Component) => void;

		/**
		 * An object that contains width and height values of the `Component`s
		 * computed style. Uses `window.getComputedStyle`.
		 *
		 * typedef {Object} Component~DimensionObject
		 *
		 * property {number} width
		 *           The width of the `Component`s computed style.
		 *
		 * property {number} height
		 *           The height of the `Component`s computed style.
		 */
		interface DimensionObject {
			width: number;
			height: number;
		}
	}

	type Content = string | Element | Node | (() => (string | Element | Node));

	/**
	 * Container of main controls.
	 *
	 * extends Component
	 */
	interface ControlBar extends Component {
		options_: ControlBar.Options;

		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;
	}

	const ControlBar: {
		prototype: ControlBar;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: ControlBar.Options): ControlBar;
	};

	namespace ControlBar {
		interface Options extends Component.Options {
			VolumePanel?: VolumePanel.Options;
		}
	}

	/**
	 * Displays the current time
	 *
	 * extends Component
	 */
	interface CurrentTimeDisplay extends TimeDisplay {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Update current time display
		 *
		 * param {EventTarget~Event} [event]
		 *        The `timeupdate` event that caused this function to run.
		 *
		 * listens Player#timeupdate
		 */
		updateContent(event: EventTarget.Event): undefined;

		/**
		 * When the player fires ended there should be no time left. Sadly
		 * this is not always the case, lets make it seem like that is the case
		 * for users.
		 *
		 * param {EventTarget~Event} [event]
		 *        The `ended` event that caused this to run.
		 *
		 * listens Player#ended
		 */
		handleEnded(event: EventTarget.Event): undefined;
	}

	const CurrentTimeDisplay: {
		prototype: CurrentTimeDisplay;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new(player: Player, options: Component.Options): CurrentTimeDisplay;
	};

	/**
	 * Spacer specifically meant to be used as an insertion point for new plugins, etc.
	 *
	 * extends Spacer
	 */
	interface CustomControlSpacer extends Spacer {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;
	}

	const CustomControlSpacer: {
		prototype: CustomControlSpacer;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        Function that gets called when the `Component` is ready.
		 */
		new (player: Player, options?: Component.Options, ready?: Component.ReadyCallback): CustomControlSpacer;
	};

	/**
	 * The button component for toggling and selecting descriptions
	 *
	 * extends TextTrackButton
	 */
	interface DescriptionsButton extends TextTrackButton {
		/**
		 * Handle text track change
		 *
		 * param {EventTarget~Event} event
		 *        The event that caused this function to run
		 *
		 * listens TextTrackList#change
		 */
		handleTracksChange(event: EventTarget.Event): undefined;

		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Allow sub components to stack CSS class names for the wrapper element
		 *
		 * return {string}
		 *         The constructed wrapper DOM `className`
		 */
		buildWrapperCSSClass(): string;
	}

	const DescriptionsButton: {
		prototype: DescriptionsButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        The function to call when this component is ready.
		 */
		new(player: Player, options?: TrackButton.Options, ready?: Component.ReadyCallback): DescriptionsButton;
	};

	/**
	 * Displays the duration
	 *
	 * extends Component
	 */
	interface DurationDisplay extends TimeDisplay {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Update duration time display.
		 *
		 * param {EventTarget~Event} [event]
		 *        The `durationchange`, `timeupdate`, or `loadedmetadata` event that caused
		 *        this function to be called.
		 *
		 * listens Player#durationchange
		 * listens Player#timeupdate
		 * listens Player#loadedmetadata
		 */
		updateContent(event: EventTarget.Event): undefined;
	}

	const DurationDisplay: {
		prototype: DurationDisplay;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new(player: Player, options: Component.Options): DurationDisplay;
	};

	/**
	 * A display that indicates an error has occurred. This means that the video
	 * is unplayable.
	 *
	 * extends ModalDialog
	 */
	interface ErrorDisplay extends ModalDialog {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 *
		 * @deprecated Since version 5.
		 */
		buildCSSClass(): string;

		/**
		 * Gets the localized error message based on the `Player`s error.
		 *
		 * return {string}
		 *         The `Player`s error message localized or an empty string.
		 */
		content(): string;
	}

	const ErrorDisplay: {
		prototype: ErrorDisplay;

		/**
		 * Creates an instance of this class.
		 *
		 * param  {Player} player
		 *         The `Player` that this class should be attached to.
		 *
		 * param  {Object} [options]
		 *         The key/value store of player options.
		 */
		new (player: Player, options?: ModalDialog.Options): ErrorDisplay;
	};

	interface Dom {
		/**
		 * Finds a single DOM element matching `selector` within the optional
		 * `context` of another DOM element (defaulting to `document`).
		 *
		 * param {string} selector
		 *        A valid CSS selector, which will be passed to `querySelector`.
		 *
		 * param {Element|String} [context=document]
		 *        A DOM element within which to query. Can also be a selector
		 *        string in which case the first matching element will be used
		 *        as context. If missing (or no element matches selector), falls
		 *        back to `document`.
		 *
		 * return {Element|null}
		 *         The element that was found or null.
		 */
		$(selector: string, context?: string | Element): Element;

		/**
		 * Finds a all DOM elements matching `selector` within the optional
		 * `context` of another DOM element (defaulting to `document`).
		 *
		 * param {string} selector
		 *           A valid CSS selector, which will be passed to `querySelectorAll`.
		 *
		 * param {Element|String} [context=document]
		 *           A DOM element within which to query. Can also be a selector
		 *           string in which case the first matching element will be used
		 *           as context. If missing (or no element matches selector), falls
		 *           back to `document`.
		 *
		 * return {NodeList}
		 *         A element list of elements that were found. Will be empty if none were found.
		 *
		 */
		$$(selector: string, context?: string | Element): NodeList;

		/**
		 * Add a CSS class name to an element
		 *
		 * param {Element} element
		 *        Element to add class name to.
		 *
		 * param {string} classToAdd
		 *        Class name to add.
		 *
		 * return {Element}
		 *         The dom element with the added class name.
		 */
		addClass(element: Element, classToAdd: string): Element;

		/**
		 * Normalizes and appends content to an element.
		 *
		 * param {Element} el
		 *        Element to append normalized content to.
		 *
		 *
		 * param {String|Element|TextNode|Array|Function} content
		 *        See the `content` argument of {dom:normalizeContent}
		 *
		 * return {Element}
		 *         The element with appended normalized content.
		 */
		appendContent(el: Element, content: Content | Content[]): Element;

		/**
		 * Attempt to block the ability to select text while dragging controls
		 */
		blockTextSelection(): undefined;

		/**
		 * Creates an element and applies properties.
		 *
		 * param {string} [tagName='div']
		 *         Name of tag to be created.
		 *
		 * param {Object} [properties={}]
		 *         Element properties to be applied.
		 *
		 * param {Object} [attributes={}]
		 *         Element attributes to be applied.
		 *
		 * param {String|Element|TextNode|Array|Function} [content]
		 *         Contents for the element (see: {dom:normalizeContent})
		 *
		 * return {Element}
		 *         The element that was created.
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
		 * param {Element} el
		 *        The element to empty children from
		 *
		 * return {Element}
		 *         The element with no children
		 */
		emptyEl(el: Element): Element;

		/**
		 * Offset Left.
		 * getBoundingClientRect technique from
		 * John Resig
		 *
		 * @see http://ejohn.org/blog/getboundingclientrect-is-awesome/
		 *
		 * param {Element} el
		 *        Element from which to get offset
		 *
		 * return {module:dom~Position}
		 *         The position of the element that was passed in.
		 */
		findPosition(el: Element): Position;

		/**
		 * Get the value of an element's attribute
		 *
		 * param {Element} el
		 *        A DOM element
		 *
		 * param {string} attribute
		 *        Attribute to get the value of
		 *
		 * return {string}
		 *         value of the attribute
		 */
		getAttribute(el: Element, attribute: string): string;

		/**
		 * Get an element's attribute values, as defined on the HTML tag
		 * Attributes are not the same as properties. They're defined on the tag
		 * or with setAttribute (which shouldn't be used with HTML)
		 * This will return true or false for boolean attributes.
		 *
		 * param {Element} tag
		 *        Element from which to get tag attributes.
		 *
		 * return {Object}
		 *         All attributes of the element.
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
		 * param  {Element} el
		 *         Element whose `ClientRect` we want to calculate.
		 *
		 * return {Object|undefined}
		 *         Always returns a plain
		 */
		getBoundingClientRect(el: Element): ClientRect;

		/**
		 * Get pointer position in element
		 * Returns an object with x and y coordinates.
		 * The base on the coordinates are the bottom left of the element.
		 *
		 * param {Element} el
		 *        Element on which to get the pointer position on
		 *
		 * param {EventTarget~Event} event
		 *        Event object
		 *
		 * return {Dom~Coordinates}
		 *         A Coordinates object corresponding to the mouse position.
		 *
		 */
		getPointerPosition(el: Element, event: Event): Coordinates;

		/**
		 * Check if an element has a CSS class
		 *
		 * param {Element} element
		 *        Element to check
		 *
		 * param {string} classToCheck
		 *        Class name to check for
		 *
		 * return {boolean}
		 *         - True if the element had the class
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
		 * param {Element} el
		 *        Element to insert normalized content into.
		 *
		 * param {String|Element|TextNode|Array|Function} content
		 *        See the `content` argument of {dom:normalizeContent}
		 *
		 * return {Element}
		 *         The element with inserted normalized content.
		 *
		 */
		insertContent(el: Element, content: string | Element | (() => any)): Element;

		/**
		 * Determines, via duck typing, whether or not a value is a DOM element.
		 *
		 * param {Mixed} value
		 *        The thing to check
		 *
		 * return {boolean}
		 *         - True if it is a DOM element
		 *         - False otherwise
		 */
		isEl(value: any): boolean;

		/**
		 * Determines if the current DOM is embedded in an iframe.
		 *
		 * return {boolean}
		 *
		 */
		isInFrame(): boolean;

		/**
		 * Whether the current DOM interface appears to be real.
		 *
		 * return {Boolean}
		 */
		isReal(): boolean;

		/**
		 * Check if event was a single left click
		 *
		 * param {EventTarget~Event} event
		 *        Event object
		 *
		 * return {boolean}
		 *         - True if a left click
		 *         - False if not a left click
		 */
		isSingleLeftClick(event: EventTarget.Event): boolean;

		/**
		 * Determines, via duck typing, whether or not a value is a text node.
		 *
		 * param {Mixed} value
		 *        Check if this value is a text node.
		 *
		 * return {boolean}
		 *         - True if it is a text node
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
		 * param {String|Element|TextNode|Array|Function} content
		 *        - String: Normalized into a text node.
		 *        - Element/TextNode: Passed through.
		 *        - Array: A one-dimensional array of strings, elements, nodes, or functions
		 *          (which return single strings, elements, or nodes).
		 *        - Function: If the sole argument, is expected to produce a string, element,
		 *          node, or array as defined above.
		 *
		 * return {Array}
		 *         All of the content that was passed in normalized.
		 */
		normalizeContent(content: Content | Content[]): Content[];

		/**
		 * Insert an element as the first child node of another
		 *
		 * param {Element} child
		 *        Element to insert
		 *
		 * param {Element} parent
		 *        Element to insert child into
		 */
		prependTo(child: Element, parent: Element): undefined;

		/**
		 * Remove an element's attribute
		 *
		 * param {Element} el
		 *        A DOM element
		 *
		 * param {string} attribute
		 *        Attribute to remove
		 */
		removeAttribute(el: Element, attribute: string): undefined;

		/**
		 * Remove a CSS class name from an element
		 *
		 * param {Element} element
		 *        Element to remove a class name from.
		 *
		 * param {string} classToRemove
		 *        Class name to remove
		 *
		 * return {Element}
		 *         The dom element with class name removed.
		 */
		removeClass(element: Element, classToRemove: string): Element;

		/**
		 * Set the value of an element's attribute
		 *
		 * param {Element} el
		 *        A DOM element
		 *
		 * param {string} attribute
		 *        Attribute to set
		 *
		 * param {string} value
		 *        Value to set the attribute to
		 */
		setAttribute(el: Element, attribute: string, value: string): undefined;

		/**
		 * Apply attributes to an HTML element.
		 *
		 * param {Element} el
		 *        Element to add attributes to.
		 *
		 * param {Object} [attributes]
		 *        Attributes to be applied.
		 */
		setAttributes(el: Element, attributes: any): undefined;

		/**
		 * Injects text into an element, replacing any existing contents entirely.
		 *
		 * param {Element} el
		 *        The element to add text content into
		 *
		 * param {string} text
		 *        The text content to add.
		 *
		 * return {Element}
		 *         The element with added text content.
		 */
		textContent(el: Element, text: string): Element;

		/**
		 * Adds or removes a CSS class name on an element depending on an optional
		 * condition or the presence/absence of the class name.
		 *
		 * param {Element} element
		 *        The element to toggle a class name on.
		 *
		 * param {string} classToToggle
		 *        The class that should be toggled
		 *
		 * param {boolean|PredicateCallback} [predicate]
		 *        See the return value for {Dom~PredicateCallback}
		 *
		 * return {Element}
		 *         The element with a class that has been toggled.
		 */
		toggleClass(element: Element, classToToggle: string, predicate: Dom.Predicate): Element;

		/**
		 * Turn off text selection blocking
		 */
		unblockTextSelection(): undefined;
	}

	namespace Dom {
		/**
		 * x and y coordinates for a dom element or mouse pointer
		 *
		 * typedef {Object} Dom~Coordinates
		 *
		 * property {number} x
		 *           x coordinate in pixels
		 *
		 * property {number} y
		 *           y coordinate in pixels
		 */
		interface Coordinates {
			x: number;
			y: number;
		}

		/**
		 * The callback definition for toggleElClass.
		 *
		 * callback Dom~Predicate
		 * param {Element} element
		 *        The DOM element of the Component.
		 *
		 * param {string} classToToggle
		 *        The `className` that wants to be toggled
		 *
		 * return {boolean|undefined}
		 *         - If true the `classToToggle` will get added to `element`.
		 *         - If false the `classToToggle` will get removed from `element`.
		 *         - If undefined this callback will be ignored
		 */
		type Predicate = (element: Element, classToToggle: string) => boolean;

		/**
		 * The postion of a DOM element on the page.
		 *
		 * typedef {Object} module:dom~Position
		 *
		 * property {number} left
		 *           Pixels to the left
		 *
		 * property {number} top
		 *           Pixels on top
		 */
		interface Position {
			top: number;
			left: number;
		}
	}

	/**
	 * Contains methods that provide event capabilities to an object which is passed
	 * to {module:evented|evented}.
	 *
	 * mixin EventedMixin
	 */
	interface EventedMixin {
		/**
		 * Removes listener(s) from event(s) on an evented object.
		 *
		 * param  {string|Array|Element|Object} [targetOrType]
		 *         If this is a string or array, it represents the event type(s).
		 *
		 *         Another evented object can be passed here instead, in which case
		 *         ALL 3 arguments are _required_.
		 *
		 * param  {string|Array|Function} [typeOrListener]
		 *         If the first argument was a string or array, this may be the
		 *         listener function. Otherwise, this is a string or array of event
		 *         type(s).
		 *
		 * param  {Function} [listener]
		 *         If the first argument was another evented object, this will be
		 *         the listener function; otherwise, _all_ listeners bound to the
		 *         event type(s) will be removed.
		 */
		off(targetOrType?: string | string[], typeOrListener?: (...args: any[]) => void, listener?: (...args: any[]) => void): undefined;

		/**
		 * Add a listener to an event (or events) on this object or another evented
		 * object.
		 *
		 * param  {string|Array|Element|Object} targetOrType
		 *         If this is a string or array, it represents the event type(s)
		 *         that will trigger the listener.
		 *
		 *         Another evented object can be passed here instead, which will
		 *         cause the listener to listen for events on _that_ object.
		 *
		 *         In either case, the listener's `this` value will be bound to
		 *         this object.
		 *
		 * param  {string|Array|Function} typeOrListener
		 *         If the first argument was a string or array, this should be the
		 *         listener function. Otherwise, this is a string or array of event
		 *         type(s).
		 *
		 * param  {Function} [listener]
		 *         If the first argument was another evented object, this will be
		 *         the listener function.
		 */
		on(targetOrType: string | string[], typeOrListener: (...args: any[]) => void, listener?: (...args: any[]) => void): undefined;

		/**
		 * Add a listener to an event (or events) on this object or another evented
		 * object. The listener will only be called once and then removed.
		 *
		 * param  {string|Array|Element|Object} targetOrType
		 *         If this is a string or array, it represents the event type(s)
		 *         that will trigger the listener.
		 *
		 *         Another evented object can be passed here instead, which will
		 *         cause the listener to listen for events on _that_ object.
		 *
		 *         In either case, the listener's `this` value will be bound to
		 *         this object.
		 *
		 * param  {string|Array|Function} typeOrListener
		 *         If the first argument was a string or array, this should be the
		 *         listener function. Otherwise, this is a string or array of event
		 *         type(s).
		 *
		 * param  {Function} [listener]
		 *         If the first argument was another evented object, this will be
		 *         the listener function.
		 */
		one(targetOrType: string | string[], typeOrListener: (...args: any[]) => void, listener?: (...args: any[]) => void): undefined;

		/**
		 * Fire an event on this evented object, causing its listeners to be called.
		 *
		 * param   {string|Object} event
		 *          An event type or an object with a type property.
		 *
		 * param   {Object} [hash]
		 *          An additional object to pass along to listeners.
		 *
		 * returns {boolean}
		 *          Whether or not the default behavior was prevented.
		 */
		trigger(event: any, hash?: any): boolean;
	}

	/**
	 * `EventTarget` is a class that can have the same API as the DOM `EventTarget`. It
	 * adds shorthand functions that wrap around lengthy functions. For example:
	 * the `on` function is a wrapper around `addEventListener`.
	 *
	 * @see [EventTarget Spec]{https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget}
	 * class EventTarget
	 */
	interface EventTarget {
		/**
		 * An alias of {EventTarget#on}. Allows `EventTarget` to mimic
		 * the standard DOM API.
		 *
		 * param {string|string[]} type
		 *        An event name or an array of event names.
		 *
		 * param {EventTarget~EventListener} fn
		 *        The function to call with `EventTarget`s
		 *
		 * function
		 * @see {EventTarget#on}
		 */
		addEventListener(type: string | string[], fn: EventTarget.EventListener): undefined;

		/**
		 * An alias of {EventTarget#trigger}. Allows `EventTarget` to mimic
		 * the standard DOM API.
		 *
		 * param {string|EventTarget~Event|Object} event
		 *        The name of the event, an `Event`, or an object with a key of type set to
		 *        an event name.
		 *
		 * function
		 * @see {EventTarget#trigger}
		 */
		dispatchEvent(event: string | Event): undefined;

		/**
		 * Removes an `event listener` for a specific event from an instance of `EventTarget`.
		 * This makes it so that the `event listener` will no longer get called when the
		 * named event happens.
		 *
		 * param {string|string[]} type
		 *        An event name or an array of event names.
		 *
		 * param {EventTarget~EventListener} fn
		 *        The function to remove.
		 */
		off(type: string | string[], fn: EventTarget.EventListener): undefined;

		/**
		 * Adds an `event listener` to an instance of an `EventTarget`. An `event listener` is a
		 * function that will get called when an event with a certain name gets triggered.
		 *
		 * param {string|string[]} type
		 *        An event name or an array of event names.
		 *
		 * param {EventTarget~EventListener} fn
		 *        The function to call with `EventTarget`s
		 */
		on(type: string | string[], fn: EventTarget.EventListener): undefined;

		/**
		 * This function will add an `event listener` that gets triggered only once. After the
		 * first trigger it will get removed. This is like adding an `event listener`
		 * with {EventTarget#on} that calls {EventTarget#off} on itself.
		 *
		 * param {string|string[]} type
		 *        An event name or an array of event names.
		 *
		 * param {EventTarget~EventListener} fn
		 *        The function to be called once for each event name.
		 */
		one(type: string | string[], fn: EventTarget.EventListener): undefined;

		/**
		 * An alias of {EventTarget#off}. Allows `EventTarget` to mimic
		 * the standard DOM API.
		 *
		 * param {string|string[]} type
		 *        An event name or an array of event names.
		 *
		 * param {EventTarget~EventListener} fn
		 *        The function to remove.
		 *
		 * function
		 * @see {EventTarget#off}
		 */
		removeEventListener(type: string | string[], fn: EventTarget.EventListener): undefined;

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
		 * param {string|EventTarget~Event|Object} event
		 *        The name of the event, an `Event`, or an object with a key of type set to
		 *        an event name.
		 */
		trigger(event: string | EventTarget.Event): undefined;
	}

	const EventTarget: {
		prototype: EventTarget;

		new (): EventTarget;
	};

	namespace EventTarget {
		/**
		 * A Custom DOM event.
		 *
		 * typedef {Object} EventTarget~Event
		 * @see [Properties]{https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent}
		 */
		interface Event extends CustomEvent {
			[key: string]: any;
		}

		/**
		 * All event listeners should follow the following format.
		 *
		 * callback EventTarget~EventListener
		 * this {EventTarget}
		 *
		 * param {EventTarget~Event} event
		 *        the event that triggered this function
		 *
		 * param {Object} [hash]
		 *        hash of data sent during the event
		 */
		type EventListener = ((e: Event, data?: any) => void);
	}

	/**
	 * Toggle fullscreen video
	 *
	 * extends Button
	 */
	interface FullscreenToggle extends Button {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Handles fullscreenchange on the player and change control text accordingly.
		 *
		 * param {EventTarget~Event} [event]
		 *        The {Player#fullscreenchange} event that caused this function to be
		 *        called.
		 *
		 * listens Player#fullscreenchange
		 */
		handleFullscreenChange(event: EventTarget.Event): undefined;

		/**
		 * This gets called when an `FullscreenToggle` is "clicked". See
		 * {ClickableComponent} for more detailed information on what a click can be.
		 *
		 * param {EventTarget~Event} [event]
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 */
		handleClick(event: EventTarget.Event): undefined;
	}

	const FullscreenToggle: {
		prototype: FullscreenToggle

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): FullscreenToggle;
	};

	/**
	 * The current list of {HtmlTrackElement}s.
	 */
	interface HTMLTrackElementList {
		[index: number]: HTMLTrackElement;

		/**
		 * memberof HtmlTrackElementList
		 * member {number} length
		 *         The current number of `Track`s in the this Trackist.
		 * instance
		 */
		length: number;
	}

	const HTMLTrackElementList: {
		prototype: HTMLTrackElementList;

		/**
		 * Create an instance of this class.
		 *
		 * param {HtmlTrackElement[]} [tracks=[]]
		 *        A list of `HtmlTrackElement` to instantiate the list with.
		 */
		new (tracks?: HTMLTrackElement[]): HTMLTrackElementList;
	};

	interface LanguageTranslations {
		[language: string]: string;
	}

	/**
	 * file log.js
	 * module log
	 */
	interface Log {
		/**
		 * Logs plain debug messages. Similar to `console.log`.
		 *
		 * class
		 * param    {Mixed[]} args
		 *           One or more messages or objects that should be logged.
		 */
		(...args: any[]): undefined;

		/**
		 * Logs debug messages. Similar to `console.debug`, but may also act as a comparable
		 * log if `console.debug` is not available
		 *
		 * param {Mixed[]} args
		 *        One or more messages or objects that should be logged as debug.
		 */
		debug(... args: any[]): undefined;

		/**
		 * Logs error messages. Similar to `console.error`.
		 *
		 * param {Mixed[]} args
		 *        One or more messages or objects that should be logged as an error
		 */
		error(... args: any[]): undefined;

		history: {
			/**
			 * Returns an array containing everything that has been logged to the history.
			 *
			 * This array is a shallow clone of the internal history record. However, its
			 * contents are _not_ cloned; so, mutating objects inside this array will
			 * mutate them in history.
			 *
			 * return {Array}
			 */
			(): any[];

			/**
			 * Clears the internal history tracking, but does not prevent further history
			 * tracking.
			 */
			clear(): undefined;

			/**
			 * Disable history tracking if it is currently enabled.
			 */
			disable(): undefined;

			/**
			 * Enable history tracking if it is currently disabled.
			 */
			enable(): undefined;
		};

		/**
		 * Get or set the current logging level. If a string matching a key from
		 * {log.levels} is provided, acts as a setter. Regardless of argument,
		 * returns the current logging level.
		 *
		 * param  {string} [lvl]
		 *         Pass to set a new logging level.
		 *
		 * return {string}
		 *         The current logging level.
		 */
		level(lvl: string): string;

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
		 * type {Object}
		 */
		levels: {
			all: string,
			off: string,
			debug: string,
			info: string,
			warn: string,
			error: string,
			DEFAULT: string
		};

		/**
		 * Logs warning messages. Similar to `console.warn`.
		 *
		 * param {Mixed[]} args
		 *        One or more messages or objects that should be logged as a warning.
		 */
		warn(... args: any[]): undefined;
	}

	/**
	 * A Custom `MediaError` class which mimics the standard HTML5 `MediaError` class.
	 *
	 * @see [MediaError Spec]{https://dev.w3.org/html5/spec-author-view/video.html#mediaerror}
	 * @see [Encrypted MediaError Spec]{https://www.w3.org/TR/2013/WD-encrypted-media-20130510/#error-codes}
	 *
	 */
	interface MediaError {
		/**
		 * The error code that refers two one of the defined `MediaError` types
		 *
		 * type {Number}
		 */
		code: number;

		/**
		 * W3C error code for any custom error.
		 *
		 * constant {number}
		 * default 0
		 */
		MEDIA_ERR_CUSTOM: 0;

		/**
		 * W3C error code for media error aborted.
		 *
		 * constant {number}
		 * default 1
		 */
		MEDIA_ERR_ABORTED: 1;

		/**
		 * W3C error code for any network error.
		 *
		 * constant {number}
		 * default 2
		 */
		MEDIA_ERR_NETWORK: 2;

		/**
		 * W3C error code for any decoding error.
		 *
		 * constant {number}
		 * default 3
		 */
		MEDIA_ERR_DECODE: 3;

		/**
		 * W3C error code for any time that a source is not supported.
		 *
		 * constant {number}
		 * default 4
		 */
		MEDIA_ERR_SRC_NOT_SUPPORTED: 4;

		/**
		 * W3C error code for any time that a source is encrypted.
		 *
		 * constant {number}
		 * default 5
		 */
		MEDIA_ERR_ENCRYPTED: 5;

		/**
		 * An optional message that to show with the error. Message is not part of the HTML5
		 * video spec but allows for more informative custom errors.
		 *
		 * type {String}
		 */
		message: string;

		/**
		 * An optional status code that can be set by plugins to allow even more detail about
		 * the error. For example a plugin might provide a specific HTTP status code and an
		 * error message for that code. Then when the plugin gets that error this class will
		 * know how to display an error message for it. This allows a custom message to show
		 * up on the `Player` error overlay.
		 *
		 * type {Array}
		 */
		status: any[];
	}

	const MediaError: {
		prototype: MediaError;

		/**
		 * Create an instance of this class.
		 *
		 * param {number|string|Object|MediaError} value
		 *        This can be of multiple types:
		 *        - number: should be a standard error code
		 *        - string: an error message (the code will be 0)
		 *        - Object: arbitrary properties
		 *        - `MediaError` (native): used to populate a video.js `MediaError` object
		 *        - `MediaError` (video.js): will return itself if it's already a
		 *          video.js `MediaError` object.
		 */
		new (value: number | string | {[key: string]: any} | MediaError): MediaError;

		/**
		 * The default `MediaError` messages based on the {MediaError.errorTypes}.
		 *
		 * type {Array}
		 * constant
		 */
		defaultMessages: string[];

		/**
		 * Errors indexed by the W3C standard. The order **CANNOT CHANGE**! See the
		 * specification listed under {MediaError} for more information.
		 *
		 * enum {array}
		 * readonly
		 * property {string} 0 - MEDIA_ERR_CUSTOM
		 * property {string} 1 - MEDIA_ERR_CUSTOM
		 * property {string} 2 - MEDIA_ERR_ABORTED
		 * property {string} 3 - MEDIA_ERR_NETWORK
		 * property {string} 4 - MEDIA_ERR_SRC_NOT_SUPPORTED
		 * property {string} 5 - MEDIA_ERR_ENCRYPTED
		 */
		errorTypes: string[];

		/**
		 * W3C error code for any custom error.
		 *
		 * constant {number}
		 * default 0
		 */
		MEDIA_ERR_CUSTOM: 0;

		/**
		 * W3C error code for media error aborted.
		 *
		 * constant {number}
		 * default 1
		 */
		MEDIA_ERR_ABORTED: 1;

		/**
		 * W3C error code for any network error.
		 *
		 * constant {number}
		 * default 2
		 */
		MEDIA_ERR_NETWORK: 2;

		/**
		 * W3C error code for any decoding error.
		 *
		 * constant {number}
		 * default 3
		 */
		MEDIA_ERR_DECODE: 3;

		/**
		 * W3C error code for any time that a source is not supported.
		 *
		 * constant {number}
		 * default 4
		 */
		MEDIA_ERR_SRC_NOT_SUPPORTED: 4;

		/**
		 * W3C error code for any time that a source is encrypted.
		 *
		 * constant {number}
		 * default 5
		 */
		MEDIA_ERR_ENCRYPTED: 5;
	};

	/**
	 * The Menu component is used to build popup menus, including subtitle and
	 * captions selection menus.
	 *
	 * extends Component
	 */
	interface Menu extends Component {
		options_: Menu.Options;

		menuButton_: MenuButton;

		/**
		 * Add a {MenuItem} to the menu.
		 *
		 * param {Object|string} component
		 *        The name or instance of the `MenuItem` to add.
		 *
		 */
		addItem(component: string | MenuItem): undefined;

		/**
		 * Create the `Menu`s DOM element.
		 *
		 * return {Element}
		 *         the element that was created
		 */
		createEl(): HTMLDivElement;

		dispose(): undefined;

		/**
		 * Set focus on a {MenuItem} in the `Menu`.
		 *
		 * param {Object|string} [item=0]
		 *        Index of child item set focus on.
		 */
		focus(item?: any): undefined;

		/**
		 * Handle a `keydown` event on this menu. This listener is added in the constructor.
		 *
		 * param {EventTarget~Event} event
		 *        A `keydown` event that happened on the menu.
		 *
		 * listens keydown
		 */
		handleKeyPress(event: EventTarget.Event): undefined;

		/**
		 * Move to previous (higher) menu item for keyboard users.
		 */
		stepBack(): undefined;

		/**
		 * Move to next (lower) menu item for keyboard users.
		 */
		stepForward(): undefined;
	}

	const Menu: {
		prototype: Menu;

		/**
		 * Create an instance of this class.
		 *
		 * param {Player} player
		 *        the player that this component should attach to
		 *
		 * param {Menu~Options} [options]
		 *        Object of option names and values
		 *
		 */
		new (player: Player, options?: Menu.Options): Menu;
	};

	namespace Menu {
		interface Options extends Component.Options {
			menuButton: MenuButton;
		}
	}

	/**
	 * A `MenuButton` class for any popup {Menu}.
	 *
	 * extends Component
	 */
	interface MenuButton extends Component {
		options_: MenuButton.Options;

		menu: Menu;

		menuButton_: Button;

		/**
		 * Remove the focus from the actual button, not this element
		 */
		blur(): undefined;

		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Allow sub components to stack CSS class names for the wrapper element
		 *
		 * return {string}
		 *         The constructed wrapper DOM `className`
		 */
		buildWrapperCSSClass(): string;

		/**
		 * Get or set the localized control text that will be used for accessibility.
		 *
		 * > NOTE: This will come from the internal `menuButton_` element.
		 *
		 * param {string} [text]
		 *        Control text for element.
		 *
		 * param {Element} [el=this.menuButton_.el()]
		 *        Element to set the title on.
		 *
		 * return {string}
		 *         - The control text when getting
		 */
		controlText(text?: string, el?: Element): string;

		/**
		 * Create the `MenuButtons`s DOM element.
		 *
		 * return {Element}
		 *         The element that gets created.
		 */
		createEl(): Element;

		/**
		 * Create the list of menu items. Specific to each subclass.
		 *
		 * abstract
		 */
		createItems(): MenuItem[];

		/**
		 * Create the menu and add all items to it.
		 *
		 * return {Menu}
		 *         The constructed menu
		 */
		createMenu(): Menu;

		/**
		 * Disable the `MenuButton`. Don't allow it to be clicked.
		 */
		disable(): undefined;

		/**
		 * Enable the `MenuButton`. Allow it to be clicked.
		 */
		enable(): undefined;

		/**
		 * Set the focus to the actual button, not to this element
		 */
		focus(): undefined;

		/**
		 * Called when a `MenuButton` loses focus. Turns off the listener for
		 * `keydown` events. Which Stops `this.handleKeyPress` from getting called.
		 *
		 * param {EventTarget~Event} event
		 *        The `blur` event that caused this function to be called.
		 *
		 * listens blur
		 */
		handleBlur(event: EventTarget.Event): undefined;

		/**
		 * Handle a click on a `MenuButton`.
		 * See {ClickableComponent#handleClick} for instances where this is called.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 */
		handleClick(event: EventTarget.Event): undefined;

		/**
		 * This gets called when a `MenuButton` gains focus via a `focus` event.
		 * Turns on listening for `keydown` events. When they happen it
		 * calls `this.handleKeyPress`.
		 *
		 * param {EventTarget~Event} event
		 *        The `focus` event that caused this function to be called.
		 *
		 * listens focus
		 */
		handleFocus(event: EventTarget.Event): undefined;

		/**
		 * Handle tab, escape, down arrow, and up arrow keys for `MenuButton`. See
		 * {ClickableComponent#handleKeyPress} for instances where this is called.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown` event that caused this function to be called.
		 *
		 * listens keydown
		 */
		handleKeyPress(event: EventTarget.Event): undefined;

		/**
		 * Handle a `keydown` event on a sub-menu. The listener for this is added in
		 * the constructor.
		 *
		 * param {EventTarget~Event} event
		 *        Key press event
		 *
		 * listens keydown
		 */
		handleSubmenuKeyPress(event: EventTarget.Event): undefined;

		/**
		 * Put the current `MenuButton` into a pressed state.
		 */
		pressButton(): undefined;

		/**
		 * Take the current `MenuButton` out of a pressed state.
		 */
		unpressButton(): undefined;

		/**
		 * Update the menu based on the current state of its items.
		 */
		update(): undefined;
	}

	const MenuButton: {
		prototype: MenuButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: MenuButton.Options): MenuButton;
	};

	namespace MenuButton {
		interface Options extends Component.Options {
			title?: string;
			iniChildren?: boolean;
		}
	}

	/**
	 * The component for a menu item. `<li>`
	 *
	 * extends ClickableComponent
	 */
	interface MenuItem extends ClickableComponent {
		options_: MenuItem.Options;

		/**
		 * Create the `MenuItem's DOM element
		 *
		 * param {string} [type=li]
		 *        Element's node type, not actually used, always set to `li`.
		 *
		 * param {Object} [props={}]
		 *        An object of properties that should be set on the element
		 *
		 * param {Object} [attrs={}]
		 *        An object of attributes that should be set on the element
		 *
		 * return {Element}
		 *         The element that gets created.
		 */
		createEl(type: string, props?: any, attrs?: any): HTMLLIElement;

		/**
		 * Any click on a `MenuItem` puts it into the selected state.
		 * See {ClickableComponent#handleClick} for instances where this is called.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 */
		handleClick(event: EventTarget.Event): undefined;

		/**
		 * Set the state for this menu item as selected or not.
		 *
		 * param {boolean} selected
		 *        if the menu item is selected or not
		 */
		selected(selected: boolean): undefined;
	}

	const MenuItem: {
		prototype: MenuItem;

		/**
		 * Creates an instance of the this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of player options.
		 *
		 */
		new (player: Player, options?: MenuItem.Options): MenuItem;
	};

	namespace MenuItem {
		interface Options extends Component.Options {
			label?: string;
			multiSelectable?: boolean;
			selectable?: boolean;
			selected?: boolean;
		}
	}

	interface Middleware {
		/**
		 *
		 * param {videojs.Tech.SourceObject} src
		 * param {Function} next
		 */
		setSource: (src: Tech.SourceObject, next: (err: any, next: (src: Tech.SourceObject) => void) => void) => void;
	}

	/**
	 * The `ModalDialog` displays over the video and its controls, which blocks
	 * interaction with the player until it is closed.
	 *
	 * Modal dialogs include a "Close" button and will close when that button
	 * is activated - or when ESC is pressed anywhere.
	 *
	 * extends Component
	 */
	interface ModalDialog extends Component {
		options_: ModalDialog.Options;

		closeable_: boolean;

		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Closes the modal, does nothing if the `ModalDialog` is
		 * not open.
		 *
		 * @fires ModalDialog#beforemodalclose
		 * @fires ModalDialog#modalclose
		 */
		close(): undefined;

		/**
		 * Check to see if the `ModalDialog` is closeable via the UI.
		 *
		 * param  {boolean} [value]
		 *         If given as a boolean, it will set the `closeable` option.
		 *
		 * return {boolean}
		 *         Returns the final value of the closable option.
		 */
		closeable(value: boolean): boolean;

		/**
		 * Gets or sets the modal content, which gets normalized before being
		 * rendered into the DOM.
		 *
		 * This does not update the DOM or fill the modal, but it is called during
		 * that process.
		 *
		 * param  {Content} [value]
		 *         If defined, sets the internal content value to be used on the
		 *         next call(s) to `fill`. This value is normalized before being
		 *         inserted. To "clear" the internal content value, pass `null`.
		 *
		 * return {Content}
		 *         The current content of the modal dialog
		 */
		content(value: Content): any;

		/**
		 * Create the `ModalDialog`'s DOM element
		 *
		 * return {Element}
		 *         The DOM element that gets created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Returns the description string for this modal. Primarily used for
		 * accessibility.
		 *
		 * return {string}
		 *         The localized or raw description of this modal.
		 */
		description(): string;

		dispose(): undefined;

		/**
		 * Empties the content element. This happens anytime the modal is filled.
		 *
		 * @fires ModalDialog#beforemodalempty
		 * @fires ModalDialog#modalempty
		 */
		empty(): undefined;

		/**
		 * Fill the modal's content element with the modal's "content" option.
		 * The content element will be emptied before this change takes place.
		 */
		fill(): undefined;

		/**
		 * Fill the modal's content element with arbitrary content.
		 * The content element will be emptied before this change takes place.
		 *
		 * @fires ModalDialog#beforemodalfill
		 * @fires ModalDialog#modalfill
		 *
		 * param {Content} [content]
		 *        The same rules apply to this as apply to the `content` option.
		 */
		fillWith(content: Content): undefined;

		/**
		 * Keydown handler. Attached when modal is focused.
		 *
		 * listens keydown
		 */
		handleKeyDown(): undefined;

		/**
		 * Handles `keydown` events on the document, looking for ESC, which closes
		 * the modal.
		 *
		 * param {EventTarget~Event} e
		 *        The keypress that triggered this event.
		 *
		 * listens keydown
		 */
		handleKeyPress(e: EventTarget.Event): undefined;

		/**
		 * Returns the label string for this modal. Primarily used for accessibility.
		 *
		 * return {string}
		 *         the localized or raw label of this modal.
		 */
		label(): string;

		/**
		 * Opens the modal.
		 *
		 * @fires ModalDialog#beforemodalopen
		 * @fires ModalDialog#modalopen
		 */
		open(): undefined;

		/**
		 * If the `ModalDialog` is currently open or closed.
		 *
		 * param  {boolean} [value]
		 *         If given, it will open (`true`) or close (`false`) the modal.
		 *
		 * return {boolean}
		 *         the current open state of the modaldialog
		 */
		opened(value?: boolean): boolean;
	}

	const ModalDialog: {
		prototype: ModalDialog;

		/**
		 * Create an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {ModalDialog~Options} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: ModalDialog.Options): ModalDialog;
	};

	namespace ModalDialog {
		/**
		 * Options for this class
		 *
		 * param {Content} [content=undefined]
		 *        Provide customized content for this modal.
		 *
		 * param {string} [description]
		 *        A text description for the modal, primarily for accessibility.
		 *
		 * param {boolean} [fillAlways=false]
		 *        Normally, modals are automatically filled only the first time
		 *        they open. This tells the modal to refresh its content
		 *        every time it opens.
		 *
		 * param {string} [label]
		 *        A text label for the modal, primarily for accessibility.
		 *
		 * param {boolean} [temporary=true]
		 *        If `true`, the modal can only be opened once; it will be
		 *        disposed as soon as it's closed.
		 *
		 * param {boolean} [uncloseable=false]
		 *        If `true`, the user will not be able to close the modal
		 *        through the UI in the normal ways. Programmatic closing is
		 *        still possible.
		 */
		interface Options extends Component.Options {
			content?: any;
			description?: string;
			fillAlways?: boolean;
			label?: string;
			temporary?: boolean;
			uncloseable?: boolean;
		}
	}

	/**
	 * The {MouseTimeDisplay} component tracks mouse movement over the
	 * {ProgressControl}. It displays an indicator and a {TimeTooltip}
	 * indicating the time which is represented by a given point in the
	 * {ProgressControl}.
	 *
	 * extends Component
	 */
	interface MouseTimeDisplay extends Component {
		/**
		 * Create the DOM element for this class.
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Enqueues updates to its own DOM as well as the DOM of its
		 * {TimeTooltip} child.
		 *
		 * param {Object} seekBarRect
		 *        The `ClientRect` for the {SeekBar} element.
		 *
		 * param {number} seekBarPoint
		 *        A number from 0 to 1, representing a horizontal reference point
		 *        from the left edge of the {SeekBar}
		 */
		update(seekBarRect: ClientRect, seekBarPoint: number): undefined;
	}

	const MouseTimeDisplay: {
		prototype: MouseTimeDisplay;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The {Player} that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): MouseTimeDisplay
	};

	/**
	 * An instance of the `Player` class is created when any of the Video.js setup methods
	 * are used to initialize a video.
	 *
	 * After an instance has been created it can be accessed globally in two ways:
	 * 1. By calling `videojs('example_video_1');`
	 * 2. By using it directly via  `videojs.players.example_video_1;`
	 *
	 * extends Component
	 */
	interface Player extends Component {
		bigPlayButton: Button;

		controlBar: ControlBar;

		errorDisplay: ModalDialog;

		loadingSpinner: Component;

		options_: Player.Options;

		userActivity_: boolean;

		userActive_: boolean;

		/**
		 * A getter/setter for the `Player`'s aspect ratio.
		 *
		 * param {string} [ratio]
		 *        The value to set the `Player's aspect ratio to.
		 *
		 * return {string|undefined}
		 *         - The current aspect ratio of the `Player` when getting.
		 *         - undefined when setting
		 */
		aspectRatio(ratio: string): undefined;
		aspectRatio(): string;

		/**
		 * Get or set the autoplay option. When this is a boolean it will
		 * modify the attribute on the tech. When this is a string the attribute on
		 * the tech will be removed and `Player` will handle autoplay on loadstarts.
		 *
		 * param {boolean|string} [value]
		 *        - true: autoplay using the browser behavior
		 *        - false: do not autoplay
		 *        - 'play': call play() on every loadstart
		 *        - 'muted': call muted() then play() on every loadstart
		 *        - 'any': call play() on every loadstart. if that fails call muted() then play().
		 *        - *: values other than those listed here will be set `autoplay` to true
		 *
		 * return {boolean|string}
		 *         The current value of autoplay when getting
		 */
		autoplay(value?: boolean): undefined;
		autoplay(): boolean;

		/**
		 * Create a remote {TextTrack} and an {HTMLTrackElement}. It will
		 * automatically removed from the video element whenever the source changes, unless
		 * manualCleanup is set to false.
		 *
		 * param {Object} options
		 *        Options to pass to {HTMLTrackElement} during creation. See
		 *        {HTMLTrackElement} for object properties that you should use.
		 *
		 * param {boolean} [manualCleanup=true] if set to false, the TextTrack will be
		 *
		 * return {HTMLTrackElement}
		 *         the HTMLTrackElement that was created and added
		 *         to the HtmlTrackElementList and the remote
		 *         TextTrackList
		 */
		addRemoteTextTrack(options: TextTrack.Options, manualCleanup: boolean): HTMLTrackElement;

		/**
		 * A helper method for adding a {TextTrack} to our
		 * {TextTrackList}.
		 *
		 * In addition to the W3C settings we allow adding additional info through options.
		 *
		 * @see http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
		 *
		 * param {string} [kind]
		 *        the kind of TextTrack you are adding
		 *
		 * param {string} [label]
		 *        the label to give the TextTrack label
		 *
		 * param {string} [language]
		 *        the language to set on the TextTrack
		 *
		 * return {TextTrack|undefined}
		 *         the TextTrack that was added or undefined
		 *         if there is no tech
		 */
		addTextTrack(kind?: string, label?: string, language?: string): undefined;

		/**
		 * Get a TimeRange object with an array of the times of the video
		 * that have been downloaded. If you just want the percent of the
		 * video that's been downloaded, use bufferedPercent.
		 *
		 * @see [Buffered Spec]{http://dev.w3.org/html5/spec/video.html#dom-media-buffered}
		 *
		 * return {TimeRange}
		 *         A mock TimeRange object (following HTML spec)
		 */
		buffered(): TimeRange;

		/**
		 * Get the ending time of the last buffered time range
		 * This is used in the progress bar to encapsulate all time ranges.
		 *
		 * return {number}
		 *         The end of the last buffered time range
		 */
		bufferedEnd(): number;

		/**
		 * Get the percent (as a decimal) of the video that's been downloaded.
		 * This method is not a part of the native HTML video API.
		 *
		 * return {number}
		 *         A decimal between 0 and 1 representing the percent
		 *         that is buffered 0 being 0% and 1 being 100%
		 */
		bufferedPercent(): number;

		/**
		 * Check whether the player can play a given mimetype
		 *
		 * @see https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype
		 *
		 * param {string} type
		 *        The mimetype to check
		 *
		 * return {string}
		 *         'probably', 'maybe', or '' (empty string)
		 */
		canPlayType(type: string): 'probably' | 'maybe' | '';

		cancelFullScreen(): Player;

		/**
		 * Get or set whether or not the controls are showing.
		 *
		 * @fires Player#controlsenabled
		 *
		 * param {boolean} [bool]
		 *        - true to turn controls on
		 *        - false to turn controls off
		 *
		 * return {boolean}
		 *         The current value of controls when getting
		 */
		controls(bool?: boolean): undefined;
		controls(): boolean;

		/**
		 * Create the `Player`'s DOM element.
		 *
		 * return {Element}
		 *         The DOM element that gets created.
		 */
		createEl(): Element;

		/**
		 * Creates a simple modal dialog (an instance of the {ModalDialog}
		 * component) that immediately overlays the player with arbitrary
		 * content and removes itself when closed.
		 *
		 * param {string|Function|Element|Array|null} content
		 *        Same as {ModalDialog#content}'s param of the same name.
		 *        The most straight-forward usage is to provide a string or DOM
		 *        element.
		 *
		 * param {Object} [options]
		 *        Extra options which will be passed on to the {ModalDialog}.
		 * check
		 * return {ModalDialog}
		 *         the {ModalDialog} that was created
		 */
		createModal(content: string | (() => any) | Element | any[], options: any): ModalDialog;

		/**
		 * Returns the current source object.
		 *
		 * return {Tech~SourceObject}
		 *         The current source object
		 */
		currentSource(): Tech.SourceObject;

		/**
		 * Returns all of the current source objects.
		 *
		 * return {Tech~SourceObject[]}
		 *         The current source objects
		 */
		currentSources(): Tech.SourceObject[];

		/**
		 * Returns the fully qualified URL of the current source value e.g. http://mysite.com/video.mp4
		 * Can be used in conjunction with `currentType` to assist in rebuilding the current source object.
		 *
		 * return {string}
		 *         The current source
		 */
		currentSrc(): string;

		/**
		 * Get or set the current time (in seconds)
		 *
		 * param {number|string} [seconds]
		 *        The time to seek to in seconds
		 *
		 * return {number}
		 *         - the current time in seconds when getting
		 */
		currentTime(seconds: number): undefined;
		currentTime(): number;

		/**
		 * Get the current source type e.g. video/mp4
		 * This can allow you rebuild the current source object so that you could load the same
		 * source and tech later
		 *
		 * return {string}
		 *         The source MIME type
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
		 * param {boolean} [defaultMuted]
		 *        - true to mute
		 *        - false to unmute
		 *
		 * return {boolean|Player}
		 *         - true if defaultMuted is on and getting
		 *         - false if defaultMuted is off and getting
		 *         - A reference to the current player when setting
		 */
		defaultMuted(defaultMuted: boolean): undefined;
		defaultMuted(): boolean;

		/**
		 * Gets or sets the current default playback rate. A default playback rate of
		 * 1.0 represents normal speed and 0.5 would indicate half-speed playback, for instance.
		 * defaultPlaybackRate will only represent what the initial playbackRate of a video was, not
		 * not the current playbackRate.
		 *
		 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-defaultplaybackrate
		 *
		 * param {number} [rate]
		 *       New default playback rate to set.
		 *
		 * return {number|Player}
		 *         - The default playback rate when getting or 1.0
		 *         - the player when setting
		 */
		defaultPlaybackRate(rate: number): Player;
		defaultPlaybackRate(): boolean;

		/**
		 * A getter/setter for the `Player`'s width & height.
		 *
		 * param {string} dimension
		 *        This string can be:
		 *        - 'width'
		 *        - 'height'
		 *
		 * param {number} [value]
		 *        Value for dimension specified in the first argument.
		 *
		 * return {number}
		 *         The dimension arguments value when getting (width/height).
		 */
		dimension(dimension: 'width' | 'height', value: number): undefined;
		dimension(dimension: 'width' | 'height'): number;

		/**
		 * An instance of the `Player` class is created when any of the Video.js setup methods
		 * are used to initialize a video.
		 *
		 * After an instance has been created it can be accessed globally in two ways:
		 * 1. By calling `videojs('example_video_1');`
		 * 2. By using it directly via  `videojs.players.example_video_1;`
		 *
		 * extends Component
		 */
		dispose(): undefined;

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
		 * param {number} [seconds]
		 *        The duration of the video to set in seconds
		 *
		 * return {number}
		 *         - The duration of the video in seconds when getting
		 */
		duration(seconds: number): undefined;
		duration(): number;

		/**
		 * A getter/setter/toggler for the vjs-fluid `className` on the `Player`.
		 *
		 * param {boolean} [bool]
		 *        - A value of true adds the class.
		 *        - A value of false removes the class.
		 *        - No value will toggle the fluid class.
		 *
		 * return {boolean|undefined}
		 *         - The value of fluid when getting.
		 *         - `undefined` when setting.
		 */
		fluid(bool: boolean): undefined;
		fluid(): boolean;

		/**
		 * Get object for cached values.
		 *
		 * return {Object}
		 *         get the current object cache
		 */
		getCache(): any;

		/**
		 * Gets available media playback quality metrics as specified by the W3C's Media
		 * Playback Quality API.
		 *
		 * @see [Spec]{https://wicg.github.io/media-playback-quality}
		 *
		 * return {Object|undefined}
		 *         An object with supported media playback quality metrics or undefined if there
		 *         is no tech or the tech does not support it.
		 */
		getVideoPlaybackQuality(): any;

		/**
		 * When fullscreen isn't supported we can stretch the
		 * video container to as wide as the browser will let us.
		 *
		 * @fires Player#enterFullWindow
		 */
		enterFullWindow(): undefined;

		/**
		 * Set or get the current MediaError
		 *
		 * @fires Player#error
		 *
		 * param  {MediaError|string|number} [err]
		 *         A MediaError or a string/number to be turned
		 *         into a MediaError
		 *
		 * return {MediaError|null}
		 *         The current MediaError when getting (or null)
		 */
		error(err: MediaError | string | number): undefined;
		error(): MediaError | null;

		/**
		 * Return the video to its normal size after having been in full screen mode
		 *
		 * @fires Player#fullscreenchange //noinspection JSUnresolvedVariable
		 */
		exitFullscreen(): Player;

		/**
		 * Exit full window
		 *
		 * @fires Player#exitFullWindow
		 */
		exitFullWindow(): undefined;

		/**
		 * Reports whether or not a player has a plugin available.
		 *
		 * This does not report whether or not the plugin has ever been initialized
		 * on this player. For that, [usingPlugin]{Player#usingPlugin}.
		 *
		 * method Player#hasPlugin
		 * param  {string}  name
		 *         The name of a plugin.
		 *
		 * return {boolean}
		 *         Whether or not this player has the requested plugin available.
		 */
		hasPlugin(name: string): boolean;

		/**
		 * Add/remove the vjs-has-started class
		 *
		 * @fires Player#firstplay
		 *
		 * param {boolean} request
		 *        - true: adds the class
		 *        - false: remove the class
		 *
		 * return {boolean}
		 *         the boolean value of hasStarted_
		 */
		hasStarted(request: boolean): undefined;
		hasStarted(): boolean;

		/**
		 * A getter/setter for the `Player`'s height. Returns the player's configured value.
		 * To get the current height use `currentheight()`.
		 *
		 * param {number} [value]
		 *        The value to set the `Player`'s heigth to.
		 *
		 * return {number}
		 *         The current height of the `Player` when getting.
		 */
		height(value: number): undefined;
		height(): number;

		/**
		 * Gets or sets the audio flag
		 *
		 * param {boolean} bool
		 *        - true signals that this is an audio player
		 *        - false signals that this is not an audio player
		 *
		 * return {boolean}
		 *         The current value of isAudio when getting
		 */
		isAudio(bool: boolean): undefined;
		isAudio(): boolean;

		/**
		 * Check if the player is in fullscreen mode or tell the player that it
		 * is or is not in fullscreen mode.
		 *
		 * > NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
		 * property and instead document.fullscreenElement is used. But isFullscreen is
		 * still a valuable property for internal player workings.
		 *
		 * param  {boolean} [isFS]
		 *         Set the players current fullscreen state
		 *
		 * return {boolean}
		 *         - true if fullscreen is on and getting
		 *         - false if fullscreen is off and getting
		 */
		isFullscreen(isFS: boolean): undefined;
		isFullscreen(): boolean;

		/**
		 * The player's language code
		 * NOTE: The language should be set in the player options if you want the
		 * the controls to be built with a specific language. Changing the language
		 * later will not update controls text.
		 *
		 * param {string} [code]
		 *        the language code to set the player to
		 *
		 * return {string}
		 *         The current language code when getting
		 */
		language(code: string): undefined;
		language(): string;

		/**
		 * Get the player's language dictionary
		 * Merge every time, because a newly added plugin might call videojs.addLanguage() at any time
		 * Languages specified directly in the player options have precedence
		 *
		 * return {Array}
		 *         An array of of supported languages
		 */
		languages(): string[];
		languageSwitch(options: any): undefined;

		/**
		 * Begin loading the src data.
		 */
		load(): undefined;

		/**
		 * Get or set the loop attribute on the video element.
		 *
		 * param {boolean} [value]
		 *        - true means that we should loop the video
		 *        - false means that we should not loop the video
		 *
		 * return {string}
		 *         The current value of loop when getting
		 */
		loop(value?: boolean): undefined;
		loop(): string;

		/**
		 * Get the current muted state, or turn mute on or off
		 *
		 * param {boolean} [muted]
		 *        - true to mute
		 *        - false to unmute
		 *
		 * return {boolean}
		 *         - true if mute is on and getting
		 *         - false if mute is off and getting
		 */
		muted(muted: boolean): undefined;
		muted(): boolean;

		/**
		 * Pause the video playback
		 * check
		 * return {Player}
		 *         A reference to the player object this function was called on
		 */
		pause(): Player;

		/**
		 * Check if the player is paused or has yet to play
		 *
		 * return {boolean}
		 *         - false: if the media is currently playing
		 *         - true: if media is not currently playing
		 */
		paused(): boolean;

		/**
		 * Attempt to begin playback at the first opportunity.
		 * check
		 * return {Promise|undefined}
		 *         Returns a `Promise` only if the browser returns one and the player
		 *         is ready to begin playback. For some browsers and all non-ready
		 *         situations, this will return `undefined`.
		 */
		play(): Player;

		/**
		 * Gets or sets the current playback rate. A playback rate of
		 * 1.0 represents normal speed and 0.5 would indicate half-speed
		 * playback, for instance.
		 *
		 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-playbackrate
		 *
		 * param {number} [rate]
		 *       New playback rate to set.
		 *
		 * return {number}
		 *         The current playback rate when getting or 1.0
		 */
		playbackRate(rate?: number): undefined;
		playbackRate(): number;

		/**
		 * Get a TimeRange object representing the current ranges of time that the user
		 * has played.
		 * check
		 * return {TimeRange}
		 *         A time range object that represents all the increments of time that have
		 *         been played.
		 */
		played(): any;

		/**
		 * Set or unset the playsinline attribute.
		 * Playsinline tells the browser that non-fullscreen playback is preferred.
		 *
		 * param {boolean} [value]
		 *        - true means that we should try to play inline by default
		 *        - false means that we should use the browser's default playback mode,
		 *          which in most cases is inline. iOS Safari is a notable exception
		 *          and plays fullscreen by default.
		 *
		 * return {string|Player}
		 *         - the current value of playsinline
		 *         - the player when setting
		 *
		 * @see [Spec]{https://html.spec.whatwg.org/#attr-video-playsinline}
		 */
		playsinline(value: boolean): Player;
		playsinline(): string;

		/**
		 * Get or set the poster image source url
		 *
		 * @fires Player#posterchange
		 *
		 * param {string} [src]
		 *        Poster image source URL
		 *
		 * return {string}
		 *         The current value of poster when getting
		 */
		poster(src: string): undefined;
		poster(): string;

		/**
		 * Get or set the preload attribute
		 *
		 * param {boolean} [value]
		 *        - true means that we should preload
		 *        - false means that we should not preload
		 *
		 * return {string}
		 *         The preload attribute value when getting
		 */
		preload(value?: boolean): string;

		/**
		 * Calculates how much time is left in the video. Not part
		 * of the native video API.
		 *
		 * return {number}
		 *         The time remaining in seconds
		 */
		remainingTime(): number;

		/**
		 * A remaining time function that is intented to be used when
		 * the time is to be displayed directly to the user.
		 *
		 * return {number}
		 *         The rounded time remaining in seconds
		 */
		remainingTimeDisplay(): number;

		/**
		 * Remove a remote {TextTrack} from the respective
		 * {TextTrackList} and {HtmlTrackElementList}.
		 *
		 * param {Object} track
		 *        Remote {TextTrack} to remove
		 *
		 * return {undefined}
		 *         does not return anything
		 */
		removeRemoteTextTrack(track: HTMLTrackElement): undefined;

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
		requestFullScreen(): Player;

		/**
		 * Report user activity
		 *
		 * param {Object} event
		 *        Event object
		 */
		reportUserActivity(event: any): undefined;

		/**
		 * Reset the player. Loads the first tech in the techOrder,
		 * and calls `reset` on the tech`.
		 */
		reset(): undefined;

		/**
		 * Select source based on tech-order or source-order
		 * Uses source-order selection if `options.sourceOrder` is truthy. Otherwise,
		 * defaults to tech-order selection
		 *
		 * param {Array} sources
		 *        The sources for a media asset
		 *
		 * return {Object|boolean}
		 *         Object of source and tech order or false
		 */
		selectSource(sources: any[]): any;

		/**
		 * Returns whether or not the user is "scrubbing". Scrubbing is
		 * when the user has clicked the progress bar handle and is
		 * dragging it along the progress bar.
		 *
		 * param {boolean} [isScrubbing]
		 *        whether the user is or is not scrubbing
		 *
		 * return {boolean}
		 *         The value of scrubbing when getting
		 */
		scrubbing(isScrubbing: boolean): undefined;
		scrubbing(): boolean;

		/**
		 * Get or set the video source.
		 *
		 * param {Tech~SourceObject|Tech~SourceObject[]|string} [source]
		 *        A SourceObject, an array of SourceObjects, or a string referencing
		 *        a URL to a media source. It is _highly recommended_ that an object
		 *        or array of objects is used here, so that source selection
		 *        algorithms can take the `type` into account.
		 *
		 *        If not provided, this method acts as a getter.
		 *
		 * return {string|undefined}
		 *         If the `source` argument is missing, returns the current source
		 *         URL. Otherwise, returns nothing/undefined.
		 */
		src(source: string | Tech.SourceObject | Tech.SourceObject[]): undefined;
		src(): string;

		/**
		 * Check if current tech can support native fullscreen
		 * (e.g. with built in controls like iOS, so not our flash swf)
		 *
		 * return {boolean}
		 *         if native fullscreen is supported
		 */
		supportsFullScreen(): boolean;

		/**
		 * Return a reference to the current {Tech}.
		 * It will print a warning by default about the danger of using the tech directly
		 * but any argument that is passed in will silence the warning.
		 *
		 * param {*} [safety]
		 *        Anything passed in to silence the warning
		 *
		 * return {Tech}
		 *         The Tech
		 */
		tech(safety?: any): Tech;

		/**
		 * returns a JavaScript object reperesenting the current track
		 * information. **DOES not return it as JSON**
		 *
		 * return {Object}
		 *         Object representing the current of track info
		 */
		toJSON(): any;

		/**
		 * Get/set if user is active
		 *
		 * @fires Player#useractive
		 * @fires Player#userinactive
		 *
		 * param {boolean} [bool]
		 *        - true if the user is active
		 *        - false if the user is inactive
		 *
		 * return {boolean}
		 *         The current value of userActive when getting
		 */
		userActive(bool: boolean): undefined;
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
		 * param {boolean} [bool]
		 *        - true to turn native controls on
		 *        - false to turn native controls off
		 *
		 * return {boolean}
		 *         The current value of native controls when getting
		 */
		usingNativeControls(bool: boolean): undefined;
		usingNativeControls(): boolean;

		/**
		 * Reports whether or not a player is using a plugin by name.
		 *
		 * For basic plugins, this only reports whether the plugin has _ever_ been
		 * initialized on this player.
		 *
		 * method Player#usingPlugin
		 * param  {string} name
		 *         The name of a plugin.
		 *
		 * return {boolean}
		 *         Whether or not this player is using the requested plugin.
		 */
		usingPlugin(name: string): boolean;

		/**
		 * Get video height
		 *
		 * return {number}
		 *         current video height
		 */
		videoHeight(): number;

		/**
		 * Get video width
		 *
		 * return {number}
		 *         current video width
		 */
		videoWidth(): number;

		/**
		 * Get or set the current volume of the media
		 *
		 * param  {number} [percentAsDecimal]
		 *         The new volume as a decimal percent:
		 *         - 0 is muted/0%/off
		 *         - 1.0 is 100%/full
		 *         - 0.5 is half volume or 50%
		 *
		 * return {number}
		 *         The current volume as a percent when getting
		 */
		volume(percentAsDecimal: number): TimeRange;
		volume(): number;

		/**
		 * A getter/setter for the `Player`'s width. Returns the player's configured value.
		 * To get the current width use `currentWidth()`.
		 *
		 * param {number} [value]
		 *        The value to set the `Player`'s width to.
		 *
		 * return {number}
		 *         The current width of the `Player` when getting.
		 */
		width(value: number): undefined;
		width(): number;
	}

	const Player: {
		prototype: Player;

		/**
		 * An instance of the `Player` class is created when any of the Video.js setup methods
		 * are used to initialize a video.
		 *
		 * After an instance has been created it can be accessed globally in two ways:
		 * 1. By calling `videojs('example_video_1');`
		 * 2. By using it directly via  `videojs.players.example_video_1;`
		 *
		 * extends Component
		 */
		new(player: Player, options?: Player.Options): Player;

		/**
		 * Gets tag settings
		 *
		 * param {Element} tag
		 *        The player tag
		 * check
		 * return {Object}
		 *         An object containing all of the settings
		 *         for a player tag
		 */
		getTagSettings(tag: Element): any;
	};

	namespace Player {
		interface Options extends Component.Options {
			aspectRatio?: string;
			autoplay?: boolean;
			controlBar?: ControlBar.Options | false;
			controls?: boolean;
			defaultVolume?: number;
			fluid?: boolean;
			height?: number;
			html5?: any;
			language?: string;
			languages?: {[code: string]: LanguageTranslations};
			loop?: boolean;
			muted?: boolean;
			notSupportedMessage?: string;
			playbackRates: number[];
			plugins?: any;
			poster?: string;
			preload?: string;
			sourceOrder?: boolean;
			sources?: Tech.SourceObject[];
			src?: string;
			techOrder?: string[];
			tracks?: TextTrack.Options[];
			width?: number;
		}
	}

	/**
	 * Parent class for all advanced plugins.
	 *
	 * mixes   module:evented~EventedMixin
	 * mixes   module:stateful~StatefulMixin
	 * @fires   Player#beforepluginsetup
	 * @fires   Player#beforepluginsetup:$name
	 * @fires   Player#pluginsetup
	 * @fires   Player#pluginsetup:$name
	 * listens Player#dispose
	 * @throws  {Error}
	 *          If attempting to instantiate the base {Plugin} class
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
		dispose(): undefined;

		/**
		 * Each event triggered by plugins includes a hash of additional data with
		 * conventional properties.
		 *
		 * This returns that object or mutates an existing hash.
		 *
		 * param   {Object} [hash={}]
		 *          An object to be used as event an event hash.
		 *
		 * returns {Plugin~PluginEventHash}
		 *          An event hash object with provided properties mixed-in.
		 */
		getEventHash(hash?: any): Plugin.PluginEventHash;

		/**
		 * Handles "statechanged" events on the plugin. No-op by default, override by
		 * subclassing.
		 *
		 * abstract
		 * param    {Event} e
		 *           An event object provided by a "statechanged" event.
		 *
		 * param    {Object} e.changes
		 *           An object describing changes that occurred with the "statechanged"
		 *           event.
		 */
		handleStateChanged(e: Event): undefined;

		/**
		 * Get the version of the plugin that was set on <pluginName>.VERSION
		 */
		version(): string;

		/**
		 * Triggers an event on the plugin object and overrides
		 * {module:evented~EventedMixin.trigger|EventedMixin.trigger}.
		 *
		 * param   {string|Object} event
		 *          An event type or an object with a type property.
		 *
		 * param   {Object} [hash={}]
		 *          Additional data hash to merge with a
		 *          {Plugin~PluginEventHash|PluginEventHash}.
		 *
		 * returns {boolean}
		 *          Whether or not default was prevented.
		 */
		trigger(event: any, hash?: any): boolean;
	}

	const Plugin: {
		prototype: Plugin;

		/**
		 * The name of the base plugin class as it is registered.
		 *
		 * type {string}
		 */
		BASE_PLUGIN_NAME: string;

		/**
		 * Creates an instance of this class.
		 *
		 * Sub-classes should call `super` to ensure plugins are properly initialized.
		 *
		 * param {Player} player
		 *        A Video.js player instance.
		 */
		new (player: Player): Plugin;

		/**
		 * De-register a Video.js plugin.
		 *
		 * param {string} name
		 *        The name of the plugin to be deregistered.
		 */
		deregisterPlugin(name: string): undefined;

		/**
		 * Gets a plugin by name if it exists.
		 *
		 * static
		 * method   getPlugin
		 * memberof Plugin
		 * param    {string} name
		 *           The name of a plugin.
		 *
		 * returns  {Function|undefined}
		 *           The plugin (or `undefined`).
		 */
		getPlugin(name: string): typeof Plugin;

		/**
		 * Gets a plugin's version, if available
		 *
		 * param   {string} name
		 *          The name of a plugin.
		 *
		 * returns {string}
		 *          The plugin's version or an empty string.
		 */
		getPluginVersion(name: string): string;

		/**
		 * Gets an object containing multiple Video.js plugins.
		 *
		 * param   {Array} [names]
		 *          If provided, should be an array of plugin names. Defaults to _all_
		 *          plugin names.
		 *
		 * returns {Object|undefined}
		 *          An object containing plugin(s) associated with their name(s) or
		 *          `undefined` if no matching plugins exist).
		 *
		 * check returning type
		 */
		getPlugins(names?: string[]): {[name: string]: Plugin}

		/**
		 * Determines if a plugin is a basic plugin (i.e. not a sub-class of `Plugin`).
		 *
		 * param   {string|Function} plugin
		 *          If a string, matches the name of a plugin. If a function, will be
		 *          tested directly.
		 *
		 * returns {boolean}
		 *          Whether or not a plugin is a basic plugin.
		 */
		isBasic(plugin: string |(() => any)): boolean
		/**
		 * Register a Video.js plugin.
		 *
		 * param   {string} name
		 *          The name of the plugin to be registered. Must be a string and
		 *          must not match an existing plugin or a method on the `Player`
		 *          prototype.
		 *
		 * param   {Function} plugin
		 *          A sub-class of `Plugin` or a function for basic plugins.
		 *
		 * returns {Function}
		 *          For advanced plugins, a factory function for that plugin. For
		 *          basic plugins, a wrapper function that initializes the plugin.
		 */
		registerPlugin<T>(name: string, plugin: (this: Player, options: any) => T): () => T;
		registerPlugin<T extends typeof Plugin>(name: string, plugin: T): () => T;
	};

	namespace Plugin {
		/**
		 * typedef  {Object} Plugin~PluginEventHash
		 *
		 * property {string} instance
		 *           For basic plugins, the return value of the plugin function. For
		 *           advanced plugins, the plugin instance on which the event is fired.
		 *
		 * property {string} name
		 *           The name of the plugin.
		 *
		 * property {string} plugin
		 *           For basic plugins, the plugin function. For advanced plugins, the
		 *           plugin class/constructor.
		 */
		interface PluginEventHash {
			instance: Plugin;
			name: string;
			plugin: string;
		}
	}

	interface ProgressControl extends Component {
		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Disable all controls on the progress control and its children
		 */
		disable(): undefined;

		/**
		 * Enable all controls on the progress control and its children
		 */
		enable(): undefined;

		/**
		 * Are controls are currently enabled for this progress control.
		 *
		 * return {boolean}
		 *         true if controls are enabled, false otherwise
		 */
		enabled(): boolean;

		/**
		 * Handle `mousedown` or `touchstart` events on the `ProgressControl`.
		 *
		 * param {EventTarget~Event} event
		 *        `mousedown` or `touchstart` event that triggered this function
		 *
		 * listens mousedown
		 * listens touchstart
		 */
		handleMouseDown(event: EventTarget.Event): undefined;

		/**
		 * When the mouse moves over the `ProgressControl`, the pointer position
		 * gets passed down to the `MouseTimeDisplay` component.
		 *
		 * param {EventTarget~Event} event
		 *        The `mousemove` event that caused this function to run.
		 *
		 * listen mousemove
		 */
		handleMouseMove(event: EventTarget.Event): undefined;

		/**
		 * Handle `mousemove` or `touchmove` events on the `ProgressControl`.
		 *
		 * param {EventTarget~Event} event
		 *        `mousedown` or `touchstart` event that triggered this function
		 *
		 * listens mousemove
		 * listens touchmove
		 */
		handleMouseSeek(event: EventTarget.Event): undefined;

		/**
		 * Handle `mouseup` or `touchend` events on the `ProgressControl`.
		 *
		 * param {EventTarget~Event} event
		 *        `mouseup` or `touchend` event that triggered this function.
		 *
		 * listens touchend
		 * listens mouseup
		 */
		handleMouseUp(event: EventTarget.Event): undefined;
	}

	const ProgressControl: {
		prototype: ProgressControl;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): ProgressControl;
	};

	interface Representation {
		id: string;
		width: number;
		height: number;
		bitrate: number;
		enabled(): boolean;
		enabled(enabled: boolean): undefined;
	}

	/**
	 * Seek bar and container for the progress bars. Uses {PlayProgressBar}
	 * as its `bar`.
	 *
	 * extends Slider
	 */
	interface SeekBar extends Slider {
		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Disable controls for this slider if they are enabled
		 */
		disable(): undefined;

		/**
		 * Enable controls for this slider if they are disabled
		 */
		enable(): undefined;

		/**
		 * Toggles the playback state of the player
		 * This gets called when enter or space is used on the seekbar
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown` event that caused this function to be called
		 *
		 */
		handleAction(event: EventTarget.Event): undefined;

		/**
		 * We want the seek bar to be full on ended
		 * no matter what the actual internal values are. so we force it.
		 *
		 * param {EventTarget~Event} [event]
		 *        The `timeupdate` or `ended` event that caused this to run.
		 *
		 * listens Player#ended
		 */
		handleEnded(event: EventTarget.Event): undefined;

		/**
		 * Called when this SeekBar has focus and a key gets pressed down. By
		 * default it will call `this.handleAction` when the key is space or enter.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown` event that caused this function to be called.
		 *
		 * listens keydown
		 */
		handleKeyPress(event: EventTarget.Event): undefined;

		/**
		 * Handle mouse down on seek bar
		 *
		 * param {EventTarget~Event} event
		 *        The `mousedown` event that caused this to run.
		 *
		 * listens mousedown
		 */
		handleMouseDown(event: EventTarget.Event): undefined;

		/**
		 * Handle mouse move on seek bar
		 *
		 * param {EventTarget~Event} event
		 *        The `mousemove` event that caused this to run.
		 *
		 * listens mousemove
		 */
		handleMouseMove(event: EventTarget.Event): undefined;

		/**
		 * Handle mouse up on seek bar
		 *
		 * param {EventTarget~Event} event
		 *        The `mouseup` event that caused this to run.
		 *
		 * listens mouseup
		 */
		handleMouseUp(event: EventTarget.Event): undefined;

		/**
		 * Get the percentage of media played so far.
		 *
		 * return {number}
		 *         The percentage of media played so far (0 to 1).
		 */
		getPercent(): number;

		/**
		 * Move more quickly fast forward for keyboard-only users
		 */
		stepForward(): undefined;

		/**
		 * Move more quickly rewind for keyboard-only users
		 */
		stepBack(): undefined;

		/**
		 * Update the seek bar's UI.
		 *
		 * listens Player#timeupdate
		 *
		 * returns {number}
		 *          The current percent at a number from 0-1
		 */
		update(): number;
	}

	const SeekBar: {
		prototype: SeekBar;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: Slider.Options): SeekBar;
	};

	/**
	 * The base functionality for a slider. Can be vertical or horizontal.
	 * For instance the volume bar or the seek bar on a video is a slider.
	 *
	 * extends Component
	 */
	interface Slider extends Component {
		options_: Slider.Options;

		/**
		 * Enable controls for this slider if they are disabled
		 */
		enable(): undefined;

		/**
		 * Are controls are currently enabled for this slider or not.
		 *
		 * return {boolean}
		 *         true if controls are enabled, false otherwise
		 */
		enabled(): boolean;

		/**
		 * Disable controls for this slider if they are enabled
		 */
		disable(): undefined;

		/**
		 * Create the `Slider`s DOM element.
		 *
		 * param {string} type
		 *        Type of element to create.
		 *
		 * param {Object} [props={}]
		 *        List of properties in Object form.
		 *
		 * param {Object} [attributes={}]
		 *        list of attributes in Object form.
		 *
		 * return {Element}
		 *         The element that gets created.
		 */
		createEl(type: string, props?: any, attributes?: any): Element;

		/**
		 * Handle `mousedown` or `touchstart` events on the `Slider`.
		 *
		 * param {EventTarget~Event} event
		 *        `mousedown` or `touchstart` event that triggered this function
		 *
		 * listens mousedown
		 * listens touchstart
		 * @fires Slider#slideractive
		 */
		handleMouseDown(event: EventTarget.Event): undefined;

		/**
		 * Handle the `mousemove`, `touchmove`, and `mousedown` events on this `Slider`.
		 * The `mousemove` and `touchmove` events will only only trigger this function during
		 * `mousedown` and `touchstart`. This is due to {Slider#handleMouseDown} and
		 * {Slider#handleMouseUp}.
		 *
		 * param {EventTarget~Event} event
		 *        `mousedown`, `mousemove`, `touchstart`, or `touchmove` event that triggered
		 *        this function
		 *
		 * listens mousemove
		 * listens touchmove
		 */
		handleMouseMove(event: EventTarget.Event): undefined;

		/**
		 * Handle `mouseup` or `touchend` events on the `Slider`.
		 *
		 * param {EventTarget~Event} event
		 *        The `mouseup` event that caused this to run.
		 *
		 * listens touchend
		 * listens mouseup
		 * @fires Slider#sliderinactive
		 */
		handleMouseUp(event: EventTarget.Event): undefined;

		/**
		 * Update the progress bar of the `Slider`.
		 *
		 * returns {number}
		 *          The percentage of progress the progress bar represents as a
		 *          number from 0 to 1.
		 */
		update(): number;

		/**
		 * Calculate distance for slider
		 *
		 * param {EventTarget~Event} event
		 *        The event that caused this function to run.
		 *
		 * return {number}
		 *         The current position of the Slider.
		 *         - position.x for vertical `Slider`s
		 *         - position.y for horizontal `Slider`s
		 */
		calculateDistance(event: EventTarget.Event): number;

		/**
		 * Handle a `focus` event on this `Slider`.
		 *
		 * listens focus
		 */
		handleFocus(): undefined;

		/**
		 * Handle a `focus` event on this `Slider`.
		 *
		 * listens focus
		 */
		handleFocus(): undefined;

		/**
		 * Handle a `blur` event on this `Slider`.
		 *
		 * listens blur
		 */
		handleBlur(): undefined;

		/**
		 * Listener for click events on slider, used to prevent clicks
		 *   from bubbling up to parent elements like button menus.
		 *
		 * param {EventTarget~Event} event
		 *        Event that caused this object to run
		 */
		handleClick(event: EventTarget.Event): undefined;

		/**
		 * Get/set if slider is horizontal for vertical
		 *
		 * param {boolean} [bool]
		 *        - true if slider is vertical,
		 *        - false is horizontal
		 *
		 * return {boolean}
		 *         - true if slider is vertical, and getting
		 *         - false if the slider is horizontal, and getting
		 */
		vertical(bool: boolean): undefined;
		vertical(): boolean;
	}

	const Slider: {
		prototype: Slider;

		/**
		 * Create an instance of this class
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: Slider.Options): Slider;
	};

	namespace Slider {
		interface Options extends Component.Options {
			/**
			 * Set property names to bar to match with the child Slider class is looking for
			 */
			barName?: string;

			/**
			 * Set a horizontal or vertical class on the slider depending on the slider type
			 */
			vertical?: boolean;
		}
	}

	/**
	 * Just an empty spacer element that can be used as an append point for plugins, etc.
	 * Also can be used to create space between elements when necessary.
	 *
	 * extends Component
	 */
	interface Spacer extends Component {
		/**
		 * Builds the default DOM `className`.
		 *
		 * return {string}
		 *         The DOM `className` for this object.
		 */
		buildCSSClass(): string;

		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;
	}

	const Spacer: {
		prototype: Spacer;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        Function that gets called when the `Component` is ready.
		 */
		new (player: Player, options?: Component.Options, ready?: Component.ReadyCallback): Spacer;
	};

	interface Tech extends Component {
		/**
		 * Boolean indicating whether the `Tech` supports fullscreen resize control.
		 * Resizing plugins using request fullscreen reloads the plugin
		 *
		 * type {boolean}
		 * default
		 */
		featuresFullscreenResize: boolean;

		/**
		 * Boolean indicating whether the `Tech` supports muting volume.
		 *
		 * type {bolean}
		 * default
		 */
		featuresMuteControl: boolean;

		/**
		 * Boolean indicating whether the `Tech` supports the native `TextTrack`s.
		 * This will help us integrate with native `TextTrack`s if the browser supports them.
		 *
		 * type {boolean}
		 * default
		 */
		featuresNativeTextTracks: boolean;

		/**
		 * Boolean indicating whether the `Tech` supports changing the speed at which the video
		 * plays. Examples:
		 *   - Set player to play 2x (twice) as fast
		 *   - Set player to play 0.5x (half) as fast
		 *
		 * type {boolean}
		 * default
		 */
		featuresPlaybackRate: boolean;

		/**
		 * Boolean indicating whether the `Tech` supports the `progress` event. This is currently
		 * not triggered by video-js-swf. This will be used to determine if
		 * {Tech#manualProgressOn} should be called.
		 *
		 * type {boolean}
		 * default
		 */
		featuresProgressEvents: boolean;

		/**
		 * Boolean indicating whether the `Tech` supports the `sourceset` event.
		 *
		 * A tech should set this to `true` and then use {Tech#triggerSourceset}
		 * to trigger a {Tech#event:sourceset} at the earliest time after getting
		 * a new source.
		 *
		 * type {boolean}
		 * default
		 */
		featuresSourceset: boolean;

		/**
		 * Boolean indicating whether the `Tech` supports the `timeupdate` event. This is currently
		 * not triggered by video-js-swf. This will be used to determine if
		 * {Tech#manualTimeUpdates} should be called.
		 *
		 * type {boolean}
		 * default
		 */
		featuresTimeupdateEvents: boolean;

		/**
		 * Boolean indicating whether the `Tech` supports volume control.
		 *
		 * type {boolean}
		 * default
		 */
		featuresVolumeControl: boolean;

		/**
		 * Creates a remote text track object and returns an html track element.
		 *
		 * > Note: This can be an emulated {HTMLTrackElement} or a native one.
		 *
		 * param {Object} options
		 *        See {Tech#createRemoteTextTrack} for more detailed properties.
		 *
		 * param {boolean} [manualCleanup=true]
		 *        - When false: the TextTrack will be automatically removed from the video
		 *          element whenever the source changes
		 *        - When True: The TextTrack will have to be cleaned up manually
		 *
		 * return {HTMLTrackElement}
		 *         An Html Track Element.
		 *
		 * @deprecated The default functionality for this function will be equivalent
		 *             to "manualCleanup=false" in the future. The manualCleanup parameter will
		 *             also be removed.
		 */
		addRemoteTextTrack(options: TextTrack.Options, manualCleanup: true): HTMLTrackElement;

		/**
		 * Create and returns a remote {TextTrack} object.
		 *
		 * param {string} kind
		 *        `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata)
		 *
		 * param {string} [label]
		 *        Label to identify the text track
		 *
		 * param {string} [language]
		 *        Two letter language abbreviation
		 *
		 * return {TextTrack}
		 *         The TextTrack that gets created.
		 */
		addTextTrack(kind: string, label: string, language: string): TextTrack;

		/**
		 * Emulate TextTracks using vtt.js if necessary
		 *
		 * @fires Tech#vttjsloaded
		 * @fires Tech#vttjserror
		 */
		addWebVttScript_(): undefined;

		/**
		 * Get the {AudioTrackList}
		 *
		 * returns {AudioTrackList}
		 * method Tech.prototype.audioTracks
		 */
		audioTracks(): TrackList;

		/**
		 * Get and create a `TimeRange` object for buffering.
		 *
		 * return {TimeRange}
		 *         The time range object that was created.
		 */
		buffered(): any;

		/**
		 * Get the percentage of the current video that is currently buffered.
		 *
		 * return {number}
		 *         A number from 0 to 1 that represents the decimal percentage of the
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
		 * param  {string} type
		 *         The mimetype to check for support
		 *
		 * return {string}
		 *         'probably', 'maybe', or empty string
		 *
		 * @see [Spec]{https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType}
		 *
		 * abstract
		 */
		canPlayType(type: string): string;

		/**
		 * Remove any TextTracks added via addRemoteTextTrack that are
		 * flagged for automatic garbage collection
		 */
		cleanupAutoTextTracks(): undefined;

		/**
		 * Clear out a single `TrackList` or an array of `TrackLists` given their names.
		 *
		 * > Note: Techs without source handlers should call this between sources for `video`
		 *         & `audio` tracks. You don't want to use them between tracks!
		 *
		 * param {string[]|string} types
		 *        TrackList names to clear, valid names are `video`, `audio`, and
		 *        `text`.
		 */
		clearTracks(types: string | string[]): undefined;

		/**
		 * Create an emulated TextTrack for use by addRemoteTextTrack
		 *
		 * This is intended to be overridden by classes that inherit from
		 * Tech in order to create native or custom TextTracks.
		 *
		 * param {Object} options
		 *        The object should contain the options to initialize the TextTrack with.
		 *
		 * param {string} [options.kind]
		 *        `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata).
		 *
		 * param {string} [options.label].
		 *        Label to identify the text track
		 *
		 * param {string} [options.language]
		 *        Two letter language abbreviation.
		 *
		 * return {HTMLTrackElement}
		 *         The track element that gets created.
		 */
		createRemoteTextTrack(options: TextTrack.Options): HTMLTextAreaElement;

		/**
		 * Turn off all event polyfills, clear the `Tech`s {AudioTrackList},
		 * {VideoTrackList}, and {TextTrackList}, and dispose of this Tech.
		 *
		 * @fires Component#dispose
		 */
		dispose(): undefined;

		/**
		 * Emulate texttracks
		 *
		 */
		emulateTextTracks(): undefined;

		/**
		 * Get or set an error on the Tech.
		 *
		 * param {MediaError} [err]
		 *        Error to set on the Tech
		 *
		 * return {MediaError|null}
		 *         The current error object on the tech, or null if there isn't one.
		 */
		error(err: MediaError): MediaError | null;

		/**
		 * Gets available media playback quality metrics as specified by the W3C's Media
		 * Playback Quality API.
		 *
		 * @see [Spec]{https://wicg.github.io/media-playback-quality}
		 *
		 * return {Object}
		 *         An object with supported media playback quality metrics
		 *
		 * abstract
		 */
		getVideoPlaybackQuality(): any;

		/**
		 * Turn on listeners for {VideoTrackList}, {{AudioTrackList}, and
		 * {TextTrackList} events.
		 *
		 * This adds {EventTarget~EventListeners} for `addtrack`, and  `removetrack`.
		 *
		 * @fires Tech#audiotrackchange
		 * @fires Tech#videotrackchange
		 * @fires Tech#texttrackchange
		 */
		initTrackListeners(): undefined;

		manualProgressOff(): undefined;

		/**
		 * Polyfill the `progress` event for browsers that don't support it natively.
		 *
		 * @see {Tech#trackProgress}
		 */
		manualProgressOn(): undefined;

		/**
		 * Turn off the polyfill for `progress` events that was created in
		 * {Tech#manualProgressOn}
		 */
		manualTimeUpdatesOff(): undefined;

		/**
		 * Polyfill the `timeupdate` event for browsers that don't support it.
		 *
		 * @see {Tech#trackCurrentTime}
		 */
		manualTimeUpdatesOn(): undefined;

		/**
		 * Update our internal duration on a `durationchange` event by calling
		 * {Tech#duration}.
		 *
		 * param {EventTarget~Event} event
		 *        The `durationchange` event that caused this to run.
		 *
		 * listens Tech#durationchange
		 */
		onDurationChange(event: Event): undefined;

		/**
		 * Attempt to force override of native audio tracks.
		 *
		 * param {Boolean} override - If set to true native audio will be overridden,
		 * otherwise native audio will potentially be used.
		 *
		 * abstract
		 */
		overrideNativeAudioTracks(override: boolean): undefined;

		/**
		 * Attempt to force override of native video tracks.
		 *
		 * param {Boolean} override - If set to true native video will be overridden,
		 * otherwise native video will potentially be used.
		 *
		 * abstract
		 */
		overrideNativeVideoTracks(override: boolean): undefined;

		/**
		 * Returns the `TimeRange`s that have been played through for the current source.
		 *
		 * > NOTE: This implementation is incomplete. It does not track the played `TimeRange`.
		 *         It only checks whether the source has played at all or not.
		 *
		 * return {TimeRange}
		 *         - A single time range if this video has played
		 *         - An empty set of ranges if not.
		 */
		played(): any;

		/**
		 * A method to check for the presence of the 'playsinline' <video> attribute.
		 *
		 * abstract
		 */
		playsinline(): any;

		/**
		 * Get the remote element {HTMLTrackElementList}
		 *
		 * returns {HTMLTrackElementList}
		 * method Tech.prototype.remoteTextTrackEls
		 */
		remoteTextTrackEls(): HTMLTrackElementList;

		/**
		 * Get the remote element {TextTrackList}
		 *
		 * returns {TextTrackList}
		 * method Tech.prototype.remoteTextTracks
		 */
		remoteTextTracks(): TextTrackList;

		/**
		 * Remove a remote text track from the remote `TextTrackList`.
		 *
		 * param {TextTrack} track
		 *        `TextTrack` to remove from the `TextTrackList`
		 */
		removeRemoteTextTrack(track: TextTrack): undefined;

		/**
		 * Reset the tech, which will removes all sources and reset the internal readyState.
		 *
		 * abstract
		 */
		reset(): undefined;

		/**
		 * Causes a manual time update to occur if {Tech#manualTimeUpdatesOn} was
		 * previously called.
		 *
		 * @fires Tech#timeupdate
		 */
		setCurrentTime(): undefined;

		/**
		 * A method to set or unset the 'playsinline' <video> attribute.
		 *
		 * abstract
		 */
		setPlaysinline(): undefined;

		/**
		 * A method to set a poster from a `Tech`.
		 *
		 * abstract
		 */
		setPoster(): undefined;

		/**
		 * Stop the interval function created in {Tech#trackCurrentTime} so that the
		 * `timeupdate` event is no longer triggered.
		 *
		 * listens {Tech#pause}
		 */
		stopTrackingCurrentTime(): undefined;

		/**
		 * Turn off the polyfill for `progress` events that was created in
		 * {Tech#manualProgressOn}
		 * Stop manually tracking progress events by clearing the interval that was set in
		 * {Tech#trackProgress}.
		 */
		stopTrackingProgress(): undefined;

		/**
		 * Get the {TextTrackList}
		 *
		 * returns {TextTrackList}
		 * method Tech.prototype.textTracks
		 */
		textTracks(): TextTrackList;

		/**
		 * Sets up an interval function to track current time and trigger `timeupdate` every
		 * 250 milliseconds.
		 *
		 * listens Tech#play
		 * @triggers Tech#timeupdate
		 */
		trackCurrentTime(): undefined;

		/**
		 * This is used to trigger a `progress` event when the buffered percent changes. It
		 * sets an interval function that will be called every 500 milliseconds to check if the
		 * buffer end percent has changed.
		 *
		 * > This function is called by {Tech#manualProgressOn}
		 *
		 * param {EventTarget~Event} event
		 *        The `ready` event that caused this to run.
		 *
		 * listens Tech#ready
		 * @fires Tech#progress
		 */
		trackProgress(event: EventTarget.Event): undefined;

		/**
		 * A special function to trigger source set in a way that will allow player
		 * to re-trigger if the player or tech are not ready yet.
		 *
		 * @fires Tech#sourceset
		 * param {string} src The source string at the time of the source changing.
		 */
		triggerSourceset(src: string): undefined;

		/**
		 * Get the {VideoTrackList}
		 *
		 * returns {VideoTrackList}
		 * method Tech.prototype.videoTracks
		 */
		videoTracks(): TrackList;
	}

	const Tech: {
		prototype: Tech;

		/**
		 * Create an instance of this Tech.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Component~ReadyCallback} ready
		 *        Callback function to call when the `HTML5` Tech is ready.
		 */
		new (options?: any, ready?: Component.ReadyCallback): Tech;

		/**
		 * Check if the tech can support the given source
		 * param {Object} srcObj
		 *        The source object
		 * param {Object} options
		 *        The options passed to the tech
		 * return {string} 'probably', 'maybe', or '' (empty string)
		 */
		canPlaySource(srcObj: any, options: any): 'problably' | 'maybe' | '';

		/**
		 * Check if the type is supported by this tech.
		 *
		 * The base tech does not support any type, but source handlers might
		 * overwrite this.
		 *
		 * param {string} type
		 *        The media type to check
		 * return {string} Returns the native video element's response
		 */
		canPlayType(type: string): string;

		/**
		 * Get a `Tech` from the shared list by name.
		 *
		 * param {string} name
		 *        `camelCase` or `TitleCase` name of the Tech to get
		 *
		 * return {Tech|undefined}
		 *         The `Tech` or undefined if there was no tech with the name requested.
		 */
		getTech(name: string): Tech | undefined;

		/**
		 * Return whether the argument is a Tech or not.
		 * Can be passed either a Class like `Html5` or a instance like `player.tech_`
		 *
		 * param {Object} component
		 *        The item to check
		 *
		 * return {boolean}
		 *         Whether it is a tech or not
		 *         - True if it is a tech
		 *         - False if it is not
		 */
		isTech(component: any): boolean

		/**
		 * Registers a `Tech` into a shared list for videojs.
		 *
		 * param {string} name
		 *        Name of the `Tech` to register.
		 *
		 * param {Object} tech
		 *        The `Tech` class to register.
		 */
		registerTech(name: string, tech: any): undefined;

		/**
		 * A functional mixin for techs that want to use the Source Handler pattern.
		 * Source handlers are scripts for handling specific formats.
		 * The source handler pattern is used for adaptive formats (HLS, DASH) that
		 * manually load video data and feed it into a Source Buffer (Media Source Extensions)
		 * Example: `Tech.withSourceHandlers.call(MyTech);`
		 *
		 * param {Tech} tech
		 *        The tech to add source handler functions to.
		 *
		 */
		withSourceHandlers(tech: typeof Tech): undefined;
	};

	namespace Tech {
		/**
		 * An Object containing a structure like: `{src: 'url', type: 'mimetype'}` or string
		 * that just contains the src url alone.
		 * `var SourceObject = {src: 'http://ex.com/video.mp4', type: 'video/mp4'};`
		 * `var SourceString = 'http://example.com/some-video.mp4';`
		 *
		 * typedef {Object|string} Tech~SourceObject
		 *
		 * property {string} src
		 *           The url to the source
		 *
		 * property {string} type
		 *           The mime type of the source
		 */
		interface SourceObject {
			src: string;
			type: string;
		}
	}

	/**
	 * The base class for buttons that toggle specific text track types (e.g. subtitles)
	 *
	 * extends MenuButton
	 */
	interface TextTrackButton extends MenuButton {
		/**
		 * Create a menu item for each text track
		 *
		 * param {TextTrackMenuItem[]} [items=[]]
		 *        Existing array of items to use during creation
		 *
		 * param {typeof TextTrackMenuItem} [TrackMenuItem=TextTrackMenuItem]
		 *        Existing array of items to use during creation
		 *
		 * return {TextTrackMenuItem[]}
		 *         Array of menu items that were created
		 */
		createItems(items?: TextTrackMenuItem[], TrackMenuItem?: typeof TextTrackMenuItem): TextTrackMenuItem[];
	}

	const TextTrackButton: {
		prototype: TextTrackButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: TrackButton.Options): TextTrackButton;
	};

	/**
	 * A List of TextTrackCues.
	 *
	 * @see [Spec]{https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcuelist}
	 */
	interface TextTrackCueList {
		/**
		 * Index getters for the cues.
		 *
		 * param {number} index
		 */
		[index: number]: TextTrackCueList.TextTrackCue;

		/**
		 * memberof TextTrackCueList
		 * member {number} length
		 *         The current number of `TextTrackCue`s in the TextTrackCueList.
		 * instance
		 */
		length: number;

		/**
		 * Get a `TextTrackCue` that is currently in the `TextTrackCueList` by id.
		 *
		 * param {string} id
		 *        The id of the cue that should be searched for.
		 *
		 * return {TextTrackCueList~TextTrackCue|null}
		 *         A single cue or null if none was found.
		 */
		getCueById(id: string): TextTrackCueList.TextTrackCue;
	}
	const TextTrackCueList: {
		prototype: TextTrackCueList;

		/**
		 * Create an instance of this class..
		 *
		 * param {Array} cues
		 *        A list of cues to be initialized with
		 */
		new (cues: TextTrackCueList.TextTrackCue[]): TextTrackCueList;
	};

	namespace TextTrackCueList {
		/**
		 * typedef {Object} TextTrackCueList~TextTrackCue
		 *
		 * property {string} id
		 *           The unique id for this text track cue
		 *
		 * property {number} startTime
		 *           The start time for this text track cue
		 *
		 * property {number} endTime
		 *           The end time for this text track cue
		 *
		 * property {boolean} pauseOnExit
		 *           Pause when the end time is reached if true.
		 *
		 * @see [Spec]{https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcue}
		 */
		interface TextTrackCue {
			id: string;
			startTime: number;
			endTime: number;
			text: string;
			pauseOnExit: boolean;
		}
	}

	/**
	 * The specific menu item type for selecting a language within a text track kind
	 *
	 * extends MenuItem
	 */
	interface TextTrackMenuItem extends MenuItem {
		/**
		 * This gets called when an `TextTrackMenuItem` is "clicked". See
		 * {ClickableComponent} for more detailed information on what a click can be.
		 *
		 * param {EventTarget~Event} event
		 *        The `keydown`, `tap`, or `click` event that caused this function to be
		 *        called.
		 *
		 * listens tap
		 * listens click
		 */
		handleClick(event: EventTarget.Event): undefined;

		/**
		 * Handle text track list change
		 *
		 * param {EventTarget~Event} event
		 *        The `change` event that caused this function to be called.
		 *
		 * listens TextTrackList#change
		 */
		handleTracksChange(event: EventTarget.Event): undefined;

		/**
		 * Handle selected language change
		 *
		 * param {EventTarget~Event} event
		 *        The `change` event that caused this function to be called.
		 */
		handleSelectedLanguageChange(event: EventTarget.Event): undefined;
	}

	const TextTrackMenuItem: {
		prototype: TextTrackMenuItem;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: TextTrackMenuItem.Options): TextTrackMenuItem;
	};

	namespace TextTrackMenuItem {
		interface Options extends MenuItem.Options {
			track: TextTrack;
		}
	}

	/**
	 * Create an instance of this class.
	 *
	 * param {Object} options={}
	 *        Object of option names and values
	 *
	 * param {Tech} options.tech
	 *        A reference to the tech that owns this TextTrack.
	 *
	 * param {TextTrack~Kind} [options.kind='subtitles']
	 *        A valid text track kind.
	 *
	 * param {TextTrack~Mode} [options.mode='disabled']
	 *        A valid text track mode.
	 *
	 * param {string} [options.id='vjs_track_' + Guid.newGUID()]
	 *        A unique id for this TextTrack.
	 *
	 * param {string} [options.label='']
	 *        The menu label for this track.
	 *
	 * param {string} [options.language='']
	 *        A valid two character language code.
	 *
	 * param {string} [options.srclang='']
	 *        A valid two character language code. An alternative, but deprioritized
	 *        version of `options.language`
	 *
	 * param {string} [options.src]
	 *        A url to TextTrack cues.
	 *
	 * param {boolean} [options.default]
	 *        If this track should default to on or off.
	 */
	interface TextTrack extends Track {
		/**
		 * memberof TextTrack
		 * member {TextTrackCueList} activeCues
		 *         The list text track cues that are currently active for this TextTrack.
		 * instance
		 */
		activeCues: TextTrackCueList;

		/**
		 * memberof TextTrack
		 * member {TextTrackCueList} cues
		 *         The text track cue list for this TextTrack.
		 * instance
		 */
		cues: TextTrackCueList;

		/**
		 * memberof TextTrack
		 * member {boolean} default
		 *         If this track was set to be on or off by default. Cannot be changed after
		 *         creation.
		 * instance
		 *
		 * readonly
		 */
		default: boolean;

		/**
		 * memberof TextTrack
		 * member {string} mode
		 *         Set the mode of this TextTrack to a valid {TextTrack~Mode}. Will
		 *         not be set if setting to an invalid mode.
		 * instance
		 *
		 * @fires TextTrack#modechange
		 */
		mode: TextTrack.Mode;

		/**
		 * Add a cue to the internal list of cues.
		 *
		 * param {TextTrackCueList~TextTrackCue} cue
		 *        The cue to add to our internal list
		 */
		addCue(cue: TextTrackCueList.TextTrackCue): undefined;

		/**
		 * Remove a cue from our internal list
		 *
		 * param {TextTrackCueList~TextTrackCue} cue
		 *        The cue to remove from our internal list
		 */
		removeCue(cue: TextTrackCueList.TextTrackCue): undefined;
	}

	const TextTrack: {
		prototype: TextTrack;

		/**
		 * Create an instance of this class.
		 *
		 * param {Object} options={}
		 *        Object of option names and values
		 *
		 * param {Tech} options.tech
		 *        A reference to the tech that owns this TextTrack.
		 *
		 * param {TextTrack~Kind} [options.kind='subtitles']
		 *        A valid text track kind.
		 *
		 * param {TextTrack~Mode} [options.mode='disabled']
		 *        A valid text track mode.
		 *
		 * param {string} [options.id='vjs_track_' + Guid.newGUID()]
		 *        A unique id for this TextTrack.
		 *
		 * param {string} [options.label='']
		 *        The menu label for this track.
		 *
		 * param {string} [options.language='']
		 *        A valid two character language code.
		 *
		 * param {string} [options.srclang='']
		 *        A valid two character language code. An alternative, but deprioritized
		 *        version of `options.language`
		 *
		 * param {string} [options.src]
		 *        A url to TextTrack cues.
		 *
		 * param {boolean} [options.default]
		 *        If this track should default to on or off.
		 */
		new (options: TextTrack.Options): TextTrack;
	};

	namespace TextTrack {
		interface Options extends Track.Options {
			tech?: Tech;
			kind?: Kind;
			mode?: Mode;
			srclang?: string;
			src?: string;
			default?: boolean;
		}

		type Kind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';

		type Mode = 'disabled' | 'hidden' | 'showing';
	}

	/**
	 * file text-track-cue-list.js
	 *
	 * typedef {Object} TextTrackCueList~TextTrackCue
	 *
	 * property {string} id
	 *           The unique id for this text track cue
	 *
	 * property {number} startTime
	 *           The start time for this text track cue
	 *
	 * property {number} endTime
	 *           The end time for this text track cue
	 *
	 * property {boolean} pauseOnExit
	 *           Pause when the end time is reached if true.
	 *
	 * @see [Spec]{https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcue}
	 */
	interface TextTrackList extends TrackList {
		[index: number]: TextTrack;

		/**
		 * Add a {TextTrack} to the `TextTrackList`
		 *
		 * param {TextTrack} track
		 *        The text track to add to the list.
		 *
		 * @fires TrackList#addtrack
		 */
		addTrack(track: TextTrack): undefined;
	}

	const TextTrackList: {
		prototype: TextTrackList;

		/**
		 * Create an instance of this class
		 *
		 * param {TextTrack[]} tracks
		 *        A list of tracks to initialize the list with.
		 *
		 * abstract
		 */
		new (tracks?: TextTrack[]): TextTrackList;
	};

	/**
	 * An object that contains ranges of time for various reasons.
	 *
	 * typedef {Object} TimeRange
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges
	 */
	interface TimeRange {
		/**
		 * property {number} length
		 *           The number of time ranges represented by this Object
		 */
		readonly length: number;

		/**
		 * Returns the time offset at which a specified time range ends.
		 *
		 * param {number} [index=0]
		 *        The range number to return the time for.
		 *
		 * return {number}
		 *         The time that offset at the specified index.
		 */
		end(index: number): number;

		/**
		 * Returns the time offset at which a specified time range begins.
		 *
		 * param {number} [index=0]
		 *        The range number to return the time for.
		 *
		 * return {number}
		 *         The time that offset at the specified index.
		 */
		start(index: number): number;
	}

	/**
	 * Displays the time left in the video
	 *
	 * extends Component
	 */
	interface TimeDisplay extends Component {
		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Dispose of the `TimeDisplay` and all child components.
		 *
		 * @fires Component#dispose
		 */
		dispose(): undefined;

		/**
		 * To be filled out in the child class, should update the displayed time
		 * in accordance with the fact that the current time has changed.
		 *
		 * param {EventTarget~Event} [event]
		 *        The `timeupdate`  event that caused this to run.
		 *
		 * listens Player#timeupdate
		 */
		updateContent(event?: EventTarget.Event): undefined;
	}

	const TimeDisplay: {
		prototype: TimeDisplay;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): TimeDisplay;
	};

	/**
	 * Time tooltips display a time above the progress bar.
	 *
	 * extends Component
	 */
	interface TimeToolTip extends Component {
		/**
		 * Create the time tooltip DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Updates the position of the time tooltip relative to the `SeekBar`.
		 *
		 * param {Object} seekBarRect
		 *        The `ClientRect` for the {SeekBar} element.
		 *
		 * param {number} seekBarPoint
		 *        A number from 0 to 1, representing a horizontal reference point
		 *        from the left edge of the {SeekBar}
		 *
		 * param {string} content
		 */
		update(seekBarRect: ClientRect, seekBarPoint: number, content: string): undefined;
	}

	const TimeToolTip: {
		prototype: TimeToolTip;

		/**
		 * Creates an instance of this class.
		 *
		 * param  {Player} player
		 *         The `Player` that this class should be attached to.
		 *
		 * param  {Object} [options]
		 *         The key/value store of player options.
		 */
		new (player: Player, options?: Component.Options): TimeToolTip;
	};

	/**
	 * A Track class that contains all of the common functionality for {AudioTrack},
	 * {VideoTrack}, and {TextTrack}.
	 *
	 * > Note: This class should not be used directly
	 *
	 * @see {https://html.spec.whatwg.org/multipage/embedded-content.html}
	 * extends EventTarget
	 * abstract
	 */
	interface Track extends EventTarget {
		/**
		 * memberof Track
		 * member {string} id
		 *         The id of this track. Cannot be changed after creation.
		 * instance
		 *
		 * readonly
		 */
		id: string;

		/**
		 * memberof Track
		 * member {string} kind
		 *         The kind of track that this is. Cannot be changed after creation.
		 * instance
		 *
		 * readonly
		 */
		kind: string;

		/**
		 * memberof Track
		 * member {string} label
		 *         The label of this track. Cannot be changed after creation.
		 * instance
		 *
		 * readonly
		 */
		label: string;

		/**
		 * memberof Track
		 * member {string} language
		 *         The two letter language code for this track. Cannot be changed after
		 *         creation.
		 * instance
		 *
		 * readonly
		 */
		language: string;
	}

	const Track: {
		prototype: Track;

		/**
		 * Create an instance of this class.
		 *
		 * param {Object} [options={}]
		 *        Object of option names and values
		 *
		 * param {string} [options.kind='']
		 *        A valid kind for the track type you are creating.
		 *
		 * param {string} [options.id='vjs_track_' + Guid.newGUID()]
		 *        A unique id for this AudioTrack.
		 *
		 * param {string} [options.label='']
		 *        The menu label for this track.
		 *
		 * param {string} [options.language='']
		 *        A valid two character language code.
		 *
		 * abstract
		 */
		new (options?: Track.Options): Track;
	};

	namespace Track {
		interface Options {
			id?: string;
			kind?: string;
			label?: string;
			language?: string;
		}
	}

	/**
	 * The base class for buttons that toggle specific  track types (e.g. subtitles).
	 *
	 * extends MenuButton
	 */
	const TrackButton: {
		prototype: MenuButton;

		/**
		 * Creates an instance of this class.
		 *
		 * param  {Player} player
		 *         The `Player` that this class should be attached to.
		 *
		 * param  {Object} [options]
		 *         The key/value store of player options.
		 */
		new (player: Player, options?: TrackButton.Options): MenuButton;
	};

	namespace TrackButton {
		interface Options extends MenuButton.Options {
			track: Track[];
		}
	}

	/**
	 * Common functionaliy between {TextTrackList}, {AudioTrackList}, and
	 * {VideoTrackList}
	 *
	 * extends EventTarget
	 */
	interface TrackList extends EventTarget {
		[index: number]: Track;

		/**
		 * memberof TrackList
		 * member {number} length
		 *         The current number of `Track`s in the this Trackist.
		 * instance
		 */
		length: number;

		/**
		 * Add a {Track} to the `TrackList`
		 *
		 * param {Track} track
		 *        The audio, video, or text track to add to the list.
		 *
		 * @fires TrackList#addtrack
		 */
		addTrack(track: Track): undefined;

		/**
		 * Remove a {Track} from the `TrackList`
		 *
		 * param {Track} track
		 *        The audio, video, or text track to remove from the list.
		 *
		 * @fires TrackList#removetrack
		 */
		removeTrack(track: Track): undefined;
	}

	const TrackList: {
		prototype: TrackList;

		/**
		 * Create an instance of this class
		 *
		 * param {Track[]} tracks
		 *        A list of tracks to initialize the list with.
		 *
		 * abstract
		 */
		new (tracks?: Track[]): TrackList;
	};

	/**
	 * The bar that contains the volume level and can be clicked on to adjust the level
	 *
	 * extends Slider
	 */
	interface VolumeBar extends Slider {
		/**
		 * If the player is muted unmute it.
		 */
		checkMuted(): undefined;

		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Handle mouse down on volume bar
		 *
		 * param {EventTarget~Event} event
		 *        The `mousedown` event that caused this to run.
		 *
		 * listens mousedown
		 */
		handleMouseDown(event: EventTarget.Event): undefined;

		/**
		 * Get percent of volume level
		 *
		 * return {number}
		 *         Volume level percent as a decimal number.
		 */
		getPercent(): number;

		/**
		 * Decrease volume level for keyboard users
		 */
		stepBack(): undefined;

		/**
		 * Increase volume level for keyboard users
		 */
		stepForward(): undefined;

		/**
		 * Update ARIA accessibility attributes
		 *
		 * param {EventTarget~Event} [event]
		 *        The `volumechange` event that caused this function to run.
		 *
		 * listens Player#volumechange
		 */
		updateARIAAttributes(event: EventTarget.Event): undefined;
	}

	const VolumeBar: {
		prototype: VolumeBar;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 */
		new(player: Player, options?: Slider.Options): VolumeBar;
	};

	/**
	 * The component for controlling the volume level
	 *
	 * extends Component
	 */
	interface VolumeControl extends Component {
		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;

		/**
		 * Handle `mousedown` or `touchstart` events on the `VolumeControl`.
		 *
		 * param {EventTarget~Event} event
		 *        `mousedown` or `touchstart` event that triggered this function
		 *
		 * listens mousedown
		 * listens touchstart
		 */
		handleMouseDown(event: EventTarget.Event): undefined;

		/**
		 * Handle `mouseup` or `touchend` events on the `VolumeControl`.
		 *
		 * param {EventTarget~Event} event
		 *        `mouseup` or `touchend` event that triggered this function.
		 *
		 * listens touchend
		 * listens mouseup
		 */
		handleMouseUp(event: EventTarget.Event): undefined;

		/**
		 * Handle `mousedown` or `touchstart` events on the `VolumeControl`.
		 *
		 * param {EventTarget~Event} event
		 *        `mousedown` or `touchstart` event that triggered this function
		 *
		 * listens mousedown
		 * listens touchstart
		 */
		handleMouseMove(event: EventTarget.Event): undefined;
	}

	const VolumeControl: {
		prototype: VolumeControl;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of player options.
		 */
		new(player: Player, options?: VolumeControl.Options): VolumeControl;
	};

	namespace VolumeControl {
		interface Options extends Component.Options {
			volumeBar?: VolumeBar;
			vertical?: boolean;
		}
	}

	/**
	 * Shows volume level
	 *
	 * extends Component
	 */
	interface VolumeLevel extends Component {
		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;
	}

	const VolumeLevel: {
		prototype: VolumeLevel;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options]
		 *        The key/value store of player options.
		 *
		 * param {Object[]} [options.children]
		 *        An array of children objects to intialize this component with. Children objects have
		 *        a name property that will be used if more than one component of the same type needs to be
		 *        added.
		 *
		 * param {Component~ReadyCallback} [ready]
		 *        Function that gets called when the `Component` is ready.
		 */
		new (player: Player, options?: Component.Options, ready?: Component.ReadyCallback): VolumeLevel;
	};

	/**
	 * A Component to contain the MuteToggle and VolumeControl so that
	 * they can work together.
	 *
	 * extends Component
	 */
	interface VolumePanel extends Component {
		/**
		 * Create the `Component`'s DOM element
		 *
		 * return {Element}
		 *         The element that was created.
		 */
		createEl(): HTMLDivElement;
	}

	const VolumePanel: {
		prototype: VolumePanel;

		/**
		 * Creates an instance of this class.
		 *
		 * param {Player} player
		 *        The `Player` that this class should be attached to.
		 *
		 * param {Object} [options={}]
		 *        The key/value store of player options.
		 */
		new (player: Player, options?: VolumePanel): VolumePanel;
	};

	namespace VolumePanel {
		interface Options extends Component.Options {
			inline?: boolean;
			volumeControl?: VolumeControl.Options;
		}
	}

	namespace url {
		/**
		 * typedef {Object} url:URLObject
		 *
		 * property {string} protocol
		 *           The protocol of the url that was parsed.
		 *
		 * property {string} hostname
		 *           The hostname of the url that was parsed.
		 *
		 * property {string} port
		 *           The port of the url that was parsed.
		 *
		 * property {string} pathname
		 *           The pathname of the url that was parsed.
		 *
		 * property {string} search
		 *           The search query of the url that was parsed.
		 *
		 * property {string} hash
		 *           The hash of the url that was parsed.
		 *
		 * property {string} host
		 *           The host of the url that was parsed.
		 */
		interface URLObject {
			protocol: string;
			hostname: string;
			port: string;
			pathname: string;
			search: string;
			hash: string;
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
