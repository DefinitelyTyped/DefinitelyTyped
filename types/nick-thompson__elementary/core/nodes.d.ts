export declare class Node
{
    constructor(type: string, props: {}, children: Node[]);

    static isNode(toCheck: any): toCheck is Node;
}
