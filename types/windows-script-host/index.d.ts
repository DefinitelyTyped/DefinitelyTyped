// Type definitions for Windows Script Host 5.8
// Project: https://msdn.microsoft.com/en-us/library/9bbdkx3k.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="activex-interop" />

declare namespace IWshRuntimeLibrary {
    type WindowStyle = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    type ShortcutWindowStyle = 1 | 3 | 7;

    const enum ButtonType {
        OK,
        OKCancel,
        AbortRetryIgnore,
        YesNoCancel,
        YesNo,
        RetryCancel,
        CancelTryagainContinue
    }

    const enum EventType {
        AuditFailure = 5,
        AuditSuccess = 4,
        Error = 1,
        Information = 3,
        Success = 0,
        Warning = 2
    }

    const enum IconType {
        Stop = 16,
        QuestionMark = 32,
        ExclamationMakr = 48,
        InformationMark = 64,
    }

    const enum PopupType {
        SecondButtonDefault = 256,
        ThirdButtonDefault = 512,
        Modal = 4096,
        RightJustified = 524288,
        RTL = 1048576,
    }

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

    const enum WshExecStatus {
        WshFailed = 2,
        WshFinished = 1,
        WshRunning = 0,
    }

    const enum WshWindowStyle {
        WshHide = 0,
        WshMaximizedFocus = 3,
        WshMinimizedFocus = 2,
        WshMinimizedNoFocus = 6,
        WshNormalFocus = 1,
        WshNormalNoFocus = 4,
    }

    class TextStreamBase {
        /**
         * The column number of the current character position in an input stream.
         */
        Column: number;

        /**
         * The current line number in an input stream.
         */
        Line: number;

        /**
         * Closes a text stream.
         * It is not necessary to close standard streams; they close automatically when the process ends. If
         * you close a standard stream, be aware that any other pointers to that standard stream become invalid.
         */
        Close(): void;
    }

    class TextStreamWriter extends TextStreamBase {
        private 'IWshRuntimeLibrary.TextStreamWriter_typekey': TextStreamWriter;
        private constructor();

        /**
         * Sends a string to an output stream.
         */
        Write(s: string): void;

        /**
         * Sends a specified number of blank lines (newline characters) to an output stream.
         */
        WriteBlankLines(intLines: number): void;

        /**
         * Sends a string followed by a newline character to an output stream.
         */
        WriteLine(s: string): void;
    }

    class TextStreamReader extends TextStreamBase {
        private 'IWshRuntimeLibrary.TextStreamReader_typekey': TextStreamReader;
        private constructor();

        /**
         * Returns a specified number of characters from an input stream, starting at the current pointer position.
         * Does not return until the ENTER key is pressed.
         * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
         */
        Read(characters: number): string;

        /**
         * Returns all characters from an input stream.
         * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
         */
        ReadAll(): string;

        /**
         * Returns an entire line from an input stream.
         * Although this method extracts the newline character, it does not add it to the returned string.
         * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
         */
        ReadLine(): string;

        /**
         * Skips a specified number of characters when reading from an input text stream.
         * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
         * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)
         */
        Skip(characters: number): void;

        /**
         * Skips the next line when reading from an input text stream.
         * Can only be used on a stream in reading mode, not writing or appending mode.
         */
        SkipLine(): void;

        /**
         * Indicates whether the stream pointer position is at the end of a line.
         */
        AtEndOfLine: boolean;

        /**
         * Indicates whether the stream pointer position is at the end of a stream.
         */
        AtEndOfStream: boolean;
    }

    /** Provides access to the entire collection of command-line parameters, in the order in which they were originally entered. */
    interface WshArguments {
        Count(): number;
        Item(index: number): string;
        Length: number;
        Named: WshNamed;

        /**
         * When you run the **ShowUsage** method, a help screen (referred to as the usage) appears and displays details about the script's command line options.
         * This information comes from the runtime section of the `*.WSF` file. Everything written between the `<runtime>` and `</runtime>` tags is pieced together
         * to produce what is called a "usage statement." The usage statement tells the user how to use the script.
         */
        ShowUsage(): void;
        Unnamed: WshUnnamed;
        (index: number): string;
    }

    /** Generic Collection Object */
    interface WshCollection {
        Count(): number;
        Item(Index: any): any;
        readonly length: number;
        (Index: any): any;
    }

    /** Environment Variables Collection Object */
    interface WshEnvironment {
        Count(): number;
        Item(Name: string): string;
        readonly Length: number;
        Remove(Name: string): void;
        (Name: string): string;
    }

    /** WSHExec object */
    class WshExec {
        private 'IWshRuntimeLibrary.WshExec_typekey': WshExec;
        private constructor();
        readonly ExitCode: number;
        readonly ProcessID: number;
        readonly Status: WshExecStatus;
        readonly StdErr: TextStreamWriter;
        readonly StdIn: TextStreamReader;
        readonly StdOut: TextStreamWriter;
        Terminate(): void;
    }

