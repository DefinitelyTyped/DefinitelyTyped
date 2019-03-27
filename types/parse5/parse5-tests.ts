import * as parse5 from "parse5";

// Shorthands
// parse
const document = parse5.parse("<html>");

document; // $ExpectType Document

const defaultAdapter = new Object() as parse5.TreeAdapter;

parse5.parse("<html>", {}); // $ExpectType Document
parse5.parse("<html>", { sourceCodeLocationInfo: true }); // $ExpectType Document
parse5.parse("<html>", { treeAdapter: defaultAdapter }); // $ExpectType Document

let opt = {
    sourceCodeLocationInfo: true,
    scriptingEnabled: false,
    treeAdapter: defaultAdapter
};

parse5.parse("<html>", opt); // $ExpectType Document

opt = {
    sourceCodeLocationInfo: true,
    scriptingEnabled: false,
    treeAdapter: defaultAdapter
};

parse5.parse("<html>", opt); // $ExpectType Document

// parseFragment
const fragment = parse5.parseFragment("<div>");

fragment; // $ExpectType DocumentFragment

parse5.parseFragment("<div>", {});
parse5.parseFragment("<div>", { sourceCodeLocationInfo: true });
parse5.parseFragment("<div>", { treeAdapter: defaultAdapter });
parse5.parseFragment("<div>", {
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});
parse5.parseFragment("<div>", {
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});

const element = (parse5.parseFragment(
    "<div>"
) as parse5.DefaultTreeDocumentFragment).childNodes[0] as parse5.Element;

parse5.parseFragment(element, "<div>");
parse5.parseFragment(element, "<div>", {});
parse5.parseFragment(element, "<div>", { sourceCodeLocationInfo: true });
parse5.parseFragment(element, "<div>", {
    treeAdapter: defaultAdapter
});
parse5.parseFragment(element, "<div>", {
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});
parse5.parseFragment(element, "<div>", {
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});

// serialize
const html = parse5.serialize(element);

html; // $ExpectType string

parse5.serialize(element, { treeAdapter: defaultAdapter });
parse5.serialize(element, { treeAdapter: defaultAdapter });

// Location info
const loc = (element as parse5.DefaultTreeElement).sourceCodeLocation!;

loc.startLine; // $ExpectType number
loc.startCol; // $ExpectType number
loc.endLine; // $ExpectType number
loc.endCol; // $ExpectType number
loc.startOffset; // $ExpectType number
loc.endOffset; // $ExpectType number

loc.startTag.startLine; // $ExpectType number
loc.startTag.startCol; // $ExpectType number
loc.startTag.endLine; // $ExpectType number
loc.startTag.endCol; // $ExpectType number
loc.startTag.startOffset; // $ExpectType number
loc.startTag.endOffset; // $ExpectType number

loc.startTag.attrs["someAttr"].startLine; // $ExpectType number
loc.startTag.attrs["someAttr"].startCol; // $ExpectType number
loc.startTag.attrs["someAttr"].endLine; // $ExpectType number
loc.startTag.attrs["someAttr"].endCol; // $ExpectType number
loc.startTag.attrs["someAttr"].startOffset; // $ExpectType number
loc.startTag.attrs["someAttr"].endOffset; // $ExpectType number

loc.endTag.startLine; // $ExpectType number
loc.endTag.startCol; // $ExpectType number
loc.endTag.endLine; // $ExpectType number
loc.endTag.endCol; // $ExpectType number
loc.endTag.startOffset; // $ExpectType number
loc.endTag.endOffset; // $ExpectType number

// Default AST
const defaultDocument = document as parse5.DefaultTreeDocument;

defaultDocument.nodeName; // $ExpectType "#document"
defaultDocument.mode; // $ExpectType DocumentMode

const defaultDoctype = document as parse5.DefaultTreeDocumentType;

defaultDoctype.name; // $ExpectType string
defaultDoctype.publicId; // $ExpectType string
defaultDoctype.systemId; // $ExpectType string

const defaultDocumentFragment = fragment as parse5.DefaultTreeDocumentFragment;

defaultDocumentFragment.nodeName; // $ExpectType "#document-fragment"

const defaultElement = defaultDocument
    .childNodes[0] as parse5.DefaultTreeElement;

defaultElement.sourceCodeLocation!; // $ExpectType ElementLocation
defaultElement.namespaceURI; // $ExpectType string
defaultElement.nodeName; // $ExpectType string
defaultElement.tagName; // $ExpectType string
defaultElement.parentNode; // $ExpectType DefaultTreeParentNode

const defaultAttr = defaultElement.attrs[0];

defaultAttr.name; // $ExpectType string
defaultAttr.namespace!; // $ExpectType string
defaultAttr.prefix!; // $ExpectType string
defaultAttr.value; // $ExpectType string

const defaultTextNode = defaultDocumentFragment
    .childNodes[0] as parse5.DefaultTreeTextNode;

defaultTextNode.sourceCodeLocation!; // $ExpectType Location
defaultTextNode.nodeName; // $ExpectType "#text"
defaultTextNode.value; // $ExpectType string
defaultTextNode.parentNode; // $ExpectType DefaultTreeParentNode

const defaultCommentNode = defaultDocumentFragment
    .childNodes[0] as parse5.DefaultTreeCommentNode;

defaultCommentNode.sourceCodeLocation!; // $ExpectType Location
defaultCommentNode.nodeName; // $ExpectType "#comment"
defaultCommentNode.data; // $ExpectType string
defaultCommentNode.parentNode; // $ExpectType DefaultTreeParentNode

const adapter = defaultAdapter;

adapter.createDocument(); // $ExpectType Document
adapter.createDocumentFragment(); // $ExpectType DocumentFragment
adapter.createElement("div", "namespace", [{ name: "someAttr", value: "42" }]); // $ExpectType Element
adapter.createCommentNode("foo"); // $ExpectType CommentNode

adapter.appendChild(document, element);
adapter.insertBefore(document, element, element);
adapter.setTemplateContent(element, fragment);

adapter.getTemplateContent(element); // $ExpectType DocumentFragment

adapter.setDocumentType(document, "name", "publicId", "systemId");
adapter.setDocumentMode(document, "quirks");

adapter.getDocumentMode(document); // $ExpectType DocumentMode

adapter.detachNode(element);
adapter.insertText(element, "text");
adapter.insertTextBefore(document, "text", element);
adapter.adoptAttributes(element, [{ name: "someAttr", value: "42" }]);

adapter.getFirstChild(element); // $ExpectType Node
adapter.getChildNodes(element)[0]; // $ExpectType Node
adapter.getParentNode(element); // $ExpectType ParentNode
adapter.getAttrList(element)[0]; // $ExpectType Attribute
adapter.getTagName(element); // $ExpectType string
adapter.getNamespaceURI(element); // $ExpectType string
adapter.getTextNodeContent(defaultTextNode); // $ExpectType string
adapter.getCommentNodeContent(defaultCommentNode); // $ExpectType string
adapter.getDocumentTypeNodeName(defaultDoctype); // $ExpectType string
adapter.getDocumentTypeNodePublicId(defaultDoctype); // $ExpectType string
adapter.getDocumentTypeNodeSystemId(defaultDoctype); // $ExpectType string
adapter.isTextNode(element); // $ExpectType boolean
adapter.isCommentNode(element); // $ExpectType boolean
adapter.isDocumentTypeNode(element); // $ExpectType boolean
adapter.isElementNode(element); // $ExpectType boolean
