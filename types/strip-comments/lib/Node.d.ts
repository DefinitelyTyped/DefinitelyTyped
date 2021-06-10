export class Node {
    type: string;
    match: boolean;
    newline: string;
    value: string;
    nodes: [];
    readonly protected: boolean;
    constructor(node: Node);
}

export class Block extends Node {
    readonly protected: boolean;
    constructor(node: Node);
    push(node: Node): void;
}
