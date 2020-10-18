import {TreeAdapter, TreeAdapterMap} from '../../';

declare module "parse5/lib/tree-adapters/default" {
    export interface DefaultTreeAdapterMap extends TreeAdapterMap {
        document: Document;
        element: Element;
        parentNode: ParentNode;
        commentNode: CommentNode;
        attribute: Attribute;
        node: Node;
        documentFragment: DocumentFragment;
        childNode: ChildNode;
        documentType: DocumentType;
        textNode: TextNode;
    }

    export const adoptAttributes: TreeAdapter<DefaultTreeAdapterMap>['adoptAttributes'];
    export const appendChild: TreeAdapter<DefaultTreeAdapterMap>['appendChild'];
    export const createCommentNode: TreeAdapter<DefaultTreeAdapterMap>['createCommentNode'];
    export const createDocument: TreeAdapter<DefaultTreeAdapterMap>['createDocument'];
    export const createDocumentFragment: TreeAdapter<DefaultTreeAdapterMap>['createDocumentFragment'];
    export const createElement: TreeAdapter<DefaultTreeAdapterMap>['createElement'];
    export const detachNode: TreeAdapter<DefaultTreeAdapterMap>['detachNode'];
    export const getAttrList: TreeAdapter<DefaultTreeAdapterMap>['getAttrList'];
    export const getChildNodes: TreeAdapter<DefaultTreeAdapterMap>['getChildNodes'];
    export const getCommentNodeContent: TreeAdapter<DefaultTreeAdapterMap>['getCommentNodeContent'];
    export const getDocumentMode: TreeAdapter<DefaultTreeAdapterMap>['getDocumentMode'];
    export const getDocumentTypeNodeName: TreeAdapter<DefaultTreeAdapterMap>['getDocumentTypeNodeName'];
    export const getDocumentTypeNodePublicId: TreeAdapter<DefaultTreeAdapterMap>['getDocumentTypeNodePublicId'];
    export const getDocumentTypeNodeSystemId: TreeAdapter<DefaultTreeAdapterMap>['getDocumentTypeNodeSystemId'];
    export const getFirstChild: TreeAdapter<DefaultTreeAdapterMap>['getFirstChild'];
    export const getNamespaceURI: TreeAdapter<DefaultTreeAdapterMap>['getNamespaceURI'];
    export const getNodeSourceCodeLocation: TreeAdapter<DefaultTreeAdapterMap>['getNodeSourceCodeLocation'];
    export const getParentNode: TreeAdapter<DefaultTreeAdapterMap>['getParentNode'];
    export const getTagName: TreeAdapter<DefaultTreeAdapterMap>['getTagName'];
    export const getTextNodeContent: TreeAdapter<DefaultTreeAdapterMap>['getTextNodeContent'];
    export const getTemplateContent: TreeAdapter<DefaultTreeAdapterMap>['getTemplateContent'];
    export const insertBefore: TreeAdapter<DefaultTreeAdapterMap>['insertBefore'];
    export const insertText: TreeAdapter<DefaultTreeAdapterMap>['insertText'];
    export const insertTextBefore: TreeAdapter<DefaultTreeAdapterMap>['insertTextBefore'];
    export const isCommentNode: TreeAdapter<DefaultTreeAdapterMap>['isCommentNode'];
    export const isDocumentTypeNode: TreeAdapter<DefaultTreeAdapterMap>['isDocumentTypeNode'];
    export const isElementNode: TreeAdapter<DefaultTreeAdapterMap>['isElementNode'];
    export const isTextNode: TreeAdapter<DefaultTreeAdapterMap>['isTextNode'];
    export const setDocumentMode: TreeAdapter<DefaultTreeAdapterMap>['setDocumentMode'];
    export const setDocumentType: TreeAdapter<DefaultTreeAdapterMap>['setDocumentType'];
    export const setNodeSourceCodeLocation: TreeAdapter<DefaultTreeAdapterMap>['setNodeSourceCodeLocation'];
    export const setTemplateContent: TreeAdapter<DefaultTreeAdapterMap>['setTemplateContent'];
}
