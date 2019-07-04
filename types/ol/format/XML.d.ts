export default class XML {
    constructor();
    read(source: Document | Element | string): { [key: string]: any };
    readFromDocument(doc: Document): { [key: string]: any };
    readFromNode(node: Element): { [key: string]: any };
}
