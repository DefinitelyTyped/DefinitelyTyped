// Type definitions for node-powershell 4.0
// Project: https://github.com/rannn505/node-powershell
// Definitions by: Rodrigo F. Fernandes <https://github.com/rodrigoff>
//                 Jeroen "Favna" Claassens <https://github.com/favna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface NodePowershellShellOptions {
    /**
     * Determines whether to log verbose to the console.
     */
    debugMsg?: boolean;

    /**
     * Sets the input encoding for the current shell.
     * @default 'utf8'
     */
    inputEncoding?: string;

    /**
     * Sets the output encoding for the current shell.
     * @default 'utf8'
     */
    outputEncoding?: string;

    /**
     * Sets the default execution policy for the current shell session
     */
    executionPolicy?: "Bypass";

    /**
     * Determines whether to load the Windows PS profile
     */
    noProfile?: boolean;

    /**
     * Instructs the Shell the use pwsh as the PowerShell runspace
     * @default false
     */
    pwsh?: boolean;

    /**
     * Instruct the Shell to use pwsh-preview as the PowerShell runspace.
     * @default true
     */
    pwshPrev?: boolean;

    /**
     * Determines whether to log verbose to the console.
     * @default true
     */
    verbose?: boolean;
}

interface NodePowerShellStream {
    stdin: NodeJS.WritableStream;
    stdout: NodeJS.ReadableStream;
    err: NodeJS.ReadableStream;
}

/**
 * Structure for a single Shell parameter
 */
interface NodeShellParameter {
    /**
     * The name of the parameter
     */
    name?: string;
    /**
     * The value of the parameter
     * @remark for switches this should be `''` (empty string), or `undefined`
     */
    value?: string | number | boolean | unknown[] | Record<PropertyKey, unknown> | Date;

    /**
     * The name of the parameter with the value as its direct value
     * @remark for switches this should be `''` (empty string), or `undefined`
     */
    [key: string]: string | number | boolean | unknown[] | Record<PropertyKey, unknown> | Date | undefined;
}

declare class NodePowershell {
    /**
     * An object containing the {@link https://nodejs.org/api/child_process.html#child_process_child_stderr sdtio (in, out, err)}
     * {@link https://nodejs.org/api/stream.html#stream_class_stream_readable [stream.Readable]} of the PowerShell Instance.
     */
    streams: NodePowerShellStream;

    /**
     * A number representing the process id the PowerShell instance got.
     */
    pid: number;

    /**
     * An array containing the commands that currently in the pipeline (before invoke() called).
     */
    commands: string[];

    /**
     * An array containing the commands ever invoked in the shell, and their results.
     */
    history: unknown[];

    /**
     * A string representing the execution state of the current PowerShell instance
     *
     * Read more: {@link https://docs.microsoft.com/en-us/dotnet/api/system.management.automation.psinvocationstate?view=powershellsdk-1.1.0}
     */
    invocationStateInfo: string;

    /**
     * A boolean determines whether to log verbose to the console.
     */
    verbose: boolean;

    /**
     * Creates a new Shell instance.
     * By default this starts a {@link https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-5.1 powershell v5.1} process on Windows,
     * and a {@link https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.1 PowerShell Core (pwsh) (>= v7)} process on Linux and macOS.
     *
     * @remark For the best PowerShell performance **on Windows** it is recommended to set `pwsh` to true and install PowerShell Core
     */
    constructor(options?: NodePowershellShellOptions);

    /**
     * Adds a command to the end of the pipeline of the shell object.
     * @param command A PowerShell command or a path to a PowerShell script.
     * @returns A promise that fulfills with the array of commands currently in the pipeline, or rejects with an error.
     * @example
     * ```ts
     * await ps.addCommand('Write-Host "Node-Powershell is pretty cool!"')
     * ```
     * @example
     * ```ts
     * await ps.addCommand('New-Item -ItemType Directory -Force -Path C:\\NodePowerShell | Out-Null')
     * ```
     */
    addCommand(command: string): Promise<string[]>;

    /**
     * Listens to events emitted from the shell.
     * @param eventName required - Possible events:
     * - `output` - Emits when shell has an output.
     * - `err` - Emits when shell has an error.
     * - `end` - Emits when shell ends.
     * @param callback required - Callback function to be called when the event emits.
     */
    on(eventName: "output" | "err" | "end", callback: (output: string) => void): void;

    /**
     * Adds an argument to the last added command.
     * @param argument The argument to add to the last command
     * @returns A promise that fulfills with the array of commands currently in the pipeline, or rejects with an error.
     * @example
     * ```ts
     * await ps.addCommand('Write-Host');
     * await ps.addParameter({ ForegroundColor: 'Cyan' });
     * await ps.addArgument('Node-PowerShell is pretty cool!');
     * ```
     */
    addArgument(argument: string): Promise<string[]>;

    /**
     * Adds a parameter to the last added command.
     * @param parameter The parameter to add to the last command.
     * @returns A promise that fulfills with the array of commands currently in the pipeline, or rejects with an error.
     * @example
     * ```ts
     * await ps.addCommand('Write-Host');
     * await ps.addParameter({ ForegroundColor: 'Cyan' });
     * ```
     */
    addParameter(parameter: NodeShellParameter): Promise<string[]>;

    /**
     * Adds multiple parameters to the last added command.
     * @param parameters The parameters array to add to the last command
     * @returns A promise that fulfills with the array of commands currently in the pipeline, or rejects with an error.
     * @example
     * ```ts
     * await ps.addCommand('Write-Host "Node-PowerShell is pretty cool!"');
     * await powershell.addParameters([
     *     { name: "ForegroundColor", value: "Red" },
     *     { name: "BackgroundColor", value: "DarkGray" },
     *     { name: "NoNewLine", value: true },
     * ]);
     * ```
     */
    addParameters(parameters: NodeShellParameter[]): Promise<string[]>;

    /**
     * Empty the commands array.
     * @returns A promise that fulfills with an empty array of commands.
     */
    clear(): Promise<unknown[]>;

    /**
     * Runs the commands currently in the shell object pipeline.
     * @returns A promise that fulfills with the output of all the commands that were in the pipeline before the call to this function, or rejects with an error.
     */
    invoke(): Promise<string>;

    /**
     * Releases all resources used by the shell object and closes the PowerShell `child_process`.
     * @returns A promise that fulfills with the exit code of the child_process, or rejects with an error.
     */
    dispose(): Promise<string>;
}

declare namespace NodePowershell {
    type ShellOptions = NodePowershellShellOptions;
    type PowerShellStream = NodePowerShellStream;
    type ShellParameter = NodeShellParameter;
}

export = NodePowershell;
