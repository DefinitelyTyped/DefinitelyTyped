export default class XML {
    constructor();
    read(source: Document | Element | string): any;
    readFromDocument(doc: Document): any;
    readFromNode(node: Element): any;
}
