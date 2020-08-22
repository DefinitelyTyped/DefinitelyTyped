// Type definitions for it-pushable 1.3
// Project: https://github.com/alanshaw/it-pushable
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

interface Options {
    onEnd?: (err?: Error) => any;
    writev?: boolean;
}

interface Pushable<T, R> extends AsyncIterable<R> {
    push(value: T): this;
    end(err?: Error): this;
}

declare function pushable<T>(options: Options & { writev: true }): Pushable<T, T[]>;

declare function pushable<T>(options?: Options): Pushable<T, T>;

export = pushable;
