export class QueueArray {
    constructor(size: any);
    _size: any;
    _array: any[];
    _popIndex: number;
    _shiftIndex: number;
    length: number;
    reset(): void;
    clear(): void;
    push(data: any): void;
    pop(): any;
    unshift(data: any): void;
    shift(): any;
    each(callback: any): void;
}
