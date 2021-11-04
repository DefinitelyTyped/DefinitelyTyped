export default abstract class XML {
    constructor();
    /**
     * Read the source document.
     */
    read(source: Document | Element | string): any;
    readFromDocument(doc: Document): any;
    abstract readFromNode(node: Element): any;
}