    /**
     * Provides access to the named command-line arguments
     *
     * Note that enumerating over this object returns the **names** of the arguments, not the values
     */
    interface WshNamed {
        Count(): number;
        Exists(Key: string): boolean;
        Item(name: string): string;
        Length: number;
        (name: string): string;
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

        /**
         * Note that **Environment** doesn't actually return a callable object; the call is only usable in the context of the **Environment** property. The following:
         *
         *     let env = new ActiveXObject('WScript.Shell').Environment;
         *     WScript.Echo(env('System'));
         *
         * will return an empty string, unless there is an environment variable named `System`
         */
        Environment: WshEnvironment & ((Type: 'System' | 'User' | 'Process' | 'Volatile') => WshEnvironment);
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

    /** Provides access to the unnamed command-line arguments */
    interface WshUnnamed {
        Count(): number;
        Item(index: number): string;
        Length: number;
        (index: number): string;
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

declare var WScript: {
    /**
     * Outputs text to either a message box (under WScript.exe) or the command console window followed by
     * a newline (under CScript.exe).
     */
    Echo(s?: any): void;

    /**
     * Exposes the write-only error output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdErr: IWshRuntimeLibrary.TextStreamWriter;

    /**
     * Exposes the write-only output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdOut: IWshRuntimeLibrary.TextStreamWriter;
    Arguments: IWshRuntimeLibrary.WshArguments;

    /**
     *  The full path of the currently running script.
     */
    ScriptFullName: string;

    /**
     * Forces the script to stop immediately, with an optional exit code.
     */
    Quit(exitCode?: number): number;

    /**
     * The Windows Script Host build version number.
     */
    BuildVersion: number;

    /**
     * Fully qualified path of the host executable.
     */
    FullName: string;

    /**
     * Gets/sets the script mode - interactive(true) or batch(false).
     */
    Interactive: boolean;

    /**
     * The name of the host executable (WScript.exe or CScript.exe).
     */
    Name: string;

    /**
     * Path of the directory containing the host executable.
     */
    Path: string;

    /**
     * The filename of the currently running script.
     */
    ScriptName: string;

    /**
     * Exposes the read-only input stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdIn: IWshRuntimeLibrary.TextStreamReader;

    /**
     * Windows Script Host version
     */
    Version: string;

    /**
     * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.
     */
    ConnectObject(objEventSource: any, strPrefix: string): void;

    /**
     * Creates a COM object.
     * @param strProgiID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
    CreateObject<K extends keyof ActiveXObjectNameMap = any>(strProgID: K, strPrefix?: string): ActiveXObjectNameMap[K];

    /**
     * Disconnects a COM object from its event sources.
     */
    DisconnectObject(obj: any): void;

    /**
     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.
     * @param strPathname Fully qualified path to the file containing the object persisted to disk.
     *                       For objects in memory, pass a zero-length string.
     * @param strProgID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
    GetObject<K extends keyof ActiveXObjectNameMap>(strPathname: string, strProgID: K, strPrefix?: string): ActiveXObjectNameMap[K];
    GetObject(strPathname: string, strProgID?: string, strPrefix?: string): any;

    /**
     * Suspends script execution for a specified length of time, then continues execution.
     * @param intTime Interval (in milliseconds) to suspend script execution.
     */
    Sleep(intTime: number): void;
};

/**
 * WSH is an alias for WScript under Windows Script Host
 */
declare var WSH: typeof WScript;

declare namespace WSHControllerLibrary {
    class WSHController {
        private 'WSHControllerLibrary.WSHController_typekey': WSHController;
        private constructor();
        CreateScript(Command: string, Server?: any): any;
    }
}

declare namespace ScriptSigner {
    class Signer {
        private 'ScriptSigner.Signer_typekey': Signer;
        private constructor();

        /** @param Store [Store='my'] */
        Sign(FileExtension: string, Text: string, Certificate: string, Store?: string): string;

        /** @param Store [Store='my'] */
        SignFile(FileName: string, Certificate: string, Store?: string): void;

        /** @param ShowUI [ShowUI=false] */
        Verify(FileExtension: string, Text: string, ShowUI?: boolean): boolean;

        /** @param ShowUI [ShowUI=false] */
        VerifyFile(FileName: string, ShowUI?: boolean): boolean;
    }
}

interface ActiveXObjectNameMap {
    'WSHController': WSHControllerLibrary.WSHController;
    'Scripting.Signer': ScriptSigner.Signer;
    'WScript.Network': IWshRuntimeLibrary.WshNetwork;
    'WScript.Shell': IWshRuntimeLibrary.WshShell;
}

interface ActiveXObject {
    set(obj: IWshRuntimeLibrary.WshEnvironment, propertyName: 'Item', parameterTypes: [string], newValue: string): void;
}
