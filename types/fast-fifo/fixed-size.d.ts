export = FixedFIFO;
declare class FixedFIFO<T> {
    constructor(hwm: number);
    buffer: T[];
    mask: number;
    top: number;
    btm: number;
    next: FixedFIFO<T> | null;
    push(data: T): boolean;
    shift(): T | undefined;
    isEmpty(): boolean;
}
