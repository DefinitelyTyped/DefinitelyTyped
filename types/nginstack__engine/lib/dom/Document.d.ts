export = Document;
declare function Document(): void;
declare class Document {
    readonly doctype: DocumentType;
    documentElement: Element;
    createElement(tagName: string): Element;
    createDocumentFragment(): DocumentFragment;
    createTextNode(data: string): Text;
    createComment(data: string): Comment;
    createCDATASection(data: string): CDATASection;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    createAttribute(name: string): Attr;
    createEntityReference(name: string): EntityReference;
    getElementsByTagName(tagName: string): NodeList;
    getElementById(elementId: string): Element;
    load(path: string): boolean;
    loadXML(xml: string): void;
}
declare namespace Document {
    export {
        Attr,
        NodeList,
        DocumentType,
        Element,
        DocumentFragment,
        Text,
        Comment,
        CDATASection,
        ProcessingInstruction,
        EntityReference,
    };
}
type DocumentType = import('./DocumentType');
type Element = import('./Element');
type DocumentFragment = import('./DocumentFragment');
type Text = import('./Text');
type Comment = import('./Comment');
type CDATASection = import('./CDATASection');
type ProcessingInstruction = import('./ProcessingInstruction');
type Attr = import('./Attr');
type EntityReference = import('./EntityReference');
type NodeList = import('./NodeList');
