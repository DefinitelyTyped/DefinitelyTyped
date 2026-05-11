import clone from "./clone";
import createElement from "./createElement";
import Element, { Node } from "./Element";
import equal, { attrsEqual, childrenEqual, nameEqual } from "./equal";
import { escapeXML, escapeXMLText, unescapeXML, unescapeXMLText } from "./escape";
import { isElement, isNode, isText } from "./is";
import JSONify, { ElementJson } from "./JSONify";
import parse from "./parse";
import Parser, { ParserOptions } from "./Parser";
import stringify from "./stringify";
import tag from "./tag";
import tagString from "./tagString";

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
