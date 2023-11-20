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
