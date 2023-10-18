/// <reference types="activex-iwshruntimelibrary" />

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

/** Provides access to the unnamed command-line arguments */
interface WshUnnamed {
    Count(): number;
    Item(index: number): string;
    Length: number;
    (index: number): string;
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
    Arguments: WshArguments;

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
    GetObject<K extends keyof ActiveXObjectNameMap>(
        strPathname: string,
        strProgID: K,
        strPrefix?: string,
    ): ActiveXObjectNameMap[K];
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
