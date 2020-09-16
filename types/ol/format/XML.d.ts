export default abstract class XML {
    constructor();
    read(source: Document | Element | string): any;
    readFromDocument(doc: Document): any;
    abstract readFromNode(node: Element): any;
}
