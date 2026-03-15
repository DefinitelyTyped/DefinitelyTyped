declare class SnapdragonNode {
    constructor(type: string, value?: string);
    constructor(obj: { type: string; value?: string; nodes?: SnapdragonNode[]; [key: string]: any }, clone?: boolean);

    isNode: boolean;
    type: string;
    value: string;
    nodes: SnapdragonNode[] | undefined;
    parent: SnapdragonNode | undefined;

    push(node: SnapdragonNode): number;
    unshift(node: SnapdragonNode): number;
    pop(): SnapdragonNode | undefined;
    shift(): SnapdragonNode | undefined;
    remove(node: SnapdragonNode): SnapdragonNode[];
    find(type: string, n?: number): SnapdragonNode | null;
    visit(fn: (node: SnapdragonNode) => any): SnapdragonNode;
    clone(): SnapdragonNode;
    stringify(fn?: (node: SnapdragonNode) => string): string;
    isType(type: string): boolean;
    hasType(type: string): boolean;
    has(node: SnapdragonNode): boolean;
    isEmpty(fn?: (node: SnapdragonNode) => boolean): boolean;
    isInside(type: string): boolean;

    readonly siblings: SnapdragonNode[] | null;
    readonly index: number;
    readonly prev: SnapdragonNode | null;
    readonly next: SnapdragonNode | null;
    readonly first: SnapdragonNode | null;
    readonly last: SnapdragonNode | null;
    readonly depth: number;
    readonly size: number;

    static isNode(node: any): node is SnapdragonNode;
}

export = SnapdragonNode;
