/**
 * readline/promises
 * @since v17.0.0
 */
declare module 'readline/promises' {
    import { EventEmitter } from "events";
    import { CursorPos, ReadLineOptions, Direction, CompleterResult, Key } from "readline";
    interface InterfaceEvents {
        close: () => void;
        line: (input: string) => void;
        history: (history: string[]) => void;
        pause: () => void;
        resume: () => void;
        SIGCONT: () => void;
        SIGINT: () => void;
        SIGTSTP: () => void;
    }
    type Completer = (line: string) => CompleterResult | Promise<CompleterResult>;
    class Interface extends EventEmitter {
        readonly terminal: boolean;
        readonly line: string;
        readonly cursor: number;
        protected constructor(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean);
        protected constructor(options: ReadLineOptions);
        getPrompt(): string;
        setPrompt(prompt: string): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, options?: { signal: AbortSignal }): Promise<string>;
        pause(): this;
        resume(): this;
        close(): void;
        write(data: string | Buffer, key?: Key): void;
        write(data: undefined | null | string | Buffer, key: Key): void;
        getCursorPos(): CursorPos;
        on<K extends keyof InterfaceEvents>(event: K, listener: InterfaceEvents[K]): this;
        once<K extends keyof InterfaceEvents>(event: K, listener: InterfaceEvents[K]): this;
        off<K extends keyof InterfaceEvents>(event: K, listener: InterfaceEvents[K]): this;
        emit<K extends keyof InterfaceEvents>(event: K, ...args: Parameters<InterfaceEvents[K]>): boolean;
        addListener<K extends keyof InterfaceEvents>(eventName: K, listener: InterfaceEvents[K]): this;
        removeListener<K extends keyof InterfaceEvents>(eventName: K, listener: InterfaceEvents[K]): this;
        removeAllListeners(eventName?: keyof InterfaceEvents): this;
        listeners<K extends keyof InterfaceEvents>(eventName: K): Array<InterfaceEvents[K]>;
        rawListeners<K extends keyof InterfaceEvents>(eventName: K): Array<InterfaceEvents[K]>;
        eventNames(): Array<keyof InterfaceEvents>;
        listenerCount(eventName: keyof InterfaceEvents): number;
        prependListener<K extends keyof InterfaceEvents>(eventName: K, listener: InterfaceEvents[K]): this;
        prependOnceListener<K extends keyof InterfaceEvents>(eventName: K, listener: InterfaceEvents[K]): this;
    }
    type ReadLine = Interface;

    function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean): Interface;
    function createInterface(options: ReadLineOptions): Interface;

    class Readline {
        constructor(stream: NodeJS.WritableStream, options?: { autoCommit?: boolean });
        clearLine(direction: Direction): this;
        clearScreenDown(): this;
        commit(): Promise<void>;
        cursorTo(x: number, y?: number): this;
        moveCursor(dx: number, dy: number): this;
        rollback(): this;
    }
}
declare module 'node:readline/promises' {
    export * from 'readline/promises';
}
