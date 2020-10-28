import * as parse5 from '../../';

interface DefaultTreeAdapterMap extends parse5.TreeAdapterMap {
    document: parse5.Document;
    element: parse5.Element;
    commentNode: parse5.CommentNode;
    attribute: parse5.Attribute;
    node: parse5.Node;
    documentFragment: parse5.DocumentFragment;
    documentType: parse5.DocumentType;
    textNode: parse5.TextNode;
    parentNode: parse5.ParentNode;
    childNode: parse5.ChildNode;
}

declare const treeAdapter: parse5.TreeAdapter<DefaultTreeAdapterMap>;

export = treeAdapter;
