// Type definitions for Atom 1.23
// Project: https://github.com/atom/atom
// Definitions by: GlenCFL <https://github.com/GlenCFL>
//                 smhxx <https://github.com/smhxx>
//                 lierdakil <https://github.com/lierdakil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// NOTE: only those classes exported within this file should be retain that status below.
// https://github.com/atom/atom/blob/v1.23.0/exports/atom.js

/// <reference types="jquery" />
/// <reference types="node" />

import { ReadStream, WriteStream } from "fs";
import { ChildProcess } from "child_process";

declare global {
    const atom: AtomEnvironment;

    interface HTMLElementTagNameMap {
      "atom-text-editor": TextEditorElement;
    }
}

/**
 *  Invoke a callback with each filesystem event that occurs beneath a specified path.
 *  If you only need to watch events within the project's root paths, use
 *  Project::onDidChangeFiles instead.
 */
export function watchPath(rootPath: string, options: {}, eventCallback: (events:
    FilesystemChangeEvent) => void): Promise<PathWatcher>;

// Essential Classes ==========================================================

/**
 *  Atom global for dealing with packages, themes, menus, and the window.
 *  An instance of this class is always available as the atom global.
 */
export interface AtomEnvironment {
    // Properties
    /** A CommandRegistry instance. */
    commands: CommandRegistry;

    /** A Config instance. */
    config: Config;

    /** A Clipboard instance. */
    clipboard: Clipboard;

    /** A ContextMenuManager instance. */
    contextMenu: ContextMenuManager;

    /** A MenuManager instance. */
    menu: MenuManager;

    /** A KeymapManager instance. */
    keymaps: KeymapManager;

    /** A TooltipManager instance. */
    tooltips: TooltipManager;

    /** A NotificationManager instance. */
    notifications: NotificationManager;

    /** A Project instance. */
    project: Project;

    /** A GrammarRegistry instance. */
    grammars: GrammarRegistry;

    /** A HistoryManager instance. */
    history: HistoryManager;

    /** A PackageManager instance. */
    packages: PackageManager;

    /** A ThemeManager instance. */
    themes: ThemeManager;

    /** A StyleManager instance. */
    styles: StyleManager;

    /** A DeserializerManager instance. */
    deserializers: DeserializerManager;

    /** A ViewRegistry instance. */
    views: ViewRegistry;

    /** A Workspace instance. */
    workspace: Workspace;

    /** A TextEditorRegistry instance. */
    textEditors: TextEditorRegistry;

    // Event Subscription
    /** Invoke the given callback whenever ::beep is called. */
    onDidBeep(callback: () => void): Disposable;

    /**
     *  Invoke the given callback when there is an unhandled error, but before
     *  the devtools pop open.
     */
    onWillThrowError(callback: (event: PreventableExceptionThrownEvent) => void): Disposable;

    /** Invoke the given callback whenever there is an unhandled error. */
    onDidThrowError(callback: (event: ExceptionThrownEvent) => void): Disposable;

    /**
     *  Invoke the given callback as soon as the shell environment is loaded (or
     *  immediately if it was already loaded).
     */
    whenShellEnvironmentLoaded(callback: () => void): Disposable;

    // Atom Details
    /** Returns a boolean that is true if the current window is in development mode. */
    inDevMode(): boolean;

    /** Returns a boolean that is true if the current window is in safe mode. */
    inSafeMode(): boolean;

    /** Returns a boolean that is true if the current window is running specs. */
    inSpecMode(): boolean;

    /** Get the version of the Atom application. */
    getVersion(): string;

    /**
     *  Gets the release channel of the Atom application.
     *  Returns the release channel, which can be 'dev', 'beta', or 'stable'.
     */
    getReleaseChannel(): "dev"|"beta"|"stable";

    /** Returns a boolean that is true if the current version is an official release. */
    isReleasedVersion(): boolean;

    /** Get the time taken to completely load the current window. */
    getWindowLoadTime(): number;

    /** Get the load settings for the current window. */
    getLoadSettings(): WindowLoadSettings;

    // Managing the Atom Window
    /** Open a new Atom window using the given options. */
    open(params?: {
        pathsToOpen: ReadonlyArray<string>,
        newWindow?: boolean,
        devMode?: boolean,
        safeMode?: boolean,
    }): void;

    /** Close the current window. */
    close(): void;

    /** Get the size of current window. */
    getSize(): { width: number, height: number };

    /** Set the size of current window. */
    setSize(width: number, height: number): void;

    /** Get the position of current window. */
    getPosition(): { x: number, y: number };

    /** Set the position of current window. */
    setPosition(x: number, y: number): void;

    /** Prompt the user to select one or more folders. */
    pickFolder(callback: (paths: string[]|null) => void): void;

    /** Get the current window. */
    getCurrentWindow(): object;

    /** Move current window to the center of the screen. */
    center(): void;

    /** Focus the current window. */
    focus(): void;

    /** Show the current window. */
    show(): void;

    /** Hide the current window. */
    hide(): void;

    /** Reload the current window. */
    reload(): void;

    /** Relaunch the entire application. */
    restartApplication(): void;

    /** Returns a boolean that is true if the current window is maximized. */
    isMaximized(): boolean;

    /** Returns a boolean that is true if the current window is in full screen mode. */
    isFullScreen(): boolean;

    /** Set the full screen state of the current window. */
    setFullScreen(fullScreen: boolean): void;

    /** Toggle the full screen state of the current window. */
    toggleFullScreen(): void;

    // Messaging the User
    /** Visually and audibly trigger a beep. */
    beep(): void;

    /**
     *  A flexible way to open a dialog akin to an alert dialog.
     *  If the dialog is closed (via `Esc` key or `X` in the top corner) without
     *  selecting a button the first button will be clicked unless a "Cancel" or "No"
     *  button is provided.
     *
     *  Returns the chosen button index number if the buttons option was an array.
     */
    confirm(options: {
        message: string,
        detailedMessage?: string,
        buttons?: ReadonlyArray<string>,
    }): void;

    /**
     *  A flexible way to open a dialog akin to an alert dialog.
     *  If the dialog is closed (via `Esc` key or `X` in the top corner) without
     *  selecting a button the first button will be clicked unless a "Cancel" or "No"
     *  button is provided.
     *
     *  Returns the chosen button index number if the buttons option was an array.
     */
    confirm(options: {
        message: string,
        detailedMessage?: string,
        buttons?: {
            [key: string]: () => void
        },
    }): number;

    // Managing the Dev Tools
    /** Open the dev tools for the current window. */
    openDevTools(): Promise<null>;

    /** Toggle the visibility of the dev tools for the current window. */
    toggleDevTools(): Promise<null>;

    /** Execute code in dev tools. */
    executeJavaScriptInDevTools(code: string): void;

    /** Undocumented: get Atom config directory path */
    getConfigDirPath(): string;
}

/**
 *  A simple color class returned from Config::get when the value at the key path is
 *  of type 'color'.
 */
export interface Color {
    /** Returns a string in the form '#abcdef'. */
    toHexString(): string;

    /** Returns a string in the form 'rgba(25, 50, 75, .9)'. */
    toRGBAString(): string;
}

export interface CommandRegistryTargetMap extends HTMLElementTagNameMap {
  [key: string]: EventTarget;
}

export type CommandRegistryListener<TargetType extends EventTarget> = {
  didDispatch(event: CommandEvent<TargetType>): void,
  displayName?: string,
  description?: string,
  hiddenInCommandPalette?: boolean,
} | ((event: CommandEvent<TargetType>) => void);

/**
 *  Associates listener functions with commands in a context-sensitive way
 *  using CSS selectors.
 */
export interface CommandRegistry {
    /** Register a single command. */
    add<T extends keyof CommandRegistryTargetMap>(
        target: T, commandName: string,
        listener: CommandRegistryListener<CommandRegistryTargetMap[T]>
      ): Disposable;
    /** Register a single command. */
    add<T extends Node>(
        target: T, commandName: string,
        listener: CommandRegistryListener<T>
      ): Disposable;

    /** Register multiple commands. */
    add<T extends keyof CommandRegistryTargetMap>(target: T, commands: {
        [key: string]: CommandRegistryListener<CommandRegistryTargetMap[T]>
    }): CompositeDisposable;
    /** Register multiple commands. */
    add<T extends Node>(target: T, commands: {
        [key: string]: CommandRegistryListener<T>
    }): CompositeDisposable;

    /** Find all registered commands matching a query. */
    findCommands(params: { target: string|Node }): Array<{
        name: string,
        displayName: string,
        description?: string,
        tags?: string[],
    }>;

    /**
     *  Simulate the dispatch of a command on a DOM node.
     *  @return Whether or not there was a matching command for the target.
     */
    dispatch(target: Node, commandName: string): boolean;

    /** Invoke the given callback before dispatching a command event. */
    onWillDispatch(callback: (event: CommandEvent) => void): Disposable;

    /** Invoke the given callback after dispatching a command event. */
    onDidDispatch(callback: (event: CommandEvent) => void): Disposable;
}

/**
 *  An object that aggregates multiple Disposable instances together into a
 *  single disposable, so they can all be disposed as a group.
 */
export class CompositeDisposable implements DisposableLike {
    /** Construct an instance, optionally with one or more disposables. */
    constructor(...disposables: DisposableLike[]);

    /**
     *  Dispose all disposables added to this composite disposable.
     *  If this object has already been disposed, this method has no effect.
     */
    dispose(): void;

    // Managing Disposables
    /**
     *  Add disposables to be disposed when the composite is disposed.
     *  If this object has already been disposed, this method has no effect.
     */
    add(...disposables: DisposableLike[]): void;

    /** Remove a previously added disposable. */
    remove(disposable: DisposableLike): void;

    /** Alias to CompositeDisposable::remove. */
    delete(disposable: DisposableLike): void;

    /**
     *  Clear all disposables. They will not be disposed by the next call to
     *  dispose.
     */
    clear(): void;
}

/** Used to access all of Atom's configuration details. */
export interface Config {
    // Config Subscription
    /**
     *  Add a listener for changes to a given key path. This is different than ::onDidChange in
     *  that it will immediately call your callback with the current value of the config entry.
     */
    observe<T extends keyof ConfigValues>(keyPath: T, callback:
        (value: ConfigValues[T]) => void): Disposable;
    /**
     *  Add a listener for changes to a given key path. This is different than ::onDidChange in
     *  that it will immediately call your callback with the current value of the config entry.
     */
    observe<T extends keyof ConfigValues>(keyPath: T, options:
        { scope: string[]|ScopeDescriptor }, callback: (value: ConfigValues[T]) => void):
        Disposable;

    /**
     *  Add a listener for changes to a given key path. If keyPath is not specified, your
     *  callback will be called on changes to any key.
     */
    // tslint:disable-next-line:no-any
    onDidChange<T = any>(callback: (values: { newValue: T, oldValue: T }) => void):
        Disposable;
    /**
     *  Add a listener for changes to a given key path. If keyPath is not specified, your
     *  callback will be called on changes to any key.
     */
    onDidChange<T extends keyof ConfigValues>(keyPath: T, callback: (values: {
        newValue: ConfigValues[T],
        oldValue?: ConfigValues[T],
    }) => void): Disposable;
    /**
     *  Add a listener for changes to a given key path. If keyPath is not specified, your
     *  callback will be called on changes to any key.
     */
    onDidChange<T extends keyof ConfigValues>(keyPath: T, options:
        { scope: string[]|ScopeDescriptor }, callback:
        (values: { newValue: ConfigValues[T], oldValue?: ConfigValues[T] }) => void):
        Disposable;

    // Managing Settings
    /** Retrieves the setting for the given key. */
    get<T extends keyof ConfigValues>(keyPath: T, options?: { sources?: string[],
        excludeSources?: string[], scope?: string[]|ScopeDescriptor }):
        ConfigValues[T]|undefined;

    /**
     *  Sets the value for a configuration setting.
     *  This value is stored in Atom's internal configuration file.
     */
    set<T extends keyof ConfigValues>(keyPath: T, value: ConfigValues[T], options?:
        { scopeSelector?: string, source?: string }): void;

    /** Restore the setting at keyPath to its default value. */
    unset(keyPath: string, options?: { scopeSelector?: string, source?: string }): void;

    /**
     *  Get all of the values for the given key-path, along with their associated
     *  scope selector.
     */
    getAll<T extends keyof ConfigValues>(keyPath: T, options?: { sources?: string[],
        excludeSources?: string[], scope?: ScopeDescriptor }):
        Array<{ scopeDescriptor: ScopeDescriptor, value: ConfigValues[T] }>;

    /**
     *  Get an Array of all of the source Strings with which settings have been added
     *  via ::set.
     */
    getSources(): string[];

    /**
     *  Retrieve the schema for a specific key path. The schema will tell you what type
     *  the keyPath expects, and other metadata about the config option.
     */
    getSchema(keyPath: string): object|null;

    /** Get the string path to the config file being used. */
    getUserConfigPath(): string;

    /**
     *  Suppress calls to handler functions registered with ::onDidChange and ::observe
     *  for the duration of callback. After callback executes, handlers will be called
     *  once if the value for their key-path has changed.
     */
    transact(callback: () => void): void;
}

/**
 *  Represents a decoration that follows a DisplayMarker. A decoration is basically
 *  a visual representation of a marker. It allows you to add CSS classes to line
 *  numbers in the gutter, lines, and add selection-line regions around marked ranges
 *  of text.
 */
export interface Decoration {
    /** The identifier for this Decoration. */
    id: number;

    // Construction and Destruction
    /**
     *  Destroy this marker decoration.
     *  You can also destroy the marker if you own it, which will destroy this decoration.
     */
    destroy(): void;

    // Event Subscription
    /** When the Decoration is updated via Decoration::setProperties. */
    onDidChangeProperties(callback: (event: DecorationPropsChangedEvent) => void): Disposable;

    /** Invoke the given callback when the Decoration is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // Decoration Details
    /** An id unique across all Decoration objects. */
    getId(): number;

    /** Returns the marker associated with this Decoration. */
    getMarker(): DisplayMarker;

    /**
     *  Check if this decoration is of the given type.
     *  @param type A decoration type, such as `line-number` or `line`. This may also
     *  be an array of decoration types, with isType returning true if the decoration's
     *  type matches any in the array.
     */
    isType(type: string|string[]): boolean;

    // Properties
    /** Returns the Decoration's properties. */
    getProperties(): DecorationOptions;

    /**
     *  Update the marker with new Properties. Allows you to change the decoration's
     *  class.
     */
    setProperties(newProperties: DecorationOptions): void;
}

/**
 *  Represents a buffer annotation that remains logically stationary even as the
 *  buffer changes. This is used to represent cursors, folds, snippet targets,
 *  misspelled words, and anything else that needs to track a logical location
 *  in the buffer over time.
 */
export interface DisplayMarker {
    // Construction and Destruction
    /**
     *  Destroys the marker, causing it to emit the 'destroyed' event. Once destroyed,
     *  a marker cannot be restored by undo/redo operations.
     */
    destroy(): void;

    /** Creates and returns a new DisplayMarker with the same properties as this marker. */
    copy(options?: CopyMarkerOptions): DisplayMarker;

    // Event Subscription
    /** Invoke the given callback when the state of the marker changes. */
    onDidChange(callback: (event: DisplayMarkerChangedEvent) => void): Disposable;

    /** Invoke the given callback when the marker is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // TextEditorMarker Details
    /**
     *  Returns a boolean indicating whether the marker is valid. Markers can be
     *  invalidated when a region surrounding them in the buffer is changed.
     */
    isValid(): boolean;

    /**
     *  Returns a boolean indicating whether the marker has been destroyed. A marker
     *  can be invalid without being destroyed, in which case undoing the invalidating
     *  operation would restore the marker.
     */
    isDestroyed(): boolean;

    /** Returns a boolean indicating whether the head precedes the tail. */
    isReversed(): boolean;

    /**
     *  Returns a boolean indicating whether changes that occur exactly at the marker's
     *  head or tail cause it to move.
     */
    isExclusive(): boolean;

    /**
     *  Get the invalidation strategy for this marker.
     *  Valid values include: never, surround, overlap, inside, and touch.
     */
    getInvalidationStrategy(): string;

    /** Returns an Object containing any custom properties associated with the marker. */
    getProperties(): object;

    /** Merges an Object containing new properties into the marker's existing properties. */
    setProperties(properties: object): void;

    /** Returns whether this marker matches the given parameters. */
    matchesProperties(attributes: FindDisplayMarkerOptions): boolean;

    // Comparing to other markers
    /** Compares this marker to another based on their ranges. */
    compare(other: DisplayMarker): number;

    /**
     *  Returns a boolean indicating whether this marker is equivalent to another
     *  marker, meaning they have the same range and options.
     */
    isEqual(other: DisplayMarker): boolean;

    // Managing the marker's range
    /** Gets the buffer range of this marker. */
    getBufferRange(): Range;

    /** Gets the screen range of this marker. */
    getScreenRange(): Range;

    /** Modifies the buffer range of this marker. */
    setBufferRange(bufferRange: RangeCompatible, properties?: { reversed: boolean }):
        void;

    /** Modifies the screen range of this marker. */
    setScreenRange(screenRange: RangeCompatible, options?: { reversed?: boolean,
        clipDirection?: "backward"|"forward"|"closest" }): void;

    /**
     *  Retrieves the screen position of the marker's start. This will always be
     *  less than or equal to the result of DisplayMarker::getEndScreenPosition.
     */
    getStartScreenPosition(options?: { clipDirection: "backward"|"forward"|"closest" }):
        Point;

    /**
     *  Retrieves the screen position of the marker's end. This will always be
     *  greater than or equal to the result of DisplayMarker::getStartScreenPosition.
     */
    getEndScreenPosition(options?: { clipDirection: "backward"|"forward"|"closest" }):
        Point;

    /** Retrieves the buffer position of the marker's head. */
    getHeadBufferPosition(): Point;

    /** Sets the buffer position of the marker's head. */
    setHeadBufferPosition(bufferPosition: PointCompatible): void;

    /** Retrieves the screen position of the marker's head. */
    getHeadScreenPosition(options?: { clipDirection: "backward"|"forward"|"closest" }):
        Point;

    /** Sets the screen position of the marker's head. */
    setHeadScreenPosition(screenPosition: PointCompatible,
        options?: { clipDirection: "backward"|"forward"|"closest" }): void;

    /** Retrieves the buffer position of the marker's tail. */
    getTailBufferPosition(): Point;

    /** Sets the buffer position of the marker's tail. */
    setTailBufferPosition(bufferPosition: PointCompatible): void;

    /** Retrieves the screen position of the marker's tail. */
    getTailScreenPosition(options?: { clipDirection: "backward"|"forward"|"closest" }):
        Point;

    /** Sets the screen position of the marker's tail. */
    setTailScreenPosition(screenPosition: PointCompatible,
        options?: { clipDirection: "backward"|"forward"|"closest" }): void;

    /**
     *  Retrieves the buffer position of the marker's start. This will always be less
     *  than or equal to the result of DisplayMarker::getEndBufferPosition.
     */
    getStartBufferPosition(): Point;

    /**
     *  Retrieves the buffer position of the marker's end. This will always be greater
     *  than or equal to the result of DisplayMarker::getStartBufferPosition.
     */
    getEndBufferPosition(): Point;

    /** Returns a boolean indicating whether the marker has a tail. */
    hasTail(): boolean;

    /**
     *  Plants the marker's tail at the current head position. After calling the
     *  marker's tail position will be its head position at the time of the call,
     *  regardless of where the marker's head is moved.
     */
    plantTail(): void;

    /**
     *  Removes the marker's tail. After calling the marker's head position will be
     *  reported as its current tail position until the tail is planted again.
     */
    clearTail(): void;
}

/**
 *  Experimental: A container for a related set of markers at the DisplayLayer level.
 *  Wraps an underlying MarkerLayer on the TextBuffer.
 *
 *  This API is experimental and subject to change on any release.
 */
export interface DisplayMarkerLayer {
    // Lifecycle
    /** Destroy this layer. */
    destroy(): void;

    /** Destroy all markers in this layer. */
    clear(): void;

    /** Determine whether this layer has been destroyed. */
    isDestroyed(): boolean;

    // Event Subscription
    /** Subscribe to be notified synchronously when this layer is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /**
     *  Subscribe to be notified asynchronously whenever markers are created, updated,
     *  or destroyed on this layer. Prefer this method for optimal performance when
     *  interacting with layers that could contain large numbers of markers.
     */
    onDidUpdate(callback: () => void): Disposable;

    /**
     *  Subscribe to be notified synchronously whenever markers are created on this
     *  layer. Avoid this method for optimal performance when interacting with layers
     *  that could contain large numbers of markers.
     */
    onDidCreateMarker(callback: (marker: DisplayMarker|Marker) => void): Disposable;

    // Marker creation
    /** Create a marker with the given screen range. */
    markScreenRange(range: RangeCompatible, options?: { reversed?: boolean,
        invalidate?: "never"|"surround"|"overlap"|"inside"|"touch", exclusive?:
        boolean, clipDirection?: "backward"|"forward"|"closest" }): DisplayMarker;

    /**
     *  Create a marker on this layer with its head at the given screen position
     *  and no tail.
     */
    markScreenPosition(screenPosition: PointCompatible, options?: { invalidate?:
        "never"|"surround"|"overlap"|"inside"|"touch", exclusive?: boolean,
        clipDirection?: "backward"|"forward"|"closest" }): DisplayMarker;

    /** Create a marker with the given buffer range. */
    markBufferRange(range: RangeCompatible, options?: {
        reversed?: boolean, invalidate?: "never"|"surround"|"overlap"|"inside"|"touch",
        exclusive?: boolean }): DisplayMarker;

    /**
     *  Create a marker on this layer with its head at the given buffer position
     *  and no tail.
     */
    markBufferPosition(bufferPosition: PointCompatible, options?: { invalidate?:
        "never"|"surround"|"overlap"|"inside"|"touch", exclusive?: boolean }):
        DisplayMarker;

    // Querying
    /** Get an existing marker by its id. */
    getMarker(id: number): DisplayMarker;

    /** Get all markers in the layer. */
    getMarkers(): DisplayMarker[];

    /** Get the number of markers in the marker layer. */
    getMarkerCount(): number;

    /**
     *  Find markers in the layer conforming to the given parameters.
     *
     *  This method finds markers based on the given properties. Markers can be associated
     *  with custom properties that will be compared with basic equality. In addition,
     *  there are several special properties that will be compared with the range of the
     *  markers rather than their properties.
     */
    findMarkers(properties: FindDisplayMarkerOptions): DisplayMarker[];
}

/** A handle to a resource that can be disposed. */
export class Disposable implements DisposableLike {
    /** Ensure that Object correctly implements the Disposable contract. */
    static isDisposable(object: object): boolean;

    /** Construct a Disposable. */
    constructor(disposableAction?: () => void);

    /** A callback which will be called within dispose(). */
    disposalAction?(): void;

    /**
     *  Perform the disposal action, indicating that the resource associated
     *  with this disposable is no longer needed.
     */
    dispose(): void;
}

/**
 *  Utility class to be used when implementing event-based APIs that allows
 *  for handlers registered via ::on to be invoked with calls to ::emit.
 */
// tslint:disable-next-line:no-any
export class Emitter<OptionalEmissions = { [key: string]: any }, RequiredEmissions = {}>
        implements DisposableLike {
    /** Construct an emitter. */
    constructor();

    /** Clear out any existing subscribers. */
    clear(): void;

    /** Unsubscribe all handlers. */
    dispose(): boolean;

    // Event Subscription
    /** Registers a handler to be invoked whenever the given event is emitted. */
    on<T extends keyof OptionalEmissions>(eventName: T, handler: (value?:
        OptionalEmissions[T]) => void): Disposable;
    /** Registers a handler to be invoked whenever the given event is emitted. */
    on<T extends keyof RequiredEmissions>(eventName: T, handler: (value:
        RequiredEmissions[T]) => void): Disposable;

    /**
     *  Register the given handler function to be invoked the next time an event
     *  with the given name is emitted via ::emit.
     */
    once<T extends keyof OptionalEmissions>(eventName: T, handler: (value?:
        OptionalEmissions[T]) => void): Disposable;
    /**
     *  Register the given handler function to be invoked the next time an event
     *  with the given name is emitted via ::emit.
     */
    once<T extends keyof RequiredEmissions>(eventName: T, handler: (value:
        RequiredEmissions[T]) => void): Disposable;

    /**
     *  Register the given handler function to be invoked before all other
     *  handlers existing at the time of subscription whenever events by the
     *  given name are emitted via ::emit.
     */
    preempt<T extends keyof OptionalEmissions>(eventName: T, handler: (value?:
        OptionalEmissions[T]) => void): Disposable;
    /**
     *  Register the given handler function to be invoked before all other
     *  handlers existing at the time of subscription whenever events by the
     *  given name are emitted via ::emit.
     */
    preempt<T extends keyof RequiredEmissions>(eventName: T, handler: (value:
        RequiredEmissions[T]) => void): Disposable;

    // Event Emission
    /** Invoke the handlers registered via ::on for the given event name. */
    emit<T extends keyof OptionalEmissions>(eventName: T, value?:
        OptionalEmissions[T]): void;
    /** Invoke the handlers registered via ::on for the given event name. */
    emit<T extends keyof RequiredEmissions>(eventName: T, value:
        RequiredEmissions[T]): void;
}

