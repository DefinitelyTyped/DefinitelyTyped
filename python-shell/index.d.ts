// Type definitions for python-shell 0.4
// Project: https://github.com/extrabacon/python-shell
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "python-shell" {
    export class PythonShell {
        on(message: string, callback: (message: string) => void): void;
        end(callback: (message: string) => void): void;
        send(message: string): void;
        send(message: any): void;

        constructor(scriptName: string, options?: InstanceOptions);
        defaultOptions: RunOptions;
    }

    export interface RunOptions {
        mode?: string;
        formatter?: string;
        parser?: string;
        encoding?: string;
        pythonPath?: string;
        pythonOptions?: Array<string>;
        scriptPath?: string;
        args?: Array<string>;
    }

    export interface InstanceOptions {
        script?: string;
        command?: string;
        stdin?: any;
        stdout?: any;
        stderr?: any;
        childProcess?: string;
        terminated?: any;
        exitCode?: any;
        args?: Array<any>;
    }

    export function run(scriptName: string, RunOptions: RunOptions, callback: (err: Error, results?: any) => void): void;
    export function run(scriptName: string, callback: (err: Error, results?: any) => void): void;
}