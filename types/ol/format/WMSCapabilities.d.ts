import { Extent } from '../extent';
import XML from './XML';

export default class WMSCapabilities extends XML {
    constructor();
    readFromDocument(doc: Document): any;
    readFromNode(node: Element): any;
}
