export class Node {
    childNodes: Node[];
    readonly children: Node[];
    readonly firstChild: Node | undefined;
    readonly lastChild: Node | undefined;
    readonly nodeName: string;
    readonly nodeValue: any;

    cloneNode(deep?: boolean): Node;
}
