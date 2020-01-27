export default abstract class XML {
    constructor();
    read(source: Document | Element | string): any;
    abstract readFromDocument(doc: Document): any;
    abstract readFromNode(node: Element): any;
}
