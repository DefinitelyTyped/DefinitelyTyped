// Type definitions for Windows Script Host Object Model - IWshRuntimeLibrary 1.0
// Project: https://msdn.microsoft.com/en-us/library/9bbdkx3k(v=vs.84).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare namespace IWshRuntimeLibrary {
    const enum ButtonType {
        OK,
        OKCancel,
        AbortRetryIgnore,
        YesNoCancel,
        YesNo,
        RetryCancel,
        CancelTryagainContinue
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
        AddPrinterConnection(LocalName: string, RemoteName: string, UpdateProfile?: any, UserName?: any, Password?: any): void;

        /**
         * @param string [DriverName='']
         * @param string [Port='LPT1']
         */
        AddWindowsPrinterConnection(PrinterName: string, DriverName?: string, Port?: string): void;
        readonly ComputerName: string;
        EnumNetworkDrives(): WshCollection;
        EnumPrinterConnections(): WshCollection;
        MapNetworkDrive(LocalName: string, RemoteName: string, UpdateProfile?: any, UserName?: any, Password?: any): void;
        readonly Organization: string;
        RemoveNetworkDrive(Name: string, Force?: any, UpdateProfile?: any): void;
        RemovePrinterConnection(Name: string, Force?: any, UpdateProfile?: any): void;
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
        AppActivate(App: any, Wait?: any): boolean;
        CreateShortcut(PathLink: string): any;
        CurrentDirectory: string;
        Environment(Type?: any): WshEnvironment;
        Exec(Command: string): WshExec;
        ExpandEnvironmentStrings(Src: string): string;

        /** @param string [Target=''] */
        LogEvent(Type: any, Message: string, Target?: string): boolean;
        Popup(Text: any, SecondsToWait?: number, Title?: string, Type?: ButtonType | IconType | PopupType): PopupSelection;
        RegDelete(Name: string): void;
        RegRead(Name: string): any;
        RegWrite(Name: string, Value: any, Type?: any): void;
        Run(Command: string, WindowStyle?: any, WaitOnReturn?: any): number;
        SendKeys(Keys: string, Wait?: any): void;
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
        WindowStyle: number;
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
