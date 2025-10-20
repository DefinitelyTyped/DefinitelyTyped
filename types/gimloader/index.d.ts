declare namespace Gimloader {
    type event = symbol | string;
    type eventNS = string | event[];

    interface ConstructorOptions {
        /**
         * @default false
         * @description set this to `true` to use wildcards.
         */
        wildcard?: boolean;
        /**
         * @default '.'
         * @description the delimiter used to segment namespaces.
         */
        delimiter?: string;
        /**
         * @default false
         * @description set this to `true` if you want to emit the newListener events.
         */
        newListener?: boolean;
        /**
         * @default false
         * @description set this to `true` if you want to emit the removeListener events.
         */
        removeListener?: boolean;
        /**
         * @default 10
         * @description the maximum amount of listeners that can be assigned to an event.
         */
        maxListeners?: number;
        /**
         * @default false
         * @description show event name in memory leak message when more than maximum amount of listeners is assigned, default false
         */
        verboseMemoryLeak?: boolean;
        /**
         * @default false
         * @description disable throwing uncaughtException if an error event is emitted and it has no listeners
         */
        ignoreErrors?: boolean;
    }
    interface ListenerFn {
        (...values: any[]): void;
    }
    interface EventAndListener {
        (event: string | string[], ...values: any[]): void;
    }

    interface WaitForFilter {
        (...values: any[]): boolean;
    }

    interface WaitForOptions {
        /**
         * @default 0
         */
        timeout: number;
        /**
         * @default null
         */
        filter: WaitForFilter;
        /**
         * @default false
         */
        handleError: boolean;
        /**
         * @default Promise
         */
        Promise: any;
        /**
         * @default false
         */
        overload: boolean;
    }

    interface CancelablePromise<T> extends Promise<T> {
        cancel(reason: string): undefined;
    }

    interface OnceOptions {
        /**
         * @default 0
         */
        timeout: number;
        /**
         * @default Promise
         */
        Promise: any;
        /**
         * @default false
         */
        overload: boolean;
    }

    interface ListenToOptions {
        on?: { (event: event | eventNS, handler: ListenerFn): void };
        off?: { (event: event | eventNS, handler: ListenerFn): void };
        reducers: (event: any) => boolean | object;
    }

    interface GeneralEventEmitter {
        addEventListener(event: event, handler: ListenerFn): this;
        removeEventListener(event: event, handler: ListenerFn): this;
        addListener?(event: event, handler: ListenerFn): this;
        removeListener?(event: event, handler: ListenerFn): this;
        on?(event: event, handler: ListenerFn): this;
        off?(event: event, handler: ListenerFn): this;
    }

    interface OnOptions {
        async?: boolean;
        promisify?: boolean;
        nextTick?: boolean;
        objectify?: boolean;
    }

    interface Listener {
        emitter: EventEmitter2;
        event: event | eventNS;
        listener: ListenerFn;
        off(): this;
    }

    class EventEmitter2 {
        constructor(options?: ConstructorOptions);
        emit(event: event | eventNS, ...values: any[]): boolean;
        emitAsync(event: event | eventNS, ...values: any[]): Promise<any[]>;
        addListener(event: event | eventNS, listener: ListenerFn): this | Listener;
        on(event: event | eventNS, listener: ListenerFn, options?: boolean | OnOptions): this | Listener;
        prependListener(event: event | eventNS, listener: ListenerFn, options?: boolean | OnOptions): this | Listener;
        once(event: event | eventNS, listener: ListenerFn, options?: true | OnOptions): this | Listener;
        prependOnceListener(
            event: event | eventNS,
            listener: ListenerFn,
            options?: boolean | OnOptions,
        ): this | Listener;
        many(
            event: event | eventNS,
            timesToListen: number,
            listener: ListenerFn,
            options?: boolean | OnOptions,
        ): this | Listener;
        prependMany(
            event: event | eventNS,
            timesToListen: number,
            listener: ListenerFn,
            options?: boolean | OnOptions,
        ): this | Listener;
        onAny(listener: EventAndListener): this;
        prependAny(listener: EventAndListener): this;
        offAny(listener: ListenerFn): this;
        removeListener(event: event | eventNS, listener: ListenerFn): this;
        off(event: event | eventNS, listener: ListenerFn): this;
        removeAllListeners(event?: event | eventNS): this;
        setMaxListeners(n: number): void;
        getMaxListeners(): number;
        eventNames(nsAsArray?: boolean): (event | eventNS)[];
        listenerCount(event?: event | eventNS): number;
        listeners(event?: event | eventNS): ListenerFn[];
        listenersAny(): ListenerFn[];
        waitFor(event: event | eventNS, timeout?: number): CancelablePromise<any[]>;
        waitFor(event: event | eventNS, filter?: WaitForFilter): CancelablePromise<any[]>;
        waitFor(event: event | eventNS, options?: WaitForOptions): CancelablePromise<any[]>;
        listenTo(target: GeneralEventEmitter, events: event | eventNS, options?: ListenToOptions): this;
        listenTo(target: GeneralEventEmitter, events: event[], options?: ListenToOptions): this;
        listenTo(target: GeneralEventEmitter, events: object, options?: ListenToOptions): this;
        stopListeningTo(target?: GeneralEventEmitter, event?: event | eventNS): boolean;
        hasListeners(event?: string): boolean;
        static once(emitter: EventEmitter2, event: event | eventNS, options?: OnceOptions): CancelablePromise<any[]>;
        static defaultMaxListeners: number;
    }

    class PluginsApi {
        /** A list of all the plugins installed */
        get list(): string[];
        /** Whether a plugin exists and is enabled */
        isEnabled(name: string): boolean;
        /** Gets the headers of a plugin, such as version, author, and description */
        getHeaders(name: string): {
            name: string;
            description: string;
            author: string;
            version: string | null;
            reloadRequired: string;
            isLibrary: string;
            downloadUrl: string | null;
            webpage: string | null;
            needsLib: string[];
            optionalLib: string[];
            syncEval: string;
            gamemode: string[];
            hasSettings: string;
        };
        /** Gets the exported values of a plugin, if it has been enabled */
        get(name: string): any;
        /**
         * @deprecated Use {@link get} instead
         * @hidden
         */
        getPlugin(name: string): {
            return: any;
        };
    }

    class LibsApi {
        /** A list of all the libraries installed */
        get list(): string[];
        /** Gets whether or not a plugin is installed and enabled */
        isEnabled(name: string): boolean;
        /** Gets the headers of a library, such as version, author, and description */
        getHeaders(name: string): {
            name: string;
            description: string;
            author: string;
            version: string | null;
            reloadRequired: string;
            isLibrary: string;
            downloadUrl: string | null;
            webpage: string | null;
            needsLib: string[];
            optionalLib: string[];
            syncEval: string;
            gamemode: string[];
            hasSettings: string;
        };
        /** Gets the exported values of a library */
        get(name: string): any;
    }

    class ScopedRewriterApi {
        private readonly id;
        constructor(id: string);
        /**
         * Creates a hook that will modify the code of a script before it is run.
         * This value is cached, so this hook may not run on subsequent page loads.
         * addParseHook should always be called in the top level of a script.
         * @param prefix Limits the hook to only running on scripts beginning with this prefix.
         * Passing `true` will only run on the index script, and passing `false` will run on all scripts.
         * @param callback The function that will modify the code. Should return the modified code. Cannot have side effects.
         */
        addParseHook(prefix: string | boolean, callback: (code: string) => string): () => void;
        /**
         * Creates a shared value that can be accessed from any script.
         * @param id A unique identifier for the shared value.
         * @param value The value to be shared.
         * @returns A string representing the code to access the shared value.
         */
        createShared(id: string, value: any): string;
        /** Removes the shared value with a certain id created by {@link createShared} */
        removeSharedById(id: string): void;
    }

    class RewriterApi {
        /**
         * Creates a hook that will modify the code of a script before it is run.
         * This value is cached, so this hook may not run on subsequent page loads.
         * addParseHook should always be called in the top level of a script.
         * @param pluginName The name of the plugin creating the hook.
         * @param prefix Limits the hook to only running on scripts beginning with this prefix.
         * Passing `true` will only run on the index script, and passing `false` will run on all scripts.
         * @param callback The function that will modify the code. Should return the modified code. Cannot have side effects.
         */
        addParseHook(pluginName: string, prefix: string | boolean, callback: (code: string) => string): () => void;
        /** Removes all hooks created by a certain plugin */
        removeParseHooks(pluginName: string): void;
        /**
         * Creates a shared value that can be accessed from any script.
         * @param pluginName The name of the plugin creating the shared value.
         * @param id A unique identifier for the shared value.
         * @param value The value to be shared.
         * @returns A string representing the code to access the shared value.
         */
        createShared(pluginName: string, id: string, value: any): string;
        /** Removes all values created by {@link createShared} by a certain plugin */
        removeShared(pluginName: string): void;
        /** Removes the shared value with a certain id created by {@link createShared} */
        removeSharedById(pluginName: string, id: string): void;
    }

    class ScopedPatcherApi {
        private readonly id;
        constructor(id: string);
        /**
         * Runs a callback after a function on an object has been run
         * @returns A function to remove the patch
         */
        after(object: any, method: string, callback: PatcherAfterCallback): () => void;
        /**
         * Runs a callback before a function on an object has been run.
         * Return true from the callback to prevent the function from running
         * @returns A function to remove the patch
         */
        before(object: any, method: string, callback: PatcherBeforeCallback): () => void;
        /**
         * Runs a function instead of a function on an object
         * @returns A function to remove the patch
         */
        instead(object: any, method: string, callback: PatcherInsteadCallback): () => void;
    }

    type PatcherInsteadCallback = (thisVal: any, args: IArguments) => void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    type PatcherBeforeCallback = (thisVal: any, args: IArguments) => boolean | void;

    type PatcherAfterCallback = (thisVal: any, args: IArguments, returnVal: any) => any;

    class PatcherApi {
        /**
         * Runs a callback after a function on an object has been run
         * @returns A function to remove the patch
         */
        after(id: string, object: any, method: string, callback: PatcherAfterCallback): () => void;
        /**
         * Runs a callback before a function on an object has been run.
         * Return true from the callback to prevent the function from running
         * @returns A function to remove the patch
         */
        before(id: string, object: any, method: string, callback: PatcherBeforeCallback): () => void;
        /**
         * Runs a function instead of a function on an object
         * @returns A function to remove the patch
         */
        instead(id: string, object: any, method: string, callback: PatcherInsteadCallback): () => void;
        /** Removes all patches with a given id */
        unpatchAll(id: string): void;
    }

    class ScopedStorageApi {
        private readonly id;
        constructor(id: string);
        /** Gets a value that has previously been saved */
        getValue(key: string, defaultValue?: any): any;
        /** Sets a value which can be retrieved later, persisting through reloads */
        setValue(key: string, value: any): void;
        /** Removes a value which has been saved */
        deleteValue(key: string): void;
        /** Adds a listener for when a stored value with a certain key changes  */
        onChange(key: string, callback: ValueChangeCallback): () => void;
    }

    type ValueChangeCallback = (value: any, remote: boolean) => void;

    class StorageApi {
        /** Gets a value that has previously been saved */
        getValue(pluginName: string, key: string, defaultValue?: any): any;
        /** Sets a value which can be retrieved later, through reloads */
        setValue(pluginName: string, key: string, value: any): void;
        /** Removes a value which has been saved */
        deleteValue(pluginName: string, key: string): void;
        /**
         * @deprecated use {@link deleteValue}
         * @hidden
         */
        get removeValue(): (pluginName: string, key: string) => void;
        /** Adds a listener for when a plugin's stored value with a certain key changes */
        onChange(pluginName: string, key: string, callback: ValueChangeCallback): () => void;
        /** Removes a listener added by onChange */
        offChange(pluginName: string, key: string, callback: ValueChangeCallback): void;
        /** Removes all listeners added by onChange for a certain plugin */
        offAllChanges(pluginName: string): void;
    }

    class ScopedUIApi extends BaseUIApi {
        private readonly id;
        constructor(id: string);
        /**
         * Adds a style to the DOM
         * @returns A function to remove the styles
         */
        addStyles(style: string): () => void;
    }

    interface ModalButton {
        text: string;
        style?: "primary" | "danger" | "close";
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        onClick?: (event: MouseEvent) => boolean | void;
    }

    interface ModalOptions {
        id: string;
        title: string;
        style: string;
        className: string;
        closeOnBackgroundClick: boolean;
        buttons: ModalButton[];
        onClosed: () => void;
    }

    class BaseUIApi {
        /** Shows a customizable modal to the user */
        showModal(element: HTMLElement | import("react").ReactElement, options?: Partial<ModalOptions>): void;
    }

    class UIApi extends BaseUIApi {
        /**
         * Adds a style to the DOM
         * @returns A function to remove the styles
         */
        addStyles(id: string, style: string): () => void;
        /** Remove all styles with a given id */
        removeStyles(id: string): void;
    }

    class ScopedNetApi extends BaseNetApi {
        private readonly id;
        private readonly defaultGamemode;
        constructor(id: string, defaultGamemode: string[]);
        /**
         * Runs a callback when the game is loaded, or runs it immediately if the game has already loaded.
         * If the \@gamemode header is set the callback will only fire if the gamemode matches one of the provided gamemodes.
         * @returns A function to cancel waiting for load
         */
        onLoad(callback: (type: ConnectionType, gamemode: string) => void, gamemode?: string | string[]): () => void;
    }

    type ConnectionType = "None" | "Colyseus" | "Blueboat";

    class BaseNetApi extends EventEmitter2 {
        constructor();
        /** Which type of server the client is currently connected to */
        get type(): ConnectionType;
        /** The id of the gamemode the player is currently playing */
        get gamemode(): string;
        /** The room that the client is connected to, or null if there is no connection */
        get room(): any;
        /** Whether the user is the one hosting the current game */
        get isHost(): boolean;
        /** Sends a message to the server on a specific channel */
        send(channel: string, message: any): void;
    }

    class NetApi extends BaseNetApi {
        constructor();
        /**
         * Runs a callback when the game is loaded, or runs it immediately if the game has already loaded
         * @returns A function to cancel waiting for load
         */
        onLoad(
            id: string,
            callback: (type: ConnectionType, gamemode: string) => void,
            gamemode?: string | string[],
        ): () => void;
        /** Cancels any calls to {@link onLoad} with the same id */
        offLoad(id: string): void;
        /**
         * @deprecated Methods for both transports are now on the base net api
         * @hidden
         */
        get colyseus(): this;
        /**
         * @deprecated Methods for both transports are now on the base net api
         * @hidden
         */
        get blueboat(): this;
        /** @hidden */
        private wrappedListeners;
        /**
         * @deprecated use net.on
         * @hidden
         */
        addEventListener(channel: string, callback: (...args: any[]) => void): void;
        /**
         * @deprecated use net.off
         * @hidden
         */
        removeEventListener(channel: string, callback: (...args: any[]) => void): void;
    }

    class ScopedParcelApi extends BaseParcelApi {
        private readonly id;
        constructor(id: string);
        /**
         * Waits for a module to be loaded, then runs a callback
         * @returns A function to cancel waiting for the module
         */
        getLazy(): () => void;
    }

    class BaseParcelApi {
        /**
         * Gets a module based on a filter, returns null if none are found
         * Be cautious when using this- plugins will often run before any modules load in,
         * meaning that if this is run on startup it will likely return nothing.
         * Consider using getLazy instead.
         */
        query(): any;
        /**
         * Returns an array of all loaded modules matching a filter
         * Be cautious when using this- plugins will often run before any modules load in,
         * meaning that if this is run on startup it will likely return nothing.
         * Consider using getLazy instead.
         */
        queryAll(): any[];
    }

    class ParcelApi extends BaseParcelApi {
        /**
         * Waits for a module to be loaded, then runs a callback
         * @returns A function to cancel waiting for the module
         */
        getLazy(): () => void;
        /** Cancels any calls to getLazy with the same id */
        stopLazy(): void;
        /**
         * @deprecated Use {@link getLazy} instead
         * @hidden
         */
        get interceptRequire(): () => () => void;
        /**
         * @deprecated Use {@link stopLazy} instead
         * @hidden
         */
        get stopIntercepts(): () => void;
    }

    class ScopedHotkeysApi extends BaseHotkeysApi {
        private readonly id;
        constructor(id: string);
        /**
         * Adds a hotkey which will fire when certain keys are pressed
         * @returns A function to remove the hotkey
         */
        addHotkey(options: HotkeyOptions, callback: KeyboardCallback): () => void;
        /**
         * Adds a hotkey which can be changed by the user
         * @returns A function to remove the hotkey
         */
        addConfigurableHotkey(options: ConfigurableHotkeyOptions, callback: KeyboardCallback): () => void;
    }

    type KeyboardCallback = (e: KeyboardEvent) => void;

    class BaseHotkeysApi {
        /**
         * Releases all keys, needed if a hotkey opens something that will
         * prevent keyup events from being registered, such as an alert
         */
        releaseAll(): void;
        /** Which key codes are currently being pressed */
        get pressed(): Set<string>;
        /**
         * @deprecated Use {@link pressed} instead
         * @hidden
         */
        get pressedKeys(): Set<string>;
    }

    interface OldConfigurableOptions {
        category: string;
        title: string;
        preventDefault?: boolean;
        defaultKeys?: Set<string>;
    }

    interface ConfigurableHotkeyOptions {
        category: string;
        /** There should be no duplicate titles within a category */
        title: string;
        preventDefault?: boolean;
        default?: HotkeyTrigger;
    }

    interface HotkeyTrigger {
        /** Should be a keyboardevent [code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) */
        key?: string;
        /** Should be keyboardevent [codes](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) */
        keys?: string[];
        ctrl?: boolean;
        shift?: boolean;
        alt?: boolean;
    }

    interface HotkeyOptions extends HotkeyTrigger {
        preventDefault?: boolean;
    }

    class HotkeysApi extends BaseHotkeysApi {
        /**
         * Adds a hotkey with a given id
         * @returns A function to remove the hotkey
         */
        addHotkey(id: string, options: HotkeyOptions, callback: KeyboardCallback): () => void;
        /** Removes all hotkeys with a given id */
        removeHotkeys(id: string): void;
        /**
         * Adds a hotkey which can be changed by the user
         * @param id A unique id for the hotkey, such as `myplugin-myhotkey`
         * @returns A function to remove the hotkey
         */
        addConfigurableHotkey(id: string, options: ConfigurableHotkeyOptions, callback: KeyboardCallback): () => void;
        /** Removes a configurable hotkey with a given id */
        removeConfigurableHotkey(id: string): void;
        /**
         * @deprecated Use {@link addHotkey} instead
         * @hidden
         */
        add(keys: Set<string>, callback: KeyboardCallback, preventDefault?: boolean): void;
        /**
         * @deprecated Use {@link removeHotkeys} instead
         * @hidden
         */
        remove(keys: Set<string>): void;
        /**
         * @deprecated Use {@link addConfigurableHotkey} instead
         * @hidden
         */
        addConfigurable(
            pluginName: string,
            hotkeyId: string,
            callback: KeyboardCallback,
            options: OldConfigurableOptions,
        ): void;
        /**
         * @deprecated Use {@link removeConfigurableHotkeys} instead
         * @hidden
         */
        removeConfigurable(pluginName: string, hotkeyId: string): void;
    }

    class Api {
        /**
         * @deprecated Gimkit has switched from Parcel to vite, rendering this api useless.
         * @hidden
         */
        static parcel: Readonly<ParcelApi>;
        /** Functions to edit Gimkit's code */
        static rewriter: Readonly<RewriterApi>;
        /** Functions to listen for key combinations */
        static hotkeys: Readonly<HotkeysApi>;
        /**
         * Ways to interact with the current connection to the server,
         * and functions to send general requests
         */
        static net: Readonly<NetApi>;
        /** Functions for interacting with the DOM */
        static UI: Readonly<UIApi>;
        /** Functions for persisting data between reloads */
        static storage: Readonly<StorageApi>;
        /** Functions for intercepting the arguments and return values of functions */
        static patcher: Readonly<PatcherApi>;
        /** Methods for getting info on libraries */
        static libs: Readonly<LibsApi>;
        /** Gets the exported values of a library */
        static lib: (name: string) => any;
        /** Methods for getting info on plugins */
        static plugins: Readonly<PluginsApi>;
        /** Gets the exported values of a plugin, if it has been enabled */
        static plugin: (name: string) => any;
        /** Gimkit's internal react instance */
        static get React(): typeof import("react");
        /** Gimkit's internal reactDom instance */
        static get ReactDOM(): typeof import("react-dom/client");
        /** A variety of Gimkit internal objects available in 2d gamemodes */
        static get stores(): any;
        /**
         * Gimkit's notification object, only available when joining or playing a game
         *
         * {@link https://ant.design/components/notification}
         */
        static get notification(): any;
        /**
         * @deprecated No longer supported
         * @hidden
         */
        static get contextMenu(): {
            showContextMenu: () => void;
            createReactContextMenu: () => void;
        };
        /**
         * @deprecated No longer supported
         * @hidden
         */
        static get platformerPhysics(): any;
        /**
         * @deprecated The api no longer emits events. Use GL.net.loaded to listen to load events
         * @hidden
         */
        static addEventListener(type: string, callback: () => void): void;
        /**
         * @deprecated The api no longer emits events
         * @hidden
         */
        static removeEventListener(type: string, callback: () => void): void;
        /**
         * @deprecated Use {@link plugins} instead
         * @hidden
         */
        static get pluginManager(): Readonly<PluginsApi>;
        constructor(type?: string, name?: string);
        /**
         * @deprecated Gimkit has switched from Parcel to vite, rendering this api useless.
         * @hidden
         */
        parcel: Readonly<ScopedParcelApi>;
        /** Functions to edit Gimkit's code */
        rewriter: Readonly<ScopedRewriterApi>;
        /** Functions to listen for key combinations */
        hotkeys: Readonly<ScopedHotkeysApi>;
        /**
         * Ways to interact with the current connection to the server,
         * and functions to send general requests
         */
        net: Readonly<ScopedNetApi>;
        /** Functions for interacting with the DOM */
        UI: Readonly<ScopedUIApi>;
        /** Functions for persisting data between reloads */
        storage: Readonly<ScopedStorageApi>;
        /** Functions for intercepting the arguments and return values of functions */
        patcher: Readonly<ScopedPatcherApi>;
        /** Methods for getting info on libraries */
        libs: Readonly<LibsApi>;
        /** Gets the exported values of a library */
        lib: (name: string) => any;
        /** Methods for getting info on plugins */
        plugins: Readonly<PluginsApi>;
        /** Gets the exported values of a plugin, if it has been enabled */
        plugin: (name: string) => any;
        /** Gimkit's internal react instance */
        get React(): typeof import("react");
        /** Gimkit's internal reactDom instance */
        get ReactDOM(): typeof import("react-dom/client");
        /** A variety of gimkit internal objects available in 2d gamemodes */
        get stores(): any;
        /**
         * Gimkit's notification object, only available when joining or playing a game
         *
         * {@link https://ant.design/components/notification}
         */
        get notification(): any;
        /** Run a callback when the plugin or library is disabled */
        onStop: (callback: () => void) => void;
        /**
         * Run a callback when the plugin's settings menu button is clicked
         *
         * This function is not available for libraries
         */
        openSettingsMenu: (callback: () => void) => void;
    }
}

declare const api: Gimloader.Api;
declare const GL: typeof Gimloader.Api;
/** @deprecated Use GL.stores */
declare const stores: any;
/** @deprecated No longer supported */
declare const platformerPhysics: any;

interface Window {
    api: Gimloader.Api;
    GL: typeof Gimloader.Api;
    /** @deprecated Use GL.stores */
    stores: any;
    /** @deprecated No longer supported */
    platformerPhysics: any;
}
