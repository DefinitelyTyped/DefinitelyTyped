// Type definitions for fast-fifo 1.0
// Project: https://github.com/mafintosh/fast-fifo
// Definitions by: Alex Potsides <https://github.com/achingbrain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = FastFIFO;
declare class FastFIFO<T> {
    constructor(hwm?: number);
    hwm: number;
    head: FixedFIFO<T>;
    tail: FixedFIFO<T>;
    push(val: T): void;
    shift(): T | undefined;
    isEmpty(): boolean;
}
import FixedFIFO = require("./fixed-size");