/**
 *  Represents a decoration that applies to every marker on a given layer. Created via
 *  TextEditor::decorateMarkerLayer.
 */
export interface LayerDecoration {
    /** Destroys the decoration. */
    destroy(): void;

    /** Determine whether this decoration is destroyed. */
    isDestroyed(): boolean;

    /** Get this decoration's properties. */
    getProperties(): DecorationLayerOptions;

    /** Set this decoration's properties. */
    setProperties(newProperties: DecorationLayerOptions): void;

    /** Override the decoration properties for a specific marker. */
    setPropertiesForMarker(marker: DisplayMarker|Marker, properties: DecorationLayerOptions):
        void;
}

/**
 *  Represents a buffer annotation that remains logically stationary even as
 *  the buffer changes.
 */
export interface Marker {
    /** The identifier for this Marker. */
    id: number;

    // Lifecycle
    /**
     *  Creates and returns a new Marker with the same properties as this
     *  marker.
     */
    copy(options?: CopyMarkerOptions): Marker;

    /** Destroys the marker, causing it to emit the "destroyed" event. */
    destroy(): void;

    // Event Subscription
    /** Invoke the given callback when the marker is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when the state of the marker changes. */
    onDidChange(callback: (event: MarkerChangedEvent) => void): Disposable;

    // Marker Details
    /** Returns the current range of the marker. The range is immutable. */
    getRange(): Range;

    /** Returns a point representing the marker's current head position. */
    getHeadPosition(): Point;

    /** Returns a point representing the marker's current tail position. */
    getTailPosition(): Point;

    /**
     *  Returns a point representing the start position of the marker, which
     *  could be the head or tail position, depending on its orientation.
     */
    getStartPosition(): Point;

    /**
     *  Returns a point representing the end position of the marker, which
     *  could be the head or tail position, depending on its orientation.
     */
    getEndPosition(): Point;

    /** Returns a boolean indicating whether the head precedes the tail. */
    isReversed(): boolean;

    /** Returns a boolean indicating whether the marker has a tail. */
    hasTail(): boolean;

    /** Is the marker valid? */
    isValid(): boolean;

    /** Is the marker destroyed? */
    isDestroyed(): boolean;

    /**
     *  Returns a boolean indicating whether changes that occur exactly at
     *  the marker's head or tail cause it to move.
     */
    isExclusive(): boolean;

    /** Get the invalidation strategy for this marker. */
    getInvalidationStrategy(): string;

    // Mutating Markers
    /**
     *  Sets the range of the marker.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    setRange(range: RangeCompatible, params?: { reversed?: boolean, exclusive?:
        boolean }): boolean;

    /**
     *  Sets the head position of the marker.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    setHeadPosition(position: PointCompatible): boolean;

    /**
     *  Sets the tail position of the marker.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    setTailPosition(position: PointCompatible): boolean;

    /**
     *  Removes the marker's tail.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    clearTail(): boolean;

    /**
     *  Plants the marker's tail at the current head position.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    plantTail(): boolean;

    // Comparison
    /**
     *  Returns a boolean indicating whether this marker is equivalent to
     *  another marker, meaning they have the same range and options.
     */
    isEqual(other: Marker): boolean;

    /**
     *  Compares this marker to another based on their ranges.
     *  Returns "-1" if this marker precedes the argument.
     *  Returns "0" if this marker is equivalent to the argument.
     *  Returns "1" if this marker follows the argument.
     */
    compare(other: Marker): number;
}

/** Experimental: A container for a related set of markers. */
export interface MarkerLayer {
    // Lifecycle
    /** Create a copy of this layer with markers in the same state and locations. */
    copy(): MarkerLayer;

    /** Destroy this layer. */
    destroy(): boolean;

    /** Remove all markers from this layer. */
    clear(): void;

    /** Determine whether this layer has been destroyed. */
    isDestroyed(): boolean;

    // Querying
    /** Get an existing marker by its id. */
    getMarker(id: number): Marker|undefined;

    /** Get all existing markers on the marker layer. */
    getMarkers(): Marker[];

    /** Get the number of markers in the marker layer. */
    getMarkerCount(): number;

    /** Find markers in the layer conforming to the given parameters. */
    findMarkers(params: FindMarkerOptions): Marker[];

    // Marker Creation
    /** Create a marker with the given range. */
    markRange(range: RangeCompatible, options?: { reversed?: boolean, invalidate?:
        "never"|"surround"|"overlap"|"inside"|"touch", exclusive?: boolean }): Marker;

    /** Create a marker at with its head at the given position with no tail. */
    markPosition(position: PointCompatible, options?: { invalidate?: "never"|"surround"
        |"overlap"|"inside"|"touch", exclusive?: boolean }): Marker;

    // Event Subscription
    /**
     *  Subscribe to be notified asynchronously whenever markers are created,
     *  updated, or destroyed on this layer.
     */
    onDidUpdate(callback: () => void): Disposable;

    /**
     *  Subscribe to be notified synchronously whenever markers are created on
     *  this layer.
     */
    onDidCreateMarker(callback: (marker: Marker) => void): Disposable;

    /** Subscribe to be notified synchronously when this layer is destroyed. */
    onDidDestroy(callback: () => void): Disposable;
}

/** A notification to the user containing a message and type. */
export class Notification {
    constructor(type: "warning"|"info"|"success", message: string,
        options?: NotificationOptions);
    constructor(type: "fatal"|"error", message: string, options?: ErrorNotificationOptions);

    // Event Subscription
    /** Invoke the given callback when the notification is dismissed. */
    onDidDismiss(callback: (notification: Notification) => void): Disposable;

    /** Invoke the given callback when the notification is displayed. */
    onDidDisplay(callback: (notification: Notification) => void): Disposable;

    // Methods
    /** Returns the Notification's type. */
    getType(): string;

    /** Returns the Notification's message. */
    getMessage(): string;

    /**
     *  Dismisses the notification, removing it from the UI. Calling this
     *  programmatically will call all callbacks added via onDidDismiss.
     */
    dismiss(): void;
}

/** A notification manager used to create Notifications to be shown to the user. */
export interface NotificationManager {
    // Properties
    notifications: Notification[];

    // Events
    /** Invoke the given callback after a notification has been added. */
    onDidAddNotification(callback: (notification: Notification) => void): Disposable;

    // Adding Notifications
    /** Add a success notification. */
    addSuccess(message: string, options?: NotificationOptions): Notification;

    /** Add an informational notification. */
    addInfo(message: string, options?: NotificationOptions): Notification;

    /** Add a warning notification. */
    addWarning(message: string, options?: NotificationOptions): Notification;

    /** Add an error notification. */
    addError(message: string, options?: ErrorNotificationOptions): Notification;

    /** Add a fatal error notification. */
    addFatalError(message: string, options?: ErrorNotificationOptions): Notification;

    // Getting Notifications
    /** Get all the notifications. */
    getNotifications(): Notification[];
}

/** Represents a point in a buffer in row/column coordinates. */
export class Point {
    // Properties
    /** A zero-indexed number representing the row of the Point. */
    row: number;

    /** A zero-indexed number representing the column of the Point. */
    column: number;

    // Construction
    /**
     *  Create a Point from an array containing two numbers representing the
     *  row and column.
     */
    static fromObject(object: PointCompatible, copy?: boolean): Point;

    /** Construct a Point object */
    constructor(row?: number, column?: number);

    /** Returns a new Point with the same row and column. */
    copy(): Point;

    /** Returns a new Point with the row and column negated. */
    negate(): Point;

    // Comparison
    /** Returns the given Point that is earlier in the buffer. */
    static min(point1: PointCompatible, point2: PointCompatible): Point;

    /**
     *  Compare another Point to this Point instance.
     *  Returns -1 if this point precedes the argument.
     *  Returns 0 if this point is equivalent to the argument.
     *  Returns 1 if this point follows the argument.
     */
    compare(other: PointCompatible): number;

    /**
     *  Returns a boolean indicating whether this point has the same row and
     *  column as the given Point.
     */
    isEqual(other: PointCompatible): boolean;

    /** Returns a Boolean indicating whether this point precedes the given Point. */
    isLessThan(other: PointCompatible): boolean;

    /**
     *  Returns a Boolean indicating whether this point precedes or is equal to
     *  the given Point.
     */
    isLessThanOrEqual(other: PointCompatible): boolean;

    /** Returns a Boolean indicating whether this point follows the given Point. */
    isGreaterThan(other: PointCompatible): boolean;

    /**
     *  Returns a Boolean indicating whether this point follows or is equal to
     *  the given Point.
     */
    isGreaterThanOrEqual(other: PointCompatible): boolean;

    // Operations
    /** Makes this point immutable and returns itself. */
    freeze(): Readonly<Point>;

    /**
     *  Build and return a new point by adding the rows and columns of the
     *  given point.
     */
    translate(other: PointCompatible): Point;

    /**
     *  Build and return a new Point by traversing the rows and columns
     *  specified by the given point.
     */
    traverse(other: PointCompatible): Point;

    /** Returns an array of this point's row and column. */
    toArray(): [number, number];

    /** Returns an array of this point's row and column. */
    serialize(): [number, number];

    /** Returns a string representation of the point. */
    toString(): string;
}

/** Represents a region in a buffer in row/column coordinates. */
export class Range {
    // Properties
    /** A Point representing the start of the Range. */
    start: Point;

    /** A Point representing the end of the Range. */
    end: Point;

    // Construction
    /** Convert any range-compatible object to a Range. */
    static fromObject(object: RangeCompatible, copy?: boolean): Range;

    /** Construct a Range object. */
    constructor(pointA?: PointCompatible, pointB?: PointCompatible);

    /** Call this with the result of Range::serialize to construct a new Range. */
    static deserialize(array: object): Range;

    /** Returns a new range with the same start and end positions. */
    copy(): Range;

    /** Returns a new range with the start and end positions negated. */
    negate(): Range;

    // Serialization and Deserialization
    /** Returns a plain javascript object representation of the Range. */
    serialize(): number[][];

    // Range Details
    /** Is the start position of this range equal to the end position? */
    isEmpty(): boolean;

    /**
     *  Returns a boolean indicating whether this range starts and ends on the
     *  same row.
     */
    isSingleLine(): boolean;

    /** Get the number of rows in this range. */
    getRowCount(): number;

    /** Returns an array of all rows in the range. */
    getRows(): number[];

    // Operations
    /**
     *  Freezes the range and its start and end point so it becomes immutable
     *  and returns itself.
     */
    freeze(): Readonly<Range>;

    // NOTE: this function doesn't actually take a range-compatible parameter.
    /** Returns a new range that contains this range and the given range. */
    union(other: RangeLike): Range;

    /**
     *  Build and return a new range by translating this range's start and end
     *  points by the given delta(s).
     */
    translate(startDelta: PointCompatible, endDelta?: PointCompatible): Range;

    /**
     *  Build and return a new range by traversing this range's start and end
     *  points by the given delta.
     */
    traverse(delta: PointCompatible): Range;

    // Comparison
    /**
     *  Compare two Ranges.
     *  Returns -1 if this range starts before the argument or contains it.
     *  Returns 0 if this range is equivalent to the argument.
     *  Returns 1 if this range starts after the argument or is contained by it.
     */
    compare(otherRange: RangeCompatible): number;

    /**
     *  Returns a Boolean indicating whether this range has the same start and
     *  end points as the given Range.
     */
    isEqual(otherRange: RangeCompatible): boolean;

    // NOTE: this function doesn't actually take a range-compatible parameter.
    /**
     *  Returns a Boolean indicating whether this range starts and ends on the
     *  same row as the argument.
     */
    coversSameRows(otherRange: RangeLike): boolean;

    // NOTE: this function doesn't actually take a range-compatible parameter.
    /** Determines whether this range intersects with the argument. */
    intersectsWith(otherRange: RangeLike, exclusive?: boolean): boolean;

    /** Returns a boolean indicating whether this range contains the given range. */
    containsRange(otherRange: RangeCompatible, exclusive?: boolean): boolean;

    /** Returns a boolean indicating whether this range contains the given point. */
    containsPoint(point: PointCompatible, exclusive?: boolean): boolean;

    /**
     *  Returns a boolean indicating whether this range intersects the given
     *  row number.
     */
    intersectsRow(row: number): boolean;

    /**
     *  Returns a boolean indicating whether this range intersects the row range
     *  indicated by the given startRow and endRow numbers.
     */
    intersectsRowRange(startRow: number, endRow: number): boolean;

    // Conversion
    /** Returns a string representation of the range. */
    toString(): string;
}

/**
 *  This class represents all essential editing state for a single TextBuffer,
 *  including cursor and selection positions, folds, and soft wraps.
 */
export class TextEditor {
    id: number;
    buffer: TextBuffer;

    // NOTE: undocumented within the public API. Don't go down the rabbit hole.
    constructor(options?: object);

    // Event Subscription
    /** Calls your callback when the buffer's title has changed. */
    onDidChangeTitle(callback: (title: string) => void): Disposable;

    /** Calls your callback when the buffer's path, and therefore title, has changed. */
    onDidChangePath(callback: (path: string) => void): Disposable;

    /**
     *  Invoke the given callback synchronously when the content of the buffer
     *  changes.
     */
    onDidChange(callback: (event: EditorChangedEvent[]) => void): Disposable;

    /**
     *  Invoke callback when the buffer's contents change. It is emit
     *  asynchronously 300ms after the last buffer change. This is a good place
     *  to handle changes to the buffer without compromising typing performance.
     */
    onDidStopChanging(callback: (event: BufferStoppedChangingEvent) => void): Disposable;

    /**
     *  Calls your callback when a Cursor is moved. If there are multiple cursors,
     *  your callback will be called for each cursor.
     */
    onDidChangeCursorPosition(callback: (event: CursorPositionChangedEvent) => void):
        Disposable;

    /** Calls your callback when a selection's screen range changes. */
    onDidChangeSelectionRange(callback: (event: SelectionChangedEvent) => void): Disposable;

    /** Invoke the given callback after the buffer is saved to disk. */
    onDidSave(callback: (event: { path: string }) => void): Disposable;

    /** Invoke the given callback when the editor is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Retrieves the current TextBuffer. */
    getBuffer(): TextBuffer;

    /**
     *  Calls your callback when a Gutter is added to the editor. Immediately calls
     *  your callback for each existing gutter.
     */
    observeGutters(callback: (gutter: Gutter) => void): Disposable;

    /** Calls your callback when a Gutter is added to the editor. */
    onDidAddGutter(callback: (gutter: Gutter) => void): Disposable;

    /** Calls your callback when a Gutter is removed from the editor. */
    onDidRemoveGutter(callback: (name: string) => void): Disposable;

    /** Calls your callback when soft wrap was enabled or disabled. */
    onDidChangeSoftWrapped(callback: (softWrapped: boolean) => void): Disposable;

    /** Calls your callback when the buffer's encoding has changed. */
    onDidChangeEncoding(callback: (encoding: string) => void): Disposable;

    /**
     *  Calls your callback when the grammar that interprets and colorizes the text
     *  has been changed. Immediately calls your callback with the current grammar.
     */
    observeGrammar(callback: (grammar: Grammar) => void): Disposable;

    /**
     *  Calls your callback when the grammar that interprets and colorizes the text
     *  has been changed.
     */
    onDidChangeGrammar(callback: (grammar: Grammar) => void): Disposable;

    /** Calls your callback when the result of ::isModified changes. */
    onDidChangeModified(callback: (modified: boolean) => void): Disposable;

    /**
     *  Calls your callback when the buffer's underlying file changes on disk at a
     *  moment when the result of ::isModified is true.
     */
    onDidConflict(callback: () => void): Disposable;

    /** Calls your callback before text has been inserted. */
    onWillInsertText(callback: (event: { text: string, cancel(): void }) => void): Disposable;

    /** Calls your callback after text has been inserted. */
    onDidInsertText(callback: (event: { text: string }) => void): Disposable;

    /**
     *  Calls your callback when a Cursor is added to the editor. Immediately calls
     *  your callback for each existing cursor.
     */
    observeCursors(callback: (cursor: Cursor) => void): Disposable;

    /** Calls your callback when a Cursor is added to the editor. */
    onDidAddCursor(callback: (cursor: Cursor) => void): Disposable;

    /** Calls your callback when a Cursor is removed from the editor. */
    onDidRemoveCursor(callback: (cursor: Cursor) => void): Disposable;

    /**
     *  Calls your callback when a Selection is added to the editor. Immediately
     *  calls your callback for each existing selection.
     */
    observeSelections(callback: (selection: Selection) => void): Disposable;

    /** Calls your callback when a Selection is added to the editor. */
    onDidAddSelection(callback: (selection: Selection) => void): Disposable;

    /** Calls your callback when a Selection is removed from the editor. */
    onDidRemoveSelection(callback: (selection: Selection) => void): Disposable;

    /**
     *  Calls your callback with each Decoration added to the editor. Calls your
     *  callback immediately for any existing decorations.
     */
    observeDecorations(callback: (decoration: Decoration) => void): Disposable;

    /** Calls your callback when a Decoration is added to the editor. */
    onDidAddDecoration(callback: (decoration: Decoration) => void): Disposable;

    /** Calls your callback when a Decoration is removed from the editor. */
    onDidRemoveDecoration(callback: (decoration: Decoration) => void): Disposable;

    /** Calls your callback when the placeholder text is changed. */
    onDidChangePlaceholderText(callback: (placeholderText: string) => void): Disposable;

    // File Details
    /**
     *  Get the editor's title for display in other parts of the UI such as the tabs.
     *  If the editor's buffer is saved, its title is the file name. If it is unsaved,
     *  its title is "untitled".
     */
    getTitle(): string;

    /**
     *  Get unique title for display in other parts of the UI, such as the window title.
     *  If the editor's buffer is unsaved, its title is "untitled" If the editor's
     *  buffer is saved, its unique title is formatted as one of the following,
     *
     *  "" when it is the only editing buffer with this file name.
     *  " — " when other buffers have this file name.
     */
    getLongTitle(): string;

    /** Returns the string path of this editor's text buffer. */
    getPath(): string|undefined;

    /** Returns boolean true if this editor has been modified. */
    isModified(): boolean;

    /** Returns boolean true if this editor has no content. */
    isEmpty(): boolean;

    /** Returns the string character set encoding of this editor's text buffer. */
    getEncoding(): string;

    /** Set the character set encoding to use in this editor's text buffer. */
    setEncoding(encoding: string): void;

    // File Operations
    /**
     *  Saves the editor's text buffer.
     *  See TextBuffer::save for more details.
     */
    save(): Promise<void>;

    /**
     *  Saves the editor's text buffer as the given path.
     *  See TextBuffer::saveAs for more details.
     */
    saveAs(filePath: string): Promise<void>;

    // Reading Text
    /** Returns a string representing the entire contents of the editor. */
    getText(): string;

    /** Get the text in the given range in buffer coordinates. */
    getTextInBufferRange(range: RangeCompatible): string;

    /** Returns a number representing the number of lines in the buffer. */
    getLineCount(): number;

    /**
     *  Returns a number representing the number of screen lines in the editor.
     *  This accounts for folds.
     */
    getScreenLineCount(): number;

    /**
     *  Returns a number representing the last zero-indexed buffer row number of
     *  the editor.
     */
    getLastBufferRow(): number;

    /**
     *  Returns a number representing the last zero-indexed screen row number of
     *  the editor.
     */
    getLastScreenRow(): number;

    /**
     *  Returns a string representing the contents of the line at the given
     *  buffer row.
     */
    lineTextForBufferRow(bufferRow: number): string;

    /**
     *  Returns a string representing the contents of the line at the given
     *  screen row.
     */
    lineTextForScreenRow(screenRow: number): string;

    /** Get the range of the paragraph surrounding the most recently added cursor. */
    getCurrentParagraphBufferRange(): Range;

    // Mutating Text
    /** Replaces the entire contents of the buffer with the given string. */
    setText(text: string): void;

    /** Set the text in the given Range in buffer coordinates. */
    setTextInBufferRange(range: RangeCompatible, text: string, options?:
        { normalizeLineEndings?: boolean, undo?: "skip" }): Range;

    /* For each selection, replace the selected text with the given text. */
    insertText(text: string, options?: TextInsertionOptions): Range|false;

    /** For each selection, replace the selected text with a newline. */
    insertNewline(): void;

    /**
     *  For each selection, if the selection is empty, delete the character following
     *  the cursor. Otherwise delete the selected text.
     */
    delete(): void;

    /**
     *  For each selection, if the selection is empty, delete the character preceding
     *  the cursor. Otherwise delete the selected text.
     */
    backspace(): void;

    /**
     *  Mutate the text of all the selections in a single transaction.
     *  All the changes made inside the given function can be reverted with a single
     *  call to ::undo.
     */
    mutateSelectedText(fn: (selection: Selection, index: number) => void): void;

    /**
     *  For each selection, transpose the selected text.
     *  If the selection is empty, the characters preceding and following the cursor
     *  are swapped. Otherwise, the selected characters are reversed.
     */
    transpose(): void;

    /**
     *  Convert the selected text to upper case.
     *  For each selection, if the selection is empty, converts the containing word
     *  to upper case. Otherwise convert the selected text to upper case.
     */
    upperCase(): void;

    /**
     *  Convert the selected text to lower case.
     *  For each selection, if the selection is empty, converts the containing word
     *  to upper case. Otherwise convert the selected text to upper case.
     */
    lowerCase(): void;

    /**
     *  Toggle line comments for rows intersecting selections.
     *  If the current grammar doesn't support comments, does nothing.
     */
    toggleLineCommentsInSelection(): void;

    /** For each cursor, insert a newline at beginning the following line. */
    insertNewlineBelow(): void;

    /** For each cursor, insert a newline at the end of the preceding line. */
    insertNewlineAbove(): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing word that precede the cursor. Otherwise delete the selected text.
     */
    deleteToBeginningOfWord(): void;

    /**
     *  Similar to ::deleteToBeginningOfWord, but deletes only back to the previous
     *  word boundary.
     */
    deleteToPreviousWordBoundary(): void;

    /** Similar to ::deleteToEndOfWord, but deletes only up to the next word boundary. */
    deleteToNextWordBoundary(): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing subword following the cursor. Otherwise delete the selected text.
     */
    deleteToBeginningOfSubword(): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing subword following the cursor. Otherwise delete the selected text.
     */
    deleteToEndOfSubword(): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing line that precede the cursor. Otherwise delete the selected text.
     */
    deleteToBeginningOfLine(): void;

    /**
     *  For each selection, if the selection is not empty, deletes the selection
     *  otherwise, deletes all characters of the containing line following the cursor.
     *  If the cursor is already at the end of the line, deletes the following newline.
     */
    deleteToEndOfLine(): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing word following the cursor. Otherwise delete the selected text.
     */
    deleteToEndOfWord(): void;

    /** Delete all lines intersecting selections. */
    deleteLine(): void;

    // History
    /** Undo the last change. */
    undo(): void;

    /** Redo the last change. */
    redo(): void;

    /**
     *  Batch multiple operations as a single undo/redo step.
     *  Any group of operations that are logically grouped from the perspective of undoing
     *  and redoing should be performed in a transaction. If you want to abort the transaction,
     *  call ::abortTransaction to terminate the function's execution and revert any changes
     *  performed up to the abortion.
     */
    transact(fn: () => void): void;
    /**
     *  Batch multiple operations as a single undo/redo step.
     *  Any group of operations that are logically grouped from the perspective of undoing
     *  and redoing should be performed in a transaction. If you want to abort the transaction,
     *  call ::abortTransaction to terminate the function's execution and revert any changes
     *  performed up to the abortion.
     */
    transact(groupingInterval: number, fn: () => void): void;

    /**
     *  Abort an open transaction, undoing any operations performed so far within the
     *  transaction.
     */
    abortTransaction(): void;

    /**
     *  Create a pointer to the current state of the buffer for use with ::revertToCheckpoint
     *  and ::groupChangesSinceCheckpoint.
     */
    createCheckpoint(): number;

    /**
     *  Revert the buffer to the state it was in when the given checkpoint was created.
     *  The redo stack will be empty following this operation, so changes since the checkpoint
     *  will be lost. If the given checkpoint is no longer present in the undo history, no
     *  changes will be made to the buffer and this method will return false.
     */
    revertToCheckpoint(checkpoint: number): boolean;

