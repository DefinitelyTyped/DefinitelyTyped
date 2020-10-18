import * as parse5 from '../../';

interface DefaultTreeAdapterMap extends parse5.TreeAdapterMap {
    document: parse5.Document;
    element: parse5.Element;
    parentNode: parse5.ParentNode;
    commentNode: parse5.CommentNode;
    attribute: parse5.Attribute;
    node: parse5.Node;
    documentFragment: parse5.DocumentFragment;
    childNode: parse5.ChildNode;
    documentType: parse5.DocumentType;
    textNode: parse5.TextNode;
}

declare const treeAdapter: parse5.TreeAdapter<DefaultTreeAdapterMap>;

export = treeAdapter;
