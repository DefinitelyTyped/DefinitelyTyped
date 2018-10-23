// Type definitions for node-powershell v3.1.1
// Project: https://github.com/rannn505/node-powershell
// Definitions by: Rodrigo F. Fernandes <https://github.com/rodrigoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'node-powershell' {
    module NodePowershell {
        export interface ShellOptions {
            /**
             * Determines whether to log verbose to the console.
             */
            debugMsg?: boolean;

            /**
             * Sets the input encoding for the current shell.
             */
            inputEncoding?: string;

            /**
             * Sets the output encoding for the current shell.
             */
            outputEncoding?: string;

            /**
             * Sets the default execution policy for the current shell session
             */
            executionPolicy?: string;

            /**
             * Determines whether to load the Windows PS profile
             */
            noProfile?: boolean;
        }

        export interface ShellStream {
            stdin: NodeJS.WritableStream;
            stdout: NodeJS.ReadableStream;
            err: NodeJS.ReadableStream;
        }
    }

    class NodePowershell {
        /**
         * An array containing the command history ever added to the shell instance.
         */
        history: string[];

        /**
         * An object containing the sdtio (in,out,err) [stream.Readable] of the PowerShell Instance.
         */
        streams: NodePowershell.ShellStream;

        /**
         * Creates a new Shell instance.
         */
        constructor(options: NodePowershell.ShellOptions);

        /**
         * Adds a command to the end of the pipeline of the shell object.
         * @param {string} required - PowerShell command - PowerShell script
         * @param {array} optional - {name: ‘’, value: ‘’} - {name: value} - ‘switch’
         * @returns Every command currently in the pipeline.
         */
        addCommand(command: string, params?: string[] | { [key: string]: string }[]): Promise<string[]>;

        /**
         * Runs the commands of the shell object pipeline.
         * @returns Promise with the command output.
         */
        invoke(): Promise<string>;

        /**
         * Releases all resources used by the shell object and closes the PowerShell child_process.
         * @returns Promise with the error message.
         */
        dispose(): Promise<string>;

        /**
         * Listens to events emitted from the shell.
         * @param eventName required - Possible events:
         *  'output' - Emits when shell has an output.
         *  'err' - Emits when shell has an error.
         *  'end' - Emits when shell ends.
         * @param callback required - Callback function to be called when the event emits.
         */
        on(eventName: string, callback: (output: string) => void): void;
    }

    export = NodePowershell;
}
