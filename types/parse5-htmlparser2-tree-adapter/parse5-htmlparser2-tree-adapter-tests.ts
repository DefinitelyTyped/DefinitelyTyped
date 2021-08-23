import * as parse5 from "parse5";
import treeAdapter = require('parse5-htmlparser2-tree-adapter');

// htmlparser2 AST
const htmlparser2Document = parse5.parse("<html>", {
    treeAdapter
});

htmlparser2Document; // $ExpectType Document
htmlparser2Document.name; // $ExpectType "root"
htmlparser2Document.type; // $ExpectType "root"
htmlparser2Document["x-mode"]; // $ExpectType DocumentMode

const htmlparser2Node = htmlparser2Document as treeAdapter.Node;

htmlparser2Node.next; // $ExpectType Node
htmlparser2Node.nextSibling; // $ExpectType Node
htmlparser2Node.nodeType; // $ExpectType number
htmlparser2Node.parent; // $ExpectType ParentNode
htmlparser2Node.parentNode; // $ExpectType ParentNode
htmlparser2Node.prev; // $ExpectType Node
htmlparser2Node.previousSibling; // $ExpectType Node
htmlparser2Node.type; // $ExpectType string

const htmlparser2ParentNode = htmlparser2Document as treeAdapter.ParentNode;

htmlparser2ParentNode; // $ExpectType ParentNode
htmlparser2ParentNode.childNodes[0]; // $ExpectType Node
htmlparser2ParentNode.children[0]; // $ExpectType Node
htmlparser2ParentNode.firstChild; // $ExpectType Node
htmlparser2ParentNode.lastChild; // $ExpectType Node

const htmlparser2Doctype = htmlparser2Document.childNodes[0] as treeAdapter.DocumentType;

htmlparser2Doctype; // $ExpectType DocumentType
htmlparser2Doctype.data; // $ExpectType string
htmlparser2Doctype.name; // $ExpectType "!doctype"
htmlparser2Doctype["x-name"]; // $ExpectType string
htmlparser2Doctype["x-publicId"]; // $ExpectType string
htmlparser2Doctype["x-systemId"]; // $ExpectType string

const htmlparser2Element = htmlparser2Document.childNodes[0] as treeAdapter.Element;

htmlparser2Element; // $ExpectType Element
htmlparser2Element.attribs["someAttr"]; // $ExpectType string
htmlparser2Element["x-attribsNamespace"]["someAttr"]; // $ExpectType string
htmlparser2Element["x-attribsPrefix"]["someAttr"]; // $ExpectType string
htmlparser2Element.namespace; // $ExpectType string
htmlparser2Element.tagName; // $ExpectType string
htmlparser2Element.sourceCodeLocation!; // $ExpectType ElementLocation

const htmlparser2TextNode = htmlparser2Document.childNodes[0] as treeAdapter.TextNode;

htmlparser2TextNode.data; // $ExpectType string
htmlparser2TextNode.nodeValue; // $ExpectType string
htmlparser2TextNode.sourceCodeLocation!; // $ExpectType Location

const htmlparser2CommentNode = htmlparser2Document.childNodes[0] as treeAdapter.CommentNode;

htmlparser2CommentNode.data; // $ExpectType string
htmlparser2CommentNode.nodeValue; // $ExpectType string
htmlparser2CommentNode.sourceCodeLocation!; // $ExpectType Location
