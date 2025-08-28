import clone = require("./clone.js");
import createElement = require("./createElement.js");
import Element = require("./Element.js");
import equal = require("./equal.js");
import escape = require("./escape.js");
import is = require("./is.js");
import JSONify = require("./JSONify.js");
import parse = require("./parse.js");
import Parser = require("./Parser.js");
import stringify = require("./stringify.js");
import tag = require("./tag.js");
import tagString = require("./tagString.js");

import attrsEqual = equal.attrsEqual;
import childrenEqual = equal.childrenEqual;
import nameEqual = equal.nameEqual;
import escapeXML = escape.escapeXML;
import unescapeXML = escape.unescapeXML;
import escapeXMLText = escape.escapeXMLText;
import unescapeXMLText = escape.unescapeXMLText;
import isNode = is.isNode;
import isElement = is.isElement;
import isText = is.isText;
import ParserOptions = Parser.ParserOptions;
import ElementJson = JSONify.ElementJson;
import Node = Element.Node;

export {
    attrsEqual,
    childrenEqual,
    clone,
    createElement,
    Element,
    ElementJson,
    equal,
    escapeXML,
    escapeXMLText,
    isElement,
    isNode,
    isText,
    JSONify,
    nameEqual,
    Node,
    parse,
    Parser,
    ParserOptions,
    stringify,
    tag,
    tagString,
    unescapeXML,
    unescapeXMLText,
};
