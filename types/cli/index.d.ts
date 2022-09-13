// Type definitions for cli v0.11.2
// Project: https://www.npmjs.com/package/cli
// Definitions by: Klaus Reimer <https://github.com/kayahr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


interface CLI {
    app: string;
    version: string;
    argv: string[];
    argc: number;
    options: any;
    args: string[];
    command: string;
    width: number;
    option_width: number;
    native: any;
    output(message?: any, ...optionalParams: any[]): void;
    exit(code: number): never;
    no_color: boolean;
    enable(...plugins: string[]): CLI;
    disable(...plugins: string[]): CLI;
    setArgv(argv: string | Array<any>, keepArg0?: boolean): void;
    next(): string;
    parse(opts?: { [long: string]: { 0: string | boolean, 1: string, 2?: string | undefined, 3?: any } },
        commands?: { [name: string]: string } | string[]): any;
    autocompleteCommand(command: string): string;
    info(msg: string): void;
    error(msg: string): void;
    ok(msg: string): void;
    debug(msg: string): void;
    fatal(msg: string): never;
    setApp(appName: string, version: string): CLI;
    setApp(packageJson: string): CLI;
    parsePackageJson(path?: string): void;
    setUsage(usage: string): CLI;
    getUsage(code?: number): void;
    getOptError(expects: string, type: string): string;
    getValue(defaultVal: string, validateFunc: (value: any) => any, errMsg: string): void;
    getInt(defaultVal: number): number;
    getDate(defaultVal: Date): Date;
    getFloat(defaultVal: number): number;
    getUrl(defautltVal: string, identifier?: string): string;
    getEmail(defaultVal: string): string;
    getIp(defaultVal: string): string;
    getPath(defaultVal: string, identifier?: string): string;
    getArrayValue<T>(arr: T[], defaultVal: T): T;
    withStdin(callback: (data: string) => void): void;
    withStdin(encoding: string, callback: (text: string) => void): void;
    withStdinLines(callback: (lines: string[], newline: string) => void): void;
    withInput(file: string, encoding: string, callback: (line: string, newline: string, eof: boolean) => void): void;
    withInput(file: string, callback: (line: string, newline: string, eof: boolean) => void): void;
    withInput(callback: (line: string, newline: string, eof: boolean) => void): void;
    toType(object: any): string;
    daemon(arg: string, callback: () => void): void;
    main(callback: (args: string[], options: any) => void): void;
    createServer(...args: any[]): any;
    exec(cmd: string, callback?: (lines: string[]) => void, errback?: (err: any, stdout: string) => void): void;
    progress(progress: number, decimals?: number, stream?: NodeJS.WritableStream): void;
    spinner(prefix?: string | boolean, end?: boolean, stream?: NodeJS.WritableStream): void;
}
declare const cli: CLI;
export = cli;
