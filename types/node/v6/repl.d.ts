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
        defineCommand(keyword: string, cmd: Function | { help: string, action: Function }): void;
        displayPrompt(preserveCursor?: boolean): void;

        context: any;

        /**
         * events.EventEmitter
         * 1. exit
         * 2. reset
         **/

        addListener(event: string, listener: Function): this;
        addListener(event: "exit", listener: () => void): this;
        addListener(event: "reset", listener: Function): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "exit"): boolean;
        emit(event: "reset", context: any): boolean;

        on(event: string, listener: Function): this;
        on(event: "exit", listener: () => void): this;
        on(event: "reset", listener: Function): this;

        once(event: string, listener: Function): this;
        once(event: "exit", listener: () => void): this;
        once(event: "reset", listener: Function): this;

        prependListener(event: string, listener: Function): this;
        prependListener(event: "exit", listener: () => void): this;
        prependListener(event: "reset", listener: Function): this;

        prependOnceListener(event: string, listener: Function): this;
        prependOnceListener(event: "exit", listener: () => void): this;
        prependOnceListener(event: "reset", listener: Function): this;
    }

    export function start(options?: string | ReplOptions): REPLServer;
}
