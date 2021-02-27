// Type definitions for non-npm package Atom 1.40
// Project: https://github.com/atom/atom
// Definitions by: GlenCFL <https://github.com/GlenCFL>
//                 smhxx <https://github.com/smhxx>
//                 lierdakil <https://github.com/lierdakil>
//                 aminya <https://github.com/aminya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// NOTE: only those classes exported within this file should be retain that status below.
// https://github.com/atom/atom/blob/v1.40.0/exports/atom.js

/// <reference types="node" />

// Imports ======================================================
import { Config } from "./src/config";
import { ConfigValues } from "./src/config-schema";
import { CommandRegistry } from "./src/command-registry";
import { Disposable, DisposableLike } from "./dependencies/event-kit";
import {
    MarkerLayer,
    Point,
    PointCompatible,
    Range,
    RangeCompatible,
    RangeLike,
    TextBuffer,
} from "./dependencies/text-buffer";
import { DecorationOptions } from "./src/decoration";
import { NotificationManager } from "./src/notification-manager";
import { TextEditor } from "./src/text-editor";
import { TextEditorElement } from "./src/text-editor-element";
import { TextEditorRegistry } from "./src/text-editor-registry";
import { TooltipManager } from "./src/tooltip-manager";
import { ViewRegistry } from "./src/view-registry";
import { Workspace } from "./src/workspace";
import { Clipboard } from "./src/clipboard";
import { ContextMenuManager } from "./src/context-menu-manager";
import { DeserializerManager } from "./src/deserializer-manager";
import { Directory } from "./dependencies/pathwatcher";
import { GitRepository } from "./src/git-repository";
import { HistoryManager } from "./src/history-manager";
import { KeymapManager } from "./src/keymap-extensions";
import { Package } from "./src/package";
import { PackageManager } from "./src/package-manager";
import { MenuManager } from "./src/menu-manager";

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
    readonly commands: CommandRegistry;

    /** A Config instance. */
    readonly config: Config;

    /** A Clipboard instance. */
    readonly clipboard: Clipboard;

    /** A ContextMenuManager instance. */
    readonly contextMenu: ContextMenuManager;

    /** A MenuManager instance. */
    readonly menu: MenuManager;

    /** A KeymapManager instance. */
    readonly keymaps: KeymapManager;

    /** A TooltipManager instance. */
    readonly tooltips: TooltipManager;

    /** A NotificationManager instance. */
    readonly notifications: NotificationManager;

    /** A Project instance. */
    readonly project: Project;

    /** A GrammarRegistry instance. */
    readonly grammars: GrammarRegistry;

    /** A HistoryManager instance. */
    readonly history: HistoryManager;

    /** A PackageManager instance. */
    readonly packages: PackageManager;

    /** A ThemeManager instance. */
    readonly themes: ThemeManager;

    /** A StyleManager instance. */
    readonly styles: StyleManager;

    /** A DeserializerManager instance. */
    readonly deserializers: DeserializerManager;

    /** A ViewRegistry instance. */
    readonly views: ViewRegistry;

    /** A Workspace instance. */
    readonly workspace: Workspace;

    /** A TextEditorRegistry instance. */
    readonly textEditors: TextEditorRegistry;

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

    /** Get the full name of this Atom release (e.g. "Atom", "Atom Beta") */
    getAppName(): string;

    /** Get the version of the Atom application. */
    getVersion(): string;

    /**
     *  Gets the release channel of the Atom application.
     *  Returns the release channel, which can be 'dev', 'nightly', 'beta', or 'stable'.
     */
    getReleaseChannel(): "dev"|"nightly"|"beta"|"stable";

    /** Returns a boolean that is true if the current version is an official release. */
    isReleasedVersion(): boolean;

    /** Get the time taken to completely load the current window. */
    getWindowLoadTime(): number;

    /** Get the all the markers with the information about startup time. */
    getStartupMarkers(): TimingMarker[];

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

    /**
     * Restores the full screen and maximized state after the window has resized to prevent resize
     * glitches.
     */
    displayWindow(): Promise<undefined>;

    /** Get the dimensions of this window. */
    getWindowDimensions(): { x: number, y: number, width: number, height: number };

    /** Set the dimensions of the window. */
    setWindowDimensions(dimensions: {
        x?: number,
        y?: number,
        width?: number,
        height?: number
    }): Promise<object>;

    // Messaging the User
    /** Visually and audibly trigger a beep. */
    beep(): void;

    /**
     *  A flexible way to open a dialog akin to an alert dialog. If a callback
     *  is provided, then the confirmation will work asynchronously, which is
     *  recommended.
     *
     *  If the dialog is closed (via `Esc` key or `X` in the top corner) without
     *  selecting a button the first button will be clicked unless a "Cancel" or "No"
     *  button is provided.
     *
     *  Returns the chosen button index number if the buttons option was an array.
     *  @param response The index of the button that was clicked.
     *  @param checkboxChecked The checked state of the checkbox if `checkboxLabel` was set.
     *  Otherwise false.
     */
    confirm(options: ConfirmationOptions, callback: (response: number,
        checkboxChecked: boolean) => void): void;

    /**
     *  A flexible way to open a dialog akin to an alert dialog. If a callback
     *  is provided, then the confirmation will work asynchronously, which is
     *  recommended.
     *
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
     *  A flexible way to open a dialog akin to an alert dialog. If a callback
     *  is provided, then the confirmation will work asynchronously, which is
     *  recommended.
     *
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

export * from "./src/config";

export * from "./src/config-schema";

export * from "./src/color";

export * from "./src/command-registry";

export * from "./dependencies/event-kit";

export * from "./src/decoration";

export * from "./dependencies/text-buffer";

export * from "./src/layer-decoration";

export * from "./src/notification";

export * from "./src/notification-manager";

export * from "./src/text-editor";

export * from "./src/gutter";

export interface PixelPosition {
    left: number;
    top: number;
}

export * from "./src/text-editor-component";

export * from "./src/text-editor-element";

export * from "./src/text-editor-registry";

export * from "./src/tooltip-manager";

export * from "./src/view-registry";

export * from "./src/workspace";

export * from "./src/workspace-center";

export * from "./src/buffered-process";

export * from "./src/buffered-node-process";

export * from "./src/clipboard";

export * from "./src/context-menu-manager";

export * from "./src/menu-manager";

export * from "./src/cursor";

export * from "./src/deserializer-manager";

export * from "./dependencies/pathwatcher";

export * from "./src/dock";

export * from "./src/git-repository";

export * from "./src/history-manager";

export * from "./src/keymap-extensions";

export * from "./src/package";

export * from "./src/package-manager";

// Extended Classes ===========================================================

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

    /**
     *  Set a TextBuffer's language mode based on its path and content, and continue
     *  to update its language mode as grammars are added or updated, or the buffer's
     *  file path changes.
     *  @param buffer The buffer whose language mode will be maintained.
     *  @return A Disposable that can be used to stop updating the buffer's
     *  language mode.
     */
    maintainLanguageMode(buffer: TextBuffer): Disposable;

    /**
     *  Force a TextBuffer to use a different grammar than the one that would otherwise
     *  be selected for it.
     *  @param buffer The buffer whose grammar will be set.
     *  @param languageId The identifier of the desired language.
     *  @return Returns a boolean that indicates whether the language was successfully
     * found.
     */
    assignLanguageMode(buffer: TextBuffer, languageId: string): boolean;

    /**
     *  Remove any language mode override that has been set for the given TextBuffer.
     *  This will assign to the buffer the best language mode available.
     */
    autoAssignLanguageMode(buffer: TextBuffer): void;

    /**
     *  Select a grammar for the given file path and file contents.
     *
     *  This picks the best match by checking the file path and contents against
     *  each grammar.
     *  @param filePath A string file path.
     *  @param fileContents A string of text for that file path.
     */
    selectGrammar(filePath: string, fileContents: string): Grammar;

    /**
     *  Returns a number representing how well the grammar matches the
     *  `filePath` and `contents`.
     *  @param grammar The grammar to score.
     *  @param filePath A string file path.
     *  @param contents A string of text for that file path.
     */
    getGrammarScore(grammar: Grammar, filePath: string, contents: string): number;
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
    readonly visible: boolean;

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
     *  released asynchronously, but this watcher will stop broadcasting events
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

    /** Invoke a callback whenever the project's configuration has been replaced. */
    onDidReplace(callback: (projectSpec: ProjectSpecification | null | undefined) => void):
        Disposable;

    // Accessing the Git Repository
    /**
     * Get an Array of GitRepositorys associated with the project's directories.
     *
     * This method will be removed in 2.0 because it does synchronous I/O.
     */
    getRepositories(): GitRepository[];

    /** Invoke the given callback with all current and future repositories in the project. */
    observeRepositories(callback: (repository: GitRepository) => void): Disposable;

    /** Invoke the given callback when a repository is added to the project. */
    onDidAddRepository(callback: (repository: GitRepository) => void): Disposable;

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
    /** Returns all scopes for this descriptor. */
    getScopesArray(): ReadonlyArray<string>;
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
        reversed?: boolean,
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
    insertText(text: string, options?: TextInsertionOptions & ReadonlyEditOptions): void;

    /**
     *  Removes the first character before the selection if the selection is empty
     *  otherwise it deletes the selection.
     */
    backspace(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or, if nothing is selected, then all characters from
     *  the start of the selection back to the previous word boundary.
     */
    deleteToPreviousWordBoundary(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or, if nothing is selected, then all characters from
     *  the start of the selection up to the next word boundary.
     */
    deleteToNextWordBoundary(options?: ReadonlyEditOptions): void;

    /**
     *  Removes from the start of the selection to the beginning of the current
     *  word if the selection is empty otherwise it deletes the selection.
     */
    deleteToBeginningOfWord(options?: ReadonlyEditOptions): void;

    /**
     *  Removes from the beginning of the line which the selection begins on all
     *  the way through to the end of the selection.
     */
    deleteToBeginningOfLine(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or the next character after the start of the selection
     *  if the selection is empty.
     */
    delete(options?: ReadonlyEditOptions): void;

    /**
     *  If the selection is empty, removes all text from the cursor to the end of
     *  the line. If the cursor is already at the end of the line, it removes the following
     *  newline. If the selection isn't empty, only deletes the contents of the selection.
     */
    deleteToEndOfLine(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToEndOfWord(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToBeginningOfSubword(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToEndOfSubword(options?: ReadonlyEditOptions): void;

    /** Removes only the selected text. */
    deleteSelectedText(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the line at the beginning of the selection if the selection is empty
     *  unless the selection spans multiple lines in which case all lines are removed.
     */
    deleteLine(options?: ReadonlyEditOptions): void;

    /**
     *  Joins the current line with the one below it. Lines will be separated by a single space.
     *  If there selection spans more than one line, all the lines are joined together.
     */
    joinLines(options?: ReadonlyEditOptions): void;

    /** Removes one level of indent from the currently selected rows. */
    outdentSelectedRows(options?: ReadonlyEditOptions): void;

    /**
     *  Sets the indentation level of all selected rows to values suggested by the
     *  relevant grammars.
     */
    autoIndentSelectedRows(options?: ReadonlyEditOptions): void;

    /**
     *  Wraps the selected lines in comments if they aren't currently part of a comment.
     *  Removes the comment if they are currently wrapped in a comment.
     */
    toggleLineComments(options?: ReadonlyEditOptions): void;

    /** Cuts the selection until the end of the screen line. */
    cutToEndOfLine(maintainClipboard?: boolean, options?: ReadonlyEditOptions): void;

    /** Cuts the selection until the end of the buffer line. */
    cutToEndOfBufferLine(maintainClipboard?: boolean, options?: ReadonlyEditOptions): void;

    /** Copies the selection to the clipboard and then deletes it. */
    cut(maintainClipboard?: boolean, fullLine?: boolean, options?: ReadonlyEditOptions): void;

    /** Copies the current selection to the clipboard. */
    copy(maintainClipboard?: boolean, fullLine?: boolean): void;

    /** Creates a fold containing the current selection. */
    fold(): void;

    /** If the selection spans multiple rows, indent all of them. */
    indentSelectedRows(options?: ReadonlyEditOptions): void;

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
    // tslint:disable-next-line:no-any
    send(message: string | number | boolean | object | null | any[]): void;

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

    // Managing Enabled Themes
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

export interface DecorationPropsChangedEvent {
    /** Object the old parameters the decoration used to have. */
    oldProperties: DecorationOptions;

    /** Object the new parameters the decoration now has */
    newProperties: DecorationOptions;
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

export interface FileSavedEvent {
    /** The path to which the buffer was saved. */
    path: string;
}

export interface FilesystemChangeBasic<
  Action extends "created"|"modified"|"deleted"|"renamed"
  = "created"|"modified"|"deleted"
> {
    /** A string describing the filesystem action that occurred. */
    action: Action;

    /** The absolute path to the filesystem entry that was acted upon. */
    path: string;
}

export interface FilesystemChangeRename extends FilesystemChangeBasic<"renamed"> {
    /**
     *  For rename events, a string containing the filesystem entry's former
     *  absolute path.
     */
    oldPath: string;
}

export type FilesystemChange = FilesystemChangeBasic|FilesystemChangeRename;

export type FilesystemChangeEvent = FilesystemChange[];

export interface HandleableErrorEvent {
    /** The error object. */
    error: Error;

    /**
     *  Call this function to indicate you have handled the error.
     *  The error will not be thrown if this function is called.
     */
    handle(): void;
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

export interface PreventableExceptionThrownEvent extends ExceptionThrownEvent {
    preventDefault(): void;
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

// Options ====================================================================
// The option objects that the user is expected to fill out and provide to
// specific API call.

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

export interface ConfirmationOptions {
    /** The type of the confirmation prompt. */
    type?: "none"|"info"|"error"|"question"|"warning";

    /** The text for the buttons. */
    buttons?: ReadonlyArray<string>;

    /** The index for the button to be selected by default in the prompt. */
    defaultId?: number;

    /** The title for the prompt. */
    title?: string;

    /** The content of the message box. */
    message?: string;

    /** Additional information regarding the message. */
    detail?: string;

    /** If provided, the message box will include a checkbox with the given label. */
    checkboxLabel?: string;

    /** Initial checked state of the checkbox. false by default. */
    checkboxChecked?: boolean;

    /** An Electron NativeImage to use as the prompt's icon. */
    icon?: object;

    /**
     *  The index of the button to be used to cancel the dialog, via the `Esc` key.
     *  By default this is assigned to the first button with "cancel" or "no" as the
     *  label. If no such labeled buttons exist and this option is not set, 0 will be
     *  used as the return value or callback response.
     *
     *  This option is ignored on Windows.
     */
    cancelId?: number;

    /**
     *  On Windows, Electron will try to figure out which one of the buttons are
     *  common buttons (like `Cancel` or `Yes`), and show the others as command links
     *  in the dialog. This can make the dialog appear in the style of modern Windows
     *  apps. If you don't like this behavior, you can set noLink to true.
     */
    noLink?: boolean;

    /**
     * Normalize the keyboard access keys across platforms.
     * Atom defaults this to true.
     */
    normalizeAccessKeys?: boolean;
}

export interface HistoryTransactionOptions {
    /** When provided, skip taking snapshot for other selections markerLayers except given one. */
    selectionsMarkerLayer?: MarkerLayer;
}

export interface HistoryTraversalOptions {
    /** Restore snapshot of selections marker layer to given selectionsMarkerLayer. */
    selectionsMarkerLayer?: MarkerLayer;
}

export interface ReadonlyEditOptions {
    /** Whether the readonly protections on the text editor should be ignored. */
    bypassReadOnly?: boolean;
}

export interface TextEditOptions {
    /** If true, all line endings will be normalized to match the editor's current mode. */
    normalizeLineEndings?: boolean;

    /**
     * If skip, skips the undo stack for this operation.
     * @deprecated Call groupLastChanges() on the TextBuffer afterward instead.
     */
    undo?: "skip";
}

export interface TextInsertionOptions extends TextEditOptions {
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

// Interfaces =================================================================
// The requirements placed on object parameters for specific API calls.

/** An interface which all custom test runners should implement. */
export type TestRunner = (params: TestRunnerParams) => Promise<number>;

// Structures =================================================================
// The structures that are passed to the user by Atom following specific API calls.

export interface CancellablePromise<T> extends Promise<T> {
    cancel(): void;
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

export interface ProjectSpecification {
    paths: string[];
    originPath: string;
    config?: ConfigValues;
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

export interface TimingMarker {
    label: string;
    time: number;
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
    readonly options: TooltipOptions;
    readonly enabled: boolean;
    readonly timeout: number;
    readonly hoverState: "in"|"out"|null;
    readonly element: HTMLElement;

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
    readonly appVersion: string;
    readonly atomHome: string;
    readonly devMode: boolean;
    readonly resourcePath: string;
    readonly safeMode: boolean;
    readonly env?: { [key: string]: string|undefined };
    readonly profileStartup?: boolean;
}
