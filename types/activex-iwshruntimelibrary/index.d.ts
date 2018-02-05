// Type definitions for Windows Script Host Object Model - IWshRuntimeLibrary 1.0
// Project: https://msdn.microsoft.com/en-us/library/9bbdkx3k(v=vs.84).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare namespace IWshRuntimeLibrary {
    type WindowStyle = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    type ShortcutWindowStyle = 1 | 3 | 7;

    // tslint:disable-next-line no-const-enum
    const enum ButtonType {
        OK,
        OKCancel,
        AbortRetryIgnore,
        YesNoCancel,
        YesNo,
        RetryCancel,
        CancelTryagainContinue
    }

    // tslint:disable-next-line no-const-enum
    const enum EventType {
        AuditFailure = 5,
        AuditSuccess = 4,
        Error = 1,
        Information = 3,
        Success = 0,
        Warning = 2
    }

    // tslint:disable-next-line no-const-enum
    const enum IconType {
        Stop = 16,
        QuestionMark = 32,
        ExclamationMakr = 48,
        InformationMark = 64,
    }

    // tslint:disable-next-line no-const-enum
    const enum PopupType {
        SecondButtonDefault = 256,
        ThirdButtonDefault = 512,
        Modal = 4096,
        RightJustified = 524288,
        RTL = 1048576,
    }

    // tslint:disable-next-line no-const-enum
    const enum PopupSelection {
        NoButton = -1,
        OK = 1,
        Cancel = 2,
        Abort = 3,
        Retry = 4,
        Ignore = 5,
        Yes = 6,
        No = 7,
        TryAgain = 10,
        Continue = 11,
    }

    // tslint:disable-next-line no-const-enum
    const enum WshExecStatus {
        WshFailed = 2,
        WshFinished = 1,
        WshRunning = 0,
    }

    // tslint:disable-next-line no-const-enum
    const enum WshWindowStyle {
        WshHide = 0,
        WshMaximizedFocus = 3,
        WshMinimizedFocus = 2,
        WshMinimizedNoFocus = 6,
        WshNormalFocus = 1,
        WshNormalNoFocus = 4,
    }

    class TextStream {
        private 'IWshRuntimeLibrary.TextStream_typekey': TextStream;
        private constructor();
        readonly AtEndOfLine: boolean;
        readonly AtEndOfStream: boolean;
        Close(): void;
        readonly Column: number;
        readonly Line: number;
        Read(Characters: number): string;
        ReadAll(): string;
        ReadLine(): string;
        Skip(Characters: number): void;
        SkipLine(): void;
        Write(Text: string): void;
        WriteBlankLines(Lines: number): void;

        /** @param string [Text=''] */
        WriteLine(Text?: string): void;
    }

    /** Generic Collection Object */
    class WshCollection {
        private 'IWshRuntimeLibrary.WshCollection_typekey': WshCollection;
        private constructor();
        Count(): number;
        Item(Index: any): any;
        readonly length: number;
    }

    /** Environment Variables Collection Object */
    class WshEnvironment {
        private 'IWshRuntimeLibrary.WshEnvironment_typekey': WshEnvironment;
        private constructor();
        Count(): number;
        Item(Name: string): string;
        readonly length: number;
        Remove(Name: string): void;
    }

    /** WSHExec object */
    class WshExec {
        private 'IWshRuntimeLibrary.WshExec_typekey': WshExec;
        private constructor();
        readonly ExitCode: number;
        readonly ProcessID: number;
        readonly Status: WshExecStatus;
        readonly StdErr: TextStream;
        readonly StdIn: TextStream;
        readonly StdOut: TextStream;
        Terminate(): void;
    }

    /** Network Object */
    class WshNetwork {
        private 'IWshRuntimeLibrary.WshNetwork_typekey': WshNetwork;
        private constructor();

        /**
         * Adds a remote MS-DOS-based printer connection to your computer system.
         * @param LocalName Local name to assign to the connected printer.
         * @param RemoteName Name of the remote printer.
         * @param UpdateProfile [false] Whether the printer mapping is stored in the current user's profile.
         *
         * If you are mapping a remote printer using the profile of someone other than current user, you can specify _UserName_ and _Password_.
         */
        AddPrinterConnection(LocalName: string, RemoteName: string, UpdateProfile?: boolean, UserName?: string, Password?: string): void;

        /**
         * @param string Path to printer connection
         * @param string [DriverName='']
         * @param string [Port='LPT1']
         *
         * Unlike the **AddPrinterConnection** method, this method allows you to create a printer connection without directing it to a specific port, such as LPT1.
         */
        AddWindowsPrinterConnection(PrinterName: string, DriverName?: string, Port?: string): void;
        readonly ComputerName: string;
        EnumNetworkDrives(): WshCollection;
        EnumPrinterConnections(): WshCollection;

        /**
         * Adds a remote MS-DOS-based printer connection to your computer system.
         * @param LocalName Name by which the mapped drive will be known locally
         * @param RemoteName Share's UNC name (\\xxx\yyy)
         * @param UpdateProfile [false] Whether the printer mapping is stored in the current user's profile.
         *
         * If you are mapping a network drive using the profile of someone other than current user, you can specify _UserName_ and _Password_.
         */
        MapNetworkDrive(LocalName: string, RemoteName: string, UpdateProfile?: boolean, UserName?: string, Password?: string): void;
        readonly Organization: string;

        /**
         * Removes a shared network drive from your computer system
         * @param Name Name of the mapped drive you want to remove. This will be the drive letter if the drive has a mapping between a local name (drive letter) and a remote name (UNC name);
         * it will be the UNC path if there is no such mapping
         * @param Force [false] Remove the connections even if the resource is in use
         * @param UpdateProfile [false] Remove the mapping from the user's profile
         */
        RemoveNetworkDrive(Name: string, Force?: boolean, UpdateProfile?: boolean): void;

        /**
         * Removes a shared network printer connection from your computer system
         * @param Name Name that identifies the printer. Can be a UNC name (in the form `\\xxx\yyy`) or a local name (such as `LPT1`)
         * @param Force [false] Remove printer connection even if a user is still connected
         * @param UpdateProfile [false] Remove the printer connection from the user's profile
         *
         * The **RemovePrinterConnection** method removes both Windows and MS-DOS based printer connections. If the printer was connected using the method **AddPrinterConnection**,
         * _Name_ must be the printer's local name. If the printer was connected using the **AddWindowsPrinterConnection** method or was added manually (using the Add Printer wizard),
         * then _Name_ must be the printer's UNC name.
         */
        RemovePrinterConnection(Name: string, Force?: true, UpdateProfile?: true): void;
        SetDefaultPrinter(Name: string): void;
        readonly Site: string;
        readonly UserDomain: string;
        readonly UserName: string;
        readonly UserProfile: string;
    }

    /** Shell Object */
    class WshShell {
        private 'IWshRuntimeLibrary.WshShell_typekey': WshShell;
        private constructor();

        /**
         * Activates an application window
         * @param App Title of application as it appears in the title bar, or the process ID
         * @param Wait
         *
         * This method changes the focus to the named application or window. The window must be attached to the calling thread's message queue. It does not affect whether it is maximized or
         * minimized. Focus moves from the activated application window when the user takes action to change the focus (or closes the window).
         *
         * In determining which application to activate, the specified title is compared to the title string of each running application. If no exact match exists, any application whose title
         * string begins with title is activated. If an application still cannot be found, any application whose title string ends with title is activated. If more than one instance of the
         * application named by title exists, one instance is arbitrarily activated.
         *
         * The method might return `false` under the following conditions:
         *
         * * The window is not brought to the foreground.
         * * The window is brought to the foreground but is not given keyboard focus.
         * * A Command Prompt window (`cmd.exe`) is brought to the foreground and is given keyboard focus.
         */
        AppActivate(App: string | number, Wait?: any): boolean;

        /**
         * Creates a shortcut
         * @param PathLink Path where the shortcut should be created
         *
         * The shortcut object exists in memory until you save it to disk with the **Save** method.
         */
        CreateShortcut(PathLink: string): WshShortcut | WshURLShortcut;
        CurrentDirectory: string;
        Environment(Type?: 'System' | 'User' | 'Proces' | 'Volatile'): WshEnvironment;
        Exec(Command: string): WshExec;
        ExpandEnvironmentStrings(Src: string): string;

        /** @param string [Target=''] Name of the computer system where the event should be logged; default is the local computer system */
        LogEvent(Type: EventType, Message: string, Target?: string): boolean;
        Popup(Text: string, SecondsToWait?: number, Title?: string, Type?: ButtonType | IconType | PopupType): PopupSelection;
        RegDelete(Name: string): void;

        /**
         * Returns the value of a key or value-name from the registry
         * @param Name Key (ends with a final `\`) or value-name (doesn't end with a final `\`)
         *
         * Returns one of the following, based on the registry value type:
         *
         * * **REG_SZ** -- a string
         * * **REG_DWORD** -- a number
         * * **REG_SBINARY** -- a binary value, as a COM SafeArray containing integers
         * * **REG_EXPAND_SZ** -- an expandable string
         * * **REG_MULTI_SZ** -- an array of srings, as a COM SafeArray
         */
        RegRead(Name: string): string | number | SafeArray<string> | SafeArray<number>;

        /**
         * Creates a new key, adds another value-name to an existing key and assigns it a value, or changes the value of an existing value-name
         * @param Name Key (ends with a final `\`) or value-name (doesn't end with a final `\`)
         * @param Value Will be coerced to `string` or `integer` based on the value-name type:
         * `REG_SZ | REG_EXPAND_SZ` will be converted to `string`;
         * `REG_DWORD | REG_BINARY` will be converted to `integer`
         * @param Type
         */
        RegWrite(Name: string, Value: any, Type?: 'REG_SZ' | 'REG_DWORD' | 'REG_BINARY' | 'REG_EXPAND_SZ'): void;

        /**
         * Runs a program in a new process.
         * @param Command Command-line, including any parameters you want to pass to the executable file.
         * @param WindowStyle Appearance of the program window. Not all programs make use of this information.
         * @param WaitOnReturn Block script until program finishes executing.
         *
         * If `false` is passed into **WaitOnReturn**, the **Run** method will return 0 immediately. If `true` is passed in, **Run** will return the program's error code, if any.
         *
         * Environment variables will be expanded within the command line.
         *
         * Passing a registered file type will automatically open the program registered to the file type.
         *
         * Possible values for **WindowStyle**:
         *
         * * **0** -- Hides the window and activates another window.
         * * **1** -- Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
         * when displaying the window for the first time.
         * * **2** -- Activates the window and displays it as a minimized window.
         * * **3** -- Activates the window and displays it as a maximized window.
         * * **4** -- Displays a window in its most recent size and position. The active window remains active.
         * * **5** -- Activates the window and displays it in its current size and position.
         * * **6** -- Minimizes the specified window and activates the next top-level window in the Z order.
         * * **7** -- Displays the window as a minimized window. The active window remains active.
         * * **8** -- Displays the window in its current state. The active window remains active.
         * * **9** -- Activates and displays the window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
         * when restoring a minimized window.
         * * **10** -- Sets the show-state based on the state of the program that started the application.
         */
        Run(Command: string, WindowStyle?: WindowStyle, WaitOnReturn?: boolean): number;
        SendKeys(Keys: string, Wait?: boolean): void;
        readonly SpecialFolders: WshCollection;
    }

    /** Shortcut Object */
    class WshShortcut {
        private 'IWshRuntimeLibrary.WshShortcut_typekey': WshShortcut;
        private constructor();
        Arguments: string;
        Description: string;
        readonly FullName: string;
        Hotkey: string;
        IconLocation: string;
        Load(PathLink: string): void;
        readonly RelativePath: string;
        Save(): void;
        TargetPath: string;

        /**
         * Possible values:
         *
         * * **1** -- Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
         * when displaying the window for the first time.
         * * **3** -- Activates the window and displays it as a maximized window.
         * * **7** -- Displays the window as a minimized window. The active window remains active.
         */
        WindowStyle: ShortcutWindowStyle;
        WorkingDirectory: string;
    }

    /** URLShortcut Object */
    class WshURLShortcut {
        private 'IWshRuntimeLibrary.WshURLShortcut_typekey': WshURLShortcut;
        private constructor();
        readonly FullName: string;
        Load(PathLink: string): void;
        Save(): void;
        TargetPath: string;
    }
}

interface ActiveXObject {
    set(obj: IWshRuntimeLibrary.WshEnvironment, propertyName: 'Item', parameterTypes: [string], newValue: string): void;
    new <K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'WScript.Network': IWshRuntimeLibrary.WshNetwork;
    'WScript.Shell': IWshRuntimeLibrary.WshShell;
}

interface EnumeratorConstructor {
    new(col: IWshRuntimeLibrary.WshCollection): Enumerator;
    new(col: IWshRuntimeLibrary.WshEnvironment): Enumerator<string>;
}
