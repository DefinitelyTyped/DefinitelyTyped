declare module "repl" {
    import * as stream from "stream";
    import * as readline from "readline";

    export interface ReplOptions {
        prompt?: string;
        input?: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        terminal?: boolean;
        eval?: Function;
        useColors?: boolean;
        useGlobal?: boolean;
        ignoreUndefined?: boolean;
        writer?: Function;
        completer?: Function;
        replMode?: any;
        breakEvalOnSigint?: any;
    }

    export interface REPLServer extends readline.ReadLine {
        context: any;
        inputStream: NodeJS.ReadableStream;
        outputStream: NodeJS.WritableStream;

        defineCommand(keyword: string, cmd: Function | { help: string, action: Function }): void;
        displayPrompt(preserveCursor?: boolean): void;

        /**
         * events.EventEmitter
         * 1. exit
         * 2. reset
         */

        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "exit", listener: () => void): this;
        addListener(event: "reset", listener: (...args: any[]) => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "exit"): boolean;
        emit(event: "reset", context: any): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "exit", listener: () => void): this;
        on(event: "reset", listener: (...args: any[]) => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "exit", listener: () => void): this;
        once(event: "reset", listener: (...args: any[]) => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "exit", listener: () => void): this;
        prependListener(event: "reset", listener: (...args: any[]) => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "exit", listener: () => void): this;
        prependOnceListener(event: "reset", listener: (...args: any[]) => void): this;
    }

    export function start(options?: string | ReplOptions): REPLServer;

    export class Recoverable extends SyntaxError {
        err: Error;

        constructor(err: Error);
    }
}