    /**
     *  Group all changes since the given checkpoint into a single transaction for purposes
     *  of undo/redo.
     *  If the given checkpoint is no longer present in the undo history, no grouping will be
     *  performed and this method will return false.
     */
    groupChangesSinceCheckpoint(checkpoint: number): boolean;

    // TextEditor Coordinates
    /** Convert a position in buffer-coordinates to screen-coordinates. */
    screenPositionForBufferPosition(bufferPosition: PointCompatible, options?:
        { clipDirection?: "backward"|"forward"|"closest"}): Point;

    /** Convert a position in screen-coordinates to buffer-coordinates. */
    bufferPositionForScreenPosition(bufferPosition: PointCompatible, options?:
        { clipDirection?: "backward"|"forward"|"closest"}): Point;

    /** Convert a range in buffer-coordinates to screen-coordinates. */
    screenRangeForBufferRange(bufferRange: RangeCompatible): Range;

    /** Convert a range in screen-coordinates to buffer-coordinates. */
    bufferRangeForScreenRange(screenRange: RangeCompatible): Range;

    /** Clip the given Point to a valid position in the buffer. */
    clipBufferPosition(bufferPosition: PointCompatible): Point;

    /**
     *  Clip the start and end of the given range to valid positions in the buffer.
     *  See ::clipBufferPosition for more information.
     */
    clipBufferRange(range: RangeCompatible): Range;

    /** Clip the given Point to a valid position on screen. */
    clipScreenPosition(screenPosition: PointCompatible, options?:
        { clipDirection?: "backward"|"forward"|"closest"}): Point;

    /**
     *  Clip the start and end of the given range to valid positions on screen.
     *  See ::clipScreenPosition for more information.
     */
    clipScreenRange(range: RangeCompatible, options?: { clipDirection?:
        "backward"|"forward"|"closest"}): Range;

    // Decorations
    /**
     *  Add a decoration that tracks a DisplayMarker. When the marker moves, is
     *  invalidated, or is destroyed, the decoration will be updated to reflect
     *  the marker's state.
     */
    decorateMarker(marker: DisplayMarker, decorationParams: DecorationOptions): Decoration;

    /**
     *  Add a decoration to every marker in the given marker layer. Can be used to
     *  decorate a large number of markers without having to create and manage many
     *  individual decorations.
     */
    decorateMarkerLayer(markerLayer: MarkerLayer|DisplayMarkerLayer,
        decorationParams: DecorationLayerOptions): LayerDecoration;

    /** Get all decorations. */
    getDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'line'. */
    getLineDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'line-number'. */
    getLineNumberDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'highlight'. */
    getHighlightDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'overlay'. */
    getOverlayDecorations(propertyFilter?: DecorationOptions): Decoration[];

    // Markers
    /**
     *  Create a marker on the default marker layer with the given range in buffer coordinates.
     *  This marker will maintain its logical location as the buffer is changed, so if you mark
     *  a particular word, the marker will remain over that word even if the word's location
     *  in the buffer changes.
     */
    markBufferRange(range: RangeCompatible, properties?: {
        maintainHistory?: boolean,
        reversed?: boolean,
        invalidate?: "never"|"surround"|"overlap"|"inside"|"touch",
    }): DisplayMarker;

    /**
     *  Create a marker on the default marker layer with the given range in screen coordinates.
     *  This marker will maintain its logical location as the buffer is changed, so if you mark
     *  a particular word, the marker will remain over that word even if the word's location in
     *  the buffer changes.
     */
    markScreenRange(range: RangeCompatible, properties?: {
        maintainHistory?: boolean, reversed?: boolean,
        invalidate?: "never"|"surround"|"overlap"|"inside" |"touch",
    }): DisplayMarker;

    /**
     *  Create a marker on the default marker layer with the given buffer position and no tail.
     *  To group multiple markers together in their own private layer, see ::addMarkerLayer.
     */
    markBufferPosition(bufferPosition: PointCompatible, options?: {
        invalidate?: "never"|"surround"|"overlap"|"inside"|"touch",
    }): DisplayMarker;

    /**
     *  Create a marker on the default marker layer with the given screen position and no tail.
     *  To group multiple markers together in their own private layer, see ::addMarkerLayer.
     */
    markScreenPosition(screenPosition: PointCompatible, options?: {
        invalidate?: "never"|"surround"|"overlap"|"inside"|"touch",
        clipDirection?: "backward"|"forward"|"closest",
    }): DisplayMarker;

    /**
     *  Find all DisplayMarkers on the default marker layer that match the given properties.
     *
     *  This method finds markers based on the given properties. Markers can be associated
     *  with custom properties that will be compared with basic equality. In addition, there
     *  are several special properties that will be compared with the range of the markers
     *  rather than their properties.
     */
    findMarkers(properties: FindDisplayMarkerOptions): DisplayMarker[];

    /** Create a marker layer to group related markers. */
    addMarkerLayer(options?: { maintainHistory?: boolean, persistent?: boolean }):
        DisplayMarkerLayer;

    /** Get a DisplayMarkerLayer by id. */
    getMarkerLayer(id: number): DisplayMarkerLayer|undefined;

    /**
     *  Get the default DisplayMarkerLayer.
     *  All marker APIs not tied to an explicit layer interact with this default layer.
     */
    getDefaultMarkerLayer(): DisplayMarkerLayer;

    /** Get the DisplayMarker on the default layer for the given marker id. */
    getMarker(id: number): DisplayMarker;

    /** Get all DisplayMarkers on the default marker layer. Consider using ::findMarkers. */
    getMarkers(): DisplayMarker[];

    /** Get the number of markers in the default marker layer. */
    getMarkerCount(): number;

    // Cursors
    /** Get the position of the most recently added cursor in buffer coordinates. */
    getCursorBufferPosition(): Point;

    /** Get the position of all the cursor positions in buffer coordinates. */
    getCursorBufferPositions(): Point[];

    /**
     *  Move the cursor to the given position in buffer coordinates.
     *  If there are multiple cursors, they will be consolidated to a single cursor.
     */
    setCursorBufferPosition(position: PointCompatible, options?: { autoscroll?: boolean }):
        void;

    /** Get a Cursor at given screen coordinates Point. */
    getCursorAtScreenPosition(position: PointCompatible): Cursor|undefined;

    /** Get the position of the most recently added cursor in screen coordinates. */
    getCursorScreenPosition(): Point;

    /** Get the position of all the cursor positions in screen coordinates. */
    getCursorScreenPositions(): Point[];

    /**
     *  Move the cursor to the given position in screen coordinates.
     *  If there are multiple cursors, they will be consolidated to a single cursor.
     */
    setCursorScreenPosition(position: PointCompatible, options?: { autoscroll?: boolean }):
        void;

    /** Add a cursor at the given position in buffer coordinates. */
    addCursorAtBufferPosition(bufferPosition: PointCompatible, options?:
        { autoscroll?: boolean }): Cursor;

    /** Add a cursor at the position in screen coordinates. */
    addCursorAtScreenPosition(screenPosition: PointCompatible): Cursor;

    /** Returns a boolean indicating whether or not there are multiple cursors. */
    hasMultipleCursors(): boolean;

    /** Move every cursor up one row in screen coordinates. */
    moveUp(lineCount?: number): void;

    /** Move every cursor down one row in screen coordinates. */
    moveDown(lineCount?: number): void;

    /** Move every cursor left one column. */
    moveLeft(columnCount?: number): void;

    /** Move every cursor right one column. */
    moveRight(columnCount?: number): void;

    /** Move every cursor to the beginning of its line in buffer coordinates. */
    moveToBeginningOfLine(): void;

    /** Move every cursor to the beginning of its line in screen coordinates. */
    moveToBeginningOfScreenLine(): void;

    /** Move every cursor to the first non-whitespace character of its line. */
    moveToFirstCharacterOfLine(): void;

    /** Move every cursor to the end of its line in buffer coordinates. */
    moveToEndOfLine(): void;

    /** Move every cursor to the end of its line in screen coordinates. */
    moveToEndOfScreenLine(): void;

    /** Move every cursor to the beginning of its surrounding word. */
    moveToBeginningOfWord(): void;

    /** Move every cursor to the end of its surrounding word. */
    moveToEndOfWord(): void;

    /**
     *  Move every cursor to the top of the buffer.
     *  If there are multiple cursors, they will be merged into a single cursor.
     */
    moveToTop(): void;

    /**
     *  Move every cursor to the bottom of the buffer.
     *  If there are multiple cursors, they will be merged into a single cursor.
     */
    moveToBottom(): void;

    /** Move every cursor to the beginning of the next word. */
    moveToBeginningOfNextWord(): void;

    /** Move every cursor to the previous word boundary. */
    moveToPreviousWordBoundary(): void;

    /** Move every cursor to the next word boundary. */
    moveToNextWordBoundary(): void;

    /** Move every cursor to the previous subword boundary. */
    moveToPreviousSubwordBoundary(): void;

    /** Move every cursor to the next subword boundary. */
    moveToNextSubwordBoundary(): void;

    /** Move every cursor to the beginning of the next paragraph. */
    moveToBeginningOfNextParagraph(): void;

    /** Move every cursor to the beginning of the previous paragraph. */
    moveToBeginningOfPreviousParagraph(): void;

    /** Returns the most recently added Cursor. */
    getLastCursor(): Cursor;

    /** Returns the word surrounding the most recently added cursor. */
    getWordUnderCursor(options?: {
        wordRegex?: RegExp,
        includeNonWordCharacters?: boolean,
        allowPrevious?: boolean,
    }): string;

    /** Get an Array of all Cursors. */
    getCursors(): Cursor[];

    /**
     *  Get all Cursorss, ordered by their position in the buffer instead of the
     *  order in which they were added.
     */
    getCursorsOrderedByBufferPosition(): Cursor[];

    // Selections
    /** Get the selected text of the most recently added selection. */
    getSelectedText(): string;

    /** Get the Range of the most recently added selection in buffer coordinates. */
    getSelectedBufferRange(): Range;

    /**
     *  Get the Ranges of all selections in buffer coordinates.
     *  The ranges are sorted by when the selections were added. Most recent at the end.
     */
    getSelectedBufferRanges(): Range[];

    /**
     *  Set the selected range in buffer coordinates. If there are multiple selections,
     *  they are reduced to a single selection with the given range.
     */
    setSelectedBufferRange(bufferRange: RangeCompatible, options?:
        { reversed?: boolean, preserveFolds?: boolean}): void;

    /**
     *  Set the selected ranges in buffer coordinates. If there are multiple selections,
     *  they are replaced by new selections with the given ranges.
     */
    setSelectedBufferRanges(bufferRanges: ReadonlyArray<RangeCompatible>, options?:
        { reversed?: boolean, preserveFolds?: boolean}): void;

    /** Get the Range of the most recently added selection in screen coordinates. */
    getSelectedScreenRange(): Range;

    /**
     *  Get the Ranges of all selections in screen coordinates.
     *  The ranges are sorted by when the selections were added. Most recent at the end.
     */
    getSelectedScreenRanges(): Range[];

    /**
     *  Set the selected range in screen coordinates. If there are multiple selections,
     *  they are reduced to a single selection with the given range.
     */
    setSelectedScreenRange(screenRange: RangeCompatible, options?: { reversed?: boolean }):
        void;

    /**
     *  Set the selected ranges in screen coordinates. If there are multiple selections,
     *  they are replaced by new selections with the given ranges.
     */
    setSelectedScreenRanges(screenRanges: ReadonlyArray<RangeCompatible>, options?:
        { reversed?: boolean }): void;

    /** Add a selection for the given range in buffer coordinates. */
    addSelectionForBufferRange(bufferRange: RangeCompatible, options?:
        { reversed?: boolean, preserveFolds?: boolean }): Selection;

    /** Add a selection for the given range in screen coordinates. */
    addSelectionForScreenRange(screenRange: RangeCompatible, options?:
        { reversed?: boolean, preserveFolds?: boolean }): Selection;

    /**
     *  Select from the current cursor position to the given position in buffer coordinates.
     *  This method may merge selections that end up intersecting.
     */
    selectToBufferPosition(position: PointCompatible): void;

    /**
     *  Select from the current cursor position to the given position in screen coordinates.
     *  This method may merge selections that end up intersecting.
     */
    selectToScreenPosition(position: PointCompatible): void;

    /**
     *  Move the cursor of each selection one character upward while preserving the
     *  selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectUp(rowCount?: number): void;

    /**
     *  Move the cursor of each selection one character downward while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectDown(rowCount?: number): void;

    /**
     *  Move the cursor of each selection one character leftward while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectLeft(columnCount?: number): void;

    /**
     *  Move the cursor of each selection one character rightward while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectRight(columnCount?: number): void;

    /**
     *  Select from the top of the buffer to the end of the last selection in the buffer.
     *  This method merges multiple selections into a single selection.
     */
    selectToTop(): void;

    /**
     *  Selects from the top of the first selection in the buffer to the end of the buffer.
     *  This method merges multiple selections into a single selection.
     */
    selectToBottom(): void;

    /**
     *  Select all text in the buffer.
     *  This method merges multiple selections into a single selection.
     */
    selectAll(): void;

    /**
     *  Move the cursor of each selection to the beginning of its line while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToBeginningOfLine(): void;

    /**
     *  Move the cursor of each selection to the first non-whitespace character of its
     *  line while preserving the selection's tail position. If the cursor is already
     *  on the first character of the line, move it to the beginning of the line.
     *  This method may merge selections that end up intersecting.
     */
    selectToFirstCharacterOfLine(): void;

    /**
     *  Move the cursor of each selection to the end of its line while preserving the
     *  selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToEndOfLine(): void;

    /**
     *  Expand selections to the beginning of their containing word.
     *  Operates on all selections. Moves the cursor to the beginning of the containing
     *  word while preserving the selection's tail position.
     */
    selectToBeginningOfWord(): void;

    /**
     *  Expand selections to the end of their containing word.
     *  Operates on all selections. Moves the cursor to the end of the containing word
     *  while preserving the selection's tail position.
     */
    selectToEndOfWord(): void;

    /**
     *  For each cursor, select the containing line.
     *  This method merges selections on successive lines.
     */
    selectLinesContainingCursors(): void;

    /** Select the word surrounding each cursor. */
    selectWordsContainingCursors(): void;

    /**
     *  For each selection, move its cursor to the preceding subword boundary while
     *  maintaining the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToPreviousSubwordBoundary(): void;

    /**
     *  For each selection, move its cursor to the next subword boundary while maintaining
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToNextSubwordBoundary(): void;

    /**
     *  For each selection, move its cursor to the preceding word boundary while
     *  maintaining the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToPreviousWordBoundary(): void;

    /**
     *  For each selection, move its cursor to the next word boundary while maintaining
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToNextWordBoundary(): void;

    /**
     *  Expand selections to the beginning of the next word.
     *  Operates on all selections. Moves the cursor to the beginning of the next word
     *  while preserving the selection's tail position.
     */
    selectToBeginningOfNextWord(): void;

    /**
     *  Expand selections to the beginning of the next paragraph.
     *  Operates on all selections. Moves the cursor to the beginning of the next
     *  paragraph while preserving the selection's tail position.
     */
    selectToBeginningOfNextParagraph(): void;

    /**
     *  Expand selections to the beginning of the next paragraph.
     *  Operates on all selections. Moves the cursor to the beginning of the next
     *  paragraph while preserving the selection's tail position.
     */
    selectToBeginningOfPreviousParagraph(): void;

    /** Select the range of the given marker if it is valid. */
    selectMarker(marker: DisplayMarker): Range|undefined;

    /** Get the most recently added Selection. */
    getLastSelection(): Selection;

    /** Get current Selections. */
    getSelections(): Selection[];

    /**
     *  Get all Selections, ordered by their position in the buffer instead of the
     *  order in which they were added.
     */
    getSelectionsOrderedByBufferPosition(): Selection[];

    // NOTE: this calls into Selection::intersectsBufferRange, which itself calls
    // into Range::intersectsWith. Range::intersectsWith is one of the few functions
    // which does NOT take a range-compatible array.
    /** Determine if a given range in buffer coordinates intersects a selection. */
    selectionIntersectsBufferRange(bufferRange: RangeLike): boolean;

