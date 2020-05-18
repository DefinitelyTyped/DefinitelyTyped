declare module "readline" {
    import * as events from "events";
    import * as stream from "stream";

    interface Key {
        sequence?: string;
        name?: string;
        ctrl?: boolean;
        meta?: boolean;
        shift?: boolean;
    }

    interface InterfaceEventMap {
        "close": () => void;
        "line": (input: string) => void;
        "pause": () => void;
        "resume": () => void;
        "SIGCONT": () => void;
        "SIGINT": () => void;
        "SIGTSTP": () => void;
    }

    class Interface extends events.EventEmitter {
        readonly terminal: boolean;

        // Need direct access to line/cursor data, for use in external processes
        // see: https://github.com/nodejs/node/issues/30347
        /** The current input data */
        readonly line: string;
        /** The current cursor position in the input line */
        readonly cursor: number;

        /**
         * NOTE: According to the documentation:
         *
         * > Instances of the `readline.Interface` class are constructed using the
         * > `readline.createInterface()` method.
         *
         * @see https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface
         */
        protected constructor(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean);
        /**
         * NOTE: According to the documentation:
         *
         * > Instances of the `readline.Interface` class are constructed using the
         * > `readline.createInterface()` method.
         *
         * @see https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface
         */
        protected constructor(options: ReadLineOptions);

        setPrompt(prompt: string): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: (answer: string) => void): void;
        pause(): this;
        resume(): this;
        close(): void;
        write(data: string | Buffer, key?: Key): void;

        /**
         * Returns the real position of the cursor in relation to the input
         * prompt + string.  Long input (wrapping) strings, as well as multiple
         * line prompts are included in the calculations.
         */
        getCursorPos(): CursorPos;

        /*
         * events.EventEmitter
         * 1. close
         * 2. line
         * 3. pause
         * 4. resume
         * 5. SIGCONT
         * 6. SIGINT
         * 7. SIGTSTP
         */

        addListener<K extends keyof InterfaceEventMap>(event: K, listener: InterfaceEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof InterfaceEventMap>(event: K, ...args: InterfaceEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof InterfaceEventMap>(event: K, listener: InterfaceEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof InterfaceEventMap>(event: K, listener: InterfaceEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof InterfaceEventMap>(event: K, listener: InterfaceEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof InterfaceEventMap>(event: K, listener: InterfaceEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof InterfaceEventMap>(event: K, listener: InterfaceEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof InterfaceEventMap>(event: K, listener: InterfaceEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof InterfaceEventMap>(event: K): Array<InterfaceEventMap[K]>;
        listeners(event: string | symbol): Function[];

        [Symbol.asyncIterator](): AsyncIterableIterator<string>;
    }

    type ReadLine = Interface; // type forwarded for backwards compatiblity

    type Completer = (line: string) => CompleterResult;
    type AsyncCompleter = (line: string, callback: (err?: null | Error, result?: CompleterResult) => void) => any;

    type CompleterResult = [string[], string];

    interface ReadLineOptions {
        input: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        completer?: Completer | AsyncCompleter;
        terminal?: boolean;
        historySize?: number;
        prompt?: string;
        crlfDelay?: number;
        removeHistoryDuplicates?: boolean;
        escapeCodeTimeout?: number;
        tabSize?: number;
    }

    function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean): Interface;
    function createInterface(options: ReadLineOptions): Interface;
    function emitKeypressEvents(stream: NodeJS.ReadableStream, readlineInterface?: Interface): void;

    type Direction = -1 | 0 | 1;

    interface CursorPos {
        rows: number;
        cols: number;
    }

    /**
     * Clears the current line of this WriteStream in a direction identified by `dir`.
     */
    function clearLine(stream: NodeJS.WritableStream, dir: Direction, callback?: () => void): boolean;
    /**
     * Clears this `WriteStream` from the current cursor down.
     */
    function clearScreenDown(stream: NodeJS.WritableStream, callback?: () => void): boolean;
    /**
     * Moves this WriteStream's cursor to the specified position.
     */
    function cursorTo(stream: NodeJS.WritableStream, x: number, y?: number, callback?: () => void): boolean;
    /**
     * Moves this WriteStream's cursor relative to its current position.
     */
    function moveCursor(stream: NodeJS.WritableStream, dx: number, dy: number, callback?: () => void): boolean;
}
