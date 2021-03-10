import {
    Clipboard,
    CommandRegistry,
    Config,
    ContextMenuManager,
    DeserializerManager,
    Disposable,
    GrammarRegistry,
    HistoryManager,
    KeymapManager,
    MenuManager,
    NotificationManager,
    PackageManager,
    Project,
    StyleManager,
    TextEditorRegistry,
    ThemeManager,
    TooltipManager,
    ViewRegistry,
    WindowLoadSettings,
    Workspace,
} from '../index';

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
    getReleaseChannel(): 'dev' | 'nightly' | 'beta' | 'stable';

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
        pathsToOpen: ReadonlyArray<string>;
        newWindow?: boolean;
        devMode?: boolean;
        safeMode?: boolean;
    }): void;

    /** Close the current window. */
    close(): void;

    /** Get the size of current window. */
    getSize(): { width: number; height: number };

    /** Set the size of current window. */
    setSize(width: number, height: number): void;

    /** Get the position of current window. */
    getPosition(): { x: number; y: number };

    /** Set the position of current window. */
    setPosition(x: number, y: number): void;

    /** Prompt the user to select one or more folders. */
    pickFolder(callback: (paths: string[] | null) => void): void;

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
    getWindowDimensions(): { x: number; y: number; width: number; height: number };

    /** Set the dimensions of the window. */
    setWindowDimensions(dimensions: { x?: number; y?: number; width?: number; height?: number }): Promise<object>;

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
    confirm(options: ConfirmationOptions, callback: (response: number, checkboxChecked: boolean) => void): void;

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
    confirm(options: { message: string; detailedMessage?: string; buttons?: ReadonlyArray<string> }): void;

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
        message: string;
        detailedMessage?: string;
        buttons?: {
            [key: string]: () => void;
        };
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

export interface ExceptionThrownEvent {
    originalError: Error;
    message: string;
    url: string;
    line: number;
    column: number;
}

export interface PreventableExceptionThrownEvent extends ExceptionThrownEvent {
    preventDefault(): void;
}

export interface ConfirmationOptions {
    /** The type of the confirmation prompt. */
    type?: 'none' | 'info' | 'error' | 'question' | 'warning';

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

export interface TimingMarker {
    label: string;
    time: number;
}