    // Searching and Replacing
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     *
     *  ::scan functions as the replace method as well via the replace.
     */
    scan(regex: RegExp, options: ScanContextOptions, iterator: (params:
        ContextualBufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     *
     *  ::scan functions as the replace method as well via the replace.
     */
    scan(regex: RegExp, iterator: (params: BufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in a given range, calling the given iterator.
     *  function on each match.
     */
    scanInBufferRange(regex: RegExp, range: RangeCompatible, iterator:
        (params: BufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in a given range in reverse order, calling the
     *  given iterator function on each match.
     */
    backwardsScanInBufferRange(regex: RegExp, range: RangeCompatible,
        iterator: (params: BufferScanResult) => void): void;

    // Tab Behavior
    /** Returns a boolean indicating whether softTabs are enabled for this editor. */
    getSoftTabs(): boolean;

    /** Enable or disable soft tabs for this editor. */
    setSoftTabs(softTabs: boolean): void;

    /** Toggle soft tabs for this editor. */
    toggleSoftTabs(): boolean;

    /** Get the on-screen length of tab characters. */
    getTabLength(): number;

    /**
     *  Set the on-screen length of tab characters. Setting this to a number will
     *  override the editor.tabLength setting.
     */
    setTabLength(tabLength: number): void;

    /** Determine if the buffer uses hard or soft tabs. */
    usesSoftTabs(): boolean|undefined;

    /**
     *  Get the text representing a single level of indent.
     *  If soft tabs are enabled, the text is composed of N spaces, where N is the
     *  tab length. Otherwise the text is a tab character (\t).
     */
    getTabText(): string;

    // Soft Wrap Behavior
    /** Determine whether lines in this editor are soft-wrapped. */
    isSoftWrapped(): boolean;

    /** Enable or disable soft wrapping for this editor. */
    setSoftWrapped(softWrapped: boolean): boolean;

    /** Toggle soft wrapping for this editor. */
    toggleSoftWrapped(): boolean;

    /** Gets the column at which column will soft wrap. */
    getSoftWrapColumn(): number;

    // Indentation
    /**
     *  Get the indentation level of the given buffer row.
     *  Determines how deeply the given row is indented based on the soft tabs and tab
     *  length settings of this editor. Note that if soft tabs are enabled and the tab
     *  length is 2, a row with 4 leading spaces would have an indentation level of 2.
     */
    indentationForBufferRow(bufferRow: number): number;

    /**
     *  Set the indentation level for the given buffer row.
     *  Inserts or removes hard tabs or spaces based on the soft tabs and tab length settings
     *  of this editor in order to bring it to the given indentation level. Note that if soft
     *  tabs are enabled and the tab length is 2, a row with 4 leading spaces would have an
     *  indentation level of 2.
     */
    setIndentationForBufferRow(bufferRow: number, newLevel: number, options?:
        { preserveLeadingWhitespace?: boolean }): void;

    /** Indent rows intersecting selections by one level. */
    indentSelectedRows(): void;

    /** Outdent rows intersecting selections by one level. */
    outdentSelectedRows(): void;

    /**
     *  Get the indentation level of the given line of text.
     *  Determines how deeply the given line is indented based on the soft tabs and tab length
     *  settings of this editor. Note that if soft tabs are enabled and the tab length is 2,
     *  a row with 4 leading spaces would have an indentation level of 2.
     */
    indentLevelForLine(line: string): number;

    /** Indent rows intersecting selections based on the grammar's suggested indent level. */
    autoIndentSelectedRows(): void;

    // Grammars
    /** Get the current Grammar of this editor. */
    getGrammar(): Grammar;

    /**
     *  Set the current Grammar of this editor.
     *  Assigning a grammar will cause the editor to re-tokenize based on the new grammar.
     */
    setGrammar(grammar: Grammar): void;

    // Managing Syntax Scopes
    /**
     *  Returns a ScopeDescriptor that includes this editor's language.
     *  e.g. [".source.ruby"], or [".source.coffee"].
     */
    getRootScopeDescriptor(): ScopeDescriptor;

    /** Get the syntactic scopeDescriptor for the given position in buffer coordinates. */
    scopeDescriptorForBufferPosition(bufferPosition: PointCompatible): ScopeDescriptor;

    /**
     *  Get the range in buffer coordinates of all tokens surrounding the cursor
     *  that match the given scope selector.
     */
    bufferRangeForScopeAtCursor(scopeSelector: string): Range;

    /** Determine if the given row is entirely a comment. */
    isBufferRowCommented(bufferRow: number): boolean;

    // Clipboard Operations
    /** For each selection, copy the selected text. */
    copySelectedText(): void;

    /** For each selection, cut the selected text. */
    cutSelectedText(): void;

    /**
     *  For each selection, replace the selected text with the contents of the clipboard.
     *  If the clipboard contains the same number of selections as the current editor,
     *  each selection will be replaced with the content of the corresponding clipboard
     *  selection text.
     */
    pasteText(options?: TextInsertionOptions): void;

    /**
     *  For each selection, if the selection is empty, cut all characters of the
     *  containing screen line following the cursor. Otherwise cut the selected text.
     */
    cutToEndOfLine(): void;

    /**
     *  For each selection, if the selection is empty, cut all characters of the
     *  containing buffer line following the cursor. Otherwise cut the selected text.
     */
    cutToEndOfBufferLine(): void;

    // Folds
    /**
     *  Fold the most recent cursor's row based on its indentation level.
     *  The fold will extend from the nearest preceding line with a lower indentation
     *  level up to the nearest following row with a lower indentation level.
     */
    foldCurrentRow(): void;

    /** Unfold the most recent cursor's row by one level. */
    unfoldCurrentRow(): void;

    /**
     *  Fold the given row in buffer coordinates based on its indentation level.
     *  If the given row is foldable, the fold will begin there. Otherwise, it will
     *  begin at the first foldable row preceding the given row.
     */
    foldBufferRow(bufferRow: number): void;

    /** Unfold all folds containing the given row in buffer coordinates. */
    unfoldBufferRow(bufferRow: number): void;

    /** For each selection, fold the rows it intersects. */
    foldSelectedLines(): void;

    /** Fold all foldable lines. */
    foldAll(): void;

    /** Unfold all existing folds. */
    unfoldAll(): void;

    /** Fold all foldable lines at the given indent level. */
    foldAllAtIndentLevel(level: number): void;

    /**
     *  Determine whether the given row in buffer coordinates is foldable.
     *  A foldable row is a row that starts a row range that can be folded.
     */
    isFoldableAtBufferRow(bufferRow: number): boolean;

    /**
     *  Determine whether the given row in screen coordinates is foldable.
     *  A foldable row is a row that starts a row range that can be folded.
     */
    isFoldableAtScreenRow(bufferRow: number): boolean;

    /** Fold the given buffer row if it isn't currently folded, and unfold it otherwise. */
    toggleFoldAtBufferRow(bufferRow: number): void;

    /** Determine whether the most recently added cursor's row is folded. */
    isFoldedAtCursorRow(): boolean;

    /** Determine whether the given row in buffer coordinates is folded. */
    isFoldedAtBufferRow(bufferRow: number): boolean;

    /** Determine whether the given row in screen coordinates is folded. */
    isFoldedAtScreenRow(screenRow: number): boolean;

    // Gutters
    /** Add a custom Gutter. */
    addGutter(options: {
        name: string,
        priority?: number,
        visible?: boolean,
    }): Gutter;

    /** Get this editor's gutters. */
    getGutters(): Gutter[];

    /** Get the gutter with the given name. */
    gutterWithName(name: string): Gutter|null;

    // Scrolling the TextEditor
    /** Scroll the editor to reveal the most recently added cursor if it is off-screen. */
    scrollToCursorPosition(options?: { center?: boolean }): void;

    /** Scrolls the editor to the given buffer position. */
    scrollToBufferPosition(bufferPosition: PointCompatible, options?: { center?: boolean }):
        void;

    /** Scrolls the editor to the given screen position. */
    scrollToScreenPosition(screenPosition: PointCompatible, options?: { center?: boolean }):
        void;

    // TextEditor Rendering
    /** Retrieves the rendered line height in pixels. */
    getLineHeightInPixels(): number;

    /** Retrieves the greyed out placeholder of a mini editor. */
    getPlaceholderText(): string;

    /**
     *  Set the greyed out placeholder of a mini editor. Placeholder text will be
     *  displayed when the editor has no content.
     */
    setPlaceholderText(placeholderText: string): void;

    /** Undocumented: Buffer range for syntax scope at position */
    bufferRangeForScopeAtPosition(scope: string, point: PointCompatible): Range;

    /** Undocumented: Get syntax token at buffer position */
    tokenForBufferPosition(pos: PointCompatible): {value: string, scopes: string[]};
}

export interface PixelPosition {
    left: number;
    top: number;
}

/**
 *  Undocumented: Rendering component for TextEditor
 */
export interface TextEditorComponent {
  /** Does not clip screenPosition, unlike similar method on TextEditorElement */
  pixelPositionForScreenPosition(screenPosition: PointLike): PixelPosition;
  screenPositionForPixelPosition(pos: PixelPosition): Point;
  pixelPositionForMouseEvent(event: {
    clientX: number, clientY: number
  }): PixelPosition;
  screenPositionForMouseEvent(event: {clientX: number, clientY: number}): Point;
}

/**
 *  Undocumented: Custom HTML elemnent for TextEditor, atom-text-editor
 */
export interface TextEditorElement extends HTMLElement {
  getModel(): TextEditor;
  getComponent(): TextEditorComponent;
  /**
   * Extended: Get a promise that resolves the next time the element's
   * DOM is updated in any way.
   */
  getNextUpdatePromise(): Promise<void>;

  /** Extended: get the width of an `x` character displayed in this element. */
  getBaseCharacterWidth(): number;

  /** Essential: Scrolls the editor to the top. */
  scrollToTop(): void;

  /** Essential: Scrolls the editor to the bottom. */
  scrollToBottom(): void;

  setScrollTop(scrollTop: number): void;
  getScrollTop(): number;

  setScrollLeft(scrollLeft: number): void;
  getScrollLeft(): number;

  getScrollHeight(): number;

  /** Extended: Converts a buffer position to a pixel position. */
  pixelPositionForBufferPosition(bufferPosition: PointLike): PixelPosition;

  /** Extended: Converts a screen position to a pixel position. */
  pixelPositionForScreenPosition(screenPosition: PointLike): PixelPosition;

  // Event subscription
  onDidChangeScrollTop(callback: (scrollTop: number) => void): Disposable;
  onDidChangeScrollLeft(callback: (scrollLeft: number) => void): Disposable;
  /** Called when the editor is attached to the DOM. */
  onDidAttach(callback: () => void): Disposable;
  /** Called when the editor is detached from the DOM. */
  onDidDetach(callback: () => void): Disposable;
}

/** Experimental: This global registry tracks registered TextEditors. */
export interface TextEditorRegistry {
    // Managing Text Editors
    /** Remove all editors from the registry. */
    clear(): void;

    /** Register a TextEditor. */
    add(editor: TextEditor): Disposable;

    /** Remove the given TextEditor from the registry. */
    remove(editor: TextEditor): boolean;

    /** Keep a TextEditor's configuration in sync with Atom's settings. */
    maintainConfig(editor: TextEditor): Disposable;

    /**
     *  Set a TextEditor's grammar based on its path and content, and continue
     *  to update its grammar as gramamrs are added or updated, or the editor's
     *  file path changes.
     */
    maintainGrammar(editor: TextEditor): Disposable;

    /**
     *  Force a TextEditor to use a different grammar than the one that would
     *  otherwise be selected for it.
     */
    setGrammarOverride(editor: TextEditor, scopeName: string): void;

    /**
     *  Retrieve the grammar scope name that has been set as a grammar override
     *  for the given TextEditor.
     */
    getGrammarOverride(editor: TextEditor): string|null;

    /** Remove any grammar override that has been set for the given TextEditor. */
    clearGrammarOverride(editor: TextEditor): void;

    // Event Subscription
    /** Invoke the given callback with all the current and future registered TextEditors. */
    observe(callback: (editor: TextEditor) => void): Disposable;
}

export type TooltipPlacement =
    |"top"|"bottom"|"left"|"right"
    |"auto"|"auto top"|"auto bottom"|"auto left"|"auto right";

/** Associates tooltips with HTML elements or selectors. */
export interface TooltipManager {
    /** Add a tooltip to the given element. */
    add(target: HTMLElement, options: {
        item?: object,
    } | {
        title?: string|(() => string),
        html?: boolean,
        keyBindingCommand?: string,
        keyBindingTarget?: HTMLElement
    } & {
        class?: string;
        placement?: TooltipPlacement|(() => TooltipPlacement),
        trigger?: "click"|"hover"|"focus"|"manual",
        delay?: { show: number, hide: number }
    }): Disposable;

    /** Find the tooltips that have been applied to the given element. */
    findTooltips(target: HTMLElement): Tooltip[];
}

/**
 *  ViewRegistry handles the association between model and view types in Atom.
 *  We call this association a View Provider. As in, for a given model, this class
 *  can provide a view via ::getView, as long as the model/view association was
 *  registered via ::addViewProvider.
 */
export interface ViewRegistry {
    /**
     *  Add a provider that will be used to construct views in the workspace's view
     *  layer based on model objects in its model layer.
     */
    addViewProvider(createView: (model: object) => HTMLElement|undefined): Disposable;
    /**
     *  Add a provider that will be used to construct views in the workspace's view
     *  layer based on model objects in its model layer.
     */
    // tslint:disable-next-line:no-any
    addViewProvider<T>(modelConstructor: { new (...args: any[]): T }, createView:
        (instance: T) => HTMLElement|undefined): Disposable;

    /** Get the view associated with an object in the workspace. */
    getView(obj: TextEditor): TextEditorElement;
    getView(obj: object): HTMLElement;
}

/** Represents the state of the user interface for the entire window. */
export interface Workspace {
    // Event Subscription
    /**
     *  Invoke the given callback with all current and future text editors in
     *  the workspace.
     */
    observeTextEditors(callback: (editor: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback with all current and future panes items in the
     *  workspace.
     */
    observePaneItems(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item changes. */
    onDidChangeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item stops changing. */
    onDidStopChangingActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback when a text editor becomes the active text editor and
     *  when there is no longer an active text editor.
     */
    onDidChangeActiveTextEditor(callback: (editor?: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane item and with all
     *  future active pane items in the workspace.
     */
    observeActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback with the current active text editor (if any), with all
     *  future active text editors, and when there is no longer an active text editor.
     */
    observeActiveTextEditor(callback: (editor?: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback whenever an item is opened. Unlike ::onDidAddPaneItem,
     *  observers will be notified for items that are already present in the workspace
     *  when they are reopened.
     */
    onDidOpen(callback: (event: PaneItemOpenedEvent) => void): Disposable;

    /** Invoke the given callback when a pane is added to the workspace. */
    onDidAddPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback before a pane is destroyed in the workspace. */
    onWillDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback when a pane is destroyed in the workspace. */
    onDidDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback with all current and future panes in the workspace. */
    observePanes(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when the active pane changes. */
    onDidChangeActivePane(callback: (pane: Pane) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane and when the
     *  active pane changes.
     */
    observeActivePane(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when a pane item is added to the workspace. */
    onDidAddPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /**
     *  Invoke the given callback when a pane item is about to be destroyed,
     *  before the user is prompted to save it.
     *  @param callback The function to be called before pane items are destroyed.
     *      If this function returns a Promise, then the item will not be destroyed
     *      until the promise resolves.
     */
    onWillDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void|Promise<void>):
        Disposable;

    /** Invoke the given callback when a pane item is destroyed. */
    onDidDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /** Invoke the given callback when a text editor is added to the workspace. */
    onDidAddTextEditor(callback: (event: TextEditorObservedEvent) => void): Disposable;

    // Opening
    /**
     *  Opens the given URI in Atom asynchronously. If the URI is already open,
     *  the existing item for that URI will be activated. If no URI is given, or
     *  no registered opener can open the URI, a new empty TextEditor will be created.
     */
    open(uri: string, options?: WorkspaceOpenOptions): Promise<object>;
    /**
     *  Opens the given item in Atom asynchronously. If the item is already open,
     *  the existing item will be activated. If no item is given, a new empty TextEditor
     *  will be created.
     */
    open<T extends ViewModel = ViewModel>(item: T, options?: WorkspaceOpenOptions):
        Promise<T>;
    /**
     *  Opens the given URI in Atom asynchronously. If the URI is already open,
     *  the existing item for that URI will be activated. If no URI is given, or
     *  no registered opener can open the URI, a new empty TextEditor will be created.
     */
    open(): Promise<TextEditor>;

    /**
     *  Search the workspace for items matching the given URI and hide them.
     *  Returns a boolean indicating whether any items were found (and hidden).
     */
    hide(itemOrURI: object|string): boolean;

    /**
     *  Search the workspace for items matching the given URI. If any are found,
     *  hide them. Otherwise, open the URL.
     *  Returns a Promise that resolves when the item is shown or hidden.
     */
    toggle(itemOrURI: object|string): Promise<void>;

    /**
     *  Creates a new item that corresponds to the provided URI.
     *  If no URI is given, or no registered opener can open the URI, a new empty TextEditor
     *  will be created.
     */
    createItemForURI(uri: string): Promise<object|TextEditor>;

    /** Returns a boolean that is true if object is a TextEditor. */
    isTextEditor(object: object): boolean;

    /**
     *  Asynchronously reopens the last-closed item's URI if it hasn't already
     *  been reopened.
     */
    reopenItem(): Promise<object|undefined>;

    /** Register an opener for a URI. */
    addOpener(opener: (uri: string, options?: WorkspaceOpenOptions) =>
        ViewModel|undefined): Disposable;

    /** Create a new text editor. */
    buildTextEditor(params: object): TextEditor;

    // Pane Items
    /** Get all pane items in the workspace. */
    getPaneItems(): object[];

    /** Get the active Pane's active item. */
    getActivePaneItem(): object;

    /** Get all text editors in the workspace. */
    getTextEditors(): TextEditor[];

    /** Get the workspace center's active item if it is a TextEditor. */
    getActiveTextEditor(): TextEditor|undefined;

    // Panes
    /** Get the most recently focused pane container. */
    getActivePaneContainer(): Dock|WorkspaceCenter;

    /** Get all panes in the workspace. */
    getPanes(): Pane[];

    /** Get the active Pane. */
    getActivePane(): Pane;

    /** Make the next pane active. */
    activateNextPane(): boolean;

    /** Make the previous pane active. */
    activatePreviousPane(): boolean;

    /** Get the first pane container that contains an item with the given URI. */
    paneContainerForURI(uri: string): Dock|WorkspaceCenter|undefined;

    /** Get the first pane container that contains the given item. */
    paneContainerForItem(item: object): Dock|WorkspaceCenter|undefined;

    /** Get the first Pane with an item for the given URI. */
    paneForURI(uri: string): Pane|undefined;

    /** Get the Pane containing the given item. */
    paneForItem(item: object): Pane|undefined;

    // Pane Locations
    /** Get the WorkspaceCenter at the center of the editor window. */
    getCenter(): WorkspaceCenter;

    /** Get the Dock to the left of the editor window. */
    getLeftDock(): Dock;

    /** Get the Dock to the right of the editor window. */
    getRightDock(): Dock;

    /** Get the Dock below the editor window. */
    getBottomDock(): Dock;

    /** Returns all Pane containers. */
    getPaneContainers(): [WorkspaceCenter, Dock, Dock, Dock];

    // Panels
    /** Get an Array of all the panel items at the bottom of the editor window. */
    getBottomPanels(): Panel[];

    /** Adds a panel item to the bottom of the editor window. */
    addBottomPanel<T>(options: {
        item: T,
        visible?: boolean,
        priority?: number,
    }): Panel<T>;

    /** Get an Array of all the panel items to the left of the editor window. */
    getLeftPanels(): Panel[];

    /** Adds a panel item to the left of the editor window. */
    addLeftPanel<T>(options: {
        item: T,
        visible?: boolean,
        priority?: number,
    }): Panel<T>;

    /** Get an Array of all the panel items to the right of the editor window. */
    getRightPanels(): Panel[];

    /** Adds a panel item to the right of the editor window. */
    addRightPanel<T>(options: {
        item: T,
        visible?: boolean,
        priority?: number,
    }): Panel<T>;

    /** Get an Array of all the panel items at the top of the editor window. */
    getTopPanels(): Panel[];

    /** Adds a panel item to the top of the editor window above the tabs. */
    addTopPanel<T>(options: {
        item: T,
        visible?: boolean,
        priority?: number
    }): Panel<T>;

    /** Get an Array of all the panel items in the header. */
    getHeaderPanels(): Panel[];

    /** Adds a panel item to the header. */
    addHeaderPanel<T>(options: {
        item: T,
        visible?: boolean,
        priority?: number,
    }): Panel<T>;

    /** Get an Array of all the panel items in the footer. */
    getFooterPanels(): Panel[];

    /** Adds a panel item to the footer. */
    addFooterPanel<T>(options: {
        item: T,
        visible?: boolean,
        priority?: number,
    }): Panel<T>;

    /** Get an Array of all the modal panel items. */
    getModalPanels(): Panel[];

    /** Adds a panel item as a modal dialog. */
    addModalPanel<T>(options: {
        item: T,
        visible?: boolean,
        priority?: number,
        autoFocus?: boolean,
    }): Panel<T>;

    /**
     *  Returns the Panel associated with the given item or null when the item
     *  has no panel.
     */
    panelForItem<T>(item: T): Panel<T>|null;

    // Searching and Replacing
    /** Performs a search across all files in the workspace. */
    scan(regex: RegExp, iterator: (result: ScandalResult) => void):
        CancellablePromise<string|null>;
    /** Performs a search across all files in the workspace. */
    scan(regex: RegExp, options: WorkspaceScanOptions, iterator:
        (result: ScandalResult) => void): CancellablePromise<string|null>;

    /** Performs a replace across all the specified files in the project. */
    replace(regex: RegExp, replacementText: string, filePaths: ReadonlyArray<string>,
        iterator: (result: { filePath: string|undefined, replacements: number }) => void):
        Promise<void>;
}

// https://github.com/atom/atom/blob/master/src/workspace-center.js
/** The central container for the editor window capable of holding items. */
export interface WorkspaceCenter {
    // Event Subscription
    /**
     *  Invoke the given callback with all current and future text editors in the
     *  workspace center.
     */
    observeTextEditors(callback: (editor: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback with all current and future panes items in the
     *  workspace center.
     */
    observePaneItems(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item changes. */
    onDidChangeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item stops changing. */
    onDidStopChangingActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane item and with all future
     *  active pane items in the workspace center.
     */
    observeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when a pane is added to the workspace center. */
    onDidAddPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback before a pane is destroyed in the workspace center. */
    onWillDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback when a pane is destroyed in the workspace center. */
    onDidDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback with all current and future panes in the workspace center. */
    observePanes(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when the active pane changes. */
    onDidChangeActivePane(callback: (pane: Pane) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane and when the active pane
     *  changes.
     */
    observeActivePane(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when a pane item is added to the workspace center. */
    onDidAddPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /**
     *  Invoke the given callback when a pane item is about to be destroyed, before the user
     *  is prompted to save it.
     *  @param callback The function to be called before pane items are destroyed.
     *      If this function returns a Promise, then the item will not be destroyed
     *      until the promise resolves.
     */
    onWillDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void|Promise<void>):
        Disposable;

    /** Invoke the given callback when a pane item is destroyed. */
    onDidDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /** Invoke the given callback when a text editor is added to the workspace center. */
    onDidAddTextEditor(callback: (event: TextEditorObservedEvent) => void): Disposable;

    // Pane Items
    /** Get all pane items in the workspace center. */
    getPaneItems(): object[];

    /** Get the active Pane's active item. */
    getActivePaneItem(): object|undefined;

    /** Get all text editors in the workspace center. */
    getTextEditors(): TextEditor[];

    /** Get the active item if it is an TextEditor. */
    getActiveTextEditor(): TextEditor|undefined;

    /** Save all pane items. */
    saveAll(): void;

    // Panes
    /** Get all panes in the workspace center. */
    getPanes(): Pane[];

    /** Get the active Pane. */
    getActivePane(): Pane;

    /** Make the next pane active. */
    activateNextPane(): void;

    /** Make the previous pane active. */
    activatePreviousPane(): void;

    /** Retrieve the Pane associated with the given URI. */
    paneForURI(uri: string): Pane|undefined;

    /** Retrieve the Pane associated with the given item. */
    paneForItem(item: object): Pane|undefined;

    /** Destroy (close) the active pane. */
    destroyActivePane(): void;
}

// Extended Classes ===========================================================

/**
 *  A wrapper which provides standard error/output line buffering for
 *  Node's ChildProcess.
 */
export class BufferedProcess {
    process?: ChildProcess;

    constructor(options: ProcessOptions);

    // Event Subscription
    /**
     *  Will call your callback when an error will be raised by the process. Usually
     *  this is due to the command not being available or not on the PATH. You can
     *  call handle() on the object passed to your callback to indicate that you
     *  have handled this error.
     */
    onWillThrowError(callback: (errorObject: HandleableErrorEvent) =>
        void): Disposable;

    // Helper Methods
    /** Terminate the process. */
    kill(): void;

    /** Runs the process. */
    start(): void;
}

/**
 *  Like BufferedProcess, but accepts a Node script as the command to run.
 *  This is necessary on Windows since it doesn't support shebang #! lines.
 */
export class BufferedNodeProcess extends BufferedProcess {
    /** Runs the given Node script by spawning a new child process. */
    constructor(options: NodeProcessOptions);
}

/** Represents the clipboard used for copying and pasting in Atom. */
export interface Clipboard {
    /** Write the given text to the clipboard. */
    write(text: string, metadata?: object): void;

    /** Read the text from the clipboard. */
    read(): string;

    /**
     *  Read the text from the clipboard and return both the text and the associated
     *  metadata.
     */
    readWithMetadata(): { text: string, metadata: object };
}

/** Provides a registry for commands that you'd like to appear in the context menu. */
export interface ContextMenuManager {
    /** Add context menu items scoped by CSS selectors. */
    add(itemsBySelector: { [key: string]: ReadonlyArray<ContextMenuOptions> }): Disposable;
}

/**
 *  The Cursor class represents the little blinking line identifying where text
 *  can be inserted.
 */
export interface Cursor {
    // Event Subscription
    /** Calls your callback when the cursor has been moved. */
    onDidChangePosition(callback: (event: CursorPositionChangedEvent) => void): Disposable;

    /** Calls your callback when the cursor is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Calls your callback when the cursor's visibility has changed. */
    onDidChangeVisibility(callback: (visibility: boolean) => void): Disposable;

    // Managing Cursor Position
    /** Moves a cursor to a given screen position. */
    setScreenPosition(screenPosition: PointCompatible, options?: { autoscroll?: boolean }):
        void;

    /** Returns the screen position of the cursor as a Point. */
    getScreenPosition(): Point;

    /** Moves a cursor to a given buffer position. */
    setBufferPosition(bufferPosition: PointCompatible, options?: { autoscroll?: boolean }):
        void;

    /** Returns the current buffer position as an Array. */
    getBufferPosition(): Point;

    /** Returns the cursor's current screen row. */
    getScreenRow(): number;

    /** Returns the cursor's current screen column. */
    getScreenColumn(): number;

    /** Retrieves the cursor's current buffer row. */
    getBufferRow(): number;

    /** Returns the cursor's current buffer column. */
    getBufferColumn(): number;

    /** Returns the cursor's current buffer row of text excluding its line ending. */
    getCurrentBufferLine(): string;

    /** Returns whether the cursor is at the start of a line. */
    isAtBeginningOfLine(): boolean;

    /** Returns whether the cursor is on the line return character. */
    isAtEndOfLine(): boolean;

    // Cursor Position Details
    /**
     *  Returns the underlying DisplayMarker for the cursor. Useful with overlay
     *  Decorations.
     */
    getMarker(): DisplayMarker;

    /**
     *  Identifies if the cursor is surrounded by whitespace.
     *  "Surrounded" here means that the character directly before and after the cursor
     *  are both whitespace.
     */
    isSurroundedByWhitespace(): boolean;

    /** This method returns false if the character before or after the cursor is whitespace. */
    isBetweenWordAndNonWord(): boolean;

    /** Returns whether this cursor is between a word's start and end. */
    isInsideWord(options?: { wordRegex?: RegExp }): boolean;

    /** Returns the indentation level of the current line. */
    getIndentLevel(): number;

    /** Retrieves the scope descriptor for the cursor's current position. */
    getScopeDescriptor(): ScopeDescriptor;

    /**
     *  Returns true if this cursor has no non-whitespace characters before its
     *  current position.
     */
    hasPrecedingCharactersOnLine(): boolean;

    /**
     *  Identifies if this cursor is the last in the TextEditor.
     *  "Last" is defined as the most recently added cursor.
     */
    isLastCursor(): boolean;

    // Moving the Cursor
    /** Moves the cursor up one screen row. */
    moveUp(rowCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor down one screen row. */
    moveDown(rowCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor left one screen column. */
    moveLeft(columnCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor right one screen column. */
    moveRight(columnCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor to the top of the buffer. */
    moveToTop(): void;

    /** Moves the cursor to the bottom of the buffer. */
    moveToBottom(): void;

    /** Moves the cursor to the beginning of the line. */
    moveToBeginningOfScreenLine(): void;

    /** Moves the cursor to the beginning of the buffer line. */
    moveToBeginningOfLine(): void;

    /** Moves the cursor to the beginning of the first character in the line. */
    moveToFirstCharacterOfLine(): void;

    /** Moves the cursor to the end of the line. */
    moveToEndOfScreenLine(): void;

    /** Moves the cursor to the end of the buffer line. */
    moveToEndOfLine(): void;

    /** Moves the cursor to the beginning of the word. */
    moveToBeginningOfWord(): void;

    /** Moves the cursor to the end of the word. */
    moveToEndOfWord(): void;

    /** Moves the cursor to the beginning of the next word. */
    moveToBeginningOfNextWord(): void;

    /** Moves the cursor to the previous word boundary. */
    moveToPreviousWordBoundary(): void;

    /** Moves the cursor to the next word boundary. */
    moveToNextWordBoundary(): void;

    /** Moves the cursor to the previous subword boundary. */
    moveToPreviousSubwordBoundary(): void;

    /** Moves the cursor to the next subword boundary. */
    moveToNextSubwordBoundary(): void;

    /** Moves the cursor to the beginning of the buffer line, skipping all whitespace. */
    skipLeadingWhitespace(): void;

    /** Moves the cursor to the beginning of the next paragraph. */
    moveToBeginningOfNextParagraph(): void;

    /** Moves the cursor to the beginning of the previous paragraph. */
    moveToBeginningOfPreviousParagraph(): void;

    // Local Positions and Ranges
    /**
     *  Returns buffer position of previous word boundary. It might be on the current
     *  word, or the previous word.
     */
    getPreviousWordBoundaryBufferPosition(options?: { wordRegex?: RegExp }): Point;

    /**
     *  Returns buffer position of the next word boundary. It might be on the current
     *  word, or the previous word.
     */
    getNextWordBoundaryBufferPosition(options?: { wordRegex?: RegExp }): Point;

    /** Retrieves the buffer position of where the current word starts. */
    getBeginningOfCurrentWordBufferPosition(options?: {
        wordRegex?: RegExp,
        includeNonWordCharacters?: boolean,
        allowPrevious?: boolean
    }): Point;

    /** Retrieves the buffer position of where the current word ends. */
    getEndOfCurrentWordBufferPosition(options?: {
        wordRegex?: RegExp,
        includeNonWordCharacters?: boolean
    }): Point;

    /** Retrieves the buffer position of where the next word starts. */
    getBeginningOfNextWordBufferPosition(options?: { wordRegex?: RegExp }): Point;

    /** Returns the buffer Range occupied by the word located under the cursor. */
    getCurrentWordBufferRange(options?: { wordRegex?: RegExp }): Range;

    /** Returns the buffer Range for the current line. */
    getCurrentLineBufferRange(options?: { includeNewline?: boolean }): Range;

    /**
     *  Retrieves the range for the current paragraph.
     *  A paragraph is defined as a block of text surrounded by empty lines or comments.
     */
    getCurrentParagraphBufferRange(): Range;

    /** Returns the characters preceding the cursor in the current word. */
    getCurrentWordPrefix(): string;

    // Visibility
    /** Sets whether the cursor is visible. */
    setVisible(visible: boolean): void;

    /** Returns the visibility of the cursor. */
    isVisible(): boolean;

    // Comparing to another cursor
    /**
     *  Compare this cursor's buffer position to another cursor's buffer position.
     *  See Point::compare for more details.
     */
    compare(otherCursor: Cursor): number;

    // Utilities
    /** Prevents this cursor from causing scrolling. */
    clearAutoscroll(): void;

    /** Deselects the current selection. */
    clearSelection(): void;

    /** Get the RegExp used by the cursor to determine what a "word" is. */
    wordRegExp(options?: { includeNonWordCharacters?: boolean }): RegExp;

    /** Get the RegExp used by the cursor to determine what a "subword" is. */
    subwordRegExp(options?: { backwards?: boolean }): RegExp;
}

/** Manages the deserializers used for serialized state. */
export interface DeserializerManager {
    /** Register the given class(es) as deserializers. */
    add(...deserializers: Deserializer[]): Disposable;

    /** Deserialize the state and params. */
    deserialize(state: object): object|undefined;
}

/** Represents a directory on disk that can be watched for changes. */
export class Directory {
    // Construction
    /** Configures a new Directory instance, no files are accessed. */
    constructor(directoryPath: string, symlink?: boolean);

    /**
     *  Creates the directory on disk that corresponds to ::getPath() if no such
     *  directory already exists.
     */
    create(mode?: number): Promise<boolean>;

    // Event Subscription
    /** Invoke the given callback when the directory's contents change. */
    onDidChange(callback: () => void): Disposable;

    // Directory Metadata
    /** Returns a boolean, always false. */
    isFile(): boolean;

    /** Returns a roolean, always true. */
    isDirectory(): boolean;

    /** Returns a boolean indicating whether or not this is a symbolic link. */
    isSymbolicLink(): boolean;

    /**
     *  Returns a promise that resolves to a boolean, true if the directory
     *  exists, false otherwise.
     */
    exists(): Promise<boolean>;

    /** Returns a boolean, true if the directory exists, false otherwise. */
    existsSync(): boolean;

    /**
     *  Return a boolean, true if this Directory is the root directory of the
     *  filesystem, or false if it isn't.
     */
    isRoot(): boolean;

    // Managing Paths
    /**
     *  This may include unfollowed symlinks or relative directory entries.
     *  Or it may be fully resolved, it depends on what you give it.
     */
    getPath(): string;

    /**
     *  All relative directory entries are removed and symlinks are resolved to
     *  their final destination.
     */
    getRealPathSync(): string;

    /** Returns the string basename of the directory. */
    getBaseName(): string;

    /** Returns the relative string path to the given path from this directory. */
    relativize(fullPath: string): string;

    // Traversing
    /** Traverse to the parent directory. */
    getParent(): Directory;

    /**
     *  Traverse within this Directory to a child File. This method doesn't actually
     *  check to see if the File exists, it just creates the File object.
     */
    getFile(filename: string): File;

    /**
     *  Traverse within this a Directory to a child Directory. This method doesn't actually
     *  check to see if the Directory exists, it just creates the Directory object.
     */
    getSubdirectory(dirname: string): Directory;

    /** Reads file entries in this directory from disk synchronously. */
    getEntriesSync(): Array<File|Directory>;

    /** Reads file entries in this directory from disk asynchronously. */
    getEntries(callback: (error: Error, entries: Array<File|Directory>) => void): void;

    /**
     *  Determines if the given path (real or symbolic) is inside this directory. This
     *  method does not actually check if the path exists, it just checks if the path
     *  is under this directory.
     */
    contains(pathToCheck: string): boolean;
}

/** A container at the edges of the editor window capable of holding items. */
export interface Dock {
    // Methods
    /** Show the dock and focus its active Pane. */
    activate(): void;

    /** Show the dock without focusing it. */
    show(): void;

    /**
     *  Hide the dock and activate the WorkspaceCenter if the dock was was previously
     *  focused.
     */
    hide(): void;

    /**
     *  Toggle the dock's visibility without changing the Workspace's active pane
     *  container.
     */
    toggle(): void;

    /** Check if the dock is visible. */
    isVisible(): boolean;

    // Event Subscription
    /** Invoke the given callback when the visibility of the dock changes. */
    onDidChangeVisible(callback: (visible: boolean) => void): Disposable;

    /**
     *  Invoke the given callback with the current and all future visibilities of
     *  the dock.
     */
    observeVisible(callback: (visible: boolean) => void): Disposable;

    /** Invoke the given callback with all current and future panes items in the dock. */
    observePaneItems(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback when the active pane item changes.
     *
     *  Because observers are invoked synchronously, it's important not to perform any
     *  expensive operations via this method. Consider ::onDidStopChangingActivePaneItem
     *  to delay operations until after changes stop occurring.
     */
    onDidChangeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item stops changing. */
    onDidStopChangingActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane item and with all future
     *  active pane items in the dock.
     */
    observeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when a pane is added to the dock. */
    onDidAddPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback before a pane is destroyed in the dock. */
    onWillDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback when a pane is destroyed in the dock. */
    onDidDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback with all current and future panes in the dock. */
    observePanes(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when the active pane changes. */
    onDidChangeActivePane(callback: (pane: Pane) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane and when the active
     *  pane changes.
     */
    observeActivePane(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when a pane item is added to the dock. */
    onDidAddPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /**
     *  Invoke the given callback when a pane item is about to be destroyed, before the user is
     *  prompted to save it.
     *  @param callback The function to be called before pane items are destroyed.
     *      If this function returns a Promise, then the item will not be destroyed
     *      until the promise resolves.
     */
    onWillDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void|Promise<void>):
        Disposable;

    /** Invoke the given callback when a pane item is destroyed. */
    onDidDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    // Pane Items
    /** Get all pane items in the dock. */
    getPaneItems(): object[];

    /** Get the active Pane's active item. */
    getActivePaneItem(): object;

    // Panes
    /** Returns an Array of Panes. */
    getPanes(): Pane[];

    /** Get the active Pane. */
    getActivePane(): Pane;

    /** Make the next pane active. */
    activateNextPane(): boolean;

    /** Make the previous pane active. */
    activatePreviousPane(): boolean;
}

/** Represents an individual file that can be watched, read from, and written to. */
export class File {
    // Construction
    /** Configures a new File instance, no files are accessed. */
    constructor(filePath: string, symlink?: boolean);

    /**
     *  Creates the file on disk that corresponds to ::getPath() if no such file
     *  already exists.
     */
    create(): Promise<boolean>;

    // Event Subscription
    /** Invoke the given callback when the file's contents change. */
    onDidChange(callback: () => void): Disposable;

    /** Invoke the given callback when the file's path changes. */
    onDidRename(callback: () => void): Disposable;

    /** Invoke the given callback when the file is deleted. */
    onDidDelete(callback: () => void): Disposable;

    /**
     *  Invoke the given callback when there is an error with the watch. When
     *  your callback has been invoked, the file will have unsubscribed from the
     *  file watches.
     */
    onWillThrowWatchError(callback: (event: PathWatchErrorThrownEvent) =>
        void): Disposable;

    // File Metadata
    /** Returns a boolean, always true. */
    isFile(): boolean;

    /** Returns a boolean, always false. */
    isDirectory(): boolean;

    /** Returns a boolean indicating whether or not this is a symbolic link. */
    isSymbolicLink(): boolean;

    /**
     *  Returns a promise that resolves to a boolean, true if the file exists,
     *  false otherwise.
     */
    exists(): Promise<boolean>;

    /** Returns a boolean, true if the file exists, false otherwise. */
    existsSync(): boolean;

    /** Get the SHA-1 digest of this file. */
    getDigest(): Promise<string>;

    /** Get the SHA-1 digest of this file. */
    getDigestSync(): string;

    /** Sets the file's character set encoding name. */
    setEncoding(encoding: string): void;

    /** Returns the string encoding name for this file (default: "utf8"). */
    getEncoding(): string;

    // Managing Paths
    /** Returns the string path for the file. */
    getPath(): string;

    /** Returns this file's completely resolved string path. */
    getRealPathSync(): string;

    /**
     *  Returns a promise that resolves to the file's completely resolved
     *  string path.
     */
    getRealPath(): Promise<string>;

    /** Return the string filename without any directory information. */
    getBaseName(): string;

    // Traversing
    /** Return the Directory that contains this file. */
    getParent(): Directory;

    // Reading and Writing
    /** Reads the contents of the file. */
    read(flushCache?: boolean): Promise<string>;

    /** Returns a stream to read the content of the file. */
    createReadStream(): ReadStream;

    /** Overwrites the file with the given text. */
    write(text: string): Promise<undefined>;

    /** Returns a stream to write content to the file. */
    createWriteStream(): WriteStream;

    /** Overwrites the file with the given text. */
    writeSync(text: string): undefined;
}

/** Represents the underlying git operations performed by Atom. */
export class GitRepository {
    // Construction
    /** Creates a new GitRepository instance. */
    static open(path: string, options?: { refreshOnWindowFocus?: boolean }): GitRepository;

    constructor(path: string, options?: { refreshOnWindowFocus?: boolean, config?: Config,
        project?: Project });

    // Lifecycle
    /** Destroy this GitRepository object. */
    destroy(): void;

    /** Returns a boolean indicating if this repository has been destroyed. */
    isDestroyed(): boolean;

    // Event Subscription
    /**
     *  Invoke the given callback when this GitRepository's destroy() method is
     *  invoked.
     */
    onDidDestroy(callback: () => void): Disposable;

    /**
     *  Invoke the given callback when a specific file's status has changed. When
     *  a file is updated, reloaded, etc, and the status changes, this will be fired.
     */
    onDidChangeStatus(callback: (event: RepoStatusChangedEvent) => void): Disposable;

    /** Invoke the given callback when a multiple files' statuses have changed. */
    onDidChangeStatuses(callback: () => void): Disposable;

    // Repository Details
    /** A string indicating the type of version control system used by this repository. */
    getType(): "git";

    /** Returns the string path of the repository. */
    getPath(): string;

    /** Returns the string working directory path of the repository. */
    getWorkingDirectory(): string;

    /** Returns true if at the root, false if in a subfolder of the repository. */
    isProjectAtRoot(): boolean;

    /** Makes a path relative to the repository's working directory. */
    relativize(): string;

    /** Returns true if the given branch exists. */
    hasBranch(branch: string): boolean;

    /** Retrieves a shortened version of the HEAD reference value. */
    getShortHead(path?: string): string;

    /** Is the given path a submodule in the repository? */
    isSubmodule(path: string): boolean;

    /**
     *  Returns the number of commits behind the current branch is from the its
     *  upstream remote branch. The default reference is the HEAD.
     *  @param reference The branch reference name.
     *  @param path The path in the repository to get this ifnromation for, only
     *  needed if the repository contains submodules.
     *  @return Returns the number of commits behind the current branch is from its
     *  upstream remote branch.
     */
    getAheadBehindCount(reference: string, path?: string): { ahead: number, behind: number };

    /**
     *  Get the cached ahead/behind commit counts for the current branch's
     *  upstream branch.
     */
    getCachedUpstreamAheadBehindCount(path?: string): { ahead: number, behind: number };

    /** Returns the git configuration value specified by the key. */
    getConfigValue(key: string, path?: string): string;

    /** Returns the origin url of the repository. */
    getOriginURL(path?: string): string;

    /**
     *  Returns the upstream branch for the current HEAD, or null if there is no
     *  upstream branch for the current HEAD.
     */
    getUpstreamBranch(path?: string): string|null;

    /** Gets all the local and remote references. */
    getReferences(path?: string): { heads: string[], remotes: string[], tags: string[] };

    /** Returns the current string SHA for the given reference. */
    getReferenceTarget(reference: string, path?: string): string;

    // Reading Status
    /** Returns true if the given path is modified. */
    isPathModified(path: string): boolean;

    /** Returns true if the given path is new. */
    isPathNew(path: string): boolean;

    /** Is the given path ignored? */
    isPathIgnored(path: string): boolean;

    /** Get the status of a directory in the repository's working directory. */
    getDirectoryStatus(path: string): number;

    /** Get the status of a single path in the repository. */
    getPathStatus(path: string): number;

    /** Get the cached status for the given path. */
    getCachedPathStatus(path: string): number|null;

    /** Returns true if the given status indicates modification. */
    isStatusModified(status: number): boolean;

    /** Returns true if the given status indicates a new path. */
    isStatusNew(status: number): boolean;

    // Retrieving Diffs
    /**
     *  Retrieves the number of lines added and removed to a path.
     *  This compares the working directory contents of the path to the HEAD version.
     */
    getDiffStats(path: string): { added: number, deleted: number };

    /**
     *  Retrieves the line diffs comparing the HEAD version of the given path
     *  and the given text.
     */
    getLineDiffs(path: string, text: string): Array<{ oldStart: number,
        newStart: number, oldLines: number, newLines: number }>;

    // Checking Out
    /**
     *  Restore the contents of a path in the working directory and index to the
     *  version at HEAD.
     */
    checkoutHead(path: string): boolean;

    /** Checks out a branch in your repository. */
    checkoutReference(reference: string, create: boolean): boolean;
}

/** Grammar that tokenizes lines of text. */
export interface Grammar {
    /** The name of the Grammar. */
    readonly name: string;

    /** Undocumented: scope name of the Grammar. */
    readonly scopeName: string;

    // Event Subscription
    onDidUpdate(callback: () => void): Disposable;

    // Tokenizing
    /**
     *  Tokenize all lines in the given text.
     *  @param text A string containing one or more lines.
     *  @return An array of token arrays for each line tokenized.
     */
    tokenizeLines(text: string): GrammarToken[][];

    /**
     *  Tokenizes the line of text.
     *  @param line A string of text to tokenize.
     *  @param ruleStack An optional array of rules previously returned from this
     *  method. This should be null when tokenizing the first line in the file.
     *  @param firstLine A optional boolean denoting whether this is the first line
     *  in the file which defaults to `false`.
     *  @return An object representing the result of the tokenize.
     */
    tokenizeLine(line: string, ruleStack?: null, firstLine?: boolean): TokenizeLineResult;
    /**
     *  Tokenizes the line of text.
     *  @param line A string of text to tokenize.
     *  @param ruleStack An optional array of rules previously returned from this
     *  method. This should be null when tokenizing the first line in the file.
     *  @param firstLine A optional boolean denoting whether this is the first line
     *  in the file which defaults to `false`.
     *  @return An object representing the result of the tokenize.
     */
    tokenizeLine(line: string, ruleStack: GrammarRule[], firstLine?: false):
        TokenizeLineResult;
}

/** Registry containing one or more grammars. */
export interface GrammarRegistry {
    // Event Subscription
    /**
     *  Invoke the given callback when a grammar is added to the registry.
     *  @param callback The callback to be invoked whenever a grammar is added.
     *  @return A Disposable on which `.dispose()` can be called to unsubscribe.
     */
    onDidAddGrammar(callback: (grammar: Grammar) => void): Disposable;

    /**
     *  Invoke the given callback when a grammar is updated due to a grammar it
     *  depends on being added or removed from the registry.
     *  @param callback The callback to be invoked whenever a grammar is updated.
     *  @return A Disposable on which `.dispose()` can be called to unsubscribe.
     */
    onDidUpdateGrammar(callback: (grammar: Grammar) => void): Disposable;

    /**
     *  Invoke the given callback when a grammar is removed from the registry.
     *  @param callback The callback to be invoked whenever a grammar is removed.
     *  @return A Disposable on which `.dispose()` can be called to unsubscribe.
     */
    onDidRemoveGrammar(callback: (grammar: Grammar) => void): Disposable;

    // Managing Grammars
    /**
     *  Get all the grammars in this registry.
     *  @return A non-empty array of Grammar instances.
     */
    getGrammars(): Grammar[];

    /**
     *  Get a grammar with the given scope name.
     *  @param scopeName A string such as `source.js`.
     *  @return A Grammar or undefined.
     */
    grammarForScopeName(scopeName: string): Grammar|undefined;

    /**
     *  Add a grammar to this registry.
     *  A 'grammar-added' event is emitted after the grammar is added.
     *  @param grammar The Grammar to add. This should be a value previously returned
     *  from ::readGrammar or ::readGrammarSync.
     *  @return Returns a Disposable on which `.dispose()` can be called to remove
     *  the grammar.
     */
    addGrammar(grammar: Grammar): Disposable;

    /**
     *  Remove the given grammar from this registry.
     *  @param grammar The grammar to remove. This should be a grammar previously
     *  added to the registry from ::addGrammar.
     */
    removeGrammar(grammar: Grammar): void;

    /**
     *  Remove the grammar with the given scope name.
     *  @param scopeName A string such as `source.js`.
     *  @return Returns the removed Grammar or undefined.
     */
    removeGrammarForScopeName(scopeName: string): Grammar|undefined;

    /**
     *  Read a grammar synchronously but don't add it to the registry.
     *  @param grammarPath The absolute file path to a grammar.
     *  @return The newly loaded Grammar.
     */
    readGrammarSync(grammarPath: string): Grammar;

    /**
     *  Read a grammar asynchronously but don't add it to the registry.
     *  @param grammarPath The absolute file path to the grammar.
     *  @param callback The function to be invoked once the Grammar has been read in.
     */
    readGrammar(grammarPath: string, callback: (error: Error|null, grammar?: Grammar) =>
        void): void;

    /**
     *  Read a grammar synchronously and add it to this registry.
     *  @param grammarPath The absolute file path to the grammar.
     *  @return The newly loaded Grammar.
     */
    loadGrammarSync(grammarPath: string): Grammar;

    /**
     *  Read a grammar asynchronously and add it to the registry.
     *  @param grammarPath The absolute file path to the grammar.
     *  @param callback The function to be invoked once the Grammar has been read in
     *  and added to the registry.
     */
    loadGrammar(grammarPath: string, callback: (error: Error|null, grammar?: Grammar) =>
        void): void;

    /**
     *  Convert compact tags representation into convenient, space-inefficient tokens.
     *  @param lineText The text of the tokenized line.
     *  @param tags The tags returned from a call to Grammar::tokenizeLine().
     *  @return An array of Token instances decoded from the given tags.
     */
    decodeTokens(lineText: string, tags: Array<number|string>): GrammarToken[];
}

/** Represents a gutter within a TextEditor. */
export interface Gutter {
    // Gutter Destruction
    /** Destroys the gutter. */
    destroy(): void;

    // Event Subscription
    /** Calls your callback when the gutter's visibility changes. */
    onDidChangeVisible(callback: (gutter: Gutter) => void): Disposable;

    /** Calls your callback when the gutter is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // Visibility
    /** Hide the gutter. */
    hide(): void;

    /** Show the gutter. */
    show(): void;

    /** Determine whether the gutter is visible. */
    isVisible(): boolean;

    /**
     *  Add a decoration that tracks a DisplayMarker. When the marker moves, is
     *  invalidated, or is destroyed, the decoration will be updated to reflect
     *  the marker's state.
     */
    decorateMarker(marker: DisplayMarker, decorationParams: DecorationOptions): Decoration;
}

/**
 *  History manager for remembering which projects have been opened.
 *  An instance of this class is always available as the atom.history global.
 *  The project history is used to enable the 'Reopen Project' menu.
 */
export interface HistoryManager {
    /** Obtain a list of previously opened projects. */
    getProjects(): ProjectHistory[];

    /**
     *  Clear all projects from the history.
     *  Note: This is not a privacy function - other traces will still exist, e.g.
     *  window state.
     */
    clearProjects(): void;

    /** Invoke the given callback when the list of projects changes. */
    onDidChangeProjects(callback: (args: { reloaded: boolean }) => void): Disposable;
}

/**
 *  Allows commands to be associated with keystrokes in a context-sensitive way.
 *  In Atom, you can access a global instance of this object via `atom.keymaps`.
 */
export interface KeymapManager {
    /** Clear all registered key bindings and enqueued keystrokes. For use in tests. */
    clear(): void;

    /** Unwatch all watched paths. */
    destroy(): void;

    // Event Subscription
    /** Invoke the given callback when one or more keystrokes completely match a key binding. */
    onDidMatchBinding(callback: (event: FullKeybindingMatchEvent) => void): Disposable;

    /** Invoke the given callback when one or more keystrokes partially match a binding. */
    onDidPartiallyMatchBindings(callback: (event: PartialKeybindingMatchEvent) =>
        void): Disposable;

    /** Invoke the given callback when one or more keystrokes fail to match any bindings. */
    onDidFailToMatchBinding(callback: (event: FailedKeybindingMatchEvent) =>
        void): Disposable;

    /** Invoke the given callback when a keymap file is reloaded. */
    onDidReloadKeymap(callback: (event: KeymapLoadedEvent) => void): Disposable;

    /** Invoke the given callback when a keymap file is unloaded. */
    onDidUnloadKeymap(callback: (event: KeymapLoadedEvent) => void): Disposable;

    /** Invoke the given callback when a keymap file not able to be loaded. */
    onDidFailToReadFile(callback: (error: FailedKeymapFileReadEvent) => void): Disposable;

    // Adding and Removing Bindings
    /** Construct KeyBindings from an object grouping them by CSS selector. */
    build(source: string, bindings: { [key: string]: { [key: string]: string }},
        priority?: number): KeyBinding[];

    /** Add sets of key bindings grouped by CSS selector. */
    add(source: string, bindings: { [key: string]: { [key: string]: string }},
        priority?: number): Disposable;

    // Accessing Bindings
    /** Get all current key bindings. */
    getKeyBindings(): KeyBinding[];

    /** Get the key bindings for a given command and optional target. */
    findKeyBindings(params?: {
        keystrokes?: string, // e.g. 'ctrl-x ctrl-s'
        command?: string, // e.g. 'editor:backspace'
        target?: Element,
    }): KeyBinding[];

    // Managing Keymap Files
    /** Load the key bindings from the given path. */
    loadKeymap(bindingsPath: string, options?: { watch?: boolean, priority?: number }):
        void;

    /**
     *  Cause the keymap to reload the key bindings file at the given path whenever
     *  it changes.
     */
    watchKeymap(filePath: string, options?: { priority: number }): void;

    // Managing Keyboard Events
    /**
     *  Dispatch a custom event associated with the matching key binding for the
     *  given `KeyboardEvent` if one can be found.
     */
    handleKeyboardEvent(event: KeyboardEvent): void;

    /** Translates a keydown event to a keystroke string. */
    keystrokeForKeyboardEvent(event: KeyboardEvent): string;

    /** Customize translation of raw keyboard events to keystroke strings. */
    addKeystrokeResolver(resolver: (event: AddedKeystrokeResolverEvent) => string): Disposable;

    /**
     *  Get the number of milliseconds allowed before pending states caused by
     *  partial matches of multi-keystroke bindings are terminated.
     */
    getPartialMatchTimeout(): number;
}

/** Provides a registry for menu items that you'd like to appear in the application menu. */
export interface MenuManager {
    /** Adds the given items to the application menu. */
    add(items: ReadonlyArray<MenuOptions>): Disposable;

    /** Refreshes the currently visible menu. */
    update(): void;
}

/**
 *  Loads and activates a package's main module and resources such as stylesheets,
 *  keymaps, grammar, editor properties, and menus.
 */
export interface Package {
    /** The name of the Package. */
    name: string;

    /** The path to the Package on disk. */
    path: string;

    // Event Subscription
    /** Invoke the given callback when all packages have been activated. */
    onDidDeactivate(callback: () => void): Disposable;

    // Native Module Compatibility
    /**
     *  Are all native modules depended on by this package correctly compiled
     *  against the current version of Atom?
     */
    isCompatible(): boolean;

    /**
     *  Rebuild native modules in this package's dependencies for the current
     *  version of Atom.
     */
    rebuild(): Promise<{ code: number, stdout: string, stderr: string }>;

    /** If a previous rebuild failed, get the contents of stderr. */
    getBuildFailureOutput(): string|null;
}

/** Package manager for coordinating the lifecycle of Atom packages. */
export interface PackageManager {
    // Event Subscription
    /** Invoke the given callback when all packages have been loaded. */
    onDidLoadInitialPackages(callback: () => void): Disposable;

    /** Invoke the given callback when all packages have been activated. */
    onDidActivateInitialPackages(callback: () => void): Disposable;

    /** Invoke the given callback when a package is activated. */
    onDidActivatePackage(callback: (package: Package) => void): Disposable;

    /** Invoke the given callback when a package is deactivated. */
    onDidDeactivatePackage(callback: (package: Package) => void): Disposable;

    /** Invoke the given callback when a package is loaded. */
    onDidLoadPackage(callback: (package: Package) => void): Disposable;

    /** Invoke the given callback when a package is unloaded. */
    onDidUnloadPackage(callback: (package: Package) => void): Disposable;

    /** Undocumented: invoke the given callback when an activation hook is triggered */
    onDidTriggerActivationHook(hook: string, callback: () => void): Disposable;

    // Package System Data
    /** Get the path to the apm command. */
    getApmPath(): string;

    /** Get the paths being used to look for packages. */
    getPackageDirPaths(): string[];

    // General Package Data
    /** Resolve the given package name to a path on disk. */
    resolvePackagePath(name: string): string|undefined;

    /** Is the package with the given name bundled with Atom? */
    isBundledPackage(name: string): boolean;

    // Enabling and Disabling Packages
    /** Enable the package with the given name. */
    enablePackage(name: string): Package|undefined;

    /** Disable the package with the given name. */
    disablePackage(name: string): Package|undefined;

    /** Is the package with the given name disabled? */
    isPackageDisabled(name: string): boolean;

    // Accessing Active Packages
    /** Get an Array of all the active Packages. */
    getActivePackages(): Package[];

    /** Get the active Package with the given name. */
    getActivePackage(name: string): Package|undefined;

    /** Is the Package with the given name active? */
    isPackageActive(name: string): boolean;

    /** Returns a boolean indicating whether package activation has occurred. */
    hasActivatedInitialPackages(): boolean;

    // Accessing Loaded Packages
    /** Get an Array of all the loaded Packages. */
    getLoadedPackages(): Package[];

    /** Get the loaded Package with the given name. */
    getLoadedPackage(name: string): Package|undefined;

    /** Is the package with the given name loaded? */
    isPackageLoaded(name: string): boolean;

    /** Returns a boolean indicating whether package loading has occurred. */
    hasLoadedInitialPackages(): boolean;

    // Accessing Available Packages
    /** Returns an Array of strings of all the available package paths. */
    getAvailablePackagePaths(): string[];

    /** Returns an Array of strings of all the available package names.  */
    getAvailablePackageNames(): string[];

    /** Returns an Array of strings of all the available package metadata. */
    getAvailablePackageMetadata(): string[];

    /** Activate a single package by name or path. */
    activatePackage(nameOrPath: string): Promise<Package>;

    /** Triggers the given package activation hook. */
    triggerActivationHook(hook: string): void;

    /** Trigger all queued activation hooks immediately. */
    triggerDeferredActivationHooks(): void;
}

/** A container for presenting content in the center of the workspace. */
export interface Pane {
    // Event Subscription
    /** Invoke the given callback when the pane resizes. */
    onDidChangeFlexScale(callback: (flexScale: number) => void): Disposable;

    /** Invoke the given callback with the current and future values of ::getFlexScale. */
    observeFlexScale(callback: (flexScale: number) => void): Disposable;

    /** Invoke the given callback when the pane is activated. */
    onDidActivate(callback: () => void): Disposable;

    /** Invoke the given callback before the pane is destroyed. */
    onWillDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when the pane is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when the value of the ::isActive property changes. */
    onDidChangeActive(callback: (active: boolean) => void): Disposable;

    /**
     *  Invoke the given callback with the current and future values of the ::isActive
     *  property.
     */
    observeActive(callback: (active: boolean) => void): Disposable;

    /** Invoke the given callback when an item is added to the pane. */
    onDidAddItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    /** Invoke the given callback when an item is removed from the pane. */
    onDidRemoveItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    /** Invoke the given callback before an item is removed from the pane. */
    onWillRemoveItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    /** Invoke the given callback when an item is moved within the pane. */
    onDidMoveItem(callback: (event: PaneItemMovedEvent) => void): Disposable;

    /** Invoke the given callback with all current and future items. */
    observeItems(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the value of ::getActiveItem changes. */
    onDidChangeActiveItem(callback: (activeItem: object) => void): Disposable;

    /**
     *  Invoke the given callback when ::activateNextRecentlyUsedItem has been called,
     *  either initiating or continuing a forward MRU traversal of pane items.
     */
    onChooseNextMRUItem(callback: (nextRecentlyUsedItem: object) => void): Disposable;

    /**
     *  Invoke the given callback when ::activatePreviousRecentlyUsedItem has been called,
     *  either initiating or continuing a reverse MRU traversal of pane items.
     */
    onChooseLastMRUItem(callback: (previousRecentlyUsedItem: object) => void): Disposable;

    /**
     *  Invoke the given callback when ::moveActiveItemToTopOfStack has been called,
     *  terminating an MRU traversal of pane items and moving the current active item
     *  to the top of the stack. Typically bound to a modifier (e.g. CTRL) key up event.
     */
    onDoneChoosingMRUItem(callback: () => void): Disposable;

    /** Invoke the given callback with the current and future values of ::getActiveItem. */
    observeActiveItem(callback: (activeItem: object) => void): Disposable;

    /** Invoke the given callback before items are destroyed. */
    onWillDestroyItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    // Items
    /** Get the items in this pane. */
    getItems(): object[];

    /** Get the active pane item in this pane. */
    getActiveItem(): object;

    /** Return the item at the given index. */
    itemAtIndex(index: number): object|undefined;

    /** Makes the next item active. */
    activateNextItem(): void;

    /** Makes the previous item active. */
    activatePreviousItem(): void;

    /** Move the active tab to the right. */
    moveItemRight(): void;

    /** Move the active tab to the left. */
    moveItemLeft(): void;

    /** Get the index of the active item. */
    getActiveItemIndex(): number;

    /** Activate the item at the given index. */
    activateItemAtIndex(index: number): void;

    /** Make the given item active, causing it to be displayed by the pane's view. */
    activateItem(item: object, options?: { pending: boolean }): void;

    /** Add the given item to the pane. */
    addItem(item: object, options?: { index?: number, pending?: boolean }): object;

    /** Add the given items to the pane. */
    addItems(items: object[], index?: number): object[];

    /** Move the given item to the given index. */
    moveItem(item: object, index: number): void;

    /** Move the given item to the given index on another pane. */
    moveItemToPane(item: object, pane: Pane, index: number): void;

    /** Destroy the active item and activate the next item. */
    destroyActiveItem(): Promise<boolean>;

    /** Destroy the given item. */
    destroyItem(item: object, force?: boolean): Promise<boolean>;

    /** Destroy all items. */
    destroyItems(): Promise<boolean[]>;

    /** Destroy all items except for the active item. */
    destroyInactiveItems(): Promise<boolean[]>;

    /** Save the active item. */
    saveActiveItem<T = void>(nextAction?: (error?: Error) => T):
        Promise<T>|undefined;

    /**
     *  Prompt the user for a location and save the active item with the path
     *  they select.
     */
    saveActiveItemAs<T = void>(nextAction?: (error?: Error) => T):
        Promise<T>|undefined;

    /** Save the given item. */
    saveItem<T = void>(item: object, nextAction?: (error?: Error) => T):
        Promise<T>|undefined;

    /**
     *  Prompt the user for a location and save the active item with the path
     *  they select.
     */
    saveItemAs<T = void>(item: object, nextAction?: (error?: Error) => T):
        Promise<T>|undefined;

    /** Save all items. */
    saveItems(): void;

    /** Return the first item that matches the given URI or undefined if none exists. */
    itemForURI(uri: string): object|undefined;

    /** Activate the first item that matches the given URI. */
    activateItemForURI(uri: string): boolean;

    // Lifecycle
    /** Determine whether the pane is active. */
    isActive(): boolean;

    /** Makes this pane the active pane, causing it to gain focus. */
    activate(): void;

    /** Close the pane and destroy all its items. */
    destroy(): void;

    /** Determine whether this pane has been destroyed. */
    isDestroyed(): boolean;

    // Splitting
    /** Create a new pane to the left of this pane. */
    splitLeft(params?: {
        items?: object[],
        copyActiveItem?: boolean,
    }): Pane;

    /** Create a new pane to the right of this pane. */
    splitRight(params?: {
        items?: object[],
        copyActiveItem?: boolean,
    }): Pane;

    /** Creates a new pane above the receiver. */
    splitUp(params?: {
        items?: object[],
        copyActiveItem?: boolean,
    }): Pane;

    /** Creates a new pane below the receiver. */
    splitDown(params?: {
        items?: object[],
        copyActiveItem?: boolean,
    }): Pane;
}

/**
 *  A container representing a panel on the edges of the editor window. You
 *  should not create a Panel directly, instead use Workspace::addTopPanel and
 *  friends to add panels.
 */
export interface Panel<T = object> {
    /** Whether or not the Panel is visible. */
    visible: boolean;

    // Construction and Destruction
    /** Destroy and remove this panel from the UI. */
    destroy(): void;

    // Event Subscription
    /** Invoke the given callback when the pane hidden or shown. */
    onDidChangeVisible(callback: (visible: boolean) => void): Disposable;

    /** Invoke the given callback when the pane is destroyed. */
    onDidDestroy(callback: (panel: Panel<T>) => void): Disposable;

    // Panel Details
    /** Returns the panel's item. */
    getItem(): T;

    /** Returns a number indicating this panel's priority. */
    getPriority(): number;

    /** Returns a boolean true when the panel is visible. */
    isVisible(): boolean;

    /** Hide this panel. */
    hide(): void;

    /** Show this panel. */
    show(): void;
}

/** Manage a subscription to filesystem events that occur beneath a root directory. */
export interface PathWatcher extends DisposableLike {
    /**
     *  Return a Promise that will resolve when the underlying native watcher is
     *  ready to begin sending events.
     */
    getStartPromise(): Promise<void>;

    /** Invokes a function when any errors related to this watcher are reported. */
    onDidError(callback: (error: Error) => void): Disposable;

    /**
     *  Unsubscribe all subscribers from filesystem events. Native resources will be
     *  release asynchronously, but this watcher will stop broadcasting events
     *  immediately.
     */
    dispose(): void;
}

/** Represents a project that's opened in Atom. */
export interface Project {
    // Event Subscription
    /** Invoke the given callback when the project paths change. */
    onDidChangePaths(callback: (projectPaths: string[]) => void): Disposable;

    /** Invoke the given callback when a text buffer is added to the project. */
    onDidAddBuffer(callback: (buffer: TextBuffer) => void): Disposable;

    /**
     *  Invoke the given callback with all current and future text buffers in
     *  the project.
     */
    observeBuffers(callback: (buffer: TextBuffer) => void): Disposable;

    /** Invoke a callback when a filesystem change occurs within any open project path. */
    onDidChangeFiles(callback: (events: FilesystemChangeEvent) => void): Disposable;

    // Accessing the Git Repository
    /** Get an Array of GitRepositorys associated with the project's directories. */
    getRepositories(): GitRepository[];

    /** Get the repository for a given directory asynchronously. */
    repositoryForDirectory(directory: Directory): Promise<GitRepository|null>;

    // Managing Paths
    /** Get an Array of strings containing the paths of the project's directories. */
    getPaths(): string[];

    /** Set the paths of the project's directories. */
    setPaths(projectPaths: string[]): void;

    /** Add a path to the project's list of root paths. */
    addPath(projectPath: string): void;

    /**
     *  Access a promise that resolves when the filesystem watcher associated with a
     *  project root directory is ready to begin receiving events.
     */
    getWatcherPromise(projectPath: string): Promise<PathWatcher>;

    /** Remove a path from the project's list of root paths. */
    removePath(projectPath: string): void;

    /** Get an Array of Directorys associated with this project. */
    getDirectories(): Directory[];

    /** Get the relative path from the project directory to the given path. */
    relativize(fullPath: string): string;

    /**
     *  Get the path to the project directory that contains the given path, and
     *  the relative path from that project directory to the given path.
     */
    relativizePath(fullPath: string): [string|null, string];

    /**
     *  Determines whether the given path (real or symbolic) is inside the
     *  project's directory.
     */
    contains(pathToCheck: string): boolean;
}

/**
 *  Wraps an array of strings. The Array describes a path from the root of the
 *  syntax tree to a token including all scope names for the entire path.
 */
export interface ScopeDescriptor {
    scopes: string[];

    /** Returns all scopes for this descriptor. */
    getScopesArray(): string[];
}

/** Represents a selection in the TextEditor. */
export interface Selection {
    // Event Subscription
    /** Calls your callback when the selection was moved. */
    onDidChangeRange(callback: (event: SelectionChangedEvent) => void): Disposable;

    /** Calls your callback when the selection was destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // Managing the selection range
    /** Returns the screen Range for the selection. */
    getScreenRange(): Range;

    /** Modifies the screen range for the selection. */
    setScreenRange(screenRange: RangeCompatible, options?: {
        preserveFolds?: boolean,
        autoscroll?: boolean
    }): void;

    /** Returns the buffer Range for the selection. */
    getBufferRange(): Range;

    /** Modifies the buffer Range for the selection. */
    setBufferRange(bufferRange: RangeCompatible, options?: {
        preserveFolds?: boolean,
        autoscroll?: boolean,
    }): void;

    /** Returns the starting and ending buffer rows the selection is highlighting. */
    getBufferRowRange(): [number, number];

    // Info about the selection
    /** Determines if the selection contains anything. */
    isEmpty(): boolean;

    /**
     *  Determines if the ending position of a marker is greater than the starting position.
     *  This can happen when, for example, you highlight text "up" in a TextBuffer.
     */
    isReversed(): boolean;

    /** Returns whether the selection is a single line or not. */
    isSingleScreenLine(): boolean;

    /** Returns the text in the selection. */
    getText(): string;

    // NOTE: this calls into Range.intersectsWith(), which is one of the few functions
    //   that doesn't take a range-compatible range, despite what the API says.
    /** Identifies if a selection intersects with a given buffer range. */
    intersectsBufferRange(bufferRange: RangeLike): boolean;

    /** Identifies if a selection intersects with another selection. */
    intersectsWith(otherSelection: Selection): boolean;

    // Modifying the selected range
    /** Clears the selection, moving the marker to the head. */
    clear(options?: { autoscroll?: boolean }): void;

    /** Selects the text from the current cursor position to a given screen position. */
    selectToScreenPosition(position: PointCompatible): void;

    /** Selects the text from the current cursor position to a given buffer position. */
    selectToBufferPosition(position: PointCompatible): void;

    /** Selects the text one position right of the cursor. */
    selectRight(columnCount?: number): void;

    /** Selects the text one position left of the cursor. */
    selectLeft(columnCount?: number): void;

    /** Selects all the text one position above the cursor. */
    selectUp(rowCount?: number): void;

    /** Selects all the text one position below the cursor. */
    selectDown(rowCount?: number): void;

    /**
     *  Selects all the text from the current cursor position to the top of the
     *  buffer.
     */
    selectToTop(): void;

    /**
     *  Selects all the text from the current cursor position to the bottom of
     *  the buffer.
     */
    selectToBottom(): void;

    /** Selects all the text in the buffer. */
    selectAll(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the line.
     */
    selectToBeginningOfLine(): void;

    /**
     *  Selects all the text from the current cursor position to the first character
     *  of the line.
     */
    selectToFirstCharacterOfLine(): void;

    /**
     *  Selects all the text from the current cursor position to the end of the
     *  screen line.
     */
    selectToEndOfLine(): void;

    /**
     *  Selects all the text from the current cursor position to the end of the
     *  buffer line.
     */
    selectToEndOfBufferLine(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning
     *  of the word.
     */
    selectToBeginningOfWord(): void;

    /** Selects all the text from the current cursor position to the end of the word. */
    selectToEndOfWord(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the next word.
     */
    selectToBeginningOfNextWord(): void;

    /** Selects text to the previous word boundary. */
    selectToPreviousWordBoundary(): void;

    /** Selects text to the next word boundary. */
    selectToNextWordBoundary(): void;

    /** Selects text to the previous subword boundary. */
    selectToPreviousSubwordBoundary(): void;

    /** Selects text to the next subword boundary. */
    selectToNextSubwordBoundary(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the next paragraph.
     */
    selectToBeginningOfNextParagraph(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the previous paragraph.
     */
    selectToBeginningOfPreviousParagraph(): void;

    /** Modifies the selection to encompass the current word. */
    selectWord(): void;

    /**
     *  Expands the newest selection to include the entire word on which the
     *  cursors rests.
     */
    expandOverWord(): void;

    /** Selects an entire line in the buffer. */
    selectLine(row: number): void;

    /**
     *  Expands the newest selection to include the entire line on which the cursor
     *  currently rests.
     *  It also includes the newline character.
     */
    expandOverLine(): void;

    // Modifying the selected text
    /** Replaces text at the current selection. */
    insertText(text: string, options?: TextInsertionOptions): void;

    /**
     *  Removes the first character before the selection if the selection is empty
     *  otherwise it deletes the selection.
     */
    backspace(): void;

    /**
     *  Removes the selection or, if nothing is selected, then all characters from
     *  the start of the selection back to the previous word boundary.
     */
    deleteToPreviousWordBoundary(): void;

    /**
     *  Removes the selection or, if nothing is selected, then all characters from
     *  the start of the selection up to the next word boundary.
     */
    deleteToNextWordBoundary(): void;

    /**
     *  Removes from the start of the selection to the beginning of the current
     *  word if the selection is empty otherwise it deletes the selection.
     */
    deleteToBeginningOfWord(): void;

    /**
     *  Removes from the beginning of the line which the selection begins on all
     *  the way through to the end of the selection.
     */
    deleteToBeginningOfLine(): void;

    /**
     *  Removes the selection or the next character after the start of the selection
     *  if the selection is empty.
     */
    delete(): void;

    /**
     *  If the selection is empty, removes all text from the cursor to the end of
     *  the line. If the cursor is already at the end of the line, it removes the following
     *  newline. If the selection isn't empty, only deletes the contents of the selection.
     */
    deleteToEndOfLine(): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToEndOfWord(): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToBeginningOfSubword(): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToEndOfSubword(): void;

    /** Removes only the selected text. */
    deleteSelectedText(): void;

    /**
     *  Removes the line at the beginning of the selection if the selection is empty
     *  unless the selection spans multiple lines in which case all lines are removed.
     */
    deleteLine(): void;

    /**
     *  Joins the current line with the one below it. Lines will be separated by a single space.
     *  If there selection spans more than one line, all the lines are joined together.
     */
    joinLines(): void;

    /** Removes one level of indent from the currently selected rows. */
    outdentSelectedRows(): void;

    /**
     *  Sets the indentation level of all selected rows to values suggested by the
     *  relevant grammars.
     */
    autoIndentSelectedRows(): void;

    /**
     *  Wraps the selected lines in comments if they aren't currently part of a comment.
     *  Removes the comment if they are currently wrapped in a comment.
     */
    toggleLineComments(): void;

    /** Cuts the selection until the end of the screen line. */
    cutToEndOfLine(): void;

    /** Cuts the selection until the end of the buffer line. */
    cutToEndOfBufferLine(): void;

    /** Copies the selection to the clipboard and then deletes it. */
    cut(maintainClipboard?: boolean, fullLine?: boolean): void;

    /** Copies the current selection to the clipboard. */
    copy(maintainClipboard?: boolean, fullLine?: boolean): void;

    /** Creates a fold containing the current selection. */
    fold(): void;

    /** If the selection spans multiple rows, indent all of them. */
    indentSelectedRows(): void;

    // Managing multiple selections
    /** Moves the selection down one row. */
    addSelectionBelow(): void;

    /** Moves the selection up one row. */
    addSelectionAbove(): void;

    /**
     *  Combines the given selection into this selection and then destroys the
     *  given selection.
     */
    merge(otherSelection: Selection, options?: { preserveFolds?: boolean,
        autoscroll?: boolean }): void;

    // Comparing to other selections
    /**
     *  Compare this selection's buffer range to another selection's buffer range.
     *  See Range::compare for more details.
     */
    compare(otherSelection: Selection): number;
}

/**
 *  A singleton instance of this class available via atom.styles, which you can
 *  use to globally query and observe the set of active style sheets.
 */
export interface StyleManager {
    // Event Subscription
    /** Invoke callback for all current and future style elements. */
    observeStyleElements(callback: (styleElement: StyleElementObservedEvent) =>
        void): Disposable;

    /** Invoke callback when a style element is added. */
    onDidAddStyleElement(callback: (styleElement: StyleElementObservedEvent) =>
        void): Disposable;

    /** Invoke callback when a style element is removed. */
    onDidRemoveStyleElement(callback: (styleElement: HTMLStyleElement) => void): Disposable;

    /** Invoke callback when an existing style element is updated. */
    onDidUpdateStyleElement(callback: (styleElement: StyleElementObservedEvent) =>
        void): Disposable;

    // Reading Style Elements
    /** Get all loaded style elements. */
    getStyleElements(): HTMLStyleElement[];

    // Paths
    /** Get the path of the user style sheet in ~/.atom. */
    getUserStyleSheetPath(): string;
}

/** Run a node script in a separate process. */
export class Task {
    // NOTE: this is actually the best we can do here with the REST parameter for
    // this appearing in the middle of the parameter list, which isn't aligned with
    // the ES6 spec. Maybe when they rewrite it in JavaScript this will change.
    /** A helper method to easily launch and run a task once. */
    // tslint:disable-next-line:no-any
    static once(taskPath: string, ...args: any[]): Task;

    /** Creates a task. You should probably use .once */
    constructor(taskPath: string);

    // NOTE: this is actually the best we can do here with the REST parameter
    // for this appearing in the beginning of the parameter list, which isn't
    // aligned with the ES6 spec.
    /**
     *  Starts the task.
     *  Throws an error if this task has already been terminated or if sending a
     *  message to the child process fails.
     */
    // tslint:disable-next-line:no-any
    start(...args: any[]): void;

    /**
     *  Send message to the task.
     *  Throws an error if this task has already been terminated or if sending a
     *  message to the child process fails.
     */
    send(message: string): void;

    /** Call a function when an event is emitted by the child process. */
    // tslint:disable-next-line:no-any
    on(eventName: string, callback: (param: any) => void): Disposable;

    /**
     *  Forcefully stop the running task.
     *  No more events are emitted once this method is called.
     */
    terminate(): void;

    /** Cancel the running task and emit an event if it was canceled. */
    cancel(): boolean;
}

/**
 *  A mutable text container with undo/redo support and the ability to
 *  annotate logical regions in the text.
 */
export class TextBuffer {
    /** The unique identifier for this buffer. */
    id: string;

    /** The number of retainers for the buffer. */
    refcount: number;

    /** Whether or not the bufffer has been destroyed. */
    destroyed: boolean;

    /** Create a new buffer backed by the given file path. */
    static load(filePath: string, params?: BufferLoadOptions): Promise<TextBuffer>;

    /**
     *  Create a new buffer backed by the given file path. For better performance,
     *  use TextBuffer.load instead.
     */
    static loadSync(filePath: string, params?: BufferLoadOptions): TextBuffer;

    /**
     *  Restore a TextBuffer based on an earlier state created using the
     *  TextBuffer::serialize method.
     */
    static deserialize(params: object): Promise<TextBuffer>;

    /** Create a new buffer with the given starting text. */
    constructor(text: string);
    /** Create a new buffer with the given params. */
    constructor(params?: {
        /** The initial string text of the buffer. */
        text?: string
        /**
         *  A function that returns a Boolean indicating whether the buffer should
         *  be destroyed if its file is deleted.
         */
        shouldDestroyOnFileDelete?(): boolean
    });

    /** Returns a plain javascript object representation of the TextBuffer. */
    serialize(options?: { markerLayers?: boolean, history?: boolean }): object;

    /** Returns the unique identifier for this buffer. */
    getId(): string;

    // Event Subscription
    /**
     *  Invoke the given callback synchronously before the content of the buffer
     *  changes.
     */
    onWillChange(callback: (event: BufferChangingEvent) => void): Disposable;

    /**
     *  Invoke the given callback synchronously when the content of the buffer
     *  changes. You should probably not be using this in packages.
     */
    onDidChange(callback: (event: BufferChangedEvent) => void): Disposable;

    /**
     *  Invoke the given callback synchronously when a transaction finishes with
     *  a list of all the changes in the transaction.
     */
    onDidChangeText(callback: (event: BufferStoppedChangingEvent) => void): Disposable;

    /**
     *  Invoke the given callback asynchronously following one or more changes after
     *  ::getStoppedChangingDelay milliseconds elapse without an additional change.
     */
    onDidStopChanging(callback: (event: BufferStoppedChangingEvent) => void):
        Disposable;

    /**
     *  Invoke the given callback when the in-memory contents of the buffer become
     *  in conflict with the contents of the file on disk.
     */
    onDidConflict(callback: () => void): Disposable;

    /** Invoke the given callback if the value of ::isModified changes. */
    onDidChangeModified(callback: (modified: boolean) => void): Disposable;

    /**
     *  Invoke the given callback when all marker ::onDidChange observers have been
     *  notified following a change to the buffer.
     */
    onDidUpdateMarkers(callback: () => void): Disposable;

    onDidCreateMarker(callback: (marker: Marker) => void): Disposable;

    /** Invoke the given callback when the value of ::getPath changes. */
    onDidChangePath(callback: (path: string) => void): Disposable;

    /** Invoke the given callback when the value of ::getEncoding changes. */
    onDidChangeEncoding(callback: (encoding: string) => void): Disposable;

    /**
     *  Invoke the given callback before the buffer is saved to disk. If the
     *  given callback returns a promise, then the buffer will not be saved until
     *  the promise resolves.
     */
    onWillSave(callback: () => Promise<void>|void): Disposable;

    /** Invoke the given callback after the buffer is saved to disk. */
    onDidSave(callback: (event: FileSavedEvent) => void): Disposable;

    /** Invoke the given callback after the file backing the buffer is deleted. */
    onDidDelete(callback: () => void): Disposable;

    /**
     *  Invoke the given callback before the buffer is reloaded from the contents
     *  of its file on disk.
     */
    onWillReload(callback: () => void): Disposable;

    /**
     *  Invoke the given callback after the buffer is reloaded from the contents
     *  of its file on disk.
     */
    onDidReload(callback: () => void): Disposable;

    /** Invoke the given callback when the buffer is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when there is an error in watching the file. */
    onWillThrowWatchError(callback: (errorObject: HandleableErrorEvent) => void):
        Disposable;

    /**
     *  Get the number of milliseconds that will elapse without a change before
     *  ::onDidStopChanging observers are invoked following a change.
     */
    getStoppedChangingDelay(): number;

    // File Details
    /**
     *  Determine if the in-memory contents of the buffer differ from its contents
     *  on disk.
     *  If the buffer is unsaved, always returns true unless the buffer is empty.
     */
    isModified(): boolean;

    /**
     *  Determine if the in-memory contents of the buffer conflict with the on-disk
     *  contents of its associated file.
     */
    isInConflict(): boolean;

    /** Get the path of the associated file. */
    getPath(): string|undefined;

    /** Set the path for the buffer's associated file. */
    setPath(filePath: string): void;

    /** Sets the character set encoding for this buffer. */
    setEncoding(encoding: string): void;

    /** Returns the string encoding of this buffer. */
    getEncoding(): string;

    /** Get the path of the associated file. */
    getUri(): string;

    // Reading Text
    /** Determine whether the buffer is empty. */
    isEmpty(): boolean;

    /** Get the entire text of the buffer. */
    getText(): string;

    /** Get the text in a range. */
    getTextInRange(range: RangeCompatible): string;

    /** Get the text of all lines in the buffer, without their line endings. */
    getLines(): string[];

    /** Get the text of the last line of the buffer, without its line ending. */
    getLastLine(): string;

    /** Get the text of the line at the given row, without its line ending. */
    lineForRow(row: number): string|undefined;

    /** Get the line ending for the given 0-indexed row. */
    lineEndingForRow(row: number): string|undefined;

    /**
     *  Get the length of the line for the given 0-indexed row, without its line
     *  ending.
     */
    lineLengthForRow(row: number): number;

    /** Determine if the given row contains only whitespace. */
    isRowBlank(row: number): boolean;

    /**
     *  Given a row, find the first preceding row that's not blank.
     *  Returns a number or null if there's no preceding non-blank row.
     */
    previousNonBlankRow(startRow: number): number|null;

    /**
     *  Given a row, find the next row that's not blank.
     *  Returns a number or null if there's no next non-blank row.
     */
    nextNonBlankRow(startRow: number): number|null;

    // Mutating Text
    /** Replace the entire contents of the buffer with the given text. */
    setText(text: string): Range;

    /**
     *  Replace the current buffer contents by applying a diff based on the
     *  given text.
     */
    setTextViaDiff(text: string): void;

    /** Set the text in the given range. */
    setTextInRange(range: RangeCompatible, text: string, options?:
        { normalizeLineEndings?: boolean, undo?: "skip" }): Range;

    /** Insert text at the given position. */
    insert(position: PointCompatible, text: string, options?:
        { normalizeLineEndings?: boolean, undo?: "skip" }): Range;

    /** Append text to the end of the buffer. */
    append(text: string, options?: { normalizeLineEndings?: boolean, undo?:
        "skip" }): Range;

    /** Delete the text in the given range. */
    delete(range: RangeCompatible): Range;

    /** Delete the line associated with a specified row. */
    deleteRow(row: number): Range;

    /** Delete the lines associated with the specified row range. */
    deleteRows(startRow: number, endRow: number): Range;

    // Markers
    /** Create a layer to contain a set of related markers. */
    addMarkerLayer(options?: { maintainHistory?: boolean, persistent?: boolean }):
        MarkerLayer;

    /**
     *  Get a MarkerLayer by id.
     *  Returns a MarkerLayer or `` if no layer exists with the given id.
     */
    getMarkerLayer(id: string): MarkerLayer|undefined;

    /** Get the default MarkerLayer. */
    getDefaultMarkerLayer(): MarkerLayer;

    /** Create a marker with the given range in the default marker layer. */
    markRange(range: RangeCompatible, properties?: { reversed?: boolean,
        invalidate?: "never"|"surround"|"overlap"|"inside"|"touch",
        exclusive?: boolean }): Marker;

    /** Create a marker at the given position with no tail in the default marker layer. */
    markPosition(position: PointCompatible, options?: { invalidate?: "never"|"surround"
        |"overlap"|"inside"|"touch", exclusive?: boolean }): Marker;

    /** Get all existing markers on the default marker layer. */
    getMarkers(): Marker[];

    /** Get an existing marker by its id from the default marker layer. */
    getMarker(id: number): Marker;

    /** Find markers conforming to the given parameters in the default marker layer. */
    findMarkers(params: FindMarkerOptions): Marker[];

    /** Get the number of markers in the default marker layer. */
    getMarkerCount(): number;

    // History
    /** Undo the last operation. If a transaction is in progress, aborts it. */
    undo(): boolean;

    /** Redo the last operation. */
    redo(): boolean;

    /** Batch multiple operations as a single undo/redo step. */
    transact<T>(groupingInterval: number, fn: () => T): T;
    transact<T>(fn: () => T): T;

    /**
     *  Call within a transaction to terminate the function's execution and
     *  revert any changes performed up to the abortion.
     */
    abortTransaction(): void;

    /**
     *  Clear the undo stack. When calling this method within a transaction,
     *  the ::onDidChangeText event will not be triggered because the information
     *  describing the changes is lost.
     */
    clearUndoStack(): void;

    /**
     *  Create a pointer to the current state of the buffer for use with
     *  ::revertToCheckpoint and ::groupChangesSinceCheckpoint.
     */
    createCheckpoint(): number;

    /**
     *  Revert the buffer to the state it was in when the given checkpoint was created.
     *  Returns a boolean indicating whether the operation succeeded.
     */
    revertToCheckpoint(checkpoint: number): boolean;

    /**
     *  Group all changes since the given checkpoint into a single transaction for
     *  purposes of undo/redo.
     *  Returns a boolean indicating whether the operation succeeded.
     */
    groupChangesSinceCheckpoint(checkpoint: number): boolean;

    /**
     *  Returns a list of changes since the given checkpoint.
     *  If the given checkpoint is no longer present in the undo history, this method
     *  will return an empty Array.
     */
    getChangesSinceCheckpoint(checkpoint: number): Array<{
        /** A Point representing where the change started. */
        start: Point,

        /** A Point representing the replaced extent. */
        oldExtent: Point,

        /** A Point representing the replacement extent. */
        newExtent: Point,

        /** A String representing the replacement text. */
        newText: string
    }>;

    // Search and Replace
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     */
    scan(regex: RegExp, iterator: (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     */
    scan(regex: RegExp, options: ScanContextOptions, iterator: (params:
        ContextualBufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in the entire buffer in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScan(regex: RegExp, iterator: (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in the entire buffer in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScan(regex: RegExp, options: ScanContextOptions, iterator: (params:
        ContextualBufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in a given range , calling the given
     *  iterator function on each match.
     */
    scanInRange(regex: RegExp, range: RangeCompatible, iterator:
        (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in a given range , calling the given
     *  iterator function on each match.
     */
    scanInRange(regex: RegExp, range: RangeCompatible, options: ScanContextOptions,
        iterator: (params: ContextualBufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in a given range in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScanInRange(regex: RegExp, range: RangeCompatible, iterator:
        (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in a given range in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScanInRange(regex: RegExp, range: RangeCompatible, options: ScanContextOptions,
        iterator: (params: ContextualBufferScanResult) => void): void;

    /** Replace all regular expression matches in the entire buffer. */
    replace(regex: RegExp, replacementText: string): number;

    // Buffer Range Details
    /** Get the range spanning from [0, 0] to ::getEndPosition. */
    getRange(): Range;

    /** Get the number of lines in the buffer. */
    getLineCount(): number;

    /** Get the last 0-indexed row in the buffer. */
    getLastRow(): number;

    /** Get the first position in the buffer, which is always [0, 0]. */
    getFirstPosition(): Point;

    /** Get the maximal position in the buffer, where new text would be appended. */
    getEndPosition(): Point;

    /** Get the length of the buffer in characters. */
    getMaxCharacterIndex(): number;

    /** Get the range for the given row. */
    rangeForRow(row: number, includeNewline: boolean): Range;

    /**
     *  Convert a position in the buffer in row/column coordinates to an absolute
     *  character offset, inclusive of line ending characters.
     */
    characterIndexForPosition(position: Point|[number, number]): number;

    /**
     *  Convert an absolute character offset, inclusive of newlines, to a position
     *  in the buffer in row/column coordinates.
     */
    positionForCharacterIndex(offset: number): Point;

    /** Clip the given range so it starts and ends at valid positions. */
    clipRange(range: RangeCompatible): Range;

    /** Clip the given point so it is at a valid position in the buffer. */
    clipPosition(position: PointCompatible): Point;

    // Buffer Operations
    /** Save the buffer. */
    save(): Promise<void>;

    /** Save the buffer at a specific path. */
    saveAs(filePath: string): Promise<void>;

    /** Reload the buffer's contents from disk. */
    reload(): void;

    /** Destroy the buffer, even if there are retainers for it. */
    destroy(): void;

    /** Returns whether or not this buffer is alive. */
    isAlive(): boolean;

    /** Returns whether or not this buffer has been destroyed. */
    isDestroyed(): boolean;

    /** Returns whether or not this buffer has a retainer. */
    isRetained(): boolean;

    /**
     *  Places a retainer on the buffer, preventing its destruction until the
     *  final retainer has called ::release().
     */
    retain(): TextBuffer;

    /**
     *  Releases a retainer on the buffer, destroying the buffer if there are
     *  no additional retainers.
     */
    release(): TextBuffer;

    /** Identifies if the buffer belongs to multiple editors. */
    hasMultipleEditors(): boolean;
}

/** Handles loading and activating available themes. */
export interface ThemeManager {
    // Event Subscription
    /**
     *  Invoke callback when style sheet changes associated with updating the
     *  list of active themes have completed.
     */
    onDidChangeActiveThemes(callback: () => void): Disposable;

    // Accessing Loaded Themes
    /** Returns an Array of strings of all the loaded theme names. */
    getLoadedThemeNames(): string[]|undefined;

    /** Returns an Array of all the loaded themes. */
    getLoadedThemes(): Package[]|undefined;

    // Accessing Active Themes
    /** Returns an Array of strings all the active theme names. */
    getActiveThemeNames(): string[]|undefined;

    /** Returns an Array of all the active themes. */
    getActiveThemes(): Package[]|undefined;

    // Managing Enabled Themes
    /** Get the enabled theme names from the config. */
    getEnabledThemeNames(): string[];
}

// Events =====================================================================
// The event objects that are passed into the callbacks which the user provides to
// specific API calls.

export interface AddedKeystrokeResolverEvent {
    /**
     *  The currently resolved keystroke string. If your function returns a falsy
     *  value, this is how Atom will resolve your keystroke.
     */
    keystroke: string;

    /**
     *  The raw DOM 3 `KeyboardEvent` being resolved. See the DOM API documentation
     *  for more details.
     */
    event: KeyboardEvent;

    /** The OS-specific name of the current keyboard layout. */
    layoutName: string;

    /**
     *  An object mapping DOM 3 `KeyboardEvent.code` values to objects with the
     *  typed character for that key in each modifier state, based on the current
     *  operating system layout.
     */
    keymap: object;
}

export interface BufferChangingEvent {
    /** Range of the old text. */
    oldRange: Range;
}

export interface BufferChangedEvent {
    /**
     *  An array of objects summarizing the aggregated changes that occurred
     *  during the transaction.
     */
    changes: Array<{
        /**
         *  The Range of the deleted text in the contents of the buffer as it existed
         *  before the batch of changes reported by this event.
         */
        oldRange: Range;

        /** The Range of the inserted text in the current contents of the buffer. */
        newRange: Range;
    }>;

    /** Range of the old text. */
    oldRange: Range;

    /** Range of the new text. */
    newRange: Range;

    /** String containing the text that was replaced. */
    oldText: string;

    /** String containing the text that was inserted. */
    newText: string;
}

export interface BufferStoppedChangingEvent {
    changes: TextChange[];
}

/**
 *  This custom subclass of CustomEvent exists to provide the ::abortKeyBinding
 *  method, as well as versions of the ::stopPropagation methods that record the
 *  intent to stop propagation so event bubbling can be properly simulated for
 *  detached elements.
 */
export interface CommandEvent<CurrentTarget extends EventTarget = EventTarget> extends CustomEvent {
    keyBindingAborted: boolean;
    propagationStopped: boolean;

    abortKeyBinding(): void;
    stopPropagation(): CustomEvent;
    stopImmediatePropagation(): CustomEvent;
    currentTarget: CurrentTarget;
}

export interface CursorPositionChangedEvent {
    oldBufferPosition: Point;
    oldScreenPosition: Point;
    newBufferPosition: Point;
    newScreenPosition: Point;
    textChanged: boolean;
    cursor:	Cursor;
}

export interface DecorationPropsChangedEvent {
    /** Object the old parameters the decoration used to have. */
    oldProperties: DecorationOptions;

    /** Object the new parameters the decoration now has */
    newProperties: DecorationOptions;
}

export interface DisplayMarkerChangedEvent {
    /** Point representing the former head buffer position. */
    oldHeadBufferPosition: Point;

    /** Point representing the new head buffer position. */
    newHeadBufferPosition: Point;

    // Point representing the former tail buffer position. */
    oldTailBufferPosition: Point;

    /** Point representing the new tail buffer position. */
    newTailBufferPosition: Point;

    /** Point representing the former head screen position. */
    oldHeadScreenPosition: Point;

    /** Point representing the new head screen position. */
    newHeadScreenPosition: Point;

    /** Point representing the former tail screen position. */
    oldTailScreenPosition: Point;

    /** Point representing the new tail screen position. */
    newTailScreenPosition: Point;

    /** Boolean indicating whether the marker was valid before the change. */
    wasValid: boolean;

    /** Boolean indicating whether the marker is now valid. */
    isValid: boolean;

    /** Boolean indicating whether the marker had a tail before the change. */
    hadTail: boolean;

    /** Boolean indicating whether the marker now has a tail */
    hasTail: boolean;

    /**
     *  -DEPRECATED- Object containing the marker's custom properties before the change.
     *  @deprecated
     */
    oldProperties: object;

    /**
     *  -DEPRECATED- Object containing the marker's custom properties after the change.
     *  @deprecated
     */
    newProperties: object;

    /**
     *  Boolean indicating whether this change was caused by a textual change to the
     *  buffer or whether the marker was manipulated directly via its public API.
     */
    textChanged: boolean;
}

export interface EditorChangedEvent {
    /** A Point representing where the change started. */
    start: Point;

    /** A Point representing the replaced extent. */
    oldExtent: Point;

    /** A Point representing the replacement extent. */
    newExtent: Point;
}

export interface ExceptionThrownEvent {
    originalError: Error;
    message: string;
    url: string;
    line: number;
    column: number;
}

export interface FailedKeybindingMatchEvent {
    /** The string of keystrokes that failed to match the binding. */
    keystrokes: string;

    /** The DOM element that was the target of the most recent keyboard event. */
    keyboardEventTarget: Element;
}

export interface FailedKeymapFileReadEvent {
    /** The error message. */
    message: string;

    /** The error stack trace. */
    stack: string;
}

export interface FileSavedEvent {
    /** The path to which the buffer was saved. */
    path: string;
}

export type FilesystemChangeEvent = Array<{
    /** A string describing the filesystem action that occurred. */
    action: "created"|"modified"|"deleted"|"renamed";

    /** The absolute path to the filesystem entry that was acted upon. */
    path: string;

    /**
     *  For rename events, a string containing the filesystem entry's former
     *  absolute path.
     */
    oldPath?: string;
}>;

export interface FullKeybindingMatchEvent {
  /** The string of keystrokes that matched the binding. */
  keystrokes: string;

  /** The KeyBinding that the keystrokes matched. */
  binding: KeyBinding;

  /** The DOM element that was the target of the most recent keyboard event. */
  keyboardEventTarget: Element;
}

export interface HandleableErrorEvent {
    /** The error object. */
    error: Error;

    /**
     *  Call this function to indicate you have handled the error.
     *  The error will not be thrown if this function is called.
     */
    handle(): void;
}

export interface KeymapLoadedEvent {
    /** The path of the keymap file. */
    path: string;
}

export interface MarkerChangedEvent {
    /** Point representing the former head position. */
    oldHeadPosition: Point;

    /** Point representing the new head position. */
    newHeadPosition: Point;

    /** Point representing the former tail position. */
    oldTailPosition: Point;

    /** Point representing the new tail position. */
    newTailPosition: Point;

    /** Boolean indicating whether the marker was valid before the change. */
    wasValid: boolean;

    /** Boolean indicating whether the marker is now valid. */
    isValid: boolean;

    /** Boolean indicating whether the marker had a tail before the change. */
    hadTail: boolean;

    /** Boolean indicating whether the marker now has a tail. */
    hasTail: boolean;

    /**
     *  -DEPRECATED- Object containing the marker's custom properties before the change.
     *  @deprecated
     */
    oldProperties: object;

    /**
     *  -DEPRECATED- Object containing the marker's custom properties after the change.
     *  @deprecated
     */
    newProperties: object;

    /**
     *  Boolean indicating whether this change was caused by a textual
     *  change to the buffer or whether the marker was manipulated directly
     *  via its public API.
     */
    textChanged: boolean;
}

export interface PaneItemObservedEvent {
    item: object;
    pane: Pane;
    index: number;
}

export interface PaneListItemShiftedEvent {
    /** The pane item that was added or removed. */
    item: object;

    /** A number indicating where the item is located. */
    index: number;
}

export interface PaneItemMovedEvent {
    /** The removed pane item. */
    item: object;

    /** A number indicating where the item was located. */
    oldIndex: number;

    /** A number indicating where the item is now located. */
    newIndex: number;
}

export interface PaneItemOpenedEvent extends PaneItemObservedEvent {
    uri: string;
}

export interface PartialKeybindingMatchEvent {
    /** The string of keystrokes that matched the binding. */
    keystrokes: string;

    /** The KeyBindings that the keystrokes partially matched. */
    partiallyMatchedBindings: KeyBinding[];

    /** DOM element that was the target of the most recent keyboard event. */
    keyboardEventTarget: Element;
}

export interface PathWatchErrorThrownEvent {
    /** The error object. */
    error: Error;

    /**
     *  Call this function to indicate you have handled the error.
     *  The error will not be thrown if this function is called.
     */
    handle(): void;
}

export interface PreventableExceptionThrownEvent extends ExceptionThrownEvent {
    preventDefault(): void;
}

export interface RepoStatusChangedEvent {
    path: string;

    /**
     *  This value can be passed to ::isStatusModified or ::isStatusNew to get more
     *  information.
     */
    pathStatus: number;
}

export interface SelectionChangedEvent {
    oldBufferRange: Range;
    oldScreenRange: Range;
    newBufferRange: Range;
    newScreenRange: Range;
    selection: Selection;
}

export interface StyleElementObservedEvent extends HTMLStyleElement {
    sourcePath: string;
    context: string;
}

export interface TextEditorObservedEvent {
    textEditor: TextEditor;
    pane: Pane;
    index: number;
}

// Extendables ================================================================
// Interfaces which can be augmented in order to provide additional type
// information under certain contexts.

// NOTE: the config schema with these defaults can be found here:
//   https://github.com/atom/atom/blob/v1.23.0/src/config-schema.js
/**
 *  Allows you to strongly type Atom configuration variables. Additional key:value
 *  pairings merged into this interface will result in configuration values under
 *  the value of each key being templated by the type of the associated value.
 */
export interface ConfigValues {
    /**
     *  List of glob patterns. Files and directories matching these patterns will be
     *  ignored by some packages, such as the fuzzy finder and tree view. Individual
     *  packages might have additional config settings for ignoring names.
     */
    "core.ignoredNames": string[];

    /**
     *  Files and directories ignored by the current project's VCS system will be ignored
     *  by some packages, such as the fuzzy finder and find and replace. For example,
     *  projects using Git have these paths defined in the .gitignore file. Individual
     *  packages might have additional config settings for ignoring VCS ignored files and
     *  folders.
     */
    "core.excludeVcsIgnoredPaths": boolean;

    /**
     *  Follow symbolic links when searching files and when opening files with the fuzzy
     *  finder.
     */
    "core.followSymlinks": boolean;

    /** List of names of installed packages which are not loaded at startup. */
    "core.disabledPackages": string[];

    /** List of names of installed packages which are not automatically updated. */
    "core.versionPinnedPackages": string[];

    /**
     *  Associates scope names (e.g. "source.coffee") with arrays of file extensions
     *  and file names (e.g. ["Cakefile", ".coffee2"]).
     */
    "core.customFileTypes": {
        [key: string]: string[];
    };

    /** Names of UI and syntax themes which will be used when Atom starts. */
    "core.themes": string[];

    /**
     *  Trigger the system's beep sound when certain actions cannot be executed or
     *  there are no results.
     */
    "core.audioBeep": boolean;

    /** Close corresponding editors when a file is deleted outside Atom. */
    "core.closeDeletedFileTabs": boolean;

    /** When the last tab of a pane is closed, remove that pane as well. */
    "core.destroyEmptyPanes": boolean;

    /**
     *  When a window with no open tabs or panes is given the 'Close Tab' command,
     *  close that window.
     */
    "core.closeEmptyWindows": boolean;

    /** Default character set encoding to use when reading and writing files. */
    "core.fileEncoding": FileEncoding;

    /**
     *  When checked opens an untitled editor when loading a blank environment (such as
     *  with 'File > New Window' or when "Restore Previous Windows On Start" is unchecked);
     *  otherwise, no editor is opened when loading a blank environment.
     *  This setting has no effect when restoring a previous state.
     */
    "core.openEmptyEditorOnStart": boolean;

    /**
     *  When selected 'no', a blank environment is loaded. When selected 'yes' and Atom
     *  is started from the icon or `atom` by itself from the command line, restores the
     *  last state of all Atom windows; otherwise a blank environment is loaded. When
     *  selected 'always', restores the last state of all Atom windows always, no matter
     *  how Atom is started.
     */
    "core.restorePreviousWindowsOnStart": "no"|"yes"|"always";

    /** How many recent projects to show in the Reopen Project menu. */
    "core.reopenProjectMenuCount": number;

    /** Automatically update Atom when a new release is available. */
    "core.automaticallyUpdate": boolean;

    /** Use detected proxy settings when calling the `apm` command-line tool. */
    "core.useProxySettingsWhenCallingApm": boolean;

    /**
     *  Allow items to be previewed without adding them to a pane permanently, such as
     *  when single clicking files in the tree view.
     */
    "core.allowPendingPaneItems": boolean;

    /**
     *  Allow usage statistics and exception reports to be sent to the Atom team to help
     *  improve the product.
     */
    "core.telemetryConsent": "limited"|"no"|"undecided";

    /** Warn before opening files larger than this number of megabytes. */
    "core.warnOnLargeFileLimit": number;

    /**
     *  Choose the underlying implementation used to watch for filesystem changes. Emulating
     *  changes will miss any events caused by applications other than Atom, but may help
     *  prevent crashes or freezes.
     */
    "core.fileSystemWatcher": "native"|"atom";

    "editor.commentStart": string|null;

    "editor.commentEnd": string|null;

    "editor.increaseIndentPattern": string|null;

    "editor.decreaseIndentPattern": string|null;

    "editor.foldEndPattern": string|null;

    /** The name of the font family used for editor text. */
    "editor.fontFamily": string;

    /** Height in pixels of editor text. */
    "editor.fontSize": number;

    /** Height of editor lines, as a multiplier of font size. */
    "editor.lineHeight": string|number;

    /** Show cursor while there is a selection. */
    "editor.showCursorOnSelection": boolean;

    /** Render placeholders for invisible characters, such as tabs, spaces and newlines. */
    "editor.showInvisibles": boolean;

    /** Show indentation indicators in the editor. */
    "editor.showIndentGuide": boolean;

    /** Show line numbers in the editor's gutter. */
    "editor.showLineNumbers": boolean;

    /** Skip over tab-length runs of leading whitespace when moving the cursor. */
    "editor.atomicSoftTabs": boolean;

    /** Automatically indent the cursor when inserting a newline. */
    "editor.autoIndent": boolean;

    /** Automatically indent pasted text based on the indentation of the previous line. */
    "editor.autoIndentOnPaste": boolean;

    /** A string of non-word characters to define word boundaries. */
    "editor.nonWordCharacters": string;

    /**
     *  Identifies the length of a line which is used when wrapping text with the
     *  `Soft Wrap At Preferred Line Length` setting enabled, in number of characters.
     */
    "editor.preferredLineLength": number;

    /**
     * Defines the maximum width of the editor window before soft wrapping is enforced,
     * in number of characters.
     */
    "editor.maxScreenLineLength": number;

    /** Number of spaces used to represent a tab. */
    "editor.tabLength": number;

    /**
     *  Wraps lines that exceed the width of the window. When `Soft Wrap At Preferred
     *  Line Length` is set, it will wrap to the number of characters defined by the
     *  `Preferred Line Length` setting.
     */
    "editor.softWrap": boolean;

    /**
     *  If the `Tab Type` config setting is set to "auto" and autodetection of tab type
     *  from buffer content fails, then this config setting determines whether a soft tab
     *  or a hard tab will be inserted when the Tab key is pressed.
     */
    "editor.softTabs": boolean;

    /**
     *  Determine character inserted when Tab key is pressed. Possible values: "auto",
     *  "soft" and "hard". When set to "soft" or "hard", soft tabs (spaces) or hard tabs
     *  (tab characters) are used. When set to "auto", the editor auto-detects the tab
     *  type based on the contents of the buffer (it uses the first leading whitespace
     *  on a non-comment line), or uses the value of the Soft Tabs config setting if
     *  auto-detection fails.
     */
    "editor.tabType": "auto"|"soft"|"hard";

    /**
     *  Instead of wrapping lines to the window's width, wrap lines to the number of
     *  characters defined by the `Preferred Line Length` setting. This will only take
     *  effect when the soft wrap config setting is enabled globally or for the current
     *  language.
     *  **Note:** If you want to hide the wrap guide (the vertical line) you can disable
     *  the `wrap-guide` package.
     */
    "editor.softWrapAtPreferredLineLength": boolean;

    /**
     *  When soft wrap is enabled, defines length of additional indentation applied to
     *  wrapped lines, in number of characters.
     */
    "editor.softWrapHangingIndent": number;

    /** Determines how fast the editor scrolls when using a mouse or trackpad. */
    "editor.scrollSensitivity": number;

    /** Allow the editor to be scrolled past the end of the last line. */
    "editor.scrollPastEnd": boolean;

    /**
     *  Time interval in milliseconds within which text editing operations will be
     *  grouped together in the undo history.
     */
    "editor.undoGroupingInterval": number;

    /**
     *  Show confirmation dialog when checking out the HEAD revision and discarding
     *  changes to current file since last commit.
     */
    "editor.confirmCheckoutHeadRevision": boolean;

    /**
     *  A hash of characters Atom will use to render whitespace characters. Keys are
     *  whitespace character types, values are rendered characters (use value false to
     *  turn off individual whitespace character types).
     */
    "editor.invisibles": Invisibles;

    /**
     *  Change the editor font size when pressing the Ctrl key and scrolling the mouse
     *  up/down.
     */
    "editor.zoomFontWhenCtrlScrolling": boolean;

    // tslint:disable-next-line:no-any
    [key: string]: any;
}

// Options ====================================================================
// The option objects that the user is expected to fill out and provide to
// specific API call.

export interface BufferLoadOptions {
    /** The file's encoding. */
    encoding?: string;

    /**
     *  A function that returns a boolean indicating whether the buffer should
     *  be destroyed if its file is deleted.
     */
    shouldDestroyOnFileDelete?(): boolean;
}

export interface BuildEnvironmentOptions {
    /**
     *  An object responsible for Atom's interaction with the browser process and host OS.
     *  Use buildDefaultApplicationDelegate for a default instance.
     */
    applicationDelegate?: object;

    /** A window global. */
    window?: Window;

    /** A document global. */
    document?: Document;

    /** A path to the configuration directory (usually ~/.atom). */
    configDirPath?: string;

    /**
     *  A boolean indicating whether the Atom environment should save or load state
     *  from the file system. You probably want this to be false.
     */
    enablePersistence?: boolean;
}

export interface ContextMenuOptions {
    /** The menu item's label. */
    label?: string;

    /**
     *  The command to invoke on the target of the right click that invoked the
     *  context menu.
     */
    command?: string;

    /**
     *  Whether the menu item should be clickable. Disabled menu items typically
     *  appear grayed out. Defaults to true.
     */
    enabled?: boolean;

    /** An array of additional items. */
    submenu?: ReadonlyArray<ContextMenuOptions>;

    /**
     *  If you want to create a separator, provide an item with type: 'separator'
     *  and no other keys.
     */
    type?: "separator";

    /** Whether the menu item should appear in the menu. Defaults to true. */
    visible?: boolean;

    /**
     *  A function that is called on the item each time a context menu is created
     *  via a right click.
     */
    created?(event: Event): void;

    /**
     *  A function that is called to determine whether to display this item on a
     *  given context menu deployment.
     */
    shouldDisplay?(event: Event): void;
}

export interface CopyMarkerOptions {
    /** Whether or not the marker should be tailed. */
    tailed?: boolean;

    /** Creates the marker in a reversed orientation. */
    reversed?: boolean;

    /** Determines the rules by which changes to the buffer invalidate the marker. */
    invalidate?: "never"|"surround"|"overlap"|"inside"|"touch";

    /**
     *  Indicates whether insertions at the start or end of the marked range should
     *  be interpreted as happening outside the marker.
     */
    exclusive?: boolean;

    /** -DEPRECATED- Custom properties to be associated with the marker. */
    properties?: object;
}

export interface DecorationLayerOptions extends SharedDecorationOptions {
    /** One of several supported decoration types. */
    type?: "line"|"line-number"|"highlight"|"block";
}

export interface DecorationOptions extends SharedDecorationOptions {
    /** One of several supported decoration types. */
    type?: "line"|"line-number"|"highlight"|"overlay"|"gutter"|"block";

    /** The name of the gutter we're decorating, if type is "gutter". */
    gutterName?: string;
}

export interface ErrorNotificationOptions extends NotificationOptions {
    stack?: string;
}

export interface FindDisplayMarkerOptions {
    /** Only include markers starting at this Point in buffer coordinates. */
    startBufferPosition?: PointCompatible;

    /** Only include markers ending at this Point in buffer coordinates. */
    endBufferPosition?: PointCompatible;

    /** Only include markers starting at this Point in screen coordinates. */
    startScreenPosition?: PointCompatible;

    /** Only include markers ending at this Point in screen coordinates. */
    endScreenPosition?: PointCompatible;

    /** Only include markers starting inside this Range in buffer coordinates. */
    startsInBufferRange?: RangeCompatible;

    /** Only include markers ending inside this Range in buffer coordinates. */
    endsInBufferRange?: RangeCompatible;

    /** Only include markers starting inside this Range in screen coordinates. */
    startsInScreenRange?: RangeCompatible;

    /** Only include markers ending inside this Range in screen coordinates. */
    endsInScreenRange?: RangeCompatible;

    /** Only include markers starting at this row in buffer coordinates. */
    startBufferRow?: number;

    /** Only include markers ending at this row in buffer coordinates. */
    endBufferRow?: number;

    /** Only include markers starting at this row in screen coordinates. */
    startScreenRow?: number;

    /** Only include markers ending at this row in screen coordinates. */
    endScreenRow?: number;

    /**
     *  Only include markers intersecting this Array of [startRow, endRow] in
     *  buffer coordinates.
     */
    intersectsBufferRowRange?: [number, number];

    /**
     *  Only include markers intersecting this Array of [startRow, endRow] in
     *  screen coordinates.
     */
    intersectsScreenRowRange?: [number, number];

    /** Only include markers containing this Range in buffer coordinates. */
    containsBufferRange?: RangeCompatible;

    /** Only include markers containing this Point in buffer coordinates. */
    containsBufferPosition?: PointCompatible;

    /** Only include markers contained in this Range in buffer coordinates. */
    containedInBufferRange?: RangeCompatible;

    /** Only include markers contained in this Range in screen coordinates. */
    containedInScreenRange?: RangeCompatible;

    /** Only include markers intersecting this Range in buffer coordinates. */
    intersectsBufferRange?: RangeCompatible;

    /** Only include markers intersecting this Range in screen coordinates. */
    intersectsScreenRange?: RangeCompatible;
}

export interface FindMarkerOptions {
    /** Only include markers that start at the given Point. */
    startPosition?: PointCompatible;

    /** Only include markers that end at the given Point. */
    endPosition?: PointCompatible;

    /** Only include markers that start inside the given Range. */
    startsInRange?: RangeCompatible;

    /** Only include markers that end inside the given Range. */
    endsInRange?: RangeCompatible;

    /** Only include markers that contain the given Point, inclusive. */
    containsPoint?: PointCompatible;

    /** Only include markers that contain the given Range, inclusive. */
    containsRange?: RangeCompatible;

    /** Only include markers that start at the given row number. */
    startRow?: number;

    /** Only include markers that end at the given row number. */
    endRow?: number;

    /** Only include markers that intersect the given row number. */
    intersectsRow?: number;
}

export interface MenuOptions {
    /** The menu itme's label. */
    label: string;

    /** An array of sub menus. */
    submenu?: ReadonlyArray<MenuOptions>;

    /** The command to trigger when the item is clicked. */
    command?: string;
}

export interface NodeProcessOptions {
    /** The command to execute. */
    command: string;

    /** The array of arguments to pass to the command. */
    args?: ReadonlyArray<string>;

    /** The options object to pass to Node's ChildProcess.spawn method. */
    options?: SpawnProcessOptions;

    /**
     *  The callback that receives a single argument which contains the standard
     *  output from the command.
     */
    stdout?(data: string): void;

    /**
     *  The callback that receives a single argument which contains the standard
     *  error output from the command.
     */
    stderr?(data: string): void;

    /** The callback which receives a single argument containing the exit status. */
    exit?(code: number): void;
}

export interface NotificationOptions {
    buttons?: Array<{
        className?: string;
        onDidClick?(event: MouseEvent): void;
        text?: string;
    }>;
    description?: string;
    detail?: string;
    dismissable?: boolean;
    icon?: string;
}

export interface ProcessOptions extends NodeProcessOptions {
    /**
     *  Whether the command will automatically start when this BufferedProcess is
     *  created.
     */
    autoStart?: boolean;
}

export interface ScanContextOptions {
    /** The number of lines before the matched line to include in the results object. */
    leadingContextLineCount?: number;

    /** The number of lines after the matched line to include in the results object. */
    trailingContextLineCount?: number;
}

export interface SharedDecorationOptions {
    /**
     *  This CSS class will be applied to the decorated line number, line, highlight,
     *  or overlay.
     */
    class?: string;

    /**
     *  An HTMLElement or a model Object with a corresponding view registered. Only
     *  applicable to the gutter, overlay and block types.
     */
    item?: object;

    /**
     *  If true, the decoration will only be applied to the head of the DisplayMarker.
     *  Only applicable to the line and line-number types.
     */
    onlyHead?: boolean;

    /**
     *  If true, the decoration will only be applied if the associated DisplayMarker
     *  is empty. Only applicable to the gutter, line, and line-number types.
     */
    onlyEmpty?: boolean;

    /**
     *  If true, the decoration will only be applied if the associated DisplayMarker
     *  is non-empty. Only applicable to the gutter, line, and line-number types.
     */
    onlyNonEmpty?: boolean;

    /**
     *  Only applicable to decorations of type overlay and block. Controls where the
     *  view is positioned relative to the TextEditorMarker. Values can be
     *  'head' (the default) or 'tail' for overlay decorations, and 'before' (the default)
     *  or 'after' for block decorations.
     */
    position?: "head"|"tail"|"before"|"after";

    /**
     *  Only applicable to decorations of type overlay. Determines whether the decoration
     *  adjusts its horizontal or vertical position to remain fully visible when it would
     *  otherwise overflow the editor. Defaults to true.
     */
    avoidOverflow?: boolean;
}

export interface SpawnProcessOptions {
    /** Current working directory of the child process. */
    cwd?: string;

    /** Environment key-value pairs. */
    env?: { [key: string]: string };

    /** The child's stdio configuration. */
    stdio?: string|Array<string|number>;

    /** Prepare child to run independently of its parent process. */
    detached?: boolean;

    /** Sets the user identity of the process. */
    uid?: number;

    /** Sets the group identity of the process. */
    gid?: number;

    /**
     *  If true, runs command inside of a shell. Uses "/bin/sh" on UNIX, and process.env.ComSpec
     *  on Windows. A different shell can be specified as a string.
     */
    shell?: boolean | string;
}

export interface TextInsertionOptions {
    /** If true, selects the newly added text. */
    select?: boolean;

    /** If true, indents all inserted text appropriately. */
    autoIndent?: boolean;

    /** If true, indent newline appropriately. */
    autoIndentNewline?: boolean;

    /**
     *  If true, decreases indent level appropriately (for example, when a closing
     *  bracket is inserted).
     */
    autoDecreaseIndent?: boolean;

    /**
     *  By default, when pasting multiple lines, Atom attempts to preserve the relative
     *  indent level between the first line and trailing lines, even if the indent
     *  level of the first line has changed from the copied text. If this option is
     *  true, this behavior is suppressed.
     */
    preserveTrailingLineIndentation?: boolean;

    /** If true, all line endings will be normalized to match the editor's current mode. */
    normalizeLineEndings?: boolean;

    /** If skip, skips the undo stack for this operation. */
    undo?: "skip";
}

/** The options for a Bootstrap 3 Tooltip class, which Atom uses a variant of. */
export interface TooltipOptions {
    /** Apply a CSS fade transition to the tooltip. */
    animation?: boolean;

    /** Appends the tooltip to a specific element. */
    container?: string|HTMLElement|false;

    /**
     *  Delay showing and hiding the tooltip (ms) - does not apply to manual
     *  trigger type.
     */
    delay?: number|{ show: number, hide: number };

    /** Allow HTML in the tooltip. */
    html?: boolean;

    /** How to position the tooltip. */
    placement?: "top"|"bottom"|"left"|"right"|"auto";

    /**
     *  If a selector is provided, tooltip objects will be delegated to the
     *  specified targets.
     */
    selector?: string;

    /** Base HTML to use when creating the tooltip. */
    template?: string;

    /**
     *  Default title value if title attribute isn't present.
     *  If a function is given, it will be called with its this reference set to
     *  the element that the tooltip is attached to.
     */
    title?: string|HTMLElement|(() => string);

    /**
     *  How tooltip is triggered - click | hover | focus | manual.
     *  You may pass multiple triggers; separate them with a space.
     */
    trigger?: string;
}

export interface WorkspaceOpenOptions {
    /** A number indicating which row to move the cursor to initially. Defaults to 0. */
    initialLine?: number;

    /** A number indicating which column to move the cursor to initially. Defaults to 0. */
    initialColumn?: number;

    /**
     *  Either 'left', 'right', 'up' or 'down'. If 'left', the item will be opened in
     *  leftmost pane of the current active pane's row. If 'right', the item will be
     *  opened in the rightmost pane of the current active pane's row. If only one pane
     *  exists in the row, a new pane will be created. If 'up', the item will be opened
     *  in topmost pane of the current active pane's column. If 'down', the item will be
     *  opened in the bottommost pane of the current active pane's column. If only one pane
     *  exists in the column, a new pane will be created.
     */
    split?: "left"|"right"|"up"|"down";

    /**
     *  A boolean indicating whether to call Pane::activate on containing pane.
     *  Defaults to true.
     */
    activatePane?: boolean;

    /**
     *  A boolean indicating whether to call Pane::activateItem on containing pane.
     *  Defaults to true.
     */
    activateItem?: boolean;

    /**
     *  A Boolean indicating whether or not the item should be opened in a pending state.
     *  Existing pending items in a pane are replaced with new pending items when they
     *  are opened.
     */
    pending?: boolean;

    /**
     *  A boolean. If true, the workspace will attempt to activate an existing item for
     *  the given URI on any pane. If false, only the active pane will be searched for
     *  an existing item for the same URI. Defaults to false.
     */
    searchAllPanes?: boolean;

    /**
     *  A String containing the name of the location in which this item should be opened.
     *  If omitted, Atom will fall back to the last location in which a user has placed
     *  an item with the same URI or, if this is a new URI, the default location specified
     *  by the item.
     *  NOTE: This option should almost always be omitted to honor user preference.
     */
    location?: "left"|"right"|"bottom"|"center";
}

export interface WorkspaceScanOptions {
    /** An array of glob patterns to search within. */
    paths?: ReadonlyArray<string>;

    /** A function to be periodically called with the number of paths searched. */
    onPathsSearched?(pathsSearched: number): void;

    /** The number of lines before the matched line to include in the results object. */
    leadingContextLineCount?: number;

    /** The number of lines after the matched line to include in the results object. */
    trailingContextLineCount?: number;
}

// Interfaces =================================================================
// The requirements placed on object parameters for specific API calls.

export interface Deserializer {
    name: string;
    deserialize(state: object): object;
}

export interface DisposableLike {
    dispose(): void;
}

/** The types usable when constructing a point via the Point::fromObject method. */
export type PointCompatible = PointLike|[number, number];

/** The interface that should be implemented for all "point-compatible" objects. */
export interface PointLike {
    /** A zero-indexed number representing the row of the Point. */
    row: number;

    /** A zero-indexed number representing the column of the Point. */
    column: number;
}

/** The types usable when constructing a range via the Range::fromObject method. */
export type RangeCompatible =
    | RangeLike
    | [PointLike, PointLike]
    | [PointLike, [number, number]]
    | [[number, number], PointLike]
    | [[number, number], [number, number]];

/** The interface that should be implemented for all "range-compatible" objects. */
export interface RangeLike {
    /** A Point representing the start of the Range. */
    start: PointLike;

    /** A Point representing the end of the Range. */
    end: PointLike;
}

/** An interface which all custom test runners should implement. */
export type TestRunner = (params: TestRunnerParams) => Promise<number>;

// Structures =================================================================
// The structures that are passed to the user by Atom following specific API calls.

export interface BufferScanResult {
    buffer: TextBuffer;
    lineText: string;
    match: RegExpExecArray;
    matchText: string;
    range: Range;
    replace(replacementText: string): void;
    stop(): void;
    stopped: boolean;
}

export interface CancellablePromise<T> extends Promise<T> {
    cancel(): void;
}

export interface ContextualBufferScanResult extends BufferScanResult {
    leadingContextLines: string[];
    trailingContextLines: string[];
}

export type FileEncoding =
    | "iso88596"       // Arabic (ISO 8859-6)
    | "windows1256"    // Arabic (Windows 1256)
    | "iso88594"       // Baltic (ISO 8859-4)
    | "windows1257"    // Baltic (Windows 1257)
    | "iso885914"      // Celtic (ISO 8859-14)
    | "iso88592"       // Central European (ISO 8859-2)
    | "windows1250"    // Central European (Windows 1250)
    | "gb18030"        // Chinese (GB18030)
    | "gbk"            // Chinese (GBK)
    | "cp950"          // Traditional Chinese (Big5)
    | "big5hkscs"      // Traditional Chinese (Big5-HKSCS)
    | "cp866"          // Cyrillic (CP 866)
    | "iso88595"       // Cyrillic (ISO 8859-5)
    | "koi8r"          // Cyrillic (KOI8-R)
    | "koi8u"          // Cyrillic (KOI8-U)
    | "windows1251"    // Cyrillic (Windows 1251)
    | "cp437"          // DOS (CP 437)
    | "cp850"          // DOS (CP 850)
    | "iso885913"      // Estonian (ISO 8859-13)
    | "iso88597"       // Greek (ISO 8859-7)
    | "windows1253"    // Greek (Windows 1253)
    | "iso88598"       // Hebrew (ISO 8859-8)
    | "windows1255"    // Hebrew (Windows 1255)
    | "cp932"          // Japanese (CP 932)
    | "eucjp"          // Japanese (EUC-JP)
    | "shiftjis"       // Japanese (Shift JIS)
    | "euckr"          // Korean (EUC-KR)
    | "iso885910"      // Nordic (ISO 8859-10)
    | "iso885916"      // Romanian (ISO 8859-16)
    | "iso88599"       // Turkish (ISO 8859-9)
    | "windows1254"    // Turkish (Windows 1254)
    | "utf8"           // Unicode (UTF-8)
    | "utf16le"        // Unicode (UTF-16 LE)
    | "utf16be"        // Unicode (UTF-16 BE)
    | "windows1258"    // Vietnamese (Windows 1258)
    | "iso88591"       // Western (ISO 8859-1)
    | "iso88593"       // Western (ISO 8859-3)
    | "iso885915"      // Western (ISO 8859-15)
    | "macroman"       // Western (Mac Roman)
    | "windows1252";   // Western (Windows 1252)

export interface GrammarRule {
    // https://github.com/atom/first-mate/blob/v7.0.7/src/rule.coffee
    // This is private. Don't go down the rabbit hole.
    rule: object;
    scopeName: string;
    contentScopeName: string;
}

export interface GrammarToken {
    value: string;
    scopes: string[];
}

export interface Invisibles {
    /**
     *  Character used to render newline characters (\n) when the `Show Invisibles`
     *  setting is enabled.
     */
    eol?: boolean|string;

    /**
     *  Character used to render leading and trailing space characters when the
     *  `Show Invisibles` setting is enabled.
     */
    space?: boolean|string;

    /**
     *  Character used to render hard tab characters (\t) when the `Show Invisibles`
     *  setting is enabled.
     */
    tab?: boolean|string;

    /**
     *  Character used to render carriage return characters (for Microsoft-style line
     *  endings) when the `Show Invisibles` setting is enabled.
     */
    cr?: boolean|string;
}

export interface KeyBinding {
    // Properties
    enabled: boolean;
    source: string;
    command: string;
    keystrokes: string;
    keystrokeArray: string[];
    keystrokeCount: number;
    selector: string;
    specificity: number;

    // Comparison
    /** Determines whether the given keystroke matches any contained within this binding. */
    matches(keystroke: string): boolean;

    /**
     *  Compare another KeyBinding to this instance.
     *  Returns <= -1 if the argument is considered lesser or of lower priority.
     *  Returns 0 if this binding is equivalent to the argument.
     *  Returns >= 1 if the argument is considered greater or of higher priority.
     */
    compare(other: KeyBinding): number;
}

export interface ProjectHistory {
    paths: string[];
    lastOpened: Date;
}

export interface ScandalResult {
    filePath: string;
    matches: Array<{
        matchText: string;
        lineText: string;
        lineTextOffset: number;
        range: [[number, number], [number, number]];
        leadingContextLines: string[];
        trailingContextLines: string[];
    }>;
}

export interface TestRunnerParams {
    /** An array of paths to tests to run. Could be paths to files or directories. */
    testPaths: string[];

    /**
     *  A function that can be called to construct an instance of the atom global.
     *  No atom global will be explicitly assigned, but you can assign one in your
     *  runner if desired.
     */
    buildAtomEnvironment(options: BuildEnvironmentOptions): AtomEnvironment;

    /**
     *  A function that builds a default instance of the application delegate, suitable
     *  to be passed as the applicationDelegate parameter to buildAtomEnvironment.
     */
    buildDefaultApplicationDelegate(): object;

    /** An optional path to a log file to which test output should be logged. */
    logFile: string;

    /**
     *  A boolean indicating whether or not the tests are being run from the command
     *  line via atom --test.
     */
    headless: boolean;
}

export interface TextChange {
    newExtent: Point;
    oldExtent: Point;
    newRange: Range;
    oldRange: Range;
    newText: string;
    oldText: string;
    start: Point;
}

/** Result returned by `Grammar.tokenizeLine`. */
export interface TokenizeLineResult {
    /** The string of text that was tokenized. */
    line: string;

    /**
     *  An array of integer scope ids and strings. Positive ids indicate the
     *  beginning of a scope, and negative tags indicate the end. To resolve ids
     *  to scope names, call GrammarRegistry::scopeForId with the absolute
     *  value of the id.
     */
    tags: Array<number|string>;

    /**
     *  This is a dynamic property. Invoking it will incur additional overhead,
     *  but will automatically translate the `tags` into token objects with `value`
     *  and `scopes` properties.
     */
    tokens: GrammarToken[];

    /**
     *  An array of rules representing the tokenized state at the end of the line.
     *  These should be passed back into this method when tokenizing the next line
     *  in the file.
     */
    ruleStack: GrammarRule[];
}

/**
 *  This tooltip class is derived from Bootstrap 3, but modified to not require
 *  jQuery, which is an expensive dependency we want to eliminate.
 */
export interface Tooltip {
    options: TooltipOptions;
    enabled: boolean;
    timeout: number;
    hoverState: "in"|"out"|null;
    element: JQuery|HTMLElement;

    getTitle(): string;
    getTooltipElement(): HTMLElement;
    getArrowElement(): HTMLElement;
    enable(): void;
    disable(): void;
    toggleEnabled(): void;
    toggle(): void;
    recalculatePosition(): void;
}

export interface ViewModel {
    getTitle: () => string;
}

export interface WindowLoadSettings {
    appVersion: string;
    atomHome: string;
    devMode: boolean;
    resourcePath: string;
    safeMode: boolean;
    env?: { [key: string]: string|undefined };
    profileStartup?: boolean;
}
