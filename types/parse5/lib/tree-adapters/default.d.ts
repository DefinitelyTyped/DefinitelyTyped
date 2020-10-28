import * as parse5 from '../../';

interface DefaultTreeAdapterMap extends parse5.TreeAdapterMap {
    attribute: parse5.Attribute;
    childNode: parse5.ChildNode;
    commentNode: parse5.CommentNode;
    document: parse5.Document;
    documentFragment: parse5.DocumentFragment;
    documentType: parse5.DocumentType;
    element: parse5.Element;
    node: parse5.Node;
    parentNode: parse5.ParentNode;
    textNode: parse5.TextNode;
}

declare const treeAdapter: parse5.TreeAdapter<DefaultTreeAdapterMap>;

export = treeAdapter;
