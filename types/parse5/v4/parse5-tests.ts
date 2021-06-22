import * as parse5 from "parse5";

// Shorthands
// parse
const document = parse5.parse("<html>");

document; // $ExpectType Document

const defaultAdapter = new Object() as parse5.AST.TreeAdapter;

parse5.parse("<html>", {}); // $ExpectType Document
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
parse5.parseFragment("<div>", { treeAdapter: defaultAdapter });

const element = (parse5.parseFragment(
    "<div>"
)) as parse5.AST.Element;

parse5.parseFragment(element, "<div>");
parse5.parseFragment(element, "<div>", {});
parse5.parseFragment(element, "<div>", {
    treeAdapter: defaultAdapter
});

// serialize
const html = parse5.serialize(element);

html; // $ExpectType string

parse5.serialize(element, { treeAdapter: defaultAdapter });
parse5.serialize(element, { treeAdapter: defaultAdapter });


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
adapter.isTextNode(element); // $ExpectType boolean
adapter.isCommentNode(element); // $ExpectType boolean
adapter.isDocumentTypeNode(element); // $ExpectType boolean
adapter.isElementNode(element); // $ExpectType boolean
