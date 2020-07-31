import XML from './XML';

export default class WMTSCapabilities extends XML {
    constructor();
    readFromDocument(doc: Document): any;
    readFromNode(node: Element): any;
}
