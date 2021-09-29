export class Stack {
    constructor(size?: number);
    _current: Node;
    _head: Node;
    current(): Node;
    push(data: any): void;
    pop(data: any): any;
    popPrev(data: any): any;
}
declare class Node {
    next: any;
    prev: any;
    data: any;
}
export {};
