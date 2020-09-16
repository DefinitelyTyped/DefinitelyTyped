// Type definitions for p-fifo 1.0
// Project: https://github.com/alanshaw/p-fifo
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = PFifo;

declare class PFifo<T> {
    constructor();
    push(chunk: T): Promise<void>;
    shift(): Promise<T>;
    isEmpty(): boolean;
}
