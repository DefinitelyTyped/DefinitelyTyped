import clone from "./clone.js";
import createElement from "./createElement.js";
import Element, { Node } from "./Element.js";
import equal, { attrsEqual, childrenEqual, nameEqual } from "./equal.js";
import { escapeXML, escapeXMLText, unescapeXML, unescapeXMLText } from "./escape.js";
import { isElement, isNode, isText } from "./is.js";
import JSONify, { ElementJson } from "./JSONify.js";
import parse from "./parse.js";
import Parser, { ParserOptions } from "./Parser.js";
import stringify from "./stringify.js";
import tag from "./tag.js";
import tagString from "./tagString.js";

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
