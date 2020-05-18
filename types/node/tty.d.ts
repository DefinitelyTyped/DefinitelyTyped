declare module "tty" {
    import * as net from "net";

    function isatty(fd: number): boolean;
    class ReadStream extends net.Socket {
        constructor(fd: number, options?: net.SocketConstructorOpts);
        isRaw: boolean;
        setRawMode(mode: boolean): this;
        isTTY: boolean;
    }
    /**
     * -1 - to the left from cursor
     *  0 - the entire line
     *  1 - to the right from cursor
     */
    type Direction = -1 | 0 | 1;

    interface WriteStreamEventMap extends net.SocketEventMap {
        "resize": () => void;
    }

    class WriteStream extends net.Socket {
        constructor(fd: number);

        addListener<K extends keyof WriteStreamEventMap>(event: K, listener: WriteStreamEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof WriteStreamEventMap>(event: K, ...args: WriteStreamEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof WriteStreamEventMap>(event: K, listener: WriteStreamEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof WriteStreamEventMap>(event: K, listener: WriteStreamEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof WriteStreamEventMap>(event: K, listener: WriteStreamEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof WriteStreamEventMap>(event: K, listener: WriteStreamEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof WriteStreamEventMap>(event: K, listener: WriteStreamEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof WriteStreamEventMap>(event: K, listener: WriteStreamEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof WriteStreamEventMap>(event: K): Array<WriteStreamEventMap[K]>;
        listeners(event: string | symbol): Function[];

        /**
         * Clears the current line of this WriteStream in a direction identified by `dir`.
         */
        clearLine(dir: Direction, callback?: () => void): boolean;
        /**
         * Clears this `WriteStream` from the current cursor down.
         */
        clearScreenDown(callback?: () => void): boolean;
        /**
         * Moves this WriteStream's cursor to the specified position.
         */
        cursorTo(x: number, y?: number, callback?: () => void): boolean;
        cursorTo(x: number, callback: () => void): boolean;
        /**
         * Moves this WriteStream's cursor relative to its current position.
         */
        moveCursor(dx: number, dy: number, callback?: () => void): boolean;
        /**
         * @default `process.env`
         */
        getColorDepth(env?: {}): number;
        hasColors(depth?: number): boolean;
        hasColors(env?: {}): boolean;
        hasColors(depth: number, env?: {}): boolean;
        getWindowSize(): [number, number];
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}
