// Type definitions for Atom 1.21
// Project: https://github.com/atom/atom
// Definitions by: GlenCFL <https://github.com/GlenCFL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// https://github.com/atom/atom/blob/v1.21.0/exports/atom.js

/// <reference types="node" />
/// <reference types="jquery" />

/// <reference types="atom-keymap" />
/// <reference types="event-kit" />
/// <reference types="first-mate" />
/// <reference types="pathwatcher" />
/// <reference types="text-buffer" />

declare global {
    namespace AtomCore {
        /** The event objects that are passed into the callbacks which the user provides to
         *  specific API calls.
         */
        namespace Events {
            interface CursorPositionChanged {
                oldBufferPosition: TextBuffer.Point;
                oldScreenPosition: TextBuffer.Point;
                newBufferPosition: TextBuffer.Point;
                newScreenPosition: TextBuffer.Point;
                textChanged: boolean;
                Cursor:	Cursor;
            }

            interface DecorationPropsChanged {
                /** Object the old parameters the decoration used to have. */
                oldProperties: Options.DecorationProps;

                /** Object the new parameters the decoration now has */
                newProperties: Options.DecorationProps;
            }

            interface EditorChanged {
                /** A Point representing where the change started. */
                start: TextBuffer.Point;

                /** A Point representing the replaced extent. */
                oldExtent: TextBuffer.Point;

                /** A Point representing the replacement extent. */
                newExtent: TextBuffer.Point;
            }

            interface ExceptionThrown {
                originalError: Error;
                message: string;
                url: string;
                line: number;
                column: number;
            }

            type FilesystemChange = Array<{
                /** A string describing the filesystem action that occurred. */
                action: "created"|"modified"|"deleted"|"renamed";

                /** The absolute path to the filesystem entry that was acted upon. */
                path: string;

                /** For rename events, a string containing the filesystem entry's former
                 *  absolute path.
                 */
                oldPath?: string;
            }>;

            interface PaneItemMoved {
                /** The removed pane item. */
                item: object;

                /** A number indicating where the item was located. */
                oldIndex: number;

                /** A number indicating where the item is now located. */
                newIndex: number;
            }

            interface PaneItemObserved {
                item: object;
                pane: Pane;
                index: number;
            }

            interface PaneItemOpened extends PaneItemObserved {
                uri: string;
            }

            interface PaneListItemShifted {
                /** The pane item that was added or removed. */
                item: object;

                /** A number indicating where the item is located. */
                index: number;
            }

            interface PreventableExceptionThrown extends ExceptionThrown {
                preventDefault(): void;
            }

            interface RepoStatusChanged {
                path: string;

                /** This value can be passed to ::isStatusModified or ::isStatusNew to get more
                 *  information.
                 */
                pathStatus: number;
            }

            interface SelectionChanged {
                oldBufferRange: TextBuffer.Range;
                oldScreenRange: TextBuffer.Range;
                newBufferRange: TextBuffer.Range;
                newScreenRange: TextBuffer.Range;
                selection: Selection;
            }

            interface StyleElementObserved extends HTMLStyleElement {
                sourcePath: string;
                context: string;
            }

            interface TextEditorObserved {
                textEditor: TextEditor;
                pane: Pane;
                index: number;
            }
        }

        /** The option objects that the user is expected to fill out and provide to
         *  specific API calls.
         */
        namespace Options {
            interface BuildEnvironment {
                /** An object responsible for Atom's interaction with the browser process and host OS.
                 *  Use buildDefaultApplicationDelegate for a default instance.
                 */
                applicationDelegate?: object;

                /** A window global. */
                window?: Window;

                /** A document global. */
                document?: Document;

                /** A path to the configuration directory (usually ~/.atom). */
                configDirPath?: string;

                /** A boolean indicating whether the Atom environment should save or load state
                 *  from the file system. You probably want this to be false.
                 */
                enablePersistence?: boolean;
            }

            interface ContextMenu {
                /** The menu item's label. */
                label?: string;

                /** The command to invoke on the target of the right click that invoked the
                 *  context menu.
                 */
                command?: string;

                /** Whether the menu item should be clickable. Disabled menu items typically
                 *  appear grayed out. Defaults to true.
                 */
                enabled?: boolean;

                /** An array of additional items. */
                submenu?: ReadonlyArray<ContextMenu>;

                /** If you want to create a separator, provide an item with type: 'separator'
                 *  and no other keys.
                 */
                type?: "separator";

                /** Whether the menu item should appear in the menu. Defaults to true. */
                visible?: boolean;

                /** A function that is called on the item each time a context menu is created
                 *  via a right click.
                 */
                created?(event: Event): void;

                /** A function that is called to determine whether to display this item on a
                 *  given context menu deployment.
                 */
                shouldDisplay?(event: Event): void;
            }

            interface DecorationLayerProps extends SharedDecorationProps {
                /** One of several supported decoration types. */
                type?: "line"|"line-number"|"highlight"|"block";
            }

            interface DecorationProps extends SharedDecorationProps {
                /** One of several supported decoration types. */
                type?: "line"|"line-number"|"highlight"|"overlay"|"gutter"|"block";

                /** The name of the gutter we're decorating, if type is "gutter". */
                gutterName?: string;
            }

            interface ErrorNotification extends NotificationOptions {
                stack?: string;
            }

            interface Menu {
                /** The menu itme's label. */
                label: string;

                /** An array of sub menus. */
                submenu?: ReadonlyArray<Menu>;

                /** The command to trigger when the item is clicked. */
                command?: string;
            }

            interface Notification {
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

            interface NodeProcess {
                /** The command to execute. */
                command: string;

                /** The array of arguments to pass to the command. */
                args?: ReadonlyArray<string>;

                /** The options object to pass to Node's ChildProcess.spawn method. */
                options?: SpawnProcess;

                /** The callback that receives a single argument which contains the standard
                 *  output from the command.
                 */
                stdout?(data: string): void;

                /** The callback that receives a single argument which contains the standard
                 *  error output from the command.
                 */
                stderr?(data: string): void;

                /** The callback which receives a single argument containing the exit status. */
                exit?(code: number): void;
            }

            interface Process extends NodeProcess {
                /** Whether the command will automatically start when this BufferedProcess is
                 *  created.
                 */
                autoStart?: boolean;
            }

            interface SharedDecorationProps {
                /** This CSS class will be applied to the decorated line number, line, highlight,
                 *  or overlay.
                 */
                class?: string;

                /** An HTMLElement or a model Object with a corresponding view registered. Only
                 *  applicable to the gutter, overlay and block types.
                 */
                item?: HTMLElement;

                /** If true, the decoration will only be applied to the head of the DisplayMarker.
                 *  Only applicable to the line and line-number types.
                 */
                onlyHead?: boolean;

                /** If true, the decoration will only be applied if the associated DisplayMarker
                 *  is empty. Only applicable to the gutter, line, and line-number types.
                 */
                onlyEmpty?: boolean;

                /** If true, the decoration will only be applied if the associated DisplayMarker
                 *  is non-empty. Only applicable to the gutter, line, and line-number types.
                 */
                onlyNonEmpty?: boolean;

                /** Only applicable to decorations of type overlay and block. Controls where the
                 *  view is positioned relative to the TextEditorMarker. Values can be
                 *  'head' (the default) or 'tail' for overlay decorations, and 'before' (the default)
                 *  or 'after' for block decorations.
                 */
                position?: "head"|"tail"|"before"|"after";

                /** Only applicable to decorations of type overlay. Determines whether the decoration
                 *  adjusts its horizontal or vertical position to remain fully visible when it would
                 *  otherwise overflow the editor. Defaults to true.
                 */
                avoidOverflow?: boolean;
            }

            interface SpawnProcess {
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

                /** If true, runs command inside of a shell. Uses "/bin/sh" on UNIX, and
                 *  process.env.ComSpec on Windows. A different shell can be specified as
                 *  a string.
                 */
                shell?: boolean | string;
            }

            interface TextInsertion {
                select?: boolean;
                autoIndent?: boolean;
                autoIndentNewline?: boolean;
                autoDecreaseIndent?: boolean;
                normalizeLineEndings?: boolean;
                undo?: "skip";
            }

            /** The options for a Bootstrap 3 Tooltip class, which Atom uses a variant of. */
            interface Tooltip {
                /** Apply a CSS fade transition to the tooltip. */
                animation?: boolean;

                /** Appends the tooltip to a specific element. */
                container?: string|HTMLElement|false;

                /** Delay showing and hiding the tooltip (ms) - does not apply to manual
                 *  trigger type.
                 */
                delay?: number|{ show: number, hide: number };

                /** Allow HTML in the tooltip. */
                html?: boolean;

                /** How to position the tooltip. */
                placement?: "top"|"bottom"|"left"|"right"|"auto";

                /** If a selector is provided, tooltip objects will be delegated to the
                 *  specified targets.
                 */
                selector?: string;

                /** Base HTML to use when creating the tooltip. */
                template?: string;

                /** Default title value if title attribute isn't present.
                 *  If a function is given, it will be called with its this reference set to
                 *  the element that the tooltip is attached to.
                 */
                title?: string|HTMLElement|(() => string);

                /** How tooltip is triggered - click | hover | focus | manual.
                 *  You may pass multiple triggers; separate them with a space.
                 */
                trigger?: string;
            }

            interface WorkspaceScan {
                /** An array of glob patterns to search within. */
                paths?: ReadonlyArray<string>;

                /** A function to be periodically called with the number of paths searched. */
                onPathsSearched?(pathsSearched: number): void;

                /** The number of lines before the matched line to include in the results object. */
                leadingContextLineCount?: number;

                /** The number of lines after the matched line to include in the results object. */
                trailingContextLineCount?: number;
            }
        }

        /** The structures that are passed to the user by Atom following specific API calls. */
        namespace Structures {
            interface CancellablePromise<T> extends Promise<T> {
                cancel(): void;
            }

            interface HistoryProject {
                paths: string[];
                lastOpened: Date;
            }

            interface ScandalResult {
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

            interface TestRunnerArgs {
                /** An array of paths to tests to run. Could be paths to files or directories. */
                testPaths: string[];

                /** A function that can be called to construct an instance of the atom global.
                 *  No atom global will be explicitly assigned, but you can assign one in your
                 *  runner if desired.
                 */
                buildAtomEnvironment(options: Options.BuildEnvironment): AtomEnvironment;

                /** A function that builds a default instance of the application delegate, suitable
                 *  to be passed as the applicationDelegate parameter to buildAtomEnvironment.
                 */
                buildDefaultApplicationDelegate(): object;

                /** An optional path to a log file to which test output should be logged. */
                logFile: string;

                /** A boolean indicating whether or not the tests are being run from the command
                 *  line via atom --test.
                 */
                headless: boolean;
            }

            /** This tooltip class is derived from Bootstrap 3, but modified to not require
             *  jQuery, which is an expensive dependency we want to eliminate.
             */
            interface Tooltip {
                options: Options.Tooltip;
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

            interface WindowLoadSettings {
                appVersion: string;
                atomHome: string;
                devMode: boolean;
                env: { [key: string]: string|undefined };
                profileStartup: boolean;
                resourcePath: string;
                safeMode: boolean;
            }
        }

        /** Atom global for dealing with packages, themes, menus, and the window.
         *  An instance of this class is always available as the atom global.
         */
        interface AtomEnvironment {
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
            keymaps: AtomKeymap.KeymapManager;

            /** A TooltipManager instance. */
            tooltips: TooltipManager;

            /** A NotificationManager instance. */
            notifications: NotificationManager;

            /** A Project instance. */
            project: Project;

            /** A GrammarRegistry instance. */
            grammars: FirstMate.GrammarRegistry;

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
            onDidBeep(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback when there is an unhandled error, but before
             *  the devtools pop open.
             */
            onWillThrowError(callback: (event: Events.PreventableExceptionThrown) =>
                void): EventKit.Disposable;

            /** Invoke the given callback whenever there is an unhandled error. */
            onDidThrowError(callback: (event: Events.ExceptionThrown) => void): EventKit.Disposable;

            /** Invoke the given callback as soon as the shell environment is loaded (or
             *  immediately if it was already loaded).
             */
            whenShellEnvironmentLoaded(callback: () => void): EventKit.Disposable;

            // Atom Details
            /** Returns a boolean that is true if the current window is in development mode. */
            inDevMode(): boolean;

            /** Returns a boolean that is true if the current window is in safe mode. */
            inSafeMode(): boolean;

            /** Returns a boolean that is true if the current window is running specs. */
            inSpecMode(): boolean;

            /** Get the version of the Atom application. */
            getVersion(): string;

            /** Gets the release channel of the Atom application.
             *  Returns the release channel, which can be 'dev', 'beta', or 'stable'.
             */
            getReleaseChannel(): "dev"|"beta"|"stable";

            /** Returns a boolean that is true if the current version is an official release. */
            isReleasedVersion(): boolean;

            /** Get the time taken to completely load the current window. */
            getWindowLoadTime(): number;

            /** Get the load settings for the current window. */
            getLoadSettings(): Structures.WindowLoadSettings;

            // Managing the Atom Window
            /** Open a new Atom window using the given options. */
            open(params: {
                pathsToOpen: ReadonlyArray<string>,
                newWindow: boolean,
                devMode: boolean,
                safeMode: boolean,
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

            /** A flexible way to open a dialog akin to an alert dialog.
             *  Returns the chosen button index number if the buttons option was an array.
             */
            confirm(options: {
                message: string,
                detailedMessage?: string,
                buttons?: ReadonlyArray<string>,
            }): void;

            /** A flexible way to open a dialog akin to an alert dialog.
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
            openDevTools(): Promise<undefined>;

            /** Toggle the visibility of the dev tools for the current window. */
            toggleDevTools(): Promise<undefined>;

            /** Execute code in dev tools. */
            executeJavaScriptInDevTools(code: string): void;
        }

        /** A wrapper which provides standard error/output line buffering for
         *  Node's ChildProcess.
         */
        interface BufferedProcess {
            process: NodeJS.EventEmitter;

            // Event Subscription
            /** Will call your callback when an error will be raised by the process. Usually
             *  this is due to the command not being available or not on the PATH. You can
             *  call handle() on the object passed to your callback to indicate that you
             *  have handled this error.
             */
            onWillThrowError(callback: (errorObject: { error: Error, handle(): void }) =>
                void): EventKit.Disposable;

            // Helper Methods
            /** Terminate the process. */
            kill(): void;

            /** Runs the process. */
            start(): void;
        }

        /** The static side to the BufferedProcess class. */
        interface BufferedProcessStatic {
            new (options: Options.Process): BufferedProcess;
        }

        /** Like BufferedProcess, but accepts a Node script as the command to run.
         *  This is necessary on Windows since it doesn't support shebang #! lines.
         */
        type BufferedNodeProcess = BufferedProcess;

        /** The static side to the BufferedNodeProcess class. */
        interface BufferedNodeProcessStatic {
            /** Runs the given Node script by spawning a new child process. */
            new (options: Options.NodeProcess): BufferedNodeProcess;
        }

        /** Represents the clipboard used for copying and pasting in Atom. */
        interface Clipboard {
            /** Write the given text to the clipboard. */
            write(text: string, metadata?: object): void;

            /** Read the text from the clipboard. */
            read(): string;

            /** Read the text from the clipboard and return both the text and the associated
             *  metadata.
             */
            readWithMetadata(): { text: string, metadata: object };
        }

        /** A simple color class returned from Config::get when the value at the key path is
         *  of type 'color'.
         */
        interface Color {
            /** Returns a string in the form '#abcdef'. */
            toHexString(): string;

            /** Returns a string in the form 'rgba(25, 50, 75, .9)'. */
            toRGBAString(): string;
        }

        /** Associates listener functions with commands in a context-sensitive way
         *  using CSS selectors.
         */
        interface CommandRegistry {
            /** Register a single command. */
            add(target: string|Node, commandName: string, listener: {
                didDispatch(event: AtomKeymap.Events.CommandEvent): void,
                displayName?: string,
                description?: string,
            } | ((event: AtomKeymap.Events.CommandEvent) => void)): EventKit.Disposable;

            /** Register multiple commands. */
            add(target: string|Node, commands: { [key: string]: (event:
                AtomKeymap.Events.CommandEvent) => void }): EventKit.CompositeDisposable;

            /** Find all registered commands matching a query. */
            findCommands(params: { target: Node }): Array<{
                name: string,
                displayName: string,
                description?: string,
                tags?: string[],
            }>;

            /** Simulate the dispatch of a command on a DOM node. */
            dispatch(target: Node, commandName: string): void;

            /** Invoke the given callback before dispatching a command event. */
            onWillDispatch(callback: (event: AtomKeymap.Events.CommandEvent) => void):
                EventKit.Disposable;

            /** Invoke the given callback after dispatching a command event. */
            onDidDispatch(callback: (event: AtomKeymap.Events.CommandEvent) => void):
                EventKit.Disposable;
        }

        /** Used to access all of Atom's configuration details. */
        interface Config {
            // Config Subscription
            /** Add a listener for changes to a given key path. This is different than ::onDidChange in
             *  that it will immediately call your callback with the current value of the config entry.
             */
            // tslint:disable-next-line:no-any
            observe(keyPath: string, callback: (value: any) => void): EventKit.Disposable;
            /** Add a listener for changes to a given key path. This is different than ::onDidChange in
             *  that it will immediately call your callback with the current value of the config entry.
             */
            // tslint:disable:no-any
            observe(keyPath: string, options: { scope: string[]|ScopeDescriptor },
                callback: (value: any) => void): EventKit.Disposable;
            // tslint:enable:no-any

            /** Add a listener for changes to a given key path. If keyPath is not specified, your
             *  callback will be called on changes to any key.
             */
            // tslint:disable-next-line:no-any
            onDidChange<T = any>(callback: (values: { newValue: T, oldValue: T }) => void):
                EventKit.Disposable;
            /** Add a listener for changes to a given key path. If keyPath is not specified, your
             *  callback will be called on changes to any key.
             */
            // tslint:disable-next-line:no-any
            onDidChange<T = any>(keyPath: string, callback: (values: { newValue: T,
                oldValue: T }) => void): EventKit.Disposable;
            /** Add a listener for changes to a given key path. If keyPath is not specified, your
             *  callback will be called on changes to any key.
             */
            // tslint:disable-next-line:no-any
            onDidChange<T = any>(keyPath: string, options: { scope: string[]|ScopeDescriptor },
                callback: (values: { newValue: T, oldValue: T }) => void): EventKit.Disposable;

            // Managing Settings
            /** Retrieves the setting for the given key. */
            // tslint:disable:no-any
            get(keyPath: string, options?: { sources?: string[], excludeSources?: string[],
                scope?: string[]|ScopeDescriptor }): any;
            // tslint:enable:no-any

            /** Sets the value for a configuration setting.
             *  This value is stored in Atom's internal configuration file.
             */
            // tslint:disable-next-line:no-any
            set(keyPath: string, value: any, options?: { scopeSelector?: string, source?:
                string }): void;

            /** Restore the setting at keyPath to its default value. */
            unset(keyPath: string, options?: { scopeSelector?: string, source?: string }): void;

            /** Get all of the values for the given key-path, along with their associated
             *  scope selector.
             */
            // tslint:disable:no-any
            getAll(keyPath: string, options?: { sources?: string[], excludeSources?: string[],
                scope?: ScopeDescriptor }): Array<{ scopeDescriptor: ScopeDescriptor, value: any}>;
            // tslint:enable:no-any

            /** Get an Array of all of the source Strings with which settings have been added
             *  via ::set.
             */
            getSources(): string[];

            /** Retrieve the schema for a specific key path. The schema will tell you what type
             *  the keyPath expects, and other metadata about the config option.
             */
            getSchema(keyPath: string): object|null;

            /** Get the string path to the config file being used. */
            getUserConfigPath(): string;

            /** Suppress calls to handler functions registered with ::onDidChange and ::observe
             *  for the duration of callback. After callback executes, handlers will be called
             *  once if the value for their key-path has changed.
             */
            transact(callback: () => void): void;
        }

        /** Provides a registry for commands that you'd like to appear in the context menu. */
        interface ContextMenuManager {
            /** Add context menu items scoped by CSS selectors. */
            add(itemsBySelector: { [key: string]: ReadonlyArray<Options.ContextMenu> }):
                EventKit.Disposable;
        }

        /** The Cursor class represents the little blinking line identifying where text
         *  can be inserted.
         */
        interface Cursor {
            // Event Subscription
            /** Calls your callback when the cursor has been moved. */
            onDidChangePosition(callback: (event: Events.CursorPositionChanged) => void):
                EventKit.Disposable;

            /** Calls your callback when the cursor is destroyed. */
            onDidDestroy(callback: () => void): EventKit.Disposable;

            /** Calls your callback when the cursor's visibility has changed. */
            onDidChangeVisibility(callback: (visibility: boolean) => void): EventKit.Disposable;

            // Managing Cursor Position
            /** Moves a cursor to a given screen position. */
            setScreenPosition(screenPosition: TextBuffer.PointCompatible, options?:
                { autoscroll?: boolean }): void;

            /** Returns the screen position of the cursor as a Point. */
            getScreenPosition(): TextBuffer.Point;

            /** Moves a cursor to a given buffer position. */
            setBufferPosition(bufferPosition: TextBuffer.PointCompatible, options?:
                { autoscroll?: boolean }): void;

            /** Returns the current buffer position as an Array. */
            getBufferPosition(): TextBuffer.Point;

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
            /** Returns the underlying DisplayMarker for the cursor. Useful with overlay
             *  Decorations.
             */
            getMarker(): TextBuffer.DisplayMarker;

            /** Identifies if the cursor is surrounded by whitespace.
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

            /** Returns true if this cursor has no non-whitespace characters before its
             *  current position.
             */
            hasPrecedingCharactersOnLine(): boolean;

            /** Identifies if this cursor is the last in the TextEditor.
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
            /** Returns buffer position of previous word boundary. It might be on the current
             *  word, or the previous word.
             */
            getPreviousWordBoundaryBufferPosition(options?: { wordRegex?: RegExp }):
                TextBuffer.Point;

            /** Returns buffer position of the next word boundary. It might be on the current
             *  word, or the previous word.
             */
            getNextWordBoundaryBufferPosition(options?: { wordRegex?: RegExp }):
                TextBuffer.Point;

            /** Retrieves the buffer position of where the current word starts. */
            getBeginningOfCurrentWordBufferPosition(options?: {
                wordRegex?: RegExp,
                includeNonWordCharacters?: boolean,
                allowPrevious?: boolean
            }): TextBuffer.Point;

            /** Retrieves the buffer position of where the current word ends. */
            getEndOfCurrentWordBufferPosition(options?: {
                wordRegex?: RegExp,
                includeNonWordCharacters?: boolean
            }): TextBuffer.Point;

            /** Retrieves the buffer position of where the next word starts. */
            getBeginningOfNextWordBufferPosition(options?: { wordRegex?: RegExp }):
                TextBuffer.Point;

            /** Returns the buffer Range occupied by the word located under the cursor. */
            getCurrentWordBufferRange(options?: { wordRegex?: RegExp }): TextBuffer.Range;

            /** Returns the buffer Range for the current line. */
            getCurrentLineBufferRange(options?: { includeNewline?: boolean }): TextBuffer.Range;

            /** Retrieves the range for the current paragraph.
             *  A paragraph is defined as a block of text surrounded by empty lines or comments.
             */
            getCurrentParagraphBufferRange(): TextBuffer.Range;

            /** Returns the characters preceding the cursor in the current word. */
            getCurrentWordPrefix(): string;

            // Visibility
            /** Sets whether the cursor is visible. */
            setVisible(visible: boolean): void;

            /** Returns the visibility of the cursor. */
            isVisible(): boolean;

            // Comparing to another cursor
            /** Compare this cursor's buffer position to another cursor's buffer position.
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

        /** Represents a decoration that follows a DisplayMarker. A decoration is basically
         *  a visual representation of a marker. It allows you to add CSS classes to line
         *  numbers in the gutter, lines, and add selection-line regions around marked ranges
         *  of text.
         */
        interface Decoration {
            id: number;

            // Construction and Destruction
            /** Destroy this marker decoration.
             *  You can also destroy the marker if you own it, which will destroy this decoration.
             */
            destroy(): void;

            // Event Subscription
            /** When the Decoration is updated via Decoration::setProperties. */
            onDidChangeProperties(callback: (event: Events.DecorationPropsChanged) => void):
                EventKit.Disposable;

            /** Invoke the given callback when the Decoration is destroyed. */
            onDidDestroy(callback: () => void): EventKit.Disposable;

            // Decoration Details
            /** An id unique across all Decoration objects. */
            getId(): number;

            /** Returns the marker associated with this Decoration. */
            getMarker(): TextBuffer.DisplayMarker;

            // Properties
            /** Returns the Decoration's properties. */
            getProperties(): Options.DecorationProps;

            /** Update the marker with new Properties. Allows you to change the decoration's
             *  class.
             */
            setProperties(newProperties: Options.DecorationProps): void;
        }

        interface Deserializer {
            name: string;
            deserialize(state: object): object;
        }

        /** Manages the deserializers used for serialized state. */
        interface DeserializerManager {
            /** Register the given class(es) as deserializers. */
            add(...deserializers: Deserializer[]): EventKit.Disposable;

            /** Deserialize the state and params. */
            deserialize(state: object): object|undefined;
        }

        /** A container at the edges of the editor window capable of holding items. */
        interface Dock {
            // Methods
            /** Show the dock and focus its active Pane. */
            activate(): void;

            /** Show the dock without focusing it. */
            show(): void;

            /** Hide the dock and activate the WorkspaceCenter if the dock was was previously
             *  focused.
             */
            hide(): void;

            /** Toggle the dock's visibility without changing the Workspace's active pane
             *  container.
             */
            toggle(): void;

            /** Check if the dock is visible. */
            isVisible(): boolean;

            // Event Subscription
            /** Invoke the given callback when the visibility of the dock changes. */
            onDidChangeVisible(callback: (visible: boolean) => void): EventKit.Disposable;

            /** Invoke the given callback with the current and all future visibilities of
             *  the dock.
             */
            observeVisible(callback: (visible: boolean) => void): EventKit.Disposable;

            /** Invoke the given callback with all current and future panes items in the dock. */
            observePaneItems(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane item changes.
             *
             *  Because observers are invoked synchronously, it's important not to perform any
             *  expensive operations via this method. Consider ::onDidStopChangingActivePaneItem
             *  to delay operations until after changes stop occurring.
             */
            onDidChangeActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane item stops changing. */
            onDidStopChangingActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback with the current active pane item and with all future
             *  active pane items in the dock.
             */
            observeActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane is added to the dock. */
            onDidAddPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback before a pane is destroyed in the dock. */
            onWillDestroyPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane is destroyed in the dock. */
            onDidDestroyPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback with all current and future panes in the dock. */
            observePanes(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane changes. */
            onDidChangeActivePane(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback with the current active pane and when the active
             *  pane changes.
             */
            observeActivePane(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane item is added to the dock. */
            onDidAddPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a pane item is about to be destroyed, before the user is
             *  prompted to save it.
             */
            onWillDestroyPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a pane item is destroyed. */
            onDidDestroyPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

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

        /** Represents the underlying git operations performed by Atom. */
        interface GitRepository {
            // Lifecycle
            /** Destroy this GitRepository object. */
            destroy(): void;

            /** Returns a boolean indicating if this repository has been destroyed. */
            isDestroyed(): boolean;

            // Event Subscription
            /** Invoke the given callback when this GitRepository's destroy() method is
             *  invoked.
             */
            onDidDestroy(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback when a specific file's status has changed. When
             *  a file is updated, reloaded, etc, and the status changes, this will be fired.
             */
            onDidChangeStatus(callback: (event: Events.RepoStatusChanged) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a multiple files' statuses have changed. */
            onDidChangeStatuses(callback: () => void): EventKit.Disposable;

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

            /** Returns the number of commits behind the current branch is from the its
             *  upstream remote branch. The default reference is the HEAD.
             *  @param reference The branch reference name.
             *  @param path The path in the repository to get this ifnromation for, only
             *  needed if the repository contains submodules.
             *  @return Returns the number of commits behind the current branch is from its
             *  upstream remote branch.
             */
            getAheadBehindCount(reference: string, path?: string): { ahead: number, behind: number };

            /** Get the cached ahead/behind commit counts for the current branch's
             *  upstream branch.
             */
            getCachedUpstreamAheadBehindCount(path?: string): { ahead: number, behind: number };

            /** Returns the git configuration value specified by the key. */
            getConfigValue(key: string, path?: string): string;

            /** Returns the origin url of the repository. */
            getOriginURL(path?: string): string;

            /** Returns the upstream branch for the current HEAD, or null if there is no
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
            /** Retrieves the number of lines added and removed to a path.
             *  This compares the working directory contents of the path to the HEAD version.
             */
            getDiffStats(path: string): { added: number, deleted: number };

            /** Retrieves the line diffs comparing the HEAD version of the given path
             *  and the given text.
             */
            getLineDiffs(path: string, text: string): Array<{ oldStart: number,
                newStart: number, oldLines: number, newLines: number }>;

            // Checking Out
            /** Restore the contents of a path in the working directory and index to the
             *  version at HEAD.
             */
            checkoutHead(path: string): boolean;

            /** Checks out a branch in your repository. */
            checkoutReference(reference: string, create: boolean): boolean;
        }

        /** The static side to the GitRepository class. */
        interface GitRepositoryStatic {
            /** Creates a new GitRepository instance. */
            open(path: string, options?: { refreshOnWindowFocus?: boolean }): GitRepository;

            new (path: string, options?: { refreshOnWindowFocus?: boolean, config?: Config,
                project?: Project }): GitRepository;
        }

        /** Represents a gutter within a TextEditor. */
        interface Gutter {
            // Gutter Destruction
            /** Destroys the gutter. */
            destroy(): void;

            // Event Subscription
            /** Calls your callback when the gutter's visibility changes. */
            onDidChangeVisible(callback: (gutter: Gutter) => void): EventKit.Disposable;

            /** Calls your callback when the gutter is destroyed. */
            onDidDestroy(callback: () => void): EventKit.Disposable;

            // Visibility
            /** Hide the gutter. */
            hide(): void;

            /** Show the gutter. */
            show(): void;

            /** Determine whether the gutter is visible. */
            isVisible(): boolean;

            /** Add a decoration that tracks a DisplayMarker. When the marker moves, is
             *  invalidated, or is destroyed, the decoration will be updated to reflect
             *  the marker's state.
             */
            decorateMarker(marker: TextBuffer.DisplayMarker, decorationParams:
                Options.DecorationProps): Decoration;
        }

        /** History manager for remembering which projects have been opened.
         *  An instance of this class is always available as the atom.history global.
         *  The project history is used to enable the 'Reopen Project' menu.
         */
        interface HistoryManager {
            /** Obtain a list of previously opened projects. */
            getProjects(): Structures.HistoryProject[];

            /** Clear all projects from the history.
             *  Note: This is not a privacy function - other traces will still exist, e.g.
             *  window state.
             */
            clearProjects(): void;

            /** Invoke the given callback when the list of projects changes. */
            onDidChangeProjects(callback: (args: { reloaded: boolean }) => void):
                EventKit.Disposable;
        }

        /** Represents a decoration that applies to every marker on a given layer. Created via
         *  TextEditor::decorateMarkerLayer.
         */
        interface LayerDecoration {
            /** Destroys the decoration. */
            destroy(): void;

            /** Determine whether this decoration is destroyed. */
            isDestroyed(): boolean;

            /** Get this decoration's properties. */
            getProperties(): Options.DecorationLayerProps;

            /** Set this decoration's properties. */
            setProperties(newProperties: Options.DecorationLayerProps): void;

            /** Override the decoration properties for a specific marker. */
            setPropertiesForMarker(marker: TextBuffer.DisplayMarker|TextBuffer.Marker,
                properties: Options.DecorationLayerProps): void;
        }

        /** Provides a registry for menu items that you'd like to appear in the application menu. */
        interface MenuManager {
            /** Adds the given items to the application menu. */
            add(items: ReadonlyArray<Options.Menu>): EventKit.Disposable;

            /** Refreshes the currently visible menu. */
            update(): void;
        }

        /** A notification to the user containing a message and type. */
        interface Notification {
            dismissed: boolean;
            displayed: boolean;
            timestamp: Date;

            // Event Subscription
            /** Invoke the given callback when the notification is dismissed. */
            onDidDismiss(callback: (notification: Notification) => void): EventKit.Disposable;

            /** Invoke the given callback when the notification is displayed. */
            onDidDisplay(callback: (notification: Notification) => void): EventKit.Disposable;

            // Methods
            /** Returns the Notification's type. */
            getType(): string;

            /** Returns the Notification's message. */
            getMessage(): string;

            /** Dismisses the notification, removing it from the UI. Calling this
             *  programmatically will call all callbacks added via onDidDismiss.
             */
            dismiss(): void;
        }

        /** The static side to the Notification class. */
        interface NotificationStatic {
            new (type: "warning"|"info"|"success", message: string, options?:
                Options.Notification): Notification;
            new (type: "fatal"|"error", message: string, options?: Options.ErrorNotification):
                Notification;
        }

        /** A notification manager used to create Notifications to be shown to the user. */
        interface NotificationManager {
            // Properties
            notifications: Notification[];

            // Events
            /** Invoke the given callback after a notification has been added. */
            onDidAddNotification(callback: (notification: Notification) => void):
                EventKit.Disposable;

            // Adding Notifications
            /** Add a success notification. */
            addSuccess(message: string, options?: Options.Notification): Notification;

            /** Add an informational notification. */
            addInfo(message: string, options?: Options.Notification): Notification;

            /** Add a warning notification. */
            addWarning(message: string, options?: Options.Notification): Notification;

            /** Add an error notification. */
            addError(message: string, options?: Options.ErrorNotification): Notification;

            /** Add a fatal error notification. */
            addFatalError(message: string, options?: Options.ErrorNotification): Notification;

            // Getting Notifications
            /** Get all the notifications. */
            getNotifications(): Notification[];
        }

        /** Loads and activates a package's main module and resources such as stylesheets,
         *  keymaps, grammar, editor properties, and menus.
         */
        interface Package {
            // Properties
            name: string;
            bundledPackage: boolean;
            path: string;

            // Event Subscription
            /** Invoke the given callback when all packages have been activated. */
            onDidDeactivate(callback: () => void): EventKit.Disposable;

            // Native Module Compatibility
            /** Are all native modules depended on by this package correctly compiled
             *  against the current version of Atom?
             */
            isCompatible(): boolean;

            /** Rebuild native modules in this package's dependencies for the current
             *  version of Atom.
             */
            rebuild(): Promise<{ code: number, stdout: string, stderr: string }>;

            /** If a previous rebuild failed, get the contents of stderr. */
            getBuildFailureOutput(): string|null;
        }

        /** Package manager for coordinating the lifecycle of Atom packages. */
        interface PackageManager {
            // Event Subscription
            /** Invoke the given callback when all packages have been loaded. */
            onDidLoadInitialPackages(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback when all packages have been activated. */
            onDidActivateInitialPackages(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback when a package is activated. */
            onDidActivatePackage(callback: (package: Package) => void): EventKit.Disposable;

            /** Invoke the given callback when a package is deactivated. */
            onDidDeactivatePackage(callback: (package: Package) => void): EventKit.Disposable;

            /** Invoke the given callback when a package is loaded. */
            onDidLoadPackage(callback: (package: Package) => void): EventKit.Disposable;

            /** Invoke the given callback when a package is unloaded. */
            onDidUnloadPackage(callback: (package: Package) => void): EventKit.Disposable;

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
        }

        /** A container for presenting content in the center of the workspace. */
        interface Pane {
            // Event Subscription
            /** Invoke the given callback when the pane resizes. */
            onDidChangeFlexScale(callback: (flexScale: number) => void): EventKit.Disposable;

            /** Invoke the given callback with the current and future values of ::getFlexScale. */
            observeFlexScale(callback: (flexScale: number) => void): EventKit.Disposable;

            /** Invoke the given callback when the pane is activated. */
            onDidActivate(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback before the pane is destroyed. */
            onWillDestroy(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback when the pane is destroyed. */
            onDidDestroy(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback when the value of the ::isActive property changes. */
            onDidChangeActive(callback: (active: boolean) => void): EventKit.Disposable;

            /** Invoke the given callback with the current and future values of the ::isActive
             *  property.
             */
            observeActive(callback: (active: boolean) => void): EventKit.Disposable;

            /** Invoke the given callback when an item is added to the pane. */
            onDidAddItem(callback: (event: Events.PaneListItemShifted) => void):
                EventKit.Disposable;

            /** Invoke the given callback when an item is removed from the pane. */
            onDidRemoveItem(callback: (event: Events.PaneListItemShifted) => void):
                EventKit.Disposable;

            /** Invoke the given callback before an item is removed from the pane. */
            onWillRemoveItem(callback: (event: Events.PaneListItemShifted) => void):
                EventKit.Disposable;

            /** Invoke the given callback when an item is moved within the pane. */
            onDidMoveItem(callback: (event: Events.PaneItemMoved) => void):
                EventKit.Disposable;

            /** Invoke the given callback with all current and future items. */
            observeItems(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when the value of ::getActiveItem changes. */
            onDidChangeActiveItem(callback: (activeItem: object) => void): EventKit.Disposable;

            /** Invoke the given callback when ::activateNextRecentlyUsedItem has been called,
             *  either initiating or continuing a forward MRU traversal of pane items.
             */
            onChooseNextMRUItem(callback: (nextRecentlyUsedItem: object) => void):
                EventKit.Disposable;

            /** Invoke the given callback when ::activatePreviousRecentlyUsedItem has been called,
             *  either initiating or continuing a reverse MRU traversal of pane items.
             */
            onChooseLastMRUItem(callback: (previousRecentlyUsedItem: object) => void):
                EventKit.Disposable;

            /** Invoke the given callback when ::moveActiveItemToTopOfStack has been called,
             *  terminating an MRU traversal of pane items and moving the current active item
             *  to the top of the stack. Typically bound to a modifier (e.g. CTRL) key up event.
             */
            onDoneChoosingMRUItem(callback: () => void): EventKit.Disposable;

            /** Invoke the given callback with the current and future values of ::getActiveItem. */
            observeActiveItem(callback: (activeItem: object) => void): EventKit.Disposable;

            /** Invoke the given callback before items are destroyed. */
            onWillDestroyItem(callback: (event: Events.PaneListItemShifted) => void):
                EventKit.Disposable;

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
            destroyActiveItem(): void;

            /** Destroy the given item. */
            destroyItem(item: object, force?: boolean): Promise<boolean>;

            /** Destroy all items. */
            destroyItems(): void;

            /** Destroy all items except for the active item. */
            destroyInactiveItems(): void;

            /** Save the active item. */
            saveActiveItem<T = void>(nextAction?: (error?: Error) => T):
                Promise<T>|undefined;

            /** Prompt the user for a location and save the active item with the path
             *  they select.
             */
            saveActiveItemAs<T = void>(nextAction?: (error?: Error) => T):
                Promise<T>|undefined;

            /** Save the given item. */
            saveItem<T = void>(item: object, nextAction?: (error?: Error) => T):
                Promise<T>|undefined;

            /** Prompt the user for a location and save the active item with the path
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

        /** A container representing a panel on the edges of the editor window. You
         *  should not create a Panel directly, instead use Workspace::addTopPanel and
         *  friends to add panels.
         */
        interface Panel {
            visible: boolean;

            // Construction and Destruction
            /** Destroy and remove this panel from the UI. */
            destroy(): void;

            // Event Subscription
            /** Invoke the given callback when the pane hidden or shown. */
            onDidChangeVisible(callback: (visible: boolean) => void): EventKit.Disposable;

            /** Invoke the given callback when the pane is destroyed. */
            onDidDestroy(callback: (panel: Panel) => void): EventKit.Disposable;

            // Panel Details
            /** Returns the panel's item. */
            getItem(): object;

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
        interface PathWatcher extends EventKit.DisposableLike {
            /** Return a Promise that will resolve when the underlying native watcher is
             *  ready to begin sending events.
             */
            getStartPromise(): Promise<void>;

            /** Invokes a function when any errors related to this watcher are reported. */
            onDidError(callback: (error: Error) => void): EventKit.Disposable;

            /** Unsubscribe all subscribers from filesystem events. Native resources will be
             *  release asynchronously, but this watcher will stop broadcasting events
             *  immediately.
             */
            dispose(): void;
        }

        /** Represents a project that's opened in Atom. */
        interface Project {
            // Event Subscription
            /** Invoke the given callback when the project paths change. */
            onDidChangePaths(callback: (projectPaths: string[]) => void): EventKit.Disposable;

            /** Invoke the given callback when a text buffer is added to the project. */
            onDidAddBuffer(callback: (buffer: TextBuffer.TextBuffer) => void): EventKit.Disposable;

            /** Invoke the given callback with all current and future text buffers in
             *  the project.
             */
            observeBuffers(callback: (buffer: TextBuffer.TextBuffer) => void): EventKit.Disposable;

            /** Invoke a callback when a filesystem change occurs within any open project path. */
            onDidChangeFiles(callback: (events: Events.FilesystemChange) => void):
                EventKit.Disposable;

            // Accessing the Git Repository
            /** Get an Array of GitRepositorys associated with the project's directories. */
            getRepositories(): GitRepository[];

            /** Get the repository for a given directory asynchronously. */
            repositoryForDirectory(directory: PathWatcher.Directory): Promise<GitRepository|null>;

            // Managing Paths
            /** Get an Array of strings containing the paths of the project's directories. */
            getPaths(): string[];

            /** Set the paths of the project's directories. */
            setPaths(projectPaths: string[]): void;

            /** Add a path to the project's list of root paths. */
            addPath(projectPath: string): void;

            /** Access a promise that resolves when the filesystem watcher associated with a
             *  project root directory is ready to begin receiving events.
             */
            getWatcherPromise(projectPath: string): Promise<PathWatcher>;

            /** Remove a path from the project's list of root paths. */
            removePath(projectPath: string): void;

            /** Get an Array of Directorys associated with this project. */
            getDirectories(): PathWatcher.Directory[];

            /** Get the relative path from the project directory to the given path. */
            relativize(fullPath: string): string;

            /** Get the path to the project directory that contains the given path, and
             *  the relative path from that project directory to the given path.
             */
            relativizePath(fullPath: string): [string|null, string];

            /** Determines whether the given path (real or symbolic) is inside the
             *  project's directory.
             */
            contains(pathToCheck: string): boolean;
        }

        /** Wraps an Array of Strings. The Array describes a path from the root of the
         *  syntax tree to a token including all scope names for the entire path.
         */
        interface ScopeDescriptor {
            scopes: string[];

            /** Returns all scopes for this descriptor. */
            getScopesArray(): string[];
        }

        /** Represents a selection in the TextEditor. */
        interface Selection {
            // Event Subscription
            /** Calls your callback when the selection was moved. */
            onDidChangeRange(callback: (event: Events.SelectionChanged) => void):
                EventKit.Disposable;

            /** Calls your callback when the selection was destroyed. */
            onDidDestroy(callback: () => void): EventKit.Disposable;

            // Managing the selection range
            /** Returns the screen Range for the selection. */
            getScreenRange(): TextBuffer.Range;

            /** Modifies the screen range for the selection. */
            setScreenRange(screenRange: TextBuffer.RangeCompatible, options?:
                { preserveFolds?: boolean, autoscroll?: boolean }): void;

            /** Returns the buffer Range for the selection. */
            getBufferRange(): TextBuffer.Range;

            /** Modifies the buffer Range for the selection. */
            setBufferRange(bufferRange: TextBuffer.RangeCompatible, options?:
                { preserveFolds?: boolean, autoscroll?: boolean }): void;

            /** Returns the starting and ending buffer rows the selection is highlighting. */
            getBufferRowRange(): [number, number];

            // Info about the selection
            /** Determines if the selection contains anything. */
            isEmpty(): boolean;

            /** Determines if the ending position of a marker is greater than the starting position.
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
            intersectsBufferRange(bufferRange: TextBuffer.RangeLike): boolean;

            /** Identifies if a selection intersects with another selection. */
            intersectsWith(otherSelection: Selection): boolean;

            // Modifying the selected range
            /** Clears the selection, moving the marker to the head. */
            clear(options?: { autoscroll?: boolean }): void;

            /** Selects the text from the current cursor position to a given screen position. */
            selectToScreenPosition(position: TextBuffer.PointCompatible): void;

            /** Selects the text from the current cursor position to a given buffer position. */
            selectToBufferPosition(position: TextBuffer.PointCompatible): void;

            /** Selects the text one position right of the cursor. */
            selectRight(columnCount?: number): void;

            /** Selects the text one position left of the cursor. */
            selectLeft(columnCount?: number): void;

            /** Selects all the text one position above the cursor. */
            selectUp(rowCount?: number): void;

            /** Selects all the text one position below the cursor. */
            selectDown(rowCount?: number): void;

            /** Selects all the text from the current cursor position to the top of the
             *  buffer.
             */
            selectToTop(): void;

            /** Selects all the text from the current cursor position to the bottom of
             *  the buffer.
             */
            selectToBottom(): void;

            /** Selects all the text in the buffer. */
            selectAll(): void;

            /** Selects all the text from the current cursor position to the beginning of
             *  the line.
             */
            selectToBeginningOfLine(): void;

            /** Selects all the text from the current cursor position to the first character
             *  of the line.
             */
            selectToFirstCharacterOfLine(): void;

            /** Selects all the text from the current cursor position to the end of the
             *  screen line.
             */
            selectToEndOfLine(): void;

            /** Selects all the text from the current cursor position to the end of the
             *  buffer line.
             */
            selectToEndOfBufferLine(): void;

            /** Selects all the text from the current cursor position to the beginning
             *  of the word.
             */
            selectToBeginningOfWord(): void;

            /** Selects all the text from the current cursor position to the end of the word. */
            selectToEndOfWord(): void;

            /** Selects all the text from the current cursor position to the beginning of
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

            /** Selects all the text from the current cursor position to the beginning of
             *  the next paragraph.
             */
            selectToBeginningOfNextParagraph(): void;

            /** Selects all the text from the current cursor position to the beginning of
             *  the previous paragraph.
             */
            selectToBeginningOfPreviousParagraph(): void;

            /** Modifies the selection to encompass the current word. */
            selectWord(): void;

            /** Expands the newest selection to include the entire word on which the
             *  cursors rests.
             */
            expandOverWord(): void;

            /** Selects an entire line in the buffer. */
            selectLine(row: number): void;

            /** Expands the newest selection to include the entire line on which the cursor
             *  currently rests.
             *  It also includes the newline character.
             */
            expandOverLine(): void;

            // Modifying the selected text
            /** Replaces text at the current selection. */
            insertText(text: string, options?: Options.TextInsertion): void;

            /** Removes the first character before the selection if the selection is empty
             *  otherwise it deletes the selection.
             */
            backspace(): void;

            /** Removes the selection or, if nothing is selected, then all characters from
             *  the start of the selection back to the previous word boundary.
             */
            deleteToPreviousWordBoundary(): void;

            /** Removes the selection or, if nothing is selected, then all characters from
             *  the start of the selection up to the next word boundary.
             */
            deleteToNextWordBoundary(): void;

            /** Removes from the start of the selection to the beginning of the current
             *  word if the selection is empty otherwise it deletes the selection.
             */
            deleteToBeginningOfWord(): void;

            /** Removes from the beginning of the line which the selection begins on all
             *  the way through to the end of the selection.
             */
            deleteToBeginningOfLine(): void;

            /** Removes the selection or the next character after the start of the selection
             *  if the selection is empty.
             */
            delete(): void;

            /** If the selection is empty, removes all text from the cursor to the end of
             *  the line. If the cursor is already at the end of the line, it removes the following
             *  newline. If the selection isn't empty, only deletes the contents of the selection.
             */
            deleteToEndOfLine(): void;

            /** Removes the selection or all characters from the start of the selection to
             *  the end of the current word if nothing is selected.
             */
            deleteToEndOfWord(): void;

            /** Removes the selection or all characters from the start of the selection to
             *  the end of the current word if nothing is selected.
             */
            deleteToBeginningOfSubword(): void;

            /** Removes the selection or all characters from the start of the selection to
             *  the end of the current word if nothing is selected.
             */
            deleteToEndOfSubword(): void;

            /** Removes only the selected text. */
            deleteSelectedText(): void;

            /** Removes the line at the beginning of the selection if the selection is empty
             *  unless the selection spans multiple lines in which case all lines are removed.
             */
            deleteLine(): void;

            /** Joins the current line with the one below it. Lines will be separated by a single space.
             *  If there selection spans more than one line, all the lines are joined together.
             */
            joinLines(): void;

            /** Removes one level of indent from the currently selected rows. */
            outdentSelectedRows(): void;

            /** Sets the indentation level of all selected rows to values suggested by the
             *  relevant grammars.
             */
            autoIndentSelectedRows(): void;

            /** Wraps the selected lines in comments if they aren't currently part of a comment.
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

            /** Combines the given selection into this selection and then destroys the
             *  given selection.
             */
            merge(otherSelection: Selection, options?: { preserveFolds?: boolean,
                autoscroll?: boolean }): void;

            // Comparing to other selections
            /** Compare this selection's buffer range to another selection's buffer range.
             *  See Range::compare for more details.
             */
            compare(otherSelection: Selection): number;
        }

        /** A singleton instance of this class available via atom.styles, which you can
         *  use to globally query and observe the set of active style sheets.
         */
        interface StyleManager {
            // Event Subscription
            /** Invoke callback for all current and future style elements. */
            observeStyleElements(callback: (styleElement: Events.StyleElementObserved) =>
                void): EventKit.Disposable;

            /** Invoke callback when a style element is added. */
            onDidAddStyleElement(callback: (styleElement: Events.StyleElementObserved) =>
                void): EventKit.Disposable;

            /** Invoke callback when a style element is removed. */
            onDidRemoveStyleElement(callback: (styleElement: HTMLStyleElement) => void):
                EventKit.Disposable;

            /** Invoke callback when an existing style element is updated. */
            onDidUpdateStyleElement(callback: (styleElement: Events.StyleElementObserved) =>
                void): EventKit.Disposable;

            // Reading Style Elements
            /** Get all loaded style elements. */
            getStyleElements(): HTMLStyleElement[];

            // Paths
            /** Get the path of the user style sheet in ~/.atom. */
            getUserStyleSheetPath(): string;
        }

        /** Run a node script in a separate process. */
        interface Task {
            // NOTE: this is actually the best we can do here with the REST parameter
            // for this appearing in the beginning of the parameter list, which isn't
            // aligned with the ES6 spec.
            /** Starts the task.
             *  Throws an error if this task has already been terminated or if sending a
             *  message to the child process fails.
             */
            // tslint:disable-next-line:no-any
            start(...args: any[]): void;

            /** Send message to the task.
             *  Throws an error if this task has already been terminated or if sending a
             *  message to the child process fails.
             */
            send(message: string): void;

            /** Call a function when an event is emitted by the child process. */
            // tslint:disable-next-line:no-any
            on(eventName: string, callback: (param: any) => void): EventKit.Disposable;

            /** Forcefully stop the running task.
             *  No more events are emitted once this method is called.
             */
            terminate(): void;

            /** Cancel the running task and emit an event if it was canceled. */
            cancel(): boolean;
        }

        /** The static side to the Task class. */
        interface TaskStatic {
            // NOTE: this is actually the best we can do here with the REST parameter for
            // this appearing in the middle of the parameter list, which isn't aligned with
            // the ES6 spec. Maybe when they rewrite it in JavaScript this will change.
            /** A helper method to easily launch and run a task once. */
            // tslint:disable-next-line:no-any
            once(taskPath: string, ...args: any[]): Task;

            /** Creates a task. You should probably use .once */
            new (taskPath: string): Task;
        }

        /** An interface which all custom test runners should implement. */
        type TestRunner = (params: Structures.TestRunnerArgs) => Promise<number>;

        /** This class represents all essential editing state for a single TextBuffer,
         *  including cursor and selection positions, folds, and soft wraps.
         */
        interface TextEditor {
            id: number;
            buffer: TextBuffer.TextBuffer;
            element: HTMLElement;

            // Event Subscription
            /** Calls your callback when the buffer's title has changed. */
            onDidChangeTitle(callback: (title: string) => void): EventKit.Disposable;

            /** Calls your callback when the buffer's path, and therefore title, has changed. */
            onDidChangePath(callback: (path: string) => void): EventKit.Disposable;

            /** Invoke the given callback synchronously when the content of the buffer
             *  changes.
             */
            onDidChange(callback: (event: Events.EditorChanged[]) => void): EventKit.Disposable;

            /** Invoke callback when the buffer's contents change. It is emit
             *  asynchronously 300ms after the last buffer change. This is a good place
             *  to handle changes to the buffer without compromising typing performance.
             */
            onDidStopChanging(callback: (event: TextBuffer.Events.BufferStoppedChanging) => void):
                EventKit.Disposable;

            /** Calls your callback when a Cursor is moved. If there are multiple cursors,
             *  your callback will be called for each cursor.
             */
            onDidChangeCursorPosition(callback: (event: Events.CursorPositionChanged) => void):
                EventKit.Disposable;

            /** Calls your callback when a selection's screen range changes. */
            onDidChangeSelectionRange(callback: (event: Events.SelectionChanged) => void):
                EventKit.Disposable;

            /** Invoke the given callback after the buffer is saved to disk. */
            onDidSave(callback: (event: { path: string }) => void): EventKit.Disposable;

            /** Invoke the given callback when the editor is destroyed. */
            onDidDestroy(callback: () => void): EventKit.Disposable;

            /** Retrieves the current TextBuffer. */
            getBuffer(): TextBuffer.TextBuffer;

            /** Calls your callback when a Gutter is added to the editor. Immediately calls
             *  your callback for each existing gutter.
             */
            observeGutters(callback: (gutter: Gutter) => void): EventKit.Disposable;

            /** Calls your callback when a Gutter is added to the editor. */
            onDidAddGutter(callback: (gutter: Gutter) => void): EventKit.Disposable;

            /** Calls your callback when a Gutter is removed from the editor. */
            onDidRemoveGutter(callback: (name: string) => void): EventKit.Disposable;

            /** Calls your callback when soft wrap was enabled or disabled. */
            onDidChangeSoftWrapped(callback: (softWrapped: boolean) => void): EventKit.Disposable;

            /** Calls your callback when the buffer's encoding has changed. */
            onDidChangeEncoding(callback: (encoding: string) => void): EventKit.Disposable;

            /** Calls your callback when the grammar that interprets and colorizes the text
             *  has been changed. Immediately calls your callback with the current grammar.
             */
            observeGrammar(callback: (grammar: FirstMate.Grammar) => void): EventKit.Disposable;

            /** Calls your callback when the grammar that interprets and colorizes the text
             *  has been changed.
             */
            onDidChangeGrammar(callback: (grammar: FirstMate.Grammar) => void): EventKit.Disposable;

            /** Calls your callback when the result of ::isModified changes. */
            onDidChangeModified(callback: (modified: boolean) => void): EventKit.Disposable;

            /** Calls your callback when the buffer's underlying file changes on disk at a
             *  moment when the result of ::isModified is true.
             */
            onDidConflict(callback: () => void): EventKit.Disposable;

            /** Calls your callback before text has been inserted. */
            onWillInsertText(callback: (event: { text: string, cancel(): void }) => void):
                EventKit.Disposable;

            /** Calls your callback after text has been inserted. */
            onDidInsertText(callback: (event: { text: string }) => void): EventKit.Disposable;

            /** Calls your callback when a Cursor is added to the editor. Immediately calls
             *  your callback for each existing cursor.
             */
            observeCursors(callback: (cursor: Cursor) => void): EventKit.Disposable;

            /** Calls your callback when a Cursor is added to the editor. */
            onDidAddCursor(callback: (cursor: Cursor) => void): EventKit.Disposable;

            /** Calls your callback when a Cursor is removed from the editor. */
            onDidRemoveCursor(callback: (cursor: Cursor) => void): EventKit.Disposable;

            /** Calls your callback when a Selection is added to the editor. Immediately
             *  calls your callback for each existing selection.
             */
            observeSelections(callback: (selection: Selection) => void): EventKit.Disposable;

            /** Calls your callback when a Selection is added to the editor. */
            onDidAddSelection(callback: (selection: Selection) => void): EventKit.Disposable;

            /** Calls your callback when a Selection is removed from the editor. */
            onDidRemoveSelection(callback: (selection: Selection) => void): EventKit.Disposable;

            /** Calls your callback with each Decoration added to the editor. Calls your
             *  callback immediately for any existing decorations.
             */
            observeDecorations(callback: (decoration: Decoration) => void): EventKit.Disposable;

            /** Calls your callback when a Decoration is added to the editor. */
            onDidAddDecoration(callback: (decoration: Decoration) => void): EventKit.Disposable;

            /** Calls your callback when a Decoration is removed from the editor. */
            onDidRemoveDecoration(callback: (decoration: Decoration) => void): EventKit.Disposable;

            /** Calls your callback when the placeholder text is changed. */
            onDidChangePlaceholderText(callback: (placeholderText: string) => void):
                EventKit.Disposable;

            // File Details
            /** Get the editor's title for display in other parts of the UI such as the tabs.
             *  If the editor's buffer is saved, its title is the file name. If it is unsaved,
             *  its title is "untitled".
             */
            getTitle(): string;

            /** Get unique title for display in other parts of the UI, such as the window title.
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
            /** Saves the editor's text buffer.
             *  See TextBuffer::save for more details.
             */
            save(): Promise<void>;

            /** Saves the editor's text buffer as the given path.
             *  See TextBuffer::saveAs for more details.
             */
            saveAs(filePath: string): Promise<void>;

            // Reading Text
            /** Returns a string representing the entire contents of the editor. */
            getText(): string;

            /** Get the text in the given range in buffer coordinates. */
            getTextInBufferRange(range: TextBuffer.RangeCompatible): string;

            /** Returns a number representing the number of lines in the buffer. */
            getLineCount(): number;

            /** Returns a number representing the number of screen lines in the editor.
             *  This accounts for folds.
             */
            getScreenLineCount(): number;

            /** Returns a number representing the last zero-indexed buffer row number of
             *  the editor.
             */
            getLastBufferRow(): number;

            /** Returns a number representing the last zero-indexed screen row number of
             *  the editor.
             */
            getLastScreenRow(): number;

            /** Returns a string representing the contents of the line at the given
             *  buffer row.
             */
            lineTextForBufferRow(bufferRow: number): string;

            /** Returns a string representing the contents of the line at the given
             *  screen row.
             */
            lineTextForScreenRow(screenRow: number): string;

            /** Get the range of the paragraph surrounding the most recently added cursor. */
            getCurrentParagraphBufferRange(): TextBuffer.Range;

            // Mutating Text
            /** Replaces the entire contents of the buffer with the given string. */
            setText(text: string): void;

            /** Set the text in the given Range in buffer coordinates. */
            setTextInBufferRange(range: TextBuffer.RangeCompatible, text: string, options?:
                { normalizeLineEndings?: boolean, undo?: "skip" }): void;

            /* For each selection, replace the selected text with the given text. */
            insertText(text: string, options?: { select?: boolean, autoIndent?: boolean,
                autoIndentNewline?: boolean, autoDecreaseIndent?: boolean,
                normalizeLineEndings?: boolean, undo?: "skip" }): TextBuffer.Range|boolean;

            /** For each selection, replace the selected text with a newline. */
            insertNewline(): void;

            /** For each selection, if the selection is empty, delete the character following
             *  the cursor. Otherwise delete the selected text.
             */
            delete(): void;

            /** For each selection, if the selection is empty, delete the character preceding
             *  the cursor. Otherwise delete the selected text.
             */
            backspace(): void;

            /** Mutate the text of all the selections in a single transaction.
             *  All the changes made inside the given function can be reverted with a single
             *  call to ::undo.
             */
            mutateSelectedText(fn: (selection: Selection, index: number) => void): void;

            /** For each selection, transpose the selected text.
             *  If the selection is empty, the characters preceding and following the cursor
             *  are swapped. Otherwise, the selected characters are reversed.
             */
            transpose(): void;

            /** Convert the selected text to upper case.
             *  For each selection, if the selection is empty, converts the containing word
             *  to upper case. Otherwise convert the selected text to upper case.
             */
            upperCase(): void;

            /** Convert the selected text to lower case.
             *  For each selection, if the selection is empty, converts the containing word
             *  to upper case. Otherwise convert the selected text to upper case.
             */
            lowerCase(): void;

            /** Toggle line comments for rows intersecting selections.
             *  If the current grammar doesn't support comments, does nothing.
             */
            toggleLineCommentsInSelection(): void;

            /** For each cursor, insert a newline at beginning the following line. */
            insertNewlineBelow(): void;

            /** For each cursor, insert a newline at the end of the preceding line. */
            insertNewlineAbove(): void;

            /** For each selection, if the selection is empty, delete all characters of the
             *  containing word that precede the cursor. Otherwise delete the selected text.
             */
            deleteToBeginningOfWord(): void;

            /** Similar to ::deleteToBeginningOfWord, but deletes only back to the previous
             *  word boundary.
             */
            deleteToPreviousWordBoundary(): void;

            /** Similar to ::deleteToEndOfWord, but deletes only up to the next word boundary. */
            deleteToNextWordBoundary(): void;

            /** For each selection, if the selection is empty, delete all characters of the
             *  containing subword following the cursor. Otherwise delete the selected text.
             */
            deleteToBeginningOfSubword(): void;

            /** For each selection, if the selection is empty, delete all characters of the
             *  containing subword following the cursor. Otherwise delete the selected text.
             */
            deleteToEndOfSubword(): void;

            /** For each selection, if the selection is empty, delete all characters of the
             *  containing line that precede the cursor. Otherwise delete the selected text.
             */
            deleteToBeginningOfLine(): void;

            /** For each selection, if the selection is not empty, deletes the selection
             *  otherwise, deletes all characters of the containing line following the cursor.
             *  If the cursor is already at the end of the line, deletes the following newline.
             */
            deleteToEndOfLine(): void;

            /** For each selection, if the selection is empty, delete all characters of the
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

            /** Batch multiple operations as a single undo/redo step.
             *  Any group of operations that are logically grouped from the perspective of undoing
             *  and redoing should be performed in a transaction. If you want to abort the transaction,
             *  call ::abortTransaction to terminate the function's execution and revert any changes
             *  performed up to the abortion.
             */
            transact(fn: () => void): void;
            /** Batch multiple operations as a single undo/redo step.
             *  Any group of operations that are logically grouped from the perspective of undoing
             *  and redoing should be performed in a transaction. If you want to abort the transaction,
             *  call ::abortTransaction to terminate the function's execution and revert any changes
             *  performed up to the abortion.
             */
            transact(groupingInterval: number, fn: () => void): void;

            /** Abort an open transaction, undoing any operations performed so far within the
             *  transaction.
             */
            abortTransaction(): void;

            /** Create a pointer to the current state of the buffer for use with ::revertToCheckpoint
             *  and ::groupChangesSinceCheckpoint.
             */
            createCheckpoint(): number;

            /** Revert the buffer to the state it was in when the given checkpoint was created.
             *  The redo stack will be empty following this operation, so changes since the checkpoint
             *  will be lost. If the given checkpoint is no longer present in the undo history, no
             *  changes will be made to the buffer and this method will return false.
             */
            revertToCheckpoint(checkpoint: number): boolean;

            /** Group all changes since the given checkpoint into a single transaction for purposes
             *  of undo/redo.
             *  If the given checkpoint is no longer present in the undo history, no grouping will be
             *  performed and this method will return false.
             */
            groupChangesSinceCheckpoint(checkpoint: number): boolean;

            // TextEditor Coordinates
            /** Convert a position in buffer-coordinates to screen-coordinates. */
            screenPositionForBufferPosition(bufferPosition: TextBuffer.PointCompatible, options?:
                { clipDirection?: "backward"|"forward"|"closest"}): TextBuffer.Point;

            /** Convert a position in screen-coordinates to buffer-coordinates. */
            bufferPositionForScreenPosition(bufferPosition: TextBuffer.PointCompatible, options?:
                { clipDirection?: "backward"|"forward"|"closest"}): TextBuffer.Point;

            /** Convert a range in buffer-coordinates to screen-coordinates. */
            screenRangeForBufferRange(bufferRange: TextBuffer.RangeCompatible): TextBuffer.Range;

            /** Convert a range in screen-coordinates to buffer-coordinates. */
            bufferRangeForScreenRange(screenRange: TextBuffer.RangeCompatible): TextBuffer.Range;

            /** Clip the given Point to a valid position in the buffer. */
            clipBufferPosition(bufferPosition: TextBuffer.PointCompatible): TextBuffer.Point;

            /** Clip the start and end of the given range to valid positions in the buffer.
             *  See ::clipBufferPosition for more information.
             */
            clipBufferRange(range: TextBuffer.RangeCompatible): TextBuffer.Range;

            /** Clip the given Point to a valid position on screen. */
            clipScreenPosition(screenPosition: TextBuffer.PointCompatible, options?:
                { clipDirection?: "backward"|"forward"|"closest"}): TextBuffer.Point;

            /** Clip the start and end of the given range to valid positions on screen.
             *  See ::clipScreenPosition for more information.
             */
            clipScreenRange(range: TextBuffer.RangeCompatible, options?: { clipDirection?:
                "backward"|"forward"|"closest"}): TextBuffer.Range;

            // Decorations
            /** Add a decoration that tracks a DisplayMarker. When the marker moves, is
             *  invalidated, or is destroyed, the decoration will be updated to reflect
             *  the marker's state.
             */
            decorateMarker(marker: TextBuffer.DisplayMarker, decorationParams: Options.DecorationProps):
                Decoration;

            /** Add a decoration to every marker in the given marker layer. Can be used to
             *  decorate a large number of markers without having to create and manage many
             *  individual decorations.
             */
            decorateMarkerLayer(markerLayer: TextBuffer.MarkerLayer|TextBuffer.DisplayMarkerLayer,
                decorationParams: Options.DecorationLayerProps): LayerDecoration;

            /** Get all decorations. */
            getDecorations(propertyFilter?: Options.DecorationProps): Decoration[];

            /** Get all decorations of type 'line'. */
            getLineDecorations(propertyFilter?: Options.DecorationProps): Decoration[];

            /** Get all decorations of type 'line-number'. */
            getLineNumberDecorations(propertyFilter?: Options.DecorationProps): Decoration[];

            /** Get all decorations of type 'highlight'. */
            getHighlightDecorations(propertyFilter?: Options.DecorationProps): Decoration[];

            /** Get all decorations of type 'overlay'. */
            getOverlayDecorations(propertyFilter?: Options.DecorationProps): Decoration[];

            // Markers
            /** Create a marker on the default marker layer with the given range in buffer coordinates.
             *  This marker will maintain its logical location as the buffer is changed, so if you mark
             *  a particular word, the marker will remain over that word even if the word's location
             *  in the buffer changes.
             */
            markBufferRange(range: TextBuffer.RangeCompatible, properties?: { maintainHistory?:
                boolean, reversed?: boolean, invalidate?: "never"|"surround"|"overlap"|"inside"
                |"touch" }): TextBuffer.DisplayMarker;

            /** Create a marker on the default marker layer with the given range in screen coordinates.
             *  This marker will maintain its logical location as the buffer is changed, so if you mark
             *  a particular word, the marker will remain over that word even if the word's location in
             *  the buffer changes.
             */
            markScreenRange(range: TextBuffer.RangeCompatible, properties?: { maintainHistory?:
                boolean, reversed?: boolean, invalidate?: "never"|"surround"|"overlap"|"inside"
                |"touch" }): TextBuffer.DisplayMarker;

            /** Create a marker on the default marker layer with the given buffer position and no tail.
             *  To group multiple markers together in their own private layer, see ::addMarkerLayer.
             */
            markBufferPosition(bufferPosition: TextBuffer.PointCompatible, options?:
                { invalidate?: "never"|"surround"|"overlap"|"inside"|"touch" }):
                TextBuffer.DisplayMarker;

            /** Create a marker on the default marker layer with the given screen position and no tail.
             *  To group multiple markers together in their own private layer, see ::addMarkerLayer.
             */
            markScreenPosition(screenPosition: TextBuffer.PointCompatible, options?:
                { invalidate?: "never"|"surround"|"overlap"|"inside"|"touch", clipDirection?:
                "backward"|"forward"|"closest" }): TextBuffer.DisplayMarker;

            /** Find all DisplayMarkers on the default marker layer that match the given properties.
             *
             *  This method finds markers based on the given properties. Markers can be associated
             *  with custom properties that will be compared with basic equality. In addition, there
             *  are several special properties that will be compared with the range of the markers
             *  rather than their properties.
             */
            findMarkers(properties: TextBuffer.Options.FindDisplayMarker): TextBuffer.DisplayMarker[];

            /** Create a marker layer to group related markers. */
            addMarkerLayer(options?: {
                maintainHistory?: boolean,
                persistent?: boolean,
            }): TextBuffer.DisplayMarkerLayer;

            /** Get a DisplayMarkerLayer by id. */
            getMarkerLayer(id: number): TextBuffer.DisplayMarkerLayer|undefined;

            /** Get the default DisplayMarkerLayer.
             *  All marker APIs not tied to an explicit layer interact with this default layer.
             */
            getDefaultMarkerLayer(): TextBuffer.DisplayMarkerLayer;

            /** Get the DisplayMarker on the default layer for the given marker id. */
            getMarker(id: number): TextBuffer.DisplayMarker;

            /** Get all DisplayMarkers on the default marker layer. Consider using ::findMarkers. */
            getMarkers(): TextBuffer.DisplayMarker[];

            /** Get the number of markers in the default marker layer. */
            getMarkerCount(): number;

            // Cursors
            /** Get the position of the most recently added cursor in buffer coordinates. */
            getCursorBufferPosition(): TextBuffer.Point;

            /** Get the position of all the cursor positions in buffer coordinates. */
            getCursorBufferPositions(): TextBuffer.Point[];

            /** Move the cursor to the given position in buffer coordinates.
             *  If there are multiple cursors, they will be consolidated to a single cursor.
             */
            setCursorBufferPosition(position: TextBuffer.PointCompatible, options?:
                { autoscroll?: boolean }): void;

            /** Get a Cursor at given screen coordinates Point. */
            getCursorAtScreenPosition(position: TextBuffer.PointCompatible): Cursor|undefined;

            /** Get the position of the most recently added cursor in screen coordinates. */
            getCursorScreenPosition(): TextBuffer.Point;

            /** Get the position of all the cursor positions in screen coordinates. */
            getCursorScreenPositions(): TextBuffer.Point[];

            /** Move the cursor to the given position in screen coordinates.
             *  If there are multiple cursors, they will be consolidated to a single cursor.
             */
            setCursorScreenPosition(position: TextBuffer.PointCompatible, options?:
                { autoscroll?: boolean }): void;

            /** Add a cursor at the given position in buffer coordinates. */
            addCursorAtBufferPosition(bufferPosition: TextBuffer.PointCompatible): Cursor;

            /** Add a cursor at the position in screen coordinates. */
            addCursorAtScreenPosition(screenPosition: TextBuffer.PointCompatible): Cursor;

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

            /** Move every cursor to the top of the buffer.
             *  If there are multiple cursors, they will be merged into a single cursor.
             */
            moveToTop(): void;

            /** Move every cursor to the bottom of the buffer.
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

            /** Get all Cursorss, ordered by their position in the buffer instead of the
             *  order in which they were added.
             */
            getCursorsOrderedByBufferPosition(): Cursor[];

            // Selections
            /** Get the selected text of the most recently added selection. */
            getSelectedText(): string;

            /** Get the Range of the most recently added selection in buffer coordinates. */
            getSelectedBufferRange(): TextBuffer.Range;

            /** Get the Ranges of all selections in buffer coordinates.
             *  The ranges are sorted by when the selections were added. Most recent at the end.
             */
            getSelectedBufferRanges(): TextBuffer.Range[];

            /** Set the selected range in buffer coordinates. If there are multiple selections,
             *  they are reduced to a single selection with the given range.
             */
            setSelectedBufferRange(bufferRange: TextBuffer.RangeCompatible, options?:
                { reversed?: boolean, preserveFolds?: boolean}): void;

            /** Set the selected ranges in buffer coordinates. If there are multiple selections,
             *  they are replaced by new selections with the given ranges.
             */
            setSelectedBufferRanges(bufferRanges: ReadonlyArray<TextBuffer.RangeCompatible>,
                options?: { reversed?: boolean, preserveFolds?: boolean}): void;

            /** Get the Range of the most recently added selection in screen coordinates. */
            getSelectedScreenRange(): TextBuffer.Range;

            /** Get the Ranges of all selections in screen coordinates.
             *  The ranges are sorted by when the selections were added. Most recent at the end.
             */
            getSelectedScreenRanges(): TextBuffer.Range[];

            /** Set the selected range in screen coordinates. If there are multiple selections,
             *  they are reduced to a single selection with the given range.
             */
            setSelectedScreenRange(screenRange: TextBuffer.RangeCompatible, options?:
                { reversed?: boolean }): void;

            /** Set the selected ranges in screen coordinates. If there are multiple selections,
             *  they are replaced by new selections with the given ranges.
             */
            setSelectedScreenRanges(screenRanges: ReadonlyArray<TextBuffer.RangeCompatible>,
                options?: { reversed?: boolean }): void;

            /** Add a selection for the given range in buffer coordinates. */
            addSelectionForBufferRange(bufferRange: TextBuffer.RangeCompatible, options?:
                { reversed?: boolean, preserveFolds?: boolean }): Selection;

            /** Add a selection for the given range in screen coordinates. */
            addSelectionForScreenRange(screenRange: TextBuffer.RangeCompatible, options?:
                { reversed?: boolean, preserveFolds?: boolean }): Selection;

            /** Select from the current cursor position to the given position in buffer coordinates.
             *  This method may merge selections that end up intersecting.
             */
            selectToBufferPosition(position: TextBuffer.PointCompatible): void;

            /** Select from the current cursor position to the given position in screen coordinates.
             *  This method may merge selections that end up intersecting.
             */
            selectToScreenPosition(position: TextBuffer.PointCompatible): void;

            /** Move the cursor of each selection one character upward while preserving the
             *  selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectUp(rowCount?: number): void;

            /** Move the cursor of each selection one character downward while preserving
             *  the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectDown(rowCount?: number): void;

            /** Move the cursor of each selection one character leftward while preserving
             *  the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectLeft(columnCount?: number): void;

            /** Move the cursor of each selection one character rightward while preserving
             *  the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectRight(columnCount?: number): void;

            /** Select from the top of the buffer to the end of the last selection in the buffer.
             *  This method merges multiple selections into a single selection.
             */
            selectToTop(): void;

            /** Selects from the top of the first selection in the buffer to the end of the buffer.
             *  This method merges multiple selections into a single selection.
             */
            selectToBottom(): void;

            /** Select all text in the buffer.
             *  This method merges multiple selections into a single selection.
             */
            selectAll(): void;

            /** Move the cursor of each selection to the beginning of its line while preserving
             *  the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectToBeginningOfLine(): void;

            /** Move the cursor of each selection to the first non-whitespace character of its
             *  line while preserving the selection's tail position. If the cursor is already
             *  on the first character of the line, move it to the beginning of the line.
             *  This method may merge selections that end up intersecting.
             */
            selectToFirstCharacterOfLine(): void;

            /** Move the cursor of each selection to the end of its line while preserving the
             *  selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectToEndOfLine(): void;

            /** Expand selections to the beginning of their containing word.
             *  Operates on all selections. Moves the cursor to the beginning of the containing
             *  word while preserving the selection's tail position.
             */
            selectToBeginningOfWord(): void;

            /** Expand selections to the end of their containing word.
             *  Operates on all selections. Moves the cursor to the end of the containing word
             *  while preserving the selection's tail position.
             */
            selectToEndOfWord(): void;

            /** For each cursor, select the containing line.
             *  This method merges selections on successive lines.
             */
            selectLinesContainingCursors(): void;

            /** Select the word surrounding each cursor. */
            selectWordsContainingCursors(): void;

            /** For each selection, move its cursor to the preceding subword boundary while
             *  maintaining the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectToPreviousSubwordBoundary(): void;

            /** For each selection, move its cursor to the next subword boundary while maintaining
             *  the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectToNextSubwordBoundary(): void;

            /** For each selection, move its cursor to the preceding word boundary while
             *  maintaining the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectToPreviousWordBoundary(): void;

            /** For each selection, move its cursor to the next word boundary while maintaining
             *  the selection's tail position.
             *  This method may merge selections that end up intersecting.
             */
            selectToNextWordBoundary(): void;

            /** Expand selections to the beginning of the next word.
             *  Operates on all selections. Moves the cursor to the beginning of the next word
             *  while preserving the selection's tail position.
             */
            selectToBeginningOfNextWord(): void;

            /** Expand selections to the beginning of the next paragraph.
             *  Operates on all selections. Moves the cursor to the beginning of the next
             *  paragraph while preserving the selection's tail position.
             */
            selectToBeginningOfNextParagraph(): void;

            /** Expand selections to the beginning of the next paragraph.
             *  Operates on all selections. Moves the cursor to the beginning of the next
             *  paragraph while preserving the selection's tail position.
             */
            selectToBeginningOfPreviousParagraph(): void;

            /** Select the range of the given marker if it is valid. */
            selectMarker(marker: TextBuffer.DisplayMarker): TextBuffer.Range|undefined;

            /** Get the most recently added Selection. */
            getLastSelection(): Selection;

            /** Get current Selections. */
            getSelections(): Selection[];

            /** Get all Selections, ordered by their position in the buffer instead of the
             *  order in which they were added.
             */
            getSelectionsOrderedByBufferPosition(): Selection[];

            // NOTE: this calls into Selection::intersectsBufferRange, which itself calls
            // into Range::intersectsWith. Range::intersectsWith is one of the few functions
            // which does NOT take a range-compatible array.
            /** Determine if a given range in buffer coordinates intersects a selection. */
            selectionIntersectsBufferRange(bufferRange: TextBuffer.RangeLike): boolean;

            // Searching and Replacing
            /** Scan regular expression matches in the entire buffer, calling the given
             *  iterator function on each match.
             *
             *  ::scan functions as the replace method as well via the replace.
             */
            scan(regex: RegExp, options: TextBuffer.Options.ScanContext, iterator: (params:
                TextBuffer.Structures.ContextualBufferScanResult) => void): void;
            /** Scan regular expression matches in the entire buffer, calling the given
             *  iterator function on each match.
             *
             *  ::scan functions as the replace method as well via the replace.
             */
            scan(regex: RegExp, iterator: (params: TextBuffer.Structures.BufferScanResult) => void):
                void;

            /** Scan regular expression matches in a given range, calling the given iterator.
             *  function on each match.
             */
            scanInBufferRange(regex: RegExp, range: TextBuffer.RangeCompatible, iterator:
                (params: TextBuffer.Structures.BufferScanResult) => void): void;

            /** Scan regular expression matches in a given range in reverse order, calling the
             *  given iterator function on each match.
             */
            backwardsScanInBufferRange(regex: RegExp, range: TextBuffer.RangeCompatible,
                iterator: (params: TextBuffer.Structures.BufferScanResult) => void): void;

            // Tab Behavior
            /** Returns a boolean indicating whether softTabs are enabled for this editor. */
            getSoftTabs(): boolean;

            /** Enable or disable soft tabs for this editor. */
            setSoftTabs(softTabs: boolean): void;

            /** Toggle soft tabs for this editor. */
            toggleSoftTabs(): boolean;

            /** Get the on-screen length of tab characters. */
            getTabLength(): number;

            /** Set the on-screen length of tab characters. Setting this to a number will
             *  override the editor.tabLength setting.
             */
            setTabLength(tabLength: number): void;

            /** Determine if the buffer uses hard or soft tabs. */
            usesSoftTabs(): boolean|undefined;

            /** Get the text representing a single level of indent.
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
            /** Get the indentation level of the given buffer row.
             *  Determines how deeply the given row is indented based on the soft tabs and tab
             *  length settings of this editor. Note that if soft tabs are enabled and the tab
             *  length is 2, a row with 4 leading spaces would have an indentation level of 2.
             */
            indentationForBufferRow(bufferRow: number): number;

            /** Set the indentation level for the given buffer row.
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

            /** Get the indentation level of the given line of text.
             *  Determines how deeply the given line is indented based on the soft tabs and tab length
             *  settings of this editor. Note that if soft tabs are enabled and the tab length is 2,
             *  a row with 4 leading spaces would have an indentation level of 2.
             */
            indentLevelForLine(line: string): number;

            /** Indent rows intersecting selections based on the grammar's suggested indent level. */
            autoIndentSelectedRows(): void;

            // Grammars
            /** Get the current Grammar of this editor. */
            getGrammar(): FirstMate.Grammar;

            /** Set the current Grammar of this editor.
             *  Assigning a grammar will cause the editor to re-tokenize based on the new grammar.
             */
            setGrammar(grammar: FirstMate.Grammar): void;

            // Managing Syntax Scopes
            /** Returns a ScopeDescriptor that includes this editor's language.
             *  e.g. [".source.ruby"], or [".source.coffee"].
             */
            getRootScopeDescriptor(): ScopeDescriptor;

            /** Get the syntactic scopeDescriptor for the given position in buffer coordinates. */
            scopeDescriptorForBufferPosition(bufferPosition: TextBuffer.PointCompatible):
                ScopeDescriptor;

            /** Get the range in buffer coordinates of all tokens surrounding the cursor
             *  that match the given scope selector.
             */
            bufferRangeForScopeAtCursor(scopeSelector: string): TextBuffer.Range;

            /** Determine if the given row is entirely a comment. */
            isBufferRowCommented(bufferRow: number): boolean;

            // Clipboard Operations
            /** For each selection, copy the selected text. */
            copySelectedText(): void;

            /** For each selection, cut the selected text. */
            cutSelectedText(): void;

            /** For each selection, replace the selected text with the contents of the clipboard.
             *  If the clipboard contains the same number of selections as the current editor,
             *  each selection will be replaced with the content of the corresponding clipboard
             *  selection text.
             */
            pasteText(options?: Options.TextInsertion): void;

            /** For each selection, if the selection is empty, cut all characters of the
             *  containing screen line following the cursor. Otherwise cut the selected text.
             */
            cutToEndOfLine(): void;

            /** For each selection, if the selection is empty, cut all characters of the
             *  containing buffer line following the cursor. Otherwise cut the selected text.
             */
            cutToEndOfBufferLine(): void;

            // Folds
            /** Fold the most recent cursor's row based on its indentation level.
             *  The fold will extend from the nearest preceding line with a lower indentation
             *  level up to the nearest following row with a lower indentation level.
             */
            foldCurrentRow(): void;

            /** Unfold the most recent cursor's row by one level. */
            unfoldCurrentRow(): void;

            /** Fold the given row in buffer coordinates based on its indentation level.
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

            /** Determine whether the given row in buffer coordinates is foldable.
             *  A foldable row is a row that starts a row range that can be folded.
             */
            isFoldableAtBufferRow(bufferRow: number): boolean;

            /** Determine whether the given row in screen coordinates is foldable.
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
            scrollToBufferPosition(bufferPosition: TextBuffer.PointCompatible, options?:
                { center?: boolean }): void;

            /** Scrolls the editor to the given screen position. */
            scrollToScreenPosition(screenPosition: TextBuffer.PointCompatible, options?:
                { center?: boolean }): void;

            // TextEditor Rendering
            /** Retrieves the rendered line height in pixels. */
            getLineHeightInPixels(): number;

            /** Retrieves the greyed out placeholder of a mini editor. */
            getPlaceholderText(): string;

            /** Set the greyed out placeholder of a mini editor. Placeholder text will be
             *  displayed when the editor has no content.
             */
            setPlaceholderText(placeholderText: string): void;
        }

        /** The static side to the TextEditor class. */
        interface TextEditorStatic {
            // NOTE: undocumented within the public API. Don't go down the rabbit hole.
            new (options?: object): TextEditor;
        }

        /** Experimental: This global registry tracks registered TextEditors. */
        interface TextEditorRegistry {
            // Managing Text Editors
            /** Remove all editors from the registry. */
            clear(): void;

            /** Register a TextEditor. */
            add(editor: TextEditor): EventKit.Disposable;

            /** Remove the given TextEditor from the registry. */
            remove(editor: TextEditor): boolean;

            /** Keep a TextEditor's configuration in sync with Atom's settings. */
            maintainConfig(editor: TextEditor): EventKit.Disposable;

            /** Set a TextEditor's grammar based on its path and content, and continue
             *  to update its grammar as gramamrs are added or updated, or the editor's
             *  file path changes.
             */
            maintainGrammar(editor: TextEditor): EventKit.Disposable;

            /** Force a TextEditor to use a different grammar than the one that would
             *  otherwise be selected for it.
             */
            setGrammarOverride(editor: TextEditor, scopeName: string): void;

            /** Retrieve the grammar scope name that has been set as a grammar override
             *  for the given TextEditor.
             */
            getGrammarOverride(editor: TextEditor): string|null;

            /** Remove any grammar override that has been set for the given TextEditor. */
            clearGrammarOverride(editor: TextEditor): void;

            // Event Subscription
            /** Invoke the given callback with all the current and future registered TextEditors. */
            observe(callback: (editor: TextEditor) => void): EventKit.Disposable;
        }

        /** Handles loading and activating available themes. */
        interface ThemeManager {
            // Event Subscription
            /** Invoke callback when style sheet changes associated with updating the
             *  list of active themes have completed.
             */
            onDidChangeActiveThemes(callback: () => void): EventKit.Disposable;

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

        /** Associates tooltips with HTML elements or selectors. */
        interface TooltipManager {
            /** Add a tooltip to the given element. */
            add(target: JQuery|HTMLElement, options: {
                title?: string,
                html?: boolean,
                item?: HTMLElement|{ element: HTMLElement },
                class?: string,
                placement?: "top"|"bottom"|"left"|"right"|"auto"|(() => string),
                trigger?: "click"|"hover"|"focus"|"manual",
                delay?: { show: number, hide: number },
                keyBindingCommand?: string,
                keyBindingTarget?: HTMLElement
            } | {
                title?: string|(() => string),
                html?: boolean,
                item?: HTMLElement|{ element: HTMLElement },
                class?: string,
                placement?: "top"|"bottom"|"left"|"right"|"auto"|(() => string),
                trigger?: "click"|"hover"|"focus"|"manual",
                delay?: { show: number, hide: number },
            }): EventKit.Disposable;

            /** Find the tooltips that have been applied to the given element. */
            findTooltips(target: HTMLElement): Structures.Tooltip[];
        }

        /** ViewRegistry handles the association between model and view types in Atom.
         *  We call this association a View Provider. As in, for a given model, this class
         *  can provide a view via ::getView, as long as the model/view association was
         *  registered via ::addViewProvider.
         */
        interface ViewRegistry {
            /** Add a provider that will be used to construct views in the workspace's view
             *  layer based on model objects in its model layer.
             */
            addViewProvider(createView: (model: object) => HTMLElement|undefined):
                EventKit.Disposable;
            /** Add a provider that will be used to construct views in the workspace's view
             *  layer based on model objects in its model layer.
             */
            // tslint:disable-next-line:no-any
            addViewProvider<T>(modelConstructor: { new (...args: any[]): T }, createView:
                (instance: T) => HTMLElement|undefined): EventKit.Disposable;

            /** Get the view associated with an object in the workspace. */
            getView(obj: object): HTMLElement;
        }

        /** Represents the state of the user interface for the entire window. */
        interface Workspace {
            // Event Subscription
            /** Invoke the given callback with all current and future text editors in
             *  the workspace.
             */
            observeTextEditors(callback: (editor: TextEditor) => void): EventKit.Disposable;

            /** Invoke the given callback with all current and future panes items in the
             *  workspace.
             */
            observePaneItems(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane item changes. */
            onDidChangeActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane item stops changing. */
            onDidStopChangingActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when a text editor becomes the active text editor and
             *  when there is no longer an active text editor.
             */
            onDidChangeActiveTextEditor(callback: (editor?: TextEditor) => void): EventKit.Disposable;

            /** Invoke the given callback with the current active pane item and with all
             *  future active pane items in the workspace.
             */
            observeActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback with the current active text editor (if any), with all
             *  future active text editors, and when there is no longer an active text editor.
             */
            observeActiveTextEditor(callback: (editor?: TextEditor) => void): EventKit.Disposable;

            /** Invoke the given callback whenever an item is opened. Unlike ::onDidAddPaneItem,
             *  observers will be notified for items that are already present in the workspace
             *  when they are reopened.
             */
            onDidOpen(callback: (event: Events.PaneItemOpened) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane is added to the workspace. */
            onDidAddPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback before a pane is destroyed in the workspace. */
            onWillDestroyPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane is destroyed in the workspace. */
            onDidDestroyPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback with all current and future panes in the workspace. */
            observePanes(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane changes. */
            onDidChangeActivePane(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback with the current active pane and when the
             *  active pane changes.
             */
            observeActivePane(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane item is added to the workspace. */
            onDidAddPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a pane item is about to be destroyed,
             *  before the user is prompted to save it.
             */
            onWillDestroyPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a pane item is destroyed. */
            onDidDestroyPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a text editor is added to the workspace. */
            onDidAddTextEditor(callback: (event: Events.TextEditorObserved) => void):
                EventKit.Disposable;

            // Opening
            /** Opens the given URI in Atom asynchronously. If the URI is already open,
             *  the existing item for that URI will be activated. If no URI is given, or
             *  no registered opener can open the URI, a new empty TextEditor will be created.
             */
            open(uri: string, options?: {
                initialLine?: number,
                initialColumn?: number,
                split?: "left"|"right"|"up"|"down",
                activatePane?: boolean,
                activateItem?: boolean,
                pending?: boolean,
                searchAllPanes?: boolean,
                location?: "left"|"right"|"bottom"|"center",
            }): Promise<object>;
            /** Opens the given URI in Atom asynchronously. If the URI is already open,
             *  the existing item for that URI will be activated. If no URI is given, or
             *  no registered opener can open the URI, a new empty TextEditor will be created.
             */
            open(): Promise<TextEditor>;

            /** Search the workspace for items matching the given URI and hide them.
             *  Returns a boolean indicating whether any items were found (and hidden).
             */
            hide(itemOrURI: object|string): boolean;

            /** Search the workspace for items matching the given URI. If any are found,
             *  hide them. Otherwise, open the URL.
             *  Returns a Promise that resolves when the item is shown or hidden.
             */
            toggle(itemOrURI: object|string): Promise<void>;

            /** Creates a new item that corresponds to the provided URI.
             *  If no URI is given, or no registered opener can open the URI, a new empty TextEditor
             *  will be created.
             */
            createItemForURI(uri: string): Promise<object|TextEditor>;

            /** Returns a boolean that is true if object is a TextEditor. */
            isTextEditor(object: object): boolean;

            /** Asynchronously reopens the last-closed item's URI if it hasn't already
             *  been reopened.
             */
            reopenItem(): Promise<object|undefined>;

            /** Register an opener for a URI. */
            addOpener(opener: (uri: string) => HTMLElement|{ getTitle(): string }|undefined):
                EventKit.Disposable;

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
            addBottomPanel(options: {
                item: object,
                visible?: boolean,
                priority?: number,
            }): Panel;

            /** Get an Array of all the panel items to the left of the editor window. */
            getLeftPanels(): Panel[];

            /** Adds a panel item to the left of the editor window. */
            addLeftPanel(options: {
                item: object,
                visible?: boolean,
                priority?: number,
            }): Panel;

            /** Get an Array of all the panel items to the right of the editor window. */
            getRightPanels(): Panel[];

            /** Adds a panel item to the right of the editor window. */
            addRightPanel(options: {
                item: object,
                visible?: boolean,
                priority?: number,
            }): Panel;

            /** Get an Array of all the panel items at the top of the editor window. */
            getTopPanels(): Panel[];

            /** Adds a panel item to the top of the editor window above the tabs. */
            addTopPanel(options: {
                item: object,
                visible?: boolean,
                priority?: number
            }): Panel;

            /** Get an Array of all the panel items in the header. */
            getHeaderPanels(): Panel[];

            /** Adds a panel item to the header. */
            addHeaderPanel(options: {
                item: object,
                visible?: boolean,
                priority?: number,
            }): Panel;

            /** Get an Array of all the panel items in the footer. */
            getFooterPanels(): Panel[];

            /** Adds a panel item to the footer. */
            addFooterPanel(options: {
                item: object,
                visible?: boolean,
                priority?: number,
            }): Panel;

            /** Get an Array of all the modal panel items. */
            getModalPanels(): Panel[];

            /** Adds a panel item as a modal dialog. */
            addModalPanel(options: {
                item: object,
                visible?: boolean,
                priority?: number,
                autoFocus?: boolean,
            }): Panel;

            /** Returns the Panel associated with the given item or null when the item
             *  has no panel.
             */
            panelForItem(item: object): Panel|null;

            // Searching and Replacing
            /** Performs a search across all files in the workspace. */
            scan(regex: RegExp, iterator: (result: Structures.ScandalResult) => void):
                Structures.CancellablePromise<string|null>;
            /** Performs a search across all files in the workspace. */
            scan(regex: RegExp, options: Options.WorkspaceScan, iterator:
                (result: Structures.ScandalResult) => void):
                Structures.CancellablePromise<string|null>;

            /** Performs a replace across all the specified files in the project. */
            replace(regex: RegExp, replacementText: string, filePaths: ReadonlyArray<string>,
                iterator: (result: { filePath: string|undefined, replacements: number }) => void):
                Promise<void>;
        }

        // https://github.com/atom/atom/blob/master/src/workspace-center.js
        /** The central container for the editor window capable of holding items. */
        interface WorkspaceCenter {
            // Event Subscription
            /** Invoke the given callback with all current and future text editors in the
             *  workspace center.
             */
            observeTextEditors(callback: (editor: TextEditor) => void): EventKit.Disposable;

            /** Invoke the given callback with all current and future panes items in the
             *  workspace center.
             */
            observePaneItems(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane item changes. */
            onDidChangeActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane item stops changing. */
            onDidStopChangingActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback with the current active pane item and with all future
             *  active pane items in the workspace center.
             */
            observeActivePaneItem(callback: (item: object) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane is added to the workspace center. */
            onDidAddPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback before a pane is destroyed in the workspace center. */
            onWillDestroyPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane is destroyed in the workspace center. */
            onDidDestroyPane(callback: (event: { pane: Pane }) => void): EventKit.Disposable;

            /** Invoke the given callback with all current and future panes in the workspace center. */
            observePanes(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback when the active pane changes. */
            onDidChangeActivePane(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback with the current active pane and when the active pane
             *  changes.
             */
            observeActivePane(callback: (pane: Pane) => void): EventKit.Disposable;

            /** Invoke the given callback when a pane item is added to the workspace center. */
            onDidAddPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a pane item is about to be destroyed, before the user
             *  is prompted to save it.
             */
            onWillDestroyPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a pane item is destroyed. */
            onDidDestroyPaneItem(callback: (event: Events.PaneItemObserved) => void):
                EventKit.Disposable;

            /** Invoke the given callback when a text editor is added to the workspace center. */
            onDidAddTextEditor(callback: (event: Events.TextEditorObserved) => void):
                EventKit.Disposable;

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
    }

    /** An amalgamation of all types used within the public Atom API. */
    namespace Atom {
        /** The event objects that are passed into the callbacks which the user provides to
         *  specific API calls.
         */
        namespace Events {
            // Atom Core
            type CursorPositionChanged = AtomCore.Events.CursorPositionChanged;
            type DecorationPropsChanged = AtomCore.Events.DecorationPropsChanged;
            type EditorChanged = AtomCore.Events.EditorChanged;
            type ExceptionThrown = AtomCore.Events.ExceptionThrown;
            type FilesystemChange = AtomCore.Events.FilesystemChange;
            type PaneItemMoved = AtomCore.Events.PaneItemMoved;
            type PaneItemObserved = AtomCore.Events.PaneItemObserved;
            type PaneItemOpened = AtomCore.Events.PaneItemOpened;
            type PaneListItemShifted = AtomCore.Events.PaneListItemShifted;
            type PreventableExceptionThrown = AtomCore.Events.PreventableExceptionThrown;
            type RepoStatusChanged = AtomCore.Events.RepoStatusChanged;
            type SelectionChanged = AtomCore.Events.SelectionChanged;
            type StyleElementObserved = AtomCore.Events.StyleElementObserved;
            type TextEditorObserved = AtomCore.Events.TextEditorObserved;

            // Atom Keymap
            type CommandEvent = AtomKeymap.Events.CommandEvent;
            type FullKeybindingMatch = AtomKeymap.Events.FullKeybindingMatch;
            type PartialKeybindingMatch = AtomKeymap.Events.PartialKeybindingMatch;
            type FailedKeybindingMatch = AtomKeymap.Events.FailedKeybindingMatch;
            type FailedKeymapFileRead = AtomKeymap.Events.FailedKeymapFileRead;
            type KeymapLoaded = AtomKeymap.Events.KeymapLoaded;
            type AddedKeystrokeResolver = AtomKeymap.Events.AddedKeystrokeResolver;

            // Path Watcher
            type PathWatchErrorThrown = PathWatcher.Events.PathWatchErrorThrown;
            // NOTE: WatchedFilePathChangedEvent isn't used.

            // Text Buffer
            type BufferWatchError = TextBuffer.Events.BufferWatchError;
            type FileSaved = TextBuffer.Events.FileSaved;
            type MarkerChanged = TextBuffer.Events.MarkerChanged;
            type DisplayMarkerChanged = TextBuffer.Events.DisplayMarkerChanged;
            type BufferChanging = TextBuffer.Events.BufferChanging;
            type BufferChanged = TextBuffer.Events.BufferChanged;
            type BufferStoppedChanging = TextBuffer.Events.BufferStoppedChanging;
        }

        /** The option objects that the user is expected to fill out and provide to
         *  specific API calls.
         */
        namespace Options {
            // Atom Core
            type BuildEnvironment = AtomCore.Options.BuildEnvironment;
            type ContextMenu = AtomCore.Options.ContextMenu;
            type DecorationLayerProps = AtomCore.Options.DecorationLayerProps;
            type DecorationProps = AtomCore.Options.DecorationProps;
            type ErrorNotification = AtomCore.Options.ErrorNotification;
            type Menu = AtomCore.Options.Menu;
            type Notification = AtomCore.Options.Notification;
            type NodeProcess = AtomCore.Options.NodeProcess;
            type Process = AtomCore.Options.Process;
            type SharedDecorationProps = AtomCore.Options.SharedDecorationProps;
            type SpawnProcess = AtomCore.Options.SpawnProcess;
            type TextInsertion = AtomCore.Options.TextInsertion;
            type Tooltip = AtomCore.Options.Tooltip;
            type WorkspaceScan = AtomCore.Options.WorkspaceScan;

            // Atom Keymap
            type BuildKeyEvent = AtomKeymap.Options.BuildKeyEvent;

            // First Mate
            type Grammar = FirstMate.Options.Grammar;

            // Text Buffer
            type BufferLoad = TextBuffer.Options.BufferLoad;
            type FindMarker = TextBuffer.Options.FindMarker;
            type FindDisplayMarker = TextBuffer.Options.FindDisplayMarker;
            type CopyMarker = TextBuffer.Options.CopyMarker;
            type ScanContext = TextBuffer.Options.ScanContext;
        }

        /** The structures that are passed to the user by Atom following specific API calls. */
        namespace Structures {
            // Atom Core
            type CancellablePromise<T> = AtomCore.Structures.CancellablePromise<T>;
            type HistoryProject = AtomCore.Structures.HistoryProject;
            type ScandalResult = AtomCore.Structures.ScandalResult;
            type TestRunnerArgs = AtomCore.Structures.TestRunnerArgs;
            type Tooltip = AtomCore.Structures.Tooltip;
            type WindowLoadSettings = AtomCore.Structures.WindowLoadSettings;

            // First Mate
            type GrammarToken = FirstMate.Structures.GrammarToken;
            type TokenizeLineResult = FirstMate.Structures.TokenizeLineResult;
            type GrammarRule = FirstMate.Structures.GrammarRule;

            // Text Buffer
            type TextChange = TextBuffer.Structures.TextChange;
            type BufferScanResult = TextBuffer.Structures.BufferScanResult;
            type ContextualBufferScanResult = TextBuffer.Structures.ContextualBufferScanResult;
        }

        // Atom Core ==========================================================
        type AtomEnvironment = AtomCore.AtomEnvironment;
        type BufferedProcess = AtomCore.BufferedProcess;
        type BufferedProcessStatic = AtomCore.BufferedProcessStatic;
        type BufferedNodeProcess = AtomCore.BufferedNodeProcess;
        type BufferedNodeProcessStatic = AtomCore.BufferedNodeProcessStatic;
        type Clipboard = AtomCore.Clipboard;
        type Color = AtomCore.Color;
        type CommandRegistry = AtomCore.CommandRegistry;
        type Config = AtomCore.Config;
        type ContextMenuManager = AtomCore.ContextMenuManager;
        type Cursor = AtomCore.Cursor;
        type Decoration = AtomCore.Decoration;
        type Deserializer = AtomCore.Deserializer;
        type DeserializerManager = AtomCore.DeserializerManager;
        type Dock = AtomCore.Dock;
        type GitRepository = AtomCore.GitRepository;
        type GitRepositoryStatic = AtomCore.GitRepositoryStatic;
        type Gutter = AtomCore.Gutter;
        type HistoryManager = AtomCore.HistoryManager;
        type LayerDecoration = AtomCore.LayerDecoration;
        type MenuManager = AtomCore.MenuManager;
        type Notification = AtomCore.Notification;
        type NotificationStatic = AtomCore.NotificationStatic;
        type NotificationManager = AtomCore.NotificationManager;
        type Package = AtomCore.Package;
        type PackageManager = AtomCore.PackageManager;
        type Pane = AtomCore.Pane;
        type Panel = AtomCore.Panel;
        type PathWatcher = AtomCore.PathWatcher;
        type Project = AtomCore.Project;
        type ScopeDescriptor = AtomCore.ScopeDescriptor;
        type Selection = AtomCore.Selection;
        type StyleManager = AtomCore.StyleManager;
        type Task = AtomCore.Task;
        type TaskStatic = AtomCore.TaskStatic;
        type TestRunner = AtomCore.TestRunner;
        type TextEditor = AtomCore.TextEditor;
        type TextEditorStatic = AtomCore.TextEditorStatic;
        type TextEditorRegistry = AtomCore.TextEditorRegistry;
        type ThemeManager = AtomCore.ThemeManager;
        type TooltipManager = AtomCore.TooltipManager;
        type ViewRegistry = AtomCore.ViewRegistry;
        type Workspace = AtomCore.Workspace;
        type WorkspaceCenter = AtomCore.WorkspaceCenter;

        // Atom Keymap ========================================================
        type KeyBinding = AtomKeymap.KeyBinding;
        type KeymapManager = AtomKeymap.KeymapManager;
        // NOTE: KeymapManagerStatic isn't used.

        // Event Kit ==========================================================
        type DisposableLike = EventKit.DisposableLike;
        type Disposable = EventKit.Disposable;
        type DisposableStatic = EventKit.DisposableStatic;
        type CompositeDisposable = EventKit.CompositeDisposable;
        type CompositeDisposableStatic = EventKit.CompositeDisposableStatic;
        type Emitter = EventKit.Emitter;
        type EmitterStatic = EventKit.EmitterStatic;

        // First Mate =========================================================
        type Grammar = FirstMate.Grammar;
        type GrammarStatic = FirstMate.GrammarStatic;
        type GrammarRegistry = FirstMate.GrammarRegistry;
        type GrammarRegistryStatic = FirstMate.GrammarRegistryStatic;
        type ScopeSelector = FirstMate.ScopeSelector;
        type ScopeSelectorStatic = FirstMate.ScopeSelectorStatic;

        // Path Watcher =======================================================
        type File = PathWatcher.File;
        type FileStatic = PathWatcher.FileStatic;
        type Directory = PathWatcher.Directory;
        type DirectoryStatic = PathWatcher.DirectoryStatic;
        // NOTE: PathWatcher isn't used.

        // Text Buffer ========================================================
        type Marker = TextBuffer.Marker;
        type MarkerLayer = TextBuffer.MarkerLayer;
        type DisplayMarker = TextBuffer.DisplayMarker;
        type DisplayMarkerLayer = TextBuffer.DisplayMarkerLayer;
        type Point = TextBuffer.Point;
        type PointStatic = TextBuffer.PointStatic;
        type PointCompatible = TextBuffer.PointCompatible;
        type PointLike = TextBuffer.PointLike;
        type Range = TextBuffer.Range;
        type RangeStatic = TextBuffer.RangeStatic;
        type RangeCompatible = TextBuffer.RangeCompatible;
        type RangeLike = TextBuffer.RangeLike;
        type TextBuffer = TextBuffer.TextBuffer;
        type TextBufferStatic = TextBuffer.TextBufferStatic;
    }

    const atom: AtomCore.AtomEnvironment;
}

/** A wrapper which provides standard error/output line buffering for
 *  Node's ChildProcess.
 */
export const BufferedProcess: AtomCore.BufferedProcessStatic;

/** Like BufferedProcess, but accepts a Node script as the command to run.
 *  This is necessary on Windows since it doesn't support shebang #! lines.
 */
export const BufferedNodeProcess: AtomCore.BufferedNodeProcessStatic;

/** Represents the underlying git operations performed by Atom. */
export const GitRepository: AtomCore.GitRepositoryStatic;

/** A notification to the user containing a message and type. */
export const Notification: AtomCore.NotificationStatic;

/** A mutable text container with undo/redo support and the ability to
 *  annotate logical regions in the text.
 */
export const TextBuffer: TextBuffer.TextBufferStatic;

/** Represents a point in a buffer in row/column coordinates. */
export const Point: TextBuffer.PointStatic;

/** Represents a region in a buffer in row/column coordinates. */
export const Range: TextBuffer.RangeStatic;

/** Represents an individual file that can be watched, read from, and written to. */
export const File: PathWatcher.FileStatic;

/** Represents a directory on disk that can be watched for changes. */
export const Directory: PathWatcher.DirectoryStatic;

/** Utility class to be used when implementing event-based APIs that allows
 *  for handlers registered via ::on to be invoked with calls to ::emit.
 */
export const Emitter: EventKit.EmitterStatic;

/** A handle to a resource that can be disposed. */
export const Disposable: EventKit.DisposableStatic;

/** An object that aggregates multiple Disposable instances together into a
 *  single disposable, so they can all be disposed as a group.
 */
export const CompositeDisposable: EventKit.CompositeDisposableStatic;

/** Invoke a callback with each filesystem event that occurs beneath a specified path.
 *  If you only need to watch events within the project's root paths, use
 *  Project::onDidChangeFiles instead.
 */
export function watchPath(rootPath: string, options: {}, eventCallback: (events:
    AtomCore.Events.FilesystemChange) => void): AtomCore.PathWatcher;

/** Run a node script in a separate process. */
export const Task: AtomCore.TaskStatic;

/** This class represents all essential editing state for a single TextBuffer,
 *  including cursor and selection positions, folds, and soft wraps.
 */
export const TextEditor: AtomCore.TextEditorStatic;
