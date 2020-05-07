// Type definitions for tail 2.0
// Project: https://github.com/lucagrulla/node-tail, https://www.lucagrulla.com/node-tail
// Definitions by: Mike Linkovich <https://github.com/spacejack>
//                 Devin Davies <https://github.com/devindavies>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace Tail {
    interface TailOptions {
        separator?: string | RegExp | null;
        fromBeginning?: boolean;
        fsWatchOptions?: Record<string, any>;
        follow?: boolean;
        logger?: any;
        encoding?: string;
        useWatchFile?: boolean;
        flushAtEOF?: boolean;
    }

    interface Tail {
        /** Callback to listen for newlines appended to file */
        on(eventType: 'line', cb: (data: any) => void): void;
        /** Error callback */
        on(eventType: 'error', cb: (error: any) => void): void;
        /** Stop watching file */
        unwatch(): void;
        /** Start watching file if previously stopped */
        watch(): void;
    }

    interface TailConstructor {
        /** Creates a new Tail object that starts watching the specified file immediately. */
        new (filename: string, options?: TailOptions): Tail;
    }

    interface Static {
        Tail: TailConstructor;
    }
}

declare const Tail: Tail.Static;
export = Tail;
